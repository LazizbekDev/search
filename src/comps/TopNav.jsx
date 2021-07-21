import { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'

const TopNav = () => {

    const [open, setOpen] = useState(false)
    const openHandler = () => {
        setOpen(open === false ? true : false)
    }

    return (
        <nav>
            <div className='brand'>
                Brand
            </div>

            <div className={`navItems ${open}`}>
                <menu>
                    <span>Biz Haqimizda</span>
                    <select className='lang'>
                    <option value="UZB" key="1">Uz</option>
                    <option value="ENG" key="2">En</option>
                    <option value="RU" key="3">Ru</option>
                    </select>
                    <button><AiOutlineUser/> Kirish</button>
                </menu>
            </div>

            <div className="isMobile">
                <BiMenuAltRight onClick={openHandler}/>
            </div>
        </nav>
    )
}

export default TopNav
