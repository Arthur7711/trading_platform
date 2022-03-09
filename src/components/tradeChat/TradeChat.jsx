import React from "react";
import styles from "./TradeChat.module.css";
import { ReactComponent as AddChatUser } from "../../assets/images/addChatUser.svg";
import { IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Chatitem from "../chatItem/ChatItem";

const Tradechat = () => {
  return (
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
      <div>
          <Chatitem />
      </div>
    </main>
  );
};

export default Tradechat;
