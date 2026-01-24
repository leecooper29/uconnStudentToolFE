import { useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Student } from "./ui/studentCard";
import "./ui/studentServices.css"

function StudentPage() {
    const { id } = useParams();
    const location = useLocation();
    const student = location.state as Student;
    const [isMessaging, setIsMessaging] = useState(false);
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (!message.trim()) return;
        alert(`Message sent to ${student.name}!`);
        setIsMessaging(false);
        setMessage("");
    };

    if (!student) {
        return (
            <div className="main-container">
                <h2>Student Not Found</h2>
                <p>No student data available for ID: {id}</p>
                <Link to="/network">Back to Network</Link>
            </div>
        );
    }

    return (
        <section className="student-profile-section">
            <Link to="/network" className="back-link">← Back to Network</Link>

            <div className="profile-header">
                <img alt="student" className="profile-image-large" src="https://via.placeholder.com/150" />
                <div className="header-info">
                    <h1 className="profile-name">{student.name}</h1>
                    <p className="profile-majors">{student.majors?.join(" & ")}</p>
                    <span className={`status-badge ${student.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                        {student.status || "Student"}
                    </span>

                    <div className="action-buttons">
                        <button className="connect-button primary">Connect</button>
                        <button
                            className="connect-button secondary"
                            onClick={() => setIsMessaging(!isMessaging)}
                        >
                            {isMessaging ? "Cancel" : "Message"}
                        </button>
                    </div>
                </div>
            </div>



            <div className="profile-grid">
                <div className="profile-sidebar">
                    <div className="card-section">
                        <h3>Contact</h3>
                        {student.email && <p className="contact-item">📧 {student.email}</p>}
                        {student.phone && <p className="contact-item">📱 {student.phone}</p>}

                        {student.socials && (
                            <div className="social-links">
                                {student.socials.linkedin && <a href={`https://${student.socials.linkedin}`} target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>}
                                {student.socials.github && <a href={`https://${student.socials.github}`} target="_blank" rel="noreferrer" className="social-link">GitHub</a>}
                            </div>
                        )}
                    </div>

                    <div className="card-section">
                        <h3>Skills</h3>
                        <div className="skills-cloud">
                            {student.skills?.map(skill => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {isMessaging && (
                        <div className="message-box-wrapper">
                            <div className="message-box">
                                <h3>Send a message to {student.name}</h3>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message here..."
                                    className="message-textarea"
                                />
                                <div className="message-actions">
                                    <button
                                        onClick={() => setIsMessaging(false)}
                                        className="connect-button secondary"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleSendMessage}
                                        className="connect-button primary"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="profile-content">
                    <div className="card-section">
                        <h3>About</h3>
                        <p className="bio-text">{student.bio || "No biography available."}</p>
                    </div>

                    <div className="card-section">
                        <h3>Academics</h3>
                        <div className="academics-stats">
                            <div className="stat-item">
                                <label>Class of</label>
                                <span>{student.graduationYear || "N/A"}</span>
                            </div>
                            <div className="stat-item">
                                <label>GPA</label>
                                <span>{student.gpa || "Hidden"}</span>
                            </div>
                        </div>

                        <h4 className="courses-title">Current Courses</h4>
                        <ul className="course-list">
                            {student.courses?.map(course => (
                                <li key={course}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentPage;