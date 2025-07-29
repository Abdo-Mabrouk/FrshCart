import { apiClient } from "./api-client";

export async function getAllProducts(PARAMS="") {
    try {
        const options = {
        url: `/Products?${PARAMS}`,
        method: "GET",
        };
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}
export async function getProductInfo({id}) {
    try {
        const options = {
            url: `/Products/${id}`,
            method: "GET",
        };
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}

// cart
export async function addProductToCart({id}) {
    try {
        const options = {
        url: `/cart`,
        method: "POST",
        data:{
            productId : id,
        }
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}
export async function getCartItems() {
    try {
        const options = {
        url: `/cart`,
        method: "GET",
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}
export async function removeItemsFromCart({id}) {
    try {
        const options = {
        url: `/cart/${id}`,
        method: "DELETE",
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}
export async function updateQuantityCart({id,count}) {
    try {
        const options = {
        url: `/cart/${id}`,
        method: "PUT",
        data :{
            count
        }
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}



// wishlist
export async function addProductToWishlist({id}) {
    try {
        const options = {
        url: `/wishlist`,
        method: "POST",
        data:{
            productId : id,
        }
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}

export async function getWishlistItems() {
    try {
        const options = {
        url: `/wishlist`,
        method: "GET",
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}
export async function removeItemsFromWishlist({id}) {
    try {
        const options = {
        url: `/wishlist/${id}`,
        method: "DELETE",
        };
        
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}

// Brands
export async function getBrandsProducts() {
    try {
        const options = {
        url: `/brands?limit=50`,
        method: "GET",
        };
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}
export async function getSearchBrandsProducts(Search="") {
    try {
        const options = {
        url: `/brands?keyword=${Search}`,
        method: "GET",
        };
    const response = await apiClient.request(options);
    return response;
} catch(ER){
    throw ER;
}
}

// PopularSubCategories
export async function getSubCategoriess() {
    try {
        const options = {
        url: `/subcategories?limit=50`,
        method: "GET",
        };
    const response = await apiClient.request(options);
    
    return response;
} catch(ER){
    throw ER;
}
}
