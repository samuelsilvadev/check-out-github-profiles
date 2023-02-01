import { Link } from "react-router-dom";
import UserCard from "~/components/user-card";
import { User } from "~/types/user";
import styles from "./Users.module.css";

export type UsersProps = {
  className?: string;
  users?: User[];
};

function Users({ users = [], className = "" }: UsersProps) {
  if (users.length === 0) {
    return null;
  }

  return (
    <ul className={`${styles.wrapper} ${className}`}>
      {users.map(({ id, login, avatar_url }) => (
        <li key={id}>
          <Link to={`/user/${login}`} className={styles.link}>
            <UserCard
              image={{ alt: login, src: avatar_url }}
              userName={login}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
