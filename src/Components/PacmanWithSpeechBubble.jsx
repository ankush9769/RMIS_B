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
      // Adjusted positions to move the speech bubble upwards and to the right of Pacman
      ctx.moveTo(160, 40);  // Top left of speech bubble, moved up from (170, 50)

      ctx.quadraticCurveTo(250, 5, 270, 55);  // Top right curve, slightly adjusted
      ctx.quadraticCurveTo(250, 120, 200, 120);  // Bottom right curve
      ctx.lineTo(165, 40);  // Bottom edge

      // Adjusted the tail position to come from below the bubble, not from the mouth area
      ctx.lineTo(200, 100);  // Tail of the bubble, adjusted further down
      ctx.lineTo(190, 105);  // Tail back up
      ctx.quadraticCurveTo(120, 85, 150, 85);  // Left side curve
      ctx.closePath();
      ctx.fillStyle = '#ffffff';  // White for bubble
      ctx.fill();
      ctx.stroke();

      // Add text inside bubble
      ctx.fillStyle = '#000000';  // Black text
      ctx.font = 'bold 14px Arial';
      ctx.fillText("We’d love to", 170, 50);  // Adjusted text position
      ctx.fillText("hear from you!", 170, 75);  // Adjusted text position
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
