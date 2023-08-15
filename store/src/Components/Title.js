import "./Title.css";
import {FaSearchLocation} from "react-icons/fa"
// import {IoLocationSharp} from "react-icons/fa";

function Title(props) {
  return (
    <div className="TitleI">
      <h1 className="TitleII">
        {props.title}
      </h1>
      <h4 className="TitleIII">
      <FaSearchLocation/> {props.icon} {props.location}
      </h4>
        
    </div>
  );
}

export default Title;
