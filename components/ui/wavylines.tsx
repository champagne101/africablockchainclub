import React, { useEffect, useRef } from 'react';

interface WavyLinesProps {
  lineCount?: number;
  height?: number;
  lineWidth?: number;
  amplitude?: number;
  frequency?: number;
}

const WavyLines: React.FC<WavyLinesProps> = ({
  lineCount = 5,
  height = 150,
  lineWidth = 2,
  amplitude = 20,
  frequency = 0.02
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const wavesRef = useRef<Array<{
    speed: number;
    color: string;
    offset: number;
    yOffset: number;
  }>>([]);

  // Color interpolation function
  const interpolateColor = (ratio: number) => {
    const white = [255, 255, 255];
    const yellow = [255, 230, 0];
    
    return `rgb(
      ${Math.round(white[0] + (yellow[0] - white[0]) * ratio)},
      ${Math.round(white[1] + (yellow[1] - white[1]) * ratio)},
      ${Math.round(white[2] + (yellow[2] - white[2]) * ratio)}
    )`;
  };

  // Initialize wave parameters
  const initWaves = () => {
    const waves = [];
    for (let i = 0; i < lineCount; i++) {
      const ratio = i / (lineCount - 1); // 0-1 from first to last line
      waves.push({
        speed: 0.02 + (0.08 * ratio),
        color: interpolateColor(ratio),
        offset: Math.random() * 100,
        yOffset: (height / lineCount) * i
      });
    }
    wavesRef.current = waves;
  };

  const drawWaves = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    wavesRef.current.forEach(wave => {
      ctx.beginPath();
      
      // Draw the smooth wave
      for (let x = 0; x < canvas.width; x += 2) {
        const y = (
          Math.sin(x * frequency + wave.offset) * amplitude + 
          wave.yOffset
        );
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      
      // Update the offset for animation
      wave.offset += wave.speed;
    });

    animationRef.current = requestAnimationFrame(drawWaves);
  };

  useEffect(() => {
    initWaves();
    drawWaves();

    const handleResize = () => {
      if (canvasRef.current) {
        cancelAnimationFrame(animationRef.current!);
        drawWaves();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener('resize', handleResize);
    };
  }, [lineCount, height, lineWidth, amplitude, frequency]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        width: '100%',
        display: 'block',
        backgroundColor: 'transparent',
        margin: '20px 0'
      }}
      height={height}
    />
  );
};

export default WavyLines;