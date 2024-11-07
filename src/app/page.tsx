// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// import Typewriter from "typewriter-effect";
// import { useInView } from 'react-intersection-observer';
// import "./globals.css"; // Import the standard CSS file

// export default function Home() {
//   const [name, setName] = useState("there"); // Default name is "there"

//   const { ref: leftSectionRef, inView: leftSectionInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   const { ref: rightSectionRef, inView: rightSectionInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     // You can fetch the user's name from local storage or use default "there"
//     const userName = window.localStorage.getItem("userName") || "there";
//     setName(userName);
//   }, []);

//   return (
//     <div>
  

//       {/* Main Content */}
//       <div className="full">
//         {/* Left Section */}
//         <div
//           ref={leftSectionRef}
//           className={`white ${leftSectionInView ? 'fade-in' : ''}`}
//         >
//           <h1>Hello, {name}!</h1>
//           <h2>I'm a</h2>
//           <span aria-label="Typewriter effect">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Web Developer",
//                   "Frontend Engineer",
//                   "CSS Sorcerer",
//                   "Code Magician",
//                   "Bug Buster",
//                 ],
//                 autoStart: true,
//                 loop: true,
//               }}
//             />
//           </span>
//         </div>

//         {/* Right Section */}
//         <div
//           ref={rightSectionRef}
//           className={`black ${rightSectionInView ? 'slide-in' : ''}`}
//         >
//           <Image
//             src="/imag.png" // Make sure to replace with your actual image path
//             alt="Your image"
//             width={500}
//             height={500}
//           />
//         </div>
//       </div>

   
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Typewriter from "typewriter-effect";
import { useInView } from 'react-intersection-observer';
import "./globals.css"; // Import the standard CSS file

export default function Home() {
  const [name, setName] = useState("there"); // Default name is "there"

  const { ref: leftSectionRef, inView: leftSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: rightSectionRef, inView: rightSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    // You can fetch the user&apos;s name from local storage or use default "there"
    const userName = window.localStorage.getItem("userName") || "there";
    setName(userName);
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div className="full">
        {/* Left Section */}
        <div
          ref={leftSectionRef}
          className={`white ${leftSectionInView ? 'fade-in' : ''}`}
        >
          <h1>Hello, {name}!</h1>
          <h2>I&apos;m a</h2>
          <span aria-label="Typewriter effect">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Frontend Engineer",
                  "CSS Sorcerer",
                  "Code Magician",
                  "Bug Buster",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        {/* Right Section */}
        <div
          ref={rightSectionRef}
          className={`black ${rightSectionInView ? 'slide-in' : ''}`}
        >
          <Image
            src="/imag.png" // Make sure to replace with your actual image path
            alt="Your image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
