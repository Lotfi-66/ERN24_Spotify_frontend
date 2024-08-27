import React from 'react'
import { NavLink } from 'react-router-dom'
import { styleIcon } from '../constants/appConstant'

const NavLinks = ({marginTop, array}) => {
    return (
        <div className={marginTop}>
                        {array.map((item) => (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                end
                                className='flex flex-row items-center justify-start font-medium test-sm text-white hover:bg-green_06 p-3'
                            >
                                <item.icon style={styleIcon} className='mr-2' />
                                {item.title}
                            </NavLink>
                        ))}
                    </div>
    )
}

export default NavLinks