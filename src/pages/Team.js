import React from 'react'
import OnlyBandage from "../layouts/OnlyBandage"
import TeamPageInnovation from '../components/TeamPageInnovation'
import TeamPageHeroes from '../components/TeamPageHeroes'
import TeamPageMeetOurTeam from "../components/TeamPageMeetOurTeam"
import TeamPageFreeTrial from "../components/TeamPageFreeTrial"
import Footer from "../layouts/Footer"


export default function Team() {
    return (
        <div>
            <OnlyBandage />
            <TeamPageInnovation />
            <TeamPageHeroes />
            <TeamPageMeetOurTeam/>
            <TeamPageFreeTrial/>
            <Footer/>
        </div>
    )
}
