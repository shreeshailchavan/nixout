import React from "react";
import { Link } from "react-router";

const NewsCard = ({ imgSrc, title, excerpt, date, slug, aspect = "h-60" }) => (
<div className="group relative p-3 pb-5 shadow-sm transform transition-all hover:-translate-y-0.5 hover:shadow-md border-b border-[#8A8635]/20">
      {/* 1. The Image Container */}
      <div className="overflow-hidden rounded-sm bg-gray-200">
        <img
        loading="eager"
          src={imgSrc}
          alt={title}
          // The 'aspect' prop now controls the height dynamically
          className={`w-full ${aspect} object-cover transition-transform duration-500 group-hover:scale-105`}
        />
      </div>

      {/* 2. The Content */}
      <div className="mt-4 px-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A8635] border-b border-[#8A8635]/30 pb-1">
          {date}
        </span>
        
        <h3 className="mt-3 text-lg font-bold leading-tight text-gray-900 group-hover:text-[#8A8635] transition-colors">
          {title}
        </h3>
        
        <p className="mt-3 text-sm text-gray-600 line-clamp-2 italic">
          {excerpt}
        </p>

        <Link
          to={slug}
          className="inline-block mt-4 text-xs font-black uppercase tracking-tighter text-gray-400 group-hover:text-[#8A8635]"
        >
          Read full story —
        </Link>
      </div>
    </div>
);

export default NewsCard;
