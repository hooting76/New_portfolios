
const Section = () => {
    return (
        <section className={`w-full h-screen bg-white p-5 mt-20`}>
            <div className={`p-3 box-border border border-indigo-100 rounded-md shadow-md`}>
                <h1 className={`text-2xl font-bold border-indigo-300 mb-2 pb-2`}>
                    <span className={`mr-1`}>👋</span>
                    반가워요 :D
                </h1>
                <h2 className={`text-lg font-semibold`}>
                    저는 <span className={`font-bold text-indigo-600`}>조창훈</span> 이라고 해요!
                </h2>
                <h3>
                    {/* 얼굴 사진과 간단한 자기소개 / 간단한 인적사항 / 짫은 경력 소개 등 */}
                </h3>
            </div>
        </section>
    );
}

export default Section;