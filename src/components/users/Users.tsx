import { Link } from "react-router-dom";
import UserCard from "~/components/user-card";
import styles from "./Users.module.css";

export type UsersProps = {
  className?: string;
  // TODO: add a type for the user
  users: { id: string; name: string; src: string; alt: string }[];
};

function Users({ users = [], className = "" }: UsersProps) {
  if (users.length === 0) {
    return null;
  }

  return (
    <ul className={`${styles.wrapper} ${className}`}>
      {users.map(({ id, alt, src, name }) => (
        <li key={id}>
          <Link to={`/user/${id}`} className={styles.link}>
            <UserCard image={{ alt, src }} userName={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
