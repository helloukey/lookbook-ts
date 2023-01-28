import styles from "./SingleTools.module.css";

type Props = {
  asset1: string;
  asset2: string;
  mintDate: string;
};
const SingleTools = ({ asset1, asset2, mintDate }: Props) => {
  return (
    <div className={styles.container}>
      <img src={asset1} alt={asset1} className={styles.asset1} />
      <img src={asset2} alt={asset2} className={styles.asset2} />
      <p className={styles.mintDate}>MINT ON {mintDate}</p>
      <p className={styles.collection}>SEE COLLECTION {">>>"}</p>
    </div>
  );
};
export default SingleTools;
