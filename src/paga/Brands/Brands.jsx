import { useContext } from "react";
import { BrandsContext } from "../../context/Brands.context";
import CardBrand from "../../components/CardBrand/CardBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import BrandsSkeleton from "../../components/skeleton/BrandsSkeleton";
import PagaMetadata from "../PagaMetadata/PagaMetadata";

    function Brands() {
    const { BrandsPorduct, isLoding,handelSearchBrandsProducts } = useContext(BrandsContext);
    const brands = [
    {
        name: "Nike",
        description: "Innovative sportswear and fashion.",
        image: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
        num: 50,
    },
    {
        name: "Adidas",
        description: "Classic designs with modern technology.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        num: 139,
    },
    {
        name: "Puma",
        description: "Style meets performance for everyday wear.",
        image: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.jpg",
        num: 500,
    },
    ];

        const formik = useFormik({
        initialValues: {
        keyword: "",
        },
        onSubmit: (values) => {
        handelSearchBrandsProducts(values.keyword);
        },
        });
            if (isLoding) {
        return <BrandsSkeleton />;
    }

    return (
        <>
        <PagaMetadata title="FreshCart/Brand"/>
        <div className=" text-center my-10 px-5 ">
            <h1 className="font-bold text-black text-2xl pb-3  relative before:absolute before:w-60 before:bottom-0 before:h-1.5 before:rounded-b-md before:bg-green-500  ">Our Partner Brands</h1>
            <p className=" lg:max-w-1/2 lg:mx-auto mt-5 text-gray-400">
            Discover quality products from our trusted brand partners. We've
            partnered with leading brands to bring you the best selection of fresh
            and organic products.
            </p>
        </div>
        <div className="container">
            <p className="text-2xl font-bold text-black pb-3 relative before:absolute before:w-54 before:bottom-0 before:h-1.5 before:rounded-b-md before:bg-green-500 ">Featured Brands :</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-10">
            {brands.map((brand, index) => (
            <div
                key={index}
                className="bg-white py-5 rounded-2xl shadow-md flex flex-col justify-between border-2 border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
                <img
                src={brand.image}
                alt={brand.name}
                className="w-1/2 mx-auto  object-cover"
                />
                <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {brand.name}
                </h2>
                <p className="text-gray-600 text-sm">{brand.description}</p>
                <div className=" flex items-center justify-between mt-3">
                    <p className="text-gray-600">{brand.num} products</p>
                    <button className=" btn bg-transparent text-green-500">View</button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>

        <div className="container  my-10 flex flex-col md:flex-row gap-5 px-5 justify-between items-center ">
            <div className="inp form-control w-full md:w-96  ">
                <form onSubmit={formik.handleSubmit} className="flex items-center justify-between">
                    <input
                    name="keyword"
                    value={formik.values.keyword}
                    onChange={formik.handleChange}
                    type="text" placeholder="Search Brands...." className=" focus:outline-none" />
                    <FontAwesomeIcon icon={faSearch}/>
                </form>
            </div>
            <div className=" w-full md:w-fit flex items-center justify-between gap-5">
                <p>Sort by :</p>
                <select className="btn focus:outline-none" >
                    <option >Alphabetical:A-z</option>
                    <option >Alphabetical:A-z</option>
                    <option >Alphabetical:A-z</option>
                    <option >Alphabetical:A-z</option>
                    <option >Alphabetical:A-z</option>
                    <option >Alphabetical:A-z</option>
                    <option >Alphabetical:A-z</option>
                </select>
            </div>
        </div>
        <div className="container grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-2 lg:gap-5">
            {BrandsPorduct.data.map((p) => (
            <CardBrand key={p._id} details={p} />
            ))}
        </div>
        </>
    );
}

export default Brands;
