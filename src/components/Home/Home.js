import React,{useState} from 'react'
import './cs.css'
import im1 from './1.svg'

function Home(props) {
    const [open,setOpen] = useState(true)
    const do_menu=()=>{
        setOpen(!open)
        props.onmenu(open)
    }
    return (
        <div className='all'>
            <div className='navbarr'>
                <h2>Khaled Portfolio</h2>
                <i className='a1'></i>
                <i className='a2'></i>
                <i className='a3'></i>
                <i className='a4'></i>
                <i className='a5'></i>
                <i className='a6'></i>
                <i className='a7'></i>
                <i className='a8'></i>
                <i className='a9'></i>
                <i className='menu' onClick={()=>do_menu()}><iconify-icon icon="ic:baseline-menu" width="50" height="50"></iconify-icon></i>
                <div>
                    <ul className='nname'>
                        <li><a className='itsme' href='#aboutid'>About</a></li>
                        <li><a className='itsme' href='#projectid'>Project</a></li>
                        <li><a className='itsme' href='#contactid'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='con'>
                <p>
                    I am an aspiring Full Stack Software Developer who loves to work on web applications. I'm also passionate about learning new tech stacks.
                </p>
                <img src={im1} alt='khaled'/>
            </div>
        </div>
        )
}

export default Home
