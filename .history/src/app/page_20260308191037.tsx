import styles from "./page.module.css";
import course from "./course.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
				{course && {
					<ul>
						course.le
					</ul>
				}}
			</main>
    </div>
  );
}
