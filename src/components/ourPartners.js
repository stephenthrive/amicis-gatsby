import React from "react"

const OurPartners = props => {
  return (
    <section id="OurPartners" className="bg-lightgray">
      <div className="custom-container py-8 md:py-16">
        <div className="mb-6 lg:w-1/2 lg:mb-0">
          {props.data.title && (
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
          )}
        </div>
        <div className="md:flex md:flex-wrap md:justify-center">
          {props.data.logos.map((item, index) => (
            <div
              key={index}
              class="mb-8 md:w-6/12 lg:flex lg:justify-center lg:items-start lg:w-3/12"
            >
              <img
                src={item.logo.sourceUrl}
                width={item.logo.mediaDetails.width}
                height={item.logo.mediaDetails.height}
                title={item.logo.title}
                alt={item.logo.altText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurPartners
