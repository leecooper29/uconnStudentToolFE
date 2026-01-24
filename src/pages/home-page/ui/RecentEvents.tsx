import "./recentEvents.css";
// import ServiceCard from "./serviceCard"; // Assuming we might want to rename this too or inline it. For now let's keep it or just render divs directly if simple.
// Actually let's just make it simple cards here or reuse ServiceCard if it fits. 
// Let's reuse ServiceCard for now but rename it in the map.

// Wait, I should probably check logic. 
// Let's redefine the component completely to be tailored for events.

interface Event {
    title: string;
    description: string;
    date: string;
}

interface RecentEventsProps {
    events: Event[];
}

function RecentEvents({ events }: RecentEventsProps) {
    return (
        <div className="recent-events-container">
            <h2 className="section-title">Recent Events</h2>
            <div className="events-grid">
                {events.map((event, index) => (
                    <div className="event-card" key={index}>
                        <div className="event-date">{event.date}</div>
                        <h3>{event.title}</h3>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentEvents;