import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "~/components/avatar";
import ContentSwapper from "~/components/content-swapper";
import Layout from "~/components/layout";
import Pagination from "~/components/pagination";
import Repositories from "~/components/repositories";
import useFetch from "~/hooks/useFetch";
import { getUser, getUserRepositories } from "~/services/github";
import type { GetUserRepositoriesResponse, GetUserResponse } from "~/types/api";
import styles from "./User.module.css";

const REPOSITORIES_PER_PAGE = 30;

function User() {
  const { userName } = useParams<{ userName: string }>();
  const {
    fetch: fetchUser,
    data: userData,
    loaded: userLoaded,
    error: userError,
  } = useFetch<GetUserResponse, [string]>(getUser);
  const {
    fetch: fetchUserRepositories,
    data: repositoriesData,
    loaded: repositoriesLoaded,
    error: repositoriesError,
  } = useFetch<GetUserRepositoriesResponse, [string, number?]>(
    getUserRepositories
  );
  const isRepositoriesEmpty =
    repositoriesLoaded && repositoriesData?.length === 0;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (userName) {
      fetchUser(userName);
      fetchUserRepositories(userName);
    }
  }, [userName]);

  const handleOnNextPage = () => {
    if (userName) {
      const nextPage = currentPage + 1;
      fetchUserRepositories(userName, nextPage);
      setCurrentPage(nextPage);
    }
  };

  const handleOnPreviousPage = () => {
    if (userName) {
      const previousPage = currentPage - 1;
      fetchUserRepositories(userName, previousPage);
      setCurrentPage(previousPage);
    }
  };

  return (
    <Layout title="User Page">
      <ContentSwapper
        loading={!userLoaded || !repositoriesLoaded}
        error={userError || repositoriesError}
      >
        <div className={styles.userDetails}>
          <Avatar
            className={styles.avatar}
            src={userData?.avatar_url ?? ""}
            alt={userData?.name ?? ""}
          />
          <h2 className={styles.userInfo}>{userData?.name}</h2>
          <a
            className={styles.userInfo}
            target="_blank"
            href={`https://github.com/${userData?.login}`}
            rel="noreferrer"
          >
            {userData?.login}
          </a>
          <h3 className={styles.userInfo}>
            Number of repositories: {userData?.public_repos}
          </h3>
          <h3 className={styles.userInfo}>{userData?.followers} Followers</h3>
          <Link to="/" className={styles.backButton}>
            Back
          </Link>
        </div>
        {!isRepositoriesEmpty ? (
          <>
            <Repositories repositories={repositoriesData} />
            <Pagination
              className={styles.pagination}
              onNextPage={handleOnNextPage}
              onPreviousPage={handleOnPreviousPage}
              currentPage={currentPage}
              totalPages={Math.ceil(
                (userData?.public_repos ?? 0) / REPOSITORIES_PER_PAGE
              )}
            />
          </>
        ) : null}
      </ContentSwapper>
    </Layout>
  );
}

export default User;
