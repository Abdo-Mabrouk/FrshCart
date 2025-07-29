import {
    faLock,
    faPaperPlane,
    faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendDataForgetPassword } from "../../services/auth-services";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import PagaMetadata from "../PagaMetadata/PagaMetadata";


function forgotPassword() {
    const navigate = useNavigate()

    const schema = Yup.object({
        email: Yup.string()
        .required("email is riquired")
        .email("eneten a valid email"),
    });

    async function handelForgotPassword(values) {
        try {
        const data = await sendDataForgetPassword(values);
        console.log(data);

        if (data.success) {
            Swal.fire({
                text: `${data.data.message}`,
                icon: "success",
            });
            setTimeout(() => {
                navigate("/resetCode")
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
        },
        validationSchema: schema,
        onSubmit: handelForgotPassword,
    });
    return (
        <>
        <PagaMetadata title="FreshCart/Forgot Password" />
        <div className="my-10 p-5 mx-auto w-96 border-2 border-gray-300 rounded-lg shadow hover:shadow-lg">
            <div className="text-center space-y-2.5">
            <span className="size-16 rounded-full bg-green-200 mx-auto flex justify-center items-center text-2xl text-green-500">
                <FontAwesomeIcon icon={faLock} />
            </span>
            <h2 className=" font-semibold text-black text-2xl">Forgot your password?</h2>
            <p className="text-sm text-gray-400">
                No worries! Enter your email address and we'll send you a link to
                reset your password.
            </p>
            </div>
            <form action="" className="space-y-3" onSubmit={formik.handleSubmit}>
            <div className="email  pt-5 space-y-3">
                <label className="block" htmlFor="email">Email Address*</label>
                <input
                className="form-control "
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
            <button
                type="submit"
                className="btn mt-10 flex items-center justify-center gap-3 bg-green-600 text-white font-bold ho hover:bg-green-800 w-full text-center"
            >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Send Reset Link</span>
            </button>
            <p className="text-center font-semibold mt-5">
                Remember your password?
                <Link className="text-green-600 ms-2" to={`/login`}>
                Sign in
                </Link>
            </p>
            </form>
            <div className=" flex items-center gap-5 my-10 border-2 border-gray-200 rounded-md p-2 shadow">
            <div className="icon text-xl flex items-center justify-center rounded-full">
                <FontAwesomeIcon icon={faShieldHalved} className="text-green-500" />
            </div>
            <div className="data">
                <h3 className="text-black font-semibold ">Secure paymernt</h3>
                <p className="text-sm text-gray-500">
                Your payment informathion is protected with 256-bit SSL encryption
                </p>
            </div>
            </div>
        </div>
        </>
    );
}

export default forgotPassword;
