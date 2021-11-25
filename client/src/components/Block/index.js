import React from 'react'
import classNames from 'classnames'
import './Block.scss'

const Block = (props) => {
    return (
        <div className={classNames('block')}>
            {props.children}
        </div>
    )
}

export default Block
