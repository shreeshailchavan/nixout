import heroImage from '../assets/hero1.jpeg'; // Use a high-quality material shot

export const HomeAbout = () => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Image with Decorative Elements */}
                    <div className="relative">
                        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#8A8635]/10 rounded-full -z-10" />
                        <img 
                        loading="eager"
                            src={heroImage} 
                            alt="Sustainable Materials" 
                            className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
                        />
                        <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl rounded-xl border-l-4 border-[#8A8635] max-w-xs">
                            <p className="text-3xl font-bold text-gray-900 leading-none">0%</p>
                            <p className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-wider">Plastic Content in our Primary Range</p>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <span className="text-[#8A8635] font-bold uppercase tracking-[0.3em] text-xs">Our Purpose</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-bold tinos-regular text-gray-900 leading-tight">
                            Helping businesses move away from plastic, <span className="text-[#8A8635]">permanently.</span>
                        </h2>
                        <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                            At NixOut, we help businesses move away from plastic by providing biodegradable, responsibly sourced materials designed for everyday use. 
                        </p>
                        <p className="mt-6 text-gray-600 leading-relaxed italic border-l-2 border-gray-100 pl-6">
                            "Sustainability should be practical, transparent, and scalable. We focus on ethical sourcing and materials that meet real business needs while reducing environmental impact."
                        </p>
                        
                        <div className="mt-10 flex gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900">Seamless Integration</h4>
                                <p className="text-sm text-gray-500 mt-1">Designed to fit existing operations without compromise.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">Ethical Sourcing</h4>
                                <p className="text-sm text-gray-500 mt-1">Transparent supply chains you can trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};