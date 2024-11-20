// "use client";

// import React, { useState } from "react";
// import { useTheme } from "next-themes";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { RiMoonFill, RiSunLine } from "react-icons/ri";

// const Navbar = () => {
//   const { theme, setTheme } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Toggle dark/light theme
//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   // Toggle mobile menu visibility
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-br from-[#1de5ff] via-[#6b6fbc] to-[#fca61f] shadow-xl p-4 md:p-6 text-white">
//       <div className="container mx-auto flex items-center justify-between relative">
//         {/* Logo */}
//         <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
//           <span className="text-yellow-400">AI</span> Portfolio
//         </h1>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={toggleMenu}
//           className="text-3xl md:hidden hover:text-yellow-400 transition duration-300"
//         >
//           {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
//         </button>

//         {/* Navbar Links */}
//         <nav
//           className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-bl from-[#1e3a8a] via-[#3b82f6] to-[#1de5ff] md:bg-transparent rounded-lg shadow-lg md:shadow-none p-4 md:p-0 transform transition-all duration-300 ${
//             isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 md:opacity-100 md:scale-100"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-8 items-center md:items-baseline">
//             <li>
//               <a
//                 href="#home"
//                 className="block text-lg md:text-base font-medium text-white hover:text-yellow-400 transition duration-300 py-2 md:py-0"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="block text-lg md:text-base font-medium text-white hover:text-yellow-400 transition duration-300 py-2 md:py-0"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#projects"
//                 className="block text-lg md:text-base font-medium text-white hover:text-yellow-400 transition duration-300 py-2 md:py-0"
//               >
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="block text-lg md:text-base font-medium text-white hover:text-yellow-400 transition duration-300 py-2 md:py-0"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>

//         {/* Dark/Light Mode Toggle */}
//         <button
//           onClick={toggleTheme}
//           className="text-2xl ml-4 md:ml-8 hover:text-yellow-400 transition duration-300"
//           title="Toggle Theme"
//         >
//           {theme === "dark" ? <RiSunLine /> : <RiMoonFill />}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
