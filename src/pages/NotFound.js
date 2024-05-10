import { Link } from "react-router-dom";
import Button from "../components/Button";
import Nav from "../components/Nav";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <Nav />
      <div className={styles.notFound}>
        <h1>Oops!</h1>
        <h3>404 - Page Not Found</h3>
        <p>
          The page you're asking for might have been removed, had it's name
          changed or temporarily unavailable.
        </p>
        <Link to="/">
          <Button>Go to homepage</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
