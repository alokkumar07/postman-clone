import {useContext} from 'react'

import { Typography ,TextareaAutosize} from '@mui/material'

import { DataContext } from '../context/DataProvider'


const textareaStyle = {
    width:'100%',
    padding:10,
    background:`url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment:'local',
    backgroundRepeat:'no-repeat',
    paddingLeft:35,
    paddingTop:10,
    orderColor: '#ccc'
}
const CreateJsonText = () => {
    const {setJsonText} = useContext(DataContext)

    const onValueChange = (e) => {
        setJsonText(e.target.value);  
    }
  return (
  <> 
  <Typography mt={2} mb={2}>JSON</Typography>
  <TextareaAutosize
  minRows={3}
  maxRows={5}
  style={textareaStyle} //hack
  onChange={(e)=>onValueChange(e)}
/>
  </>
  )
}

export default CreateJsonText