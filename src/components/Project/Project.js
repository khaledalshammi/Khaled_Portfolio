import React from 'react'
import img1 from './f1.png'
import img2 from './f2.png'
import './pro.css'
function Project() {
    return (
        <div className='allpro' id='projectid'>
            <i className='a121'></i>
            <div className='ab'>
                <h2 className='about'>Projects</h2>
            </div>
            <div className='pro'>
                <div className='f1'>
                    <img className='f11' alt='khaled' src={img1}/>
                    <a href="https://github.com/khaledalshammi/Ecommerce-app"><h3>Code</h3></a>
                </div>
                <div className='f2'>
                    <img className='f22' alt='khaled' src={img2}/>
                    <a href="https://github.com/khaledalshammi/Django-React-Ecommerce-Website"><h3>Code</h3></a>
                </div>
            </div>
            <div className='aboutnav'>
                <i className='a5'></i>
                <i className='a6'></i>
                <i className='a7'></i>
                <i className='a8'></i>
                <i className='a9'></i>
            </div>
        </div>
    )
}

export default Project
