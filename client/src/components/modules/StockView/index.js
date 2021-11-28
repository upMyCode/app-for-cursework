import React, { useState } from 'react'
import classNames from 'classnames'
import { Form, Block } from '../../../components'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import stockCalculator from './utils/stockCalculator'
import DefaultButton from '../../Button'
import { useNavigate } from 'react-router-dom'
import './StockView.scss'

const StockView = () => {
  const history = useNavigate()
  const [price, setPrice] = useState('')
  const [values, setValues] = useState({
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <div className={classNames('container__stockview')}>
      <Block>
        <h1 className="container__stockview-title">Add new transaction</h1>
        <Form />
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <div className="container__stockview-buttons-group">
          <Button size="large" variant="outlined" color="success">
            Buy
          </Button>
          <Button
            onClick={() => history('/auth/sign-in')}
            size="large"
            variant="outlined"
            color="error"
          >
            Log Out
          </Button>
        </div>
      </Block>
    </div>
  )
}

export default StockView
