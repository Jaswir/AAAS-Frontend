import { useEffect, useState } from 'react'
import axios from 'axios';

function FeelingDropDown({selected, setSelected, Feeling}: {
    selected: string, setSelected: (param:string) => void , Feeling:object}) {


    return (
        <div className='py-4'>

            <label className="block mb-2 text-lg font-bold">
                How do you feel?
            </label>

            <select
                value={selected} onChange={e => setSelected(e.target.value)}>
                {Object.values(Feeling).map((option) =>
                    (<option key={option}>{option}</option>))
                }
            </select>
        </div>
    )




}

export default FeelingDropDown