import React, { useEffect, useRef } from 'react';

const PacmanWithSpeechBubble = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw Pac-Man-like shape with smaller mouth
    function drawPacman() {
      ctx.beginPath();
      // Adjust the arc angles to make the mouth smaller, and fit the smaller canvas
      ctx.arc(100, 85, 50, 0.1 * Math.PI, 1.9 * Math.PI); 
      ctx.lineTo(100, 85);
      ctx.closePath();
      ctx.fillStyle = '#7caef4';  // Light blue
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Draw eye
      ctx.beginPath();
      ctx.arc(110, 60, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';  // Black for eye
      ctx.fill();
      ctx.stroke();
    }

    // Draw Speech Bubble
    function drawSpeechBubble() {
      ctx.beginPath();
      ctx.moveTo(150, 10);  // Top left of speech bubble
      ctx.quadraticCurveTo(300, 25, 300, 85);  // Top right curve
      ctx.quadraticCurveTo(300, 150, 230, 150);  // Bottom right curve
      ctx.lineTo(200, 150);  // Bottom edge
      ctx.lineTo(180, 160);  // Tail of the bubble
      ctx.lineTo(190, 135);  // Tail back up
      ctx.quadraticCurveTo(150, 115, 150, 85);  // Left side curve
      ctx.closePath();
      ctx.fillStyle = '#ffffff';  // White for bubble
      ctx.fill();
      ctx.stroke();

      // Add text inside bubble
      ctx.fillStyle = '#000000';  // Black text
      ctx.font = 'bold 14px Arial';
      ctx.fillText("We’d love to", 170, 70);
      ctx.fillText("hear from you!",170, 95);
    }

    // Call functions to draw the scene
    drawPacman();
    drawSpeechBubble();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={300} height={170} style={{ }}></canvas>
    </div>
  );
};

export default PacmanWithSpeechBubble;
