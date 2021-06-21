import React from "react"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

import Moment from "react-moment"

import "nprogress/nprogress.css"

import TopHeader from "../components/topHeader.js"
import MainMenu from "../components/menus/mainMenu.js"
import FullWidthContent from "../components/posts/fullWidthContent.js"
import SplitWidthContent from "../components/posts/splitWidthContent.js"

import ContactForm from "../components/contact.js"
import Footer from "../components/footer.js"
import { Link } from "gatsby"

const WpPost = data => {
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
      <section
        id="header"
        className="text-white bg-darkblue relative overflow-hidden"
      >
        <div className="custom-container flex relative z-30 overflow-hidden">
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 my-8">
              <h4 className="flex text-xl text-pink tracking-wide	 uppercase mb-4 md:text-2xl">
                <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12"></div>
                News
              </h4>
              <h3 className="flex font-bold text-2xl md:text-4xl leading-tight">
                <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                  <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                </div>
                <div className="w-10/12 lg:mr-1/12">
                  {data.pageContext.title}
                </div>
              </h3>
            </div>
            <div className="w-full lg:w-5/12 hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350.336 327.455"
                className="h-80"
              >
                <g
                  id="Group_412"
                  data-name="Group 412"
                  transform="translate(-86.51 -58.055)"
                >
                  <path
                    id="Path_971"
                    data-name="Path 971"
                    d="M86.51,58.055h171l159.5,327.455H86.51Z"
                    fill="#191d35"
                  />
                  <path
                    id="Path_369"
                    data-name="Path 369"
                    d="M310.883,380.474,156.275,53.018H52.823l154.6,327.455Z"
                    transform="translate(125.963 5.037)"
                    fill="#fff"
                  />
                  <path
                    id="Path_370"
                    data-name="Path 370"
                    d="M22.725,195h95.7L70.572,93.649Z"
                    transform="translate(63.784 88.974)"
                    fill="#e2003a"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-full h-80 overflow-hidden justify-end absolute top-0 z-10 bg-darkblue">
          <StaticImage
            src="../images/post-header.jpg"
            alt="#"
            className="w-5/12 bg-darkblue"
          />
        </div>
        <div className="hidden lg:flex w-full items-end h-80 overflow-hidden justify-end absolute top-0 left-40 z-20"></div>
      </section>
      <section id="dateCTA" className="custom-container">
        <div className="w-full flex justify-between items-center mt-8 pb-4 border-b border-darkblue">
          <Moment format="Do MMMM, YYYY">{data.pageContext.date}</Moment>
          <div className="flex">
            <a
              href={`https://twitter.com/intent/tweet/?text=${data.pageContext.title} - https://amiscisgatsbymaster.gatsbyjs.io/${data.pageContext.uri}%2F&via=AmicisGroup`}
              target="_blank"
              title="Tweet this!"
              rel="noreferrer"
              className="text-darkblue transition hover:text-pink"
            >
              <svg
                className="mr-3 w-5 md:w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="49.535"
                height="40.258"
                viewBox="0 0 49.535 40.258"
              >
                <path
                  id="Path_148"
                  data-name="Path 148"
                  d="M946.006-39.194c18.693,0,28.915-15.487,28.915-28.916,0-.44-.008-.878-.029-1.314a20.681,20.681,0,0,0,5.07-5.262,20.294,20.294,0,0,1-5.837,1.6,10.2,10.2,0,0,0,4.469-5.622,20.381,20.381,0,0,1-6.453,2.467,10.153,10.153,0,0,0-7.418-3.211A10.165,10.165,0,0,0,954.559-69.29a10.11,10.11,0,0,0,.264,2.318A28.852,28.852,0,0,1,933.875-77.59a10.128,10.128,0,0,0-1.377,5.108,10.155,10.155,0,0,0,4.523,8.46,10.094,10.094,0,0,1-4.6-1.272c0,.042,0,.085,0,.13a10.166,10.166,0,0,0,8.154,9.963,10.187,10.187,0,0,1-2.679.358,10.128,10.128,0,0,1-1.91-.183,10.173,10.173,0,0,0,9.494,7.058,20.39,20.39,0,0,1-12.623,4.351,20.511,20.511,0,0,1-2.425-.142,28.769,28.769,0,0,0,15.579,4.565"
                  transform="translate(-930.427 79.451)"
                />
              </svg>
            </a>
            <a
              href={`http://www.linkedin.com/shareArticle?mini=true&url=https://amicisgatsbymaster.gatsbyjs.io/${data.pageContext.uri}/&title=${data.pageContext.title}`}
              target="_blank"
              title="Share on LinkedIn"
              rel="noreferrer"
              className="text-darkblue transition hover:text-pink"
            >
              <svg
                className="w-5 md:w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="40.393"
                height="40.361"
                viewBox="0 0 40.393 40.361"
              >
                <path
                  id="Path_152"
                  data-name="Path 152"
                  d="M-1114.169,1061.289c5.733,0,11.466.017,17.2-.011a2.954,2.954,0,0,1,2.968,2.43,2.981,2.981,0,0,1,.036.449q0,17.308,0,34.615a2.874,2.874,0,0,1-2.741,2.863c-.1,0-.2,0-.3,0h-34.322a2.841,2.841,0,0,1-2.9-2.072,3.1,3.1,0,0,1-.121-.852q-.009-17.251,0-34.5a2.86,2.86,0,0,1,2.875-2.92c1.386-.017,2.772,0,4.158,0Zm1.352,17.719c0-.805-.014-1.5.006-2.187.01-.336-.083-.46-.443-.456q-2.475.027-4.951,0c-.393-.005-.483.122-.482.494q.016,9.2,0,18.4c0,.375.1.505.485.5q2.57-.027,5.14,0c.381,0,.488-.111.487-.5q-.024-4.628,0-9.257a11.276,11.276,0,0,1,.156-1.912,3,3,0,0,1,2.225-2.711,5.356,5.356,0,0,1,1.344-.122,2.461,2.461,0,0,1,2.617,2.043,11.308,11.308,0,0,1,.26,2.425c.028,3.174.016,6.348.005,9.522,0,.368.1.511.488.507q2.57-.027,5.14,0c.366,0,.468-.114.466-.475q-.017-5.12,0-10.24a17.845,17.845,0,0,0-.39-4.157,5.706,5.706,0,0,0-3.137-4.28,8.39,8.39,0,0,0-5.671-.473A6.213,6.213,0,0,0-1112.817,1079.008Zm-9.526,7.025c0-3.072,0-6.144.006-9.216,0-.341-.094-.455-.447-.451q-2.607.026-5.214,0c-.342,0-.449.089-.449.442q.015,9.254,0,18.508c0,.367.133.444.46.442,1.713-.011,3.425,0,5.138-.005.5,0,.505,0,.505-.5Q-1122.342,1090.641-1122.343,1086.033Zm-3.044-12.248a3.485,3.485,0,0,0,3.5-3.488,3.5,3.5,0,0,0-3.514-3.522,3.487,3.487,0,0,0-3.5,3.532A3.475,3.475,0,0,0-1125.386,1073.785Z"
                  transform="translate(1134.357 -1061.278)"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {data.pageContext.acf_components.flexibleContent.map((acf, index) => {
        if (
          acf.__typename === "WpPost_AcfComponents_FlexibleContent_FullWidth"
        ) {
          return <FullWidthContent key={index} data={acf} />
        }
        if (
          acf.__typename === "WpPost_AcfComponents_FlexibleContent_SplitWidth"
        ) {
          return <SplitWidthContent key={index} data={acf} />
        }
        return null
      })}

      <section className="custom-container">
        <Link to="/news" className="btn inline-block">
          Back to News
        </Link>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}

export default WpPost
