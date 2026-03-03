import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles["login-container"]}>
      <h2>MoscowDev Ecommerce Site</h2>

      <form className={styles["form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className={styles["options"]}>
          <label className={styles["checkbox-label"]}>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className={styles["forgot-link"]}>
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className={styles["login-btn"]}
        >
          Login
        </button>

        <div className={styles["signup-text"]}>
          Don't have an account?{" "}
          <a href="/register" className={styles["signup-link"]}>
           
        
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;