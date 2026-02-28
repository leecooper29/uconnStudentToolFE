import { useLocation, useNavigate } from "react-router-dom";
import NetworkBar from "../../network-page/network-bar/NetworkBar";
import { Student } from "./studentCard";
import "./studentServices.css";

function StudentProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const student = location.state as Student;

    // Ideally handle case where student is null (e.g. direct URL access)
    if (!student) {
        return (
            <div className="student-profile-section">
                <NetworkBar />
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
            <NetworkBar />

            <div className="main-container">
                {/* Back Link */}
                <a href="#" onClick={(e) => { e.preventDefault(); navigate(-1); }} className="back-link">
                    &larr; Back to Students
                </a>

                {/* Profile Header */}
                <div className="profile-header">
                    <img
                        src={""} // Placeholder for now, as Student type doesn't have image URL yet
                        alt={`${student.name}'s profile`}
                        className="profile-image-large"
                    />

                    <div className="header-info">
                        <h1 className="profile-name">{student.name}</h1>
                        <p className="profile-majors">
                            {student.majors ? student.majors.join(" • ") : "UConn Student"}
                        </p>

                        {student.status && (
                            <span className={`status-badge ${student.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {student.status}
                            </span>
                        )}

                        <div className="action-buttons">
                            <button className="connect-button primary">Add Connection</button>
                            <button className="connect-button secondary">Message</button>
                        </div>
                    </div>
                </div>

                {/* Profile Grid */}
                <div className="profile-grid">

                    {/* Left Column: Contact & Quick Info */}
                    <div className="left-column">
                        <div className="card-section">
                            <h3>Contact Info</h3>

                            {student.email && (
                                <div className="contact-item">
                                    <strong>Email:</strong> {student.email}
                                </div>
                            )}

                            {student.phone && (
                                <div className="contact-item">
                                    <strong>Phone:</strong> {student.phone}
                                </div>
                            )}

                            {student.socials && (
                                <div className="social-links">
                                    {student.socials.linkedin && (
                                        <a href={student.socials.linkedin} target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                                    )}
                                    {student.socials.github && (
                                        <a href={student.socials.github} target="_blank" rel="noreferrer" className="social-link">GitHub</a>
                                    )}
                                    {student.socials.website && (
                                        <a href={student.socials.website} target="_blank" rel="noreferrer" className="social-link">Website</a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: About, Academics, Skills */}
                    <div className="right-column">

                        {/* About Section */}
                        {student.bio && (
                            <div className="card-section">
                                <h3>About Me</h3>
                                <p>{student.bio}</p>
                            </div>
                        )}

                        {/* Academics Section */}
                        <div className="card-section">
                            <h3>Academics</h3>
                            <div className="academics-stats">
                                {student.gpa && (
                                    <div className="stat-item">
                                        <label>GPA</label>
                                        <span>{student.gpa}</span>
                                    </div>
                                )}
                                {student.graduationYear && (
                                    <div className="stat-item">
                                        <label>Graduation</label>
                                        <span>{student.graduationYear}</span>
                                    </div>
                                )}
                            </div>

                            {student.courses && student.courses.length > 0 && (
                                <div>
                                    <h4>Coursework</h4>
                                    <ul className="course-list">
                                        {student.courses.map((course, index) => (
                                            <li key={index}>{course}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Skills Section */}
                        {student.skills && student.skills.length > 0 && (
                            <div className="card-section">
                                <h3>Skills</h3>
                                <div className="skills-cloud">
                                    {student.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Messaging Section (Static for now) */}
                        <div className="message-box-wrapper">
                            <div className="message-box">
                                <h3>Send a Message</h3>
                                <textarea
                                    className="message-textarea"
                                    placeholder={`Hi ${student.name.split(' ')[0]}, I'd like to connect regarding...`}
                                />
                                <div className="message-actions">
                                    <button className="connect-button primary" onClick={() => alert("Message sent! (Simulation)")}>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;