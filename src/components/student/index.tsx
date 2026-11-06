    import type { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { students } from "../../mock-data/mockData";
// import "./studentServices.css";
import StudentImage from "./img/index"
import "./index.css"

function StudentProfile() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const student = students.find((candidate) => String(candidate.id) === id);

    if (!student) {
        return (
            <div className="student-profile-section">
                <div style={{ padding: "2rem", textAlign: "center" }}>
                    <h2>Student not found</h2>
                    <button className="connect-button" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="student-profile-section">
                {/* Back Link */}
                <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }} className="back-link">
                    &larr; Go back
                </a>
                <div className="student-grid">
                {/* Profile Header */}
                <div className="profile-header">
                    <StudentImage student={student} label={{ text: student.name }} />
                    <div className="student-text">
                        <h1 className="profile-name">{student.name}</h1>
                        <p className="profile-majors">
                            {student.majors ? student.majors.join(" • ") : "UConn Student"}
                        </p>
                       {student.status && (
                            <span className={`status-badge ${student.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {student.status}
                            </span>
                        )}
                        <ToolBar/>
                    </div>
                </div>
                <div className="student-info">
                    <StudentStats/>
                </div>
                </div>
            </div>
   
    );
}

function Button({ onClick, children }: { onClick: () => void; children: ReactNode }) {
    return (
        <button onClick={e =>{ e.stopPropagation(); onClick()}}>{children}</button>
    )
}

function ToolBar(){
    // const [message, setMessage] = useState("");
    return (
        <>
        <div className="user-connect">
            <Button onClick={() => alert("messaging")}>Message</Button>
            <Button onClick={() => alert("messaging")}>Message</Button>
        </div>
        </>
    )
}

function StudentStats (){
    return (
        <>
        <div className="student-dataa">
            <p>student information based on the current semester.</p>
        </div>
        </>
    )
}

// function StudentShedule(){}

export default StudentProfile;