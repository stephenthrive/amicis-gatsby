import React from "react"
import {Link} from "gatsby"

const Intro = (props) => {

  if(props.data.title!==null) {props.data.title = '<h3 class="font-bold text-2xl md:text-4xl leading-tight">'+props.data.title+'</h3>';}

  return (
    <section className="custom-container flex text-darkblue">
      <div className="w-full flex flex-wrap my-8 md:my-16 lg:my-24">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div>
            {props.data.title && (
              <div className="flex  mb-8 md:mb-12">
                <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                  <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                </div>
                <div class="w-10/12 lg:mr-1/12 lg:ml-2">
                  <div dangerouslySetInnerHTML={{__html: props.data.title}} />
                </div>
              </div>
            )}
            <div className="flex w-full flex-wrap lg:px-1/12 lg:ml-2 introcontent">
              <div dangerouslySetInnerHTML={{__html: props.data.contentColumnOne}} />
              <Link to={props.data.button.url} className="btn hidden lg:inline-block">{props.data.button.title}</Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div class="lg:mx-1/12 introcontent">
            <div dangerouslySetInnerHTML={{__html: props.data.contentColumnTwo}} />
            <div class="pt-4 md:pt-0">
              <Link to={props.data.button.url} className="btn block md:inline-block lg:hidden">{props.data.button.title}</Link>
            </div>
          </div>
        </div>
      </div>
    </section> 
  )

}

export default Intro;