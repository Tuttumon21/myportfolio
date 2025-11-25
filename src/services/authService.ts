import { supabase } from "../lib/supabase";
import type { User } from "../lib/supabase";


export class AuthService {
    static async signInWithGoogle() {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}`
                }
            })

            if (error) throw error
            return data
        } catch (error) {
            console.error('Google sign-in error:', error)
            throw error
        }
    }
    static async handleAuthCallback() {
        try {
            // Get current session (Supabase handles OAuth automatically)
            const { data: { session }, error: sessionError } = await supabase.auth.getSession()

            if (sessionError) throw sessionError

            if (!session?.user) {
                return null;
            }
            // 2. Check if user exists in our custom users table
            const { data: existingUser, error: userError } = await supabase
                .from('users')
                .select('*')
                .eq('email', session.user.email)
                .maybeSingle(); // 👈 safer than .single()

            if (userError) {
                throw userError;
            }

            let userData: User;

            if (!existingUser) {
                // 3. Create new user in our custom users table
                const { data: newUser, error: insertError } = await supabase
                    .from('users')
                    .insert({
                        id: session.user.id,
                        email: session.user.email,
                        name:
                            session.user.user_metadata.full_name ||
                            session.user.user_metadata.name ||
                            session.user.email?.split('@')[0] ||
                            'User',
                            provider:'google',
                        avatar_url:
                            session.user.user_metadata.avatar_url ||
                            session.user.user_metadata.picture,
                        metadata: session.user.user_metadata,
                        phone:session.user.phone,
                        last_sign_in: new Date().toISOString(),
                    })
                    .select()
                    .single();

                if (insertError) throw insertError;
                userData = newUser as User;
            } else {
                // 4. Update last login time
                const { data: updatedUser, error: updateError } = await supabase
                    .from('users')
                    .update({ last_sign_in: new Date().toISOString() })
                    .eq('id', existingUser.id)
                    .select()
                    .single();

                if (updateError) throw updateError;
                userData = updatedUser as User;
            }

            return userData;
        } catch (error) {
            console.error('Auth callback error:', error);
            throw error;
        }
    }


    static async getCurrentUser(): Promise<User | null> {
        try {
            const { data: { session }, error } = await supabase.auth.getSession()

            if (error) throw error

            if (session?.user) {
                const { data: user, error: userError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', session.user.id)
                    .single()

                if (userError) throw userError
                return user
            }

            return null
        } catch (error) {
            console.error('Get current user error:', error)
            return null
        }
    }

    static async signOut() {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error
        } catch (error) {
            console.error('Sign out error:', error)
            throw error
        }
    }

    static async createGuestUser(email: string, name: string): Promise<User> {
        try {
            // Generate a unique ID for guest users
            const guestId = `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

            const { data: guestUser, error } = await supabase
                .from('users')
                .insert({
                    id: guestId,
                    email: email,
                    name: name,
                    is_guest: true,
                    last_sign_in: new Date().toISOString()
                })
                .select()
                .single()

            if (error) throw error
            return guestUser
        } catch (error) {
            console.error('Create guest user error:', error)
            throw error
        }
    }

    static async updateUserProfile(userId: string, updates: Partial<User>) {
        try {
            const { data, error } = await supabase
                .from('users')
                .update(updates)
                .eq('id', userId)
                .select()
                .single()

            if (error) throw error
            return data
        } catch (error) {
            console.error('Update user profile error:', error)
            throw error
        }
    }
}