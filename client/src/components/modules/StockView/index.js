import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { Form, Block } from '../../../components'
import { AuthContext } from '../../../context/AuthContext'
import './StockView.scss'

const StockView = () => {
  const {
    token,
    login,
    logout,
    userId,
    isAuthenticated,
    alertSwitcher,
    setAlertSwitcher,
  } = useContext(AuthContext)
  return (
    <div className={classNames('container__stockview')}>
      <Block>
        <h1 className="container__stockview-title">Add new transaction</h1>
        <Form />
      </Block>
    </div>
  )
}

export default StockView
