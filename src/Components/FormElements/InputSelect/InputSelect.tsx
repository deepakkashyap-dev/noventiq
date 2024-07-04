import styles from "../InputField/InputField.module.css";
import React from "react";

const InputSelect = ({
  label,
  value,
  onChange,
  id,
  options,
}: {
  label: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  options: { value: string; label: string }[];
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}:</label>
      <div className={styles.inputContainer}>
        <select id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.arrowContainer}>
          <span className={styles.arrowIcon}>&#9660;</span>
        </div>
      </div>
    </div>
  );
};

export default InputSelect;
