import React from 'react'

const Row = ({ left, right }) => {
    return (
        <div className="d-flex row">
            <div className="col-sm-6">
                {left}
            </div>
            <div className="col-sm-6">
                {right}
            </div>
        </div>
    )
}
export default Row