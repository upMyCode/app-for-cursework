import React from 'react'
import classNames from 'classnames'
import Button from '@material-ui/core/Button';
import './Button.scss'

const DefaultButton = (props) => {
    return (
        <div className={classNames("button") }>
            <Button {...props}>
                Buy
            </Button>
        </div>
    )
}

export default DefaultButton