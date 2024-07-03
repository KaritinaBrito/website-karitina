import Navbar from "../Components/navbar/Navbar";
import Header from "../Components/header/Header";
import AboutMe from "../Components/aboutMe/AboutMe";
import Experience from "../Components/experience/Experience";
import Services from "../Components/Services/Services";
import Testimonials from "../Components/testimonials/Testimonials";
import Footer from "../Components/footer/Footer";
import Contact from "../Components/contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <AboutMe />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
