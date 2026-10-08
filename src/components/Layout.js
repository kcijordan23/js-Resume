import React from 'react'

// Page wrapper: generous padding on big screens, tighter on phones.
const Layout = ({ children, className = "" }) => {
    return (
        <div className={`w-full h-full inline-block z-0 px-6 py-12 sm:px-12 md:px-16 lg:px-24 xl:px-32 ${className}`}>
            {children}
        </div>
    )
}

export default Layout
