import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUpForm(props) {
    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: false,
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
                .required("Required")
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    "Password must be minimum eight characters, at least one letter and one number"
                ),
            confirmPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Passwords do not match"),
        }),
        onSubmit: (values) => {
            props.onSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email..."
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="input-error-validation"> {formik.errors.email} </p>
                )}
            </div>

            <div>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="FirstName..."
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
            </div>

            <div>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="LastName..."
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
            </div>

            <div>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password..."
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (
                    <p className="input-error-validation"> {formik.errors.password} </p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password..."
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                    <p className="input-error-validation"> {formik.errors.confirmPassword} </p>
                )}
            </div>

            <button className="btn submit-btn mt-4 mb-3" type="submit"> Sign Up </button>
        </form>
    );
}

export default SignUpForm;
