import React from "react";
import Avatar from "@mui/material/Avatar";
import logo from "../../assets/images/logo.png";
import styles from "./Indice.module.css";
import { ReactComponent as UsersAvatar } from "../../assets/images/usersAvatar.svg";
import { ReactComponent as Star } from "../../assets/images/star.svg";
import { ReactComponent as EllipseStar } from "../../assets/images/ellipseStar.svg";
import { ReactComponent as ChartTraders } from "../../assets/images/chartTraders.svg";

const Indice = () => {
  return (
    <main className={styles.main}>
      <div className={styles.user}>
        <div className={styles.avaArea}>
          <Avatar alt="user" src={logo} sx={{ width: 56, height: 56 }} />
          <div className={styles.ellips}>
            <EllipseStar />
          </div>
        </div>
        <p>User Name</p>
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
    </main>
  );
};

export default Indice;
