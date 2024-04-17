import React from 'react'

function AboutCard() {
  return (
      
      <div className="px-6 py-4 ">

    <div className="font-bold text-xl mb-2">Front End Developer</div>

    <p className="text-gray-700 text-base mb-2">Interview Given: 2 (Rating: 4/5)</p>
    <p className="text-gray-700 text-base mb-2">Interview Taken: 3 (Rating: 4.5/5)</p>
    <p className="text-gray-700 text-base mb-2">Interview Credits: 5</p>
    <p className="text-gray-700 text-base mb-2">Upcoming Interviews: 1</p>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
      Apply for Real Interview
    </button>

  </div>


  )
}

export default AboutCard