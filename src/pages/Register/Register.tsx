import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { userRepository } from "../../repositories/userRepository";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitBtn = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const result = await userRepository.register({
        name,
        surname,
        birthdate,
        username,
        password,
      });
      if (result) {
        navigate("/signin");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className={styles["Register"]}>
      <div className={styles["main-content"]}>
        <div className={styles.header}>
          <h3 className={styles["header-name"]}>PARKING PROJECT</h3>
        </div>
        <div className={styles["register-info"]}>
          <h4>REGISTER</h4>
          <div className={styles.sentence}>
            <span>Enter your data to register</span>
          </div>
        </div>
        <div className={styles["form-container"]}>
          <form className={styles.form} onSubmit={submitBtn}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className={styles.label} htmlFor="surname">
              Surname
            </label>
            <input
              type="text"
              placeholder="Enter your surname"
              name="surname"
              className={styles.input}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />

            <label className={styles.label} htmlFor="birthdate">
              Birthdate
            </label>
            <input
              type="date"
              placeholder="Enter your birthdate"
              name="birthdate"
              className={styles.input}
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />

            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className={styles["register-btn"]}>
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
