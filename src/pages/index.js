
import HeroAnimation from '../components/Hero/HeroAnimation';
import Hero from '../components/Hero/Hero';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/common';
import { AppProvider } from "../context"

const Home = () => {
  return (
    <>
      <AppProvider>
        <Layout>
          <Section grid>
            <Hero />
            <HeroAnimation />
          </Section>
        </Layout>
      </AppProvider>
    </>

  );
};

export default Home;