import { RiRecycleLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import { MdOutlineEco } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

export const Feature = () => {
const services = [
  {
    title: "Biodegradable Packaging Materials",
    description:
      "Eco-friendly packaging made from natural materials like bamboo, sugarcane, paper, and plant fibres.",
    icon: RiRecycleLine,
  },
  {
    title: "Compostable Food & Service Solutions",
    description:
      "Compostable containers, tableware, and service items suitable for food and takeaway businesses.",
    icon: GiMeal,
  },
  {
    title: "Sustainable Business Materials",
    description:
      "Biodegradable alternatives for everyday plastic and disposable materials used in business operations.",
    icon: MdOutlineEco,
  },
  {
    title: "Custom & Branded Eco Packaging",
    description:
      "Customisable and branded packaging solutions that align sustainability with your business identity.",
    icon: BsBoxSeam,
  },
  {
    title: "Ethical Sourcing & Material Advisory",
    description:
      "Guidance on responsible material selection, ethical sourcing, and UK-compliant sustainability practices.",
    icon: FaHandsHelping,
  },
  {
    title: "Flexible Supply for Small Businesses",
    description:
      "Low minimum orders and reliable supply plans designed for micro businesses and growing brands.",
    icon: HiOutlineBuildingStorefront,
  },
];

    return (
        <section class="py-6 sm:py-16 lg:py-20">
   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="text-center">
    <h2 className="text-3xl  leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
      How We Support Your Business
    </h2>
    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
From material selection to reliable supply, we help businesses adopt sustainable alternatives with confidence.    </p>
  </div>

  <div className="grid grid-cols-1 mt-5 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
    {services.map((service, index) => {
      const Icon = service.icon;

      return (
        <div
          key={index}
          className="md:p-8 lg:p-14 md:border-gray-200
            md:border-l md:border-t first:md:border-l-0
            md:[&:nth-child(-n+3)]:border-t-0 cursor-pointer"
        >
          <Icon className="mx-auto text-gray-900" size={42} />

          <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
            {service.title}
          </h3>

          <p className="mt-5 text-base text-gray-600 font-pj">
            {service.description}
          </p>
        </div>
      );
    })}
  </div>
</div>

</section>
    )
}