import React from "react";
import { FormControl, FormLabel, FormHelperText, Input, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";

const EmailRetriever = () => {
    const [input, setInput] = useState("");
    const handleInputChange = (e) => setInput(e.target.value);

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
          <FormHelperText className="error-handler">
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
      </FormControl>
    );
};

export default EmailRetriever;
