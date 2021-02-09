import React from "react"

export default function QuantityPicker({
  increment,
  decrement,
  numberOfitems,
  hideQuantityLabel,
}) {
  return (
    <div className={`flex items-center`}>
      {!hideQuantityLabel && <div className="px-2 text-xs text-primary">Quantity</div>}
      <button
        className="
        w-6 h-6 text-xs
        md:w-8 md:h-8 md:text-sm 
        nav:w-10 nav:h-10 nav:text-base 
        cursor-pointer text-center border-t border-b
        border-accentsPrimary
        hover:bg-shadedSecondary hover:text-secondary
        focus:outline-none text-primary
        "
        onClick={increment}
      >
        +
      </button>
      <p
        className="
        flex justify-center items-center
        w-6 h-6 text-xs border-t border-b
        border-accentsPrimary
        md:w-8 md:h-8 md:text-sm 
        nav:w-10 nav:h-10 nav:text-base
        m-0 text-center text-primary"
      >
        {numberOfitems}
      </p>
      <button
        className="
        w-6 h-6 text-xs
        md:w-8 md:h-8 md:text-sm 
        nav:w-10 nav:h-10 nav:text-base 
        cursor-pointer text-center border-t border-b
        border-accentsPrimary
        hover:bg-shadedSecondary hover:text-secondary
        focus:outline-none text-primary
        "
        onClick={decrement}
      >
        -
      </button>
    </div>
  )
}
