
import HeroAnimation from '../components/Hero/HeroAnimation';
import Hero from '../components/Hero/Hero';
import NavgationBarFilters from "../components/Nav"
import { Layout } from '../layout/Layout';
import { Section } from '../styles/common';
import { AppProvider } from "../context"

import Projects from '../components/Projects/Cards'
import Accomplishments from '../components/Accomplishments/Accomplishments';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';

const Home = () => {
  return (
    <>
      <AppProvider>
        <Layout>
          <Section grid>
            <Hero />
            <HeroAnimation />
          </Section>
          <NavgationBarFilters/>

          <Projects />
          <Technologies />
          <Timeline />
          <Accomplishments />
        </Layout>
      </AppProvider>
    </>

  );
};

export default Home;