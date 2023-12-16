import React, { useEffect } from 'react'
import Header from '../layouts/Header'
import ProductListPageShop from '../components/ProductListPageShop'
import ProductListPageShopTopCards from '../components/ProductListPageShopTopCards'
import ShowingAllResult from '../components/ShowingAllResult'
import ProductListPageCards from '../components/ProductListPageCards'
import Brands from "../components/Brands"
import Footer from "../layouts/Footer"
import { useDispatch } from 'react-redux'
import { getProductsByThunk } from '../store/actions/productActions'

export default function ProductListPage() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductsByThunk())
  },[])


  return (
    <div>
        <Header/>
        <ProductListPageShop/>
        <ProductListPageShopTopCards/>
        <ShowingAllResult/>
        <ProductListPageCards/>
        <Brands/>
        <Footer/>
    </div>
  )
}
