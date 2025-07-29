import {
    faKey,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { sendResetPassword } from "../../services/auth-services";
import { checkPasswordStrength } from "../../utils/Password-strength";
    function ResetPassworde() {
    const navigate = useNavigate();
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
        rePassword: Yup.string()
        .required("confirm Password is riquired")
        .oneOf([Yup.ref("password")], "rePassword must be the same as password"),
    });

    async function ResetPassword(values) {
        try {
        const data = await sendResetPassword(values);
        console.log(data);
        

        if (data.success) {
            Swal.fire({
                title: "Done",
                icon: "success",
            });
            setTimeout(() => {
            navigate("/login");
            }, 500);
        }else{
            Swal.fire({
                title: "Opps",
                icon: "error",
            });
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
        email: "",
        password: "",
        rePassword: "",
        },
        validationSchema: schema,
        onSubmit: ResetPassword,
    });

    const passwordFeedback = checkPasswordStrength(formik.values.password)
    return (
        <>
        <PagaMetadata title="FreshCart/Reset Password" />
        <main className="rounded-lg mx-auto w-96 border-2 border-gray-300 shadow hover:shadow-lg my-10 ">
            <div className="">
            <div className="form p-3 ">
                <div className="text-center space-y-2.5  my-5 ">
                <span className="size-12 rounded-full bg-green-300 mx-auto flex justify-center items-center text-2xl text-green-500">
                    <FontAwesomeIcon icon={faKey} />
                </span>
                <h2 className=" font-semibold text-black text-2xl">Reset Password</h2>
                <p className="text-sm text-gray-400">
                    Enter your email addredd and new password to reset your account password
                </p>
                </div>
                <form
                action=""
                className="space-y-5"
                onSubmit={formik.handleSubmit}
                >
                <div className="email space-y-2">
                    <label className="block text-black font-semibold" htmlFor="email">Email Address</label>
                    <input
                    className="form-control placeholder:text-black placeholder:text-sm"
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
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
                <div className="password space-y-2">
                    <label className="block text-black font-semibold" htmlFor="password">New Password</label>
                    <input
                    className="form-control  placeholder:text-black placeholder:text-sm"
                    type="password"
                    id="password"
                    placeholder="Enter New Password"
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
                <div className="text-gray-400 text-sm">
                    <p>password must contain :</p>
                    <ul className="*:flex *:items-center *:gap-4">
                        <li><span className="block size-3 rounded-full bg-gray-400"></span> At least 8 letters</li>
                        <li><span className="block size-3 rounded-full bg-gray-400"></span> One Uppercase letter</li>
                        <li><span className="block size-3 rounded-full bg-gray-400"></span> One Number</li>
                        <li><span className="block size-3 rounded-full bg-gray-400"></span> One special character</li>
                    </ul>
                </div>
                <div className="rePassword space-y-2">
                    <label className="block text-black font-semibold" htmlFor="rePassword">confirm New Password</label>
                    <input
                    className="form-control  placeholder:text-black placeholder:text-sm"
                    type="password"
                    id="rePassword"
                    placeholder="confirm New Password"
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
                <button
                    type="submit"
                    className="btn flex items-center justify-center gap-3 bg-green-600 text-white font-bold ho hover:bg-green-800 w-full text-center"
                >
                    <span>Reset Password</span>
                </button>
                </form>
                <p className="text-center font-semibold my-5">
                Remember your Password ? 
                <Link className="text-green-600" to={`/login`}>
                     Sign In
                </Link>
                </p>
            </div>
            </div>
        </main>
        </>
    );
}

export default ResetPassworde
