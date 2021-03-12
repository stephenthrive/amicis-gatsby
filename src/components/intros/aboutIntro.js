import React from "react"
import {Link} from "gatsby"

const aboutIntro = () => {
  return (
    <section className="custom-container flex text-darkblue">
      <div className="w-full flex flex-wrap my-8 md:my-16 lg:my-24">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div>
            <div className="flex">
              <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                <div className="w-4px bg-pink h-full lg:mx-auto"></div>
              </div>
              <div class="w-10/12 lg:mr-1/12">
                <p className="text-md sm:text-xl lg:mb-8">Amicis help you take control of cyber threats, embedding the capabilities, processes, behaviours, and systems you need to weather potential disruption and pursue your goals.</p>
                <Link to="/services" className="btn hidden lg:inline-block">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div class="lg:mx-1/12">
            <p className="text-md sm:text-xl mb-6 md:mb-8">From security testing and consultancy to cyber security certification and training, we provide the level of support you need to take control of your cyber risk.</p>
            <div class="pt-4 md:pt-0">
              <Link to="/services" className="btn block md:inline-block lg:hidden">Our Services</Link>
            </div>
          </div>
        </div>
      </div>
    </section> 
  )

}

export default aboutIntro;