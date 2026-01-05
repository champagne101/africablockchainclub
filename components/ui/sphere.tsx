"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const PolygonBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const terrainRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create more organic polygonal shapes
    const createPolygonalTerrain = () => {
      const group = new THREE.Group();

      // More layers with varied shapes and colors
      const layers = [
        { 
          type: 'icosahedron', 
          size: 1.2, 
          detail: 1,
          color: new THREE.Color(0xfacc15), 
          opacity: 0.25, 
          y: -0.8,
          wireframe: true
        },
        { 
          type: 'dodecahedron', 
          size: 1.5, 
          detail: 0,
          color: new THREE.Color(0xca8a04), 
          opacity: 0.2, 
          y: 0,
          wireframe: true
        },
        { 
          type: 'octahedron', 
          size: 2.0, 
          detail: 0,
          color: new THREE.Color(0x713f12), 
          opacity: 0.15, 
          y: 0.8,
          wireframe: true
        },
        {
          type: 'tetrahedron',
          size: 1.0,
          detail: 0,
          color: new THREE.Color(0x4c1d95),
          opacity: 0.3,
          y: -1.2,
          wireframe: true
        }
      ];

      layers.forEach((layer, i) => {
        let geometry;
        
        switch(layer.type) {
          case 'icosahedron':
            geometry = new THREE.IcosahedronGeometry(layer.size, layer.detail);
            break;
          case 'dodecahedron':
            geometry = new THREE.DodecahedronGeometry(layer.size, layer.detail);
            break;
          case 'octahedron':
            geometry = new THREE.OctahedronGeometry(layer.size, layer.detail);
            break;
          case 'tetrahedron':
            geometry = new THREE.TetrahedronGeometry(layer.size, layer.detail);
            break;
          default:
            geometry = new THREE.IcosahedronGeometry(layer.size, layer.detail);
        }

        const material = new THREE.MeshBasicMaterial({
          color: layer.color,
          wireframe: layer.wireframe,
          transparent: true,
          opacity: layer.opacity,
          depthTest: true,
          depthWrite: false
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = layer.y;
        mesh.rotation.x = Math.PI / 4;
        mesh.rotation.y = Math.PI / 4 * i;
        
        // Add subtle position variations
        mesh.position.x = (Math.random() - 0.5) * 2;
        mesh.position.z = (Math.random() - 0.5) * 2;
        
        group.add(mesh);
      });

      return group;
    };

    terrainRef.current = createPolygonalTerrain();
    scene.add(terrainRef.current);

    // Add some subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (terrainRef.current) {
        // Rotate each mesh at different speeds
        terrainRef.current.children.forEach((mesh, i) => {
          mesh.rotation.x += 0.001 * (i + 1);
          mesh.rotation.y += 0.002 * (i + 1);
          
          // Add subtle pulsing effect
          if (i % 2 === 0) {
            mesh.scale.x = mesh.scale.y = mesh.scale.z = 
              1 + Math.sin(Date.now() * 0.001 * (i + 1)) * 0.05;
          }
        });
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Responsive handling
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current !== null) {
  cancelAnimationFrame(animationRef.current);
}

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
      // Clean up geometries and materials
      if (terrainRef.current) {
        terrainRef.current.traverse(child => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach(m => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-screen pointer-events-none z-0"
      style={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    />
  );
};

export default PolygonBackground;