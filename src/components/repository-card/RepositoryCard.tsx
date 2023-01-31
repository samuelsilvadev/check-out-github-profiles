import styles from "./RepositoryCard.module.css";

export type RepositoryCardProps = {
  name: string;
  description: string;
  href: string;
};

function RepositoryCard({ name, description, href }: RepositoryCardProps) {
  return (
    <article className={styles.wrapper}>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
        See more
      </a>
    </article>
  );
}

export default RepositoryCard;
