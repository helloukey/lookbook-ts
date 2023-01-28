import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./NextCharacter.module.css";
import { useEffect, useState } from "react";

type Props = {
  current: number;
};
const NextCharacter = ({ current }: Props) => {
  const [percentage, setPercentage] = useState<number>(1);

  useEffect(() => {
    if (percentage === 10) {
      setPercentage(1);
    }
    const timer = setTimeout(() => {
      setPercentage((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [percentage, current]);

  useEffect(() => {
    setPercentage(1);
  }, [current]);

  return (
    <div className={styles.container}>
      <CircularProgressbar
        value={percentage * 10}
        strokeWidth={4}
        styles={buildStyles({
          // Colors
          pathColor: `#FFF`,
          textColor: "#f88",
          trailColor: "#555",
          backgroundColor: "#3e98c7",
        })}
      />
      <p className={styles.text}>Scroll to explore the collection.</p>
      <p className={styles.arrow}>{">"}</p>
    </div>
  );
};
export default NextCharacter;
