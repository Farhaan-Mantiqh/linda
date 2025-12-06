/* eslint-disable */
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface SimpleLogoLoopProps {
  logos: string[];
  logoWidth?: number;
  logoHeight?: number;
  speed?: number;
  gap?: number;
  paddingY?: number;
  className?: string;
}

const SimpleLogoLoop = ({
  logos,
  logoWidth: propLogoWidth,
  logoHeight = 40,
  speed = 120,
  gap = 32,
  paddingY = 8,
  className = "",
}: SimpleLogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0); 

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [maxNaturalWidth, setMaxNaturalWidth] = useState(0);

  // Load images to calculate max natural width
  const calculateMaxWidth = useCallback(async () => {
    if (logos.length === 0) return 0;

    const widths = await Promise.all(
      logos.map(
        (src) =>
          new Promise<number>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img.naturalWidth);
            img.onerror = () => resolve(0);
            img.src = src;
          })
      )
    );

    const maxWidth = Math.max(...widths);
    setMaxNaturalWidth(maxWidth);
    return maxWidth;
  }, [logos]);

  // Calculate width of one logo sequence
  const calculateSequenceWidth = useCallback(() => {
    if (logos.length === 0 || maxNaturalWidth === 0) return 0;

    const effectiveWidth =
      propLogoWidth || Math.min(maxNaturalWidth, logoHeight * 4);

    return logos.length * effectiveWidth + (logos.length - 1) * gap;
  }, [logos.length, maxNaturalWidth, propLogoWidth, logoHeight, gap]);

  // Update layout sizing
  const updateDimensions = useCallback(() => {
    if (!containerRef.current || maxNaturalWidth === 0) return;

    const sequenceWidth = calculateSequenceWidth();
    if (!sequenceWidth) return;

    setSeqWidth(sequenceWidth);

    const containerWidth = containerRef.current.clientWidth;
    const copies = Math.ceil(containerWidth / sequenceWidth) + 2;
    setCopyCount(Math.max(3, copies));
  }, [calculateSequenceWidth, maxNaturalWidth]);

  // ✅ Animation loop (no reset on hover)
  useEffect(() => {
    if (!trackRef.current || seqWidth === 0) return;

    let animationId: number;
    const velocity = speed / 60;

    const animate = () => {
      if (trackRef.current) {
        if (!isHovered) {
          offsetRef.current += velocity;
          offsetRef.current %= seqWidth;
        }

        trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [seqWidth, speed, isHovered]);

  // Initial setup
  useEffect(() => {
    let mounted = true;

    const init = async () => {
      await calculateMaxWidth();
      if (!mounted) return;

      setImagesLoaded(true);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => mounted && updateDimensions())
      );
    };

    init();
    return () => {
      mounted = false;
    };
  }, [calculateMaxWidth, updateDimensions]);

  // Resize listener
  useEffect(() => {
    const onResize = () => updateDimensions();
    window.addEventListener("resize", onResize);

    if (imagesLoaded) updateDimensions();

    return () => window.removeEventListener("resize", onResize);
  }, [updateDimensions, imagesLoaded]);

  // Calculated values
  const effectiveWidth =
    propLogoWidth ||
    (maxNaturalWidth
      ? Math.min(maxNaturalWidth, logoHeight * 4)
      : logoHeight * 2);

  const containerHeight = logoHeight + paddingY * 2;

  // Loading state
  if (!imagesLoaded) {
    return (
      <div
        className={`overflow-hidden ${className}`}
        style={{ height: `${containerHeight}px` }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse text-gray-400">Loading logos...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ height: `${containerHeight}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        className="flex h-full items-center will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        {Array.from({ length: copyCount }).map((_, copyIndex) => (
          <div
            key={copyIndex}
            className="flex h-full items-center"
            style={{ gap: `${gap}px` }}
          >
            {logos.map((src, index) => (
              <div
                key={`${copyIndex}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: `${effectiveWidth}px`,
                  height: `${logoHeight}px`,
                  paddingTop: `${paddingY}px`,
                  paddingBottom: `${paddingY}px`,
                }}
              >
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleLogoLoop;
