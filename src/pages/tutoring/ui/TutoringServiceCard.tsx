import React from 'react';
import '../tutoring.css';

type TutoringServiceCardProps = {
    title: string;
    description: string;
    isActive: boolean;
    onConnect: () => void;
    buttonText: string;
};

const TutoringServiceCard: React.FC<TutoringServiceCardProps> = ({
    title,
    description,
    isActive,
    // onConnect,
    buttonText,
}) => {

function onConnect(){
    console.log('taking you to tutoring appointment setting')
}

    return (
        <section className={`service-card ${isActive ? 'active' : ''}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>*Rating</p>
            <button onClick={onConnect} className="tutoring-service-button">{buttonText}</button>
        </section>
        
    );
};

export default TutoringServiceCard;
