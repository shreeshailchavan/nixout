import hero1 from '../assets/hero1.jpeg';
import tm1 from '../assets/tm1.jpeg';
import tm2 from '../assets/tm2.jpeg';
import tm3 from '../assets/tm3.jpeg';
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Hero from './hero';
import { Feature } from './feature';
import { Team } from './team';


export const Home = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Switching to NixOut helped us move away from plastic without increasing costs. The materials are practical, sustainable, and well-suited to a small kitchen like ours.",
      name: "Shreeshail",
      position: "CEO & Co-Founder",
      image: tm1
    },
    {
      id: 2,
      quote: "NixOut's products have transformed our business. Our customers appreciate the eco-friendly approach, and we've seen a boost in loyalty and sales.",
      name: "Anita",
      position: "Head of Operations",
      image: tm2
    },
    {
      id: 3,
      quote: "The quality and design of NixOut's sustainable packaging are top-notch. It's reassuring to know we're making a positive impact on the environment while delivering great products.",
      name: "Ravi",
      position: "Product Manager",
      image: tm3
    }
  ]

  return (
    <main className="flex-grow flex flex-col mt-6 items-center tinos-regular">
      <Hero/>
      <span className='text-xl md:text-2xl font-medium nav-item tinos-regular'></span>
      <Feature />
      <Team/>
      <span className='text-xl md:text-2xl font-medium nav-item tinos-regular'>What our Coustomer's say</span>
      <div className="mt-6 grid grid-cols-1 gap-4 w-full md:grid-cols-4 md:grid-rows-4 md:auto-rows-fr py-6">
        {
          testimonials.map(({ id, quote, name, position, image }) => (
            <div className="md:col-span-2 md:row-span-2 shadow-md rounded-xl p-6 flex">
              <div className="flex flex-col justify-between h-full gap-4">
                <div className="relative px-6">
                  <FaQuoteLeft className="absolute left-0 top-0 text-gray-300 text-sm" />
                  <p className="text-sm md:text-base md:text-lg font-medium text-gray-700 leading-relaxed line-clamp-5">
                    {quote}
                  </p>
                  <FaQuoteRight className="absolute right-0 bottom-0 text-gray-300 text-sm" />
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={image}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={name}
                  />
                  <div className="text-sm">
                    <p className="font-medium text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">{position}</p>
                  </div>
                </div>

              </div>
            </div>
          ))
        }
      </div>


    </main>
  );
}