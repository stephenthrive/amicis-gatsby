import React from "react"
import "nprogress/nprogress.css"
import {Helmet} from "react-helmet"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"
import Header from "../components/header.js"
import Intro from "../components/intro.js"
import IndustryLeading from "../components/industryLeading.js"
import GetToKnow from "../components/gettoknow.js"
import ContactForm from "../components/contact.js"
import Logos from "../components/logos.js"
import Icons from "../components/icons.js"
import Services from "../components/services.js"
import Team from "../components/team.js"
import FullContent from "../components/fullContent.js"
import Footer from "../components/footer.js"

const WpPage = (data) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.pageContext.seo.title}</title>
        <meta name="description" content={data.pageContext.seo.metaDesc} />
        <meta name="keywords" content={data.pageContext.seo.metaKeywords} />
      </Helmet>
      <TopHeader />
      <MainMenu data={data} />
      {data.pageContext.acf_components.components.map( acf => {
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
        if(acf.__typename==='WpPage_AcfComponents_Components_GetToKnowUs') {
          return (
            <GetToKnow data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_ContactForm') {
          return (
            <ContactForm data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_Logos') {
          return (
            <Logos data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_Icons') {
          return (
            <Icons data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_Services') {
          return (
            <Services data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_Teams') {
          return (
            <Team data={acf} />
          )
        }
        if(acf.__typename==='WpPage_AcfComponents_Components_FullContent') {
          return (
            <FullContent data={acf} />
          )
        }
      })}
      <Footer />
    </main>
  )
}

export default WpPage