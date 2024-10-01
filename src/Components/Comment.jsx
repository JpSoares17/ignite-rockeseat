import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/JpSoares17.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jotinha do back-End</strong>
              <time
                title="29 de Setembro de 2024 às 8:00h"
                dateTime="2024-09-29 08:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Conteúdo do Comentário</p>
        </div>
      </div>
      <footer>
        <button>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  );
}
