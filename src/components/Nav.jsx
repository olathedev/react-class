import React from 'react'
import { FaMoon, FaSearch } from 'react-icons/fa'

const Nav = () => {
  return (
    <nav className='w-full flex justify-between py-3 bg-primary px-4 text-white'>
        <div>
            <h2 className='text-xl font-bold'>Movie-Hive</h2>
        </div>

        <div>
            <ul className='flex gap-4'>
                <li>Movies</li>
                <li>TV Series</li>
                <li>People</li>
            </ul>
        </div>


        <div className='flex gap-3'>
            <FaSearch />

            <FaMoon />
        </div>
    </nav>
  )
}

export default Nav