import React from "react"
import "nprogress/nprogress.css"
import {Helmet} from "react-helmet"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"
import HomeHeader from "../components/headers/homeHeader.js"
import HomeIntro from "../components/intros/homeIntro.js"
import IndustryLeading from "../components/industryLeading.js"
import GetToKnow from "../components/gettoknow.js"
import Contact from "../components/contact.js"
import Footer from "../components/footer.js"

export default function App({ data }) {

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amicis Group</title>
      </Helmet>
      <TopHeader />
      <MainMenu />
      <HomeHeader />
      <HomeIntro />
      <IndustryLeading />
      <GetToKnow />
      <Contact />
      <Footer />
    </main>
  )

}