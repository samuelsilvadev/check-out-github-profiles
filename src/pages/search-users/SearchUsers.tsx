import { useEffect, useState } from "react";
import ContentSwapper from "~/components/content-swapper";
import Layout from "~/components/layout";
import SearchUsersForm, {
  type SearchUsersFormProps,
} from "~/components/search-users-form";
import Users from "~/components/users";
import useFetch from "~/hooks/useFetch";
import { searchUsers } from "~/services/github";
import type { SearchUsersResponse } from "~/types/api";
import styles from "./SearchUsers.module.css";

export const DEFAULT_SEARCH_TERM = "*";

function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState(DEFAULT_SEARCH_TERM);

  const {
    fetch: fetchUsers,
    data,
    error,
    loaded,
  } = useFetch<SearchUsersResponse, [string]>(searchUsers);
  const isEmpty = loaded && data?.items.length === 0;

  useEffect(() => {
    fetchUsers(searchTerm);
  }, [fetchUsers, searchTerm]);

  const handleOnSearch: SearchUsersFormProps["onSearch"] = ({ searchTerm }) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Layout title="Search for github users">
      <SearchUsersForm onSearch={handleOnSearch} />
      <ContentSwapper loading={!loaded} error={error}>
        {isEmpty ? (
          "No user found"
        ) : (
          <Users className={styles.usersList} users={data?.items} />
        )}
      </ContentSwapper>
    </Layout>
  );
}

export default SearchUsers;
