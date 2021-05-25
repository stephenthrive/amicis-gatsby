import React from "react"
import "nprogress/nprogress.css"
import { Helmet } from "react-helmet"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"
import Header from "../components/header.js"
import Intro from "../components/intro.js"
import IndustryCyber from "../components/industryCyber.js"
import IndustryTraining from "../components/industryTraining.js"
import GetToKnow from "../components/gettoknow.js"
import LatestNews from "../components/latestNews.js"
import ContactForm from "../components/contact.js"
import Logos from "../components/logos.js"
import Icons from "../components/icons.js"
import Services from "../components/services.js"
import ServicesType from "../components/servicesType.js"
import Team from "../components/team.js"
import FullContent from "../components/fullContent.js"
import News from "../components/news.js"
import Footer from "../components/footer.js"

const WpPage = data => {
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
      {data.pageContext.acf_components.components.map((acf, index) => {
        if (acf.__typename === "WpPage_AcfComponents_Components_Header") {
          return <Header key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_Intro") {
          return <Intro key={index} data={acf} />
        }
        if (
          acf.__typename === "WpPage_AcfComponents_Components_IndustryCyber"
        ) {
          return <IndustryCyber key={index} data={acf} />
        }
        if (
          acf.__typename === "WpPage_AcfComponents_Components_IndustryTraining"
        ) {
          return <IndustryTraining key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_GetToKnowUs") {
          return <GetToKnow key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_LatestNews") {
          return <LatestNews key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_ContactForm") {
          return <ContactForm key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_Logos") {
          return <Logos key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_Icons") {
          return <Icons key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_Services") {
          return <Services key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_ServicesType") {
          return <ServicesType key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_Teams") {
          return <Team key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_FullContent") {
          return <FullContent key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_News") {
          return <News key={index} data={acf} />
        }
        return null
      })}
      <Footer />
    </main>
  )
}

export default WpPage
