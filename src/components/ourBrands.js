import React from "react"

const OurBrands = props => {
  return (
    <section id="OurBrands" className="custom-container">
      <div className="my-8 md:my-16 lg:flex lg:flex-wrap lg:my-24">
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
        <div className="flex justify-center w-full">
          {props.data.logos.map((item, index) => (
            <div key={index} class="flex justify-center items-start w-4/12">
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

export default OurBrands
