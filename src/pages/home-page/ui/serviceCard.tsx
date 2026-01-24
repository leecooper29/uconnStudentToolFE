import React from "react";
import "./serviceGrid.css";

interface ServiceCardProps {
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
        <div className="service-item">
            <div className="service-item-icon"></div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;
