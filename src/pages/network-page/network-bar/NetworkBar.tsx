import "./networkbar.css";
function networkBar() {
  
  const handleSearch = () => {
    // Implement search logic here, e.g., filter network items based on searchTerm
    // searches list of users from backend and displays them in the network page. 
    console.log("Search button clicked!");
  }

  return (
    <>
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          alert('Submitting!'); 
          }}>
        <div className="network-bar">
          <div className="between">
          <p className="network">My Network</p>
          <div>
            <input
              type="text"
              placeholder="student..."
              className="network-searchbar"
            />
              <button className="s-btn" onClick={handleSearch}>search</button>
          </div>
          </div>
        </div>
        </form>
        {/* <div>
          <nav>
            <ul className="network-items">
              {networkItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </nav>
        </div> */}
      </div>
    </>
  );
}
export default networkBar;
