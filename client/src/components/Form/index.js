import React,{ useState } from 'react'
import classNames from 'classnames'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Form.scss'

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Form = () => {
     const classes = useStyles()
     const [stock, setStock] = useState('')
     const [stockValue, setStockValue] = useState('')
     const [stockPrice, setStockPrice] = useState('')
  
     const handleChangeStock = (e) => {
        setStock(e.target.value);
    }
      
    const handleChangeValue = (e) => {
        setStockValue(e.target.value)
    }

    const handleChangePrice = (e) => {
        setStockPrice(e.target.value)
    }

    return (
        <form className={classNames("form")}>
            <div className='form__content'>
                <div className='form__content-stock-value'>
                    <TextField 
                        id="standard-basic" 
                        label="Input value of stoks"
                        value={stockValue}
                        onChange={handleChangeValue}
                    /> 
                </div>
                <div className='form__content-stock-price'>
                    <TextField 
                        id="standard-basic" 
                        label="Input stock price"
                        value={stockPrice}
                        onChange={handleChangePrice}
                    /> 
                </div>
                <div className='form__content-stock-list'>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Stocks</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={stock}
                            onChange={handleChangeStock}
                        >
                            <MenuItem value={10}>SCHD</MenuItem>
                            <MenuItem value={20}>AbbV</MenuItem>
                            <MenuItem value={30}>VOO</MenuItem>
                        </Select>
                    </FormControl>   
                </div>
            </div>
        </form>
    )
}

export default Form
