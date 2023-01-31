import type { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

function Layout({ title, children }: LayoutProps) {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

export default Layout;
