import {
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import immmeg1 from "../../assets/man.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { sendDataSignUp } from "../../services/auth-services";
import { checkPasswordStrength } from "../../utils/Password-strength";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

function SignUp() {
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const phoneRegex = /^\+?[0-9]{10,14}$/;
  const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

  const schema = Yup.object({
    name: Yup.string()
      .required("Name is riquired")
      .matches(
        nameRegex,
        "The name must start with a capital letter and be at least 3 characters long"
      ),
    email: Yup.string()
      .required("email is riquired")
      .email("eneten a valid email"),
    password: Yup.string()
      .required("password is riquired")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: Yup.string()
      .required("confirm Password is riquired")
      .oneOf([Yup.ref("password")], "rePassword must be the same as password"),
    phone: Yup.string()
      .required("phone is riquired")
      .matches(phoneRegex, "eneten a valid email"),
    terms: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms of service"
    ),
  });

  async function signUp(values) {
    try {
      const data = await sendDataSignUp(values);

      if (data.success) {
        Swal.fire({
          title: "Done",
          text: "The account has been completed",
          icon: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 500);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error?.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema: schema,
    onSubmit: signUp,
  });

  const passwordFeedback = checkPasswordStrength(formik.values.password)
  return (
    <>
    <PagaMetadata title="FreshCart/SignUp" />
      <main className="bg-gray-100 py-12 ">
        <div className="container grid grid-cols-12 lg:gap-10">
          <div className="leftSaid space-y-5 col-span-12 lg:col-span-6">
            <div className="">
              <h2 className="font-bold text-4xl text-center lg:text-start">
                welcome to <span className="text-green-600">freshCart</span>
              </h2>
              <p className="text-lg mt-2">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
              </p>
            </div>
            <ul className="*:flex *:gap-4 *:items-center *:justify-start space-y-5">
              <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                  <FontAwesomeIcon icon={faStar} className="text-green-500" />
                </div>
                <div className="data">
                  <h3 className="text-black font-semibold text-2xl">
                    Premium quality
                  </h3>
                  <p className="text-sm text-gray-500">
                    Premium quality products sourced directly from farms
                  </p>
                </div>
              </li>
              <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="text-green-500"
                  />
                </div>
                <div className="data">
                  <h3 className="text-black font-semibold text-2xl">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-gray-500">
                    Same-day delivery available in most areas{" "}
                  </p>
                </div>
              </li>
              <li className="">
                <div className="icon size-12 text-xl bg-green-100 flex items-center justify-center rounded-full">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-green-500"
                  />
                </div>
                <div className="data">
                  <h3 className="text-black font-semibold text-2xl">
                    Secure Shopping
                  </h3>
                  <p className="text-sm text-gray-500">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="reviw bg-white shadow p-5 rounded-md space-y-5">
              <div className="titel flex items-center gap-5">
                <img src={immmeg1} alt="" className="size-12 rounded-full" />
                <div className="">
                  <div className="name">mohmed samy</div>
                  <div className="">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  </div>
                </div>
              </div>
              <div className="data italic">
                <blockquote>
                  <p>
                    "FreshCart has completely changed how I shop for groceries.
                    The quality is amazing and delivery is always on time!"{" "}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="form p-10 space-y-5 col-span-12 lg:col-span-6 bg-white rounded-lg">
            <div className="text-center">
              <h2 className=" font-bold text-2xl text-black mb-2">
                Create Your Account{" "}
              </h2>
              <p>Start your fresh journey with us today</p>
            </div>
            <div className="button flex gap-5 *:cursor-pointer *:hover:bg-gray-200 *:flex *:justify-center *:items-center *:w-full *:gap-2">
              <button className="btn space-x-3 bg-white border-2 border-gray-200 ">
                <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
                <span>Google</span>
              </button>
              <button className="btn space-x-3 bg-white border-2 border-gray-200">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
            <div className="or relative w-full h-0.5 bg-gray-300/30 my-5">
              <span className="absolute start-1/2 top-1/2 -translate-1/2 bg-white px-3 p-2 rounded-full">
                or
              </span>
            </div>
            <form
              action=""
              className="space-y-5"
              onSubmit={formik.handleSubmit}
            >
              <div className="name">
                <label htmlFor="name">Name*</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Abdo"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                    * {formik.errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email*</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="abdodev@gmail.com*"
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
              <div className="phone">
                <label htmlFor="phone">phone*</label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  placeholder="+2 011 2273 7895*"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                    * {formik.errors.phone}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="password">
                <label htmlFor="password">password*</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="creat a strong password*"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.values.password && (<div className=" mt-3 password-streng flex items-center gap-2">
                  <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-200">
                    <div className={`progress ${passwordFeedback.background} ${passwordFeedback.width} h-full`}></div>
                  </div>
                  <span className="text-nowrap text-center w-28">{passwordFeedback.text}</span>
                </div>)}
                {formik.errors.password && formik.touched.password ? (
                  <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                    * {formik.errors.password}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="rePassword">
                <label htmlFor="rePassword">confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="rePassword"
                  placeholder="confirm your password*"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                    * {formik.errors.rePassword}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="mx-2"
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <Link className="text-green-600 font-semibold" to={``}>
                    Terms of service
                  </Link>{" "}
                  and{" "}
                  <Link className="text-green-600 font-semibold" to={``}>
                    privacy policy
                  </Link>
                </label>
                {formik.errors.terms && formik.touched.terms ? (
                  <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                    * {formik.errors.terms}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button
                type="submit"
                className="btn flex items-center justify-center gap-3 bg-green-600 text-white font-bold ho hover:bg-green-800 w-full text-center"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
            </form>
            <p className="text-center font-semibold">
              Already have an account?{" "}
              <Link className="text-green-600" to={`/login`}>
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
