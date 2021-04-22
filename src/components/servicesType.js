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
      <div className="custom-container w-full mb-8 md:mb-16 lg:mb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {props.data.service.map(item => (
            <div className="service relative shadowXl">
              <div className="p-8 text-center">
                <img
                  src={item.iconService.sourceUrl}
                  className="block mx-auto mb-10"
                  width={item.iconService.mediaDetails.width}
                  height={item.iconService.mediaDetails.height}
                  alt="#"
                />
                <h3 class="text-lg tracking-widest uppercase mb-10">
                  {item.titleService}
                </h3>
                <a
                  href="#"
                  onClick={handleToggle}
                  className="inline-block py-1 px-3 bg-darkblue tracking-widest uppercase text-white text-center border-4 border-darkblue transition ease-in-out duration-200 hover:bg-white hover:text-darkblue"
                >
                  Learn More
                </a>
              </div>
              <div
                className={
                  isActive
                    ? "hidden"
                    : "block absolute top-0 left-0 w-full h-full bg-darkerlightergray p-8"
                }
              >
                <div className="flex justify-between mb-8">
                  <h5 className="text-lg tracking-widest font-bold uppercase border-l-4 border-pink pl-4">
                    {item.titleService}
                  </h5>
                  <a
                    href="#"
                    className="text-lg text-pink"
                    onClick={handleToggle}
                  >
                    X
                  </a>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: item.contentService }}
                  className=""
                />
                <img
                  src={item.iconService.sourceUrl}
                  className="absolute bottom-0 right-0 block mx-auto mb-10 filter grayscale opacity-10"
                  width={item.iconService.mediaDetails.width}
                  height={item.iconService.mediaDetails.height}
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
                to={props.data.cta.linkCta.uri}
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
