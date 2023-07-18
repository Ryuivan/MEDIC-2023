import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackBtn() {
  return (
    <Link to="/gallery" style={{ textDecoration: 'none' }}>
      <div className="d-flex justify-content-center align-items-center">
        <button className="back-btn">
          <FontAwesomeIcon icon={faArrowLeft} beat size="xs" />
          &nbsp; Back
        </button>
      </div>
    </Link>
  );
}
