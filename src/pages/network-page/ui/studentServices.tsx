import NetworkBar from "../network-bar/NetworkBar";
import StudentCard, { Student } from "../../student-page/ui/studentCard";
import "./studentServices.css";

interface StudentServicesProps {
  students: Student[];
}

function StudentServices({ students }: StudentServicesProps) {
  return (
    <section>
      <NetworkBar />
      <div className="main-container">
        <div className="sub-grid network">
          {students.map((s) => (
            <StudentCard
              key={s.id}
              student={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentServices;

