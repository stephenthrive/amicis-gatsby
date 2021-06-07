import React from "react"

const FullContent = (props) => {
  return (
    <section id="fullContent" className="custom-container flex text-darkblue">
      <div className="w-full flex flex-wrap mt-8 md:mt-16 lg:mt-24">
        <div className="w-full">
          {props.data.content && <div className="p-4" dangerouslySetInnerHTML={{__html: props.data.content}} />}
        </div>
      </div>
    </section>
  )

}

export default FullContent;