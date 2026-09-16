
const Section = () => {
    return (
        <section className={`w-full h-full p-5 bg-white mt-10 shadow-md`}>
            <div className={`p-10 box-border border border-indigo-100 rounded-md shadow-md text-center`}>
                <h1 className={`text-3xl font-bold border-indigo-300 mb-2 pb-2`}>
                    <span className={`mr-1`}>👋</span>
                    만나서 반가워요 :D
                </h1>
                <h2 className={`text-lg font-semibold`}>
                    저는 <span className={`font-bold text-indigo-600`}>조창훈</span> 이라고 해요!
                </h2>
                <h3>
                    <p className={`text-gray-600 pt-3 italic`}>Frontend-Developer</p>
                    <div className={`mt-6 flex flex-wrap justify-center gap-3`}>
                        <a
                            href="https://github.com/hooting76"
                            rel="noopener noreferrer"
                            target="_blank"
                            className={`rounded-md bg-gray-900 px-5 py-2 font-semibold text-white transition hover:bg-gray-700`}
                        >
                            GitHub
                        </a>
                        {/* <a
                            href="mailto:ggongco1120@gmail.com"
                            rel="noopener noreferrer"
                            className={`rounded-md bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-500`}
                        >
                            이메일
                        </a> */}
                    </div>
                </h3>
            </div>
        </section>
    );
}

export default Section;