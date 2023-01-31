import Layout from "~/components/layout";
import SearchUsersForm from "~/components/search-users-form";
import Users, { type UsersProps } from "~/components/users";
import styles from "./SearchUsers.module.css";

// TODO: replace with final implementation
const stubOnSearch = () => void 0;

// TODO: replace with final implementation
const users: UsersProps["users"] = [
  {
    id: "1",
    name: "John",
    src: "https://avatars.githubusercontent.com/u/1?v=4",
    alt: "John's avatar",
  },
  {
    id: "2",
    name: "Jane",
    src: "https://avatars.githubusercontent.com/u/2?v=4",
    alt: "Jane's avatar",
  },
  {
    id: "3",
    name: "Luis",
    src: "https://avatars.githubusercontent.com/u/3?v=4",
    alt: "Luis's avatar",
  },
  {
    id: "4",
    name: "Sam",
    src: "https://avatars.githubusercontent.com/u/4?v=4",
    alt: "Sam's avatar",
  },
  {
    id: "5",
    name: "Mary",
    src: "https://avatars.githubusercontent.com/u/5?v=4",
    alt: "Mary's avatar",
  },
];

function SearchUsers() {
  return (
    <Layout title="Search for github users">
      <SearchUsersForm onSearch={stubOnSearch} />
      <Users className={styles.usersList} users={users} />
    </Layout>
  );
}

export default SearchUsers;
