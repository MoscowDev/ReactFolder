import React from "react";
import styles from "./register.module.css";
import { Link } from "react-router";
import { RegisterMock } from "../../mocks/RegisterMock";

const Register = () => {

  try{
    RegisterMock({
 
      fullName: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      confirmPassword: "password123",
      termsAccepted: true
    
    }).then((response) => {
      
      console.log("Mock registration response:", response);
    });
  } catch (error) {
    console.error("Error during mock registration:", error);
  }



  
  return (
    <div className={styles["register-container"]}>
      <h2>Create Account</h2>

      <form className={styles["form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            required
            minLength="3"
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="email">Email Address</label>
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
            placeholder="Create a password"
            required
            minLength="6"
          />
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            required
            minLength="6"
          />
        </div>

        <div className={styles["terms"]}>
          <label className={styles["checkbox-label"]}>
            <input type="checkbox" required />
            I agree to the Terms and Conditions
          </label>
        </div>

        <button
          type="submit"
          className={styles["register-btn"]}
        >
          Register
        </button>

        <div className={styles["login-text"]}>
          Already have an account?{" "}
          <a href = ""><Link to = "/login">login</Link></a>
          <a href="/login" className={styles["login-link"]}>
            Login
          </a>
        </div>
        console.log("Register form submitted", formData);
      </form>
    </div>
  );
};

export default Register;