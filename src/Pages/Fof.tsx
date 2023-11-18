import { Link } from "react-router-dom";
import "../Styles/index.css";
function Fof() {
  return (
    <div>
      <div className="fof">
        <h1>404</h1>
        <Link to="/">
          {" "}
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Fof;
