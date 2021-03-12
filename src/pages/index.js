import React from "react"
import "nprogress/nprogress.css"
import {Helmet} from "react-helmet"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"
import Header from "../components/header.js"
import Intro from "../components/intro.js"
import IndustryLeading from "../components/industryLeading.js"

import Footer from "../components/footer.js"

const WpPage = (data) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amicis Group</title>
      </Helmet>
      <TopHeader />
      <MainMenu />
      <IndustryLeading />
      {data.pageContext.acf_components.components.map( acf => {
        console.log(acf)
        if(acf.__typename==='WpPage_AcfComponents_Components_Header') {
          return (
            <Header data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_Intro') {
          return (
            <Intro data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_IndustryLeading') {
          return (
            <IndustryLeading data={acf} />
          )
        }
      })}
      <Footer />
    </main>
  )
}

export default WpPage