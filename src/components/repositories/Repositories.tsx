import type { RepositoryCardProps } from "~/components/repository-card";
import RepositoryCard from "~/components/repository-card";
import styles from "./Repositories.module.css";

export type RepositoriesProps = {
  // TODO: create type for repositories
  repositories: ({ id: string } & RepositoryCardProps)[];
};

function Repositories({ repositories = [] }: RepositoriesProps) {
  if (repositories.length === 0) {
    return null;
  }

  return (
    <ul className={styles.wrapper}>
      {repositories.map(({ id, ...repository }) => {
        return (
          <li key={id}>
            <RepositoryCard {...repository} />
          </li>
        );
      })}
    </ul>
  );
}

export default Repositories;
