import Hero from '../components/hero';
import { Feature } from '../components/feature';
import { Team } from '../components/team';
import { Testimonials } from '../components/testimonials';
import { CallToAction } from '../components/calltoaction';
import { HomeAbout } from '../components/homeabout';


export const Home = () => {
  

  return (
    <>
      <main className="flex-grow tinos-regular bg-[#F5F5F0]">
      <Hero/>
      <HomeAbout/>
      <Feature />
      <Team/>
      <Testimonials/>
      <CallToAction />
      </main>
</>

  );
}