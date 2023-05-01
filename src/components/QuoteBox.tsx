import React from 'react'
import { type AutiQuote } from '../models/Interfaces/AutiQuote'

function QuoteBox ({ quote }: { quote: AutiQuote }): JSX.Element {
  return (
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
  )
}

export default QuoteBox
