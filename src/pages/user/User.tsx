import { Link } from "react-router-dom";
import Avatar from "~/components/avatar";
import Layout from "~/components/layout";
import Pagination from "~/components/pagination";
import Repositories from "~/components/repositories";
import styles from "./User.module.css";

// TODO: remove stub
const repositories = [
  {
    id: "1",
    name: "repository-1",
    description: "description-1",
    href: "http://github.com",
  },
  {
    id: "2",
    name: "repository-2",
    description: "description-2",
    href: "http://github.com",
  },
  {
    id: "3",
    name: "repository-3",
    description: "description-3",
    href: "http://github.com",
  },
];

// TODO: replace with final implementation
const stubOnNavigate = () => void 0;

function User() {
  return (
    <Layout title="User Page">
      <div className={styles.userDetails}>
        <Avatar className={styles.avatar} src="" alt="" />
        <h2 className={styles.userInfo}>Samuel Silva</h2>
        <a className={styles.userInfo} href="https://samuelsilvadev">
          @samuelsilvadev
        </a>
        <h3 className={styles.userInfo}>Number of repositories: 101</h3>
        <h3 className={styles.userInfo}>101 Followers</h3>
        <Link to="/" className={styles.backButton}>
          Back
        </Link>
      </div>
      <Repositories repositories={repositories} />
      <Pagination
        className={styles.pagination}
        onNextPage={stubOnNavigate}
        onPreviousPage={stubOnNavigate}
      />
    </Layout>
  );
}

export default User;
