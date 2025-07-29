    import {
    faClock,
    faEye,
    faEyeSlash,
    faLock,
    faPeopleLine,
    faQuestion,
    faStar,
    faTruckFast,
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import immmeg1 from "../../assets/login-img.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { sendDataLogen } from "../../services/auth-services";
import { AuthContext } from "../../context/Auth.context";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

    function Login() {
    const {setToken} = useContext(AuthContext)
    const locathion = useLocation();
    const from = locathion?.state?.Form || "/"
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    const schema = Yup.object({
        email: Yup.string()
        .required("email is riquired")
        .email("eneten a valid email"),
        password: Yup.string()
        .required("password is riquired")
        .matches(
            passwordRegex,
            "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
        ),
    });

    async function handelLogen(values) {
        try {
        const data = await sendDataLogen(values);
        if (data.success) {
            setToken(data.data.token);
            if (values.rememberMe) {
                localStorage.setItem("token" , data.data.token);
            }else{
                sessionStorage.setItem("token" , data.data.token);
            }
            Swal.fire({
                text: "Welcome Back!",
                icon: "success",
            });
            setTimeout(() => {
            navigate(from);
            }, 3000);
        }
        } catch (error) {
        Swal.fire({
            title: "Opps",
            text: error?.response?.data?.message || "Something went wrong",
            icon: "error",
        });
        }
    }

    let formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        rememberMe: false,
        },
        validationSchema: schema,
        onSubmit: handelLogen,
    });
    return (
        <>
        <PagaMetadata title="FreshCart/Login"/>
        <main className="bg-gray-100 py-12 ">
            <div className="container grid grid-cols-12 lg:gap-10">
            <div className="leftSaid space-y-10 col-span-12 lg:col-span-6">
                <div className="imagg">
                <img
                    src={immmeg1}
                    alt=""
                    className="w-full lg:h-96 h-64 rounded-lg shadow-lg"
                />
                </div>
                <div className=" text-center ">
                <h2 className="font-bold text-4xl text-black">
                    Fresh Groceries Delivered
                </h2>
                <p className="text-lg mt-2">
                    Join thousands of happy customers who trust FreshCart for their
                    daily grocery needs
                </p>
                </div>
                <div className="textt flex justify-center gap-3 lg:gap-10 items-center">
                <p className="text-center">
                    <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-green-500"
                    />{" "}
                    <span className="ms-2 inline-block">Free Delivery</span>
                </p>
                <p className="text-center">
                    <FontAwesomeIcon icon={faQuestion} className="text-green-500" />{" "}
                    <span className="ms-2 inline-block">Secure Payment</span>
                </p>
                <p className="text-center">
                    <FontAwesomeIcon icon={faClock} className="text-green-500" />{" "}
                    <span className="ms-2 inline-block">24/7 Support</span>
                </p>
                </div>
            </div>
            <div className="form shadow-lg p-10 space-y-5 col-span-12 lg:col-span-6 bg-white rounded-lg">
                <div className="text-center">
                <h2 className=" font-bold text-4xl text-black mb-2">
                    <span className="text-green-500">Fresh</span> Cart
                </h2>
                <h3 className=" font-bold text-3xl text-black mb-2">
                    Welcome Back!
                </h3>
                <p>Sign in to continue your fresh shopping experience</p>
                </div>
                <div className="button space-y-5 *:cursor-pointer *:hover:bg-gray-200 *:w-full">
                <button className="btn space-x-3 bg-white border-2 border-gray-200 text-xl">
                    <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
                    <span>Continue with Google</span>
                </button>
                <button className="btn space-x-3 bg-white border-2 border-gray-200 text-xl">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                    <span>Continue with Facebook</span>
                </button>
                </div>
                <div className="or relative w-full h-0.5 bg-gray-300/30 my-10">
                <span className="absolute  start-1/2 top-1/2 -translate-1/2 text-center bg-gray-100 px-3 py-2 rounded-sm">
                    OR CONTINUE WITH EMAIL
                </span>
                </div>
                <form
                action=""
                className="space-y-5"
                onSubmit={formik.handleSubmit}
                >
                <div className="email">
                    <label htmlFor="email">Email Address*</label>
                    <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email ? (
                    <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                        * {formik.errors.email}
                    </p>
                    ) : (
                    ""
                    )}
                </div>
                <div className="password">
                    <div className=" relative">
                    <div className="flex justify-between items-center">
                        <label htmlFor="password">Password*</label>
                        <label htmlFor="password">
                        <Link
                            className="text-green-600 ms-2"
                            to={`/forgotPassword`}
                        >
                            Forgot Password?
                        </Link>
                        </label>
                    </div>
                    <input
                        className="form-control pr-10"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter your password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-3  cursor-pointer text-gray-500"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                    <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                        * {formik.errors.password}
                    </p>
                    ) : null}
                </div>

                <div className="rememberMe">
                    <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="mx-2"
                    value={formik.values.rememberMe}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    <label htmlFor="rememberMe">Keep me signed in</label>
                </div>
                <button
                    type="submit"
                    className="btn flex items-center justify-center gap-3 bg-green-600 text-white font-bold ho hover:bg-green-800 w-full text-center"
                >
                    <span>Sign In</span>
                </button>
                </form>
                <p className="text-center font-semibold">
                New to FreshCart?
                <Link className="text-green-600 ms-2" to={`/signUp`}>
                    Create an account
                </Link>
                </p>
                <div className="textt flex justify-center gap-3 lg:gap-10 items-center">
                <p className="text-center">
                    <FontAwesomeIcon icon={faLock} />{" "}
                    <span className="ms-2 inline-block">SSL Secured</span>
                </p>
                <p className="text-center">
                    <FontAwesomeIcon icon={faPeopleLine} />{" "}
                    <span className="ms-2 inline-block">50K Users</span>
                </p>
                <p className="text-center">
                    <FontAwesomeIcon icon={faStar} />{" "}
                    <span className="ms-2 inline-block">4.9 Rating</span>
                </p>
                </div>
            </div>
            </div>
        </main>
        </>
    );
    }

    export default Login;
