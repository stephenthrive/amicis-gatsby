import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Moment from "react-moment"

const News = () => {
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
          <section id="news">
            <div className="custom-container">
              <div className="grid gap-4 md:grid-cols-2 my-8 md:my-16 lg:my-24 xlg:grid-cols-3">
                {data.allWpPost.nodes.map((item, index) => (
                  <div key={index} className="rounded-md shadowXl">
                    <GatsbyImage
                      image={
                        item.acf_components.image.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={item.acf_components.image.altText}
                      title={item.acf_components.image.title}
                    />
                    <div className="text-darkblue">
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

export default News
