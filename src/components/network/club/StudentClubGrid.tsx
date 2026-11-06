
import { useState } from "react";
import "./studentClubGrid.css";
import { useNavigate } from "react-router-dom";

type Club = {
  name: string;
  slug: string;
  description: string;
};

interface StudentClubGridProps {
  clubs: Club[];
}
//some comments
function StudentClubGrid({ clubs }: StudentClubGridProps) {
  const navigate = useNavigate();

  function handleJoin(slug: string) {
    navigate(`/pages/${slug}`);
  }

  return (
    <div className="clubs-grid">
      <div className="grid-title">
        <h3>Browse our available clubs created by students</h3>
      </div>

      <div className="grid">
        {clubs.map((club) => (
          <div className="grid-item" key={club.slug}>
            {/* <img alt="club image"></img> */}
            <div className="grid-item-top">
              <h2>{club.name}</h2>
              <p className="club-desc">{club.description}</p>
              <button
                type="button"
                className="sg-btn"
                onClick={() => handleJoin(club.slug)}
              >
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentClubGrid;

