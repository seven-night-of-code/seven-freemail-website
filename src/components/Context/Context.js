"use client"
import React, { createContext, useState } from 'react'

export const productContext = createContext();
const Context = ({children}) => {
    const [selectedProduct ,setSelectedProduct] = useState([])
  return (
<productContext.Provider value={[selectedProduct ,setSelectedProduct]}>
    {children}
</productContext.Provider>
)
}

export default Context