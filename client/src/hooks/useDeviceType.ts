import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width > 768 && width <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    updateDeviceType(); // Run on initial render
    window.addEventListener("resize", updateDeviceType); // Update on resize

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
