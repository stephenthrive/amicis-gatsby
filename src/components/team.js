import React from "react"
import BoardType from "../components/boardType.js"

const Team = props => {
  return (
    <section id="team" className="relative bg-darkblue">
      <div className="custom-container py-12 lg:py-24">
        <div className="mb-8 md:mb-16">
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
        <div className="space-y-16">
          {props.data.board.map((item, index) => (
            <BoardType key={index} board={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
