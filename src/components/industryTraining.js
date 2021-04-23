import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndustryTraining = props => {
  const image = getImage(props.data.image.localFile)
  return (
    <section id="industryTraining" className="bg-white">
      <div className="lg:flex">
        <div className="flex flex-wrap items-center justify-end lg:w-1/2">
          <div className="w-full max-w-screen-xl-half m-8 md:m-16 lg:my-16 lg:mx-0">
            <div className="flex mb-8 md:mb-12">
              <div className="mr-4 lg:mr-0 lg:w-1/12">
                <div className="w-4px bg-pink h-full lg:mx-auto"></div>
              </div>
              <div className="w-10/12 lg:mr-1/12 lg:ml-2">
                <h3 className="font-bold text-2xl md:text-4xl leading-tight">
                  {props.data.title}
                </h3>
              </div>
            </div>
            <div className="lg:mx-1/12">
              {props.data.content && (
                <div dangerouslySetInnerHTML={{ __html: props.data.content }} />
              )}
              {props.data.button && (
                <div className="pt-4">
                  <a href={props.data.button.url} className="btn inline-block ">
                    {props.data.button.title}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          {props.data.image && (
            <>
              <GatsbyImage
                image={image}
                alt={props.data.image.alt}
                title={props.data.image.title}
                className="block mb-6 md:mb-8 lg:mb-0"
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default IndustryTraining
