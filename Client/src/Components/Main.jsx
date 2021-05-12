import { useMainStyles } from "../Styles/MainStyles";
import { Box, Stack, Input, Button, Select } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { useHistory } from "react-router-dom";

export default function Main() {
  const classes = useMainStyles();
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const history = useHistory();

  const handleClick = () => {
    const url = "http://localhost:5000/add";
    // const url = "https://kanae-leave-manager.herokuapp.com/add";
    axios
      .post(url, {
        leaveType: type,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Leave Application Filed");
          alert("Thank You");
          history.push("/");
        }
        if (res.status === 400) alert("Server Error");
      });
  };

  return (
    <>
      <div className={classes.root}>
        <Box className={classes.box}>
          <Stack
            width="96%"
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            spacing={4}
          >
            <p style={{ fontWeight: "bold" }}>Leave Application Form</p>
            <hr style={{ color: "black", height: "5px" }} />
            <p>Leave Type</p>
            <Select
              onChange={(e) => {
                setType(e.target.value);
              }}
              placeholder="Select Option"
            >
              <option value="Sick Leave">Sick Leave</option>
              <option value="Marriage Leave">Marriage Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Maternity Leave">Maternity Leave</option>
            </Select>
            <div className={classes.period}>
              <div className={classes.start}>
                <p>
                  Leave From<span style={{ color: "red" }}>*</span>
                </p>
                <Input
                  type="date"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  value={startDate}
                />
              </div>
              <div className={classes.end}>
                <p>
                  Leave To<span style={{ color: "red" }}>*</span>
                </p>
                <Input
                  type="date"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  value={endDate}
                />
              </div>
            </div>
            <div className={classes.buttonBox}>
              <Button
                onClick={handleClick}
                style={{
                  width: "30%",
                  color: "#f25287",
                  backgroundColor: "#f7d9d9",
                }}
              >
                Apply <TiTick />
              </Button>
            </div>
          </Stack>
        </Box>
      </div>
    </>
  );
}
