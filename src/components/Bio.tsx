import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bio = (resume: any) => {

    const degrees = resume.education.map((d:any) => {
        return (
            <div key={d.degree}>
                <h5 className="degree">{ d.degree }</h5>
                <small>{ d.school }</small><br/>
                <small>{ d.year }</small>
            </div>
        )
    })

    return (
        <div className="bio">
            <h1>{resume.name}</h1>
            <h3 className="text-mute mt-4">{resume.title}</h3>

            <div className="personal-info">
                <h4 className="heading">Info</h4>

                <div className="subheading">
                    <FontAwesomeIcon icon="location-dot"></FontAwesomeIcon>
                    <div className="info">
                        { resume.address.city } { resume.address.state }
                    </div>
                </div>

                <div className="subheading">
                    <FontAwesomeIcon icon={resume.websites.github.icon}></FontAwesomeIcon>
                    <a href={resume.websites.github.url} className="info" target="_blank" rel="noopener noreferrer">
                        { resume.websites.github.title }
                    </a>
                </div>

                <div className="subheading">
                    <FontAwesomeIcon icon={resume.websites.linkedin.icon}></FontAwesomeIcon>
                    <a href={resume.websites.linkedin.url} target="_blank"
                        rel="noopener noreferrer">{ resume.websites.linkedin.title }</a>
                </div>
            </div>

            <div className="education">
                <h4 className="heading">Education</h4>
                {degrees}
            </div>


            <div className="hobbies">
                <h4 className="heading">Hobbies</h4>
                { resume.hobbies.map((hobby:any) => (
                    <span key={hobby.hobby} className="hobby"><FontAwesomeIcon icon={hobby.icon}></FontAwesomeIcon>{ hobby.hobby }</span>
                ))
                }

            </div>
        </div>
    )
}

export default Bio
