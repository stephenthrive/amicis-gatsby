import React from "react"
import SubheadingLeft from "./splitWidthContent/subheadingLeft"
import ContentLeft from "./splitWidthContent/contentLeft"
import ImageLeft from "./splitWidthContent/imageLeft"
import SubheadingRight from "./splitWidthContent/subheadingRight"
import ContentRight from "./splitWidthContent/contentRight"
import ImageRight from "./splitWidthContent/imageRight"

const SplitWidthContent = props => {
  return (
    <section id="splitContent" className="custom-container">
      <div className="w-full my-8 pb-8 border-b border-darkblue">
        <div className="lg:flex lg:-ml-8">
          <div className="space-y-6 mb-6 lg:w-1/2 lg:mb-0 lg:px-8">
            {props.data.contentTypesLeft.map((acf, index) => {
              if (
                acf.__typename ===
                "WpPost_AcfComponents_FlexibleContent_SplitWidth_ContentTypesLeft_Subheading"
              ) {
                return <SubheadingLeft key={index} data={acf} />
              }
              if (
                acf.__typename ===
                "WpPost_AcfComponents_FlexibleContent_SplitWidth_ContentTypesLeft_Content"
              ) {
                return <ContentLeft key={index} data={acf} />
              }
              if (
                acf.__typename ===
                "WpPost_AcfComponents_FlexibleContent_SplitWidth_ContentTypesLeft_Image"
              ) {
                return <ImageLeft key={index} data={acf} />
              }
              return null
            })}
          </div>
          <div className="space-y-6 lg:w-1/2 lg:px-8">
            {props.data.contentTypesRight.map((acf, index) => {
              if (
                acf.__typename ===
                "WpPost_AcfComponents_FlexibleContent_SplitWidth_ContentTypesRight_Subheading"
              ) {
                return <SubheadingRight key={index} data={acf} />
              }
              if (
                acf.__typename ===
                "WpPost_AcfComponents_FlexibleContent_SplitWidth_ContentTypesRight_Content"
              ) {
                return <ContentRight key={index} data={acf} />
              }
              if (
                acf.__typename ===
                "WpPost_AcfComponents_FlexibleContent_SplitWidth_ContentTypesRight_Image"
              ) {
                return <ImageRight key={index} data={acf} />
              }
              return null
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SplitWidthContent
