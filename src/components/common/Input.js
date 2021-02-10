import React from "react"

export default function Input({
  onChange,
  value,
  name,
  placeholder,
  tabIndex,
}) {
  return (
    <input
      onChange={onChange}
      value={value}
      className="mt-2 text-sm shadow appearance-none border text-primary bg-primary placeholder-textPrimary rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      placeholder={placeholder}
      name={name}
      tabIndex={tabIndex}
    />
  )
}
