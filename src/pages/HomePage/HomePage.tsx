import { NavLink } from "react-router-dom";
import "../../App.scss";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <header className={styles.home__header}>
          <span className={styles.logo}>SongBird</span>
        </header>
        <div className={styles.home__intro}>
          <p>Добро пожаловать в Songbird Quiz! </p>
          <p> Сможешь ли ты угадать, какая птица поет?</p>
          <p>Слушай звуки птиц и выбирай правильный ответ.</p>
          <NavLink to="/quiz" className={styles.btn_startQuiz}>
            Начать викторину
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
