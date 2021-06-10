import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/9501af31-ee62-44ae-bf39-e562c77928e8",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <section id="contact" className="bg-white text-darkblue">
      <div className="custom-container flex pt-12">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-16 lg:px-20 py-6 md:py-12 lg:py-24 shadowXl">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div>
                <div className="flex">
                  <div className="mr-4 md:mr-8 lg:mr-0 lg:w-16 lg:-ml-4">
                    <div className="w-4px bg-pink h-full lg:mx-auto"></div>
                  </div>
                  <div className="w-10/12 lg:mr-1/12">
                    <h3 className="flex font-bold text-2xl md:text-4xl leading-tight">
                      Take control of cyber threat
                    </h3>
                  </div>
                </div>
                <div className="lg:mx-1/12">
                  <p>
                    Get in touch today and together, we’ll build cyber
                    resilience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:mx-1/12">
                <div className="w-full hidden lg:flex lg:justify-end pb-8">
                  <a
                    href="mailto:hello@amicisgroup.co.uk"
                    className="uppercase tracking-widest text-pink text-right"
                  >
                    <span>hello@amicisgroup.co.uk</span>
                  </a>
                </div>
                <div className="w-full hidden lg:flex lg:justify-end">
                  <a
                    href="https://twitter.com/AmicisGroup"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightgray transition hover:text-darkblue"
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
                    className="text-lightgray transition hover:text-darkblue"
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
          </div>
          <form onSubmit={handleOnSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-wrap lg:mb-6">
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <input
                    className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <input
                    className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap lg:mb-6">
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <input
                    className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none"
                    id="tel"
                    name="tel"
                    type="tel"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <input
                    className="w-full border-b-2 border-pink mb-4 pb-2 placeholder-darkblue uppercase tracking-widest outline-none rounded-none"
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap lg:mb-6">
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <label
                    htmlFor="message"
                    className="block w-full pb-2 text-darkblue uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border-2 border-pink mb-4 p-2 text-darkblue uppercase tracking-widest outline-none rounded-none"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <label className="flex mb-4 lg:max-w-sm lg:pr-12 lg:pt-8">
                    <input
                      className="mr-2 checkbox zoom"
                      id="consent"
                      name="consent"
                      type="checkbox"
                      value="yes"
                    />
                    <span>
                      I would like subscribe to updates from Amicis and
                      understand the privacy policy.
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap lg:mb-6">
              <div className="w-full lg:w-1/2">
                <div className="lg:mx-1/12">
                  <button
                    type="submit"
                    className="bg-pink hover:bg-white text-white hover:text-pink border-4 border-pink uppercase font-bold px-12 py-3 text-lg tracking-widest w-full lg:w-auto block text-center lg:inline-block"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
