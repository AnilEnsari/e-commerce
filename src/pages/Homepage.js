import React from 'react'
import Header from '../layouts/Header'
import ProductCard from "../components/ProductCard"
import Brands from '../components/Brands'
import ShopCards from '../components/ShopCards'
import FeaturedPosts from '../components/FeaturedPosts'
import FeaturedProducts from '../components/FeaturedProducts'
import ProductCardSecond from '../components/ProductCardSecond'
import WeLoveWhatWeDo from '../components/WeLoveWhatWeDo'
import Footer from '../layouts/Footer'

export default function Homepage() {
    return (
        <div>
            <Header />
            <ProductCard />
            <Brands />
            <ShopCards />
            <ProductCardSecond />
            <WeLoveWhatWeDo />
            <FeaturedProducts />
            <FeaturedPosts />
            <Footer />
        </div>
    )
}
