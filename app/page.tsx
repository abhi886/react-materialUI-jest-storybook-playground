'use client';
import styles from "./page.module.css";
import LoginForm from "./components/test/form/LoginForm";

export default function Home() {
  return (

      <div className={styles.page}>
            <LoginForm></LoginForm>
      </div>
  );
}
