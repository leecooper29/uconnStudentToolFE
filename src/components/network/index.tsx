import "./index.css";
import Profile from "./profile/index";
import StudentServices from "./services/StudentServices";
import StudentClubGrid from "./club/StudentClubGrid";
import { currentStudent, students, clubs } from "../../mock-data/mockData";
import { useEffect } from "react";

function Network() {

  useEffect(() => {})

  return (
    <section className="page-header">
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
        </div>
        {/* components within components use case */}
        <div className="resource-container">
          {/* resource component along with a dropdown of a description
          of what the resource is used for etc. */}
        </div>
      </div>
    </section>
  );
}

export default Network;