import React, { useState } from "react"
import Img from "gatsby-image"
import {graphql, StaticQuery} from 'gatsby'

const Team = () => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
    
  return (
    <StaticQuery
    query={graphql`
      query {
        david: file(relativePath: { eq: "david.png" }) {
          childImageSharp {
            fixed(width: 148, height: 148) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        nick: file(relativePath: { eq: "nick.png" }) {
          childImageSharp {
            fixed(width: 148, height: 148) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        peter: file(relativePath: { eq: "peter.png" }) {
          childImageSharp {
            fixed(width: 148, height: 148) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        rob: file(relativePath: { eq: "rob.png" }) {
          childImageSharp {
            fixed(width: 148, height: 148) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `} render={data =>

      <section className="bg-darkblue">
        <div className="custom-container py-12 lg:py-24">
          <div className="w-full flex flex-wrap my-8 md:my-16 lg:my-24">
            <div className="w-full mb-6 lg:mb-0">
              <div>
                <div className="flex">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-0.5/12">
                    <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                  </div>
                  <div class="w-10/12 lg:mr-1/12">
                     <h3 className="font-bold text-3xl md:text-4xl leading-tight text-white">The team behind Amicis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-2 md:mx-8 lg:-mx-4">
            <div className="px-4 w-full pb-6 md:w-1/2 lg:w-1/4 lg:pb-0">
              <Img fixed={data.david.childImageSharp.fixed} />
              <div className="flex flex-wrap pt-8 pb-6 relative">
                <div className="w-1 h-16 bg-pink absolute"></div>
                <div className="py-1 ml-8">
                  <div className="text-white uppercase tracking-widest text-lg">David Hallam</div>
                  <div className="text-white uppercase tracking-widest font-light">CEO<br /><br /></div>
                </div>
              </div>
              <div className="pb-6">
                <p className="text-white font-light">David is a business executive with 30 years+ experience who built his own business in the IT sector and sold it into a global FTSE business in 2010.  For the last 10 years he has been part of that organisations operational board and has helped the group grow from £70 million market cap to £1 billion market cap.</p>
              </div>
              <div className={isActive ? "hidden" : "block"}>
                <div className="pb-6">
                  <p className="text-white font-light">He’s also been involved in many business acquisitions and helped smaller businesses go to market for sale in an advisory capacity or as Non-Executive Director. He started his career working in the civil service before moving into the private sector working for a large US software and services organisation throughout the US & Europe where he built out the North of England office before growing his own successful IT services business.  He has built and advised on strategic direction for many organisations, (listed and privately owned) in many industry sectors and been responsible for building new services and products bringing them successfully into the market. He also sits as board advisor to a large global business listed on the Fankfurt and the USA OTC markets.</p>
                </div>
              </div>
              <div className="w-full md:hidden mb-10">
                <div className="w-full relative">
                  <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}>
                    <span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span>
                  </button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
                </div>
              </div>
            </div>
            <div className="px-4 w-full pb-6 md:w-1/2 lg:w-1/4 lg:pb-0">
              <Img fixed={data.nick.childImageSharp.fixed} />
              <div className="flex flex-wrap pt-7 pb-6 relative">
                <div className="w-1 h-16 bg-pink absolute"></div>
                <div className="py-1 ml-8">
                  <div className="text-white uppercase tracking-widest text-lg">Nick Ashton</div>
                  <div className="text-white uppercase tracking-widest font-light">Sales Director<br /><br /></div>
                </div>
              </div>
              <div className="pb-6">
                <p className="text-white font-light">Nick has worked in cyber and technology sales for over 10 years, delivering consistent double digit growth as exec, manager and HoD. In his time in cyber security he has hired people with no industry experience who have progressed into Director, Senior Management, Principal Consultancy, Analyst and Programme Management roles through his guidance and mentorship.</p>
              </div>
              <div className={isActive ? "hidden" : "block"}>
                <div className="pb-6">
                  <p className="text-white font-light">He began his career in commission only sales. Within three years he became Sales Manager of Virgin Media Business, overseeing substantial growth in their Small Business offering with a threefold rise in headcount and 250% increase in revenue during his four years in the company. From there he joined NCC Group, becoming Senior Sales Manager and more recently Relationship Director, assuming responsibility for some of the largest deals conducted in the history of the company.</p>
                </div>
              </div>
              <div className="w-full md:hidden mb-10">
                <div className="w-full relative">
                  <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}>
                    <span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span>
                  </button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
                </div>
              </div>
            </div>
            <div className="flex-wrap -mx-4 hidden md:flex lg:hidden w-full mb-10">
              <div className="px-4 w-full md:w-2/4 lg:w-1/4">
                <div className="w-full relative mb-10">
                  <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}><span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span></button>
                  <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
                </div>
              </div>
              <div className="px-4 w-full md:w-2/4 lg:w-1/4">
                <div className="w-full relative mb-10">
                  <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}><span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span></button>
                  <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
                </div>
              </div>
            </div>
            <div className="px-4 w-full pb-6 md:w-1/2 lg:w-1/4 lg:pb-0">
              <Img fixed={data.peter.childImageSharp.fixed} />
              <div className="flex flex-wrap pt-7 pb-6 relative">
                <div className="w-1 h-16 bg-pink absolute"></div>
                <div className="py-1 ml-8">
                  <div className="text-white uppercase tracking-widest text-lg">Peter Wood</div>
                  <div className="text-white uppercase tracking-widest font-light">Commercial &amp;<br />
                  Finance Director</div>
                </div>
              </div>
              <div className="pb-6">
                <p className="text-white font-light">Pete is an experienced director with over 30 years’ experience in technology related roles.  During his 20-year career at the Health & Safety Executive, he undertook various roles, culminating in him managing the outsourced PFI contract for IT service provision.</p>
              </div>
              <div className={isActive ? "hidden" : "block"}>
                <div className="pb-6">
                  <p className="text-white font-light">In 2008, he left government service joining David Hallam’s SDLC Solutions where he undertook a number of consultancy roles, including management of the largest data migration programme ever undertaken by the UK Ministry of Defence, earning a Ministerial Commendation for his part in helping the department save £50m in legacy system costs.  Following the acquisition of SDLC by NCC Group in 2010, Pete moved into operational and commercial management, moving up to Director in 2013.  By 2015, his command spanned three separate business units with operating revenues in the region of £50m pa.  Following a group reorganisation in 2017, Pete was asked to establish the UK Assurance Sales Operations function, unifying a number of disparate operational business units and functions and putting in place a coherent division-wide operating model generating c£100m pa in sales.</p>
                </div>
              </div>
              <div className="w-full md:hidden mb-10">
                <div className="w-full relative">
                  <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}>
                    <span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span>
                  </button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
                </div>
              </div>
            </div>
            <div className="px-4 w-full pb-6 md:w-1/2 lg:w-1/4 lg:pb-0">
              <Img fixed={data.rob.childImageSharp.fixed} />
              <div className="flex flex-wrap pt-7 pb-6 relative">
                <div className="w-1 h-16 bg-pink absolute"></div>
                <div className="py-1 ml-8">
                  <div className="text-white uppercase tracking-widest text-lg">Rob Wilson</div>
                  <div className="text-white uppercase tracking-widest font-light">Operations Director<br /><br /></div>
                </div>
              </div>
              <div className="pb-6">
                <p className="text-white font-light">Robert Wilson is the Co-founder and Operations Director for Amicis Group Limited. Rob’s experiences have predominately been in Quality, Operational and Commercial roles across Engineering and more recently the Mergers & Acquisitions space (M&A). </p>
              </div>
              <div className={isActive ? "hidden" : "block"}>
                <div className="pb-6">
                  <p className="text-white font-light">Having taken a keen interest in Cyber Security and spending the past few years in the M&A space working with hundreds of business owners, it became clear that Cyber Resilience was not at the forefront of many businesses plans or risk strategies. With that in mind Rob co-founded Amicis Group to help change that mindset and build UK PLC’s Cyber Resilience.</p>
                </div>
              </div>
              <div className="w-full md:hidden mb-10">
                <div className="w-full relative">
                  <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}>
                    <span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span>
                  </button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
                </div>
              </div> 
            </div>
          </div>
          <div className="flex-wrap -mx-4 hidden lg:flex">
            <div className="px-4 w-full md:w-1/4">
              
            </div>
            <div className="px-4 w-full md:w-1/4">
              <div className="w-full relative mb-10">
                <a href="https://www.linkedin.com/in/nickashton89/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="27.832" height="27.811" viewBox="0 0 27.832 27.811">
                  <path id="Path_241" data-name="Path 241" d="M-1120.447,1061.286c3.95,0,7.9.012,11.851-.008a2.035,2.035,0,0,1,2.045,1.674,2.057,2.057,0,0,1,.025.309q0,11.926,0,23.851a1.98,1.98,0,0,1-1.889,1.973c-.069,0-.139,0-.209,0h-23.649a1.957,1.957,0,0,1-2-1.427,2.138,2.138,0,0,1-.084-.587q-.006-11.886,0-23.773a1.971,1.971,0,0,1,1.981-2.012c.955-.012,1.91,0,2.865,0Zm.932,12.209c0-.555-.01-1.031,0-1.507.007-.232-.057-.317-.306-.314q-1.705.019-3.411,0c-.271,0-.333.084-.332.341q.011,6.34,0,12.679c0,.259.067.348.334.346q1.771-.018,3.542,0c.263,0,.336-.076.335-.341q-.016-3.189,0-6.379a7.779,7.779,0,0,1,.108-1.317,2.068,2.068,0,0,1,1.533-1.868,3.684,3.684,0,0,1,.926-.084,1.7,1.7,0,0,1,1.8,1.408,7.79,7.79,0,0,1,.179,1.671c.02,2.187.011,4.374,0,6.561,0,.254.065.352.336.349q1.771-.019,3.542,0c.252,0,.322-.079.321-.328q-.012-3.528,0-7.056a12.3,12.3,0,0,0-.269-2.864,3.932,3.932,0,0,0-2.161-2.949,5.782,5.782,0,0,0-3.908-.326A4.281,4.281,0,0,0-1119.515,1073.495Zm-6.564,4.841c0-2.117,0-4.234,0-6.35,0-.235-.064-.313-.308-.311q-1.8.018-3.593,0c-.235,0-.31.061-.309.3q.01,6.376,0,12.753c0,.253.092.306.317.3,1.18-.007,2.36,0,3.541,0,.347,0,.348,0,.348-.347Q-1126.078,1081.51-1126.079,1078.335Zm-2.1-8.44a2.4,2.4,0,0,0,2.414-2.4,2.414,2.414,0,0,0-2.422-2.427,2.4,2.4,0,0,0-2.41,2.434A2.4,2.4,0,0,0-1128.176,1069.9Z" transform="translate(1134.357 -1061.278)" fill="#f2f2f2"/>
                </svg></a>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/4">
              <div className="w-full relative mb-10">
                <a href="https://www.linkedin.com/in/peter-wood-0493461a/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="27.832" height="27.811" viewBox="0 0 27.832 27.811">
                  <path id="Path_241" data-name="Path 241" d="M-1120.447,1061.286c3.95,0,7.9.012,11.851-.008a2.035,2.035,0,0,1,2.045,1.674,2.057,2.057,0,0,1,.025.309q0,11.926,0,23.851a1.98,1.98,0,0,1-1.889,1.973c-.069,0-.139,0-.209,0h-23.649a1.957,1.957,0,0,1-2-1.427,2.138,2.138,0,0,1-.084-.587q-.006-11.886,0-23.773a1.971,1.971,0,0,1,1.981-2.012c.955-.012,1.91,0,2.865,0Zm.932,12.209c0-.555-.01-1.031,0-1.507.007-.232-.057-.317-.306-.314q-1.705.019-3.411,0c-.271,0-.333.084-.332.341q.011,6.34,0,12.679c0,.259.067.348.334.346q1.771-.018,3.542,0c.263,0,.336-.076.335-.341q-.016-3.189,0-6.379a7.779,7.779,0,0,1,.108-1.317,2.068,2.068,0,0,1,1.533-1.868,3.684,3.684,0,0,1,.926-.084,1.7,1.7,0,0,1,1.8,1.408,7.79,7.79,0,0,1,.179,1.671c.02,2.187.011,4.374,0,6.561,0,.254.065.352.336.349q1.771-.019,3.542,0c.252,0,.322-.079.321-.328q-.012-3.528,0-7.056a12.3,12.3,0,0,0-.269-2.864,3.932,3.932,0,0,0-2.161-2.949,5.782,5.782,0,0,0-3.908-.326A4.281,4.281,0,0,0-1119.515,1073.495Zm-6.564,4.841c0-2.117,0-4.234,0-6.35,0-.235-.064-.313-.308-.311q-1.8.018-3.593,0c-.235,0-.31.061-.309.3q.01,6.376,0,12.753c0,.253.092.306.317.3,1.18-.007,2.36,0,3.541,0,.347,0,.348,0,.348-.347Q-1126.078,1081.51-1126.079,1078.335Zm-2.1-8.44a2.4,2.4,0,0,0,2.414-2.4,2.414,2.414,0,0,0-2.422-2.427,2.4,2.4,0,0,0-2.41,2.434A2.4,2.4,0,0,0-1128.176,1069.9Z" transform="translate(1134.357 -1061.278)" fill="#f2f2f2"/>
                </svg></a>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/4">
              <div className="w-full relative mb-10">
                <a href="https://www.linkedin.com/in/robert-wilson-549502147/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="27.832" height="27.811" viewBox="0 0 27.832 27.811">
                  <path id="Path_241" data-name="Path 241" d="M-1120.447,1061.286c3.95,0,7.9.012,11.851-.008a2.035,2.035,0,0,1,2.045,1.674,2.057,2.057,0,0,1,.025.309q0,11.926,0,23.851a1.98,1.98,0,0,1-1.889,1.973c-.069,0-.139,0-.209,0h-23.649a1.957,1.957,0,0,1-2-1.427,2.138,2.138,0,0,1-.084-.587q-.006-11.886,0-23.773a1.971,1.971,0,0,1,1.981-2.012c.955-.012,1.91,0,2.865,0Zm.932,12.209c0-.555-.01-1.031,0-1.507.007-.232-.057-.317-.306-.314q-1.705.019-3.411,0c-.271,0-.333.084-.332.341q.011,6.34,0,12.679c0,.259.067.348.334.346q1.771-.018,3.542,0c.263,0,.336-.076.335-.341q-.016-3.189,0-6.379a7.779,7.779,0,0,1,.108-1.317,2.068,2.068,0,0,1,1.533-1.868,3.684,3.684,0,0,1,.926-.084,1.7,1.7,0,0,1,1.8,1.408,7.79,7.79,0,0,1,.179,1.671c.02,2.187.011,4.374,0,6.561,0,.254.065.352.336.349q1.771-.019,3.542,0c.252,0,.322-.079.321-.328q-.012-3.528,0-7.056a12.3,12.3,0,0,0-.269-2.864,3.932,3.932,0,0,0-2.161-2.949,5.782,5.782,0,0,0-3.908-.326A4.281,4.281,0,0,0-1119.515,1073.495Zm-6.564,4.841c0-2.117,0-4.234,0-6.35,0-.235-.064-.313-.308-.311q-1.8.018-3.593,0c-.235,0-.31.061-.309.3q.01,6.376,0,12.753c0,.253.092.306.317.3,1.18-.007,2.36,0,3.541,0,.347,0,.348,0,.348-.347Q-1126.078,1081.51-1126.079,1078.335Zm-2.1-8.44a2.4,2.4,0,0,0,2.414-2.4,2.414,2.414,0,0,0-2.422-2.427,2.4,2.4,0,0,0-2.41,2.434A2.4,2.4,0,0,0-1128.176,1069.9Z" transform="translate(1134.357 -1061.278)" fill="#f2f2f2"/>
                </svg></a>
              </div>
            </div>
          </div>
          <div className="flex-wrap -mx-4 hidden md:flex">
            <div className="px-4 w-full md:w-2/4 lg:w-1/4 md:hidden lg:flex">
              <div className="w-full relative mb-10">
                <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}><span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span></button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
              </div>
            </div>
            <div className="px-4 w-full md:w-2/4 lg:w-1/4 md:hidden lg:flex">
              <div className="w-full relative mb-10">
                <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}><span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span></button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
              </div>
            </div>
            <div className="px-4 w-full md:w-2/4 lg:w-1/4">
              <div className="w-full relative mb-10">
                <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}><span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span></button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
              </div>
            </div>
            <div className="px-4 w-full md:w-2/4 lg:w-1/4">
              <div className="w-full relative mb-10">
                <button className="text-pink text-center w-full text-sm uppercase absolute z-20" onClick={handleToggle}><span className="bg-darkblue px-3">{isActive ? "Show More" : "Show Less"}</span></button>
                <div className="bg-pink h-px absolute top-2.5 w-full z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    } />
  
  )

}

export default Team;