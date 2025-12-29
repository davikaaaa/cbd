import { useEffect, useRef } from 'react';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && videoRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.4;
        videoRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover scale-110"
        style={{ willChange: 'transform' }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsla(270, 30%, 10%, 0.5) 0%, hsla(270, 30%, 10%, 0.7) 50%, hsla(270, 30%, 10%, 0.85) 100%)'
        }}
      />
    </div>
  );
};

export default VideoBackground;
