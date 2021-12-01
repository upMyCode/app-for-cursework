import React, { useState, useEffect, useContext } from 'react'
import classNames from 'classnames'
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { stockCalculator } from './utils/stockCalculator'
import { useNavigate } from 'react-router-dom'
import { makeStyles, createStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import Autocomplete from '@mui/material/Autocomplete'
import { useHttp } from '../../hooks/http.hooks'
import Select from '@mui/material/Select'
import { AuthContext } from '../../context/AuthContext'
import { useStoreStocks } from '../../hooks/stocks.storage.hook'
import './Form.scss'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}))

const Form = () => {
  const { loading, error, request, authorized, isAuthorized } = useHttp()
  const {
    token,
    login,
    logout,
    userId,
    isAuthenticated,
    alertSwitcher,
    setAlertSwitcher,
    setContext,
    setPriceStocksText,
    setValueStocksText,
    setTickerName,
  } = useContext(AuthContext)
  const classes = useStyles()
  const [options, setOptions] = useState([])
  const [stock, setStock] = useState(options[0])
  const [stockValue, setStockValue] = useState('')
  const [stockPrice, setStockPrice] = useState('')
  const history = useNavigate()
  const [price, setPrice] = useState('')

  useEffect(() => {
    if (stockValue && stockPrice && stock) {
      setPrice(stockCalculator(stockValue, stockPrice))
    }
  }, [stockValue, stockPrice, stock])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await request('http://localhost:5000/auth/stocks')
        setOptions(data.stocks)
      } catch (e) {}
    }
    fetchData()
  }, [])

  const setAlertHandler = () => {
    setAlertSwitcher(true)
    setPriceStocksText(price)
    setValueStocksText(stockValue)
    setTickerName(stock)
  }

  const handleChangeStock = (e) => {
    setStock(e.target.value)
  }

  const handleChangeValue = (e) => {
    setStockValue(e.target.value)
  }

  const handleChangePrice = (e) => {
    setStockPrice(e.target.value)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const exitHandler = () => {
    logout()
    history('/auth/sign-in')
    setAlertSwitcher(false)
    setContext('')
  }

  return (
    <form className={classNames('form')}>
      <div className="form__content">
        <div className="form__content-main-group-1">
          <div className="form__content-main-group-1-stock-value">
            <TextField
              id="standard-basic"
              label="Input value of stoks"
              value={stockValue}
              onChange={handleChangeValue}
            />
          </div>
          <div className="form__content-main-group-1-stock-price">
            <TextField
              id="standard-basic"
              label="$ Input stock price"
              value={stockPrice}
              onChange={handleChangePrice}
            />
          </div>
          <div className="form__content-main-group-1-stock-list">
            <Autocomplete
              value={stock}
              onChange={(_, newValue) => {
                setStock(newValue)
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Stocks" />}
            />
          </div>
        </div>
        <div className="form__content-main-group-2">
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={price}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </div>
        <div className="form__content-footer">
          <Button
            onClick={setAlertHandler}
            size="large"
            variant="outlined"
            color="success"
          >
            Buy
          </Button>
          <Button
            onClick={exitHandler}
            size="large"
            variant="outlined"
            color="error"
          >
            Log Out
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Form
