import React, { useState } from 'react'
import classNames from 'classnames'
import TextField from '@mui/material/TextField'
import { makeStyles, createStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import Autocomplete from '@mui/material/Autocomplete'
import Select from '@mui/material/Select'
import './Form.scss'

const options = ['Abbvie', 'SCHD']

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}))

const Form = () => {
  const classes = useStyles()
  const [stock, setStock] = useState(options[0])
  const [stockValue, setStockValue] = useState('')
  const [stockPrice, setStockPrice] = useState('')

  const handleChangeStock = (e) => {
    setStock(e.target.value)
  }

  const handleChangeValue = (e) => {
    setStockValue(e.target.value)
  }

  const handleChangePrice = (e) => {
    setStockPrice(e.target.value)
  }

  return (
    <form className={classNames('form')}>
      <div className="form__content">
        <div className="form__content-stock-value">
          <TextField
            id="standard-basic"
            label="Input value of stoks"
            value={stockValue}
            onChange={handleChangeValue}
          />
        </div>
        <div className="form__content-stock-price">
          <TextField
            id="standard-basic"
            label="Input stock price"
            value={stockPrice}
            onChange={handleChangePrice}
          />
        </div>
        <div className="form__content-stock-list">
          <Autocomplete
            value={stock}
            onChange={(event, newValue) => {
              setStock(newValue)
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Stocks" />}
          />
        </div>
      </div>
    </form>
  )
}

export default Form
