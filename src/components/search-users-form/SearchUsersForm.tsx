import { ChangeEventHandler, FormEventHandler, useState } from "react";
import styles from "./SearchUsersForm.module.css";

export type SearchUsersFormProps = {
  onSearch: (values: { searchTerm: string }) => void;
};

function SearchUsersForm({ onSearch }: SearchUsersFormProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSearch({ searchTerm });
  };

  const handleOnChangeSearchTerm: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <input
        className={styles.userNameInput}
        aria-label="Type a github username"
        type="search"
        id="user-name"
        placeholder="Type a github username"
        value={searchTerm}
        onChange={handleOnChangeSearchTerm}
      />
      <button className={styles.submitButton}>Search</button>
    </form>
  );
}

export default SearchUsersForm;
