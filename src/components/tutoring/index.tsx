import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './index.css';
import TutoringServiceCard from './card/TutoringServiceCard';

type ServiceData = {
  title: string;
  description: string;
  buttonText: string;
};

const servicesList: ServiceData[] = [
  {
    title: "Calculus Tutoring",
    description: "Get help with calculus, algebra, statistics, and more.",
    buttonText: "Schedule Math Tutoring",
  },
  {
    title: "Writing Center",
    description: "Improve your writing skills with our expert tutors.",
    buttonText: "Schedule Writing Session",
  },
  {
    title: "Computer Science", // Changed from "Computer Science Tutoring" to match probable key or improved name
    description: "Programming, algorithms, data structures support.",
    buttonText: "Schedule CS Tutoring", // Shortened for fit
  },
  {
    title: "Physics Tutoring",
    description: "Get help with physics concepts, problem-solving, and exam prep.",
    buttonText: "Schedule Physics Tutoring",
  },
  {
    title: "Chemistry Tutoring",
    description: "Support for chemistry concepts, lab work, and exam prep.",
    buttonText: "Schedule Chemistry Tutoring",
  },
  {
    title: "Language Tutoring",
    description: "Practice and improve your language skills.",
    buttonText: "Schedule Language Tutoring",
  }
  
];

// const currentSchedule: ServiceData[] = [] [
//   {
//     monday: 'class',
//     time: 220
//   }
// ]

function Tutoring() {
  const location = useLocation();
  const selectedService = (location.state as { service?: string } | null)?.service;
  const [activeService, setActiveService] = useState<string | null>(selectedService || null);

  useEffect(() => {
    if (selectedService) {
      setActiveService(selectedService);
    }
  }, [selectedService]);

  const handleConnect = (serviceTitle: string) => {
    setActiveService(serviceTitle);
    // Logic to actually schedule or navigate could go here
    console.log(`Scheduling ${serviceTitle}...`);
  };

  return (
    <div className="tutoring-container">
        {/* Tutoring services grid */}
      <div className='tutoring-header'>
          <p>Your one-stop solution for all tutoring needs.</p>
          <p>Register here! (kiosk in person) list of items</p>
       {/* <div className="hide-student">
        <h2>{user}</Wh2>
        <p>Progress: 3/5 services completed</p>
        <div className="student-id">Student ID: 12345</div>
        <div className="schedule"></div>
      </div> */}
    </div>
    <div className="tutoring-services">
      {servicesList
      .map((service) => (
          <TutoringServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            isActive={activeService === service.title}
            buttonText={service.buttonText}
            onConnect={() => handleConnect(service.title)}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Tutoring;