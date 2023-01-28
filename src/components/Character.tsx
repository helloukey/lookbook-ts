import styles from "./Character.module.css";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  character: string;
  current: number;
};

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  appear: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  disappear: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};

const Character = ({ character, current }: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {/* Character 1 */}
        {current === 1 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 2 */}
        {current === 2 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 3 */}
        {current === 3 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 4 */}
        {current === 4 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 5 */}
        {current === 5 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 6 */}
        {current === 6 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 7 */}
        {current === 7 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 8 */}
        {current === 8 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 9 */}
        {current === 9 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
        {/* Character 10 */}
        {current === 10 && (
          <motion.img
            key={current}
            variants={variants}
            initial="initial"
            animate="appear"
            exit="disappear"
            src={character}
            alt={character}
            className={styles.character}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Character;
