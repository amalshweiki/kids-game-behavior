import imageHome from "../images/behaviour-thumbnail.jpg";
import letGo from "../images/lets-go.jpg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="container">
      <img className="imgHome" src={imageHome} />

      <Link to="startgame" className="centered-link">
        <img className="imgletsgo" src={letGo} />
      </Link>
    </div>
  );
};
