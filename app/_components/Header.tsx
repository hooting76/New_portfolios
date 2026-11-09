'use client';

const Header = () => {
    return(
        <header className={`p-5 border-b-1 border-gray-200 fixed top-0 left-0 bg-white/90 w-full`}>
            <div className="flex justify-between flex-nowrap max-w-6xl w-full mx-auto">
                <a 
                    href="#home"
                    className="block w-fit"
                >
                    <h1 className="font-bold text-sm w-fit">조창훈 포트폴리오</h1>
                </a>

                <nav className="flex w-fit gap-2">
                    <a 
                        href="#about"
                        className="font-bold text-sm w-fit"
                    >
                        소개
                    </a>
                    <a 
                        href="#project"
                        className="font-bold text-sm w-fit"
                    >
                        프로젝트
                    </a>
                    <a 
                        href="#skill"
                        className="font-bold text-sm w-fit"
                    >
                        기술
                    </a>
                </nav>
            </div>
            
        </header>
    );
};

export default Header;