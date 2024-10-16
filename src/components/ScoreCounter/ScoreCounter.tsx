import { useContext } from "react";
import styles from "./ScoreCounter.module.scss";
import { QuizContext } from "../../Context/context";

const ScoreCounter = () => {
  const { score } = useContext(QuizContext);

  return (
    <div className={styles.counter}>
      <span className={styles.counter__text}>Score:</span>
      <span className={styles.counter__number}>{score}</span>
    </div>
  );
};
export default ScoreCounter;
