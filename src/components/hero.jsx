import { Link } from 'react-router';
import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';
export default function Hero() {
    return (
        <>
            <section className="bg-opacity-30 py-4 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase"></p>
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-4xl xl:text-6xl tinos-regular">Natural, Biodegradable Materials for Everyday Business Use</h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl tinos-regular">We help restaurants and eco-conscious businesses replace plastic with biodegradable, ethically sourced materials designed for real-world use</p>

                            <Link to="/services" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#8A8635] rounded-full lg:mt-16 hover:bg-[#FCF8F1] focus:bg-bg-[#FCF8F1] hover:text-[#8A8635] hover:outline" role="button">
                                Know More
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>

                            {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                        </div>

                        {/* <div> */}
                        {/* <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" /> */}
                        {/* </div> */}
                        <div className="h-full">
                            <div className="flex flex-col h-full gap-6 min-h-[420px] lg:min-h-[520px]">

                                {/* Top Large Image */}
                                <div className="flex-1">
                                    <img
                                    loading="eager"
                                        src={hero4}
                                        alt="Sustainable biodegradable materials"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>

                                {/* Bottom Two Images */}
                                <div className="grid grid-cols-2 gap-6 h-[40%]">
                                    <div>
                                        <img
                                        loading="eager"
                                            src={hero2}
                                            alt="Eco-friendly packaging"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>

                                    <div>
                                        <img
                                        loading="eager"
                                            src={hero3}
                                            alt="Natural packaging materials"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* </div> */}
        </>


    );
}
