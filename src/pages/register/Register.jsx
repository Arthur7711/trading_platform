import React, { useState } from "react";
import Logregheader from "../../components/logRegHeader/LogRegHeader";
import styles from "./Reg.module.css";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import { ReactComponent as Google } from "../../assets/images/google.svg";
import { ReactComponent as Fb } from "../../assets/images/fb.svg";
import { useNavigate } from "react-router-dom";
import { API } from "../../API/API";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Register = () => {
  function showingInp(e) {
    if (e.target.parentNode.parentNode.childNodes[1].type === "password") {
      e.target.parentNode.parentNode.childNodes[1].type = "text";
    } else if (e.target.parentNode.parentNode.childNodes[1].type === "text") {
      e.target.parentNode.parentNode.childNodes[1].type = "password";
    }
  }

  const navigate = useNavigate();
  const [requestData, setRequestDAta] = useState({
    name: "",
    email: "",
    password: "",
    plan_id: localStorage.getItem("paymant"),
  });
  const [open, setOpen] = React.useState(false);
  const [errMessage, setErrMessage] = useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function registerRequest() {
    API.post("/register", requestData)
      .then((res, req) => {
        console.log(res, "reeeeees");
        return navigate("/login");
      })
      .catch((err) => {
        setErrMessage(err.response.data.error);
        handleClick();
        // console.log(err.response.data.error);
      });
  }
  return (
    <>
      <Logregheader />
      <main className={styles.main}>
        <div className={styles.item}>
          <p className={styles.title}>Create an account</p>
          <div className={styles.forLabel}>
            <label>
              Username
              <input
                type="text"
                required
                onChange={(e) =>
                  setRequestDAta({ ...requestData, name: e.target.value })
                }
              />
            </label>
          </div>
          <div className={styles.forLabel}>
            <label>
              Email
              <input
                type="text"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e) =>
                  setRequestDAta({ ...requestData, email: e.target.value })
                }
              />
            </label>
          </div>
          <div className={styles.forLabel}>
            <label className={styles.passLab}>
              Password
              <input
                type="password"
                required
                onChange={(e) =>
                  setRequestDAta({
                    ...requestData,
                    password: e.target.value,
                  })
                }
              />
              <Eye onClick={(e) => showingInp(e)} />
            </label>
          </div>
          <label className={styles.checking}>
            <input
              type="checkbox"
              required
              onChange={(e) =>
                setRequestDAta({
                  ...requestData,
                  plan_id: Number(e.target.checked),
                })
              }
            />
            <p>
              I have read and agree to Trade Alerts
              <span className={styles.terms}> Terms of Service </span>
            </p>
          </label>
          <button className={styles.btn} onClick={() => registerRequest()}>
            Create Account
          </button>
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
          <p className={styles.already}>
            Already registered?
            <span onClick={() => navigate("/login")}>Log In</span>
          </p>
        </div>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errMessage.map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </Alert>
        </Snackbar>
        ;
      </main>
    </>
  );
};

export default Register;
