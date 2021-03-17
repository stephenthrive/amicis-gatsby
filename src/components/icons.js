import React from "react"

const Icons = (props) => {
  return (
    <section id="icons" className="bg-darkerlightergray overflow-hidden">
      <div class="-mr-6 lg:-mr-0">
        <div className="custom-container py-12 lg:py-24 flex flex-wrap justify-center">
          {props.data.iconsContent.map( icons => {
            return(
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 pr-6 pb-6 lg:pr-0 sm:pb-0 flex items-center justify-center relative">
                <div className="lg:mx-2/12 pb-4 md:pb-8">
                  <div dangerouslySetInnerHTML={{__html: icons.icon}} className="mb-6 sm:mb-14 md:mb-12 px-8" />
                  <h4 className="text-center absolute bottom-0 left-0 md:left-6 right-6 text-xl text-darkblue uppercase font-bold mb-6">{icons.title}</h4>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )

}

export default Icons