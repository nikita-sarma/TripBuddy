import { Plane } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Link to={"/"} className=''>
        <div>
            <Plane className='w-6 h-6' />
        </div>
      </Link>
    </header>
  )
}

export default Header
