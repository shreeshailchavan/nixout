import tm3 from '../assets/tm3.jpeg';
export const CallToAction = () => {
    return(
        <section className="py-10 sm:py-16 lg:py-24 bg-[#FCF8F1]">
  <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">

      {/* Left: Testimonial */}
      <div>
        <img
          className="object-cover w-16 h-16 rounded-full"
          src={tm3}
          alt="Restaurant owner testimonial"
        />

        <blockquote>
          <p className="mt-6 text-xl leading-relaxed text-black text-left">
            “Switching to NixOut’s biodegradable materials helped us reduce plastic
            waste without disrupting daily operations. The quality, reliability,
            and sustainability standards are exactly what small businesses need.”
          </p>
        </blockquote>

        <p className="mt-6 text-base font-semibold text-black">
          Sarah Mitchell
        </p>
        <p className="mt-1 text-base text-gray-600">
          Owner, Independent Café · UK
        </p>
      </div>

      {/* Right: CTA Card */}
      <div>
        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl tinos-regular">
          <div className="p-8 lg:px-12 lg:py-10">

            <h3 className="text-2xl font-semibold text-black">
              Ready to Make the Switch to Sustainable Materials?
            </h3>

            <p className="mt-4 text-base text-gray-600">
              Speak with our team about biodegradable, responsibly sourced
              materials designed for restaurants and eco-conscious businesses.
            </p>

            <a
              href="/contact"
              className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-[#8A8635] rounded-md hover:bg-[#6f6c2a]"
              role="button"
            >
              Request a Business Enquiry
            </a>

            <a
              href="mailto:sales@nixout.uk"
              className="flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white"
              role="button"
            >
              Contact Sales
            </a>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    )
}