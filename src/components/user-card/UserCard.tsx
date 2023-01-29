import Avatar, { type AvatarProps } from "~/components/avatar";
import styles from "./UserCard.module.css";

export type UserCardProps = {
  image: AvatarProps;
  userName: string;
};

function UserCard({ image, userName }: UserCardProps) {
  return (
    <article className={styles.wrapper}>
      <Avatar {...image} />
      <h2 className={styles.title}>{userName}</h2>
    </article>
  );
}

export default UserCard;
