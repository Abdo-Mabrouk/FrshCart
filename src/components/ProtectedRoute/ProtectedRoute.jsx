import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { Form, Navigate, useLocation } from "react-router";
import Swal from "sweetalert2";

function ProtectedRoute({ children }) {
    const { token } = useContext(AuthContext);
    const locathion = useLocation()
    if (token === null) {
        Swal.fire({
            text: "You must be logged in to be able to use the service",
            icon: "info"
        });
        return <Navigate to="/login" state={{Form: locathion.pathname}} />;
    } else {
        return children;
    }
}

export default ProtectedRoute;

// token الصفحة دي ببساطه بتشوف لو المستخدم معاه المفتاح بتاعو ولا لاء والمفتاح هنا اسمو
// لو معاه المفتاح بتاعو ده يقدر يتنقل بين اي صفحه هو عايزها
// طيب لو مش معاه بتنقلو علي طول لصفحه تسجيل الدخول
// طيب انا اقدر اتحكم ازاي في الصفح الي ميقدرش المستخدم يشخ عليها الا لو هو عامل تسجيل دخو ومعاه المفتاح بتااعو
// وبتتدي اشوف  انا محتاج اقفل ايه والمستخدم يقدرش يخش فيها الا لو معاه المفتاح App.jsx  بروح صفحة الي اسمها
//* { path: "cart", element: <ProtectedRoute><Cart/></ProtectedRoute>}
// السطر الي فوقي ده انا بقلو متخشش علي الصفحه دي الا لما تشغل الكوموندد ده الي احنا فيه الي هو بيشوف المستخدم معاه المفتاح ومسجل دخول ولا لاء
//

//!token === null عشان طول ما المستخدم معمل تسجيل دخول وماخدش المفتاح ميدخلش وقيمه الContext في البدايه خالص بحتاج اعمل
// وتبقي بقيمه المفتاح بتاعو token لاكن لما يعمل بقا تسجيل دخول وياخد المفتاح سعتها اعد قيمه ال
// يبقا هو كده سجل دخول بالفعل token القيمه الافتراضيه هنا اني بقلو روح علي اللوكل استوردج لو  لقيت فيها المفتاح او 

//& Auth.Context.jsx ودا الكود بتاع ملف الكونتكست الي انا مسميه
// import { createContext, useState } from "react";
// export const AuthContext = createContext(null);
// export default function AuthProvider({ children }) {
//     const [token ,setToken] = useState(localStorage.getItem("token"));
//     return (
//         <AuthContext.Provider value={{ token, setToken }}>
//         {children}
//         </AuthContext.Provider>
//     );
// }

//* token  الخطوه الاخيره بقا ان انا بروح لصفحة الوجن او تسجيل الدخول بتاعتي واخليه لما يعمل تسجيل دخول يحدث القيمه بتاعة المفتاح بتاعي او

// const {setToken} = useContext(AuthContext);
// const locathion = useLocation();
// const from = locathion.state.Form || "/"
//async function handelLogen(values) {
//    try {
//    const data = await sendDataLogen(values);
//    if (data.success) {
//        localStorage.setItem("token" , data.data.token);
//        setToken(data.data.token);
//        Swal.fire({
//            text: "Welcome Back!",
//            icon: "success",
//        });
//        setTimeout(() => {
//        navigate(from);
//        }, 1500);
//    }
//    } catch (error) {
//    Swal.fire({
//        title: "Opps",
//        text: error?.response?.data?.message || "Something went wrong",
//        icon: "error",
//    });
//    }
//}

// بتاعتي وباجي في الفنكشن الي انا عملها عشان تعرفني ان تسجيل الدخول تم بنجاح Context في الاول بنادي علي ال
// احدث بقا القيمه بتاعت المفتاح بتاعي
// كمان باخد القيمه بتاعة المفتاح بتاعي دي واحطها في اللوكل استوردج عشان تتخزن
// ومقعدش كل ما اعمل رفرش للمتجر بتاعي المفتاح ده يروح واعمل تسجيل دخول كل شويه
