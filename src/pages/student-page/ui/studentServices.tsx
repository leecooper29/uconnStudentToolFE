
import NetworkBar from "../../network-page/network-bar/NetworkBar";
import StudentCard from "./studentCard";
import "./studentServices.css";


function StudentServices() {

  //student data
  const students = [
    {
      id: 1,
      name: "Lee Cooper",
      phone: "203-290-7854",
      email: "leecooper6329@gmail.com",
      majors: ["Computer Science", "Mathematics"],
      bio: "Passionate about AI and software engineering. Looking for summer internships in tech.",
      graduationYear: "2025",
      gpa: "3.8",
      skills: ["React", "TypeScript", "Python", "Machine Learning"],
      courses: ["Operating Systems", "Algorithms", "Linear Algebra"],
      socials: {
        linkedin: "linkedin.com/in/leecooper",
        github: "github.com/leecooper",
      },
      status: "Seeking Internship",
    },
    {
      id: 2,
      name: "Alex Martinez",
      phone: "203-555-1123",
      email: "alex.martinez@email.com",
      majors: ["Mechanical Engineering"],
      bio: "Aspiring mechanical engineer with a focus on robotics and automation.",
      graduationYear: "2026",
      gpa: "3.6",
      skills: ["SolidWorks", "MATLAB", "Robotics", "3D Printing"],
      courses: ["Thermodynamics", "Fluid Mechanics", "Dynamics"],
      socials: {
        linkedin: "linkedin.com/in/alexmartinez",
      },
      status: "Open to Research",
    },
    {
      id: 3,
      name: "Jordan Kim",
      phone: "203-555-2244",
      email: "jordan.kim@email.com",
      majors: ["Electrical Engineering"],
      bio: "Interested in embedded systems and circuit design.",
      graduationYear: "2025",
      gpa: "3.9",
      skills: ["C++", "Verilog", "Circuit Design", "Microcontrollers"],
      courses: ["Circuit Analysis", "Digital Logic", "Signals and Systems"],
      status: "Student",
    },
    {
      id: 4,
      name: "Priya Patel",
      phone: "203-555-3377",
      email: "priya.patel@email.com",
      majors: ["Biomedical Engineering"],
      bio: "Focusing on medical devices and tissue engineering.",
      graduationYear: "2027",
      gpa: "3.7",
      skills: ["Biomaterials", "LabView", "Python", "Data Analysis"],
      courses: ["Organic Chemistry", "Biomechanics", "Physiology"],
      status: "Student",
    },
    {
      id: 5,
      name: "Michael Johnson",
      phone: "203-555-4488",
      email: "michael.johnson@email.com",
      majors: ["Physics"],
      bio: "Physics major with a minor in Astronomy. Loves solving complex problems.",
      graduationYear: "2026",
      gpa: "3.5",
      skills: ["Data Analysis", "Python", "LaTeX", "Problem Solving"],
      courses: ["Quantum Mechanics", "Electromagnetism", "Astrophysics"],
      status: "Seeking Research",
    },
    {
      id: 6,
      name: "Sofia Ramirez",
      phone: "203-555-5599",
      email: "sofia.ramirez@email.com",
      majors: ["Data Science"],
      bio: "Turning data into actionable insights. Love working with big data sets.",
      graduationYear: "2025",
      gpa: "3.9",
      skills: ["SQL", "R", "Python", "Machine Learning", "Tableau"],
      courses: ["Big Data Computing", "Statistical Methods", "Data Mining"],
      socials: {
        github: "github.com/sofiaramirez",
      },
      status: "Seeking Full-time",
    },
  ];

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
