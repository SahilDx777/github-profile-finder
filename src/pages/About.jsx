import React from 'react'

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">Github Finder</h1>
        <p className="mb-4 text-2xl font-light">
            A React app to search Github profiles and see profiles deatails. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sapiente.
            <a href="#">
                {''}
                React Front To Back
            </a> {''}
            Study Hard
            <br />
            <strong>
                <a className='font-bold text-white' href="https://www.linkedin.com/in/sahil-saxena-5224a723a/">Sahil Saxena</a>
            </strong>
        </p>
        <p className="text-lg text-gray-400">
            Version <span className="text-white">69.6.9</span>
        </p>
        <p className="text-lg text-gray-400">
            Layout By:
            <a href="#" className='text-white'>
                Sahil
            </a>
        </p>
    </div>
  )
}

export default About