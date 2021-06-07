import React from "react"

const Sectors = props => {
  return (
    <section id="Sectors" className=" bg-pink">
      <div className="custom-container py-8 md:py-16 lg:py-24">
        <h3 className="flex text-2xl font-bold text-white mb-8 md:text-4xl leading-tight">
          <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
            <div className="w-4px bg-white h-full lg:mx-auto"></div>
          </div>
          <div className="w-10/12 lg:mr-1/12">{props.data.title}</div>
        </h3>
        <div
          className="space-y-4 text-white lg:px-1/12"
          dangerouslySetInnerHTML={{
            __html: props.data.content,
          }}
        />
        <div className="grid gap-3 mt-8 sm:grid-cols-2 md:grid-cols-3 md:mt-16 lg:grid-cols-5">
          {props.data.sectorTypes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-8 bg-white text-center"
            >
              <img
                src={item.icon.sourceUrl}
                className="mb-4"
                width={item.icon.mediaDetails.width}
                height={item.icon.mediaDetails.height}
                title={item.icon.title}
                alt={item.icon.altText}
              />
              <div
                className="text-sm font-bold uppercase"
                dangerouslySetInnerHTML={{
                  __html: item.sectorTitle,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sectors
