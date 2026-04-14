interface AIBoOCharacterProps {
  withCape?: boolean;
  hidePointer?: boolean;
  mood?: 'happy' | 'neutral' | 'angry';
  pose?: 'standing' | 'flying' | 'reading';
  size?: number;
}

export function AIBoOCharacter({ 
  withCape = false, 
  hidePointer = false, 
  mood = 'happy',
  pose = 'standing',
  size = 136
}: AIBoOCharacterProps) {
  // 表情に応じた目と口の変更
  const getEyeStyle = () => {
    if (mood === 'angry') {
      return {
        eyeColor: '#ff4d4f',
        eyeClass: 'aiboo-eyes-angry'
      };
    } else if (mood === 'neutral') {
      return {
        eyeColor: '#faad14',
        eyeClass: 'aiboo-eyes-neutral'
      };
    }
    return {
      eyeColor: '#1677ff',
      eyeClass: 'aiboo-eyes'
    };
  };

  const getMouthPath = () => {
    if (mood === 'angry') {
      return 'M 85 72 Q 100 66 115 72'; // 怒った口（逆さ）
    } else if (mood === 'neutral') {
      return 'M 85 70 L 115 70'; // 真っ直ぐな口
    }
    return 'M 85 70 Q 100 78 115 70'; // 笑顔
  };

  const eyeStyle = getEyeStyle();
  const mouthPath = getMouthPath();

  // Standing pose (default)
  if (pose === 'standing') {
    return (
      <div className="shrink-0 relative" style={{ width: size, height: size }}>
        <svg className="size-full aiboo-float" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cape - behind the character */}
          {withCape && (
            <g className="aiboo-cape">
              <path 
                d="M 70 90 Q 50 120, 45 160 Q 50 140, 60 120 L 70 90 Z" 
                fill="url(#capeGradient)" 
                stroke="#ff4d4f" 
                strokeWidth="2"
              />
              <path 
                d="M 130 90 Q 150 120, 155 160 Q 150 140, 140 120 L 130 90 Z" 
                fill="url(#capeGradient)" 
                stroke="#ff4d4f" 
                strokeWidth="2"
              />
            </g>
          )}
          
          {/* Body */}
          <rect x="60" y="80" width="80" height="90" rx="15" fill="url(#bodyGradient)" stroke="#1677ff" strokeWidth="3"/>
          
          {/* Head */}
          <rect x="70" y="30" width="60" height="60" rx="10" fill="url(#headGradient)" stroke="#1677ff" strokeWidth="3"/>
          
          {/* Eyes with blink animation */}
          <g className={eyeStyle.eyeClass}>
            <circle cx="85" cy="55" r="8" fill={eyeStyle.eyeColor}/>
            <circle cx="115" cy="55" r="8" fill={eyeStyle.eyeColor}/>
            <circle cx="87" cy="53" r="3" fill="white" className="aiboo-eye-shine"/>
            <circle cx="117" cy="53" r="3" fill="white" className="aiboo-eye-shine"/>
          </g>
          
          {/* Smile */}
          <path d={mouthPath} stroke="#1677ff" strokeWidth="3" strokeLinecap="round" fill="none" className="aiboo-smile"/>
          
          {/* Antenna with light */}
          <line x1="100" y1="30" x2="100" y2="15" stroke="#1677ff" strokeWidth="3"/>
          <circle cx="100" cy="12" r="5" fill="#ff4d4f" className="aiboo-antenna-light"/>
          <circle cx="100" cy="12" r="5" fill="#ff4d4f" opacity="0.5" className="animate-ping"/>
          <circle cx="100" cy="12" r="8" fill="#ff4d4f" opacity="0.3" className="aiboo-antenna-glow"/>
          
          {/* Left Arm (Fixed down) */}
          <rect x="35" y="85" width="25" height="50" rx="12" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2"/>
          <circle cx="47" cy="140" r="8" fill="#ffd700" stroke="#1677ff" strokeWidth="2"/>
          
          {/* Right Arm - with or without pointer */}
          {!hidePointer ? (
            <g className="aiboo-left-arm" style={{ transformOrigin: '152px 85px' }}>
              {/* Upper arm */}
              <rect x="140" y="50" width="25" height="40" rx="12" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2"/>
              {/* Hand */}
              <circle cx="152" cy="45" r="8" fill="#ffd700" stroke="#1677ff" strokeWidth="2"/>
              
              {/* Pointer stick */}
              <g className="aiboo-pointer-stick">
                <line x1="152" y1="45" x2="152" y2="10" stroke="#8b4513" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="152" cy="10" r="4" fill="#ff4d4f"/>
                <circle cx="152" cy="10" r="2" fill="white" opacity="0.8"/>
                {/* Sparkle on pointer tip */}
                <circle cx="152" cy="10" r="3" fill="white" opacity="0.6" className="aiboo-pointer-sparkle"/>
              </g>
            </g>
          ) : (
            <g>
              {/* Right arm down when no pointer */}
              <rect x="140" y="85" width="25" height="50" rx="12" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2"/>
              <circle cx="152" cy="140" r="8" fill="#ffd700" stroke="#1677ff" strokeWidth="2"/>
            </g>
          )}
          
          {/* Chest Panel with Name Badge */}
          <rect x="75" y="100" width="50" height="40" rx="8" fill="#e6f7ff" stroke="#1677ff" strokeWidth="2"/>
          
          {/* AIBoO Name Badge on chest */}
          <rect x="80" y="107" width="40" height="14" rx="7" fill="url(#badgeGradient)"/>
          <text x="100" y="117" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">AIBoO</text>
          
          {/* Status indicator */}
          <circle cx="100" cy="128" r="3" fill="#52c41a" className="aiboo-status-light"/>
          <circle cx="100" cy="128" r="3" fill="#52c41a" opacity="0.5" className="animate-ping"/>
          
          {/* Legs */}
          <rect x="70" y="170" width="25" height="20" rx="10" fill="url(#legGradient)" stroke="#1677ff" strokeWidth="2"/>
          <rect x="105" y="170" width="25" height="20" rx="10" fill="url(#legGradient)" stroke="#1677ff" strokeWidth="2"/>
          
          {/* Shadow under legs */}
          <ellipse cx="100" cy="195" rx="35" ry="8" fill="black" opacity="0.2" className="aiboo-shadow"/>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e6f7ff"/>
              <stop offset="100%" stopColor="#bae7ff"/>
            </linearGradient>
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#91d5ff"/>
              <stop offset="100%" stopColor="#69c0ff"/>
            </linearGradient>
            <linearGradient id="armGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#91d5ff"/>
              <stop offset="100%" stopColor="#40a9ff"/>
            </linearGradient>
            <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#40a9ff"/>
              <stop offset="100%" stopColor="#1890ff"/>
            </linearGradient>
            <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677ff"/>
              <stop offset="100%" stopColor="#722ed1"/>
            </linearGradient>
            <linearGradient id="capeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4f"/>
              <stop offset="100%" stopColor="#ff7875"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Flying pose
  if (pose === 'flying') {
    return (
      <div className="shrink-0 relative" style={{ width: size, height: size }}>
        <svg className="size-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body - horizontal rectangular shape with rounded corners */}
          <rect x="100" y="65" width="80" height="60" rx="15" fill="url(#bodyGradient)" stroke="#1677ff" strokeWidth="3"/>
          
          {/* Head - side view, rectangular with rounded corners */}
          <rect x="175" y="55" width="50" height="50" rx="10" fill="url(#headGradient)" stroke="#1677ff" strokeWidth="3"/>
          
          {/* Eye - single eye visible from side */}
          <g className="aiboo-eyes">
            <circle cx="205" cy="75" r="8" fill="#1677ff"/>
            <circle cx="207" cy="73" r="3" fill="white" className="aiboo-eye-shine"/>
          </g>
          
          {/* Smile - side view */}
          <path d="M 195 88 Q 205 93 210 90" stroke="#1677ff" strokeWidth="3" strokeLinecap="round" fill="none" className="aiboo-smile"/>
          
          {/* Antenna with light on head */}
          <line x1="200" y1="55" x2="200" y2="40" stroke="#1677ff" strokeWidth="3"/>
          <circle cx="200" cy="37" r="5" fill="#ff4d4f" className="aiboo-antenna-light"/>
          <circle cx="200" cy="37" r="5" fill="#ff4d4f" opacity="0.5" className="animate-ping"/>
          <circle cx="200" cy="37" r="8" fill="#ff4d4f" opacity="0.3" className="aiboo-antenna-glow"/>
          
          {/* Single arm extending forward from body */}
          <g className="aiboo-flying-arms">
            <rect x="180" y="105" width="50" height="18" rx="12" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2"/>
            <circle cx="232" cy="114" r="8" fill="#ffd700" stroke="#1677ff" strokeWidth="2"/>
          </g>
          
          {/* Chest Panel with Name Badge - visible on side */}
          <rect x="125" y="75" width="35" height="35" rx="8" fill="#e6f7ff" stroke="#1677ff" strokeWidth="2"/>
          
          {/* AIBoO Name Badge on chest */}
          <rect x="130" y="82" width="28" height="12" rx="6" fill="url(#badgeGradient)"/>
          <text x="144" y="91" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">AIBoO</text>
          
          {/* Status indicator */}
          <circle cx="144" cy="100" r="2.5" fill="#52c41a" className="aiboo-status-light"/>
          <circle cx="144" cy="100" r="2.5" fill="#52c41a" opacity="0.5" className="animate-ping"/>
          
          {/* Single leg extended backward */}
          <g className="aiboo-flying-legs">
            <rect x="75" y="105" width="30" height="18" rx="10" fill="url(#legGradient)" stroke="#1677ff" strokeWidth="2"/>
          </g>
          
          {/* Speed lines for dynamic effect */}
          <g className="aiboo-speed-lines" opacity="0.4">
            <line x1="10" y1="50" x2="50" y2="50" stroke="#1677ff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="5" y1="70" x2="55" y2="70" stroke="#1677ff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="15" y1="90" x2="60" y2="90" stroke="#1677ff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="10" y1="110" x2="50" y2="110" stroke="#1677ff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="5" y1="130" x2="45" y2="130" stroke="#1677ff" strokeWidth="2" strokeLinecap="round"/>
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e6f7ff"/>
              <stop offset="100%" stopColor="#bae7ff"/>
            </linearGradient>
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#91d5ff"/>
              <stop offset="100%" stopColor="#69c0ff"/>
            </linearGradient>
            <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#91d5ff"/>
              <stop offset="100%" stopColor="#40a9ff"/>
            </linearGradient>
            <linearGradient id="legGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#40a9ff"/>
              <stop offset="100%" stopColor="#1890ff"/>
            </linearGradient>
            <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677ff"/>
              <stop offset="100%" stopColor="#722ed1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Reading pose
  if (pose === 'reading') {
    return (
      <div className="shrink-0 relative" style={{ width: size, height: size }}>
        <svg className="size-full" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <rect x="60" y="80" width="80" height="90" rx="15" fill="url(#bodyGradient)" stroke="#1677ff" strokeWidth="3"/>
          
          {/* Head - slightly tilted */}
          <g transform="translate(0, 5) rotate(-8, 100, 60)">
            <rect x="70" y="30" width="60" height="60" rx="10" fill="url(#headGradient)" stroke="#1677ff" strokeWidth="3"/>
            
            {/* Eyes - thinking look (looking up) */}
            <g className="thinking-eyes">
              <ellipse cx="85" cy="52" rx="7" ry="9" fill="#1677ff"/>
              <ellipse cx="115" cy="52" rx="7" ry="9" fill="#1677ff"/>
              <circle cx="87" cy="49" r="3" fill="white" className="aiboo-eye-shine"/>
              <circle cx="117" cy="49" r="3" fill="white" className="aiboo-eye-shine"/>
            </g>
            
            {/* Thinking expression - wavy mouth */}
            <path d="M 88 70 Q 95 68 100 70 Q 105 72 112 70" stroke="#1677ff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            
            {/* Antenna with light */}
            <line x1="100" y1="30" x2="100" y2="15" stroke="#1677ff" strokeWidth="3"/>
            <circle cx="100" cy="12" r="5" fill="#ff4d4f" className="aiboo-antenna-light"/>
            <circle cx="100" cy="12" r="5" fill="#ff4d4f" opacity="0.5" className="animate-ping"/>
            <circle cx="100" cy="12" r="8" fill="#ff4d4f" opacity="0.3" className="aiboo-antenna-glow"/>
          </g>
          
          {/* Left Arm - supporting the thinking pose */}
          <g className="left-arm-thinking">
            <rect x="45" y="110" width="20" height="35" rx="10" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2"/>
            <circle cx="55" cy="147" r="7" fill="#ffd700" stroke="#1677ff" strokeWidth="2"/>
          </g>
          
          {/* Right Arm - hand on chin (thinking pose) */}
          <g className="right-arm-thinking">
            {/* Upper arm */}
            <rect x="120" y="85" width="20" height="30" rx="10" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2"/>
            {/* Forearm going to chin */}
            <rect x="105" y="65" width="20" height="28" rx="10" fill="url(#armGradient)" stroke="#1677ff" strokeWidth="2" transform="rotate(-45, 115, 79)"/>
            {/* Hand on chin */}
            <circle cx="108" cy="68" r="7" fill="#ffd700" stroke="#1677ff" strokeWidth="2"/>
          </g>
          
          {/* Chest Panel with Name Badge */}
          <rect x="75" y="100" width="50" height="40" rx="8" fill="#e6f7ff" stroke="#1677ff" strokeWidth="2"/>
          
          {/* AIBoO Name Badge on chest */}
          <rect x="80" y="107" width="40" height="14" rx="7" fill="url(#badgeGradient)"/>
          <text x="100" y="117" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">AIBoO</text>
          
          {/* Status indicator - rapid blinking for reading */}
          <circle cx="100" cy="128" r="3" fill="#faad14" className="reading-status-light"/>
          <circle cx="100" cy="128" r="3" fill="#faad14" opacity="0.5" className="reading-status-ping"/>
          
          {/* Legs */}
          <rect x="70" y="170" width="25" height="20" rx="10" fill="url(#legGradient)" stroke="#1677ff" strokeWidth="2"/>
          <rect x="105" y="170" width="25" height="20" rx="10" fill="url(#legGradient)" stroke="#1677ff" strokeWidth="2"/>
          
          {/* Shadow under legs */}
          <ellipse cx="100" cy="195" rx="35" ry="8" fill="black" opacity="0.2"/>
          
          {/* Sweat drops - showing effort */}
          <g className="sweat-drops">
            <ellipse cx="130" cy="50" rx="3" ry="5" fill="#40a9ff" opacity="0.7" className="sweat-drop-1"/>
            <ellipse cx="135" cy="60" rx="2.5" ry="4" fill="#40a9ff" opacity="0.7" className="sweat-drop-2"/>
          </g>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e6f7ff"/>
              <stop offset="100%" stopColor="#bae7ff"/>
            </linearGradient>
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#91d5ff"/>
              <stop offset="100%" stopColor="#69c0ff"/>
            </linearGradient>
            <linearGradient id="armGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#91d5ff"/>
              <stop offset="100%" stopColor="#40a9ff"/>
            </linearGradient>
            <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#40a9ff"/>
              <stop offset="100%" stopColor="#1890ff"/>
            </linearGradient>
            <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677ff"/>
              <stop offset="100%" stopColor="#722ed1"/>
            </linearGradient>
          </defs>
        </svg>

        <style>{`
          @keyframes sweatDrop {
            0% { 
              opacity: 0;
              transform: translateY(0px);
            }
            50% {
              opacity: 0.7;
            }
            100% { 
              opacity: 0;
              transform: translateY(10px);
            }
          }

          @keyframes readingBlink {
            0%, 90%, 100% { opacity: 1; }
            95% { opacity: 0.3; }
          }

          .sweat-drop-1 {
            animation: sweatDrop 1.5s ease-in-out infinite;
          }

          .sweat-drop-2 {
            animation: sweatDrop 1.5s ease-in-out 0.5s infinite;
          }

          .reading-status-light {
            animation: readingBlink 0.5s ease-in-out infinite;
          }

          .reading-status-ping {
            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .thinking-eyes {
            animation: readingBlink 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return null;
}
