import React from 'react'
import OnlyBandage from '../layouts/OnlyBandage'
import ContactPageGetinTouch from "../components/ContactPageGetinTouch"
import ContactPageWeHelp from "../components/ContactPageWeHelp"
import ContactPageLetsTalk from "../components/ContactPageLetsTalk"
import Footer from "../layouts/Footer"

export default function Contact() {
    return (
        <div>
            <OnlyBandage />
            <ContactPageGetinTouch />
            <ContactPageWeHelp/>
            <ContactPageLetsTalk/>
            <Footer/>
        </div>
    )
}
