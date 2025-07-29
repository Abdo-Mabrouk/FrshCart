import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router";
import * as Yup from "yup";
import { sendVerifyResetCode } from "../../services/auth-services";
import Swal from "sweetalert2";

    function ResetCode() {
    const navigate = useNavigate();

    const schema = Yup.object({
        num1: Yup.string().required("All fields are required"),
        num2: Yup.string().required("All fields are required"),
        num3: Yup.string().required("All fields are required"),
        num4: Yup.string().required("All fields are required"),
        num5: Yup.string().required("All fields are required"),
        num6: Yup.string().required("All fields are required"),
    });
    async function handelForgotPassword(values) {
        try {
        const data = await sendVerifyResetCode(values);
        console.log(data);
        if (data.success) {
            Swal.fire({
                text: `${data.data.message}`,
                icon: "success",
            });
            setTimeout(() => {
            navigate("/resetPassworde");
        }, 1000);
        }else{
            Swal.fire({
                title: "Opps",
                text: `${data.message}`,
                icon: "error",
            });
        }
        } catch (error) {
            console.log(error);
        }
    }
    let formik = useFormik({
        initialValues: {
        num1: "",
        num2: "",
        num3: "",
        num4: "",
        num5: "",
        num6: "",
        },
        validationSchema: schema,
        onSubmit: handelForgotPassword,
    });
    return (
        <>
        <PagaMetadata title="FreshCart/Verify Reset Code" />
        <div className="my-10 p-5 mx-auto w-96 border-2 border-gray-300 rounded-lg shadow hover:shadow-emerald-50">
            <div className="text-center space-y-2.5">
            <span className="size-16 rounded-full bg-green-200 mx-auto flex justify-center items-center text-2xl text-green-500">
                <FontAwesomeIcon icon={faShieldHalved} />
            </span>
            <h2 className=" font-semibold text-black text-2xl">Verify Reset Code</h2>
            <p className="text-sm text-gray-400">
                We've sent a verification code to your email address
            </p>
            </div>
            <form
            action=""
            className="space-y-7 my-5"
            onSubmit={formik.handleSubmit}
            >
            <label className="text-center w-full block">
                {" "}
                Enter 6-digit verification code
            </label>
            <div className="inputs space-x-2">
                <input type="text" maxLength={1}  className="form-control text-center size-12"
                    id="num1"
                    name="num1"
                    value={formik.values.num1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} />
                <input type="text" maxLength={1}  className="form-control text-center size-12"
                    id="num2"
                    name="num2"
                    value={formik.values.num2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="text" maxLength={1}  className="form-control text-center size-12"
                    id="num3"
                    name="num3"
                    value={formik.values.num3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="text" maxLength={1}  className="form-control text-center size-12"
                    id="num4"
                    name="num4"
                    value={formik.values.num4}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="text" maxLength={1}  className="form-control text-center size-12"
                    id="num5"
                    name="num5"
                    value={formik.values.num5}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="text" maxLength={1}  className="form-control text-center size-12"
                    id="num6"
                    name="num6"
                    value={formik.values.num6}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>
            {(formik.touched.num1 || formik.touched.num2 || formik.touched.num3 ||
            formik.touched.num4 || formik.touched.num5 || formik.touched.num6) &&
            (formik.errors.num1 || formik.errors.num2 || formik.errors.num3 ||
            formik.errors.num4 || formik.errors.num5 || formik.errors.num6) ? (
            <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                * All fields are required
            </p>
            ) : ""}
            <button
                type="submit"
                className="btn flex items-center justify-center gap-3 bg-green-600 text-white font-bold ho hover:bg-green-800 w-full text-center"
            >
                <span>verify Code</span>
            </button>
            <p className="text-center font-semibold">Didn't receive th code?</p>
            <p className=" my-3 text-center font-semibold text-green-500">
                resend Code
            </p>
            <p className="text-center font-semibold text-green-500">
                <Link to={"/login"}>Back to Sign In</Link>
            </p>
            </form>
        </div>
        </>
    );
}


export default ResetCode;
