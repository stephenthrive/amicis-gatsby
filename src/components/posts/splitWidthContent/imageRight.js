import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = props => {
  const imageContent = getImage(props.data.image.localFile)
  return (
    <GatsbyImage
      image={imageContent}
      alt={props.data.image.altText}
      title={props.data.image.title}
    />
  )
}

export default Image
