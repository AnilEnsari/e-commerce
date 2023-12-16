import React from 'react'
import OnlyBandage from "../layouts/OnlyBandage"
import PricingPageSimplePricing from "../components/PricingPageSimplePricing"
import PricingPageCard from "../components/PricingPageCard"
import PricingPage4000BigComp from "../components/PricingPage4000BigComp"
import Brands from "../components/Brands"
import PricingPagePricingFaqs from "../components/PricingPagePricingFaqs"
import TeamPageFreeTrial from "../components/TeamPageFreeTrial"
import Footer from "../layouts/Footer"

export default function Pricing() {
    return (
        <div>
            <OnlyBandage />
            <PricingPageSimplePricing />
            <PricingPageCard />
            <PricingPage4000BigComp />
            <Brands />
            <PricingPagePricingFaqs />
            <TeamPageFreeTrial />
            <Footer />
        </div>
    )
}
