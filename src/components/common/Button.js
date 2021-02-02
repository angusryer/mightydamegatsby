import React from 'react';

export default function Button({ title, onClick, full = false }) {
  let classNames = "text-sm font-bold tracking-wider bg-transparent hover:bg-buttonSecondary text-primary font-semibold hover:text-secondary py-4 px-12 border-2 border-accentsSecondary hover:border-transparent"

  if (full) {
    classNames = `${classNames} w-full`
  }
  return (
    <button onClick={onClick} className={classNames}>
      <div>
        {title}
      </div>
    </button>
  )
}