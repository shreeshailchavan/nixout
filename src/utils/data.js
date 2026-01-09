import n1 from "../assets/news/n1.jpg";
import n2 from "../assets/news/n2.webp";
import n3 from "../assets/news/n3.avif";
import n5 from "../assets/news/n5.jpeg";
import { RiRecycleLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import { MdOutlineEco } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import tm1 from '../assets/tm1.jpeg';
import tm2 from '../assets/tm2.jpeg';
import tm3 from '../assets/tm3.jpeg';



export const menuItems = [
        {
            name: 'Home', link: '/', 
        },
        { name: 'About', link: '/about',subMenus: [
                { name: 'Team', link: '#team' },
                { name: 'Strategy', link: '/about/strategy' },
                { name: 'Our Business', link: '/about/business' },
                { name: 'Sustainable Raw Materials', link: '/about/sustainability' },
                { name: 'Recognitions and Indices', link: '/about/recognitions' },
                { name: 'Views and Positions', link: '/about/views' },
                { name: 'Where we operate', link: '/about/locations' },
                { name: 'Company History', link: '/about/history' },
            ] },
        {
            name: 'Services', link: '/services', subMenus: [
                { name: 'Ethical Sourcing & Material Advisory', link: '/services/advisory', desc: 'Expert guidance on sustainable supply chain integration.' },
                { name: 'Biodegradable Packaging Materials', link: '/services/biodegradable-materials', desc: 'High-performance materials that return to nature.' },
                { name: 'Compostable Food & Service Solutions', link: '/services/compostable-food-solutions', desc: 'Eco-friendly disposables for the food & hospitality industry.' },
                { name: 'Sustainable Business Materials', link: '/services/sustainable-business-materials', desc: 'Essential office and operational supplies with zero waste.' },
                { name: 'Custom & Branded Eco Packaging', link: '/services/custom-branding', desc: 'Bespoke packaging solutions that tell your brand story.' },
                { name: 'Flexible Supply for Businesses', link: '/services/flexible-supply-logistics', desc: 'Scalable logistics and inventory management for B2B.' },
            ]
        },
        { name: 'News & Stories', link: '/news', },
    ];

  
export const news = [
  {
    id: 1,
    date: "January 2026",
    title: "NixOut Launches to Help Businesses Transition Away from Plastic",
    excerpt:
      "Supporting restaurants and eco-conscious businesses with biodegradable materials sourced from natural fibres.",
    imgSrc:n1,
    slug: "/news/nixout-launch"
  },
  {
    id: 2,
    date: "February 2026",
    title: "Independent Cafés Reduce Plastic Waste with NixOut",
    excerpt:
      "Early partners show how sustainable packaging integrates into daily operations.",
    imgSrc:n2,
    slug: "/news/cafe-impact"
  },
  {
    id: 3,
    date: "March 2026",
    title: "Ethical Sourcing of Natural Fibres from India",
    excerpt:
      "Transparency and responsibility across the NixOut supply chain.",
    imgSrc:
    n3,
    slug: "/news/ethical-sourcing"
  },
  {
    id: 4,
    date: "April 2026",
    title: "Beyond Food Packaging: Expanding Sustainable Materials",
    excerpt:
      "Supporting retail and everyday business use with biodegradable materials.",
    imgSrc:
      n5,
    slug: "/news/beyond-packaging"
  },
  {
    id: 1,
    date: "January 2026",
    title: "NixOut Launches to Help Businesses Transition Away from Plastic",
    excerpt:
      "Supporting restaurants and eco-conscious businesses with biodegradable materials sourced from natural fibres.",
    imgSrc:n1,
    slug: "/news/nixout-launch"
  },
  {
    id: 2,
    date: "February 2026",
    title: "Independent Cafés Reduce Plastic Waste with NixOut",
    excerpt:
      "Early partners show how sustainable packaging integrates into daily operations.",
    imgSrc:n2,
    slug: "/news/cafe-impact"
  },
  {
    id: 3,
    date: "March 2026",
    title: "Ethical Sourcing of Natural Fibres from India",
    excerpt:
      "Transparency and responsibility across the NixOut supply chain.",
    imgSrc:
    n3,
    slug: "/news/ethical-sourcing"
  },
  {
    id: 4,
    date: "April 2026",
    title: "Beyond Food Packaging: Expanding Sustainable Materials",
    excerpt:
      "Supporting retail and everyday business use with biodegradable materials.",
    imgSrc:
      n5,
    slug: "/news/beyond-packaging"
  },
  // add more as needed
];

export const testimonials = [
        {
            id: 1,
            quote: "Switching to NixOut helped us move away from plastic without increasing costs. The materials are practical, sustainable, and well-suited to a small kitchen like ours.",
            name: "Shreeshail",
            position: "CEO & Co-Founder",
            image: tm1,
            company: "Kitchen Innovators" // Added for B2B credibility
        },
        {
            id: 2,
            quote: "NixOut's products have transformed our business. Our customers appreciate the eco-friendly approach, and we've seen a boost in loyalty and sales.",
            name: "Anita",
            position: "Head of Operations",
            image: tm2,
            company: "Eco Retail Group"
        },
        {
            id: 3,
            quote: "The quality and design of NixOut's sustainable packaging are top-notch. It's reassuring to know we're making a positive impact on the environment while delivering great products.",
            name: "Ravi",
            position: "Product Manager",
            image: tm3,
            company: "Pure Logistics"
        }
  ]

export const services = [
  {
    title: "Biodegradable Packaging Materials",
    description:
      "Eco-friendly packaging made from natural materials like bamboo, sugarcane, paper, and plant fibres.",
    icon: RiRecycleLine,
    slug: 'biodegradable-materials',
  },
  {
    title: "Compostable Food & Service Solutions",
    description:
      "Compostable containers, tableware, and service items suitable for food and takeaway businesses.",
    icon: GiMeal,
    slug: 'compostable-food-solutions',
  },
  {
    title: "Sustainable Business Materials",
    description:
      "Biodegradable alternatives for everyday plastic and disposable materials used in business operations.",
    icon: MdOutlineEco,
    slug: 'sustainable-business-materials',
  },
  {
    title: "Custom & Branded Eco Packaging",
    description:
      "Customisable and branded packaging solutions that align sustainability with your business identity.",
    icon: BsBoxSeam,
    slug: 'custom-branding',
  },
  {
    title: "Ethical Sourcing & Material Advisory",
    description:
      "Guidance on responsible material selection, ethical sourcing, and UK-compliant sustainability practices.",
    icon: FaHandsHelping,
    slug: 'advisory',
  },
  {
    title: "Flexible Supply for Businesses",
    description:
      "Low minimum orders and reliable supply plans designed for micro businesses and growing brands.",
    icon: HiOutlineBuildingStorefront,
    slug: 'flexible-supply-logistics',
  },
];

export const servicesData = [
    {
        slug: 'advisory',
        name: 'Ethical Sourcing & Material Advisory',
        heroDesc: 'Strategic guidance on navigating the transition from traditional plastics to high-performance, natural-fibre alternatives.',
        fullDescription: 'We provide a comprehensive roadmap for supply chain transformation. Our advisory service evaluates your current material footprint and identifies ethically sourced, biodegradable alternatives that meet international sustainability benchmarks while maintaining cost-efficiency.',
        features: [
            { title: 'Lifecycle Analysis', desc: 'Detailed assessment of material impact from sourcing to end-of-life.' },
            { title: 'Sourcing Transparency', desc: 'Verified ethical supply chains for natural fibres and bio-polymers.' },
            { title: 'Cost-Benefit Roadmap', desc: 'Strategy to transition without the "Green Premium" burden.' }
        ],
        benefits: 'Future-proof your business against plastic regulations and enhance corporate ESG ratings.'
    },
    {
        slug: 'biodegradable-materials',
        name: 'Biodegradable Packaging Materials',
        heroDesc: 'Next-generation packaging solutions engineered to perform like plastic and decompose like nature.',
        fullDescription: 'Our materials are derived from natural fibres and agricultural by-products. These are not just "recyclable"—they are fully biodegradable, ensuring that even if they leave the waste stream, they leave no microplastic trace behind.',
        features: [
            { title: 'Performance Testing', desc: 'High tensile strength and moisture resistance for industrial use.' },
            { title: 'Zero-Waste Disposal', desc: 'Materials designed to break down in soil or marine environments.' },
            { title: 'Industrial Scalability', desc: 'Consistent supply volumes for high-demand retail operations.' }
        ],
        benefits: 'Eliminate long-term waste liability and meet consumer demand for zero-plastic packaging.'
    },
    {
        slug: 'compostable-food-solutions',
        name: 'Compostable Food & Service Solutions',
        heroDesc: 'Premium disposables for the hospitality sector that integrate with organic waste streams.',
        fullDescription: 'Designed for the rigours of the food service industry, our range includes heat-resistant cutlery, leak-proof containers, and grease-resistant wraps. All products are certified compostable, allowing them to be disposed of alongside food waste.',
        features: [
            { title: 'Thermal Stability', desc: 'Engineered to handle hot foods and liquids without structural failure.' },
            { title: 'Food-Grade Safety', desc: 'PFAS-free and chemical-free materials for safe food contact.' },
            { title: 'Streamlined Disposal', desc: 'Compatible with commercial composting and organic waste bins.' }
        ],
        benefits: 'Reduce general waste collection costs by shifting disposables to the organic waste stream.'
    },
    {
        slug: 'sustainable-business-materials',
        name: 'Sustainable Business Materials',
        heroDesc: 'Eco-conscious operational supplies that align your workplace with your environmental values.',
        fullDescription: 'From office essentials to warehouse consumables, we provide businesses with the everyday materials required to run a professional operation without the reliance on single-use fossil-fuel-based plastics.',
        features: [
            { title: 'Operational Audit', desc: 'Identification of hidden plastic waste in your daily business routine.' },
            { title: 'Recycled Fiber Range', desc: 'High-quality paper and board materials with post-consumer content.' },
            { title: 'Carbon-Neutral Supply', desc: 'Logistics focused on minimizing the transport footprint of your supplies.' }
        ],
        benefits: 'Achieve internal sustainability targets and demonstrate environmental leadership to stakeholders.'
    },
    {
        slug: 'custom-branding',
        name: 'Custom & Branded Eco Packaging',
        heroDesc: 'Bespoke packaging solutions that communicate your brand’s commitment to the planet.',
        fullDescription: 'We merge high-end design with sustainable material science. Our custom branding service uses soy-based inks and non-toxic adhesives, ensuring your packaging is as beautiful as it is responsible.',
        features: [
            { title: 'Bespoke Engineering', desc: 'Custom shapes and sizes tailored to your specific product requirements.' },
            { title: 'Eco-Friendly Printing', desc: 'High-fidelity branding using water-based or vegetable-based inks.' },
            { title: 'Brand Storytelling', desc: 'Integration of "compostable" certifications directly onto your design.' }
        ],
        benefits: 'Turn your packaging into a powerful marketing tool that builds trust with eco-conscious customers.'
    },
    {
        slug: 'flexible-supply-logistics',
        name: 'Flexible Supply for Businesses',
        heroDesc: 'Scalable inventory and reliable logistics designed for the pace of modern B2B commerce.',
        fullDescription: 'Sustainability only works if it’s reliable. NixOut provides flexible supply contracts and responsive logistics, ensuring your business never runs out of the materials it needs to serve its customers.',
        features: [
            { title: 'Just-In-Time Delivery', desc: 'Minimize your storage requirements with responsive shipping.' },
            { title: 'Inventory Management', desc: 'Automated re-ordering based on your business’s consumption rates.' },
            { title: 'Multi-Site Support', desc: 'Coordinated logistics for businesses with multiple locations or branches.' }
        ],
        benefits: 'Maintain operational continuity with a supply partner that understands the scale of B2B needs.'
    }
];




