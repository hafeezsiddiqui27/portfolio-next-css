// // import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
// // import { SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';
// // import React from 'react'

// // const about = () => {
// //   return (
// //       <div className="">
// //           <div className="">
// //               <h1>Curious About Me?</h1>
// //               <h3>Here You Have It.</h3>
// //               <p>"Welcome to my little corner of the web! I’m Hafeez Siddiqui, your digital architect and problem-solver, ready to turn ideas into interactive web experiences. Think of me as a virtual alchemist: I take your vision, mix it with some code, sprinkle a dash of creativity, and voilà – you've got a sleek, functional website that's as smooth as a perfect latte.

// // When I’m not experimenting with new ways to make the internet more engaging, you can find me deep in the world of design, fighting bugs (they never stand a chance), and making sure every pixel is in its rightful place. I don’t just build websites; I craft stories, one line of code at a time.

// // I believe a good website is like a good joke: it’s not just about the punchline, it’s about the delivery. So, whether you need a polished business page or a playful project, I’m here to make sure it’s not just functional – it’s memorable. Let’s create something that not only works, but wows the people who experience it."</p>
// //           </div>
// //       </div>

// //   )
// // }

// // export default about
// import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
// import { SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si';
// import React from 'react';
// import Image from 'next/image'; // Import Image component
// import "./about.css"
// import Skills from '../components/skills';

// const About = () => {
//     return (
//         <div>
//     <div className="about-container">
//       <div className="about-content">
//         <div className="text-and-image">
//           <div className="text">
//             <h1 className="heading">Curious About Me?</h1>
//             <h3 className="subheading">Here You Have It.</h3>

//             <p className="intro-text">
//               Welcome to my little corner of the web! I’m Hafeez Siddiqui, your digital architect and problem-solver, ready to turn ideas into interactive web experiences. Think of me as a virtual alchemist: I take your vision, mix it with some code, sprinkle a dash of creativity, and voilà – you've got a sleek, functional website that's as smooth as a perfect latte.
//             </p>

//             <p className="intro-text">
//               When I’m not experimenting with new ways to make the internet more engaging, you can find me deep in the world of design, fighting bugs (they never stand a chance), and making sure every pixel is in its rightful place. I don’t just build websites; I craft stories, one line of code at a time.
//             </p>

//             <p className="intro-text">
//               I believe a good website is like a good joke: it’s not just about the punchline, it’s about the delivery. So, whether you need a polished business page or a playful project, I’m here to make sure it’s not just functional – it’s memorable. Let’s create something that not only works, but *wows* the people who experience it.
//             </p>
//           </div>

//           <div className="robot-image">
//             <Image
//               src="/robflower.png" // Replace with actual path
//               alt="Funny robot flower"
//               width={300}
//               height={300}
//             />
//           </div>
//         </div>
//           </div>
         
//             </div>
//             <Skills />
//             </div>
//   );
// };

// export default About;
import { FaHtml5, FaCss3Alt, FaReact,  } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb,SiTypescript, SiPython } from 'react-icons/si';
import React from 'react';
import Image from 'next/image'; // Import Image component
import './about.css'

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <div className="text-and-image">
            <div className="text">
              <h1 className="heading">Curious About Me?</h1>
              <h3 className="subheading">Here You Have It.</h3>

              <p className="intro-text">
                Welcome to my little corner of the web! I’m Hafeez Siddiqui, your digital architect and problem-solver, ready to turn ideas into interactive web experiences. Think of me as a virtual alchemist: I take your vision, mix it with some code, sprinkle a dash of creativity, and voilà – you've got a sleek, functional website that's as smooth as a perfect latte.
              </p>

              <p className="intro-text">
                When I’m not experimenting with new ways to make the internet more engaging, you can find me deep in the world of design, fighting bugs (they never stand a chance), and making sure every pixel is in its rightful place. I don’t just build websites; I craft stories, one line of code at a time.
              </p>

              <p className="intro-text">
                I believe a good website is like a good joke: it’s not just about the punchline, it’s about the delivery. So, whether you need a polished business page or a playful project, I’m here to make sure it’s not just functional – it’s memorable. Let’s create something that not only works, but *wows* the people who experience it.
              </p>
            </div>

            <div className="robot-image">
              <Image
                src="/robflower.png" // Replace with actual path
                alt="Funny robot flower"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-container">
          <h1 className="skills-header">My Skills & Expertise</h1>
          <h3 className="skills-subheader">Technologies I Use & Learn</h3>

          <div className="skills-row">
            <div className="skill-item">
              <FaHtml5 size={60} color="#E34F26" />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <FaCss3Alt size={60} color="#1572B6" />
              <p>CSS</p>
                      </div>
                      <div className="skill-item">
              <SiTypescript size={60} color="2979FF" />
              <p>TypeScript</p>
                      </div>
                      
            <div className="skill-item">
              <FaReact size={60} color="#61DAFB" />
              <p>React</p>
            </div>
            <div className="skill-item">
              <SiTailwindcss size={60} color="#06B6D4" />
              <p>TailwindCSS</p>
            </div>
            <div className="skill-item">
              <SiNextdotjs size={60} color="#000000" />
              <p>Next.js</p>
                      </div>
                      <div className="skill-item">
              <SiPython size={60} color="2979FF" />
              <p>Python</p>
            </div>
            <div className="skill-item">
              <SiMongodb size={60} color="#47A248" />
              <p>MongoDB</p>
                      </div>
                      </div>
                    
          </div>
        </div>
      </div>
    
  );
};

export default About;
