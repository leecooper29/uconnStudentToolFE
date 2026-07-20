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
          <div className="my-network"> 

          </div>
          <div className="profile-details">
            <ul className="student-details">
              <h2>My Profile:</h2>
            <ul>
                <li>Major: {student.major}</li>
                <li>Expected Graduation: {student.expectedGraduation}</li>
                <li>University: {student.university}</li>
                <li>Location: {student.location}</li>
                <li>Outlook: {student.email}</li>
              </ul>
            </ul>
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
