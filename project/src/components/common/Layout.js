import React from 'react'
import classNames from 'classnames'

const Layout = ({ children, className = '' }) => {
  return (
    <div className={classNames('container mx-auto px-4', className)}>{children}</div>
  )
}

export default Layout;