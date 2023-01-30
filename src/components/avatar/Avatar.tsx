import styles from "./Avatar.module.css";

export type AvatarProps = {
  className?: string;
  src: string;
  alt: string;
  /**
   * @default "lazy"
   */
  loading?: "lazy" | "eager";
};

function Avatar({ src, alt, loading = "lazy", className = "" }: AvatarProps) {
  return (
    <img
      className={`${styles.avatar} ${className}`}
      loading={loading}
      src={src}
      alt={alt}
    />
  );
}

export default Avatar;
