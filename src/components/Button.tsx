import React from 'react'

interface HeadingProps {
    title: string
    bgColor: string
    updateCount: () => void
}
function Button({title, bgColor, updateCount}: HeadingProps) {
  return (
    <button onClick={updateCount} style={{backgroundColor: bgColor}}>{title}</button>
  )
}

export default Button