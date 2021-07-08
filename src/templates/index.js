import React from "react"
import "nprogress/nprogress.css"
import { Helmet } from "react-helmet"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"

import Header from "../components/header.js"
import Intro from "../components/intro.js"
import IndustryCta from "../components/industryCta.js"
import VacancyCta from "../components/vacancyCta.js"
import OurBrands from "../components/ourBrands.js"
import OurPartners from "../components/ourPartners.js"
import LatestNews from "../components/latestNews.js"
import LatestNewsCarousel from "../components/latestNewsCarousel.js"
import ContactForm from "../components/contact.js"
import ServicesType from "../components/servicesType.js"
import Sectors from "../components/sectors.js"
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
        if (acf.__typename === "WpPage_AcfComponents_Components_IndustryCta") {
          return <IndustryCta key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_VacancyCta") {
          return <VacancyCta key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_OurBrands") {
          return <OurBrands key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_OurPartners") {
          return <OurPartners key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_LatestNews") {
          return <LatestNews key={index} data={acf} />
        }
        if (
          acf.__typename ===
          "WpPage_AcfComponents_Components_LatestNewsCarousel"
        ) {
          return <LatestNewsCarousel key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_ContactForm") {
          return <ContactForm key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_ServicesType") {
          return <ServicesType key={index} data={acf} />
        }
        if (acf.__typename === "WpPage_AcfComponents_Components_Sectors") {
          return <Sectors key={index} data={acf} />
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
