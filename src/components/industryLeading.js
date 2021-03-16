import React from "react"

const IndustryLeading = (props) => {

  if(props.data.button!==null) {props.data.button = '<a href="'+props.data.button.url+'" class="btn btn-invert block md:inline-block ">'+props.data.button.title+'</a>';}
  
  return (
    <section id="industryLeading" className="bg-pink">
      <div className="flex text-white">
        <div className="w-full flex flex-wrap">
          <div className="w-full hidden lg:block lg:w-1/2">
            <div>
              <img src={props.data.image.localFile.childImageSharp.fixed.src} alt={props.data.image.alt} title={props.data.image.title} class="w-full mb-6 md:mb-8 lg:mb-0" />
            </div>
          </div>
          <div className="w-full flex flex-wrap items-center lg:w-1/2">
            <div className="w-full max-w-screen-xl-half m-8 md:m-16 lg:my-16 lg:mx-0">
              <div className="flex font-bold text-2xl md:text-4xl leading-tight mb-8 md:mb-12">
                <div className="mr-4 md:mr-8 lg:mr-2 lg:w-1/12">
                  <div className="w-4px bg-white h-full lg:mx-auto"></div>
                </div>
                <div className="lg:pl-2" dangerouslySetInnerHTML={{__html: props.data.title}} />
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
      </div> 
    </section>
  )

}

export default IndustryLeading;