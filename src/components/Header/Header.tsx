import "../../App.scss";
import ScoreCounter from "../ScoreCounter/ScoreCounter";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`header ${styles.header}`}>
      <span className="logo">SongBird</span>
      <div className={styles.headerWrap}>
        <ScoreCounter />
      </div>
    </header>
  );
};
export default Header;
