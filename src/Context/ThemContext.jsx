import React, { createContext, useEffect, useState } from 'react'
// eslint-disable-next-line react-refresh/only-export-components
export const ThemControlData = createContext();
function ThemContext(props) {

  const [them, setThem] = useState(() => {
    return localStorage.getItem('them') || 'Ligth';
  })
  useEffect(() => {

    localStorage.setItem("them", them)
  }, [them])
  
  useEffect(() => {
    if (them === 'Ligth') {
      document.body.classList.add('bg-white')
      document.body.classList.remove('bg-gray-800')
    } else {
      document.body.classList.add('bg-gray-800')
      document.body.classList.remove('bg-white')
    }
  }, [them])

  return (
    <div>
      <ThemControlData.Provider value={[them, setThem]}>
        {props.children}
      </ThemControlData.Provider>
    </div>
  )
}

export default ThemContext
