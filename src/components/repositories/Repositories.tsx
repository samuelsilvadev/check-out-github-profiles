import RepositoryCard from "~/components/repository-card";
import type { Repository } from "~/types/repository";
import styles from "./Repositories.module.css";

export type RepositoriesProps = {
  repositories?: Repository[];
};

function Repositories({ repositories = [] }: RepositoriesProps) {
  if (repositories.length === 0) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {repositories.map(({ id, name, description, html_url }) => {
        return (
          <li key={id}>
            <RepositoryCard
              name={name}
              href={html_url}
              description={description || ""}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Repositories;
