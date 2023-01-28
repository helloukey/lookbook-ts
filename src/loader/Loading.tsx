import styles from "./Loading.module.css";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Assets
import loadingLogo from "../assets/loading-logo.svg";

type Props = {};
const Loading = (props: Props): JSX.Element => {
  const [percentage, setPercentage] = useState<number>(0);

  // Loading percentage
  useEffect(() => {
    if (percentage === 99) {
      return;
    } else {
      setTimeout(() => {
        setPercentage(percentage + 1);
      }, 100);
    }
  }, [percentage]);

  return (
    <div className={styles.container}>
      <div className={styles.marquee_container}>
        <p className={styles.text}>FORGING • CLONE X</p>
        <p className={styles.text}>FORGING • CLONE X</p>
        <p className={styles.text}>FORGING • CLONE X</p>
        <p className={styles.text}>FORGING • CLONE X</p>
        <p className={styles.text}>FORGING • CLONE X</p>
      </div>

      {/* Logo */}
      <img src={loadingLogo} alt="loading..." className={styles.logo} />
      <p className={styles.title}>LOOKBOOK</p>

      {/* Progress */}
      <div className={styles.progress}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage.toString()} %`}
          strokeWidth={4}
          styles={buildStyles({
            // Colors
            pathColor: `#FFF`,
            textColor: "#EEE",
            trailColor: "#555",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <p className={styles.loading_text}>LOADING</p>
    </div>
  );
};
export default Loading;
