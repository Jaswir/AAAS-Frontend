import { useState } from 'react'
import FeelingDropDown from './FeelingDropDown'
import QuoteHeader from './QuoteHeader'
import QuoteSubHeader from './QuoteSubHeader'
import { type AutiQuote } from '../models/Interfaces/AutiQuote'
import QuoteBox from './QuoteBox'
import GetQuoteButton from './GetQuoteButton'
import { FeelingModel } from '../models/feelingModel'

function AutiQuoteComponent (): JSX.Element {
  const initialState: AutiQuote = {
    author: '',
    quote: '',
    relatable_Feeling: FeelingModel.Like_I_have_bad_social_skills
  }

  const [selected, setSelected] = useState<string>(FeelingModel.Like_I_am_not_good_how_I_am)
  const [quote, setQuote] = useState<AutiQuote>(initialState)

  // Only triggers when component mounts
  // useEffect(() => {
  //     getQuote('0')

  // }, [])

  return (
        <div className='flex flex-col items-start justify-center
                bg-gray-300 px-5 py-3 max-w-[600px]  dark:text-black'>

            <QuoteHeader />
            <QuoteSubHeader />

            <FeelingDropDown selected={selected} setSelected={setSelected}/>

            <QuoteBox quote={quote} />

            <GetQuoteButton selected={selected} setQuote={setQuote}/>

        </div>
  )
}

export default AutiQuoteComponent
