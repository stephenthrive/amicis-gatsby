import React, { useState } from "react"
import { Link } from "gatsby"

const MainMenu = () => {
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <section className="sticky top-0 z-50 bg-white border-b-8 border-pink ">
      <div className="custom-container py-8 flex flex-col sm:flex-row sm:items-center justify-between relative">
        <Link to="/">
          <svg
            className="w-32 sm:w-48"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 233.9 79.9"
          >
            <g id="Layer_1">
              <g id="Group_1338" transform="translate(-976 -1146.015)">
                <g id="Group_286" transform="translate(976 1146.015)">
                  <path
                    id="Path_219"
                    d="M53.8 1h14.1l11.4 18.6L90.8 1h14.1v48H91.6V21.4L79.3 40.2H79L66.8 21.5v27.4h-13V1z"
                    fill="#191d35"
                  />
                  <path
                    id="Rectangle_22"
                    d="M110.9 1h13.4v48h-13.4z"
                    fill="#191d35"
                  />
                  <path
                    id="Path_220"
                    d="M128.2 25.1V25C128.2 11 139 .1 153.5.1c9.8 0 16.1 4.1 20.4 10l-10 7.7c-2.7-3.4-5.9-5.6-10.5-5.6-6.7 0-11.4 5.7-11.4 12.7v.1c0 7.2 4.7 12.8 11.4 12.8 5 0 8-2.3 10.8-5.8l10 7.1c-4.5 6.2-10.6 10.8-21.2 10.8-13.5.2-24.5-10.5-24.7-24-.1-.3-.1-.5-.1-.8"
                    fill="#191d35"
                  />
                  <path
                    id="Rectangle_23"
                    d="M176.5 1h13.4v48h-13.4z"
                    fill="#191d35"
                  />
                  <path
                    id="Path_221"
                    d="M192.1 41.8l7.4-8.8c4.4 3.7 9.9 5.7 15.6 5.8 3.6 0 5.5-1.2 5.5-3.3v-.1c0-2-1.6-3.1-8.1-4.6-10.2-2.3-18.1-5.2-18.1-15.1v-.1c0-8.9 7.1-15.4 18.6-15.4 8.2 0 14.5 2.2 19.7 6.4l-6.6 9.4c-3.9-2.9-8.6-4.5-13.4-4.7-3.2 0-4.8 1.4-4.8 3.1v.1c0 2.2 1.6 3.2 8.3 4.7 11 2.4 17.9 6 17.9 14.9v.1c0 9.8-7.7 15.6-19.4 15.6-8.7 0-16.7-2.7-22.6-8"
                    fill="#191d35"
                  />
                  <path
                    id="Path_222"
                    d="M51.2 48.9L28.7 1.1H13.6l22.6 47.8h15z"
                    fill="#191d35"
                  />
                  <path
                    id="Path_223"
                    d="M.1 34.1h14l-7-14.8-7 14.8z"
                    class="st1"
                  />
                  <path
                    d="M0 71.6c0-4.4 3.2-8.4 8-8.4 2.6 0 4.3.8 5.9 2.1l-.8.9c-1.3-1.1-2.7-1.9-5.2-1.9-3.9 0-6.6 3.3-6.6 7.2 0 4.2 2.6 7.3 6.9 7.3 2 0 4-.9 5.1-1.8v-4.6H7.9v-1.1h6.5v6.2c-1.4 1.3-3.7 2.4-6.3 2.4C3 79.9 0 76.2 0 71.6zM32.5 63.5h6.8c2 0 3.6.6 4.5 1.6.8.8 1.2 1.8 1.2 3 0 2.7-2 4.2-4.7 4.6l5.3 6.9h-1.5L39 73h-5.3v6.7h-1.2V63.5zm6.7 8.4c2.7 0 4.7-1.4 4.7-3.7 0-2.2-1.7-3.5-4.6-3.5h-5.5v7.2h5.4zM62.3 71.6c0-4.4 3.2-8.4 8.1-8.4s8.1 3.9 8.1 8.3-3.2 8.3-8.1 8.3-8.1-3.8-8.1-8.2zm14.9 0c0-4-2.9-7.3-6.9-7.3s-6.8 3.2-6.8 7.2 2.9 7.2 6.9 7.2c4 .1 6.8-3.1 6.8-7.1zM96.1 72.9v-9.4h1.2v9.3c0 3.8 2 6 5.5 6 3.3 0 5.4-2 5.4-5.9v-9.4h1.2v9.3c0 4.6-2.7 7.1-6.6 7.1-4 0-6.7-2.5-6.7-7zM127.6 63.5h5.8c3.5 0 6 1.8 6 4.9 0 3.4-2.9 5.1-6.3 5.1h-4.3v6h-1.2v-16zm5.6 9c3 0 5-1.6 5-4 0-2.6-2-3.9-4.9-3.9h-4.6v7.9h4.5z"
                    fill="#e2033a"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <div>
          <div className="hidden sm:flex justify-end mb-5">
            <div className="flex">
              <a
                href="https://twitter.com/AmicisGroup"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24.282 19.734"
                  className="w-6 transition fill-current text-lightgray hover:text-darkblue"
                >
                  <path
                    id="Path_148"
                    data-name="Path 148"
                    d="M938.064-59.717a14.078,14.078,0,0,0,14.174-14.175c0-.216,0-.43-.014-.644a10.137,10.137,0,0,0,2.485-2.58,9.948,9.948,0,0,1-2.861.785,5,5,0,0,0,2.191-2.756,9.991,9.991,0,0,1-3.163,1.209,4.977,4.977,0,0,0-3.637-1.574,4.983,4.983,0,0,0-4.983,4.981,4.959,4.959,0,0,0,.129,1.136,14.143,14.143,0,0,1-10.269-5.205,4.965,4.965,0,0,0-.675,2.5,4.978,4.978,0,0,0,2.217,4.147,4.948,4.948,0,0,1-2.257-.623c0,.021,0,.042,0,.064a4.983,4.983,0,0,0,4,4.884,4.994,4.994,0,0,1-1.313.175,4.966,4.966,0,0,1-.936-.09,4.987,4.987,0,0,0,4.654,3.46,10,10,0,0,1-6.188,2.133,10.055,10.055,0,0,1-1.189-.069,14.1,14.1,0,0,0,7.637,2.238"
                    transform="translate(-930.427 79.451)"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/amicis-group-limited"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.801 19.785"
                  className="w-6 ml-3 transition fill-current text-lightgray hover:text-darkblue"
                >
                  <path
                    id="Path_152"
                    data-name="Path 152"
                    d="M-1124.461,1061.283c2.81,0,5.621.008,8.431-.006a1.448,1.448,0,0,1,1.455,1.191,1.478,1.478,0,0,1,.018.22q0,8.484,0,16.968a1.409,1.409,0,0,1-1.344,1.4c-.049,0-.1,0-.148,0h-16.825a1.393,1.393,0,0,1-1.421-1.016,1.52,1.52,0,0,1-.06-.418q0-8.456,0-16.913a1.4,1.4,0,0,1,1.409-1.431c.679-.008,1.359,0,2.038,0Zm.663,8.686c0-.395-.007-.734,0-1.072,0-.165-.041-.225-.217-.224q-1.213.013-2.427,0c-.193,0-.237.06-.236.242q.008,4.51,0,9.02c0,.184.047.248.238.246q1.26-.013,2.52,0c.187,0,.239-.054.239-.243q-.012-2.269,0-4.538a5.532,5.532,0,0,1,.076-.937,1.472,1.472,0,0,1,1.091-1.329,2.618,2.618,0,0,1,.659-.06,1.207,1.207,0,0,1,1.283,1,5.539,5.539,0,0,1,.128,1.189c.014,1.556.008,3.112,0,4.667,0,.181.047.251.239.249q1.26-.014,2.52,0c.179,0,.229-.056.229-.233q-.008-2.51,0-5.02a8.747,8.747,0,0,0-.191-2.038,2.8,2.8,0,0,0-1.538-2.1,4.114,4.114,0,0,0-2.78-.232A3.046,3.046,0,0,0-1123.8,1069.969Zm-4.67,3.444c0-1.506,0-3.012,0-4.518,0-.167-.046-.223-.219-.221q-1.278.012-2.556,0c-.167,0-.22.044-.22.217q.008,4.536,0,9.073c0,.18.065.218.226.217.84-.005,1.679,0,2.519,0,.247,0,.248,0,.248-.247Q-1128.468,1075.672-1128.468,1073.413Zm-1.492-6a1.708,1.708,0,0,0,1.717-1.71,1.717,1.717,0,0,0-1.723-1.727,1.709,1.709,0,0,0-1.715,1.732A1.7,1.7,0,0,0-1129.96,1067.409Z"
                    transform="translate(1134.357 -1061.278)"
                  />
                </svg>
              </a>
            </div>
          </div>
          <ul
            className={
              isActive
                ? "hidden sm:flex"
                : "flex flex-col sm:flex-row py-3 sm:py-0"
            }
          >
            <li className="leading-none">
              <Link
                to="/about"
                className="transition ease-in-out uppercase font-semibold tracking-widest text-darkblue hover:opacity-50 text-xl pb-1 border-white border-b-2 py-3 sm:pt-0 block sm:inline-block"
                activeClassName="text-pink"
              >
                About
              </Link>
            </li>
            <li className="leading-none sm:ml-6 sm:border-l-2 sm:border-pink sm:pl-6">
              <Link
                to="/training"
                className="uppercase font-semibold tracking-widest text-darkblue transition-all hover:opacity-50 text-xl pb-1 border-white border-b-2 py-3 sm:pt-0 block sm:inline-block"
                activeClassName="text-pink"
              >
                Training
              </Link>
            </li>
            <li className="leading-none sm:ml-6 sm:border-l-2 sm:border-pink sm:pl-6">
              <Link
                to="/news"
                className="uppercase font-semibold tracking-widest text-darkblue transition-all hover:opacity-50 text-xl pb-1 border-white border-b-2 py-3 sm:pt-0 block sm:inline-block"
                activeClassName="text-pink"
              >
                News
              </Link>
            </li>
            <li className="leading-none sm:ml-6 sm:border-l-2 sm:border-pink sm:pl-6">
              <Link
                to="/contact"
                className="uppercase font-semibold tracking-widest text-darkblue transition-all hover:opacity-50 text-xl pb-1 border-white border-b-2 py-3 sm:pt-0 block sm:inline-block"
                activeClassName="text-pink"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          className={
            isActive
              ? "sm:hidden absolute right-16 top-10 font-semibold border-white border-b-2"
              : "sm:hidden absolute right-16 top-10 font-semibold border-darkblue border-b-2"
          }
          onClick={handleToggle}
        >
          Menu
        </button>
      </div>
    </section>
  )
}

export default MainMenu
