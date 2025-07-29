function PagaMetadata({
  title = "FreshCart(3bdo mabrouk)",
  description = "freshcart is an e-commerce platform that offers a wide range of products, including electronics, fashion, home goods, and more. With a user-friendly interface and secure payment options, FreshCart provides a seamless shopping experience for customers looking for quality products at competitive prices.",
  keywords = "e-commerce, online shopping, electronics, fashion, home goods",
  author = "FreshCart Team",
}) {
  return (
    <>
      <title>{title} </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}

export default PagaMetadata;
