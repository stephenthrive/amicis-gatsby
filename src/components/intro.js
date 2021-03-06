import React from "react"
import { Link } from "gatsby"

const Intro = props => {
  return (
    <section id="intro" className="custom-container flex text-darkblue">
      <div className="w-full my-8 md:my-16 lg:flex lg:justify-between lg:my-24">
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
          <div className="lg:px-1/12 lg:ml-2">
            {props.data.contentColumnLeft && (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data.contentColumnLeft,
                }}
              />
            )}
            {props.data.ctaColumnLeft && (
              <>
                {props.data.ctaColumnLeft.map(item => (
                  <Link to={item.buttonLeft.url} className="btn inline-block">
                    {item.buttonLeft.title}
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="space-y-4 lg:px-1/12 lg:ml-2 lg:space-x-0">
            {props.data.contentColumnRight && (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data.contentColumnRight,
                }}
              />
            )}

            {props.data.ctaColumnRight && (
              <div className="space-y-4 sm:space-x-4 lg:space-x-0">
                {props.data.ctaColumnRight.map(item => (
                  <Link to={item.buttonRight.url} className="btn inline-block">
                    {item.buttonRight.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
