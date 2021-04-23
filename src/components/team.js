import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Team = props => {
  const [isActive, setActive] = useState("false")

  const handleToggle = e => {
    e.preventDefault()
    setActive(!isActive)
  }

  return (
    <section id="team" className="bg-darkblue">
      <div className="custom-container py-12 lg:py-24">
        <div className="mb-8 md:mb-16 lg:mb-24">
          <div className="flex">
            <div className="mr-4 md:mr-8 lg:mr-0 lg:w-0.5/12">
              <div className="w-4px bg-pink h-full lg:mx-auto"></div>
            </div>
            <div className="w-10/12 lg:mr-1/12">
              {props.data.title && (
                <h3 className="font-bold text-3xl md:text-4xl leading-tight text-white">
                  {props.data.title}
                </h3>
              )}
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className={
              isActive
                ? "hidden absolute z-10 flex justify-between w-full p-12 bg-white"
                : "block absolute z-10 flex justify-between w-full p-12 bg-white"
            }
          >
            {props.data.profiles.map((profile, index) => (
              <>
                {index === 0 && (
                  <>
                    {/* <pre>{JSON.stringify(isActive, null, 2)}</pre> */}
                    <div className="w-4/12">
                      {profile.image && (
                        <GatsbyImage
                          image={getImage(profile.image.localFile)}
                          alt={profile.image.altText}
                          title={profile.image.title}
                          className="w-full h-full"
                        />
                      )}
                    </div>
                    <div className="w-7/12">
                      <div className="flex justify-between border-l-4 border-pink pl-8 mb-8">
                        <div>
                          {profile.name && (
                            <div className="uppercase tracking-widest text-lg font-bold">
                              {profile.name}
                            </div>
                          )}
                          {profile.title && (
                            <div
                              className="uppercase tracking-widest font-light"
                              dangerouslySetInnerHTML={{
                                __html: profile.title,
                              }}
                            />
                          )}
                        </div>
                        <a
                          href="#"
                          className="text-lg text-pink"
                          onClick={handleToggle}
                        >
                          X
                        </a>
                      </div>
                      {profile.content && (
                        <div
                          className="text-black"
                          dangerouslySetInnerHTML={{ __html: profile.content }}
                        />
                      )}
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            {props.data.profiles.map((profile, index) => (
              <div key={index} className="relative group">
                {profile.image && (
                  <GatsbyImage
                    image={getImage(profile.image.localFile)}
                    alt={profile.image.altText}
                    title={profile.image.title}
                    className="w-full h-full"
                  />
                )}

                <a
                  href="#"
                  onClick={handleToggle}
                  className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full text-center bg-darkblue bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100"
                >
                  {profile.name && (
                    <div className="text-white uppercase tracking-widest text-lg font-bold">
                      {profile.name}
                    </div>
                  )}
                  {profile.title && (
                    <div
                      className="text-white uppercase tracking-widest font-light"
                      dangerouslySetInnerHTML={{ __html: profile.title }}
                    />
                  )}
                  <span className="text-white">Read Bio</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
