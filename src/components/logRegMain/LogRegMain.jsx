import React, { Fragment, useEffect, useState } from "react";
import Paymantitem from "../paymantItem/PaymantItem";
import styles from "./Logregmain.module.css";
import { API } from "../../API/API";

const Logregmain = () => {
  const [data, setData] = useState([]);

  async function getPlans() {
    const res = await API.get("/plans");
    const newdata = await res.data.success;
    setData([...data, ...newdata]);
  }
  useEffect(() => {
    getPlans();
  }, []);

  return (
    <main className={styles.main}>
      {data &&
        data.map((el, i) => (
          <Fragment key={i}>
            <Paymantitem
              name={el.name}
              fakeData={el.description}
              cost={el.price}
            />
          </Fragment>
        ))}
    </main>
  );
};

export default Logregmain;
