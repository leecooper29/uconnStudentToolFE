
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

        </div>
    );
}

export default CareerCenter;
