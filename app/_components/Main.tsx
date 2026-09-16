"use client";

import { useState } from "react";
import profileImage from "../img/ProfileView.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCertificate, faStar, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

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
            <div className={`about w-full h-full p-3 bg-gray-300 shadow-md`}>
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
                            <p>
                                내용
                            </p>
                        </div>

                        <div className={`mt-3 p-3 bg-white rounded-md shadow-md hidden transition-all duration-300 ease-in-out`}>
                            <h5 className={`text-lg font-semibold mb-2 border-b border-gray-300 pb-1`}>
                                <span><FontAwesomeIcon icon={faCertificate} size="lg"/></span>
                                <span className={`text-center ml-2`}>훈련사항</span>
                            </h5>
                            <p>
                                내용
                            </p>
                        </div>

                        <div className={`mt-3 p-3 bg-white rounded-md shadow-md hidden transition-all duration-300 ease-in-out`}>
                            <h5 className={`text-lg font-semibold mb-2 border-b border-gray-300 pb-1`}>
                                <span><FontAwesomeIcon icon={faStar} size="lg"/></span>
                                <span className={`text-center ml-2`}>수상&자격증</span>
                            </h5>
                            <p>
                                내용
                            </p>
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

                        {/* <ul className={`flex flex-row justify-around items-center vertical-center`}>
                            <li className={`bg-white p-2 rounded-md shadow-sm`}>
                                <span><FontAwesomeIcon icon={faBriefcase} size="lg"/></span>
                                <span className={`text-center ml-2`}>경력</span>
                            </li>
                            <li className={`bg-white p-2 rounded-md shadow-sm`}>
                                <span><FontAwesomeIcon icon={faCertificate} size="lg"/></span>
                                <span className={`text-center ml-2`}>훈련사항</span>
                            </li>
                            <li className={`bg-white p-2 rounded-md shadow-sm`}>
                                <span><FontAwesomeIcon icon={faStar} size="lg"/></span>
                                <span className={`text-center ml-2`}>수상&자격증</span>
                            </li>
                        </ul> */}

export default Main;