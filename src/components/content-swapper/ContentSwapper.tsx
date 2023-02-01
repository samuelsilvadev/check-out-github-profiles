import type { ReactNode } from "react";
import styles from "./ContentSwapper.module.css";

export type ContentSwapperProps = {
  loading: boolean;
  error: boolean;
  children: ReactNode;
};

function ContentSwapper({ loading, error, children }: ContentSwapperProps) {
  const handleOnRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return <p className={styles.wrapper}>Loading...</p>;
  }

  if (error) {
    return (
      <div className={styles.wrapper}>
        <p>Something went wrong, let&apos;s try again</p>
        <button
          className={styles.retryButton}
          type="button"
          onClick={handleOnRetry}
        >
          Retry
        </button>
      </div>
    );
  }

  return <>{children}</>;
}

export default ContentSwapper;
