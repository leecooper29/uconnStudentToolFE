import "./header.css";
import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "./ui/layout/main-nav/contexts/AuthContext";

function Header() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  
  // Navigation state
  const [isCampusOpen, setIsCampusOpen] = useState(false);
  const [isTutoringOpen, setIsTutoringOpen] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState("Campus");

  const campusDropDownRef = useRef<HTMLLIElement | null>(null);
  const tutoringDropDownRef = useRef<HTMLLIElement | null>(null);

  const handleCampusClick = (campus: string) => {
    setSelectedCampus(campus);
    setIsCampusOpen(false);
  };

  const handleTutoringClick = (service: string) => {
    navigate("/tutoring", { state: { service } });
    setIsTutoringOpen(false);
  };

  const toggleCampusDropdown = () => setIsCampusOpen((prev) => !prev);
  const toggleTutoringDropdown = () => setIsTutoringOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        campusDropDownRef.current &&
        !campusDropDownRef.current.contains(event.target as Node)
      ) {
        setIsCampusOpen(false);
      }
      if (
        tutoringDropDownRef.current &&
        !tutoringDropDownRef.current.contains(event.target as Node)
      ) {
        setIsTutoringOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header>
        <div className="header-left" onClick={() => navigate("/")}>
          <p className="title">Uconn Network |</p>
        </div>
        <nav className="header-nav">
          <ul className="nav-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/network">My Network <span className="dropdown-arrow">▼</span></Link></li>

            {/* Campus dropdown */}
            <li className="dropdown" ref={campusDropDownRef}>
              <span onClick={toggleCampusDropdown} className="dropdown-label">
                {selectedCampus} <span className="dropdown-arrow">▼</span>
              </span>
              {isCampusOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleCampusClick("Storrs")}>Storrs</li>
                  <li onClick={() => handleCampusClick("Hartford")}>Hartford</li>
                  <li onClick={() => handleCampusClick("Avery Point")}>Avery Point</li>
                  <li onClick={() => handleCampusClick("Waterbury")}>Waterbury</li>
                  <li onClick={() => handleCampusClick("Stamford")}>Stamford</li>
                </ul>
              )}
            </li>
            
            {/* Tutoring dropdown */}
            <li className="dropdown" ref={tutoringDropDownRef}>
              <span onClick={toggleTutoringDropdown} className="dropdown-label">
                Tutoring Services <span className="dropdown-arrow">▼</span>
              </span>
              {isTutoringOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleTutoringClick("Math Tutoring")}>Calculus Tutoring</li>
                  <li onClick={() => handleTutoringClick("Writing Center")}>Writing Center</li>
                  <li onClick={() => handleTutoringClick("Science Tutoring")}>Computer Science Tutoring</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <input 
            type="text" 
            placeholder="Search (a-z)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {auth?.user ? (
            <div className="user-profile">
              <Link to="/profile" className="profile-link">
                <span className="avatar">{auth.user.name.charAt(0).toUpperCase()}</span>
                <span className="user-name">{auth.user.name}</span>
              </Link>
            </div>
          ) : (
            <Link to="/signin?intent=profile" className="signin-link">Sign In</Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
