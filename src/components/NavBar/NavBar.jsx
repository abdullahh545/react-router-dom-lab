import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", gap: "25px" }}>
      <Link to="/">Home</Link>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
      <Link to="/new-letter">New Letter</Link>
    </div>
  );
};

export default NavBar;
