import React from "react";
import styles from "./PaymantItem.module.css";
import { ReactComponent as DoneSvg } from "../../assets/images/done.svg";
import { ReactComponent as ErrorSvg } from "../../assets/images/error.svg";
import {useNavigate} from 'react-router-dom';

const Paymantitem = ({ fakeData, cost }) => {

  const navigate = useNavigate();

  return (
    <div className={styles.item}>
      {fakeData.map((el, i) => (
        <div key={i} className={styles.eachElement}>
          {el.supported === false ? <ErrorSvg /> : <DoneSvg />}
          <p>{el.title}</p>
        </div>
      ))}
      <div className={styles.line}></div>
      <p className={styles.cost} onClick={()=>navigate('/register')}>{cost}</p>
    </div>
  );
};

export default Paymantitem;
