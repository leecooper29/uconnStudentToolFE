import "./header.css";
import React, { useContext, useState, useRef, useEffect, Suspense, useDeferredValue } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
// import SearchResults from "src/mock-data/searchResults";

function Header() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [isTutoringOpen, setIsTutoringOpen] = useState(false);
  const [query, setSearch] = useState();
  const deferedValue = useDeferredValue(query);

  const tutoringDropDownRef = useRef<HTMLLIElement | null>(null);

  const handleTutoringClick = (service: string) => {
    navigate("/tutoring", { state: { service } });
    setIsTutoringOpen(false);
  };

  const toggleTutoringDropdown = () => setIsTutoringOpen((prev) => !prev);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

  // const value = (e.currentTarget as HTMLInputElement).value;

    const navItems = [
      {label: 'Home', url: '/'},
      {label: 'Connections', url: '/network'},
      {label: 'Resources'},
      {label: 'Tutoring', url: '/tutoring', isDropdown:true},
      {label: 'placeholder'},

    ];

  return (
    <> 
      <header>
        <div className="header-left" onClick={() => navigate("/")}>
          <p className="title"><strong>Uconn</strong> Connection |</p>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
          {navItems.map((item, index) => {
            if (item.isDropdown) {
              return (
                <li key={index} className="dropdown" ref={tutoringDropDownRef}>
                  <span onClick={toggleTutoringDropdown} className="dropdown-label">
                    {item.label}
                  </span>
                  {isTutoringOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleTutoringClick("Math Tutoring")}>Calculus Tutoring</li>
                      <li onClick={() => handleTutoringClick("Writing Center")}>Writing Center</li>
                      <li onClick={() => handleTutoringClick("Science Tutoring")}>Computer Science Tutoring</li>
                      <li onClick={() => handleTutoringClick("Science Tutoring")}>Computer Science Tutoring</li>

                    </ul>
                  )}
                </li>
              );
            }
          return (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          );
        })}
      </ul>
        </nav>
        <div className="header-right">
          <label>
          {/* search results should apear within  */}
            <input type="text" placeholder="Search"
            className="search-input"
            value={query}
            />
            {/* onChange={(e) => setSearch(value)} */}
          </label>
          {/* setQuery */}
          {/*  <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
          <Suspense fallback={<h2>Loading...</h2>}>
            {/* <SearchResults ></SearchResults> */}
          </Suspense>
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
