import { FaLinkedinIn, FaX } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";


export const Footer = () =>{
    return (
<footer class="footer text-white  rounded-base shadow-xs border border-default">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-body sm:text-center">Copyright © 2026 Nixout. All rights reserved.
    </span>
    <ul class="flex flex-wrap justify-center md:flex-row items-center mt-3 text-sm font-medium text-body sm:mt-0 gap-3">
        <li>
            <a href="#" class="hover:underline"><FaLinkedinIn className="md:text-xl"/></a>
        </li>
        <li>
            <a href="#" class="hover:underline"><RiInstagramFill className="md:text-xl"/></a>
        </li>
        <li>
            <a href="#" class="hover:underline"><FaX className="md:text-xl"/></a>
        </li>
    </ul>
    </div>
</footer>

    );
}