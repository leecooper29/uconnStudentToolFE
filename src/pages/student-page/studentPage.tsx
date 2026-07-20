// import { Link } from "react-router-dom";
import "./studentPage.css";
import StudentProfile from "./ui/studentProfile";

function StudentPage() {

    return (
        <>
            <div className="student-page-container">
                <div style={{ padding: "2rem" }}>
                    <h2>Welcome to Student Page</h2>
                    <StudentProfile/>
                    {/* <Link to="/network">Back to Network</Link> */}
                </div>
            </div>
        </>
    );
}

export default StudentPage;