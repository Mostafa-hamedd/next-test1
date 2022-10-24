import React, { createContext, useEffect, useState } from 'react'

export const isMobileContext = createContext();

export const IsMobileProvider = (props) => {
  const [isMobile, setMobile] = useState(false);

  const isMobileHandler = (e) => {
		setMobile(e.matches)
	}
	useEffect(() => {
		try {
			// Chrome & Firefox
			window
				.matchMedia(`(max-width : 1023px)`)
				.addEventListener("change", isMobileHandler)
			setMobile(window.matchMedia(`(max-width : 1023px)`).matches)
		} catch (e1) {
			try {
				// Safari
				window
					.matchMedia(`(max-width : 1023px)`)
					.addListener(() => isMobileHandler())
				setMobile(window.matchMedia(`(max-width : 1023px)`).matches)
			} catch (e2) {
				console.error(e2)
			}
		}
	}, [])

  return (
    <>
      <isMobileContext.Provider
        value={{
          isMobileState: [isMobile, setMobile],
        }}
      >
        {props.children}
      </isMobileContext.Provider>
    </>
  )
}
