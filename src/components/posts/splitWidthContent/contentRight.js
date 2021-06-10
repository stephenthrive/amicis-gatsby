import React from "react"

const ContentLeft = props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.data.content,
      }}
    />
  )
}

export default ContentLeft
