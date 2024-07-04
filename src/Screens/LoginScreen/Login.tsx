import React, { useState, useEffect } from "react";
import InputField from "../../Components/FormElements/InputField";
import InputSelect from "../../Components/FormElements/InputSelect";
import ToggleButton from "../../Components/FormElements/ToggleButton";
import Button from "../../Components/FormElements/Button";
import styles from "./Login.module.css";
import { Logo, Email, Lock } from "../../assets/svg";
import { schema } from "./Schema";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { supportedLngs } from "../../i18n/langList.ts";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const { t, i18n } = useTranslation();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setErrors({});
    try {
      const formData = { email, password };
      await schema.validate(formData, { abortEarly: false });
      formData["language"] = language;
      formData["rememberMe"] = rememberMe;
      alert(`Form submitted successfully! ${JSON.stringify(formData)}`);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach((error: any) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      const userLang = navigator.language; // || navigator?.userLanguage;
      i18n.changeLanguage(userLang.split("-")[0]);
    };

    window.addEventListener("languagechange", handleLanguageChange);

    return () => {
      window.removeEventListener("languagechange", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <>
      <img alt="Logo" src={Logo} className={styles.logo} />
      <div className={styles.formContainer}>
        <form onSubmit={handleLogin}>
          <div className={styles.loginForm}>
            <InputField
              label={t("email")}
              type="email"
              value={email}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setEmail(e.target.value)}
              placeholder="email@address.com"
              isPassword={false}
              icon={Email}
              error={errors["email"] || undefined}
            />
            <InputField
              label={t("password")}
              type="password"
              value={password}
              onChange={(e: {
                target: { value: React.SetStateAction<string> };
              }) => setPassword(e.target.value)}
              placeholder="********"
              isPassword={true}
              icon={Lock}
              error={errors["password"] || undefined}
            />
            <div className={styles.forgotPass}>
              <div></div>
              <div className={styles.aDiv}>
                <a href="/">{t("forgotPassword")}</a>
              </div>
            </div>
            <InputSelect
              id={"language"}
              label={t("language")}
              value={i18n.resolvedLanguage}
              options={supportedLngs}
              onChange={(e: any) => {
                setLanguage(e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
            />
            <ToggleButton
              label={t("rememberMe")}
              isChecked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
          <Button text={t("login")} onClick={handleLogin} />
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
