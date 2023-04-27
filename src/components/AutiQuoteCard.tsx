import { useEffect, useState } from 'react'
import axios from 'axios';
import FeelingDropDown from './FeelingDropDown';
import QuoteHeader from './QuoteHeader';
import QuoteSubHeader from './QuoteSubHeader';
import { AutiQuote } from '../Interfaces/AutiQuote';
import QuoteBox from './QuoteBox';
import GetQuoteButton from './GetQuoteButton';

function AutiQuoteComponent() {

    const Feeling = {
        Like_I_am_not_good_how_I_am: "Like I am not good how I am",
        Like_I_have_bad_social_skills: "Like I have bad social skills",
        Misunderstood: "Misunderstood",
    } as const

    let initialState: AutiQuote = {
        author: "",
        quote: "",
        relatable_Feeling: Feeling.Like_I_have_bad_social_skills
    }

    const [selected, setSelected] = useState<string>(Feeling.Like_I_am_not_good_how_I_am)
    const [quote, setQuote] = useState<AutiQuote>(initialState)

    //Only triggers when component mounts
    // useEffect(() => {
    //     getQuote('0')

    // }, [])

    return (
        <div className='flex flex-col items-start justify-center
                bg-gray-300 px-5 py-3 max-w-[600px]  dark:text-black'>

            <QuoteHeader />
            <QuoteSubHeader />

            <FeelingDropDown selected={selected} setSelected={setSelected}
                Feeling={Feeling} />

            <QuoteBox quote={quote} />

            <GetQuoteButton selected={selected} setQuote={setQuote}/>

        </div>
    )




}

export default AutiQuoteComponent