
export default function Footer() {
    return(
        <footer className="bg-lime-100 px-15 pt-30 pb-5">
            <div className="flex flex-wrap justify-between gap-3 items-baseline">
                <h2 className="text-4xl font-bold">Journey Together</h2>
                <div className="pr-10 flex flex-col justify-center items-start">
                    <a 
                        className="border-b mb-3"
                        href="mailto:ggongco1120@gmail.com"
                    >
                        ggongco1120@gmail.com
                    </a>
                    <a  className="border-b mb-3"
                        href="https://github.com/hooting76"
                    >
                        Github ↗
                    </a>
                    <a  className="border-b mb-3"
                        href="tel:+821021585184"
                    >
                        Calling here
                    </a>
                </div>
            </div>

            <div className="pt-15">
                <p className="text-right text-sm text-gray-400">본 페이지는 상업적 목적이 없는 개인 포트폴리오입니다.</p>
            </div>
        </footer>
    );
};