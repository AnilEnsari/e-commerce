import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { api } from "../api/api";
import { setProductList } from "../store/actions/productActions";
import { useHistory } from "react-router-dom";

const ProductPageSingleProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const limit = 587;
  const { productid } = useParams();
  const singleProduct = useSelector((select) => select.product.productList);
  const eleman = singleProduct.find((tek) => tek.id === parseInt(productid));

  const onClickHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`products/?limit=${limit}`);
      dispatch(setProductList(response.data.products));
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="cursor-pointer h-100vh">
        {eleman ? (
          <>
            {eleman.images && eleman.images[0] && (
              <img
                src={eleman.images[0]?.url}
                alt="Product"
                className="mt-10 mobile:ml-16 mx-auto w-[15rem] h-[15rem]"
              />
            )}
            <h2 className="text-[#252B42]  mt-4 text-center text-[1.1rem] font-bold">
              {eleman.name}
            </h2>
            <h4 className="mt-4 text-center mx-auto w-[15rem] flex text-[#737373] text-[0.875] font-bold">
              {eleman.description}
            </h4>
            <p className="mt-4 text-center text-[#BDBDBD] text-[1rem] font-bold">
              {eleman.price}₺
              <span className="text-[#23856D] ml-2">{eleman.rating}</span>
            </p>
            <button
              className="justify-center items-center text-center mx-auto flex mt-4 p-4 bg-blue-500 text-white font-bold rounded"
              onClick={onClickHandler}
            >
              BACK PAGE
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPageSingleProduct;
