import React from "react";
// Import both from the same line
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"; 
import NewsCard from "./newscard";
import news from "../utils/data";

export default function NewsGrid({ visibleCount}) {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-0 mx-auto">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
      >
        <Masonry gutter="16px">
          {news.slice(0, visibleCount).map((item, index) => {
  // Create an array of heights to rotate through for variety
  const heights = ["h-48", "h-64", "h-80", "h-56"];
  const selectedHeight = heights[index % heights.length];

  return (
    <NewsCard 
      key={item.id} 
      {...item} 
      aspect={selectedHeight} 
    />
  );
})}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}