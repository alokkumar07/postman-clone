import React from "react";
import { Box, Typography, TextareaAutosize } from "@mui/material";
const textareaStyle = {
  width: "100%",
  padding: 10,
  background: `url(http://i.imgur.com/2cOaJ.png)`,
  backgroundAttachment: "local",
  backgroundRepeat: "no-repeat",
  paddingLeft: 35,
  paddingTop: 10,
  orderColor: "#ccc",
};
const Response = ({ data }) => {
    let obj = data;
    
    let readableobj = '{ \n';
    for(let key in obj) {
        readableobj += '\t'
        readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
        if (Object.keys(obj).pop() !== key.toString()) {
            // console.log(Object.keys(obj),'j')
            readableobj += ',\n'
        }
        // console.log(obj)
    }
    readableobj += '\n}';

  return ( 
    <Box>
      <Typography mt={2} mb={2}>  Response  </Typography>
      <TextareaAutosize
        minRows={3}
        maxRows={5}
        style={textareaStyle} //hack
        disabled="disabled"
        value={readableobj}
      />
    </Box>
  );
};

export default Response;
