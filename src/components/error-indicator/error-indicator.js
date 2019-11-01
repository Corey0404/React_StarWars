import React from 'react'

import './error-indicator.css'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <h4 className="text-center">BOOM!</h4>
            <span className="text-error">something has gone terribly wrong</span>
            <span className="text-error" >(but we already sent droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator