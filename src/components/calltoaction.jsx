import tm3 from '../assets/tm3.jpeg';
import { HiOutlineArrowRight, HiOutlineMail } from "react-icons/hi";

export const CallToAction = () => {
    return (
        <section className="relative py-16 lg:py-24 bg-[#F5F5F0] overflow-hidden">
            {/* Subtle background decoration for professional feel */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#8A8635]/5 rounded-sm blur-3xl" />

            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-x-16 items-center">

                    {/* Left: Credibility Block (Span 2) */}
                    <div className="lg:col-span-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sml bg-[#8A8635]/10 text-[#8A8635] text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A8635] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8A8635]"></span>
                            </span>
                            Trusted by 500+ Businesses
                        </div>

                        <blockquote className="relative">
                            <p className="tinos-regular text-2xl italic leading-relaxed text-gray-800">
                                “Switching to NixOut helped us reduce plastic waste without disrupting daily operations. The standards are exactly what small businesses need.”
                            </p>
                        </blockquote>

                        <div className="mt-8 flex items-center gap-4">
                            <img
                                className="object-cover w-14 h-14 rounded-full ring-4 ring-white shadow-sm"
                                src={tm3}
                                alt="Sarah Mitchell"
                            />
                            <div>
                                <p className="text-lg font-bold text-gray-900 leading-none">Sarah Mitchell</p>
                                <p className="text-sm text-gray-500 mt-1 font-medium">Owner, Independent Café · UK</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Conversion Card (Span 3) */}
                    <div className="lg:col-span-3">
                        <div className="bg-white  shadow-xl shadow-[#8A8635]/5 border border-gray-100 p-8 lg:p-12 relative">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#8A8635] rounded-t-2xl"></div>
                            
                            <h3 className="text-3xl font-bold text-gray-900 tinos-regular tracking-tight">
                                Ready to scale your sustainability?
                            </h3>
                            <p className="mt-4 text-lg text-gray-600">
                                Join the industry leaders moving toward zero-waste operations. Get a tailored material audit for your business today.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/contact"
                                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#8A8635] rounded-lg hover:bg-[#9A8650] transition-all duration-300 group"
                                >
                                    Request Business Enquiry
                                    <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="mailto:sales@nixout.uk"
                                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-gray-900 bg-transparent border-2 border-gray-200 rounded-lg hover:border-[#8A8635] transition-all"
                                >
                                    <HiOutlineMail className="text-xl" />
                                    Contact Sales
                                </a>
                            </div>

                            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 opacity-50 grayscale">
                                {/* Place 3 generic industry icons here to show "Scale" */}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Response time: &lt; 24 Hours</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};