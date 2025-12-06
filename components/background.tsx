// "use client";

// import React from 'react';
// import { motion } from 'motion/react';

// const Background = () => {
//   return (
//     <div className="w-full h-screen flex justify-end bg-transparent relative overflow-hidden">
//       <div className="absolute z-2 right-[-20] scale-100">
//         <svg
//           width="800"
//           height="100%"
//           viewBox="0 0 691 832"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="grad_top">
//               <stop offset="0%" stopColor="#ECEEFF">
//                 <animate
//                   attributeName="stop-color"
//                   values="#ECEEFF; #4354FA; #C5CAFD; #ECEEFF"
//                   dur="12s"
//                   repeatCount="indefinite"
//                   begin="2s"
//                 />
//               </stop>
//               <stop offset="100%" stopColor="#4354FA">
//                 <animate
//                   attributeName="stop-color"
//                   values="#4354FA; #C5CAFD; #ECEEFF; #4354FA"
//                   dur="6s"
//                   repeatCount="indefinite"
//                   begin="2s"
//                 />
//               </stop>
//             </linearGradient>
//           </defs>

//           <motion.path
//             d="M709.19 -51.8205C739.559 524 141.165 406.502 124.913 841.191"
//             stroke="url(#grad_top)"
//             strokeWidth="250"
//             strokeLinecap="butt"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ 
//               pathLength: 1, 
//               opacity: 1,
//             }}
//             transition={{
//               pathLength: { 
//                 duration: 2, 
//                 ease: "easeInOut",
//               },
//               opacity: { 
//                 duration: 1.5,
//                 delay: 0.5 
//               }
//             }}
//           />
//         </svg>
//       </div>

//       <div className="absolute z-3 bottom-0 right-0 scale-120">
//         <svg
//           width="693"
//           height="100%"
//           viewBox="0 0 693 556"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="grad_bottom">
//               <stop offset="0%" stopColor="#C5CAFD">
//                 <animate
//                   attributeName="stop-color"
//                   values="#C5CAFD; #ECEEFF; #4354FA; #C5CAFD"
//                   dur="12s"
//                   repeatCount="indefinite"
//                   begin="2.5s"
//                 />
//               </stop>
//               <stop offset="100%" stopColor="#4354FA">
//                 <animate
//                   attributeName="stop-color"
//                   values="#4354FA; #C5CAFD; #ECEEFF; #4354FA"
//                   dur="6s"
//                   repeatCount="indefinite"
//                   begin="2.5s"
//                 />
//               </stop>
//             </linearGradient>
//           </defs>

//           <motion.path
//             d="M110.581 618.296C430.94 10.4605 1080.09 383.3 999.4 27.6594"
//             stroke="url(#grad_bottom)"
//             strokeWidth="250"
//             strokeLinecap="butt"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ 
//               pathLength: 1, 
//               opacity: 1,
//             }}
//             transition={{
//               pathLength: { 
//                 duration: 2, 
//                 ease: "easeInOut",
//                 delay: 0.5 
//               },
//               opacity: { 
//                 duration: 1.5,
//                 delay: 1 
//               }
//             }}
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Background;
"use client";

import React from "react";
import { motion } from "motion/react";

const Background = () => {
  return (
    <div className="w-full h-screen flex justify-end bg-transparent relative overflow-hidden">
      {/* TOP STROKE */}
      <div className="absolute z-2 right-[-20px] scale-100">
        <svg
          width="800"
          height="100%"
          viewBox="0 0 691 832"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad_top" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E6EEFF">
                <animate
                  attributeName="stop-color"
                  values="#E6EEFF; #C3D5FD; #6B92F9; #E6EEFF"
                  dur="12s"
                  repeatCount="indefinite"
                  begin="2s"
                />
              </stop>
              <stop offset="100%" stopColor="#2F6CFA">
                <animate
                  attributeName="stop-color"
                  values="#2F6CFA; #6B92F9; #C3D5FD; #2F6CFA"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="2s"
                />
              </stop>
            </linearGradient>
          </defs>

          <motion.path
            d="M709.19 -51.8205C739.559 524 141.165 406.502 124.913 841.191"
            stroke="url(#grad_top)"
            strokeWidth="250"
            strokeLinecap="butt"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 1.5, delay: 0.5 },
            }}
          />
        </svg>
      </div>

      {/* BOTTOM STROKE */}
      <div className="absolute z-3 bottom-0 right-0 scale-120">
        <svg
          width="693"
          height="100%"
          viewBox="0 0 693 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad_bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C3D5FD">
                <animate
                  attributeName="stop-color"
                  values="#C3D5FD; #E6EEFF; #6B92F9; #C3D5FD"
                  dur="12s"
                  repeatCount="indefinite"
                  begin="2.5s"
                />
              </stop>
              <stop offset="100%" stopColor="#2F6CFA">
                <animate
                  attributeName="stop-color"
                  values="#2F6CFA; #6B92F9; #E6EEFF; #2F6CFA"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="2.5s"
                />
              </stop>
            </linearGradient>
          </defs>

          <motion.path
            d="M110.581 618.296C430.94 10.4605 1080.09 383.3 999.4 27.6594"
            stroke="url(#grad_bottom)"
            strokeWidth="250"
            strokeLinecap="butt"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
              },
              opacity: { duration: 1.5, delay: 1 },
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Background;
