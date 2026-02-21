import ProjectCard from "../components/cards/ProjectCard";

const Projects = () => {
    return (
        <div id="projects" className="section-cont">
            {/* <h2 className="mb-6">My Projects</h2> */}
            <div className="section-card  flex justify-around ">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects;

