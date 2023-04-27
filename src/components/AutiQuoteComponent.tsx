import { useEffect, useState } from 'react'
import axios from 'axios';
import FeelingDropDown from './FeelingDropdown';

function AutiQuoteComponent() {

    const Feeling = {
        Like_I_am_not_good_how_I_am: "Like I am not good how I am",
        Like_I_have_bad_social_skills: "Like I have bad social skills",
        Misunderstood: "Misunderstood",
    } as const

    const [selected, setSelected] = useState<string>(Feeling.Like_I_am_not_good_how_I_am)



    interface AutiQuote {
        author: string
        quote: string
        relatable_Feeling: any
    }
    let initialState: AutiQuote = {
        author: "",
        quote: "",
        relatable_Feeling: Feeling.Like_I_have_bad_social_skills
    }




    const [quote, setQuote] = useState<AutiQuote>(initialState)


    //sets api_url depending on Development or Production
    const herokuapp = "https://auti-quotes-api.herokuapp.com/"
    const localhost = "http://localhost:5000/"
    var api_url = herokuapp
    if (process.env.NODE_ENV == "development") api_url = localhost

    const getQuote = (relatable_feeling: string) => {


        setQuote({
            "author": "Auti Quote",
            "quote": "You have just woken up the server, quote will appear shortly ...",
            "relatable_Feeling": 100
        })


        var relatable_feeling_underscores = relatable_feeling.replaceAll(' ', '_');
        const inputURL = api_url + 'api/v1/AutiQuotes/random' +
            '/relatable_feeling/' + relatable_feeling_underscores
        // console.log(inputURL)

        axios.get(inputURL)
            .then(response => {
                setQuote((response.data))

                console.log()
                // console.log(response.data)

            }).catch(err => {

                console.log(err)

            })
    }

    //Only triggers when component mounts
    // useEffect(() => {
    //     getQuote('0')

    // }, [])

    return (


        <div className='flex flex-col items-start justify-center
                bg-gray-300 px-5 py-3 max-w-[600px]  dark:text-black'>


            <h2 className='text-5xl font-bold text-center pb-6'>
                AutiQuote:
            </h2>

            <h3 className='text-2xl font-bold text-center max-w-[400px] pb-5'>
                A positive Autism Quote that relates to how you feel.

            </h3>

            <FeelingDropDown selected = {selected} setSelected = {setSelected}
            Feeling = {Feeling}/>
            

            {/* Quote component */}
            <div className=' bg-gray-50 px-5 py-3 max-w-[600px] \
               text-slate-900'>
                <p>
                    {quote.quote}
                </p>
                <br></br>
                <p>
                    - {quote.author}
                </p>
            </div>

            <div className='pt-7 block w-full'>
                <button className="bg-gray-50 border border-gray-300
                     text-gray-900 text-sm rounded-lg block w-full p-2.5
                       dark:bg-gray-500 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white
                        "
                    onClick={() => getQuote(selected)}>
                    Get Quote
                </button>
            </div>
        </div>




    )




}

export default AutiQuoteComponent