import Hero from '../components/hero';
import { Feature } from '../components/feature';
import { Team } from '../components/team';
import { Testimonials } from '../components/testimonials';
import { CallToAction } from '../components/calltoaction';


export const Home = () => {
  

  return (
    <>
      <main className="flex-grow tinos-regular">
      <Hero/>
      <Feature />
      <Team/>
      <Testimonials/>
      <CallToAction />
      </main>
</>

  );
}