import SkillCard from "../components/cards/SkillCard"

const Skills = () => {
  return (
    <div id="skills" className="section-cont">
      <h2 className="text-2xl font-bold mb-4 ml-40">Skills</h2>
        <div className="section-card flex flex-wrap justify-center  ">
          {["JavaScript", "React", "Node.js", "TypeScript", "CSS"].map((skill) => (
            <SkillCard key={skill} text={skill} />
          ))}
            
        </div>
    </div>
  )
}

export default Skills