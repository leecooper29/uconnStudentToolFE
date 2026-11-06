
function InfoGrid({ title, description }: { title: string, description: string }) {
  function handlClick(){
    alert('Welcome to Uconn Student Connect.');
  }

// think about what you want to add to this page
// ideas here: 
  return (
        <>
            <div className="main-grid">
                <div className="item">
                  <h1>{title}</h1>
                    {/* <h1>Welcome to <br></br>the UConn Student Tool</h1> */}
                    {/* custom texts */}
                    <p className="">To empower UConn students by creating a unified platform that connects them with peers across all campus locations. 
                        Our network facilitates meaningful connections between students, enabling collaboration by major, field of study, and shared interests. 
                        We provide direct access to tutoring services, job opportunities, academic resources, and internship platforms, all in one place.
                        Whether you're at Storrs, Hartford, Avery Point, Waterbury, or Stamford, the UConn Student Network is your gateway to academic success, 
                        career development, and a thriving campus community.</p>
                    <button className="start" onClick={handlClick}>Get Started</button>
                </div>
                <div className="item-2">
                    <p>some kind of info will be displayed here</p>
                    {/* <p><strong>Network Features</strong></p>
                    <p>Connect with other students</p> */}
                </div>
            </div>
        </>
  );
}
export default InfoGrid;