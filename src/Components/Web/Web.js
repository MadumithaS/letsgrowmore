import "./Web.css";
import { Button } from "react-bootstrap";
const Web = ({ buttonclicked }) => {
  const click = () => {
    buttonclicked(1);
  };

  return (
    <nav className="title">
      <h1 className="logo">Lets Grow More</h1>
      <Button className="btn" onClick={click}>
        Get Users
      </Button>
    </nav>
  );
};

export default Web;
