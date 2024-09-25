import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [seedPlanted, setSeedPlanted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (seedPlanted) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const canvasWidth = 600;
      const canvasHeight = 400;

      const seed = { x: canvasWidth / 2, y: 50, size: 10, color: '#8B4513' }; // Seed properties
      const soilLevel = 350; // Y-coordinate where soil starts
      let seedY = seed.y;

      const maxPlantHeight = 100; // Moved outside to be accessible in drawLeaves()

      function clearCanvas() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      }

      function drawBackground() {
        // Sky
        ctx.fillStyle = '#87CEEB'; // Sky blue
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Soil
        ctx.fillStyle = '#8B4513'; // Brown soil
        ctx.fillRect(0, soilLevel, canvasWidth, canvasHeight - soilLevel);
      }

      function drawSeed() {
        ctx.fillStyle = seed.color;
        ctx.fillRect(seed.x - seed.size / 2, seedY - seed.size / 2, seed.size, seed.size);
      }

      function plantSeed() {
        const seedFallInterval = setInterval(() => {
          if (seedY < soilLevel - seed.size / 2) {
            seedY += 4; // Seed falling speed
            clearCanvas();
            drawBackground();
            drawSeed();
          } else {
            clearInterval(seedFallInterval);
            growPlant();
          }
        }, 30);
      }

      function growPlant() {
        let plantHeight = 0;
        const stemWidth = 6;
        const stemX = seed.x - stemWidth / 2;

        const plantGrowInterval = setInterval(() => {
          if (plantHeight < maxPlantHeight) {
            plantHeight += 2; // Plant growth speed
            clearCanvas();
            drawBackground();
            drawSeed();

            // Draw stem
            ctx.fillStyle = '#228B22'; // Green color
            ctx.fillRect(stemX, soilLevel - plantHeight, stemWidth, plantHeight);
          } else {
            clearInterval(plantGrowInterval);
            drawFinalPlant();
          }
        }, 30);
      }

      function drawFinalPlant() {
        clearCanvas();
        drawBackground();
        drawSeed();

        // Draw stem
        const stemWidth = 6;
        const stemX = seed.x - stemWidth / 2;
        ctx.fillStyle = '#228B22'; // Green color
        ctx.fillRect(stemX, soilLevel - maxPlantHeight, stemWidth, maxPlantHeight);

        // Draw leaves
        drawLeaves();
      }

      function drawLeaves() {
        // Coordinates for the top of the stem
        const stemTopX = seed.x;
        const stemTopY = soilLevel - maxPlantHeight;

        ctx.fillStyle = '#228B22'; // Green color

        // Left leaf
        ctx.beginPath();
        ctx.ellipse(
          stemTopX - 15, // Move left leaf to the left
          stemTopY + 10, // Slightly lower than stem top
          10, // Radius X
          20, // Radius Y
          -Math.PI / 4, // Rotation
          0,
          2 * Math.PI
        );
        ctx.fill();

        // Right leaf
        ctx.beginPath();
        ctx.ellipse(
          stemTopX + 15, // Move right leaf to the right
          stemTopY + 10, // Slightly lower than stem top
          10, // Radius X
          20, // Radius Y
          Math.PI / 4, // Rotation
          0,
          2 * Math.PI
        );
        ctx.fill();

        const middleLeafX = stemTopX + 15; // Slightly to the right
        const middleLeafY = soilLevel - maxPlantHeight / 2; // Middle of the stem

        ctx.beginPath();
        ctx.ellipse(
          middleLeafX, // X position
          middleLeafY, // Y position
          8, // Radius X
          16, // Radius Y
          Math.PI / 4, // Rotation
          0,
          2 * Math.PI
        );
        ctx.fill();
      }

      // Start the animation
      clearCanvas();
      drawBackground();
      drawSeed();
      plantSeed();
    }
  }, [seedPlanted]);

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">GAIA'S GARDEN</h1>
        <p className="subtitle">
          Wellness, streetwear, and community events. Made with ❤️ in Brooklyn.
        </p>

        <p className="launch-text">
          Plant your seed of wellness. Launching soon.
        </p>

        {!seedPlanted ? (
          <button
            onClick={() => setSeedPlanted(true)}
            className="plant-button"
          >
            Plant my seed
          </button>
        ) : (
          <canvas
            ref={canvasRef}
            width="600"
            height="400"
            className="canvas"
          ></canvas>
        )}
      </div>
    </div>
  );
}
