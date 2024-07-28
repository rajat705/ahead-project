import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import AppIntroduction from '../components/AppIntroduction';
import SelfImprovement from '../components/SelfImprovement';
import SocialProof from '../components/SocialProof';
import Careers from '../components/Careers';
import Footer from '../components/Footer';
import WorkWithUs from '../components/WorkWithUs';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureSection />
        <AppIntroduction />
        <SelfImprovement />
        <SocialProof />
        <WorkWithUs />
        <Careers />
      </main>
      <Footer />
    </>
  );
};

export default Home;
