import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import girl from "../../assets/images/girl.png";
import styles from "./Indice.module.css";
import { ReactComponent as UsersAvatar } from "../../assets/images/usersAvatar.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as EllipseStar } from "../../assets/images/ellipseStar.svg";
import { ReactComponent as ChartTraders } from "../../assets/images/chartTraders.svg";

const Indice = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <main className={styles.main}>
      <div className={styles.user}>
        <div className={styles.avaArea}>
          <Avatar alt="user" src={girl} sx={{ width: 45, height: 45 }} />
          <div className={styles.ellips}>
            <EllipseStar />
          </div>
        </div> 
        <p className={styles.userName}>User Name</p>
      </div>
      <div className={styles.trades}>
        <div className={styles.iconsArea}>
          <ChartTraders />
        </div>
        <p className={styles.p1}>Trades</p>
        <p className={styles.p2}>7025</p>
      </div>
      <div className={styles.trades}>
        <div className={styles.iconsArea}>
          <UsersAvatar />
        </div>
        <p className={styles.p1}>Followers</p>
        <p className={styles.p2}>7025</p>
      </div>
      <div className={styles.trades}>
        <div className={styles.iconsArea}>
          <Star />
        </div>
        <p className={styles.p1}>Last trade</p>
        <p className={styles.p2}>7025</p>
      </div>
      <div className={styles.paymantArea}>
        <p className={styles.cost}>$25.00</p>
        <p className={styles.p1}>Per month</p>
        <button
          style={
            isClicked === true
              ? {
                  background: `linear-gradient(90deg, #fd2828 0%, #fe8383 100%)`,
                }
              : {
                  background: `linear-gradient(90deg, #0066FF 0%, #00D1FF 100%)`,
                }
          }
          className={styles.btn}
          onClick={() => setIsClicked(!isClicked)}
        >
          Subscribe
        </button>
      </div>
    </main>
  );
};

export default Indice;
