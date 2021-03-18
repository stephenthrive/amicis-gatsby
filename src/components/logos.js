import React from "react"

const Logos = (props) => {
  return (
    <section id="logo" className="bg-darkerlightergray overflow-hidden">
      <div className="-mr-6 lg:-mr-0">
        <div className="custom-container py-12 lg:py-24 flex flex-wrap">
          {props.data.logosContent.map( logos => {
            return(
              <div className="w-1/2 sm:w-1/4 pr-6 pb-6 lg:pr-0 sm:pb-0">
                <div className="lg:mx-2/12">
                  <div dangerouslySetInnerHTML={{__html: logos.logo}} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )

}

export default Logos