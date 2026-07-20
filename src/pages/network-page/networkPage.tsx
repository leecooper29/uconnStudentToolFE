import "./network.css";
import Profile from "../student-page/ui/profile";
import StudentServices from "./ui/studentServices";
import StudentClubGrid from "./ui/studentClubGrid/studentClubGrid";
// import CareerCenter from "./careerCenter/CareerCenter";
import { currentStudent, students, clubs } from "../data/mockData";
import CareerCenter from "./careerCenter/CareerCenter";

function Network() {
  return (
    <section className="page-header">
      <div className="main-container">
        {/* <MainNav/> */}
        <div className="sub-container">
          <Profile student={currentStudent} />
          <div className="sub-item">
            <StudentServices students={students} />
          </div>
        </div>
      </div>
      <div className="sub-main-container">
        {/* links to actual clubs at the college */}
        <div className="s-container">
          <StudentClubGrid clubs={clubs} />
        </div>
        <CareerCenter opportunities={[]} />
      </div>
    </section>
  );
}

export default Network;