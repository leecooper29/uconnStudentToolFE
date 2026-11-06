import "./index.css";

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

  const studentInfo = [
    { label: "Name", value: student.name },
    // { label: "Description", value: student.description },
    { label: "Major", value: student.major },
    { label: "Location", value: student.location },
    { label: "Student Email", value: student.email },
    { label: "Expected Graduation", value: student.expectedGraduation },
  ];

  function handleMajor(){
    console.log("access and filter students based on their major")
  }

  return (
    <>
      <div className="profile-container">
          <div className="profile-details">
              {/* <h2>{student.name}</h2> */}
            <ul className="student-details">
              {studentInfo.map((info) => (
                <li key={info.label}>
                  <strong>{info.label}:</strong> {info.value}
                </li>
              ))}
            </ul>
          </div>
          {/* student selection component */}
          {/* major comp */}
          <div className="">
              <label htmlFor="">Enter your Major:</label>
              <input type="text" className="" onClick={handleMajor} />
          </div>
      </div>
    </>
  );
}
export default Profile;
