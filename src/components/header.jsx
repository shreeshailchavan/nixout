import brandlogo from '../assets/nixoutlogo (Edited).png';
import { CiMenuBurger } from "react-icons/ci";
import { useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Note: Ensure 'react-router-dom' is used
import { Border } from './border';
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import { menuItems } from '../utils/data';
export const Header = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // For Desktop hover
    const [mobileExpand, setMobileExpand] = useState(null); // For Mobile accordion// Default to false (closed)

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

// Inside your Header component:
useEffect(() => {
    if (hamburgerOpen) {
        // Disable scroll
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scroll
        document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
        document.body.style.overflow = 'unset';
    };
}, [hamburgerOpen]);
    

    return (
        <header className="sticky top-0 z-50 w-full bg-[#F5F5F0] border-b border-gray-100 tinos-regular">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* LOGO */}
                    <Link to="/" className="flex-shrink-0">
                        <img src={brandlogo} className="h-12 md:h-15 w-auto" loading="eager" alt="Nixout" />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex space-x-10 items-center h-full">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative h-full flex items-center "
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to={item.link}
                                    className={({ isActive }) =>
                                        `text-xl flex items-center gap-1 transition-colors hover:text-[#8A8635] ${isActive ? "text-[#8A8635]" : "text-black"
                                        }`
                                    }
                                >
                                    {item.name}
                                    {item.subMenus && <IoIosArrowDown className={`text-sm transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
                                </NavLink>

                                {/* DESKTOP DROPDOWN BOX */}
                                {item.subMenus && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 mt-0 w-[600px] bg-[#FCF8F1] shadow-md rounded-b-xl border-t-4 border-[#8A8635] z-50 overflow-hidden">
                                        <div className="grid grid-cols-2 gap-x-8 p-8">
                                            {/* Left Column - Featured Section or Label */}
                                            <div className="col-span-2 mb-4">
                                                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-bold border-b pb-2">
                                                    Explore {item.name}
                                                </p>
                                            </div>

                                            {item.subMenus.map((sub, i) => (
                                                <Link
                                                    key={i}
                                                    to={sub.link}
                                                    className="group flex items-center py-3 px-2 rounded-lg hover:bg-[#FCF8F1] transition-all"
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="text-lg font-bold text-gray-900 group-hover:text-[#8A8635] transition-colors">
                                                            {sub.name}
                                                        </span>
                                                        <span className="text-[14px] text-gray-600 group-hover:text-gray-900">
                                                            Learn more about our {sub.name.toLowerCase()}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                            {/* SERVICES MEGA MENU */}
                                            {item.name === 'Services' && activeDropdown === 'Services' && (
                                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[850px] bg-white shadow-2xl rounded-b-xl border-t-4 border-[#8A8635] z-50 overflow-hidden flex">

                                                    {/* Left Column: The "Highlight" Section */}
                                                    <div className="w-1/3 bg-[#FCF8F1] p-8 flex flex-col justify-between">
                                                        <div>
                                                            <h4 className="text-[#8A8635] font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
                                                            <p className="text-gray-800 text-lg font-bold leading-tight tinos-regular">
                                                                Driving the transition to circular business models through material innovation.
                                                            </p>
                                                        </div>
                                                        <Link to="/services" className="text-sm font-bold text-black hover:text-[#8A8635] flex items-center gap-2">
                                                            All Solutions <span className="text-xl">→</span>
                                                        </Link>
                                                    </div>

                                                    {/* Right Columns: Service Grid */}
                                                    <div className="w-2/3 p-8 grid grid-cols-2 gap-6">
                                                        {item.subMenus.map((sub, i) => (
                                                            <Link
                                                                key={i}
                                                                to={sub.link}
                                                                className="group block p-3 rounded-lg hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                                                            >
                                                                <span className="block text-lg font-bold text-gray-900 group-hover:text-[#8A8635] mb-1">
                                                                    {sub.name}
                                                                </span>
                                                                <span className="block text-[14px] text-gray-500 leading-relaxed">
                                                                    {sub.desc}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="bg-gray-50 p-4 px-8 flex justify-between items-center">
                                            <span className="text-xs text-gray-500 italic font-serif">Nixout Excellence & Strategy</span>
                                            <Link to={item.link} className="text-xs font-bold text-[#8A8635] hover:underline">
                                                View All →
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex">
                        <Link to="/contact" className="px-6 py-2 rounded-full font-bold text-white bg-[#8A8635] hover:bg-black transition-all shadow-md">
                            Contact Us
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button className="md:hidden text-3xl" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                        {hamburgerOpen ? <IoMdClose /> : <CiMenuBurger />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU  */}
            <div className={`fixed inset-0 top-30 bg-[#F5F5F0] z-40 transition-all duration-300 md:hidden ${hamburgerOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col space-y-4 overflow-y-auto h-full pb-24">
                    {menuItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-2">
                            <div className="flex justify-between items-center py-2" onClick={() => item.subMenus && setMobileExpand(mobileExpand === item.name ? null : item.name)}>
                                <Link to={item.link} onClick={() => !item.subMenus && setHamburgerOpen(false)} className="text-lg font-medium text-black">{item.name}</Link>
                                {item.subMenus && <IoIosArrowDown className={mobileExpand === item.name ? "rotate-180" : ""} />}
                            </div>

                            {/* Mobile Submenu Accordion */}
                            {item.subMenus && mobileExpand === item.name && (
                                <div className="pl-4 flex flex-col space-y-3 mt-2 mb-4 animate-slideDown">
                                    {item.subMenus.map((sub, i) => (
                                        <Link key={i} to={sub.link} onClick={() => setHamburgerOpen(false)} className="text-lg text-gray-600 border-l-2 border-[#8A8635] pl-3">
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="w-full py-4 bg-[#8A8635] text-white text-center font-bold rounded-md">Contact Us</Link>
                </div>
            </div>
        </header>
    );
};

// Without mega menu
// <header className="sticky top-0 z-50 w-full bg-[#FCF8F1] border-b border-gray-100">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">

//             {/* 1. LOGO */}
//             <div className="flex-shrink-0 flex items-center">
//                 <Link to="/">
//                     <img
//                         src={brandlogo}
//                         className="h-15 w-auto object-contain"
//                         alt="Nixout Logo"
//                     />
//                 </Link>
//             </div>

//             {/* 2. DESKTOP NAV */}
//             <nav className="hidden md:flex space-x-10 items-center">
//                 {menuItems.map((item, index) => (
//                     <NavLink
//                         key={index}
//                         to={item.link}
//                         className={({ isActive }) =>
//                             `text-xl font-bold tinos-regular transition-colors hover:text-[#8A8635] ${
//                                 isActive ? "text-[#8A8635]" : "text-black"
//                             }`
//                         }
//                     >
//                         {item.name}
//                     </NavLink>
//                 ))}
//             </nav>

//             {/* 3. CTA BUTTON (Professional B2B touch) */}
//             <div className="hidden md:flex items-center">
//                 <Link
//                     to="/contact"
//                     className="ml-8 inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-[#8A8635] hover:bg-[#FCF8F1] hover:text-[#8A8635] hover:outline transition-all"
//                 >
//                     Contact Us
//                 </Link>
//             </div>

//             {/* 4. MOBILE MENU BUTTON */}
//             <div className="md:hidden flex items-center">
//                 <button
//                     onClick={toggleHamburger}
//                     className="text-gray-700 hover:text-black focus:outline-none"
//                 >
//                     {hamburgerOpen ? (
//                         <IoMdClose className="text-3xl" />
//                     ) : (
//                         <CiMenuBurger className="text-3xl" />
//                     )}
//                 </button>
//             </div>
//         </div>
//     </div>

//     {/* 5. MOBILE MENU DROPDOWN */}
//     <div
//         className={`md:hidden tinos-regular  transition-all duration-300 ease-in-out overflow-hidden ${
//             hamburgerOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         }`}
//     >
//         <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
//             {menuItems.map((item, index) => (
//                 <Link
//                     key={index}
//                     to={item.link}
//                     onClick={() => setHamburgerOpen(false)}
//                     className="block px-3 py-4  font-medium font-bold text-lg border-b border-gray-50"
//                 >
//                     {item.name}
//                 </Link>
//             ))}
//             <Link
//                 to="/contact"
//                 onClick={() => setHamburgerOpen(false)}
//                 className="block w-full text-center mt-4 px-5 py-4 bg-[#8A8635] text-white font-bold rounded-sm"
//             >
//                 Contact Us
//             </Link>
//         </div>
//       {
//         hamburgerOpen ? <Border/> : null
//       }
//     </div>
// </header>
