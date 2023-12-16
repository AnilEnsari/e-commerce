import React from 'react'
import Header from '../layouts/Header'
import ProductHomeShop from '../components/ProductHomeShop'
import ProductPageSlider from '../components/ProductPageSlider'
import ProductPageDescription from '../components/ProductPageDescription'
import ProductPageQuickFox from '../components/ProductPageQuickFox'
import ProductPageBestSellerProduct from '../components/ProductPageBestSellerProduct'
import Brands from "../components/Brands"
import Footer from '../layouts/Footer'

export default function Productpage() {
  return (
    <div>
      <Header />
      <ProductHomeShop />
      <ProductPageSlider />
      <ProductPageDescription />
      <ProductPageQuickFox />
      <ProductPageBestSellerProduct />
      <Brands />
      <Footer/>

    </div>
  )
}
