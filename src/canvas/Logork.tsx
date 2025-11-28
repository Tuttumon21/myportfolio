import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import logoImage from '../assets/images/logork.webp';

const Logork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 15;


    // Scan image and extract points
    const img = new Image();
    img.src = logoImage;
    img.onload = () => {
      const tempCanvas = document.createElement('canvas');
      const ctx = tempCanvas.getContext('2d');
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

      // Create particles from logo points
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(logoPoints.length * 3);
      
      logoPoints.forEach((point, i) => {
        positions[i * 3] = point.x;
        positions[i * 3 + 1] = point.y;
        positions[i * 3 + 2] = point.z;
      });

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.03,
        transparent: true,
        opacity: 0.8,
      });

      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      // Create network connections
      const linePositions: number[] = [];
      const maxDistance = 0.3;

      for (let i = 0; i < logoPoints.length; i++) {
        for (let j = i + 1; j < Math.min(i + 20, logoPoints.length); j++) {
          const dist = logoPoints[i].distanceTo(logoPoints[j]);
          if (dist < maxDistance) {
            linePositions.push(logoPoints[i].x, logoPoints[i].y, logoPoints[i].z);
            linePositions.push(logoPoints[j].x, logoPoints[j].y, logoPoints[j].z);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: 0.15 
      });
      
      const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSegments);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        particleSystem.rotation.y += 0.01;
        lineSegments.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full bg-black" />;
};

export default Logork;
