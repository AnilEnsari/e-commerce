import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { setProductList } from '../store/actions/productActions';
import { setLoading } from '../store/actions/loadingAction';
import { api } from '../api/api';

export default function ProductListPageShopTopCards() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.global?.categories[0]);
  if (!productList) {
    return null;
  }
  const sortedProductList = productList.sort((a, b) => b.rating - a.rating).slice(0, 5)
  console.log("sortedProductList", sortedProductList)


  const dropDownHandler = (data) => {
    console.log("NE VAR BU DATA  , ", data);
    dispatch(setLoading(true))
    api.get(`products?filter=${data.gender === "k" ? "kadın" : "erkek"}&category=${data.id}`)
      .then((response) => {
        console.log("REPONSE DATA , ", response)
        dispatch(setProductList(response.data.products))
        dispatch(setLoading(false));
      })

  }



  return (
    <div className='w-[70rem] mobile:flex-wrap mobile:w-[20rem] mx-auto flex mt-8 gap-4'>
      {sortedProductList.map((eleman, index) => (
        <NavLink onClick={() => dropDownHandler(eleman)} key={index} to={`/products/${eleman.gender === "k" ? "kadın" : "erkek"}/${eleman.title}`}>
          <div key={index} className='w-[12rem]  mobile:min-w-max mobile:my-4 mobile:mx-auto h-[13rem] '>
            <img className='h-[20rem]' src={eleman.img} alt='resim' />
            <h1 className=' text-center text-black font-bold'>{eleman.title}</h1>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

