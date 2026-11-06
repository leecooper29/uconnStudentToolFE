import "./index.css";
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
    title: string;
}

function RecentEvents({ events, title }: RecentEventsProps) {
    return (
        <div className="recent-events-container">
            <h2 className="section-title">{title}</h2>
            <div className="events-grid">
                <EventCard events={events} />
            </div>
        </div>
    )
}


function EventCard({ events }: { events: Event[] }) {
    function handleEventClick(event: Event) {
        console.log(`Event clicked: ${event.title}`);
        let link = "link to actual event pages at uconn (ucontact)";
        console.log(link);
    }

    return (
        <>
            {events.map((event, index) => (
                <div className="event-card" key={index}>
                    <div className="event-header">
                        <div className="event-date">{event.date}</div>
                            <h3 onClick={() => handleEventClick(event)}>{event.title}</h3>
                        </div>
                    <div className="desc">{event.description}</div>
                </div>
                ))}
        </>
    )
}

export default RecentEvents;