import React from "react";
import { FormControl, FormLabel, FormHelperText, Input, FormErrorMessage, Button, propNames } from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios';


const EmailRetriever = () => {
    const [input, setInput] = useState("");
    const handleInputChange = (e) => setInput(e.target.value);
    
    const handleSubmit = (event) => {
      let email = {
        email:input
      }
      axios.post("http://127.0.0.1:6969/api/v1/signup", email)
      .then((res)=>{
        console.log(res.status);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    const isError = input === ''

    return (
      <FormControl >
        <FormLabel htmlFor="email" className="form-email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleInputChange}
          className="bg-email"
        />
        <div className="flex-space-around">
          {!isError? (<FormHelperText className="error-handler">
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>) :
          <FormHelperText className="error-handler-purple">
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
          }
          <Button colorScheme={'teal'} mt={2} type="submit" onClick={handleSubmit}>Count me in!</Button>
          </div>
      </FormControl>
    );
};

export default EmailRetriever;
