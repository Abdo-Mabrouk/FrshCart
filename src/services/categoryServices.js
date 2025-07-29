import { apiClient } from "./api-client";

export async function getAllCategory(prams="") {
    try {
        const options = {
        url: `/categories?${prams}`,
        method: "GET",
        };
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}