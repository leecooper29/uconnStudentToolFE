
import "./careerCenter.css";

type CareerOpportunity = {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    description: string;
};

interface CareerCenterProps {
    opportunities: CareerOpportunity[];
}

function CareerCenter({ opportunities }: CareerCenterProps) {

    const handleApply = (title: string) => {
        alert(`Applied to ${title}!`);
    };

    return (
        <div className="career-center-container">
            <div className="career-title">
                <h3>Career Center - Internships & Jobs</h3>
            </div>
            <div className="career-grid">
                {opportunities.map((opp) => (
                    <div className="career-card" key={opp.id}>
                        <div className="career-header">
                            <h4>{opp.title}</h4>
                            <span className={`job-type ${opp.type.toLowerCase()}`}>{opp.type}</span>
                        </div>
                        <p className="company-name">{opp.company} • {opp.location}</p>
                        <p className="job-desc">{opp.description}</p>
                        <button
                            type="button"
                            className="apply-btn"
                            onClick={() => handleApply(opp.title)}
                        >
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerCenter;
