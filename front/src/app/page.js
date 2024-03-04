import Image from "next/image";
import styles from "./page.module.css";
import Get from "./post";
import Button from "./button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Get />
          <Button />
        </p>

      </div>
    </main>
  );
}
