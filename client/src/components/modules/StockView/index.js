import React, { useState } from 'react'
import classNames from 'classnames'
import { Form, Block } from '../../../components'
import './StockView.scss'

const StockView = () => {
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
