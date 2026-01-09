import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../utils/data";
export const Testimonials = () => {
    

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12">
                <span className='text-[#8A8635] font-bold uppercase tracking-widest text-xs'>Success Stories</span>
                <h2 className='text-3xl font-bold tinos-regular sm:text-4xl xl:text-5xl mt-2'>What our partners say</h2>
            </div>

            {/* Optimized Grid: 3 columns for 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map(({ id, quote, name, position, image, company }) => (
                    <div 
                        key={id} 
                        className="bg-white border-t-4 border-[#8A8635] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                        <div className="relative">
                            <FaQuoteLeft className="text-[#8A8635]/20 text-4xl absolute -top-4 -left-2" />
                            <p className="tinos-regular text-lg text-gray-700 leading-relaxed relative z-10 pt-4 italic">
                                "{quote}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100">
                            <img
                                src={image}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#8A8635]/10"
                                alt={name}
                            />
                            <div>
                                <p className="font-bold text-gray-900 text-base leading-none">{name}</p>
                                <p className="text-xs text-[#8A8635] font-bold mt-1 uppercase tracking-tighter">
                                    {position}
                                </p>
                                <p className="text-[10px] text-gray-400 font-medium">
                                    {company}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}