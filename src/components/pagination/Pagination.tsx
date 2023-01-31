import styles from "./Pagination.module.css";

export type PaginationProps = {
  className?: string;
  onNextPage: () => void;
  onPreviousPage: () => void;
};

function Pagination({
  className = "",
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button className={styles.navigateButton} onClick={onPreviousPage}>
        Previous
      </button>
      <button className={styles.navigateButton} onClick={onNextPage}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
