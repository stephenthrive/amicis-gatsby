import React from "react"

const Services = (props) => {

  let backgroundColor
  let blockTextColor

  if(props.data.blockBackgroundColour==='#191d35') { backgroundColor = 'bg-darkblue' }
  if(props.data.blockBackgroundColour==='#ffffff') { backgroundColor = 'bg-white' }
  if(props.data.blockBackgroundColour==='#e2003a') { backgroundColor = 'bg-pink' }
  if(props.data.blockBackgroundColour==='#f9f9f9') { backgroundColor = 'bg-darkerlightergray' }

  if(props.data.textColour==='#191d35') { blockTextColor = 'text-darkblue' }
  if(props.data.textColour==='#ffffff') { blockTextColor = 'text-white' }
  if(props.data.textColour==='#e2003a') { blockTextColor = 'text-pink' }
  if(props.data.textColour==='#f9f9f9') { blockTextColor = 'text-darkerlightergray' }

  // backgroundIcon

  return (
  	<section id="services" className={"relative overflow-hidden "+ backgroundColor +" "+ blockTextColor}>
      <div className="custom-container flex">
        <div className="w-full flex flex-wrap my-8 md:my-16 lg:my-24">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex items-center justify-center">
            {props.data.contentAlignment==="Left" &&
              <div>
                <div className="flex">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                    {backgroundColor==="bg-darkblue" && <div className="w-4px bg-pink h-full lg:mx-auto"></div>}
                    {backgroundColor==="bg-white" && <div className="w-4px bg-pink h-full lg:mx-auto"></div>}
                    {backgroundColor==="bg-pink" && <div className="w-4px bg-white h-full lg:mx-auto"></div>}
                    {backgroundColor==="bg-darkerlightergray" && <div className="w-4px bg-pink h-full lg:mx-auto"></div>}
                  </div>
                  <div className="w-10/12 lg:mr-1/12">
                    {props.data.title && <h3 class="font-bold text-2xl md:text-4xl leading-tight">{props.data.title}</h3>}
                  </div>
                </div>
                {props.data.imageIcon && <div className="w-32 lg:hidden relative z-20 mx-1/12 mt-8" dangerouslySetInnerHTML={{__html: props.data.imageIcon}} />}
                {props.data.content && <div className="mx-1/12 mt-8 md:mt-12" dangerouslySetInnerHTML={{__html: props.data.content}} />}
              </div>
            }
            {props.data.contentAlignment==="Right" &&
              <>{props.data.imageIcon && <div className="hidden lg:flex w-72 relative z-20" dangerouslySetInnerHTML={{__html: props.data.imageIcon}} />}</>
            }
            {props.data.contentAlignment==="Right" &&
              <>{props.data.backgroundIcon && <div className="hidden lg:block absolute lg:-left-80 xlg:-left-32 z-10 h-full w-1/2" dangerouslySetInnerHTML={{__html: props.data.backgroundIcon}} />}</>
            }
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            {props.data.contentAlignment==="Right" &&
              <div>
                <div className="flex">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                    {backgroundColor==="bg-darkblue" && <div className="w-4px bg-pink h-full lg:mx-auto"></div>}
                    {backgroundColor==="bg-white" && <div className="w-4px bg-pink h-full lg:mx-auto"></div>}
                    {backgroundColor==="bg-pink" && <div className="w-4px bg-white h-full lg:mx-auto"></div>}
                    {backgroundColor==="bg-darkerlightergray" && <div className="w-4px bg-pink h-full lg:mx-auto"></div>}
                  </div>
                  <div className="w-10/12 lg:mr-1/12">
                    {props.data.title && <h3 class="font-bold text-2xl md:text-4xl leading-tight">{props.data.title}</h3>}
                  </div>
                </div>
                {props.data.imageIcon && <div className="w-32 lg:hidden relative z-20 mx-1/12 mt-8" dangerouslySetInnerHTML={{__html: props.data.imageIcon}} />}
                {props.data.content && <div className="mx-1/12 mt-8 md:mt-12" dangerouslySetInnerHTML={{__html: props.data.content}} />}
              </div>
            }
            {props.data.contentAlignment==="Left" &&
              <>{props.data.imageIcon && <div className="hidden lg:flex w-72 relative z-20" dangerouslySetInnerHTML={{__html: props.data.imageIcon}} />}</>
            }
            {props.data.contentAlignment==="Left" &&
              <>{props.data.backgroundIcon && <div className="hidden lg:block absolute lg:-right-80 xlg:-right-32 z-10 h-full w-1/2" dangerouslySetInnerHTML={{__html: props.data.backgroundIcon}} />}</>
            }
          </div>
        </div>
      </div>
    </section> 
  )

}

export default Services;