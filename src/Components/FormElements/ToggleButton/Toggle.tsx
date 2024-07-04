import React, { useState } from "react";
import styles from "./Toggle.module.css";
import inputStyle from "../InputField/InputField.module.css";

const ToggleSwitch = ({ label, onChange, isChecked }) => {
  return (
    <div className={inputStyle.formGroup}>
      <div></div>
      <div className={styles.switchContainer}>
        <label className={styles.switch}>
          <input type="checkbox" checked={isChecked} onChange={onChange} />
          <span className={styles.slider}></span>
        </label>
        {label && <span>{label}</span>}
      </div>
    </div>
  );
};

export default ToggleSwitch;
