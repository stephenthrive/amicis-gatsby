import React from "react"
import Subheading from "./fullWidthContent/subheading"
import Content from "./fullWidthContent/content"
import Image from "./fullWidthContent/image"

const FullWidthContent = props => {
  return (
    <section id="fullContent" className="custom-container">
      <div className="w-full my-8 pb-8 space-y-6 border-b border-darkblue">
        {props.data.contentTypes.map((acf, index) => {
          if (
            acf.__typename ===
            "WpPost_AcfComponents_FlexibleContent_FullWidth_ContentTypes_Subheading"
          ) {
            return <Subheading key={index} data={acf} />
          }
          if (
            acf.__typename ===
            "WpPost_AcfComponents_FlexibleContent_FullWidth_ContentTypes_Content"
          ) {
            return <Content key={index} data={acf} />
          }
          if (
            acf.__typename ===
            "WpPost_AcfComponents_FlexibleContent_FullWidth_ContentTypes_Image"
          ) {
            return <Image key={index} data={acf} />
          }
          return null
        })}
      </div>
    </section>
  )
}

export default FullWidthContent
