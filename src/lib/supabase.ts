import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey,  {
  auth: {
    flowType: 'pkce',
    detectSessionInUrl: true,
  },
})

export interface User {
    id:string
    email: string
    name: string
    avatar_url?: string
    is_guest: boolean
    last_login_at: string
    created_at: string
    updated_at: string
}

export interface ContactSubmission {
  id: string
  user_id?: string
  name: string
  email: string
  subject: string
  message: string
  ip_address?: string
  user_agent?: string
  country?: string
  city?: string
  region?: string
  latitude?: number
  longitude?: number
  timezone?: string
  is_processed: boolean
  created_at: string
}

export interface Project {
  id: string
  title: string
  description: string
  image_url?: string
  project_url?: string
  github_url?: string
  technologies: string[]
  category: string
  featured: boolean
  completed_at?: string
  user_id?: string
  created_at: string
  updated_at: string
}