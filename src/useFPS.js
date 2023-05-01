import { useState, useEffect } from "react";

const useFPS = () => {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastUpdateTime = performance.now();

    const update = () => {
      frameCount++;

      const now = performance.now();
      const deltaTime = now - lastUpdateTime;

      if (deltaTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastUpdateTime = now;
      }

      requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(update);
    };
  }, []);

  return fps;
};

export default useFPS;
