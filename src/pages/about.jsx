import React from 'react';

export const About = () => {
    return (
        <main className="">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold tinos-regular text-gray-900 mb-8">
                        The NixOut Mission
                    </h1>
                    <p className="text-xl md:text-xl text-gray-700 leading-relaxed tinos-regular italic">
                        "Founded with a clear purpose: to replace single-use plastic with sustainable alternatives made from natural fibres."
                    </p>
                </div>
            </section>

            {/* Core Content Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="grid md:grid-cols-3 gap-12 tinos-regular">
                        
                        {/* Column 1: Our Partnership */}
                        <div className="space-y-4 ">
                            {/* <div className="w-12 h-1 bg-[#8A8635] mb-6" /> */}
                            <h3 className="text-2xl font-bold text-gray-900">Who We Partner With</h3>
                            <p className="text-gray-600 leading-relaxed">
                                NixOut partners with restaurants, cafés, retailers, and eco-conscious brands to drive measurable change. We support businesses at every stage of their sustainability journey.
                            </p>
                        </div>
                        
                        {/* Column 2: Our Standards */}
                        <div className="space-y-4  md:border-gray-200 md:border-l md:border-l-1 md:border-r-1 p-2">
                            {/* <div className="w-12 h-1 bg-[#8A8635] mb-6" /> */}
                            <h3 className="text-2xl font-bold text-gray-900">Zero Compromise</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our products integrate seamlessly into existing operations. We prioritize performance, cost efficiency, and customer experience as highly as sustainability.
                            </p>
                        </div>

                        {/* Column 3: Our Philosophy */}
                        <div className="space-y-4 p-2">
                            {/* <div className="w-12 h-1 bg-[#8A8635] mb-6" /> */}
                            <h3 className="text-2xl font-bold text-gray-900">Scalable Impact</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe sustainability should be practical. We focus on reliable supply chains and materials that meet real business needs with total transparency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold  mb-8 tinos-regular">
                        Ready to make a measurable change with confidence?
                    </h2>
                    <button className="tinos-regular px-10 py-4 rounded-sm font-bold bg-black text-white transition-all shadow-sm">
                        Request a Material Audit
                    </button>
                </div>
            </section>
        </main>
    );
};