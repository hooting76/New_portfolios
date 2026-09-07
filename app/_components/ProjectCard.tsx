import Card from "./Card";
import { Project } from "@/types/project";

type Props = {
    project: Project;
};

export default function ProjectCard({
    project
}: Props){

    return (
        <Card>
            <img
                src={project.image}
                alt={project.title}
            />

            <h2>
                
            </h2>
        </Card>
    );
}