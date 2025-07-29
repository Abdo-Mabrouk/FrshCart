function ProductDetailsTabs({ProductInfo}) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-black font-semibold">Product Description</h2>
        <p className="text-gray-400 text-sm">
          {ProductInfo.description}
        </p>
        <div className=" flex justify-between *:w-full">
          <div className="">
            <p className="text-black font-semibold my-3 ">Benefits</p>
            <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm *:flex *:items-center *:gap-3">
              <li>
                {" "}
                <span className="size-1.5 rounded-full bg-black"></span> Rich in
                vitamins C and K
              </li>
              <li>
                {" "}
                <span className="size-1.5 rounded-full bg-black"></span> Good
                source of fiber and antioxidants
              </li>
              <li>
                {" "}
                <span className="size-1.5 rounded-full bg-black"></span>{" "}
                Supports heart health
              </li>
              <li>
                {" "}
                <span className="size-1.5 rounded-full bg-black"></span> Helps
                regulate blood sugar
              </li>
              <li>
                {" "}
                <span className="size-1.5 rounded-full bg-black"></span>{" "}
                Promotes healthy skin
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-black font-semibold my-3 ">Product Details</p>
            <div className=" flex gap-5">
              <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm ">
                <li>Origin:</li>
                <li> Cultivation:</li>
                <li> Storage:</li>
                <li> Shelf Life:</li>
              </ul>
              <ul className=" ms-5 space-y-2 *:text-gray-400 *:text-sm ">
              <li> California, USA</li>
              <li> Organic</li>
              <li> Refrigerate upon arrival</li>
              <li> 5-7 days when refrigerated</li>
            </ul>
            </div>

            
          </div>
        </div>

        <h2 className="text-black font-semibold">How to Store</h2>
        <p className="text-gray-400 text-sm">For optimal freshness, refrigerate strawberries unwashed in their original container or in a paper towel-lined container. Wash just before eating. To extend shelf life, remove any damaged berries as soon as possible.</p>

        <h2 className="text-black font-semibold">Certifications</h2>
        <div className=" flex gap-3">
            <p className="btn">USDA Organic</p>
            <p className="btn">Non-GMO</p>
        </div>

        </div>
    </>
  );
}

export default ProductDetailsTabs;
