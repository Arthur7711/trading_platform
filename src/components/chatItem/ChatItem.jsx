import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./ChatItem.module.css";
import girl from "../../assets/images/girl.png";

const Chatitem = () => {
  return (
    <main className={styles.main}>
      <Avatar alt="user" src={girl} sx={{ width: 40, height: 40 }} />
      <div>
        <div className={styles.topPart}>
          <p className={styles.title}>Raiyan Khan</p>
          <p className={styles.time}>2 min ago</p>
        </div>
        <p className={styles.description}>
          Request for system Support: Update of Project Alfa
        </p>
      </div>
    </main>
  );
};

export default Chatitem;
