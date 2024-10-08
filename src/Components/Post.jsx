import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/JpSoares17.png"
          />
          <div className={styles.authorInfo}>
            <strong>Jotinha Back-End</strong>
            <span>A.I. Developer</span>
          </div>
        </div>

        <time
          title="29 de Setembro de 2024 às 8:00h"
          dateTime="2024-09-29 08:00:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Conteúdo da minha <a href="#">parada</a> vai ficar por aquiii
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
