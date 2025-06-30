import React from 'react'
import { NavLink } from 'react-router-dom'

function BtnCmp({title, nav}) {
  return (
    <NavLink to={nav} className='hover:bg-niucloxBlack text-niucloxWhite rounded-2xl group duration-300 cursor-pointer '>
        <div className='px-4 py-1 border-1 text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] border-niucloxBlack rounded-2xl text-niucloxBlack group-hover:order-none group-hover:text-niucloxWhite duration-300'>
            {title}
        </div>
    </NavLink>
  )
}

export default BtnCmp