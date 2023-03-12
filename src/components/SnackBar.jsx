import { Snackbar } from "@mui/material";
const SnackBar = ({error,setError,errorMessage}) =>{

    const handleClose = () =>{
      setError(false);
    }
    return (
        <Snackbar 
            open={error}
            autoHideDuration={3000}
            onClose={handleClose}
            message={errorMessage}
        />
    )
}
export default SnackBar;