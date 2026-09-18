import Header from './_components/Header';
import Section from './_components/Section';
import Main from './_components/Main';
import Portfolio from './_components/Portfolio';
import Aside from './_components/Aside';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <div className={`max-w-7xl mx-auto my-0 flex flex-col`}>
      <Header/>

      <Section/>

      <Main/>

      <Portfolio/>

      <Aside/>

      <Footer/>
    </div>
  );
}
