import React from "react"
import "nprogress/nprogress.css"
import {Helmet} from "react-helmet"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"
import AboutHeader from "../components/headers/aboutHeader.js"
import AboutIntro from "../components/intros/aboutIntro.js"
import Logos from "../components/logos.js"
import Team from "../components/team.js"
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
      <AboutHeader />
      <AboutIntro />
      <Logos />
      <Team />
      <Contact />
      <Footer />
    </main>
  )

}