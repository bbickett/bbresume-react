import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skill from '@/types/Skill'

const SkillItem = (skill: Skill) => {
    return (
        <div className="skill">{ skill.skill }
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={ {"width": `${skill.percent}%`}}></div>
            </div>
        </div>
    )
}

const Skills = ({resume}: any) => {
    var languageSkills = resume.skills?.filter((s: Skill) => s.type === 'language')
    var librarySkills = resume.skills.filter((s: Skill) => s.type === 'library')
    var devtoolSkills = resume.skills.filter((s: Skill) => s.type === 'devtool')
    var personalSkills = resume.skills.filter((s: Skill) => s.type === 'personal')

    return (
        <div className="skills-section">
            <h4 className="page-heading">Skills</h4>

            <h5 className="header">Languages</h5>
            <div className="skills">
                { languageSkills.map((skill: Skill) => (
                    <SkillItem key={skill.skill} {...skill} />
                ))}
            </div>

            <h5 className="header">Libraries / Frameworks</h5>
            <div className="skills">
                {
                    librarySkills.map((skill: Skill) => (
                        <SkillItem key={skill.skill} {...skill} />
                ))}
                
            </div>

            <h5 className="header">Development Tools</h5>
            <div className="skills">
                {
                    devtoolSkills.map((skill: Skill) => (
                        <SkillItem key={skill.skill} {...skill} />
                ))}
            </div>

            <h5 className="header">Personal</h5>
            <div className="skills">
                {
                    personalSkills.map((skill: Skill) => (
                        <div key={skill.skill} className="skill"><FontAwesomeIcon icon={skill.icon}></FontAwesomeIcon>{ skill.skill }</div>
                    ))
                }
            </div>

    </div>
    )
}

export default Skills