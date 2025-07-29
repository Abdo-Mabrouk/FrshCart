import {
    faCreditCard,
  faExclamation,
  faLeftLong,
  faLock,
  faMoneyBill1Wave,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { CarContext } from "../../context/cart.context";
import { createOrder } from "../../services/Orders.services";
import { toast } from "react-toastify";
import CheckoutSkeleton from "../../components/skeleton/CheckoutSkeleton";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

    function Checkout() {
        const {cartInfo,isLoding,setcartInfo} = useContext(CarContext);
        const navigate = useNavigate()
        const phoneRegex = /^\+?[0-9]{10,14}$/;

    const schema = Yup.object({
        paymentMethod: Yup.string().required("payment Method is riquired"),
        shippingAddress:Yup.object({
        details: Yup.string().required("Address Details is riquired"),
        phone: Yup.string().required("phone is riquired").matches(phoneRegex, "Eneten a valid email"),
        city: Yup.string().required("City is riquired"),
        })
    });

    async function handelcreateOrder(values) {
        try {
            const response = await createOrder({
                paymentMethod: values.paymentMethod,
                cartId,
                shippingAddress:values.shippingAddress
            })
            console.log(response);
            if (response.success) {
                if (response.data.session) {
                    toast.loading("you will be directed to sptripe to complete payment peoccess")
                setTimeout(()=>{location.href=response.data.session.url},3000)
                }
                setcartInfo({
                    numOfCartItems: 0,
                    data: {
                        products:[],
                        totalCartPrice:0,
                    }
                }
                    
                )
                toast.success("your order has been created success")
                setTimeout(()=>{
                    navigate("/account/accountorders")
                },3000)
            }
    
        } catch (error) {
            console.log(error);
        }

    }

    let formik = useFormik({
        initialValues: {
        paymentMethod:"online",
        shippingAddress:{
            details: "",
            phone: "",
            city: "",
        }
        },
        validationSchema: schema,
        onSubmit: handelcreateOrder,
    });
    if (isLoding) {
        return <CheckoutSkeleton/>
    }
    const {cartId ,data} = cartInfo;
    const {totalCartPrice,products} = data;
    console.log(cartInfo);
    
    return (
        <>
        <PagaMetadata title="FreshCart/cart/Checkout"/>
        <div className="">
            <div className=" container my-10">
            <h1 className="text-2xl text-black font-bold">checkout</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-3 gap-20 justify-center mt-5 ">
                <div className="col-span-3 lg:col-span-2 ">
                    <div action="" className=" space-y-10 *:shadow-lg ">
                        <div className="PaymentMethod bg-white p-2 md:p-5 rounded-xl space-y-3 *:cursor-pointer">
                            <h2 className="text-xl text-black font-bold">Payment Method</h2>
                        <label htmlFor="cod" className={`${formik.values.paymentMethod === "cod" && "bg-green-50 border-green-500"} p-3 block border-2 border-gray-200 rounded-md hover:border-green-500 transition-colors duration-300 `}>
                            <div className=" flex flex-col md:flex-row items-center justify-between md:space-y-5">
                            <div className="flex gap-4 items-center">
                                <input
                                type="radio"
                                name="PaymentMethod"
                                id="cod"
                                value={"cod"}
                                onChange={(e)=>{formik.setFieldValue("paymentMethod",e.target.value)}}
                                checked={formik.values.paymentMethod === "cod"}
                                />
                                <FontAwesomeIcon
                                className="text-green-500 text-2xl"
                                icon={faMoneyBill1Wave}
                                />
                                <div className="">
                                <h3 className="font-bold">Cash on Delivery</h3>
                                <p className="text-gray-400 text-sm">Pay when your order arrives</p>
                                </div>
                            </div>
                            <div className="text-green-500">
                                <span>No extra charges</span>
                            </div>
                            </div>
                            {formik.values.paymentMethod === "cod" && <div className=" flex items-center gap-3 w-fit mx-auto p-3 border-2 border-green-500 text-green-500 rounded-lg">
                            <span className="size-5 rounded-full flex items-center justify-center text-sm text-white bg-green-500">
                                <FontAwesomeIcon icon={faExclamation} />
                            </span>
                            <p>
                                Please keep exact change ready for hassle-free delivery
                            </p>
                            </div>}
                        </label>
                        <label htmlFor="online" className={`${formik.values.paymentMethod === "online" && "bg-green-50 border-green-500"} p-3 block border-2 border-gray-200 rounded-md hover:border-green-500 transition-colors duration-300 `}>
                            <div className=" flex flex-col md:flex-row items-center justify-between md:space-y-5">
                            <div className="flex gap-4 items-center">
                                <input
                                type="radio"
                                name="PaymentMethod"
                                id="online"
                                value={"online"}
                                onChange={(e)=>{formik.setFieldValue("paymentMethod",e.target.value)}}
                                checked={formik.values.paymentMethod === "online"}
                                />
                                <FontAwesomeIcon
                                className="text-green-500 text-2xl"
                                icon={faCreditCard}
                                />
                                <div className="">
                                <h3 className="font-bold">Online Payment</h3>
                                <p className="text-gray-400 text-sm">Pay securely with card or digital wallet</p>
                                </div>
                            </div>
                            <div className="text-green-500">
                                <span>Recommended</span>
                            </div>
                            </div>
                            {formik.values.paymentMethod === "online" &&<div className=" flex items-center gap-3 text-blue-500  w-fit mx-auto p-3 border-2 border-blue-500  rounded-lg">
                            <span className="size-5 rounded-full flex items-center justify-center text-sm text-white bg-blue-500 ">
                                <FontAwesomeIcon icon={faExclamation} />
                            </span>
                            <p>
                                you will be rediected to secure payment to complate your
                                teansaction
                            </p>
                            </div>}
                        </label>
                        </div>
                        <div className="Shipping-Address bg-white p-5 rounded-xl space-y-5">
                        <h2 className="text-xl text-black font-bold">
                            Shipping Address
                        </h2>
                        <div className="">
                            <label
                            className="flex items-center gap-2 text-xl"
                            htmlFor="AddressDetails"
                            >
                            Address Details{" "}
                            <span className="text-red-500 text-2xl">*</span>
                            </label>
                            <textarea
                            name="shippingAddress.details"
                            value={formik.values.shippingAddress.details}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control min-h-28 max-h-44"
                            id="AddressDetails"
                            placeholder="Enter your full address details"
                            ></textarea>
                            {formik.errors.shippingAddress?.details &&
                            formik.touched.shippingAddress?.details ? (
                            <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                                * {formik.errors.shippingAddress?.details}
                            </p>
                            ) : (
                            ""
                            )}
                        </div>
                        <div className=" flex flex-col md:flex-row items-center *:w-full gap-5">
                            <div className="">
                            <label
                                className="flex items-center gap-2 text-xl"
                                htmlFor="Phone"
                            >
                                Phone Number{" "}
                                <span className="text-red-500 text-2xl">*</span>
                            </label>
                            <input
                                name="shippingAddress.phone"
                                value={formik.values.shippingAddress.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="tel"
                                id="Phone"
                                placeholder="01122737895"
                            />
                            {formik.errors.shippingAddress?.phone && formik.touched.shippingAddress?.phone ? (
                                <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                                * {formik.errors.shippingAddress?.phone}
                                </p>
                            ) : (
                                ""
                            )}
                            </div>
                            <div className="">
                            <label
                                className="flex items-center gap-2 text-xl"
                                htmlFor="City"
                            >
                                City <span className="text-red-500 text-2xl">*</span>
                            </label>
                            <input
                                name="shippingAddress.city"
                                value={formik.values.shippingAddress.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control"
                                type="text"
                                id="City"
                                placeholder="fayom"
                            />
                            {formik.errors.shippingAddress?.city && formik.touched.shippingAddress?.city? (
                                <p className="errr bg-red-200 text-red-800 p-2 rounded-md mt-5 font-medium">
                                * {formik.errors.shippingAddress?.city}
                                </p>
                            ) : (
                                ""
                            )}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-1">
                <div className="col-span-3 bg-white lg:col-span-1 p-5 space-y-5 rounded-lg shadow-lg border-2 border-gray-200">
                    <h2 className=" text-black font-semibold ">Order Summrey</h2>
                    <div className="allCard  max-h-40 overflow-auto">
                    {products.map((p)=>(
                        <Link className="" to={`/Products/${p.product._id}`}>
                        <div  key={p._id} className="card border-2 my-2 border-gray-300 rounded-md p-2 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                            <img src={p.product.imageCover} alt={p.product.title} className="size-10 rounded-md" />
                            <div className="data text-sm ">
                                <p className="line-clamp-1">{p.product.title}</p>
                                <p className="">Qty : {p.count}</p>
                            </div>
                            </div>
                            <p className="price text-sm"> {p.price} EGP</p>
                        </div>
                        </Link>
                        
                    ))}
                    </div>
                    <div className=" space-y-3 border-t-2 border-gray-400 py-5">
                    <p className=" text-gray-500 flex justify-between items-center">
                        {" "}
                        Subtotal{" "}
                        <span className="text-black font-semibold">{totalCartPrice} EGP</span>
                    </p>
                    <p className=" text-gray-500 flex justify-between items-center">
                        {" "}
                        Delivary{" "}
                        <span className="text-green-500 font-semibold">70 EGP</span>
                    </p>
                    <p className=" text-gray-500 flex justify-between items-center">
                        {" "}
                        Tax (14%){" "}
                        <span className="text-black font-semibold">{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                    </p>
                    <p className=" text-black font-bold flex justify-between items-center pt-3 border-t-2 border-gray-200 ">
                        {" "}
                        Total <span className="text-black font-bold"> {totalCartPrice +70 +Math.trunc(totalCartPrice * 0.14)} EGP</span>
                    </p>
                    </div>
                    <div className=" space-y-3 *:block">
                        <button type="Submit" className="btn bg-green-600 hover:bg-green-800 text-white w-full">
                        {" "}
                        Proceed to Payment{" "}
                        <span>
                            {" "}
                            <FontAwesomeIcon icon={faRightLong} />
                        </span>
                        </button>
                    <Link to={"/cart"}>
                        <button className="btn bg-transparent border-2 border-gray-200 hover:bg-gray-200 text-black w-full">
                        <span>
                            <FontAwesomeIcon icon={faLeftLong} />
                        </span>{" "}
                        Prevous step
                        </button>
                    </Link>
                    </div>
                    <div className="text-gray-400 space-y-3">
                    <p>Secure Checkout</p>
                    <p className="text-sm ">
                        <span className="text-green-500">
                        <FontAwesomeIcon icon={faLock} />
                        </span>{" "}
                        Your payment information is secure
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </form>
            </div>
        </div>
        </>
    );
}

export default Checkout;
