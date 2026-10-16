import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypescript, faHtml5, faCss3, faJs, faNodeJs, faTailwindCss } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';

const techStacks = [
    { name: "TypeScript", color: "bg-blue-600", icon: faTypescript },
    { name: "TailwindCSS", color: "bg-teal-500", icon: faTailwindCss },
    { name: "Next.js", color: "bg-gray-700", icon: faNodeJs },
    { name: "JavaScript", color: "bg-yellow-500", icon: faJs },
    { name: "HTML5", color: "bg-orange-600", icon: faHtml5 },
    { name: "CSS3", color: "bg-blue-400", icon: faCss3 },
    { name: "Classic ASP", color: "bg-purple-600", icon: faCode },
    { name: "jQuery", color: "bg-red-600", icon: faJs },
    { name: "MS-SQL", color: "bg-green-700", icon: faDatabase },
    { name: "MariaDB", color: "bg-pink-600", icon: faDatabase },
];

const Aside = () =>{
    return(
        <aside className={`bg-gray-300 p-3 pb-7 pt-5`}>
            <h6 className={`text-2xl font-bold text-center mb-3`}>My Stack</h6>
            <div className="bg-gray-900 text-white min-h-fit p-5">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {techStacks.map((stack, index) => (
                        <div key={index} className="group perspective">
                            <div 
                                className="
                                    relative preserve-3d group-hover:rotate-y-180 duration-700 
                                    w-30 h-30 mx-auto
                                    sm:w-30 sm:h-30
                                    md:w-35 md:h-35
                                    lg:w-40 lg:h-40
                                "
                            >
                            <div className="absolute backface-hidden bg-gray-800 flex items-center justify-center rounded-lg w-full h-full">
                                <span className="text-5xl font-bold">
                                    <FontAwesomeIcon icon={stack.icon} size="lg" aria-label={stack.name}/>
                                </span>
                            </div>
                            <div
                                className={`absolute rotate-y-180 backface-hidden ${stack.color} flex items-center justify-center rounded-lg w-full h-full`}
                            >
                                <span className="text-lg font-semibold">{stack.name}</span>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <style>{`
                    .perspective { perspective: 1000px; }
                    .preserve-3d { transform-style: preserve-3d; }
                    .backface-hidden { backface-visibility: hidden; }
                `}</style>
            </div>
        </aside>
    );
};

export default Aside;