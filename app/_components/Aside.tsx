import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypescript, faHtml5, faCss3, faJs, faNodeJs, faTailwindCss, faJava, faReact, faGit} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';


const skills = [
    { name: 'TypeScript', icon: faTypescript },
    { name: 'Tailwind CSS', icon: faTailwindCss },
    { name: 'Next.js', icon: faReact },
    { name: 'JavaScript', icon: faJs },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'React', icon: faReact },
    { name: 'Classic ASP', icon: faCode },
    { name: 'jQuery', icon: faNodeJs },
    { name: 'Spring Boot', icon: faJava },
    { name: 'MS SQL', icon: faDatabase },
    { name: 'MariaDB', icon: faDatabase },
    { name: 'Git', icon: faGit },
];

const others = [
    { Oname: 'Codex(AI)'},
    { Oname: 'Photoshop'},
    { Oname: 'Illustrator'},
]

const Aside = () =>{
    return(
        <aside 
            id='skill'
            className="border-b-1 border-gray-200 px-15 py-30 bg-green-900"
        >
            <div className="flex flex-wrap justify-between gap-2 items-baseline mb-10">
                <h2 className="text-4xl font-bold text-white">Tools I use</h2>
                <p className="text-gray-400 pr-10 text-white">프로젝트와 실무에서 사용한 기술입니다.</p>
            </div>

            <div className='flex flex-wrap justify-start items-center gap-10'>
                <div className="flex flex-wrap justify-start items-center gap-10 text-white">
                    {skills.map(({ name, icon }) => (
                        <p key={name}>
                            <span className="mr-1">
                                <FontAwesomeIcon icon={icon} size="lg" />
                            </span>
                            <span>{name}</span>
                        </p>
                    ))}
                    {others.map(({ Oname }) => (
                        <p key={Oname}>
                            <span>{Oname}</span>
                        </p>
                    ))}
                </div>                
            </div>
        </aside>
    );
};

export default Aside;