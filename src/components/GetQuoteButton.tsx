import axios from 'axios'
import React from 'react'
import { type AutiQuote } from '../Interfaces/AutiQuote'

function GetQuoteButton ({ selected, setQuote }:
{ selected: string, setQuote: (param: AutiQuote) => void }): JSX.Element {
  // Sets api_url depending on Development or Production
  const herokuapp = 'https://auti-quotes-api.herokuapp.com/'
  const localhost = 'http://localhost:5000/'
  let apiUrl = herokuapp
  if (process.env.NODE_ENV === 'development') apiUrl = localhost

  const getQuote = (relatableFeeling: string): void => {
    setQuote({
      author: 'Auti Quote',
      quote: 'You have just woken up the server, quote will appear shortly ...',
      relatable_Feeling: 100
    })

    const relatableFeelingUnderscores = relatableFeeling.replaceAll(' ', '_')
    const inputURL = apiUrl + 'api/v1/AutiQuotes/random' +
             '/relatable_feeling/' + relatableFeelingUnderscores
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

  return (
        <div className='pt-7 block w-full'>
            <button className="bg-gray-50 border border-gray-300
                     text-gray-900 text-sm rounded-lg block w-full p-2.5
                       dark:bg-gray-500 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white
                        " onClick={() => { getQuote(selected) }}>
                Get Quote
            </button>
        </div>
  )
}

export default GetQuoteButton
