import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LocomotiveScroll from 'locomotive-scroll';


// Reusable component for animating elements
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <motion.div
      ref={ref} // Attach the ref to this element
      initial={{ opacity: 0, y: 50 }} // Start with the element off-screen and invisible
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and on-screen when inView is true
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
 
  const locomotive = new LocomotiveScroll();

  return (
    <>
      <Navbar /> {/* Navbar is not wrapped in AnimatedSection, so it won't animate */}
      <AnimatedSection>
        <LandingPage />
      </AnimatedSection>
      <AnimatedSection>
        <Marquee />
      </AnimatedSection>
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Eyes />
      </AnimatedSection>
      <AnimatedSection>
        <Featured />
      </AnimatedSection>
      <AnimatedSection>
        <Cards />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </>
  );
};

export default App;
