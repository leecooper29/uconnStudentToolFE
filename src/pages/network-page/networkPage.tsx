import "./network.css";
import Profile from "../student-page/ui/profile";
import StudentServices from "../student-page/ui/studentServices";
import StudentClubGrid from "./studentClubGrid/studentClubGrid";
import CareerCenter from "./careerCenter/CareerCenter";
import { currentStudent, students, clubs, careerOpportunities } from "../data/mockData";

function Network() {
  return (
    <section className="page-header">
      {/* <div className="banner" /> */}
      <div className="main-container">
        <div className="sub-container">
          <Profile student={currentStudent} />
          <div className="sub-item">
            <StudentServices students={students} />
          </div>
        </div>
      </div>
      <div className="sub-main-container">
        <div className="s-container">
          <StudentClubGrid clubs={clubs} />
          {/* <CareerCenter opportunities={careerOpportunities} /> */}
        </div>
      </div>
    </section>
  );
}

export default Network;