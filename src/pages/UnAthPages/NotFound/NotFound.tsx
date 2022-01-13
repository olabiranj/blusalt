import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>4😳4</h1>
      <h4>Sorry, this page does not exist</h4>
      <div>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
