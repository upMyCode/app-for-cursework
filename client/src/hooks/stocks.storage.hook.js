import { useState, useCallback } from 'react'

export const useStoreStocks = () => {
  const [priceStocksText, setPriceStocksText] = useState('')
  const [valueStocksText, setValueStocksText] = useState('')
  const [tickerName, setTickerName] = useState('')

  const recordStocksData = useCallback((value, ticker, price) => {
    setPriceStocksText(price)
    setValueStocksText(value)
    setTickerName(ticker)
  }, [])

  return { recordStocksData, priceStocksText, valueStocksText, tickerName }
}
