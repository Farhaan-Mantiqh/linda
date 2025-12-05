"use client";

const Background = () => {
  return (
    <div className="w-full h-screen flex justify-end bg-white relative">

      {/* ================== TOP SVG ================== */}
      <div className="absolute z-[2] right-0 scale-125">
        <svg
          width="800"
          height="100%"
          viewBox="0 0 691 832"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="grad_top"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="200%"
              gradientUnits="userSpaceOnUse"
            >
              {/* STOP 1 */}
              <stop offset="0%" stopColor="#ECEEFF">
                <animate
                  attributeName="stop-color"
                  values="#ECEEFF; #4354FA; #C5CAFD; #ECEEFF"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </stop>

              {/* STOP 2 */}
              <stop offset="100%" stopColor="#4354FA">
                <animate
                  attributeName="stop-color"
                  values="#4354FA; #C5CAFD; #ECEEFF; #4354FA"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>

              {/* MOVEMENT ANIMATION */}
              <animate
                attributeName="y1"
                values="0%; 100%; 0%"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="200%; 300%; 200%"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          <path
            d="M709.19 -51.8205C739.559 524 141.165 406.502 124.913 841.191"
            stroke="url(#grad_top)"
            strokeWidth="250"
          />
        </svg>
      </div>

      {/* ================== BOTTOM SVG ================== */}
      <div className="absolute z-[3] bottom-0 right-14 scale-125">
        <svg
          width="693"
          height="100%"
          viewBox="0 0 693 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="grad_bottom"
              x1="0%"
              y1="200%"
              x2="0%"
              y2="0%"
              gradientUnits="userSpaceOnUse"
            >
              {/* STOP 1 */}
              <stop offset="0%" stopColor="#C5CAFD">
                <animate
                  attributeName="stop-color"
                  values="#C5CAFD; #ECEEFF; #4354FA; #C5CAFD"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </stop>

              {/* STOP 2 */}
              <stop offset="100%" stopColor="#4354FA">
                <animate
                  attributeName="stop-color"
                  values="#4354FA; #C5CAFD; #ECEEFF; #4354FA"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>

              {/* MOVEMENT ANIMATION */}
              <animate
                attributeName="y1"
                values="200%; 0%; 200%"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                values="0%; -100%; 0%"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          <path
            d="M110.581 618.296C430.94 10.4605 1080.09 383.3 999.4 27.6594"
            stroke="url(#grad_bottom)"
            strokeWidth="250"
          />
        </svg>
      </div>
    </div>
  );
};

export default Background;
