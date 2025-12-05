// Logork.tsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import logoImage from "../assets/images/logork.webp";

// MediaPipe
import { Hands } from "@mediapipe/hands";
import type { Results } from "@mediapipe/hands";
import { Camera as MediaPipeCamera } from "@mediapipe/camera_utils";

const Logork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Three.js refs
  const particleSystemRef = useRef<THREE.Points | null>(null);
  const lineSegmentsRef = useRef<THREE.LineSegments | null>(null);
  const threeCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // Hand-gesture targets
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);
  const targetZoomRef = useRef<number | null>(null);

  // MediaPipe refs
  const handsRef = useRef<Hands | null>(null);
  const mpCameraRef = useRef<MediaPipeCamera | null>(null);

  const [isCameraOn, setIsCameraOn] = useState(false);

  // ---------------------------
  // 1. Setup Three.js scene
  // ---------------------------
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 15;

    threeCameraRef.current = camera;
    rendererRef.current = renderer;

    // Scan image and extract points
    const img = new Image();
    img.src = logoImage;
    img.onload = () => {
      const tempCanvas = document.createElement("canvas");
      const ctx = tempCanvas.getContext("2d");
      if (!ctx) return;

      tempCanvas.width = img.width;
      tempCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, img.width, img.height);
      const logoPoints: THREE.Vector3[] = [];
      const samplingRate = 3;

      for (let y = 0; y < img.height; y += samplingRate) {
        for (let x = 0; x < img.width; x += samplingRate) {
          const i = (y * img.width + x) * 4;
          const alpha = imageData.data[i + 3];

          if (alpha > 128) {
            const px = (x / img.width - 0.5) * 4;
            const py = -(y / img.height - 0.5) * 4;
            const pz = (Math.random() - 0.5) * 0.5;
            logoPoints.push(new THREE.Vector3(px, py, pz));
          }
        }
      }

      // Particles
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(logoPoints.length * 3);

      logoPoints.forEach((point, i) => {
        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
      });

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.03,
        transparent: true,
        opacity: 0.8,
      });

      const particleSystem = new THREE.Points(
        particleGeometry,
        particleMaterial
      );
      scene.add(particleSystem);
      particleSystemRef.current = particleSystem;

      // Network lines
      const linePositions: number[] = [];
      const maxDistance = 0.3;

      for (let i = 0; i < logoPoints.length; i++) {
        for (let j = i + 1; j < Math.min(i + 20, logoPoints.length); j++) {
          const dist = logoPoints[i].distanceTo(logoPoints[j]);
          if (dist < maxDistance) {
            linePositions.push(
              logoPoints[i].x,
              logoPoints[i].y,
              logoPoints[i].z
            );
            linePositions.push(
              logoPoints[j].x,
              logoPoints[j].y,
              logoPoints[j].z
            );
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15,
      });

      const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSegments);
      lineSegmentsRef.current = lineSegments;

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        const ps = particleSystemRef.current;
        const ls = lineSegmentsRef.current;
        const cam = threeCameraRef.current;

        const targetRot = targetRotationRef.current;
        const targetZoom = targetZoomRef.current;

        if (ps && ls) {
          if (targetRot) {
            // Hand-driven rotation (smooth)
            ps.rotation.y = THREE.MathUtils.lerp(
              ps.rotation.y,
              targetRot.y,
              1
            );
            ps.rotation.x = THREE.MathUtils.lerp(
              ps.rotation.x,
              targetRot.x,
              1
            );
            ls.rotation.y = ps.rotation.y;
            ls.rotation.x = ps.rotation.x;
          } else {
            // Idle auto-rotation when no hand detected
            ps.rotation.y += 0.005;
            ls.rotation.y += 0.005;
          }
        }

        if (cam && targetZoom != null) {
          cam.position.z = THREE.MathUtils.lerp(
            cam.position.z,
            targetZoom,
            0.15
          );
        }

        renderer.render(scene, camera);
      };

      animate();
    };

    // Resize handling
    const handleResize = () => {
      const cam = threeCameraRef.current;
      const rendererInstance = rendererRef.current;
      if (!cam || !rendererInstance) return;

      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      rendererInstance.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []);

  // -------------------------------------
  // 2. Setup MediaPipe Hands & gestures
  // -------------------------------------
  useEffect(() => {
    if (!videoRef.current) return;

    // Called every time MediaPipe has a frame result
    const onResults = (results: Results) => {
      if (
        !results.multiHandLandmarks ||
        results.multiHandLandmarks.length === 0
      ) {
        // No hand => release control, particle will auto-rotate
        targetRotationRef.current = null;
        targetZoomRef.current = null;
        return;
      }

      // Use the first detected hand
      const hand = results.multiHandLandmarks[0];

      // Average of all landmarks = palm center / hand center-ish
      let avgX = 0;
      let avgY = 0;
      hand.forEach((lm) => {
        avgX += lm.x;
        avgY += lm.y;
      });
      avgX /= hand.length;
      avgY /= hand.length;

      // MediaPipe gives x,y in [0,1] (x: left->right, y: top->bottom)
      // Convert to [-1,1] for nicer mapping
      const nx = (avgX - 0.5) * 10; // left/right
      const ny = (avgY - 0.5) * 10; // up/down

      // Map hand movement to rotation (tweak multipliers as you like)
      const rotX = ny * 0.8; // move hand up/down to tilt
      const rotY = nx * 0.8; // move hand left/right to spin

      targetRotationRef.current = { x: rotX, y: rotY };

      // Zoom: distance between thumb tip (4) and index tip (8)
      const thumb = hand[4];
      const index = hand[8];
      const dx = thumb.x - index.x;
      const dy = thumb.y - index.y;
      const dist = Math.sqrt(dx * dx + dy * dy); // ~0.02 (pinched) to ~0.3 (open)

      // Map pinch distance to camera z:
      // closer fingers (small dist) => smaller z => zoom in
      const minDist = 0.8;
      const maxDist = 2;
      const t = THREE.MathUtils.clamp(
        (dist - minDist) / (maxDist - minDist),
        0,
        1
      );
      const minZ = 8; // zoom-in limit
      const maxZ = 25; // zoom-out limit
      const targetZ = THREE.MathUtils.lerp(minZ, maxZ, t);

      targetZoomRef.current = targetZ;
    };

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5,
    });

    hands.onResults(onResults);
    handsRef.current = hands;

    const videoElement = videoRef.current;

    const mpCamera = new MediaPipeCamera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: 640,
      height: 480,
    });

    mpCameraRef.current = mpCamera;

    return () => {
      mpCamera.stop();
      hands.close();
    };
  }, []);

  // --------------------------------------
  // 3. React to camera on/off state
  // --------------------------------------
  useEffect(() => {
    const mpCamera = mpCameraRef.current;

    if (!mpCamera) return;

    if (isCameraOn) {
      mpCamera.start();
    } else {
      mpCamera.stop();
      // When camera off, let particle auto-rotate again
      targetRotationRef.current = null;
      targetZoomRef.current = null;
    }
  }, [isCameraOn]);

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Hidden (or tiny) video – we only need it as input for MediaPipe */}
      <video ref={videoRef} className="hidden" playsInline autoPlay muted />

      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Camera toggle button (bottom-right) */}
      <button
        type="button"
        onClick={toggleCamera}
        className="absolute z-40 bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg font-light bg-white/10 text-white text-sm backdrop-blur border border-white/30 hover:bg-white/20 transition"
      >
        {isCameraOn ? "Turn Off" : "3D Interaction"}
      </button>
    </div>
  );
};

export default Logork;
