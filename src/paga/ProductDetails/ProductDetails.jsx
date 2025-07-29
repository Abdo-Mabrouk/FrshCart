import { useEffect, useState } from "react";
import Productdata from "../../components/ProductInfo/ProductInfo";
import { getProductInfo } from "../../services/ProductsServices";
import Loading from "../Loading/Loading";
import { useParams } from "react-router";
import ProductInfoTaps from "../../components/ProductInfoTaps/ProductInfoTaps";
import ProuductRelated from "../../components/ProuductRelated/ProuductRelated";
import PagaMetadata from "../PagaMetadata/PagaMetadata";
import ProductDetailsSkeleton from "../../components/skeleton/ProductDetailsSkeleton";

    function ProductDetails() {
    const [Products, setProducts] = useState(null);
    const [isLoding, setisLoding] = useState(true);
    const { id } = useParams();
    async function apiProductInfo() {
        try {
        setisLoding(true);
        const response = await getProductInfo({ id });
        if (response.success) {
            setisLoding(false);
            setProducts(response.data.data);
        }
        } catch (error) {
        setisLoding(false);
        }
    }
    useEffect(() => {
        apiProductInfo();
    }, [id]);
    if (isLoding) {
        return <ProductDetailsSkeleton />;
    }
    console.log(Products);
    
    return (
        <>
        <PagaMetadata title={Products.title} description={Products.description} />
        <div className="container">
            <Productdata ProductInfo={Products} />
            <ProductInfoTaps ProductInfo={Products}/>
            <ProuductRelated ProductInfo={Products}/>
        </div>
        </>
    );
}

export default ProductDetails;
