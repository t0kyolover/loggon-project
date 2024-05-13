import * as yup from "yup";

export const signupSchema = yup.object().shape({
  username: yup.string(),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),

  newsletter: yup.boolean(),
  privacy_pocily: yup.boolean().oneOf([true], "You must accept the privacy policy"),
});
