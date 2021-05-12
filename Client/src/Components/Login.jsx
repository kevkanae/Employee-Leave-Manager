import { Box, Stack, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import validator from "validator";
import { useState } from "react";
import { useLoginStyles } from "../Styles/LoginStyles";
import { useHistory } from "react-router-dom";

export default function Login() {
  const classes = useLoginStyles();
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const handleClick = () => {
    if (validator.isEmail(mail)) {
      const url = "http://localhost:5000/find";
      axios
        .post(url, { employeeEmail: mail, employeePassword: pass })
        .then((res) => {
          if (res.data["code"] === true) history.push("/main");
          else alert("Are You Sure You're an Employee?");
        });
    } else {
      alert("Invalid Email");
    }
  };
  return (
    <>
      <div className={classes.root}>
        <Box>
          <Stack className={classes.box} spacing={7}>
            <h3 className={classes.myH3}>Sign in</h3>
            <Input
              width="70%"
              type="email"
              placeholder="Email"
              size="md"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <Input
              width="70%"
              type="password"
              placeholder="Password"
              size="md"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <Button
              onClick={handleClick}
              width="50%"
              backgroundColor="#f7d9d9"
              color="#f25287"
            >
              Login
            </Button>
          </Stack>
        </Box>
      </div>
    </>
  );
}
