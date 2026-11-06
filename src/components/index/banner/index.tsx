import "./index.css"
import huskyImage from "../../../assets/husky.jpg";

function Banner({bannerText}) {
    return (
        <>
            <div className="banner">
                <img src={huskyImage} alt="UConn Husky" className="banner-image" />
            <div className="sqr"></div>
            </div>
        </>
    );
}

export default Banner;
