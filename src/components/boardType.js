import React, { useState, useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BioArrow from "../images/svg/bio-icon.inline.svg"
import Close from "../images/svg/close-icon.inline.svg"

const BoardType = props => {
  function useMediaQuery(query) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      const listener = () => {
        setMatches(media.matches)
      }
      media.addListener(listener)
      return () => media.removeListener(listener)
    }, [matches, query])

    return matches
  }

  let mobModal = useMediaQuery("(max-width: 767px)")
  let deskModal = useMediaQuery("(min-width: 768px)")

  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <div className="space-y-4">
      {props.board.profiles.map((profile, index) => (
        <>
          {deskModal && (
            <>
              {clicked === index && (
                <div
                  key={index}
                  className="block absolute top-0 z-10 w-full p-4 bg-white lg:flex lg:justify-between lg:items-start lg:p-12"
                >
                  <div className="lg:w-4/12">
                    {profile.image && (
                      <GatsbyImage
                        image={getImage(profile.image.localFile)}
                        alt={profile.image.altText}
                        title={profile.image.title}
                        className="block w-full h-full mb-8"
                      />
                    )}
                  </div>
                  <div className="lg:w-7/12 lg:overflow-scroll">
                    <div className="flex justify-between items-center border-l-4 border-pink pl-4 mb-8 lg:pl-8 ">
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
                      <button
                        onClick={() => toggle(index)}
                        className="block w-5 h-5 focus:outline-none"
                      >
                        <Close />
                      </button>
                    </div>
                    {profile.content && (
                      <div
                        className="text-black"
                        dangerouslySetInnerHTML={{
                          __html: profile.content,
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ))}
      <h4 className="text-lg md:text-xl leading-tight text-white">
        {props.board.boardTitle}
      </h4>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {props.board.profiles.map((profile, index) => (
          <div key={index} className="relative group">
            {mobModal && (
              <>
                {clicked === index && (
                  <div className="block absolute z-10 w-full p-4 bg-white lg:h-full md:flex md:justify-between md:p-12">
                    <div className="md:w-4/12">
                      {profile.image && (
                        <GatsbyImage
                          image={getImage(profile.image.localFile)}
                          alt={profile.image.altText}
                          title={profile.image.title}
                          className="block w-full h-full mb-8"
                        />
                      )}
                    </div>
                    <div className="md:w-7/12">
                      <div className="flex justify-between items-center border-l-4 border-pink pl-4 mb-8 lg:pl-8 ">
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
                        <button
                          onClick={() => toggle(index)}
                          className="block w-5 h-5"
                        >
                          <Close />
                        </button>
                      </div>
                      {profile.content && (
                        <div
                          className="text-black"
                          dangerouslySetInnerHTML={{
                            __html: profile.content,
                          }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
            {profile.image && (
              <GatsbyImage
                image={getImage(profile.image.localFile)}
                alt={profile.image.altText}
                title={profile.image.title}
                className="w-full h-full"
              />
            )}
            <button
              key={index}
              onClick={() => toggle(index)}
              className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full p-4 text-center bg-darkblue bg-opacity-50 opacity-0 cursor-pointer group-hover:opacity-100 focus:outline-none"
            >
              {profile.name && (
                <span className="text-white uppercase tracking-widest text-lg font-bold mb-2">
                  {profile.name}
                </span>
              )}
              {profile.title && (
                <span
                  className="text-white font-light uppercase tracking-widest mb-6"
                  dangerouslySetInnerHTML={{ __html: profile.title }}
                />
              )}
              <span className="flex items-center text-sm text-white uppercase">
                Read Bio <BioArrow className="ml-2" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardType
