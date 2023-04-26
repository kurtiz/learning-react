import {ReactNode} from "react";

interface AlertProp {
    children: ReactNode
}

const Alert = ({children}: AlertProp) => {
    return (
        <div className="alert alert-primary" role="alert">
            {children}
        </div>

    )
}

export default Alert