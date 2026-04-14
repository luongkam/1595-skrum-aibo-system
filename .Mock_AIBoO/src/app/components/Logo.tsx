export function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dimensions = {
    sm: { width: 95, height: 34, fontSize: 22, bigFontSize: 26, dotSize: 2.8, lineHeight: 10, lineWidth: 3.73, dotY: 10, lineStartY: 18, iX: 22.635, dotX: 24.5, bX: 29, oX: 45, bigOX: 59 },
    md: { width: 130, height: 46, fontSize: 28, bigFontSize: 33, dotSize: 3.6, lineHeight: 13, lineWidth: 4.8, dotY: 10, lineStartY: 15, iX: 27.6, dotX: 30, bX: 36, oX: 54, bigOX: 70 },
    lg: { width: 150, height: 56, fontSize: 34, bigFontSize: 40, dotSize: 4, lineHeight: 16, lineWidth: 5.33, dotY: 10, lineStartY: 12, iX: 31.835, dotX: 34.5, bX: 42, oX: 62, bigOX: 80 }
  };

  const { width, height, fontSize, bigFontSize, dotSize, lineHeight, lineWidth, dotY, lineStartY, iX, dotX, bX, oX, bigOX } = dimensions[size];

  return (
    <svg width={width} height={height} viewBox="0 0 110 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
            .logo-text {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              fill: #000000;
            }
            .logo-text-big {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              font-weight: 700;
              fill: #000000;
            }
          `}
        </style>
      </defs>
      
      {/* A - slightly bigger */}
      <text x="2" y="28" className="logo-text-big" style={{ fontSize: `${bigFontSize}px` }}>A</text>
      
      {/* Red dot above i - positioned at top */}
      <circle cx={dotX} cy={dotY} r={dotSize} fill="#FF4D4F" />
      
      {/* i - vertical line below the red dot */}
      <rect x={iX} y={lineStartY} width={lineWidth} height={lineHeight} fill="#000000" rx="1" />
      
      {/* B */}
      <text x={bX} y="28" className="logo-text" style={{ fontSize: `${fontSize}px` }}>B</text>
      
      {/* o */}
      <text x={oX} y="28" className="logo-text" style={{ fontSize: `${fontSize}px` }}>o</text>
      
      {/* O */}
      <text x={bigOX} y="28" className="logo-text" style={{ fontSize: `${fontSize}px` }}>O</text>
    </svg>
  );
}

export function LogoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#1677FF" stroke="#1677FF" strokeWidth="1" />
      <text 
        x="12" 
        y="17" 
        textAnchor="middle" 
        fill="white" 
        fontSize="14" 
        fontWeight="700"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      >
        Ai
      </text>
      <circle cx="15" cy="6" r="2" fill="#FF4D4F" />
    </svg>
  );
}