import React from "react";
import styles from "./TradeChat.module.css";
import { ReactComponent as AddChatUser } from "../../assets/images/addChatUser.svg";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Chatitem from "../chatItem/ChatItem";
import girl from "../../assets/images/girl.png";

const Tradechat = () => {
  const incomingChatData = [
    {
      userImg: girl,
      userName: "Raiyan Khan",
      timeLine: "2 min ago",
      description: "Request for system Support: Update of Project Alfa",
    },
    {
      userImg: girl,
      userName: "Raiyan Khan",
      timeLine: "2 min ago",
      description: "Request for system Support: Update of Project Alfa",
    },
    {
      userImg: girl,
      userName: "Raiyan Khan",
      timeLine: "2 min ago",
      description: "Request for system Support: Update of Project Alfa",
    },
  ];
  return (
    <div className={styles.mainPart}>
      <p className={styles.title}>Trade Chat</p>
      <main className={styles.main}>
        <div className={styles.topPart}>
          <div className={styles.add}>
            <AddChatUser />
          </div>
          <div className={styles.add}>
            <select className={styles.select} name="chat" id="">
              <option value="allChat">All Chat</option>
            </select>
          </div>
          <div className={styles.add}>
            <IconButton>
              <Search style={{ color: "#FFF" }} />
            </IconButton>
            <input type="text" className={styles.inp} />
          </div>
        </div>
        <div className={styles.itemsArea}>
          {incomingChatData.map((el, i) => (
            <Chatitem items={el} key={i} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Tradechat;
