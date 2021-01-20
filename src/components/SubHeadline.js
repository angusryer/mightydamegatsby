import React from 'react'

export default function SubHeadline({children}) {
    return (
        <section className="flex flex-col items-center">
          <p className="my-16 mx-10 text-center text-lg font-bold">
            {children}
          </p>
        </section>
    )
}
