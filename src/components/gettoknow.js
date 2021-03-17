import React from "react"
import twitter1 from '../images/twitter1.png'
import twitter2 from '../images/twitter2.png'
import twitter3 from '../images/twitter3.png'

const GetToKnow = (props) => {

  return (
    <section id="gettoknow" className="bg-darkblue text-white">
      <div className="custom-container flex">
        <div className="w-full flex flex-wrap my-8 md:my-16 lg:my-24">
          <div className="w-5/6 lg:w-1/2">
            <div>
              <div className="flex font-bold text-2xl md:text-4xl leading-tight">
                <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                  <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                </div>
                {props.data.title && (
                  <h3 class="w-10/12 lg:mr-1/12 lg:pl-2">{props.data.title}</h3>
                )}
              </div>
            </div>
          </div>
          <div className="w-1/6 lg:w-1/2 flex justify-end items-start">
            <div className="flex items-center">
              <a href="https://twitter.com/AmicisGroup" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.282 19.734" className="w-6 lg:w-9 transition fill-current text-lightgray hover:text-pink">
                <path id="Path_148" data-name="Path 148" d="M938.064-59.717a14.078,14.078,0,0,0,14.174-14.175c0-.216,0-.43-.014-.644a10.137,10.137,0,0,0,2.485-2.58,9.948,9.948,0,0,1-2.861.785,5,5,0,0,0,2.191-2.756,9.991,9.991,0,0,1-3.163,1.209,4.977,4.977,0,0,0-3.637-1.574,4.983,4.983,0,0,0-4.983,4.981,4.959,4.959,0,0,0,.129,1.136,14.143,14.143,0,0,1-10.269-5.205,4.965,4.965,0,0,0-.675,2.5,4.978,4.978,0,0,0,2.217,4.147,4.948,4.948,0,0,1-2.257-.623c0,.021,0,.042,0,.064a4.983,4.983,0,0,0,4,4.884,4.994,4.994,0,0,1-1.313.175,4.966,4.966,0,0,1-.936-.09,4.987,4.987,0,0,0,4.654,3.46,10,10,0,0,1-6.188,2.133,10.055,10.055,0,0,1-1.189-.069,14.1,14.1,0,0,0,7.637,2.238" transform="translate(-930.427 79.451)" />
              </svg></a>
              <a href="https://www.linkedin.com/company/amicis-group-limited" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.801 19.785" className="w-6 lg:w-9 ml-2 lg:ml-5 transition fill-current text-lightgray hover:text-pink">
                <path id="Path_152" data-name="Path 152" d="M-1124.461,1061.283c2.81,0,5.621.008,8.431-.006a1.448,1.448,0,0,1,1.455,1.191,1.478,1.478,0,0,1,.018.22q0,8.484,0,16.968a1.409,1.409,0,0,1-1.344,1.4c-.049,0-.1,0-.148,0h-16.825a1.393,1.393,0,0,1-1.421-1.016,1.52,1.52,0,0,1-.06-.418q0-8.456,0-16.913a1.4,1.4,0,0,1,1.409-1.431c.679-.008,1.359,0,2.038,0Zm.663,8.686c0-.395-.007-.734,0-1.072,0-.165-.041-.225-.217-.224q-1.213.013-2.427,0c-.193,0-.237.06-.236.242q.008,4.51,0,9.02c0,.184.047.248.238.246q1.26-.013,2.52,0c.187,0,.239-.054.239-.243q-.012-2.269,0-4.538a5.532,5.532,0,0,1,.076-.937,1.472,1.472,0,0,1,1.091-1.329,2.618,2.618,0,0,1,.659-.06,1.207,1.207,0,0,1,1.283,1,5.539,5.539,0,0,1,.128,1.189c.014,1.556.008,3.112,0,4.667,0,.181.047.251.239.249q1.26-.014,2.52,0c.179,0,.229-.056.229-.233q-.008-2.51,0-5.02a8.747,8.747,0,0,0-.191-2.038,2.8,2.8,0,0,0-1.538-2.1,4.114,4.114,0,0,0-2.78-.232A3.046,3.046,0,0,0-1123.8,1069.969Zm-4.67,3.444c0-1.506,0-3.012,0-4.518,0-.167-.046-.223-.219-.221q-1.278.012-2.556,0c-.167,0-.22.044-.22.217q.008,4.536,0,9.073c0,.18.065.218.226.217.84-.005,1.679,0,2.519,0,.247,0,.248,0,.248-.247Q-1128.468,1075.672-1128.468,1073.413Zm-1.492-6a1.708,1.708,0,0,0,1.717-1.71,1.717,1.717,0,0,0-1.723-1.727,1.709,1.709,0,0,0-1.715,1.732A1.7,1.7,0,0,0-1129.96,1067.409Z" transform="translate(1134.357 -1061.278)" />
              </svg></a>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container flex">
        <div className="flex flex-wrap mb-8 md:mb-16 lg:mb-24 justify-center md:-mx-3">
          <div className="custom-cols mb-6 bg-white rounded-md md:mx-3">
            <div className="text-darkblue">
              <img src={twitter1} alt="twitter 1" className="w-full mb-6 md:mb-8 lg:mb-0 rounded-t-md" />
              <div className="relative px-4 py-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.782" height="20.953" viewBox="0 0 25.782 20.953" className="absolute right-0 mr-4">
                  <path id="Path_255" data-name="Path 255" d="M938.535-58.5a14.948,14.948,0,0,0,15.05-15.05c0-.229,0-.457-.015-.684a10.764,10.764,0,0,0,2.639-2.739,10.563,10.563,0,0,1-3.038.833,5.306,5.306,0,0,0,2.326-2.926,10.608,10.608,0,0,1-3.359,1.284,5.284,5.284,0,0,0-3.861-1.671,5.291,5.291,0,0,0-5.29,5.289,5.261,5.261,0,0,0,.137,1.206,15.017,15.017,0,0,1-10.9-5.527,5.272,5.272,0,0,0-.717,2.659,5.286,5.286,0,0,0,2.354,4.4,5.254,5.254,0,0,1-2.4-.662c0,.022,0,.044,0,.068a5.291,5.291,0,0,0,4.244,5.185,5.3,5.3,0,0,1-1.394.186,5.271,5.271,0,0,1-.994-.1,5.3,5.3,0,0,0,4.942,3.674,10.613,10.613,0,0,1-6.57,2.265,10.676,10.676,0,0,1-1.262-.074,14.974,14.974,0,0,0,8.108,2.376" transform="translate(-930.427 79.451)" fill="#1da1f2" />
                </svg>
                <div className="flex mb-4">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                    <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                  </div>
                  <div className="w-10/12 lg:mr-1/12 text-darkblue">
                    <h3 className="font-bold text-2xl md:text-3xl leading-tight">Amicis</h3>
                    <div className="text-lightergray">10th Feb, 2021</div>
                  </div>
                </div>
                <div class="lg:mx-1/12">
                  <div className="pb-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. #CyberSecurity
                  </div>
                  <div>Read more…</div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-cols mb-6 bg-white rounded-md md:mx-3">
            <div className="text-darkblue">
              <img src={twitter2} alt="twitter 2" className="w-full mb-6 md:mb-8 lg:mb-0 rounded-t-md" />
              <div className="relative px-4 py-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20.969" height="20.953" viewBox="0 0 20.969 20.953" className="absolute right-0 mr-4">
                  <path id="Path_257" data-name="Path 257" d="M-1123.877,1061.284c2.976,0,5.953.009,8.929-.006a1.533,1.533,0,0,1,1.541,1.261,1.541,1.541,0,0,1,.019.233q0,8.985,0,17.97a1.492,1.492,0,0,1-1.423,1.486c-.052,0-.1,0-.157,0h-17.818a1.475,1.475,0,0,1-1.505-1.075,1.614,1.614,0,0,1-.063-.442q0-8.956,0-17.911a1.485,1.485,0,0,1,1.492-1.516c.72-.009,1.439,0,2.159,0Zm.7,9.2c0-.418-.007-.777,0-1.135.005-.174-.043-.239-.23-.237q-1.285.014-2.57,0c-.2,0-.251.063-.25.257q.008,4.776,0,9.553c0,.195.05.262.252.261q1.334-.014,2.668,0c.2,0,.254-.058.253-.257q-.012-2.4,0-4.806a5.853,5.853,0,0,1,.081-.993,1.558,1.558,0,0,1,1.155-1.408,2.772,2.772,0,0,1,.7-.063,1.278,1.278,0,0,1,1.359,1.061,5.87,5.87,0,0,1,.135,1.259c.015,1.648.008,3.3,0,4.943,0,.191.049.266.253.263q1.334-.014,2.668,0c.19,0,.243-.059.242-.247q-.009-2.658,0-5.316a9.263,9.263,0,0,0-.2-2.158,2.963,2.963,0,0,0-1.628-2.222,4.357,4.357,0,0,0-2.944-.245A3.225,3.225,0,0,0-1123.175,1070.482Zm-4.945,3.647c0-1.595,0-3.19,0-4.785,0-.177-.049-.236-.232-.234q-1.353.013-2.707,0c-.177,0-.233.046-.233.229q.008,4.8,0,9.608c0,.19.069.231.239.229.889-.005,1.778,0,2.667,0,.262,0,.262,0,.262-.261Q-1128.12,1076.522-1128.12,1074.129Zm-1.58-6.359a1.809,1.809,0,0,0,1.819-1.811,1.819,1.819,0,0,0-1.824-1.828,1.81,1.81,0,0,0-1.816,1.834A1.8,1.8,0,0,0-1129.7,1067.771Z" transform="translate(1134.357 -1061.278)" fill="#0e76a8"/>
                </svg>
                <div className="flex mb-4">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                    <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                  </div>
                  <div className="w-10/12 lg:mr-1/12 text-darkblue">
                    <h3 className="font-bold text-2xl md:text-3xl leading-tight">Amicis</h3>
                    <div className="text-lightergray">10th Feb, 2021</div>
                  </div>
                </div>
                <div class="lg:mx-1/12">
                  <div className="pb-4">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div>Read more…</div>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-cols mb-6 bg-white rounded-md md:mx-3">
            <div className="text-darkblue">
              <img src={twitter3} alt="twitter 3" className="w-full mb-6 md:mb-8 lg:mb-0 rounded-t-md" />
              <div className="relative px-4 py-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.782" height="20.953" viewBox="0 0 25.782 20.953" className="absolute right-0 mr-4">
                  <path id="Path_255" data-name="Path 255" d="M938.535-58.5a14.948,14.948,0,0,0,15.05-15.05c0-.229,0-.457-.015-.684a10.764,10.764,0,0,0,2.639-2.739,10.563,10.563,0,0,1-3.038.833,5.306,5.306,0,0,0,2.326-2.926,10.608,10.608,0,0,1-3.359,1.284,5.284,5.284,0,0,0-3.861-1.671,5.291,5.291,0,0,0-5.29,5.289,5.261,5.261,0,0,0,.137,1.206,15.017,15.017,0,0,1-10.9-5.527,5.272,5.272,0,0,0-.717,2.659,5.286,5.286,0,0,0,2.354,4.4,5.254,5.254,0,0,1-2.4-.662c0,.022,0,.044,0,.068a5.291,5.291,0,0,0,4.244,5.185,5.3,5.3,0,0,1-1.394.186,5.271,5.271,0,0,1-.994-.1,5.3,5.3,0,0,0,4.942,3.674,10.613,10.613,0,0,1-6.57,2.265,10.676,10.676,0,0,1-1.262-.074,14.974,14.974,0,0,0,8.108,2.376" transform="translate(-930.427 79.451)" fill="#1da1f2" />
                </svg>
                <div className="flex mb-4">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-1/12">
                    <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                  </div>
                  <div className="w-10/12 lg:mr-1/12 text-darkblue">
                    <h3 className="font-bold text-2xl md:text-3xl leading-tight">Amicis</h3>
                    <div className="text-lightergray">10th Feb, 2021</div>
                  </div>
                </div>
                <div class="lg:mx-1/12">
                  <div className="pb-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. #CyberSecurity
                  </div>
                  <div>Read more…</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetToKnow;