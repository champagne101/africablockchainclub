"use client";

import { useEffect, useRef } from "react";

const codeSnippets = [
  `pragma solidity ^0.8.0;

contract MySmartContract {
    string public license = "MIT";
}`,
  `pragma solidity ^0.8.0;

contract Voting {
    mapping(address => bool) public voters;
    function vote() public {
        voters[msg.sender] = true;
    }
}`,
  `pragma solidity ^0.8.0;

contract Token {
    string public name = "ExampleToken";
    uint public totalSupply = 1000000;
}`,
  `pragma solidity ^0.8.0;

contract Registry {
    mapping(string => address) public records;
    function register(string memory name, address addr) public {
        records[name] = addr;
    }
}`,
];

export default function BlockchainCodeRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let codeBlocks: {
      x: number;
      y: number;
      width: number;
      height: number;
      speed: number;
      snippet: string;
    }[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initBlocks();
    };

    const initBlocks = () => {
      codeBlocks = [];
      const blockCount = Math.floor(canvas.width / 180);
      for (let i = 0; i < blockCount; i++) {
        codeBlocks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          width: 160,
          height: 80,
          speed: 0.4 + Math.random() * 0.5,
          snippet: codeSnippets[i % codeSnippets.length],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      codeBlocks.forEach((block) => {
        block.y += block.speed;
        if (block.y > canvas.height) {
          block.y = -block.height;
          block.x = Math.random() * canvas.width;
          block.snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }

        // Background of code block
        ctx.fillStyle = "rgba(10, 230, 36, 0.85)";
        ctx.fillRect(block.x, block.y, block.width, block.height);

        // Code lines
        const lines = block.snippet.split("\n");
        lines.forEach((line, i) => {
          const trimmed = line.trim();
          let color = "#f8f8f2"; // default

          if (/^pragma|contract|mapping|string|uint|public|function|memory|address|return/.test(trimmed)) {
            color = "#ff79c6"; // keywords
          } else if (/".*?"/.test(trimmed)) {
            color = "#f1fa8c"; // strings
          } else if (/\/\/.*/.test(trimmed)) {
            color = "#6272a4"; // comments
          }

          ctx.font = "11px monospace";
          ctx.fillStyle = color;
          ctx.fillText(trimmed, block.x + 6, block.y + 16 + i * 14);
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />;
}
