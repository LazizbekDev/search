import React from "react"
import { BiSearch } from 'react-icons/bi'

const Asosiy = () => {
    return (
        <div>
            <div className="bg">
                <div className="absolute">
                    <h2>Lorem ipsum dolor sit emit, i don't remember lorems </h2>
                </div>
            </div>
                <div className="founder">
                    <input type="text" placeholder='qidiruv' className='searchItem'/>
                    <select name="andijon" id="" className='searchItem'>
                        <option value="andijon">Andijon</option>
                        <option value="andijon">Toshkent</option>
                    </select>
                    <button><BiSearch/> Qidirsh</button>
                </div>
        </div>
    )
}

export default Asosiy
