import React from "react"

const Content = props => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.data.content,
      }}
    />
  )
}

export default Content
