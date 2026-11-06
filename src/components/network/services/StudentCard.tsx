import { useNavigate } from "react-router-dom";
import "./index.css"
import { useState } from "react";
import { CgColorPicker } from "react-icons/cg";

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

  return (
    <div className="sub-grid-item left">
      <div className="space-between">
        <img alt="student image" className="student-image" />
        <div className="student-contents">
          <h2>{student.name}</h2>
          {student.email && <span>email: {student.email}</span>}
          {student.majors && <span>major: {student.majors.join(", ")}</span>}
          <p>Status: {student.status || "Student"}</p>
        </div>
        <div className="">
          <ConnectButton student={student} />
        </div>
      </div>
    </div>
  );
}


function ConnectButton({ student }: StudentCardProps) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [pending, setPending] = useState(false);

  const handleConnect = () => {
    setPending(true);
    setTimeout(() => {
      setClicked(true);
      setPending(false);
      navigate(`/student/${student.id}`, {
        state: student,
      });
    }, 1000);
  };

  return (
    <>
      <button className="connect-button" onClick={handleConnect}>
        {pending ? "connecting..." : clicked ? "Connected" : "Connect"}
      </button>
    </>
  );
}


export default StudentCard;