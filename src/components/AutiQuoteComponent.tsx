import { useEffect, useState } from 'react'
import axios from 'axios';

function AutiQuoteComponent() {

    interface AutiQuote {
        author: string
        quote: string
    }

    let initialState: AutiQuote = {
        author: "",
        quote: ""
    }

    const [quote, setQuote] = useState<AutiQuote>(initialState)

    const getQuote = () => {
        axios.get('https://auti-quotes-api.herokuapp.com/api/v1/AutiQuotes/random')
            .then(response => {
                setQuote((response.data))

                console.log(response.data)

            }).catch(err => {

                console.log(err)

            })
    }

    //Only triggers when component mounts
    useEffect(() => {
        getQuote()

    }, [])

    return (
        <>

            <div className='flex flex-col items-start justify-center
                bg-gray-200 px-5 py-3 max-w-[600px]'>

                {/* <button onClick={getQuote}>Get Quote</button> */}

                <h2 className='text-4xl dark:text-black font-bold text-center py-6'>
                    AutiQuote:
                </h2>

                <p>
                    {quote.quote}
                </p>
                <br></br>
                <p>
                    - {quote.author}
                </p>

            </div>

        </>

    )




}

export default AutiQuoteComponent