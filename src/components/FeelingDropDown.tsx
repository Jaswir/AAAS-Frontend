import { FeelingModel } from '../models/feelingModel'

function FeelingDropDown ({ selected, setSelected }:
{
  selected: string
  setSelected: (param: string) => void
}): JSX.Element {
  return (
        <div className='py-4'>

            <label className="block mb-2 text-lg font-bold">
                How do you feel?
            </label>

            <select
                value={selected} onChange={e => { setSelected(e.target.value) }}>
                {Object.values(FeelingModel).map((option) =>
                  (<option key={option}>{option}</option>))
                }
            </select>
        </div>
  )
}

export default FeelingDropDown
