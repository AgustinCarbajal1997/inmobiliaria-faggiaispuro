import React from 'react'

const Credit = ({ size }) => {
  return (
    <img
      src="/iconos/credito.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  )
}

export default Credit