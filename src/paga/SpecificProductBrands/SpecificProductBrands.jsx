import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getAllProducts } from "../../services/ProductsServices";
import Loading from "../Loading/Loading";
import Card from "../../components/Card/Card";
import ingNoProduct from "../../assets/no_product.svg";

function SpecificProductBrands() {
  const [Products, setProducts] = useState(null);
  const [isLoding, setisLoding] = useState(true);
  const { id } = useParams();
  console.log(Products);

  async function apiProductInfo() {
    try {
      setisLoding(true);
      const response = await getAllProducts(`brand=${id}`);
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
    return <Loading />;
  }

  return (
    <>
      <div className="container my-10">
        {Products.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {Products.map((p) => (
              <Card key={p._id} details={p} />
            ))}
          </div>
        ) : (
          <div className="my-11">
            <img className="w-1/2 mx-auto" src={ingNoProduct} alt="" />
            <p className="my-10 text-center">
              There are no special products of this brand
            </p>
            <p className="my-10 text-center">
              You can continue the Shopping from{" "}
              <Link to={"/"} className="text-green-500">
                here
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default SpecificProductBrands;
