import Header from './_components/Header';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <div className={`max-w-7xl mx-auto my-0`}>
      <Header/>

      <section>
        {/* 프로필 카드 / 간단한 경력 정도 */}
      </section>
      <main>
        {/* 프로젝트 포트폴리오 리스트 나열 */}
      </main>

      <Footer/>
    </div>
  );
}
