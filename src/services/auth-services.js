import { apiClient } from "./api-client";


export async function sendDataSignUp(values) {
    try {
        const options = {
        method: "post",
        url: `/auth/signup`,
        data: {
            name: values.name,
            email: values.email,
            password: values.password,
            rePassword: values.rePassword,
            phone: values.phone,
        },
        };
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}

export async function sendDataLogen(values) {
    try {
    const options = {
        method: "post",
        url: `/auth/signin`,
        data: {
        email: values.email,
        password: values.password,
        },
    };
    const response = await apiClient.request(options);
    return response;
    } catch (error) {
        throw(error)
    }
}
export async function sendDataForgetPassword(values) {
    try {
    const options = {
        method: "post",
        url: `/auth/forgotPasswords`,
        data: {
            email: values.email,
        },
    };
    const response = await apiClient.request(options);
    return response;
    } catch (error) {
        throw(error)
    }
}
export async function sendVerifyResetCode(values) {
    try {
    const options = {
        method: "post",
        url: `/auth/verifyResetCode`,
        data: {
            "resetCode": `${values.num1}${values.num2}${values.num3}${values.num4}${values.num5}${values.num6}`
        },
    };
    const response = await apiClient.request(options);
    return response;
    } catch (error) {
        throw(error)
    }
}
export async function sendResetPassword(values) {
    try {
    const options = {
        method: "PUT",
        url: `/auth/resetPassword`,
        data: {
            "email":`${values.email}`,
            "newPassword": `${values.password}`
        },
    };
    const response = await apiClient.request(options);
    return response;
    } catch (error) {
        throw(error)
    }
}
