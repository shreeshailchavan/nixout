
import { services } from "../utils/data";
import { Link } from "react-router";
export const Feature = () => {

    return (
      <section class="py-6 sm:py-16 lg:py-20">
   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-black leading-tight tinos-regular sm:text-4xl xl:text-5xl font-pj">
      How We Support Your Business
    </h2>
    <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8 font-pj">
From material selection to reliable supply, we help businesses adopt sustainable alternatives with confidence.    </p>
  </div>

  <div className="grid grid-cols-1 mt-5 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-20">
    {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <div
      key={index}
      className="relative md:p-8 lg:p-14 cursor-pointer group
      md:border-gray-200 md:border-l md:border-t
      first:md:border-l-0 md:[&:nth-child(-n+3)]:border-t-0 p-2"
        
    >
      <Link to={"/services/"+service.slug}>
      {/* Hover Borders */}
      {/* <span className="pointer-events-none absolute right-0 top-0 h-full w-[2px] bg-[#8A8635] opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
      <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-[#8A8635] opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

      <Icon className="mx-auto text-gray-900" size={42} />

      <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
        {service.title}
      </h3>

      <p className="mt-5 text-base text-gray-600 font-pj">
        {service.description}
      </p>
    </Link>
    </div>
  );
})}

  </div>
</div>

</section>
    )
}