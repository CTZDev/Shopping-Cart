import Banner from './components/Banner/Banner';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banner />
      </main>
      <Courses />
      <Footer />
    </>
  );
}

export default App;
