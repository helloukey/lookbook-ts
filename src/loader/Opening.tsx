import styles from "./Opening.module.css";
import { motion } from "framer-motion";

type Props = {};

const Opening = (props: Props): JSX.Element => {
  return (
    <div className={styles.opening_container}>
      <motion.div
        exit={{ opacity: 1, x: "-100vw", transition: { duration: 1 } }}
        className={styles.opening_left}
      ></motion.div>
      <motion.div
        exit={{ opacity: 1, x: "100vw", transition: { duration: 1 } }}
        className={styles.opening_right}
      ></motion.div>
    </div>
  );
};
export default Opening;
