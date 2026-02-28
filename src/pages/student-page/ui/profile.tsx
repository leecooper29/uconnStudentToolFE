import "./profile.css";

interface ProfileProps {
  student: {
    name: string;
    major: string;
    expectedGraduation: string;
    university: string;
    location: string;
    email: string;
    description: string;
  };
}

function Profile({ student }: ProfileProps) {
  return (
    <>
      <div className="profile-container">
        <div>
          <div className="profile-header">
            <img alt="student profile image" className="profile-image" />
            <h1>{student.name}</h1>
            <p className="student-description">
              {student.description}
            </p>
            <div className="student-location">
              <p>{student.location}</p>
            </div>
          </div>
          <div className="profile-details">
            <ul className="student-details">
              <h2>Student Info:</h2>
              <li>Major: {student.major}</li>
              <li>Expected Graduation: {student.expectedGraduation}</li>
              <li>University: {student.university}</li>
              <li>Location: {student.location}</li>
              <li>Outlook: {student.email}</li>
            </ul>
          </div>
          <div className="messages-container">
            <h5>My Messages:</h5>
            <p>No messages to display.</p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
export default Profile;


// useEffect(() => {
//   fetch("http://localhost:5000/api/data") // Replace with your Flask API URL
//     .then((response) => response.json())
//     .then((data) => setMessage(data.message))
//     .catch((error) => console.error("Error fetching data:", error));
// }, []);

// const getUser = () => {
//   fetch("http://localhost:3000/api.user")
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// };

// useEffect(() => {
//   getUser();
// }, []);
