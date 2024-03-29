import React, { createContext, useContext, useState } from 'react'

const ProContext = createContext()

export function ProductContext(){
	return useContext(ProContext)
}

const ProductProvider = ({children}) => {
	const [arrangement,setArrangement] = useState(false)

	const value = {
		arrangement,
        setArrangement
	}

  return (
	<ProContext.Provider  value={value}>
		{children}
	</ProContext.Provider>
  )
}

export default ProductProvider