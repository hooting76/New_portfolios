'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Koedu from '../img/ko-edu.jpg';
import Hsclone from '../img/hs-clone.jpg';
import FireClone from '../img/firefighter.png';
import PortfolioDisplay from '../img/portfolio-display.png';

const Portfolio = () =>{
    return(
        <section className={`bg-white p-3 pb-7 pt-5`}>
            <h6 className={`text-center text-2xl font-semibold`}>
                Portfolio
            </h6>
            <Swiper
                modules={[Pagination, Autoplay ]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                className={`mt-3 bg-gray-100 rounded-md shadow-md box-border`}
                pagination={{ clickable: true }}
            >


                <SwiperSlide>
                    <div className={`px-5 py-15 box-border bg-gray-100 flex flex-row justify-around items-center flex-wrap gap-5`}>
                        <div className={`flex flex-row justify-around items-center gap-10 flex-wrap`}>
                            <h6 className={`text-xl font-semibold`}>
                                포트폴리오 페이지<br/>
                                <span className={`text-gray-600 italic text-sm`}>* 1인 프로젝트</span>
                            </h6>
                            <img 
                                src={PortfolioDisplay.src} 
                                alt="포트폴리오 페이지" 
                                className="w-50 h-50 object-cover rounded-full"
                            />
                        </div>
                        <div>
                            <ul className={`flex flex-col gap-2 list-disc font-semibold text-gray-500`}>
                                <li>VScode, Photoshop</li>
                                <li>NextJS(ReactJS, Typescript), Tailwind CSS</li>
                                <li>반응형 코드 일부 적용</li>
                                <li>첫 NextJS 프로젝트</li>
                                <li className={`list-none`}>
                                    <a 
                                        href='https://github.com/hooting76/New_portfolios'
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`rounded-md bg-gray-900 px-2 py-2 font-semibold text-white transition mr-2 hover:bg-gray-700`}
                                    >
                                        <span><FontAwesomeIcon icon={faGithub} size="lg"/></span>
                                        소스코드
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </SwiperSlide>


                <SwiperSlide>
                    <div className={`px-5 py-15 box-border bg-gray-100 flex flex-row justify-around items-center flex-wrap gap-5`}>
                        <div className={`flex flex-row justify-around items-center gap-10 flex-wrap`}>
                            <h6 className={`text-xl font-semibold`}>
                                블루크랩 LMS 프로젝트<br/>
                                <span className={`text-gray-600 italic text-sm`}>* 25년 훈련과정 LMS 프로젝트</span>
                            </h6>
                            <iframe src="https://www.youtube.com/embed/Q0Sch4sTW0g" title="블루크랩 발표"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className={`w-50 h-50 object-cover rounded-md`}></iframe>
                        </div>
                        <div>
                            <ul className={`flex flex-col gap-2 list-disc font-semibold text-gray-500`}>
                                <li>VScode, EdrawMind, Discord</li>
                                <li>JAVA, MariaDB, Javascript(ReactJS), HTML5, CSS3</li>
                                <li>전체 반응형 페이지 작업 적용</li>
                                <li>서비스 실제 배포 및 PWA 서비스</li>
                                <li>팀 내 팀장 역할 수행</li>
                                <li className={`list-none`}>
                                    <a 
                                        href='https://github.com/hooting76/blue-crab-lms'
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`rounded-md bg-gray-900 px-2 py-2 font-semibold text-white transition mr-2 hover:bg-gray-700`}
                                    >
                                        <span><FontAwesomeIcon icon={faGithub} size="lg"/></span>
                                        소스코드
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </SwiperSlide>


                <SwiperSlide>
                    <div className={`px-5 py-15 box-border bg-gray-100 flex flex-row justify-around items-center relative flex-wrap gap-5`}>
                        <div className={`flex flex-row justify-around items-center gap-10 flex-wrap`}>
                            <h6 className={`text-xl font-semibold`}>
                                ㈜ 한국교육평가원<br/>
                                <span className={`text-gray-600 italic text-sm`}>* 해당 이미지는 회사 내 서비스 일부 화면의 예시</span>
                            </h6>
                            <img 
                                src={Koedu.src}
                                alt='한국교육평가원 포트폴리오'
                                className="w-50 h-50 object-cover rounded-full"
                             />
                        </div>
                        <div>
                            <ul className={`flex flex-col gap-2 list-disc font-semibold text-gray-500`}>
                                <li>Notepad++, Photoshop, Illustrator</li>
                                <li>Classic ASP, MS-SQL, HTML5, CSS3, Javascript, jQuery</li>
                                <li>서비스중인 페이지에 대한 코드 최적화 작업(jQuery, Javascript)</li>
                                <li>신규 페이지 개발(Classic ASP, MS-SQL)</li>
                                <li>반응형 페이지 개발(HTML5, CSS3)</li>
                                <li>웹 디자인 작업(Photoshop, Illustrator)</li>
                            </ul>
                        </div>
                        <p className={`px-3 text-gray-600 text-sm bg-gray-100 absolute bottom-0 left-0`}>*회사 보안상의 이유로 자세한 내용 공개 불가</p>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className={`px-5 py-15 box-border bg-gray-100 flex flex-row justify-around items-center flex-wrap gap-5`}>
                        <div className={`flex flex-row justify-around items-center gap-10 flex-wrap`}>
                            <h6 className={`text-xl font-semibold`}>
                                한신대학교 클론코딩<br/>
                                <span className={`text-gray-600 italic text-sm`}>* 1인프로젝트</span>
                            </h6>
                            <img 
                                src={Hsclone.src}
                                alt='한신대학교 페이지 클론코딩'
                                className="w-50 h-50 object-cover rounded-full"
                             />
                        </div>
                        <div>
                            <ul className={`flex flex-col gap-2 list-disc font-semibold text-gray-500`}>
                                <li>VScode, Photoshop</li>
                                <li>HTML5, CSS3, Javascript, jQuery</li>
                                <li>클론코딩 페이지</li>
                                <li>반응형 페이지 작업</li>
                                <li className={`list-none`}>
                                    <a 
                                        href='https://github.com/hooting76/Second_Publishing'
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`rounded-md bg-gray-900 px-2 py-2 font-semibold text-white transition mr-2 hover:bg-gray-700`}
                                    >
                                        <span><FontAwesomeIcon icon={faGithub} size="lg"/></span>
                                        소스코드
                                    </a>

                                    <a 
                                        href='https://hooting76.github.io/Second_Publishing/'
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`rounded-md bg-blue-500 px-2 py-2 font-semibold text-white transition mr-2 hover:bg-blue-400`}
                                    >
                                        <span><FontAwesomeIcon icon={faGlobe} size="lg"/></span>
                                        페이지
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </SwiperSlide>   


                <SwiperSlide>
                    <div className={`px-5 py-15 box-border bg-gray-100 flex flex-row justify-around items-center flex-wrap gap-5`}>
                        <div className={`flex flex-row justify-around items-center gap-10 flex-wrap`}>
                            <h6 className={`text-xl font-semibold`}>
                                소방청 클론코딩<br/>
                                <span className={`text-gray-600 italic text-sm`}>* 1인프로젝트</span>
                            </h6>
                            <img 
                                src={FireClone.src}
                                alt='소방청 페이지 클론코딩'
                                className="w-60 h-50"
                             />
                        </div>
                        <div>
                            <ul className={`flex flex-col gap-2 list-disc font-semibold text-gray-500`}>
                                <li>VScode, Photoshop</li>
                                <li>HTML5, CSS3, Javascript, jQuery</li>
                                <li>클론코딩 페이지</li>
                                <li>1400px 사이즈 고정</li>
                                <li className={`list-none`}>
                                    <a 
                                        href='https://github.com/hooting76/First_Publishing'
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`rounded-md bg-gray-900 px-2 py-2 font-semibold text-white transition mr-2 hover:bg-gray-700`}
                                    >
                                        <span><FontAwesomeIcon icon={faGithub} size="lg"/></span>
                                        소스코드
                                    </a>

                                    <a 
                                        href='https://hooting76.github.io/First_Publishing/'
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className={`rounded-md bg-blue-500 px-2 py-2 font-semibold text-white transition mr-2 hover:bg-blue-400`}
                                    >
                                        <span><FontAwesomeIcon icon={faGlobe} size="lg"/></span>
                                        페이지
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </SwiperSlide>                  


            </Swiper>
        </section>
    );
};

export default Portfolio;