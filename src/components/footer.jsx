import { Link } from "react-router";
import brandlogo from '../assets/nixoutlogo (Edited).png';
import { Border } from "./border";


export const Footer = () =>{
    return (
      <>
       <Border/>
<footer className="footer w-full pt-10 sm:pt-16 lg:pt-24 mb-0">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

    <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">

      <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8 flex flex-col items-center">
        <img
          className="w-auto h-15"
          src={brandlogo}
          alt="NixOut Logo"
          />

        <p className="text-base leading-relaxed text-gray-600 mt-7">
          NixOut helps restaurants and eco-conscious businesses replace plastic
          with biodegradable, responsibly sourced materials designed for
          everyday business use.
        </p>

        <ul className="flex items-center space-x-3 mt-9">
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#8A8635]"
              >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.98h-4V23.5zM8.98 7.98h3.84v2.12h.05c.53-1 1.84-2.12 3.8-2.12 4.06 0 4.8 2.68 4.8 6.16v9.36h-4v-8.3c0-1.98-.04-4.52-2.76-4.52-2.76 0-3.18 2.16-3.18 4.38v8.44h-4V7.98z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#8A8635]"
              >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"
                  />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Company
        </p>

        <ul className="mt-6 space-y-4">
          <li>
            <Link to="/about/business" className="text-base text-black hover:text-[#8A8635]">
              About NixOut
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-base text-black hover:text-[#8A8635]">
              Our Capabilities
            </Link>
          </li>
          <li>
            <Link href="#sustainability" className="text-base text-black hover:text-[#8A8635]">
              Sustainability
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-base text-black hover:text-[#8A8635]">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Industries
        </p>

        <ul className="mt-6 space-y-4">
          <li className="text-base text-black">Restaurants & Cafés</li>
          <li className="text-base text-black">Food Startups</li>
          <li className="text-base text-black">Retail & Takeaway</li>
          <li className="text-base text-black">Eco-conscious Businesses</li>
        </ul>
      </div>

      <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Business Enquiries
        </p>

        <div className="mt-6 space-y-3 text-base text-gray-600">
          <p>
            Get in touch for samples, pricing, or partnerships.
          </p>

          <p className="font-semibold text-black">
            sales@nixout.uk
          </p>

          <p>
            Southampton, England<br />
            United Kingdom
          </p>
        </div>
      </div>
    </div>

    <hr className="mt-16 mb-10 border-gray-200" />

    <p className="text-sm text-center text-gray-600">
      © 2026 NixOut Ltd. Sustainable Materials for Responsible Businesses.
    </p>

  </div>
</footer>
</>

    );
}