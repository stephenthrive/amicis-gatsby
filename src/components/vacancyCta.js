import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const VacancyCta = props => {
  const image = getImage(props.data.image.localFile)
  return (
    <section id="VacancyCta" className="bg-pink overflow-hidden">
      <div className="flex text-white">
        <div className="w-full flex flex-wrap">
          <div className="w-full flex flex-wrap items-center xl:w-1/2">
            <div className="w-full max-w-screen-xl-half m-8 md:m-16 lg:my-16 lg:mx-0">
              <div className="flex font-bold text-2xl md:text-4xl leading-tight mb-8 md:mb-12">
                <div className="mr-4 lg:mr-0 lg:w-1/12">
                  <div className="w-4px bg-white h-full lg:mx-auto"></div>
                </div>
                <div className="w-10/12 lg:mr-1/12 lg:ml-2">
                  {props.data.title && (
                    <h3 className="font-bold text-2xl md:text-4xl leading-tight">
                      {props.data.title}
                    </h3>
                  )}
                </div>
              </div>
              <div className="lg:mx-1/12">
                {props.data.content && (
                  <div
                    dangerouslySetInnerHTML={{ __html: props.data.content }}
                  />
                )}
                {props.data.button && (
                  <div className="pt-4">
                    <a
                      href={props.data.button.url}
                      className="btn btn-invert inline-block"
                    >
                      {props.data.button.title}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full hidden xl:block lg:w-3/4 lg:-ml-3/12 lg:transform lg:translate-x-40">
            {props.data.image && (
              <GatsbyImage
                image={image}
                alt={props.data.image.alt}
                title={props.data.image.title}
                className="block w-full h-full mb-6 md:mb-8 lg:mb-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VacancyCta
