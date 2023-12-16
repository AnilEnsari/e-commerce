import React from 'react'
import OnlyBandage from '../layouts/OnlyBandage'
import AboutAboutUs from '../components/AboutAboutUs'
import AboutPageMetMinim from '../components/AboutPageMetMinim'
import AboutPageRate from '../components/AboutPageRate'
import AboutPageVideo from '../components/AboutPageVideo'
import AboutTeamComponents from '../components/AboutPageTeam'
import AboutTeamPageBigComponies from '../components/AboutTeamPageBigComponies'
import Brands from "../components/Brands"
import AboutPageNowLetsGrow from '../components/AboutPageNowLetsGrow'
import Footer from "../layouts/Footer"

export default function About() {
    return (
        <div>
            <OnlyBandage />
            <AboutAboutUs />
            <AboutPageMetMinim />
            <AboutPageRate />
            <AboutPageVideo />
            <AboutTeamComponents />
            <AboutTeamPageBigComponies />
            <Brands />
            <AboutPageNowLetsGrow />
            <Footer/>
        </div>

    )
}
