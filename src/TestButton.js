import React from 'react'

function TestButton({ label, onClick, type }) {
    const buttonStyles =
    'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-indigo-500 hover:to-purple-500 px-6 py-3 rounded-full shadow-md focus:outline-none focus:ring focus:border-blue-300';
  return (
    <div>
      <button className={buttonStyles} onClick={onClick} type={type}>
      {label}
    </button>
    </div>
  )
}

export default TestButton
