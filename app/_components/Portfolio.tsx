import Koedu from '../img/ko-edu.jpg';
import Hsclone from '../img/hs-clone.jpg';
import FireClone from '../img/firefighter.png';
import PortfolioDisplay from '../img/portfolio-display.png';

const Portfolio = () =>{
    return(
        <section 
            id='project'
            className="border-b-1 border-gray-200 bg-white px-15 py-30"
        >
            <div className="flex flex-wrap justify-between gap-2 items-baseline mb-10">
                <h2 className="text-4xl font-bold">My work</h2>
                <p className="text-gray-400 pr-10">개인 작업과 팀 프로젝트, 실무에서 다룬 내용을 소개합니다.</p>
            </div>

            <div className='flex flex-col items-start gap-10'>

                {/* portfolio */}
                <article className='grid overflow-hidden min-h-90 border-gray-200 border rounded w-full lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1'>

                    <div>
                        <img 
                            src={PortfolioDisplay.src} 
                            alt="PortfolioDisplay" 
                            className='w-full h-full min-h-80'
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className='flex flex-col items-start p-10 bg-slate-50'>
                        <h6 className='font-bold text-lg'>포트폴리오 페이지</h6>
                        <p className='mt-2 text-gray-500'>Next.js로 시작한 첫 프로젝트. 작업과 경력을 한 페이지에 담았습니다.</p>
                        <div className='flex flex-wrap gap-2 mt-5 '>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>Next.js</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>React</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>TypeScript</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>Tailwind CSS</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>Codex(AI)</span>
                        </div>
                        <ul 
                            id='list-mark'
                            className='mt-5 w-full flex flex-col gap-2'
                        >
                            <li className='text-gray-500 text-sm'>반응형 페이지</li>
                            <li className='text-gray-500 text-sm'>개인 프로젝트</li>
                        </ul>
                        <a 
                            href="https://github.com/hooting76/New_portfolios"
                            target='_blank'
                            className='mt-5 text-sm border-b font-semibold'
                        >
                            소스 코드 보기 ↗
                        </a>
                    </div>
                </article>

                {/* bluecrab */}
                <article className='grid overflow-hidden min-h-90 border-gray-200 border rounded w-full lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1'>

                    <div className='sm:order-1 md:order-1 lg:order-2'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Q0Sch4sTW0g?si=NTNrCqQtMiyxml9d" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>   
                    </div>                    

                    <div className='sm:order-2 md:order-2 lg:order-1 flex flex-col items-start p-10 bg-slate-50'>
                        <h6 className='font-bold text-lg'>LMS 프로젝트</h6>
                        <p className='mt-2 text-gray-500'>2025년 K-digital trainning 훈련과정 LMS 프로젝트. 팀장으로 협업을 이끌고 서비스를 배포했었습니다.</p>
                        <div className='flex flex-wrap gap-2 mt-5 '>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>Spring Boot</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>React(Vite)</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>MariaDB</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>Git</span>
                        </div>
                        <ul 
                            id='list-mark'
                            className='mt-5 w-full flex flex-col gap-2'
                        >
                            <li className='text-gray-500 text-sm'>전체 반응형 페이지 적용</li>
                            <li className='text-gray-500 text-sm'>NAS기기를 활용한 서비스 배포</li>
                            <li className='text-gray-500 text-sm'>팀 내 팀장 역할 수행</li>
                        </ul>
                        <a 
                            href="https://github.com/hooting76/blue-crab-lms"
                            target='_blank'
                            className='mt-5 text-sm border-b font-semibold'
                        >
                            소스 코드 보기 ↗
                        </a>
                    </div>

                </article>

                {/* koedu */}
                <article className='grid overflow-hidden min-h-90 border-gray-200 border rounded w-full lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1'>

                    <div>
                        <img 
                            src={Koedu.src} 
                            alt="koeduDisplay" 
                            className='w-full h-full min-h-80'
                            style={{ objectFit: 'cover' }}
                        />                        
                    </div>                    

                    <div className='flex flex-col items-start p-10 bg-slate-50'>
                        <h6 className='font-bold text-lg'>㈜ 한국교육평가원</h6>
                        <p className='mt-2 text-gray-500'>실서비스의 유지보수와 신규 화면 개발, 웹 디자인을 맡았습니다.</p>
                        <div className='flex flex-wrap gap-2 mt-5 '>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>Classic ASP</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>MS SQL</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>HTML5 · CSS3 · JS</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>jQuery</span>
                        </div>
                        <ul 
                            id='list-mark'
                            className='mt-5 w-full flex flex-col gap-2'
                        >
                            <li className='text-gray-500 text-sm'>jQuery와 JavaScript 코드 최적화</li>
                            <li className='text-gray-500 text-sm'>신규 페이지 및 반응형 화면 개발</li>
                            <li className='text-gray-500 text-sm'>ASP 페이지 유지보수</li>
                        </ul>
                        <p className='mt-5 text-sm border-b font-semibold'>
                            회사 보안상 상세 내용 비공개
                        </p>
                    </div>
                </article>

                {/* hs-clone */}
                <article className='grid overflow-hidden min-h-90 border-gray-200 border rounded w-full lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1'>

                    <div className='sm:order-1 md:order-1 lg:order-2'>
                           <img 
                            src={Hsclone.src} 
                            alt="hsDisplay" 
                            className='w-full h-full min-h-80'
                            style={{ objectFit: 'cover' }}
                        /> 
                    </div>                    

                    <div className='sm:order-2 md:order-2 lg:order-1 flex flex-col items-start p-10 bg-slate-50'>
                        <h6 className='font-bold text-lg'>한신대학교 클론코딩</h6>
                        <p className='mt-2 text-gray-500'>HTML과 CSS, JavaScript로 학교 웹사이트 화면을 구현했습니다.</p>
                        <div className='flex flex-wrap gap-2 mt-5 '>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>HTML5</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>CSS3</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>JavaScript</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>jQuery</span>
                        </div>
                        <ul 
                            id='list-mark'
                            className='mt-5 w-full flex flex-col gap-2'
                        >
                            <li className='text-gray-500 text-sm'>반응형 페이지 작업</li>
                            <li className='text-gray-500 text-sm'>개인 프로젝트</li>
                            <li className='text-gray-500 text-sm'>클론코딩</li>
                        </ul>
                        <div className='mt-5 flex flex-nowrap w-full gap-5 items-center'>
                            <a 
                                href="https://github.com/hooting76/Second_Publishing"
                                target='_blank'
                                className='text-sm border-b font-semibold'
                            >
                                소스 코드 보기 ↗
                            </a>
                            <a 
                                href="https://hooting76.github.io/Second_Publishing/"
                                target='_blank'
                                className='text-sm border-b font-semibold'
                            >
                                페이지 보기 ↗
                            </a>
                        </div>        
                    </div>
                </article>

                {/* firefighter-clone */}
                <article className='grid overflow-hidden min-h-90 border-gray-200 border rounded w-full lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1'>

                    <div>
                           <img 
                            src={FireClone.src} 
                            alt="hsDisplay" 
                            className='w-full h-full min-h-80'
                            style={{ objectFit: 'cover' }}
                        /> 
                    </div>                    

                    <div className='flex flex-col items-start p-10 bg-slate-50'>
                        <h6 className='font-bold text-lg'>소방청 클론코딩</h6>
                        <p className='mt-2 text-gray-500'>HTML과 CSS, JavaScript를 사용한 웹사이트 클론코딩입니다.</p>
                        <div className='flex flex-wrap gap-2 mt-5 '>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>HTML5</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>CSS3</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>JavaScript</span>
                            <span className='border rounded-2xl border-gray-200 px-2 py-1 text-sm text-gray-800'>jQuery</span>
                        </div>
                        <ul 
                            id='list-mark'
                            className='mt-5 w-full flex flex-col gap-2'
                        >
                            <li className='text-gray-500 text-sm'>1400px 고정 레이아웃</li>
                            <li className='text-gray-500 text-sm'>개인 프로젝트</li>
                            <li className='text-gray-500 text-sm'>클론코딩</li>
                        </ul>
                        <div className='mt-5 flex flex-nowrap w-full gap-5 items-center'>
                            <a 
                                href="https://github.com/hooting76/First_Publishing"
                                target='_blank'
                                className='text-sm border-b font-semibold'
                            >
                                소스 코드 보기 ↗
                            </a>
                            <a 
                                href="https://hooting76.github.io/First_Publishing/"
                                target='_blank'
                                className='text-sm border-b font-semibold'
                            >
                                페이지 보기 ↗
                            </a>
                        </div>        
                    </div>
                </article>
                
            </div>
            
        </section>
    );
};

export default Portfolio;