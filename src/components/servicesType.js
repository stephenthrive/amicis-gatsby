import React, { useState } from "react"
import { Link } from "gatsby"

const ServicesType = props => {
  const [isActive, setActive] = useState("false")

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive)
  }

  return (
    <section id="serviceType">
      <div className="bg-lightgray mb-8 md:mb-16 lg:mb-24">
        <div className="custom-container relative z-30 flex">
          <span className="marker"></span>
          <div className="w-full flex flex-wrap items-center">
            <div className="w-full lg:w-7/12 my-8 md:my-16">
              <h3 className="flex font-bold text-2xl mb-8 md:text-4xl leading-tight">
                <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                  <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                </div>
                <div className="w-10/12 lg:mr-1/12">What we offer</div>
              </h3>
              <h4 className="flex text-xl font-bold tracking-wide	uppercase mb-4 md:text-2xl">
                <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12 w-4px"></div>
                Cyber Resistence
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container w-full mb-8 md:mb-16 lg:mb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {props.data.service.map(item => (
            <div className="service relative shadowXl overflow-hidden">
              <div className="p-8 text-center">
                <div className="flex items-end h-32 mb-10">
                  <img
                    src={item.iconService.sourceUrl}
                    className="block mx-auto"
                    alt="#"
                  />
                </div>
                <h3 class="text-lg tracking-widest uppercase mb-10">
                  {item.titleService}
                </h3>
                <button
                  className="inline-block py-1 px-3 bg-darkblue tracking-widest uppercase text-white text-center border-4 border-darkblue transition ease-in-out duration-200 hover:bg-white hover:text-darkblue"
                  onClick={handleToggle}
                >
                  Learn More
                </button>
              </div>
              <div
                className={
                  isActive
                    ? "hidden"
                    : "absolute top-0 left-0 w-full h-full bg-darkerlightergray p-8 overflow-scroll"
                }
              >
                <div className="flex justify-between mb-8">
                  <h5 className="text-lg tracking-widest font-bold uppercase border-l-4 border-pink pl-4">
                    {item.titleService}
                  </h5>
                  <button className="" onClick={handleToggle}>
                    x
                  </button>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.contentService }}
                  className="text-sm"
                />
                <img
                  src={item.iconService.sourceUrl}
                  className="absolute bottom-6 right-6 block filter grayscale opacity-10"
                  width="100"
                  height="100"
                  alt="#"
                />
              </div>
            </div>
          ))}

          <div className="service relative shadowXl">
            <div className="p-8 text-center bg-darkblue h-full flex justify-center flex-col items-center text-white">
              <h3 class="text-lg tracking-widest uppercase mb-10">
                {props.data.cta.titleCta}
              </h3>
              <Link
                to={props.data.cta.linkCta.url}
                className="inline-block py-1 px-3 bg-pink tracking-widest uppercase text-white text-center border-4 border-pink transition ease-in-out duration-200 hover:bg-darkblue"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesType
