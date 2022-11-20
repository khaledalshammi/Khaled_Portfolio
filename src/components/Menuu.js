import React from 'react'
import './menuee.css'

function Menuu(props) {
    const onclcl=()=>{
        props.onmenu(false)
    }
    return (
        <div className='menuee'>
            <div className='catch'>
                <i onClick={onclcl} className='ix'><iconify-icon icon="ph:x-bold"></iconify-icon></i>
            </div>
            <ul className='listmenu'>
                <li><a onClick={onclcl} className='itsme1' href='#aboutid'>About</a></li>
                <li><a onClick={onclcl} className='itsme1' href='#projectid'>Project</a></li>
                <li><a onClick={onclcl} className='itsme1' href='#contactid'>Contact</a></li>
            </ul>
        </div>
    )
}

export default Menuu
