import { Link } from "react-router-dom";

function StudentPage() {
    return (
        <>
            <div className="student-page-container">
                <div style={{ padding: "2rem" }}>
                    <h1>Welcome to Student Page</h1>
                    <p>Student Page Works</p>
                    <Link to="/network">Back to Network</Link>
                </div>
            </div>
        </>
    );
}

export default StudentPage;