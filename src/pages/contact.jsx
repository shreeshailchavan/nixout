import React, { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        interest: 'General Inquiry',
        message: ''
    });

    return (
        <main className=" rounded-md shadow-sm min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold tinos-regular text-gray-900">
                        Start your <span className="text-[#8A8635]">transition</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                        Whether you're a small café or a national retailer, our team is ready to help you integrate sustainable materials into your daily operations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left: Contact Info & Reassurance */}
                    <div className="space-y-12">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#8A8635] text-2xl">
                                    <HiOutlineMail />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Us</h4>
                                    <p className="text-gray-600 text-sm">sales@nixout.uk</p>
                                    <p className="text-gray-400 text-xs">Response time: &lt; 24h</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm text-[#8A8635] text-2xl">
                                    <HiOutlineLocationMarker />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Our Presence</h4>
                                    <p className="text-gray-600 text-sm">London, UK | India</p>
                                    <p className="text-gray-400 text-xs">Global supply capabilities</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge for B2B */}
                        <div className="bg-white p-8 rounded-2xl border-l-4 border-[#8A8635] shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Business Enquiries</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                For bulk orders, custom branding, or material audits, please provide your company details so we can assign the correct specialist to your account.
                            </p>
                        </div>
                    </div>

                    {/* Right: The Qualification Form */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-[#8A8635]/5 border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A8635] transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Company Name</label>
                                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A8635] transition-all" placeholder="Company Ltd" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Work Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A8635] transition-all" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">I am interested in</label>
                                <select className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A8635] transition-all">
                                    <option>Material Advisory</option>
                                    <option>Biodegradable Packaging</option>
                                    <option>Custom Branded Eco Packaging</option>
                                    <option>Bulk Disposables</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8A8635] transition-all" placeholder="How can we help your business?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#8A8635] text-white font-bold py-4 rounded-lg hover:bg-black transition-all shadow-lg">
                                Send Enquiry
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
};