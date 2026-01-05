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
    // Zoom in by moving camera closer and making objects larger
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create larger, more numerous polygonal shapes
    const createPolygonalTerrain = () => {
      const group = new THREE.Group();

      // More layers with larger sizes to fill the view
      const layers = [
        { 
          type: 'icosahedron', 
          size: 2.5,  // Increased size
          detail: 1,
          color: new THREE.Color(0xfacc15), 
          opacity: 0.25, 
          y: -0.5,
          wireframe: true
        },
        { 
          type: 'dodecahedron', 
          size: 3.0,  // Increased size
          detail: 0,
          color: new THREE.Color(0xca8a04), 
          opacity: 0.2, 
          y: 0.3,
          wireframe: true
        },
        { 
          type: 'octahedron', 
          size: 3.5,  // Increased size
          detail: 0,
          color: new THREE.Color(0x713f12), 
          opacity: 0.15, 
          y: 0.8,
          wireframe: true
        },
        {
          type: 'tetrahedron',
          size: 2.0,  // Increased size
          detail: 0,
          color: new THREE.Color(0x4c1d95),
          opacity: 0.3,
          y: -1.0,
          wireframe: true
        },
        // Additional shapes to fill more space
        {
          type: 'icosahedron',
          size: 2.2,
          detail: 0,
          color: new THREE.Color(0x3b82f6),
          opacity: 0.2,
          y: 0.5,
          x: -1.5,
          wireframe: true
        },
        {
          type: 'octahedron',
          size: 2.8,
          detail: 0,
          color: new THREE.Color(0x10b981),
          opacity: 0.18,
          y: -0.7,
          x: 1.8,
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
        mesh.position.x = layer.x || (Math.random() - 0.5) * 3; // Spread out more
        mesh.position.z = (Math.random() - 0.5) * 2;
        
        // More dramatic initial rotations
        mesh.rotation.x = Math.PI / 4 * Math.random();
        mesh.rotation.y = Math.PI / 4 * Math.random();
        
        group.add(mesh);
      });

      return group;
    };

    terrainRef.current = createPolygonalTerrain();
    scene.add(terrainRef.current);

    // Animation loop with more movement
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (terrainRef.current) {
        terrainRef.current.children.forEach((mesh, i) => {
          // Different rotation speeds based on position
          mesh.rotation.x += 0.001 * (i % 3 + 1);
          mesh.rotation.y += 0.0015 * (i % 2 + 1);
          
          // Subtle floating movement
          mesh.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
          mesh.position.x += Math.cos(Date.now() * 0.001 + i) * 0.002;
        });
      }
      
      renderer.render(scene, camera);
    };

    animate();

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
}      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      
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
  className="absolute inset-0 w-full h-full pointer-events-none z-0"
  style={{ overflow: "hidden" }}
/>
  );
};

export default PolygonBackground;