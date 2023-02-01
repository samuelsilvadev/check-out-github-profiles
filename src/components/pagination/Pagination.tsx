import styles from "./Pagination.module.css";

export type PaginationProps = {
  className?: string;
  onNextPage: () => void;
  onPreviousPage: () => void;
  currentPage?: number;
  totalPages?: number;
};

function Pagination({
  className = "",
  currentPage = 1,
  totalPages = 1,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  if (
    currentPage <= 0 ||
    totalPages <= 0 ||
    (currentPage === 1 && totalPages === 1)
  ) {
    return null;
  }

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button
        className={styles.navigateButton}
        disabled={currentPage <= 1}
        onClick={onPreviousPage}
      >
        Previous
      </button>
      <button
        className={styles.navigateButton}
        disabled={currentPage >= totalPages}
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
