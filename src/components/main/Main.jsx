import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import styles from "./Main.module.css";
import { ReactComponent as BarcodeScanner } from "../../assets/images/barcode-scanner.svg";
import { ReactComponent as ChartSvg } from "../../assets/images/chart.svg";
import { ReactComponent as DashboardSvg } from "../../assets/images/dashboard.svg";
import { ReactComponent as Help } from "../../assets/images/help-circle.svg";
import { ReactComponent as LogOut } from "../../assets/images/log-out.svg";
import { ReactComponent as Message } from "../../assets/images/message-circle.svg";
import { ReactComponent as Newspaper } from "../../assets/images/newspaper.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as Shop } from "../../assets/images/shop.svg";
import { ReactComponent as Some } from "../../assets/images/some.svg";
import { ReactComponent as Market } from "../../assets/images/stock-market.svg";
import { ReactComponent as Suitcase } from "../../assets/images/suitcase.svg";
import { ReactComponent as Trader } from "../../assets/images/trader.svg";
import { ReactComponent as MenuOpener } from "../../assets/images/openClose.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import logo from "../../assets/images/logo.png";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { SVG: <DashboardSvg />, title: "Dashboard" },
    { SVG: <Suitcase />, title: "My portfolio" },
    { SVG: <Trader />, title: "Top Traders" },
    { SVG: <Shop />, title: "Markets" },
    { SVG: <BarcodeScanner />, title: "Scanner" },
    { SVG: <ChartSvg />, title: "Charts" },
    { SVG: <Message />, title: "Trade Chat" },
    { SVG: <Newspaper />, title: "News" },
    { SVG: <Market />, title: "Trades" },
    { SVG: <Some />, title: "Discover" },
    { SVG: <Settings />, title: "Settings" },
    { SVG: <Help />, title: "Help" },
    { SVG: <LogOut />, title: "Log out" },
  ];
  const handleCloseMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={
        isOpen === true
          ? { gridTemplateColumns: "50px 1fr" }
          : { gridTemplateColumns: "290px 1fr" }
      }
      className={styles.page}
    >
      <header className={styles.header}>
        <div className={styles.headMainPart}>
          <div className={styles.search}>
            <label className={styles.searchLab}>
              <input type="text" placeholder="Search" />
              <Search />
            </label>
          </div>
        </div>
      </header>
      <nav className={styles.navigate}>
        <div
          style={isOpen === true ? { display: "block" } : { display: "none" }}
          className={styles.openMenu}
        >
          <MenuOpener
            // style={{ transform: "rotate(180deg)" }}
            onClick={handleCloseMenu}
          />
        </div>
        <div
          style={isOpen === false ? { display: "flex" } : { display: "none" }}
          className={styles.navHeadPart}
        >
          <img src={logo} alt="logo" />
          <div className={styles.closeMenu}>
            <MenuOpener onClick={handleCloseMenu} />
          </div>
        </div>
        <div
          style={isOpen === false ? { display: "block" } : { display: "none" }}
          className={styles.userArea}
        >
          <div className={styles.userInfo}>
            <Avatar alt="user" src={logo} sx={{ width: 56, height: 56 }} />
            <p className={styles.userName}>User Name</p>
            <p className={styles.profileInfo}>Complete profile</p>
          </div>
          <div className={styles.followArea}>
            <div>
              <p>Followers</p>
              <p>2235</p>
            </div>
            <div>
              <p>Following</p>
              <p>1865</p>
            </div>
          </div>
        </div>
        {menuItems.map((el, i) => (
          <div
            style={i === 10 ? { marginTop: 50 } : null}
            key={i}
            className={styles.menuItem}
          >
            {el.SVG}
            <span
              style={
                isOpen === false ? { display: "flex" } : { display: "none" }
              }
              className={styles.sp}
            >
              {el.title}
            </span>
          </div>
        ))}
      </nav>
      <main className={styles.main}></main>
    </div>
  );
};

export default Main;
