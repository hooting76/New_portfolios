'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const menuClickHandler = () => {
    console.log("asdf");
};

const Header = () => {
    return(
        <header className={`p-2 fixed top-3 left-3 bg-white shadow-md z-50 rounded-md cursor-pointer border border-indigo-100 hidden`}
        onClick={menuClickHandler}
        >
            <p>
                <FontAwesomeIcon icon={faBars} size="lg"/>
            </p>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;