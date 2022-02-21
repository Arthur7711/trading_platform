import React, { Fragment } from "react";
import Paymantitem from "../paymantItem/PaymantItem";
import styles from "./Logregmain.module.css";

const Logregmain = () => {
  const fakeData = [
    {
      data: [
        { supported: true, title: "Social aspect" },
        { supported: true, title: "Can talk amd chat" },
        { supported: true, title: "See free trade alerts users put out" },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: false,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: false,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: false,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: false,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
      cost: "FREE",
    },
    {
      data: [
        { supported: true, title: "Social aspect" },
        { supported: true, title: "Can talk amd chat" },
        { supported: true, title: "See free trade alerts users put out" },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: false,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: false,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
      cost: "$ 54",
    },
    {
      data: [
        { supported: true, title: "Social aspect" },
        { supported: true, title: "Can talk amd chat" },
        { supported: true, title: "See free trade alerts users put out" },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          supported: true,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
      cost: "$ 120",
    },
  ];
  return (
    <main className={styles.main}>
      {fakeData.map((el, i) => (
        <Fragment key={i}>
          <Paymantitem fakeData={el.data} cost={el.cost} />
        </Fragment>
      ))}
    </main>
  );
};

export default Logregmain;
