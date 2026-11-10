// about 영역
const Main = () => {
    return (
        <main 
            id="about"
            className="border-b-1 border-gray-200 bg-white px-15 py-30"
        >
            <div className="flex flex-wrap justify-between gap-2 items-baseline">
                <h2 className="text-4xl font-bold">About me</h2>
                <p className="text-gray-400 pr-10">서비스 화면의 유지보수부터 신규 페이지와 반응형 웹 개발까지 경험했습니다.</p>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-20 gap-2">
                <h4 className="text-2xl w-75">
                    성실함과 끈기로 끝까지 해내고, 
                    <span className="ml-1 font-bold text-green-800">소통함으로 함께 만듭니다.</span>
                </h4>

                <ul className="my-5 border-t border-b border-gray-200 py-5 max-w-sm">
                    <li className="flex flex-nowrap items-center pb-3 mb-3 border-b border-gray-200">
                        <p className="w-25 text-gray-400">이름</p>
                        <p className="w-full font-bold">조창훈</p>
                    </li>

                    <li className="flex flex-nowrap items-center pb-3 mb-3 border-b border-gray-200">
                        <p className="w-25 text-gray-400">학력</p>
                        <p className="w-full font-bold">한신대학교 컴퓨터공학부 졸업</p>
                    </li>

                    <li className="flex flex-nowrap items-center pb-3 mb-3 border-b border-gray-200">
                        <p className="w-25 text-gray-400">관심 분야</p>
                        <p className="w-full font-bold">웹 프론트엔드 개발, 웹 퍼블리싱, 반응형 웹, 서비스 개선</p>
                    </li>

                    <li className="flex flex-nowrap items-center">
                        <p className="w-25 text-gray-400">Github</p>
                        <p className="w-full font-bold">
                            <a href="https://www.github.com/hooting76">
                                github.com/hooting76
                            </a>
                        </p>
                    </li>
                </ul>
            </div>

            <div className="border-t border-b border-gray-200 py-10 mt-10">
                <div className="flex flex-wrap justify-between items-center gap-5">
                    <div>
                        <span className="font-labelling text-sm text-gray-400">2022.10 - 2024.12</span>
                        <h5 className="font-bold text-xl my-2 ">㈜ 한국교육평가원</h5>
                        <span className="text-base text-gray-600">웹 퍼블리셔 · 주임</span>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <span className="font-labelling text-xs">주요 업무</span>
                            <p className="font-bold text-sm">서비스 페이지 유지보수 및 신규 개발</p>
                        </div>
                        <div>
                            <span className="font-labelling text-xs">기술</span>
                            <p className="font-bold text-sm">Classic ASP · MS SQL</p>
                        </div>
                        <div>
                            <span className="font-labelling text-xs">경험</span>
                            <p className="font-bold text-sm">웹 페이지 개발 · 반응형 페이지 개발</p>
                        </div>
                        <div>
                            <span className="font-labelling text-xs">기타 사항</span>
                            <p className="font-bold text-sm">웹 디자인 작업 병행</p>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="border-t border-b border-gray-200 py-10 mt-10">
                <div className="flex flex-wrap justify-between items-center gap-5">
                    <div>
                        <span className="font-labelling text-sm text-gray-400">자격증</span>
                        <h5 className="font-bold text-xl my-2 ">웹디자인개발기능사</h5>
                        <span className="text-base text-gray-600">2022.04</span>
                    </div>
                    <div>
                        <span className="font-labelling text-sm text-gray-400">수상내역</span>
                        <h5 className="font-bold text-xl my-2 ">26회 대한민국학생발명전시회 한국무역협회장상 동상</h5>
                        <span className="text-base text-gray-600">2013.07</span>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Main;