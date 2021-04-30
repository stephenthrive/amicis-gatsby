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
            id="Component_39_3"
            data-name="Component 39 – 3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 201.674 69.22"
            className="w-32 sm:w-48"
          >
            <g
              id="Group_286"
              data-name="Group 286"
              transform="translate(-19.723 -50.493)"
            >
              <path
                id="Path_219"
                data-name="Path 219"
                d="M142.726,52.637h12.081l9.842,15.971,9.84-15.971h12.082V93.889H175.2V70.2L164.649,86.345h-.237L153.923,70.316V93.889h-11.2Z"
                transform="translate(-76.203 -1.318)"
                fill="#191d35"
              />
              <rect
                id="Rectangle_22"
                data-name="Rectangle 22"
                width="11.491"
                height="41.252"
                transform="translate(115.626 51.319)"
                fill="#191d35"
              />
              <path
                id="Path_220"
                data-name="Path 220"
                d="M308.775,72.062v-.119c0-12.022,9.251-21.451,21.745-21.451,8.428,0,13.849,3.536,17.5,8.6l-8.6,6.659c-2.356-2.947-5.068-4.833-9.016-4.833-5.775,0-9.842,4.892-9.842,10.9v.117c0,6.188,4.068,11.02,9.842,11.02,4.3,0,6.836-2,9.311-5.008l8.6,6.128c-3.889,5.363-9.134,9.311-18.269,9.311a20.947,20.947,0,0,1-21.273-21.333"
                transform="translate(-178.311 0)"
                fill="#191d35"
              />
              <rect
                id="Rectangle_23"
                data-name="Rectangle 23"
                width="11.491"
                height="41.252"
                transform="translate(172.03 51.319)"
                fill="#191d35"
              />
              <path
                id="Path_221"
                data-name="Path 221"
                d="M451.412,86.629l6.364-7.6a21.245,21.245,0,0,0,13.377,4.95c3.065,0,4.716-1.06,4.716-2.829v-.117c0-1.71-1.356-2.652-6.954-3.949-8.781-2-15.558-4.478-15.558-12.965V64c0-7.661,6.07-13.2,15.969-13.2,7.013,0,12.494,1.886,16.972,5.481l-5.716,8.074a20.682,20.682,0,0,0-11.549-4.066c-2.771,0-4.126,1.178-4.126,2.652v.118c0,1.886,1.416,2.71,7.132,4.007,9.488,2.063,15.381,5.128,15.381,12.847v.119c0,8.427-6.658,13.436-16.677,13.436-7.308,0-14.262-2.3-19.33-6.836"
                transform="translate(-266.022 -0.188)"
                fill="#191d35"
              />
              <path
                id="Path_222"
                data-name="Path 222"
                d="M85.217,94.123l-19.408-41.1H52.823l19.407,41.1Z"
                transform="translate(-20.919 -1.553)"
                fill="#191d35"
              />
              <path
                id="Path_223"
                data-name="Path 223"
                d="M22.725,106.378h12.02l-6.011-12.73Z"
                transform="translate(-2.411 -26.538)"
                fill="#e2003a"
              />
              <path
                id="Path_971"
                data-name="Path 971"
                d="M12.3-.957A9.365,9.365,0,0,1,7.617.234,6.405,6.405,0,0,1,2.769-1.7,7.092,7.092,0,0,1,.918-6.816a7.282,7.282,0,0,1,2.056-5.337,7.008,7.008,0,0,1,5.21-2.085,8.866,8.866,0,0,1,3.838.742v1.816A7.371,7.371,0,0,0,8-12.754a5.027,5.027,0,0,0-3.857,1.621,5.929,5.929,0,0,0-1.5,4.2,5.932,5.932,0,0,0,1.4,4.175A4.895,4.895,0,0,0,7.822-1.24a5.854,5.854,0,0,0,2.842-.654V-5.82H7.6V-7.3H12.3ZM37.6,0H35.643L33.3-3.926a8.55,8.55,0,0,0-.625-.933,3.563,3.563,0,0,0-.62-.63,2.148,2.148,0,0,0-.684-.356,2.811,2.811,0,0,0-.825-.112H29.2V0H27.557V-14h4.18a5.957,5.957,0,0,1,1.694.229,3.791,3.791,0,0,1,1.348.7,3.245,3.245,0,0,1,.894,1.167,3.87,3.87,0,0,1,.322,1.636,3.939,3.939,0,0,1-.22,1.343,3.507,3.507,0,0,1-.625,1.089,3.789,3.789,0,0,1-.977.815,4.985,4.985,0,0,1-1.284.522v.039a2.954,2.954,0,0,1,.61.356,3.359,3.359,0,0,1,.493.474,6.274,6.274,0,0,1,.464.62q.229.347.513.806ZM29.2-12.52v5.078h2.227a3.377,3.377,0,0,0,1.138-.186,2.634,2.634,0,0,0,.9-.532,2.414,2.414,0,0,0,.6-.85,2.844,2.844,0,0,0,.215-1.128,2.2,2.2,0,0,0-.728-1.753,3.125,3.125,0,0,0-2.1-.63ZM56.969.234A6.147,6.147,0,0,1,52.2-1.729a7.28,7.28,0,0,1-1.792-5.107,7.714,7.714,0,0,1,1.826-5.391A6.378,6.378,0,0,1,57.2-14.238a6.009,6.009,0,0,1,4.673,1.953,7.307,7.307,0,0,1,1.772,5.107,7.739,7.739,0,0,1-1.816,5.42A6.26,6.26,0,0,1,56.969.234Zm.117-12.988A4.515,4.515,0,0,0,53.5-11.162a6.162,6.162,0,0,0-1.377,4.18,6.205,6.205,0,0,0,1.343,4.165,4.379,4.379,0,0,0,3.5,1.577,4.6,4.6,0,0,0,3.633-1.5A6.146,6.146,0,0,0,61.93-6.953a6.422,6.422,0,0,0-1.289-4.287A4.42,4.42,0,0,0,57.086-12.754Zm31.561,7.09q0,5.9-5.322,5.9-5.1,0-5.1-5.674V-14h1.641v8.457q0,4.307,3.633,4.307,3.506,0,3.506-4.16V-14h1.641Zm17.137.371V0h-1.641V-14h3.848a5.078,5.078,0,0,1,3.481,1.094,3.905,3.905,0,0,1,1.235,3.086,4.244,4.244,0,0,1-1.372,3.262,5.242,5.242,0,0,1-3.706,1.27Zm0-7.227v5.742H107.5a3.843,3.843,0,0,0,2.593-.776,2.749,2.749,0,0,0,.894-2.192q0-2.773-3.281-2.773Z"
                transform="translate(18.805 119.478)"
                fill="#e2003a"
              />
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
                to="/cyber-resilience"
                className="uppercase font-semibold tracking-widest text-darkblue transition-all hover:opacity-50 text-xl pb-1 border-white border-b-2 py-3 sm:pt-0 block sm:inline-block"
                activeClassName="text-pink"
              >
                Cyber Resilience
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
