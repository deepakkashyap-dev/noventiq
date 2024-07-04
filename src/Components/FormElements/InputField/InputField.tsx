import React, { useState } from "react";
import styles from "./InputField.module.css";
import { CloseEyeIcon, OpenEyeIcon } from "../../../assets/svg";
const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  isPassword,
  icon,
  error,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
  placeholder: string;
  isPassword: boolean;
  icon: string;
  error: string | undefined;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.formGroup}>
      <label>{label}:</label>
      <div >
        <div className={styles.inputContainer}>
          <img src={icon} alt={label} className={styles.icon} />
          <input
            type={isPassword && showPassword ? "text" : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{ flex: 1 }}
          />
          {isPassword && (
            <button
              type="button"
              className={styles.eyeIcon}
              onMouseDown={() => setShowPassword(true) }
              onMouseUp={() => setShowPassword(false)}
            >
              {!showPassword ? (
                <img src={OpenEyeIcon} alt={label} className={""} />
              ) : (
                <img src={CloseEyeIcon} alt={label} className={""} />
              )}
            </button>
          )}
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
