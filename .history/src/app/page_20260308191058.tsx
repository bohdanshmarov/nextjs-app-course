import styles from "./page.module.css";
import course from "./course.json";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
				{course && course.lessons && (
          <ul>
            {course.lessons.map((lesson) => (
              <li key={lesson.name}>
                <h3>{lesson.title}</h3>
                <ul>
                  {lesson.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
			</main>
    </div>
  );
}
