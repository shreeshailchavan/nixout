import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../utils/data';
import { HiOutlineArrowLeft, HiCheckCircle } from "react-icons/hi";

export const ServiceDetail = () => {
    const { slug } = useParams();
    console.log(slug)
    const service = servicesData.find(svc => svc.slug === slug);

    if (!service) return <div className="py-20 text-center">Service not found.</div>;

    return (
        <main className="min-h-screen">
            {/* 1. Breadcrumb & Back Button */}
            <div className="max-w-7xl mx-auto px-4 pt-32">
                <Link to="/services" className="flex items-center gap-2 text-sm font-bold text-[#8A8635] hover:text-black transition-colors">
                    <HiOutlineArrowLeft /> Back to Services
                </Link>
            </div>

            {/* 2. Hero Section */}
            <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold tinos-regular text-gray-900 leading-tight">
                        {service.name}
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        {service.heroDesc}
                    </p>
                    <div className="mt-10">
                        <Link to="/contact" className="bg-[#8A8635] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-black transition-all">
                            Request an Advisory Session
                        </Link>
                    </div>
                </div>
                <div className="bg-[#FCF8F1] rounded-3xl p-8 lg:p-12">
                    <h3 className="text-xl font-bold mb-6">Key Business Outcomes</h3>
                    <ul className="space-y-4">
                        {service.features.map((feat, i) => (
                            <li key={i} className="flex gap-4">
                                <HiCheckCircle className="text-[#8A8635] text-2xl shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-900">{feat.title}</p>
                                    <p className="text-sm text-gray-500">{feat.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Detailed Content */}
            <section className=" py-20 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold tinos-regular mb-6">The Nixout Approach</h2>
                    <p className="text-lg text-gray-700 leading-loose">
                        {service.fullDescription}
                    </p>
                    
                    <div className="mt-12 p-8 bg-white rounded-2xl border-l-8 border-[#8A8635] text-left shadow-sm">
                        <h4 className="font-bold text-[#8A8635] uppercase tracking-widest text-xs mb-2">Impact Highlight</h4>
                        <p className="text-xl text-gray-900 font-medium italic">
                            {service.benefits}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};