import { useNavigate } from "react-router-dom";

export type Student = {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  majors?: string[];
  bio?: string;
  graduationYear?: string;
  gpa?: string;
  skills?: string[];
  courses?: string[];
  socials?: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
  status?: string;
};

type StudentCardProps = {
  student: Student;
};

function StudentCard({ student }: StudentCardProps) {
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate(`/student/${student.id}`, {
      state: student,
    });
  };

  return (
    <div className="sub-grid-item left">
      <div className="space-between">
        <img alt="student image" className="student-image" />
        <div className="student-contents">
          <h2>Name: {student.name}</h2>
          {student.phone && <span>phone: {student.phone}</span>}
          {student.email && <span>email: {student.email}</span>}
          {student.majors && <span>majors: {student.majors.join(", ")}</span>}
          <p>{student.status || "Student"}</p>
        </div>
        <div>
          {/* links to the student profile of the selected person
              that you want to make a connection with. */}
          <button className="connect-button" onClick={handleConnect}>
            Add Connection
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;