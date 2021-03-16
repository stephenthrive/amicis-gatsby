import React from "react"

const Contact = (props) => {

  if(props.data.paragraph!==null) {props.data.paragraph = props.data.paragraph.replace('<p>', '<p class="text-md sm:text-xl mb-10 text-darkblue pt-8">');}

  return (
  	<section className="bg-white text-darkblue">
	    <div className="custom-container flex pt-12">
	    	<div className="w-full max-w-screen-xl mx-auto px-6 md:px-16 lg:px-20 py-6 md:py-12 lg:py-24 shadowXl">
	    		<div className="flex flex-wrap">
		        <div className="w-full lg:w-1/2">
		          <div>
		            <div className="flex">
		              <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
		                <div className="w-4px bg-pink h-full lg:mx-auto"></div>
		              </div>
                  <div className="w-10/12 lg:mr-1/12">
                    <h3 className="flex font-bold text-2xl md:text-4xl leading-tight">{props.data.title}</h3>
                  </div>
		            </div>
                <div className="lg:mx-1/12" dangerouslySetInnerHTML={{__html: props.data.paragraph}} />
		          </div>
		        </div>
		        <div className="w-full lg:w-1/2">
	            <div className="lg:mx-1/12">
	              <div className="w-full hidden lg:flex lg:justify-end pb-8">
	                <a href="mailto:hello@amicisgroup.co.uk" className="uppercase tracking-widest text-darkblue text-right"><span>hello@amicisgroup.co.uk</span></a>
	              </div>
	              <div className="w-full hidden lg:flex lg:justify-end">
	                <a href="https://twitter.com/AmicisGroup" target="_blank" rel="noreferrer"><svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="44.354" height="36.047" viewBox="0 0 44.354 36.047">
	                  <path id="Path_148" data-name="Path 148" d="M944.376-43.4c16.738,0,25.891-13.867,25.891-25.892,0-.394-.008-.786-.026-1.176a18.518,18.518,0,0,0,4.54-4.712,18.172,18.172,0,0,1-5.226,1.433,9.128,9.128,0,0,0,4-5.034,18.249,18.249,0,0,1-5.778,2.209,9.091,9.091,0,0,0-6.643-2.875,9.1,9.1,0,0,0-9.1,9.1,9.053,9.053,0,0,0,.236,2.075,25.835,25.835,0,0,1-18.757-9.508,9.069,9.069,0,0,0-1.233,4.574,9.093,9.093,0,0,0,4.05,7.575,9.039,9.039,0,0,1-4.122-1.139c0,.038,0,.076,0,.116a9.1,9.1,0,0,0,7.3,8.921,9.121,9.121,0,0,1-2.4.32,9.068,9.068,0,0,1-1.71-.164,9.109,9.109,0,0,0,8.5,6.32,18.258,18.258,0,0,1-11.3,3.9,18.366,18.366,0,0,1-2.171-.127A25.76,25.76,0,0,0,944.376-43.4" transform="translate(-930.427 79.451)" fill="#f2f2f2"/>
	                </svg></a>
	                <a href="https://www.linkedin.com/company/amicis-group-limited/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="36.168" height="36.14" viewBox="0 0 36.168 36.14">
	                  <path id="Path_152" data-name="Path 152" d="M-1116.281,1061.288c5.133,0,10.267.015,15.4-.01a2.645,2.645,0,0,1,2.657,2.176,2.662,2.662,0,0,1,.032.4q0,15.5,0,30.995a2.573,2.573,0,0,1-2.455,2.563c-.09,0-.181,0-.271,0h-30.732a2.544,2.544,0,0,1-2.6-1.855,2.778,2.778,0,0,1-.109-.763q-.008-15.447,0-30.893a2.561,2.561,0,0,1,2.574-2.614c1.241-.015,2.482,0,3.723,0Zm1.211,15.866c0-.721-.013-1.34.006-1.958.009-.3-.075-.412-.4-.408q-2.216.025-4.433,0c-.352,0-.432.109-.432.443q.014,8.238,0,16.477c0,.336.087.453.435.449q2.3-.024,4.6,0c.342,0,.437-.1.436-.443q-.021-4.144,0-8.289a10.1,10.1,0,0,1,.14-1.712,2.688,2.688,0,0,1,1.992-2.428,4.8,4.8,0,0,1,1.2-.109,2.2,2.2,0,0,1,2.344,1.83,10.13,10.13,0,0,1,.233,2.172c.025,2.842.015,5.684,0,8.526,0,.33.085.458.437.454q2.3-.025,4.6,0c.327,0,.419-.1.417-.426q-.015-4.585,0-9.169a15.974,15.974,0,0,0-.349-3.722,5.11,5.11,0,0,0-2.808-3.832,7.513,7.513,0,0,0-5.078-.423A5.563,5.563,0,0,0-1115.07,1077.154Zm-8.529,6.29c0-2.751,0-5.5.006-8.253,0-.306-.084-.407-.4-.4q-2.334.023-4.668,0c-.306,0-.4.079-.4.4q.014,8.286,0,16.572c0,.328.119.4.412.4,1.534-.01,3.067,0,4.6,0,.451,0,.453,0,.453-.451Q-1123.6,1087.57-1123.6,1083.444Zm-2.725-10.967a3.12,3.12,0,0,0,3.137-3.124,3.137,3.137,0,0,0-3.147-3.154,3.122,3.122,0,0,0-3.132,3.163A3.112,3.112,0,0,0-1126.325,1072.477Z" transform="translate(1134.357 -1061.278)" fill="#f2f2f2"/>
	                </svg></a>
	              </div>
	            </div>
	          </div>
	        </div>
	        <form name="contact" method="POST" data-netlify="true" action="/thank-you">
	          <input type="hidden" name="form-name" value="contact" />
	          <div className="flex flex-wrap lg:mb-6">
	            <div className="w-full lg:w-1/2">
	            	<div class="lg:mx-1/12">
	              	<input className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none" id="name" name="name" type="text" placeholder="Name" required />
	              </div>
	            </div>
	            <div className="w-full lg:w-1/2">
	            	<div class="lg:mx-1/12">
	              	<input className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none" id="email" name="email" type="email" placeholder="Email" required />
	              </div>
	            </div>
	          </div>
	          <div className="flex flex-wrap lg:mb-6">
	            <div className="w-full lg:w-1/2">
	            	<div class="lg:mx-1/12">
	              	<input className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none" id="tel" name="tel" type="tel" placeholder="Phone" required />
	              </div>
	            </div>
	            <div className="w-full lg:w-1/2">
	            	<div class="lg:mx-1/12">
	              	<input className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none" id="company" name="company" type="text" placeholder="Company" required />
	              </div>
	            </div>
	          </div>
	          <div className="flex flex-wrap lg:mb-6">
	            <div className="w-full lg:w-1/2">
	            	<div class="lg:mx-1/12">
		              <label htmlFor="message" className="block w-full pb-2 text-darkblue uppercase tracking-widest">Message</label>
		              <textarea id="message" name="message" className="w-full border-2 border-pink mb-4 p-2 text-darkblue uppercase tracking-widest outline-none rounded-none" required></textarea>
		            </div>
	            </div>
	            <div className="w-full lg:w-1/2">
	            	<div class="lg:mx-1/12">
		              <label className="flex mb-4 lg:max-w-sm lg:pr-12 lg:pt-8">
		                <input className="mr-2 checkbox zoom" id="consent" name="consent" type="checkbox" value="yes" />
		                <span>I would like subscribe to updates from Amicis and understand the privacy policy.</span>
		              </label>
		            </div>
	            </div>
	          </div>
	          <div className="flex flex-wrap lg:mb-6">
	          	<div className="w-full lg:w-1/2">
	          		<div class="lg:mx-1/12">
	          			<button type="submit" className="bg-pink hover:bg-white text-white hover:text-pink border-4 border-pink uppercase font-bold px-12 py-3 text-lg tracking-widest w-full lg:w-auto block text-center lg:inline-block">Submit</button>
	          		</div>
	          	</div>
	          </div>
	        </form>
		    </div>
	    </div>
  	</section>
  )

}

export default Contact;