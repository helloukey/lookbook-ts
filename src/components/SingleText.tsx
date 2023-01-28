import styles from "./SingleText.module.css";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  text: string;
  current: number;
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const item1 = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  exit: { opacity: 0, y: 100, transition: { delay: 0.2 } },
};
const item2 = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { delay: 0.1 } },
  exit: { opacity: 0, y: 100, transition: { delay: 0.1 } },
};
const item3 = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { delay: 0 } },
  exit: { opacity: 0, y: 100, transition: { delay: 0 } },
};

const SingleText = ({ text, current }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {/* Text 1 */}
      {current === 1 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 2 */}
      {current === 2 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 3 */}
      {current === 3 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 4 */}
      {current === 4 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 5 */}
      {current === 5 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 6 */}
      {current === 6 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 7 */}
      {current === 7 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 8 */}
      {current === 8 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 9 */}
      {current === 9 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
      {/* Text 10 */}
      {current === 10 && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          key={text}
          className={styles.container}
        >
          <motion.p
            variants={item1}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text1}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item2}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text2}
          >
            {text}
          </motion.p>
          <motion.p
            variants={item3}
            initial="hidden"
            animate="show"
            exit="exit"
            className={styles.text3}
          >
            {text}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SingleText;
