import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return(
        <footer className={`font-semibold text-center bg-white`}>
            <h6 className={`text-2xl font-bold text-center my-3`}>Contact</h6>
            <div className={`flex flex-row justify-center gap-10 mt-5 flex-wrap py-3`}>
                <a
                    href="mailto:ggongco1120@gmail.com"
                    rel="noopener noreferrer"
                    className={`rounded-md bg-indigo-600 px-5 py-2 font-semibold text-white transition hover:bg-indigo-500`}
                >
                    <FontAwesomeIcon icon={faGoogle} size="lg"/>
                </a>

                <a
                    href="https://github.com/hooting76"
                    rel="noopener noreferrer"
                    className={`rounded-md bg-gray-900 px-5 py-2 font-semibold text-white transition hover:bg-gray-500`}
                >
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                </a>         

                <a
                    href="https://www.instagram.com/hoooonida/"
                    rel="noopener noreferrer"
                    className={`rounded-md bg-red-700 px-5 py-2 font-semibold text-white transition hover:bg-red-500`}
                >
                    <FontAwesomeIcon icon={faInstagram} size="lg"/>
                </a>                          

                <a
                    href="tel:+821021585184"
                    rel="noopener noreferrer"
                    className={`rounded-md bg-green-600 px-5 py-2 font-semibold text-white transition hover:bg-green-500`}
                >
                    <FontAwesomeIcon icon={faPhoneFlip} size="lg"/>
                </a>
            </div>
            <p className={`py-5 mt-5 text-gray-600 border-t border-gray-200`}>* 본 페이지는 상업적 목적이 없는 개인 포트폴리오 페이지임을 알립니다.</p>
        </footer>
    );
};