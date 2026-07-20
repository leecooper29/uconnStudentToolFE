
import "../homepage.css";

function WelcomeSection() {
    return (
        <>
            <div className="main-grid">
                <div className="item">
                    {/* <h1>Welcome to <br></br>the UConn Student Tool</h1> */}
                    <h1>Our mission:</h1>
                    <p>
                        To empower UConn students by creating a unified platform that connects them with peers across all campus locations. 
                        Our network facilitates meaningful connections between students, enabling collaboration by major, field of study, and shared interests. 
                        We provide direct access to tutoring services, job opportunities, academic resources, and internship platforms, all in one place.
                        Whether you're at Storrs, Hartford, Avery Point, Waterbury, or Stamford, the UConn Student Network is your gateway to academic success, 
                        career development, and a thriving campus community.
                    </p>
                    <button className="start">Get Started</button>
                </div>
                <div className="item-2">
                    <p><strong>Network Features</strong></p>
                    <p>Connect with other students fast (by major)</p>
                    <p>Direct access to all application markets</p>
                    
                    {/*  */}
                </div>
            </div>
        </>
    );
}

export default WelcomeSection;
