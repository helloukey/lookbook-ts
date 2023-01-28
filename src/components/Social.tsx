import styles from "./Social.module.css";

// assets
import twitter from "../assets/social/twitter.svg";
import discord from "../assets/social/discord.svg";
import opensea from "../assets/social/opensea.svg";

type Props = {};
const Social = (props: Props) => {
  return (
    <div className={styles.container}>
      <img src={twitter} alt="twitter" />
      <img src={discord} alt="discord" />
      <img src={opensea} alt="opensea" />
    </div>
  );
};
export default Social;
