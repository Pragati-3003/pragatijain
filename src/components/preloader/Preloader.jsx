import React, { useEffect } from 'react';
import './preloader.css';
import '../../assets/logo.gif'
const Preloader = () => {
  useEffect(() => {
    const preloadTime = setTimeout(() => {
      showPage();
    }, 2000);
    
    return () => clearTimeout(preloadTime);
  }, []);

  function showPage() {
    const preloaderElement = document.getElementById("preloader");
    if (preloaderElement) {
      preloaderElement.style.display = "none";
    }
  }

  return (
    <div 
      className="preloaderBg"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 99999999,
        width: "100%",
        height: "100%",
        left: 0,
        backgroundColor: "#0d0d0d"
      }}
      id="preloader">
      <div className="preloader"></div>
      <div className="preloader2">
      
      </div>
    </div>
  );
}

export default Preloader;
