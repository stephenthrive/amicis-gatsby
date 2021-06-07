import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer id="footer" className="bg-darkblue">
      <div className="custom-container py-12 lg:pt-24 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <ul>
            <li className="mb-4">
              <a
                href="mailto:hello@amicisgroup.co.uk"
                className="uppercase tracking-widest text-pink md:text-xl transition hover:text-white"
              >
                <span>hello@amicisgroup.co.uk</span>
              </a>
            </li>
            <li className="mb-4">
              <Link
                to="/privacy-and-cookies"
                state={{ modal: true }}
                className="uppercase tracking-widest text-white md:text-xl transition hover:opacity-50"
              >
                <span>Privacy and cookies</span>
              </Link>
            </li>
            <li className="mb-8 md:mb-16">
              <Link
                to="/terms-and-conditions"
                state={{ modal: true }}
                className="uppercase tracking-widest text-white md:text-xl transition hover:opacity-50"
              >
                <span>Terms and Conditions</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-wrap items-end ">
            <div className="w-full flex md:w-1/2 mb-8 md:mb-16">
              <a
                href="https://twitter.com/AmicisGroup"
                target="_blank"
                rel="noreferrer"
                className="text-white transition hover:text-pink"
              >
                <svg
                  className="mr-4 w-8 md:w-9 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="49.535"
                  height="40.258"
                  viewBox="0 0 49.535 40.258"
                >
                  <path
                    id="Path_148"
                    data-name="Path 148"
                    d="M946.006-39.194c18.693,0,28.915-15.487,28.915-28.916,0-.44-.008-.878-.029-1.314a20.681,20.681,0,0,0,5.07-5.262,20.294,20.294,0,0,1-5.837,1.6,10.2,10.2,0,0,0,4.469-5.622,20.381,20.381,0,0,1-6.453,2.467,10.153,10.153,0,0,0-7.418-3.211A10.165,10.165,0,0,0,954.559-69.29a10.11,10.11,0,0,0,.264,2.318A28.852,28.852,0,0,1,933.875-77.59a10.128,10.128,0,0,0-1.377,5.108,10.155,10.155,0,0,0,4.523,8.46,10.094,10.094,0,0,1-4.6-1.272c0,.042,0,.085,0,.13a10.166,10.166,0,0,0,8.154,9.963,10.187,10.187,0,0,1-2.679.358,10.128,10.128,0,0,1-1.91-.183,10.173,10.173,0,0,0,9.494,7.058,20.39,20.39,0,0,1-12.623,4.351,20.511,20.511,0,0,1-2.425-.142,28.769,28.769,0,0,0,15.579,4.565"
                    transform="translate(-930.427 79.451)"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/amicis-group-limited/"
                target="_blank"
                rel="noreferrer"
                className="text-white transition hover:text-pink"
              >
                <svg
                  className="w-8 md:w-9 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40.393"
                  height="40.361"
                  viewBox="0 0 40.393 40.361"
                >
                  <path
                    id="Path_152"
                    data-name="Path 152"
                    d="M-1114.169,1061.289c5.733,0,11.466.017,17.2-.011a2.954,2.954,0,0,1,2.968,2.43,2.981,2.981,0,0,1,.036.449q0,17.308,0,34.615a2.874,2.874,0,0,1-2.741,2.863c-.1,0-.2,0-.3,0h-34.322a2.841,2.841,0,0,1-2.9-2.072,3.1,3.1,0,0,1-.121-.852q-.009-17.251,0-34.5a2.86,2.86,0,0,1,2.875-2.92c1.386-.017,2.772,0,4.158,0Zm1.352,17.719c0-.805-.014-1.5.006-2.187.01-.336-.083-.46-.443-.456q-2.475.027-4.951,0c-.393-.005-.483.122-.482.494q.016,9.2,0,18.4c0,.375.1.505.485.5q2.57-.027,5.14,0c.381,0,.488-.111.487-.5q-.024-4.628,0-9.257a11.276,11.276,0,0,1,.156-1.912,3,3,0,0,1,2.225-2.711,5.356,5.356,0,0,1,1.344-.122,2.461,2.461,0,0,1,2.617,2.043,11.308,11.308,0,0,1,.26,2.425c.028,3.174.016,6.348.005,9.522,0,.368.1.511.488.507q2.57-.027,5.14,0c.366,0,.468-.114.466-.475q-.017-5.12,0-10.24a17.845,17.845,0,0,0-.39-4.157,5.706,5.706,0,0,0-3.137-4.28,8.39,8.39,0,0,0-5.671-.473A6.213,6.213,0,0,0-1112.817,1079.008Zm-9.526,7.025c0-3.072,0-6.144.006-9.216,0-.341-.094-.455-.447-.451q-2.607.026-5.214,0c-.342,0-.449.089-.449.442q.015,9.254,0,18.508c0,.367.133.444.46.442,1.713-.011,3.425,0,5.138-.005.5,0,.505,0,.505-.5Q-1122.342,1090.641-1122.343,1086.033Zm-3.044-12.248a3.485,3.485,0,0,0,3.5-3.488,3.5,3.5,0,0,0-3.514-3.522,3.487,3.487,0,0,0-3.5,3.532A3.475,3.475,0,0,0-1125.386,1073.785Z"
                    transform="translate(1134.357 -1061.278)"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex md:justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="285.669"
            height="98.401"
            viewBox="0 0 285.669 98.401"
            className="w-32 sm:w-48 md:w-auto"
          >
            <g
              id="Group_287"
              data-name="Group 287"
              transform="translate(-20.136 -50.493)"
            >
              <path
                id="Path_219"
                data-name="Path 219"
                d="M142.726,52.637H159.84l13.943,22.624,13.939-22.624h17.116v58.439H188.724V77.515L173.783,100.39h-.336L158.589,77.682v33.394H142.726Z"
                transform="translate(-56.321 -0.974)"
                fill="#fff"
              />
              <rect
                id="Rectangle_22"
                data-name="Rectangle 22"
                width="16.279"
                height="58.439"
                transform="translate(155.966 51.663)"
                fill="#fff"
              />
              <path
                id="Path_220"
                data-name="Path 220"
                d="M308.775,81.049v-.168c0-17.03,13.105-30.388,30.8-30.388,11.94,0,19.619,5.009,24.8,12.19l-12.19,9.434c-3.337-4.175-7.179-6.847-12.772-6.847-8.181,0-13.943,6.93-13.943,15.445v.166c0,8.766,5.762,15.611,13.943,15.611,6.1,0,9.684-2.838,13.191-7.094l12.187,8.681c-5.51,7.6-12.939,13.191-25.881,13.191a29.675,29.675,0,0,1-30.136-30.221"
                transform="translate(-131.789 0)"
                fill="#fff"
              />
              <rect
                id="Rectangle_23"
                data-name="Rectangle 23"
                width="16.279"
                height="58.439"
                transform="translate(235.87 51.663)"
                fill="#fff"
              />
              <path
                id="Path_221"
                data-name="Path 221"
                d="M451.412,101.558l9.016-10.769a30.1,30.1,0,0,0,18.95,7.013c4.342,0,6.68-1.5,6.68-4.007v-.166c0-2.422-1.92-3.757-9.851-5.594-12.439-2.838-22.04-6.344-22.04-18.366V69.5c0-10.853,8.6-18.7,22.623-18.7,9.934,0,17.7,2.671,24.044,7.765L492.736,70c-5.343-3.757-11.185-5.761-16.362-5.761-3.925,0-5.846,1.669-5.846,3.756v.167c0,2.671,2.006,3.839,10.1,5.676,13.441,2.923,21.789,7.264,21.789,18.2v.168c0,11.937-9.432,19.033-23.625,19.033-10.353,0-20.2-3.256-27.384-9.684"
                transform="translate(-196.616 -0.139)"
                fill="#fff"
              />
              <path
                id="Path_222"
                data-name="Path 222"
                d="M98.714,111.249,71.22,53.018h-18.4l27.493,58.231Z"
                transform="translate(-15.461 -1.148)"
                fill="#fff"
              />
              <path
                id="Path_223"
                data-name="Path 223"
                d="M22.725,111.682H39.753L31.239,93.649Z"
                transform="translate(-1.782 -19.614)"
                fill="#e2003a"
              />
              <path
                id="Path_252"
                data-name="Path 252"
                d="M17.842-1.388A13.579,13.579,0,0,1,11.045.34a9.288,9.288,0,0,1-7.031-2.8,10.283,10.283,0,0,1-2.683-7.42,10.559,10.559,0,0,1,2.981-7.739,10.161,10.161,0,0,1,7.554-3.023,12.856,12.856,0,0,1,5.565,1.076v2.634A10.687,10.687,0,0,0,11.6-18.493,7.289,7.289,0,0,0,6-16.143a8.6,8.6,0,0,0-2.181,6.089A8.6,8.6,0,0,0,5.848-4a7.1,7.1,0,0,0,5.494,2.2,8.489,8.489,0,0,0,4.121-.949V-8.439H11.017v-2.152h6.825ZM54.514,0H51.682l-3.4-5.692a12.4,12.4,0,0,0-.906-1.352,5.166,5.166,0,0,0-.9-.913,3.114,3.114,0,0,0-.991-.517,4.076,4.076,0,0,0-1.2-.163H42.336V0H39.957V-20.306h6.061a8.637,8.637,0,0,1,2.457.333,5.5,5.5,0,0,1,1.954,1.012,4.7,4.7,0,0,1,1.3,1.692,5.611,5.611,0,0,1,.467,2.372,5.711,5.711,0,0,1-.319,1.947,5.085,5.085,0,0,1-.906,1.579,5.493,5.493,0,0,1-1.416,1.182,7.229,7.229,0,0,1-1.862.758v.057a4.283,4.283,0,0,1,.885.517,4.87,4.87,0,0,1,.715.687,9.1,9.1,0,0,1,.673.9q.333.5.743,1.168ZM42.336-18.153v7.363h3.229a4.9,4.9,0,0,0,1.65-.269,3.819,3.819,0,0,0,1.31-.772,3.5,3.5,0,0,0,.864-1.232A4.124,4.124,0,0,0,49.7-14.7a3.183,3.183,0,0,0-1.055-2.542,4.532,4.532,0,0,0-3.052-.913ZM82.6.34a8.913,8.913,0,0,1-6.917-2.846,10.557,10.557,0,0,1-2.6-7.406,11.185,11.185,0,0,1,2.648-7.816,9.248,9.248,0,0,1,7.208-2.917,8.712,8.712,0,0,1,6.776,2.832,10.6,10.6,0,0,1,2.57,7.406,11.222,11.222,0,0,1-2.634,7.859A9.077,9.077,0,0,1,82.6.34Zm.17-18.833a6.547,6.547,0,0,0-5.2,2.308,8.935,8.935,0,0,0-2,6.061,9,9,0,0,0,1.947,6.039A6.35,6.35,0,0,0,82.6-1.8a6.667,6.667,0,0,0,5.268-2.181,8.912,8.912,0,0,0,1.926-6.1A9.312,9.312,0,0,0,87.929-16.3,6.409,6.409,0,0,0,82.775-18.493Zm45.763,10.28q0,8.553-7.717,8.553-7.392,0-7.392-8.227V-20.306h2.379V-8.043q0,6.245,5.268,6.245,5.083,0,5.083-6.032V-20.306h2.379Zm24.848.538V0h-2.379V-20.306h5.579a7.364,7.364,0,0,1,5.048,1.586,5.663,5.663,0,0,1,1.791,4.475,6.154,6.154,0,0,1-1.99,4.729,7.6,7.6,0,0,1-5.374,1.841Zm0-10.479v8.326h2.492a5.572,5.572,0,0,0,3.76-1.126,3.985,3.985,0,0,0,1.3-3.179q0-4.021-4.758-4.021Z"
                transform="translate(18.805 148.554)"
                fill="#e2003a"
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer
