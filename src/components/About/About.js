import React from 'react'
import './about.css'

function About() {
    return (
        <div className='allab' id='aboutid'>
            <div className='ab'>
                <h2 className='about'>About</h2>
            </div>
            <div className='content'>
                <p className='pcontent'>Fullstack developer, use high tools as Agile (Scrum), UML to become project manager , UI/UX Figma designer, able to manage and convert any idea to enterprise, type clean and clear code, problem solving, My second classification in KCBC, Learnable and evolving, extrovert to learn new techniques and languages</p>
                <i className='piccontent'><iconify-icon className='piccontent' icon="file-icons:test-python"></iconify-icon></i>
                <div className='cv'>
                    <ul className='cvv'>
                        <li className='py'>Python</li>
                        <li className='my'>Mysql</li>
                        <li className='po'>Postgres</li>
                        <li className='dj'>Django</li>
                        <li className='ht'>HTML</li>
                        <li className='cs'>CSS</li>
                        <li className='ja'>JavaScript</li>
                        <li className='js'>React Js</li>
                        <li className='api'>Rest API</li>
                        <li className='uiux'>UI/UX</li>
                    </ul>
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

export default About
