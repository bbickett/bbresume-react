
const Experience = ({resume}: any) => {

    return (
        <div className="experience">
            <p className="summary">
                { resume.summary }
            </p>

            <h4 className="page-heading">Experience</h4>
            {
                resume.experience.map((ex:any) => (
                    <div key={`${ex.company}-${ex.position}`} className="job">
                        <div className="dates">
                            { ex.startdate } - { ex.enddate }
                        </div>

                        <div className="position">
                            <h5 className="title">{ ex.title }</h5>
                            <small className="company">{ ex.company }</small>

                            <ul className="duties">
                                {
                                    ex.duties.map((duty:any) => (
                                        <li key={duty}>{ duty }</li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Experience