import { Button } from "@mui/material"

const ButtonUI = (props) => {
    const {children} = props

    return(
        <Button variant="contained" color="success">
            {children}
        </Button>
    )
}

export default ButtonUI