import React from "react"

const TopHeader = () => {
  return (
      <section className="bg-lightgray">
      	<ul className="custom-container py-2 flex justify-center sm:justify-end">
	      	<li className="ml-2 sm:ml-6 border-l border-pink leading-none"><span class="pl-2 sm:pl-6"><a href="mailto:hello@amicisgroup.co.uk" className="uppercase font-light tracking-widest text-darkblue hover:text-pink text-xs sm:text-sm border-b border-lightgray hover:border-darkblue">hello@amicisgroup.co.uk</a></span></li>
	      </ul>
      </section>
  )

}

export default TopHeader;