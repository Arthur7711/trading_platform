import React from "react";
import styles from "./PaymantItem.module.css";
import { ReactComponent as DoneSvg } from "../../assets/images/done.svg";
import { ReactComponent as ErrorSvg } from "../../assets/images/error.svg";
import { useNavigate } from "react-router-dom";

const Paymantitem = ({ name, fakeData, cost }) => {
  const navigate = useNavigate();
  function selectingPlan(element) {
    localStorage.setItem("paymant", element);
    return navigate("/register");
  }
  return (
    <div>
      <p className={styles.title}>{name}</p>
      <div className={styles.item}>
        {fakeData.map((el, i) => (
          <div key={i} className={styles.eachElement}>
            {el.supported === false ? <ErrorSvg /> : <DoneSvg />}
            <p>{el.title}</p>
          </div>
        ))}
        <div className={styles.line}></div>
        <p className={styles.cost} onClick={() => selectingPlan(cost)}>
          {cost === 0 ? "FREE" : `$${cost}`}
        </p>
      </div>
    </div>
  );
};

export default Paymantitem;
