import React from "react"

const IndustryLeading = (props) => {

  if(props.data.title!==null) {props.data.title = '<h3 class="w-10/12 lg:mr-1/12">'+props.data.title+'</h3>';}
  if(props.data.content!==null) {props.data.content = props.data.content.replace('<p>', '<p class="text-md sm:text-xl lg:mb-8">');}
  if(props.data.content!==null) {props.data.content = props.data.content.replace('<p>', '<p class="text-md sm:text-xl lg:mb-8">');}
  if(props.data.button!==null) {props.data.button = '<a href="'+props.data.button.url+'" class="btn btn-invert block md:inline-block ">'+props.data.button.title+'</a>';}
  

  return (
    <section className="bg-pink">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-0 lg:pr-4 xl:px-4 flex text-white">
        <div className="w-full flex flex-wrap my-8 md:my-16 lg:my-0 xl:my-24">
          <div className="w-full hidden lg:block lg:w-1/2">
            <div className="xl:mx-1/12">
              <img src={props.data.image.localFile.childImageSharp.fixed.src} alt={props.data.image.alt} title={props.data.image.title} class="w-full mb-6 md:mb-8 lg:mb-0" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:my-16 xl:my-0">
            <div className="flex font-bold text-2xl md:text-4xl leading-tight mb-8 md:mb-12">
              <div className="mr-4 md:mr-8 lg:mr-2 lg:w-1/12">
                <div className="w-4px bg-white h-full lg:mx-auto"></div>
              </div>
              <div dangerouslySetInnerHTML={{__html: props.data.title}} />
            </div>
            <div className="lg:mx-1/12">
              <div dangerouslySetInnerHTML={{__html: props.data.content}} />
              <div className="pt-4">
                <div dangerouslySetInnerHTML={{__html: props.data.button}} />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )

}

export default IndustryLeading;