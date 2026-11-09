'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import profile02 from '../img/profile2.jpg'

const Section = () => {

    // 타이핑 효과 함수 시작
    const [stringLength, setStringLength] = useState(0);    // 길이 상태 지정
    const tmp = 'UX는 작은 차이에서.';                       // 문자 변수 저장

    useEffect(() => {
        if (stringLength >= tmp.length) return;             // 저장한 문자 길이보다 크거나 같으면 종료

        const timer = window.setTimeout(() => {             // 글자를 순차적으로 나타내기 위한 타이머 지정
            setStringLength((length) => length + 1);        
        }, 140);

        return () => window.clearTimeout(timer);            // 타이머 리셋
    }, [stringLength, tmp.length]);

    const typedHeadline = tmp.slice(0, stringLength);       // 위의 타이머에 맞춰 문자열을 slice
    // 타이핑 효과 함수 끝

    return (
        <section className={`w-full h-full py-30 px-15 bg-white mt-10 flex flex-wrap lg:justify-between items-center gap-7.5 md:justify-center `}>

            {/* left */}
            <div className="flex flex-col gap-5 flex-nowrap">
                <h2 className="font-bold text-5xl">
                    {/* 자른 문자열을 순서에 맞게 배치 */}
                    <p>{typedHeadline.slice(0, 3)}</p>
                    <p>
                        <span className="text-green-800">
                            {typedHeadline.slice(4, 9)}
                        </span>
                        {/* 9번째 문자열부터 전부 출력으로 마무리 */}
                        {typedHeadline.slice(9)}

                        {/* 입력 커서 효과 */}
                        <span className="ml-1 inline-block h-10 w-0.5 animate-pulse bg-green-800 align-middle"></span>
                    </p>
                </h2>
                <h3 className="font-normal text-gray-400 max-w-sm">
                    안녕하세요, 웹 프론트엔드 개발자 조창훈입니다. 더 나은 웹 경험(UX)을 위해 고민하고 만들어갑니다.
                </h3>
                <div>
                    <a 
                        href="#project"
                        className="p-3 bg-green-800 text-white font-semibold text-sm rounded-lg"
                    >
                        프로젝트 보기
                        <span className='ml-2'>
                            <FontAwesomeIcon icon={faExternalLinkAlt} size="lg"/>
                        </span>
                    </a>
                </div>
            </div>

            {/* Right */}
            <div className='relative h-full max-w-xs overflow-hidden'>
                <img 
                    src={profile02.src} 
                    alt="프로필01" 
                    className="block opacity-50 " 
                    style={{ }}
                />
            </div>

        </section>
    );
}

export default Section;