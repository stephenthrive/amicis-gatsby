import React from "react"

const Subheading = props => {
  return (
    <>
      <div className="flex mb-4 lg:mb-8">
        <div className="mr-4">
          <div className="w-4px bg-pink h-full"></div>
        </div>
        <div className="text-darkblue">
          <h3 className="font-bold text-2xl md:text-3xl leading-tight">
            {props.data.subheading}
          </h3>
        </div>
      </div>
    </>
  )
}

export default Subheading
