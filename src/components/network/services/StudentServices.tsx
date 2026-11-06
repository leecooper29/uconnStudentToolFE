import StudentCard, { type Student } from "./StudentCard";
import "./index.css";

interface StudentServicesProps {
  students: Student[];
}

function StudentServices({ students }: StudentServicesProps) {
  return (
    <section>
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
