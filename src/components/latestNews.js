import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Moment from "react-moment"

const LatestNews = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWpPost {
            nodes {
              id
              title
              date
              uri
              acf_components {
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 700
                        height: 430
                        placeholder: BLURRED
                      )
                    }
                  }
                  title
                  altText
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
          <section id="latestnews" className="bg-darkblue text-white">
            <div className="custom-container flex">
              <div className="w-full flex justify-between items-center py-8 pd:my-16 lg:py-24">
                <div className="w-5/6 lg:w-1/2">
                  <div>
                    <div className="flex font-bold text-2xl md:text-4xl leading-tight">
                      <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                        <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                      </div>
                      <h3 className="w-10/12 lg:mr-1/12 lg:pl-2">
                        News and updates
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="w-1/6 lg:w-1/2 flex justify-end items-start">
                  <div className="flex items-center">
                    <a
                      href="https://twitter.com/AmicisGroup"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24.282 19.734"
                        className="w-6 lg:w-9 transition fill-current text-lightgray hover:text-pink"
                      >
                        <path
                          id="Path_148"
                          data-name="Path 148"
                          d="M938.064-59.717a14.078,14.078,0,0,0,14.174-14.175c0-.216,0-.43-.014-.644a10.137,10.137,0,0,0,2.485-2.58,9.948,9.948,0,0,1-2.861.785,5,5,0,0,0,2.191-2.756,9.991,9.991,0,0,1-3.163,1.209,4.977,4.977,0,0,0-3.637-1.574,4.983,4.983,0,0,0-4.983,4.981,4.959,4.959,0,0,0,.129,1.136,14.143,14.143,0,0,1-10.269-5.205,4.965,4.965,0,0,0-.675,2.5,4.978,4.978,0,0,0,2.217,4.147,4.948,4.948,0,0,1-2.257-.623c0,.021,0,.042,0,.064a4.983,4.983,0,0,0,4,4.884,4.994,4.994,0,0,1-1.313.175,4.966,4.966,0,0,1-.936-.09,4.987,4.987,0,0,0,4.654,3.46,10,10,0,0,1-6.188,2.133,10.055,10.055,0,0,1-1.189-.069,14.1,14.1,0,0,0,7.637,2.238"
                          transform="translate(-930.427 79.451)"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/amicis-group-limited"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.801 19.785"
                        className="w-6 lg:w-9 ml-2 lg:ml-5 transition fill-current text-lightgray hover:text-pink"
                      >
                        <path
                          id="Path_152"
                          data-name="Path 152"
                          d="M-1124.461,1061.283c2.81,0,5.621.008,8.431-.006a1.448,1.448,0,0,1,1.455,1.191,1.478,1.478,0,0,1,.018.22q0,8.484,0,16.968a1.409,1.409,0,0,1-1.344,1.4c-.049,0-.1,0-.148,0h-16.825a1.393,1.393,0,0,1-1.421-1.016,1.52,1.52,0,0,1-.06-.418q0-8.456,0-16.913a1.4,1.4,0,0,1,1.409-1.431c.679-.008,1.359,0,2.038,0Zm.663,8.686c0-.395-.007-.734,0-1.072,0-.165-.041-.225-.217-.224q-1.213.013-2.427,0c-.193,0-.237.06-.236.242q.008,4.51,0,9.02c0,.184.047.248.238.246q1.26-.013,2.52,0c.187,0,.239-.054.239-.243q-.012-2.269,0-4.538a5.532,5.532,0,0,1,.076-.937,1.472,1.472,0,0,1,1.091-1.329,2.618,2.618,0,0,1,.659-.06,1.207,1.207,0,0,1,1.283,1,5.539,5.539,0,0,1,.128,1.189c.014,1.556.008,3.112,0,4.667,0,.181.047.251.239.249q1.26-.014,2.52,0c.179,0,.229-.056.229-.233q-.008-2.51,0-5.02a8.747,8.747,0,0,0-.191-2.038,2.8,2.8,0,0,0-1.538-2.1,4.114,4.114,0,0,0-2.78-.232A3.046,3.046,0,0,0-1123.8,1069.969Zm-4.67,3.444c0-1.506,0-3.012,0-4.518,0-.167-.046-.223-.219-.221q-1.278.012-2.556,0c-.167,0-.22.044-.22.217q.008,4.536,0,9.073c0,.18.065.218.226.217.84-.005,1.679,0,2.519,0,.247,0,.248,0,.248-.247Q-1128.468,1075.672-1128.468,1073.413Zm-1.492-6a1.708,1.708,0,0,0,1.717-1.71,1.717,1.717,0,0,0-1.723-1.727,1.709,1.709,0,0,0-1.715,1.732A1.7,1.7,0,0,0-1129.96,1067.409Z"
                          transform="translate(1134.357 -1061.278)"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="custom-container">
              <div className="grid gap-4 md:grid-cols-2 pb-8 md:pb-16 lg:pb-24 xlg:grid-cols-3">
                {data.allWpPost.nodes.map((item, index) => (
                  <div className="bg-white rounded-md shadowXl">
                    <div className="text-darkblue">
                      <GatsbyImage
                        image={
                          item.acf_components.image.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={item.acf_components.image.altText}
                        title={item.acf_components.image.title}
                      />
                      <div className="relative px-4 py-6">
                        <div className="flex mb-4">
                          <div className="mr-4 lg:mr-0 lg:w-1/12">
                            <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                          </div>
                          <div className="text-darkblue">
                            <h3 className="font-bold text-2xl mb-2 md:text-3xl leading-tight">
                              {item.title}
                            </h3>
                            <div className="text-lightergray">
                              <Moment format="Do MMMM, YYYY">
                                {item.date}
                              </Moment>
                            </div>
                          </div>
                        </div>
                        <div className="lg:mx-1/12">
                          <div className="pb-4">
                            {item.acf_components.excerpt}
                          </div>
                          <Link to={item.uri} className="text-pink">
                            Read more…
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    />
  )
}

export default LatestNews
