import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={styles.wrapper}>
      <h1>The content you are looking for was not found</h1>
      <p>Let&apos;s return to the main page</p>
      <Link to="/" className={styles.link}>
        Home
      </Link>
    </section>
  );
}

export default NotFound;
