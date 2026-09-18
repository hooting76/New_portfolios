"use client";

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate, faStar, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import profileImage from "../img/ProfileView.jpg";

// 만나이 계산 함수 시작
const birthDate = new Date(1995, 10, 20);

const calculateAge = () => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age -= 1;
    }

    return age;
};
// 만나이 계산 함수 끝


// aboute me 메뉴 관련 헨들링
let currentIdx = 0;

const handleMenuClick = (arrow: string) => {
    const sections = document.querySelectorAll('.me_info02 > div');
    const totalSections = sections.length;

    if (totalSections === 0) return;

    if(arrow === "left"){
        currentIdx = (currentIdx - 1);
        if(currentIdx < 0){
            currentIdx = totalSections - 1;
        }
    } else if(arrow === "right"){
        currentIdx = (currentIdx + 1);
        if(currentIdx >= totalSections){
            currentIdx = 0;
        }
    };

    sections.forEach(element => {
        element.classList.add('hidden');
    });
    sections.item(currentIdx).classList.remove('hidden');
};
// aboute me 메뉴 관련 헨들링 끝


const Main = () => {
    // 만나이 계산 함수 호출 및 상태 관리
    const [age, setAge] = useState(calculateAge);

    return (
        <main>
            <div className={`about w-full h-full p-5 pb-10 bg-gray-300 shadow-md`}>
                <h4 className={`text-2xl font-bold text-center`}>About me</h4>
                <div className={`flex flex-col md:flex-row gap-3 mt-3 bg-white p-3 rounded-md shadow-md justify-around items-center`}>
                    <div className={`me_info01 flex flex-col pt-4 items-center`}>
                        <span>
                            <img
                                src={profileImage.src}
                                alt="프로필 사진"
                                className="w-25 h-25 object-cover rounded-full"
                            />
                        </span>
                        <p className={`text-center mt-4`}>
                            <span>조창훈</span>
                            <span className={`pl-1 ml-1 border-l-2 border-gray-400`}>만 {age}세</span>
                        </p>      
                        <p className={`text-center`}>
                            <span>한신대학교</span><br/>
                            <span>컴퓨터공학부 졸업</span>
                        </p>                                         
                    </div>
                    <div className={`me_info02 flex w-full md:w-1/2 flex-col gap-3 p-3 bg-gray-100 rounded-md shadow-md relative`}>

                        <div className={`mt-3 p-3 bg-white rounded-md shadow-md transition-all duration-300 ease-in-out`}>
                            <h5 className={`text-lg font-semibold mb-2 border-b border-gray-300 pb-1`}>
                                <span><FontAwesomeIcon icon={faBriefcase} size="lg"/></span>
                                <span className={`text-center ml-2`}>경력</span>
                            </h5>
                            <div>
                                <h5 className={`text-md font-semibold mb-3`}>
                                    ㈜ 한국교육평가원 
                                    <span className={`text-gray-600 italic ml-3`}>(22.10 - 24.12)</span>
                                </h5>
                                <ul className={`flex flex-row gap-4`}>
                                    <li>
                                        <ul className={`flex flex-col gap-2 h-full`}>
                                            <li>직무</li>
                                            <li>직책</li>
                                            <li>스킬</li>
                                            <li>업무</li>
                                        </ul>                                        
                                    </li>
                                    <li>
                                        <ul className={`flex flex-col gap-2`}>
                                            <li>웹 퍼블리셔</li>
                                            <li>주임</li>
                                            <li>
                                                <span className={`bg-purple-500 text-white font-semibold p-1 rounded-md`}>Clasic ASP</span>
                                                <span className={`bg-green-500 text-white font-semibold p-1 rounded-md ml-2`}>MS-SQL</span>
                                            </li>
                                            <li>서비스 관련 페이지 유지보수, 신규페이지 개발 및 반응형 페이지 개발</li>
                                        </ul>                                          
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={`mt-3 p-3 bg-white rounded-md shadow-md hidden transition-all duration-300 ease-in-out`}>
                            <h5 className={`text-lg font-semibold mb-2 border-b border-gray-300 pb-1`}>
                                <span><FontAwesomeIcon icon={faCertificate} size="lg"/></span>
                                <span className={`text-center ml-2`}>훈련사항#1</span>
                            </h5>
                            <div>
                                <h5 className={`text-md font-semibold mb-3`}>
                                    프로젝트기반 웹&앱(자바, 스프링, 리액트, 노코드) SW개발자 양성과정
                                    <span className={`text-gray-600 italic ml-3`}>(25.04 - 25.11)</span>
                                </h5>
                                <ul className={`flex flex-row gap-4`}>
                                    <li>
                                        <ul className={`flex flex-col gap-3 h-full`}>
                                            <li>기관</li>
                                            <li>스킬</li>
                                            {/* <li>자료</li> */}
                                            <li>목적</li>
                                        </ul>                                        
                                    </li>
                                    <li>
                                        <ul className={`flex flex-col gap-3`}>
                                            <li>성남 그린컴퓨터 아카데미</li>
                                            <li>                                            
                                                <span className={`bg-orange-500 text-white font-semibold p-1 rounded-md`}>JAVA</span>
                                                <span className={`bg-yellow-500 text-white font-semibold p-1 rounded-md ml-2`}>Javascript</span>
                                                <span className={`bg-blue-300 text-white font-semibold p-1 rounded-md ml-2`}>MariaDB</span>
                                            </li>
                                            {/* <li>
                                                <span>
                                                    <a
                                                        href="https://github.com/hooting76/blue-crab-lms"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        className={`rounded-md bg-gray-900 px-2 py-2 font-semibold text-white transition hover:bg-gray-700`}
                                                    >
                                                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a
                                                        href="https://www.youtube.com/watch?v=Q0Sch4sTW0g"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        className={`rounded-md bg-red-600 px-2 py-2 font-semibold text-white transition hover:bg-red-400 ml-2`}
                                                    >
                                                        발표영상
                                                        <FontAwesomeIcon icon={faYoutube} size="lg"/>
                                                    </a>
                                                </span>
                                            </li> */}
                                            <li>웹 서비스 전반에 대한 이해와 팀 프로젝트 경험</li>
                                        </ul>                                          
                                    </li>
                                </ul>                                
                            </div>
                        </div>

                        <div className={`mt-3 p-3 bg-white rounded-md shadow-md hidden transition-all duration-300 ease-in-out`}>
                            <h5 className={`text-lg font-semibold mb-2 border-b border-gray-300 pb-1`}>
                                <span><FontAwesomeIcon icon={faCertificate} size="lg"/></span>
                                <span className={`text-center ml-2`}>훈련사항#2</span>
                            </h5>
                            <div>
                                <h5 className={`text-md font-semibold mb-3`}>
                                    [디지털디자인]반응형/웹퍼블리셔/프론트엔드 웹개발자 과정
                                    <span className={`text-gray-600 italic ml-3`}>(21.12 - 22.05)</span>
                                </h5>
                                <ul className={`flex flex-row gap-4`}>
                                    <li>
                                        <ul className={`flex flex-col gap-3 h-full`}>
                                            <li>기관</li>
                                            <li>스킬</li>
                                            <li>목적</li>
                                        </ul>                                        
                                    </li>
                                    <li>
                                        <ul className={`flex flex-col gap-3`}>
                                            <li>더 휴먼 컴퓨터아트 아카데미</li>
                                            <li>
                                                <span className={`bg-orange-400 text-white font-semibold p-1 rounded-md`}>HTML5</span>
                                                <span className={`bg-blue-300 text-white font-semibold p-1 rounded-md ml-2`}>CSS3</span>                                        
                                                <span className={`bg-yellow-500 text-white font-semibold p-1 rounded-md ml-2`}>Javascript</span>
                                                
                                            </li>
                                            <li>기초적인 반응형 개발 및 크로스브라우징, 프론트엔드 기초 이해</li>
                                        </ul>                                          
                                    </li>
                                </ul>                                
                            </div>
                        </div>

                        <div className={`mt-3 p-3 bg-white rounded-md shadow-md hidden transition-all duration-300 ease-in-out`}>
                            <h5 className={`text-lg font-semibold mb-2 border-b border-gray-300 pb-1`}>
                                <span><FontAwesomeIcon icon={faStar} size="lg"/></span>
                                <span className={`text-center ml-2`}>수상&자격증</span>
                            </h5>
                            <div>
                                <h5 className={`text-md font-semibold mb-1`}>
                                    웹디자인 개발기능사 자격증
                                    <span className={`text-gray-600 italic ml-3`}>(22.04)</span>
                                </h5>
                                <ul className={`flex flex-row gap-4`}>
                                    <li>
                                        <ul className={`flex flex-col gap-3 h-full`}>
                                            <li>기관</li>
                                        </ul>                                        
                                    </li>
                                    <li>
                                        <ul className={`flex flex-col gap-3`}>
                                            <li>한국산업인력공단</li>
                                        </ul>                                          
                                    </li>
                                </ul>   
                                <h5 className={`text-md font-semibold mb-1 mt-3`}>
                                    제 26회 대한민국학생발명전시회
                                    <span className={`text-gray-600 italic ml-3`}>(13.07)</span>
                                </h5>
                                <ul className={`flex flex-row gap-4`}>
                                    <li>
                                        <ul className={`flex flex-col gap-1 h-full`}>
                                            <li>출품명</li>
                                            <li>수상</li>
                                            <li>기관</li>
                                        </ul>                                        
                                    </li>
                                    <li>
                                        <ul className={`flex flex-col gap-1`}>
                                            <li>대류 원리 시험기구</li>
                                            <li>한국무역협회장상 동상</li>
                                            <li>특허청</li>
                                        </ul>                                          
                                    </li>
                                </ul>                                
                            </div>
                        </div>

                        <ul className={`flex flex-row justify-end absolute top-3 right-2 bg-gray-100 p-2 rounded-md cursor-pointer`} >
                            <li onClick={() => handleMenuClick("left")}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/></li>
                            <li onClick={() => handleMenuClick("right")}><FontAwesomeIcon icon={faArrowAltCircleRight} size="lg"/></li>
                        </ul>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;