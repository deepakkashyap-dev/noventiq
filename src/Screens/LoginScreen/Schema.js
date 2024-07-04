import * as Yup from "yup";

export const schema = Yup.object({
  email: Yup.string()
    .matches(
      /^(?!.*@(gmail|outlook|yahoo|hotmail|yopmail)\.com$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address. Please use a corporate email."
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
