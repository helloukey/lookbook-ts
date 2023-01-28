import Character from "./Character";
import styles from "./Single.module.css";
import SingleText from "./SingleText";
import SingleTools from "./SingleTools";

import React, { useEffect, useState } from "react";
import "atropos/css";
import Atropos from "atropos/react";

import characters from "../characters";
import Listing from "./Listing";
import NextCharacter from "./NextCharacter";

type Props = {};
const Single = (props: Props) => {
  const [current, setCurrent] = useState<number>(1);

  // Change character every 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === 10) {
        setCurrent(1);
      } else {
        setCurrent(current + 1);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [current]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>): void => {
    const timer = setTimeout(() => {
      if (e.deltaY < 0) {
        if (current === 1) {
          setCurrent(10);
        } else {
          setCurrent(current - 1);
        }
        clearTimeout(timer);
      } else {
        if (current === 10) {
          setCurrent(1);
        } else {
          setCurrent(current + 1);
        }
        clearTimeout(timer);
      }
    }, 200);
  };

  return (
    <div className={styles.container} onWheel={handleScroll}>
      <Atropos className="my-atropos" shadow={false} highlight={false}>
        <SingleText text={characters[current - 1].name} current={current} />
        <SingleTools
          asset1={require(`../assets/character-tools/char${current}a.png`)}
          asset2={require(`../assets/character-tools/char${current}b.png`)}
          mintDate="13/07/2022"
        />
        <Character
          character={require(`../assets/characters/char${current}.png`)}
          current={current}
        />
      </Atropos>
      <NextCharacter current={current} />
      <Listing setCurrent={setCurrent} current={current} />
    </div>
  );
};
export default Single;
