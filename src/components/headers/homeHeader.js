import React from "react"
import Img from "gatsby-image"
import {graphql, StaticQuery} from 'gatsby'
import dots from '../../images/dots.svg'

const Header = () => {
  return (
  	<StaticQuery
    query={graphql`
      query {
        home: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 492, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `} render={data =>
      <section className="text-white bg-darkblue relative border-t-8 border-pink">
      	<div className="custom-container flex relative z-30 overflow-hidden">
		      <div className="w-full flex flex-wrap items-center">
		        <div className="w-full lg:w-7/12 my-8">
	            <h3 className="flex font-bold text-2xl md:text-4xl leading-tight">
	              <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                  <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                </div>
	              <div className="w-10/12 lg:mr-1/12">
	                Your most powerful<br />
	                ally in cyber resilience.
	              </div>
	            </h3>
		        </div>
		        <div className="w-full lg:w-5/12 hidden lg:block">
		        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.336 327.455" className="h-80">
							  <g id="Group_412" data-name="Group 412" transform="translate(-86.51 -58.055)">
							    <path id="Path_971" data-name="Path 971" d="M86.51,58.055h171l159.5,327.455H86.51Z" fill="#191d35"/>
							    <path id="Path_369" data-name="Path 369" d="M310.883,380.474,156.275,53.018H52.823l154.6,327.455Z" transform="translate(125.963 5.037)" fill="#fff"/>
							    <path id="Path_370" data-name="Path 370" d="M22.725,195h95.7L70.572,93.649Z" transform="translate(63.784 88.974)" fill="#e2003a"/>
							  </g>
							</svg>
						</div>
		      </div>
		    </div>
		    <div class="hidden lg:flex w-full h-80 overflow-hidden justify-end absolute top-0 z-10">
		     	<Img fluid={data.home.childImageSharp.fluid} className="w-5/12" />
		    </div>
		    <div class="hidden lg:flex w-full items-end h-80 overflow-hidden justify-end absolute top-0 z-20">
		     	<img src={dots} alt="dots" className="w-5/12 " />
		    </div>
	    </section>
		} />
  )

}

export default Header;