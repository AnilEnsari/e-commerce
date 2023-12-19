import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { setProductList } from "../store/actions/productActions";
import { api } from "../api/api";
import { setLoading } from "../store/actions/loadingAction";
import { ClipLoader } from "react-spinners";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addToList } from "../store/actions/shoppingCardActions";

export default function ProductListPageCards() {
  const productList = useSelector((select) => select.product.productList);
  const loading = useSelector((select) => select.loading.boolean);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const limit = 25;
  const history = useHistory();
  const updatedShoppingCard = useSelector((select) => select.shopping.card);

  const fetchMoreData = async () => {
    dispatch(setLoading(true));

    await api
      .get(`products/?offset=${offset}&limit=${limit}`)
      .then((response) => {
        console.log("INFINITE RESPONSE , ", response);
        dispatch(setProductList(productList?.concat(response.data.products)));
        setOffset(offset + limit);
      })
      .catch((error) => {
        console.error("Error fetching more data:", error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const onClickHandler = (data) => {
    console.log("HİSTORYYY , DATA ", data);
    history.push(
      `/${data.category_id}/${data.id}/${data.name
        .split(" ")
        .join("-")
        .toLowerCase()}`
    );
  };

  const addShoppingCardHandler = (data) => {
    dispatch(addToList(data));
    localStorage.setItem("sepet", JSON.stringify(updatedShoppingCard));
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <>
      <div className="w-[70rem] mobile:w-[20rem] flex flex-wrap mobile:flex-col mx-auto gap-8">
        <InfiniteScroll
          dataLength={productList.length}
          next={fetchMoreData}
          hasMore={true}
          loader={() => dispatch(setLoading(true))}
          className="w-[70rem] mobile:w-[20rem] flex flex-wrap mobile:flex-col mx-auto gap-8"
        >
          {productList.map((eleman, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col justify-between"
            >
              {eleman && (
                <>
                  <div onClick={() => onClickHandler(eleman)}>
                    {eleman.images && eleman.images[0] && (
                      <img
                        src={eleman.images[0]?.url}
                        alt="Product"
                        className="mt-10 mobile:ml-16 w-[15rem] h-[15rem]"
                      />
                    )}
                    <h2 className="text-[#252B42] mt-4 text-center text-[1.1rem] font-bold">
                      {eleman.name}
                    </h2>
                    <h4 className="mt-4 text-center w-[15rem] flex text-[#737373] text-[0.875] font-bold">
                      {eleman.description}
                    </h4>
                    <p className="mt-4 text-center text-[#BDBDBD] text-[1rem] font-bold">
                      {eleman.price}₺
                      <span className="text-[#23856D] ml-2">
                        {eleman.rating}
                      </span>
                    </p>
                  </div>
                  <button
                    onClick={() => addShoppingCardHandler(eleman)}
                    className=" mt-[2rem] bg-blue-400 text-white font-bold px-[1rem] py-[1rem] rounded"
                  >
                    SEPETE EKLE
                  </button>
                </>
              )}
            </div>
          ))}
        </InfiniteScroll>
        <div className="flex justify-center mx-auto items-center mt-20">
          <ClipLoader size={30} color={"#123abc"} loading={loading} />
        </div>
      </div>

      <div className="flex mobile:ml-10 flex-wrap mx-auto mt-10">
        <div className="flex mobile:flex-col  flex-wrap w-[20rem] h-[4.5rem] justify-between border">
          <button className="text-[#BDBDBD] bg-[#F3F3F3] p-[1.56rem] font-semibold">
            First
          </button>
          <button className="text-[#23A6F0] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF] px-[1.25rem] py-[1.56rem] font-semibold">
            1
          </button>
          <button className="text-[#23A6F0] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]  px-[1.25rem] py-[1.56rem] font-semibold">
            2
          </button>
          <button className="text-[#23A6F0] bg-[#FFFFFF] hover:bg-[#23A6F0] hover:text-[#FFFFFF]  px-[1.25rem] py-[1.56rem] font-semibold">
            3
          </button>
          <button className="text-[#BDBDBD] bg-[#F3F3F3] p-[1.56rem] font-semibold">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
