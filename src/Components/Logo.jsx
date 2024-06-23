import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import LogoAnimation from "/public/Logo.json"; // استيراد الملف JSON
console.log(LogoAnimation);
const Main = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      animationData: LogoAnimation, // استخدام المتغير الذي يحتوي على بيانات الصورة من الملف JSON
      loop: false,
      autoplay: true,
    });
  }, []);

  return <div ref={containerRef}></div>;
};

export default Main;
