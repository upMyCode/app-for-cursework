import React, { useState } from 'react'
import classNames from 'classnames'
import { Form, Block }  from '../../../components'
import  InputLabel  from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import DefaultButton from '../../Button'
import './StockView.scss'

const StockView = () => { 
    const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    return (
        <div className={classNames("container__stockview")}>
            <Block>
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
                <DefaultButton 
                    size='large'
                    variant='outlined' 
                    color='primary'
                >
                Buy
                </DefaultButton>
            </Block>
        </div>
    )
}

export default StockView
