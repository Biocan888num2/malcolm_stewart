// components/ParticlePills.js
"use client"; // Ensure this is at the top

import { useEffect } from 'react';
import * as THREE from 'three';

const ParticlePills = ({ children }) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = 'absolute'; 
    renderer.domElement.style.top = '0'; 
    renderer.domElement.style.left = '0'; 
    renderer.domElement.style.width = '100%'; 
    renderer.domElement.style.height = '100%';
    document.body.appendChild(renderer.domElement);

    // Handle window resize 
    const handleResize = () => { 
        camera.aspect = window.innerWidth / window.innerHeight; 
        camera.updateProjectionMatrix(); 
        renderer.setSize(window.innerWidth, window.innerHeight); 
    }; 
    
    window.addEventListener('resize', handleResize);

    // Load multiple pill textures
    const textureLoader = new THREE.TextureLoader();
    const pillTextures = [
      textureLoader.load('/images/particle_pills/barber.png'),
      textureLoader.load('/images/particle_pills/calculator.png'),
      textureLoader.load('/images/particle_pills/chakras.png'),
      textureLoader.load('/images/particle_pills/chef.png'),
      textureLoader.load('/images/particle_pills/claddagh.png'),
      textureLoader.load('/images/particle_pills/columns.png'),
      textureLoader.load('/images/particle_pills/dev_software.png'),
      textureLoader.load('/images/particle_pills/dumbbell.png'),
      textureLoader.load('/images/particle_pills/eagle.png'),
      textureLoader.load('/images/particle_pills/globe.png'),
      textureLoader.load('/images/particle_pills/greek_helmet.png'),
      textureLoader.load('/images/particle_pills/guitar_randy_v.png'),
      textureLoader.load('/images/particle_pills/temple.png'),
      textureLoader.load('/images/particle_pills/guitar_razorback.png'),
      textureLoader.load('/images/particle_pills/health_lotus.png'),
      textureLoader.load('/images/particle_pills/hockey.png'),
      textureLoader.load('/images/particle_pills/human_body.png'),
      textureLoader.load('/images/particle_pills/human_brain.png'),
      textureLoader.load('/images/particle_pills/human_digestive.png'),
      textureLoader.load('/images/particle_pills/lightning.png'),
      textureLoader.load('/images/particle_pills/mountains.png'),
      textureLoader.load('/images/particle_pills/pasta.png'),
      textureLoader.load('/images/particle_pills/pestle_mortar.png'),
      textureLoader.load('/images/particle_pills/sefirot.png'),
      textureLoader.load('/images/particle_pills/supps.png'),
      textureLoader.load('/images/particle_pills/tanakh.png'),
      textureLoader.load('/images/particle_pills/tcm_meridians.png'),
      textureLoader.load('/images/particle_pills/tree.png'),
      // Add more images as needed
    ];

    // Create and add particles for each texture
    pillTextures.forEach(texture => {
      const particles = new THREE.BufferGeometry();
      const particleCount = Math.floor(1000 / pillTextures.length);
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = Math.random() * 400 - 200; // x
        positions[i * 3 + 1] = Math.random() * 400 - 200; // y
        positions[i * 3 + 2] = Math.random() * 400 - 200; // z
      }

      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 22, // Increase the size of the particles
        map: texture,
        transparent: true,
        alphaTest: 0.5,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const particleSystem = new THREE.Points(particles, material);
      scene.add(particleSystem);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      scene.children.forEach(child => {
        if (child.isPoints) {
          child.rotation.y += 0.001;
        }
      });
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount 
    return () => { 
        window.removeEventListener('resize', handleResize); 
        document.body.removeChild(renderer.domElement); 
    };

  }, []);

    return ( 
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ pointerEvents: 'none' }}>
        {children} 
    </div> 
    );
};

export default ParticlePills;
