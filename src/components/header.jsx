import brandlogo from '../assets/nixoutlogo (Edited).png';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import { useState } from 'react';

export const Haeader = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(true);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const menuItems = [
        { name: 'About' },
        { name: 'Services' },
        { name: 'News & Stories' },
        { name: 'Contact us' },
    ]

    return (
        <header className={`${!hamburgerOpen ? "h-full w-full":""} z-40 justify-between items-center flex md:justify-center md:items-center md:gap-6`}>
            <img src={brandlogo} className='aspect-ratio-3/2 object-cover h-15 w-15 md:h-18 md:w-18' alt="" srcset="" />
            <ul
  className={`w-full py-2
    absolute left-0 top-30 items-start overflow-hidden transition-all duration-300 ease-in-out
    md:flex md:justify-center md:items-center md:gap-8 md:static md:h-auto md:opacity-100
    ${
      !hamburgerOpen
        ? "flex flex-col gap-4 h-auto opacity-100 mt-6"
        : "h-0 opacity-0 md:opacity-100"
    }
  `}
>
  {menuItems.map((item, index) => (
    <li
      key={index}
      className={`nav-item text-lg font-medium cursor-pointer ${!hamburgerOpen ? "pl-10" : "pl-0"}`}
    >
      {item.name}
    </li>
  ))}
</ul>


            <span
                className="block md:hidden cursor-pointer"
                onClick={toggleHamburger}
            >
                <div
                    className={`transition-transform duration-300 ease-in-out ${hamburgerOpen ? "rotate-0" : "rotate-90"
                        }`}
                >
                    {hamburgerOpen ? (
                        <CiMenuBurger className="text-2xl nav-item" />
                    ) : (
                        <IoMdClose className="text-2xl nav-item" />
                    )}
                </div>
            </span>

        </header>
    );
}