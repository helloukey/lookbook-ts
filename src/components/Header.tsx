import styles from "./Header.module.css";

// assets
import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
import dna from "../assets/dna.svg";

type Props = {};
const Header = (props: Props): JSX.Element => {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="home" className={styles.logo} />
      <img src={Logo2} alt="home2" className={styles.logo2} />
      {/* Sneakers and DNA */}
      <div className={styles.sneakers_dna}>
        <p>Sneakers 👟</p>
        <p className={styles.all_dna}>All DNA</p>
        <img src={dna} alt="dna" className={styles.dna} />
      </div>
    </div>
  );
};
export default Header;
