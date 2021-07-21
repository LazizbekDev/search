import React from "react"
import { FaCarSide } from 'react-icons/fa'
import { BiMobileAlt } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { GrNetwork } from 'react-icons/gr'

const Categries = () => {
    return (
        <div className='categries'>
            <h1>Asosiy categriyalar</h1>

            <div className="itemsBlock">
                <div className="items">
                    <div className="icons">
                        <FaCarSide/>
                    </div>
                    Transport
                </div>
                <div className="items">
                    <div className="icons">
                        <BiMobileAlt/>
                    </div>
                    Texnika
                </div>
                <div className="items">
                    <div className="icons">
                        <CgWorkAlt/>
                    </div>
                    Ish
                </div>
                <div className="items">
                    <div className="icons">
                        <GrNetwork/>
                    </div>
                    Xizmatlar
                </div>
                <div className="items">
                    <div className="icons">
                        <BiMobileAlt/>
                    </div>
                    Texnika
                </div>
                <div className="items">
                    <div className="icons">
                        <BiMobileAlt/>
                    </div>
                    Texnika
                </div>
            </div>
        </div>
    )
}

export default Categries
