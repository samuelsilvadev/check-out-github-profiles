import styles from "./Avatar.module.css";

export type AvatarProps = {
  src: string;
  alt: string;
  /**
   * @default "lazy"
   */
  loading?: "lazy" | "eager";
};

function Avatar({ src, alt, loading = "lazy" }: AvatarProps) {
  return (
    <img className={styles.avatar} loading={loading} src={src} alt={alt} />
  );
}

export default Avatar;
