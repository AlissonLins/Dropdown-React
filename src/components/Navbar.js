import React, {useState} from 'react';
import DropdownMenu from './DropdownMenu';
import MenuItem from './MenuItem';

import logo from '../images/logo.svg';
import setaBaixo from '../images/icon-arrow-down.svg';
//import setaCima from '../images/icon-arrow-up.svg';

import todolist from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import remider from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

function Navbar (){
    const [isFeaturesOpen, setisFeaturesOpen] = useState(false);
    const [isCompanyOpen, setisCompanyOpen] = useState(false);

    return (
        <nav className="p-5 flex items-center justify-between">
            <div className="p-5 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="logo da pagina"/>
                    <ul className="flex mx-16 list-none gap-10">
                        <li className="cursor-pointer text-gray-500 flex items-center gap-2 relative select-none"
                            onMouseEnter={() => setisFeaturesOpen(true)}
                            onMouseLeave={() => setisFeaturesOpen(false)}>
                         Features <img src={setaBaixo} alt="" className="ml-2"/>
                         {isFeaturesOpen && (
                            <DropdownMenu>
                                <MenuItem className="mr-2" img={todolist}/>Todo List
                                <MenuItem className="mr-2" img={calendar} /> Calendar
                                <MenuItem className="mr-2" img={remider}/> Reminders
                                <MenuItem className="mr-2" img={planning}/> Planning
                            </DropdownMenu>)}
                        </li>
                        <li className="cursor-pointer text-gray-500 flex items-center gap-2 relative select-none"
                            onMouseEnter={() => setisCompanyOpen(true)}
                            onMouseLeave={() => setisCompanyOpen(false)}>
                         Company  <img src={setaBaixo} alt="" className="ml-2"/>
                         {isCompanyOpen && (
                            <DropdownMenu>
                                <MenuItem className="flex-col absolute bg-white gap-4 shadow-2xl p-4 rounded-xl"/> History
                                <MenuItem className="flex-col absolute bg-white gap-4 shadow-2xl p-4 rounded-xl"/> Our Team
                                <MenuItem className="flex-col absolute bg-white gap-4 shadow-2xl p-4 rounded-xl"/> Blog
                            </DropdownMenu>)}
                        </li>
                        <li className="cursor-pointer text-gray-500 flex items-center gap-2 relative select-none">Carrers</li>
                        <li className="cursor-pointer text-gray-500 flex items-center gap-2 relative select-none">About</li>
                    </ul>
                    <div className="hidden lg:block">
                        <button className="mr-10 opacity-75 hover:font-bold text-black">Login</button>
                        <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl hover:font-bold text-black">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;