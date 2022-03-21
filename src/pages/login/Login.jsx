import React, { useState } from "react";
import Logregheader from "../../components/logRegHeader/LogRegHeader";
import styles from "./Login.module.css";
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

const Login = () => {
  const [requestData, setRequestDAta] = useState({
    email: "",
    password: "",
  });

  function showingInp(e) {
    if (e.target.parentNode.parentNode.childNodes[1].type === "password") {
      e.target.parentNode.parentNode.childNodes[1].type = "text";
    } else if (e.target.parentNode.parentNode.childNodes[1].type === "text") {
      e.target.parentNode.parentNode.childNodes[1].type = "password";
    }
  }
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate();
  async function loginRequest() {
    API.post("login", requestData)
      .then((res, req) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((err) => {
        handleClick();
        console.log(err.response);
      });
  }
  return (
    <>
      <Logregheader />
      <main className={styles.main}>
        <div className={styles.item}>
          <p className={styles.title}>Login an account</p>
          <div className={styles.forLabel}>
            <label>
              Email
              <input
                type="email"
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
                pattern=".{8,}"
                onChange={(e) =>
                  setRequestDAta({ ...requestData, password: e.target.value })
                }
              />
              <Eye onClick={(e) => showingInp(e)} />
            </label>
          </div>
          <button className={styles.btn} onClick={() => loginRequest()}>
            Login
          </button>
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
            Don't have an account?
            <span onClick={() => navigate("/register")}> Sign up</span>
          </p>
        </div>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            This is a error message!
          </Alert>
        </Snackbar>
      </main>
    </>
  );
};

export default Login;
