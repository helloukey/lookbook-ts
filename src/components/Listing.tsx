import styles from "./Listing.module.css";
import { useState } from "react";

type Props = {
  setCurrent: (val: number) => void;
  current: number;
};
const Listing = ({ setCurrent, current }: Props) => {
  // Character active status
  const [genesis, setGenesis] = useState<boolean>(false);
  const [murakamiDrip, setMurakamiDrip] = useState<boolean>(false);
  const [human, setHuman] = useState<boolean>(false);
  const [robot, setRobot] = useState<boolean>(false);
  const [demon, setDemon] = useState<boolean>(false);
  const [angel, setAngel] = useState<boolean>(false);
  const [reptile, setReptile] = useState<boolean>(false);
  const [undead, setUndead] = useState<boolean>(false);
  const [murakami, setMurakami] = useState<boolean>(false);
  const [alien, setAlien] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {/* Names Container */}
      <div className={styles.names_container}>
        {/* Genesis */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              genesis || current === 1 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setGenesis(true)}
            onMouseLeave={(e) => setGenesis(false)}
            onClick={(e) => setCurrent(1)}
          ></div>
          <p
            className={`${styles.text} ${
              genesis || current === 1 ? styles.active_text : ""
            }`}
          >
            GENESIS
          </p>
        </div>
        {/* Murakami Drip */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              murakamiDrip || current === 2 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setMurakamiDrip(true)}
            onMouseLeave={(e) => setMurakamiDrip(false)}
            onClick={(e) => setCurrent(2)}
          ></div>
          <p
            className={`${styles.text} ${
              murakamiDrip || current === 2 ? styles.active_text : ""
            }`}
          >
            MURAKAMI DRIP
          </p>
        </div>
        {/* Human */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              human || current === 3 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setHuman(true)}
            onMouseLeave={(e) => setHuman(false)}
            onClick={(e) => setCurrent(3)}
          ></div>
          <p
            className={`${styles.text} ${
              human || current === 3 ? styles.active_text : ""
            }`}
          >
            HUMAN
          </p>
        </div>
        {/* Robot */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              robot || current === 4 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setRobot(true)}
            onMouseLeave={(e) => setRobot(false)}
            onClick={(e) => setCurrent(4)}
          ></div>
          <p
            className={`${styles.text} ${
              robot || current === 4 ? styles.active_text : ""
            }`}
          >
            ROBOT
          </p>
        </div>
        {/* Demon */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              demon || current === 5 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setDemon(true)}
            onMouseLeave={(e) => setDemon(false)}
            onClick={(e) => setCurrent(5)}
          ></div>
          <p
            className={`${styles.text} ${
              demon || current === 5 ? styles.active_text : ""
            }`}
          >
            DEMON
          </p>
        </div>
        {/* Angel */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              angel || current === 6 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setAngel(true)}
            onMouseLeave={(e) => setAngel(false)}
            onClick={(e) => setCurrent(6)}
          ></div>
          <p
            className={`${styles.text} ${
              angel || current === 6 ? styles.active_text : ""
            }`}
          >
            ANGEL
          </p>
        </div>
        {/* Reptile */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              reptile || current === 7 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setReptile(true)}
            onMouseLeave={(e) => setReptile(false)}
            onClick={(e) => setCurrent(7)}
          ></div>
          <p
            className={`${styles.text} ${
              reptile || current === 7 ? styles.active_text : ""
            }`}
          >
            REPTILE
          </p>
        </div>
        {/* Undead */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              undead || current === 8 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setUndead(true)}
            onMouseLeave={(e) => setUndead(false)}
            onClick={(e) => setCurrent(8)}
          ></div>
          <p
            className={`${styles.text} ${
              undead || current === 8 ? styles.active_text : ""
            }`}
          >
            UNDEAD
          </p>
        </div>
        {/* Murakami */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              murakami || current === 9 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setMurakami(true)}
            onMouseLeave={(e) => setMurakami(false)}
            onClick={(e) => setCurrent(9)}
          ></div>
          <p
            className={`${styles.text} ${
              murakami || current === 9 ? styles.active_text : ""
            }`}
          >
            MURAKAMI
          </p>
        </div>
        {/* Alien */}
        <div className={styles.char_container}>
          <div
            className={`${styles.box} ${
              alien || current === 10 ? styles.active_box : ""
            }`}
            onMouseEnter={(e) => setAlien(true)}
            onMouseLeave={(e) => setAlien(false)}
            onClick={(e) => setCurrent(10)}
          ></div>
          <p
            className={`${styles.text} ${
              alien || current === 10 ? styles.active_text : ""
            }`}
          >
            ALIEN
          </p>
        </div>
      </div>
    </div>
  );
};
export default Listing;
