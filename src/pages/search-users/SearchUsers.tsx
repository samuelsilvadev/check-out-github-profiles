import SearchUsersForm from "~/components/search-users-form";
import styles from "./SearchUsers.module.css";

// TODO: replace with final implementation
const stubOnSearch = () => void 0;

function SearchUsers() {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Search for github users</h1>
      <SearchUsersForm onSearch={stubOnSearch} />
    </section>
  );
}

export default SearchUsers;
