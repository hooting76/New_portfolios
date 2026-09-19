'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFile, faUser } from '@fortawesome/free-solid-svg-icons';

const menuClickHandler = () => {
    const nav = document.querySelector('header > nav');
    if (!nav) return;
    
    if (nav?.classList.contains('on')) {
        nav.classList.remove('on');
        document.body.style.overflow = 'auto'; // 스크롤 잠금 해제
    }else{
        nav?.classList.add('on');
        document.body.style.overflow = 'hidden'; // 스크롤 잠금
    }
};

const Header = () => {
    return(
        <header className={`fixed top-3 left-3 z-50 hidden`}>
            <p 
                onClick={menuClickHandler} 
                className={`absolute top-0 left-0 z-40 p-2 bg-white shadow-md rounded-md cursor-pointer border border-indigo-100 w-fit`}
            >
                <FontAwesomeIcon icon={faBars} size="lg"/>
            </p>

            <nav className={`absolute top-0 left-0 z-30 p-2 bg-white shadow-md rounded-md border border-indigo-100`} >
                <ul>
                    {/* <li><FontAwesomeIcon icon={faUser} size="lg"/></li> */}
                    <li>
                        <a 
                            href={`${process.env.NODE_ENV === 'production' ? '/New_portfolios' : ''}/20260919.pdf`}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faUser} size="lg"/>
                        </a>
                    </li>
                    {/* <li>
                        <a 
                            href={`${process.env.NODE_ENV === 'production' ? '/New_portfolios' : ''}/history.hwp`}
                            download="조창훈_경력기술서.hwp"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faFile} size="lg"/>
                        </a>                        
                    </li> */}
                </ul>
                <div 
                    className={`dk-wrap absolute -top-3 -left-3 w-screen h-screen bg-black opacity-50 hidden`}
                    onClick={menuClickHandler} 
                ></div>
            </nav>
        </header>
    );
};

export default Header;