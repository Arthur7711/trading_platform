import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./ChatItem.module.css";
import girl from "../../assets/images/girl.png";

const Chatitem = ({ items }) => {
  return (
    <main className={styles.main}>
      <Avatar alt="user" src={items.userImg} sx={{ width: 40, height: 40 }} />
      <div>
        <div className={styles.topPart}>
          <p className={styles.title}>{items.userName}</p>
          <p className={styles.time}>{items.timeLine}</p>
        </div>
        <p className={styles.description}>{items.description}</p>
      </div>
    </main>
  );
};

export default Chatitem;
