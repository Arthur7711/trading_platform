import React from "react";
import Logregheader from "../../components/logRegHeader/LogRegHeader";
import styles from "./Login.module.css";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import { ReactComponent as Google } from "../../assets/images/google.svg";
import { ReactComponent as Fb } from "../../assets/images/fb.svg";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  function showingInp(e) {
    if (e.target.parentNode.parentNode.childNodes[1].type === "password") {
      e.target.parentNode.parentNode.childNodes[1].type = "text";
    } else if (e.target.parentNode.parentNode.childNodes[1].type === "text") {
      e.target.parentNode.parentNode.childNodes[1].type = "password";
    }
  }
  const navigate = useNavigate();
  return (
    <>
      <Logregheader />
      <main className={styles.main}>
        <div className={styles.item}>
          <p className={styles.title}>Login an account</p>
          <div className={styles.forLabel}>
            <label>
              Email
              <input type="text" />
            </label>
          </div>
          <div className={styles.forLabel}>
            <label className={styles.passLab}>
              Password
              <input type="password" />
              <Eye onClick={(e) => showingInp(e)} />
            </label>
          </div>
          <button className={styles.btn}>Login</button>
          <div className={styles.linesArea}>
            <div className={styles.line}></div>
            <p>OR</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.socMedia}>
            <Google />
            Login with Google
          </div>
          <div className={styles.socMedia}>
            <Fb />
            Login with Facebook
          </div>
          <p className={styles.already}>
          Don't have an account? <span onClick={()=>navigate('/register')}>Sign up</span>
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
