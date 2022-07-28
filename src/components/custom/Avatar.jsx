import React from 'react'

export default function Avatar({ img }) {
  return (
    <div className="flex items-center space-x-4">
      <img className="w-10 h-10 rounded-full" src={img} alt="" />
    </div>
  );
}
