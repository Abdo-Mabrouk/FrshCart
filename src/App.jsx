import Brands from "./paga/Brands/Brands.jsx";
import Cart from "./paga/Cart/Cart.jsx";
import Categories from "./paga/Categories/Categories.jsx";
import Checkout from "./paga/Checkout/Checkout.jsx";
import Home from "./paga/Home/Home.jsx";
import Login from "./paga/Login/Login.jsx";
import Orders from "./paga/Orders/Orders.jsx";
import ProductDetails from "./paga/ProductDetails/ProductDetails.jsx";
import SpecificProductBrands from "./paga/SpecificProductBrands/SpecificProductBrands.jsx";
import CategoriesDetail from "./paga/CategoriesDetail/CategoriesDetail.jsx";
import SearchProducts from "./paga/SearchProducts/SearchProducts.jsx";
import SignUp from "./paga/SignUp/SignUp.jsx";
import Wishlist from "./paga/Wishlist/Wishlist.jsx";
import ForgotPassword from "./paga/forgotPassword/forgotPassword.jsx";
import ResetCode from "./paga/ResetCode/ResetCode.jsx";
import ResetPassworde from "./paga/ResetPassworde/ResetPassworde.jsx";
import Account from "./paga/Account/Account.jsx";
import Notfound from "./paga/Notfound/Notfound.jsx";
import Deals from "./paga/Deals/Deals.jsx";
import Offers from "./paga/Offers/Offers.jsx";
import NestedPaga from "./paga/NestedPaga/NestedPaga.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProductProvider from "./context/Product.context.jsx";
import CategoriesProvider from "./context/Categories.context.jsx";
import AuthProvider from "./context/Auth.context.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Favouretes from "./paga/Favouretes/Favouretes.jsx";
import CartProvider from "./context/cart.context.jsx";
import { ToastContainer } from "react-toastify";
import WishlistProvider from "./context/wishlistContext.jsx";
import BrandstProvider from "./context/Brands.context.jsx";
import SubCategoriestProvider from "./context/PopularSubCategories.context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Accountdashbord from "./components/Account/Accountdashbord.jsx";
import Accountorders from "./components/Account/Accountorders.jsx";
import AccountWishlist from "./components/Account/AccountWishlist.jsx";
import Accountfavorites from "./components/Account/Accountfavorites.jsx";
import AccountAddersses from "./components/Account/AccountAddersses.jsx";
import AccountPaymentMethods from "./components/Account/AccountPaymentMethods.jsx";
import AccountDetails from "./components/Account/AccountDetails.jsx";
import OrderProvider from "./context/Order.context.jsx";

function App() {
  const routaring = createBrowserRouter([
    {
      path: "/",
      element: <NestedPaga />,
      children: [
        { index: true, element: <Home /> },
        { path: "brands", element: <Brands /> },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "favouretes",
          element: (
            <ProtectedRoute>
              <Favouretes />
            </ProtectedRoute>
          ),
        },
        { path: "categories", element: <Categories /> },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        { path: "Products/:id", element: <ProductDetails /> },
        {
          path: "specificProductBrands/:id",
          element: <SpecificProductBrands />,
        },
        { path: "categoriesDetail/:id", element: <CategoriesDetail /> },
        { path: "searchProducts", element: <SearchProducts /> },
        { path: "signUp", element: <SignUp /> },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "forgotPassword",
          element: (
            <ProtectedRoute>
              <ForgotPassword />
            </ProtectedRoute>
          ),
        },
        {
          path: "resetCode",
          element: (
            <ProtectedRoute>
              <ResetCode />
            </ProtectedRoute>
          ),
        },
        {
          path: "resetPassworde",
          element: (
            <ProtectedRoute>
              <ResetPassworde />
            </ProtectedRoute>
          ),
        },
        {
          path: "account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Accountorders /> },
            { path: "accountdashbord", element: <Accountdashbord /> },
            { path: "accountorders", element: <Accountorders /> },
            { path: "accountWishlist", element: <AccountWishlist /> },
            { path: "accountfavorites", element: <Accountfavorites /> },
            { path: "accountAddersses", element: <AccountAddersses /> },
            { path: "accountPaymentMethods", element: <AccountPaymentMethods /> },
            { path: "accountDetails", element: <AccountDetails /> },
            { path: "*", element: <Notfound /> }
          ],
        },
        { path: "deals", element: <Deals /> },
        { path: "offers", element: <Offers /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OrderProvider>
                  <SubCategoriestProvider>
          <BrandstProvider>
            <WishlistProvider>
              <CartProvider>
                <AuthProvider>
                  <ProductProvider>
                    <CategoriesProvider>
                      <RouterProvider router={routaring}></RouterProvider>
                      <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        closeButton={false}
                        closeOnClick={true}
                      />
                    </CategoriesProvider>
                  </ProductProvider>
                </AuthProvider>
              </CartProvider>
            </WishlistProvider>
          </BrandstProvider>
        </SubCategoriestProvider>
        </OrderProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
