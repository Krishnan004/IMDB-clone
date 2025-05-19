import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
  return (
    <div className='bg-amber-100 dark:bg-amber-400 flex justify-center gap-4 text-gray-700 p-4'>
        <NavBarItem title="Trending" parameter="fetchTrending" />
        <NavBarItem title="Top Rated" parameter="fetchTopRated" />
    </div>
  )
}

export default NavBar