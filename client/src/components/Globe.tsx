import React, { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const options: COBEOptions = {
      devicePixelRatio: 2,
      width: 200 * 2,
      height: 200 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [24.8607, 67.0011], size: 0.08 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    };

    const globe = createGlobe(canvasRef.current, options);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        style={{ width: 200, height: 200, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};

export default Globe;
