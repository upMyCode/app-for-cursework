import React from 'react'
import classNames from 'classnames'
import Button from '@mui/material/Button'
import './Button.scss'

const DefaultButton = (children, ...props) => {
  return (
    <div className={classNames('button')}>
      <Button {...props}>{children}</Button>
    </div>
  )
}

export default DefaultButton
