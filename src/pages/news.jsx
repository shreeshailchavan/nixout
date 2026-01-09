import React, { useState } from "react";
import NewsGrid from "../components/newsgrid";
import {news} from "../utils/data";

export const NewsAndStories = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section className="py-10 sm:py-16 lg:py-20 tinos-regular">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tinos-regular text-gray-900 sm:text-4xl">
            News & Stories
          </h2>
          <p className="mt-4 text-gray-600">
            Updates, insights, and real-world sustainability stories from NixOut.
          </p>
        </div>

        {/* Masonry Grid */}
        <NewsGrid visibleCount={visibleCount} />

        {/* Load More */}
        {visibleCount < news.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 text-sm font-semibold border border-[#8A8635] text-[#8A8635] rounded-full hover:bg-[#8A8635] hover:text-white transition-all"
            >
              Load more stories
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
