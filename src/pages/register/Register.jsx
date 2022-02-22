import React from "react";
import Logregheader from "../../components/logRegHeader/LogRegHeader";
import styles from "./Reg.module.css";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import { ReactComponent as Google } from "../../assets/images/google.svg";
import { ReactComponent as Fb } from "../../assets/images/fb.svg";

const Register = () => {
  return (
    <>
      <Logregheader />
      <main className={styles.main}>
        <div className={styles.item}>
          <p className={styles.title}>Create an account</p>
          <div className={styles.forLabel}>
            <label>
              Username
              <input type="text" />
            </label>
          </div>
          <div className={styles.forLabel}>
            <label>
              Email
              <input type="text" />
            </label>
          </div>
          <div className={styles.forLabel}>
            <label>
              Password
              <input type="text" />
            </label>
          </div>
          <label className={styles.checking}>
            <input type="checkbox" />
            <p>
              I have read and agree to Trade Alerts
              <span className={styles.terms}> Terms of Service </span>
            </p>
          </label>
          <button className={styles.btn}>Create Account</button>
          <div className={styles.linesArea}>
            <div className={styles.line}></div>
            <p>OR</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.socMedia}>
            <Google />
            Sign up with Google
          </div>
          <div className={styles.socMedia}>
            <Fb />
            Sign up with Facebook
          </div>
          <p className={styles.already}>Already registered? <span>Log In</span></p>
        </div>
      </main>
    </>
  );
};

export default Register;
