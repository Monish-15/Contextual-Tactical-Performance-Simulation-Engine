import React, { useEffect, useRef } from 'react';

const ProfessionalHeatmap = ({ points, width, height }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // 1. Draw "Shadow" points
        // This creates the density mask
        const shadowCanvas = document.createElement('canvas');
        shadowCanvas.width = width;
        shadowCanvas.height = height;
        const sctx = shadowCanvas.getContext('2d');

        points.forEach(point => {
            const x = (parseFloat(point.x) / 100) * width;
            const y = (parseFloat(point.y) / 100) * height;
            const radius = 60; // Spread of each point

            const gradient = sctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(0,0,0,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            sctx.fillStyle = gradient;
            sctx.globalAlpha = point.intensity === 'extreme' ? 0.8 : point.intensity === 'high' ? 0.5 : 0.2;
            sctx.beginPath();
            sctx.arc(x, y, radius, 0, Math.PI * 2);
            sctx.fill();
        });

        // 2. Colorize the density map
        const imageData = sctx.getImageData(0, 0, width, height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3]; // The density at this pixel (0-255)

            if (alpha > 0) {
                // Map alpha to colors
                // Low: Cyan/Green | Mid: Yellow | High: Red
                let r, g, b;

                if (alpha < 80) { // Low density (Blue)
                    r = 59; g = 130; b = 246;
                } else if (alpha < 160) { // Mid density (Yellow)
                    r = 234; g = 179; b = 8;
                } else { // High density (Red)
                    r = 239; g = 68; b = 68;
                }

                data[i] = r;
                data[i + 1] = g;
                data[i + 2] = b;
                data[i + 3] = alpha * 0.8; // Set transparency

            }
        }

        ctx.putImageData(imageData, 0, 0);
    }, [points, width, height]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="absolute inset-0 pointer-events-none"
            style={{ filter: 'blur(8px)' }} // Soften the edges for that organic look
        />
    );
};

export default ProfessionalHeatmap;
