import { Header } from "./Components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./Components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Jotinha Vereador" content="Já ganhou tan tan tan" />
          <Post author="Silvio Mendes" content="Eu apoio o Jotinha" />
        </main>
      </div>
    </div>
  );
}
