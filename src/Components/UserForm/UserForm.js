import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "./UserForm.css";

var intialState = {
  firstName: "",
  lastName: "",
  birthDate: "",
  gender: "",
  email: "",
  phoneNumber: "",
  designation: "",
};

const UserForm = () => {
  const [date, setDate] = useState(new Date("2014-08-18T21:11:54"));
  // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [value, setValue] = useState(null);
  const [desgination, setDesgination] = useState(null);
  const [data, setData] = useState({ intialState });
  return (
    <form>
      <Paper
        sx={{
          flexGrow: 1,
          marginTop: "10px",
          width: "80%",
          display: "block",
          margin: "95px auto 0px",
        }}
      >
        <Grid container spacing={2} justifyContent="center" py={4}>
          <Grid item xs={5}>
            <TextField
              className="inputBox"
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              // {value==""?error:null}
              error
              helperText="Incorrect entry."
              // onChange={(e) => {}}
              // value={intialState.firstName}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className="inputBox"
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={5} className="datePickerContainer">
            {/* <LocalizationProvider
              dateAdapter={AdapterDateFns}
              className="inputBox"
            >
              <DatePicker
                className="inputBox"
                label="Birth Date"
                name="birthDate"
                id="birthDate"
                value={date}
                onChange={(e) => {
                  setDate(e.target);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              className="inputBox"
            >
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={5}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <TextField
              className="inputBox"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              className="inputBox"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              type="number"
            />
          </Grid>

          <Grid item xs={10}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Designation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="designation"
                name="designation"
                value={null}
                label="Designation"
                value={desgination}
                onChange={(e) => {
                  setDesgination(e.target.value);
                }}
              >
                <MenuItem value="Software Developer">
                  Software Developer
                </MenuItem>
                <MenuItem value="Software Tester">Software Tester</MenuItem>
                <MenuItem value="UI/UX">UI/UX</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={5} justifyContent="center">
            <Button
              type="Reset"
              variant="contained"
              // sx={{ display: "block", textAlign: "center" }}
              fullWidth
            >
              Reset
            </Button>
          </Grid>
          <Grid item xs={5} justifyContent="center">
            <Button
              type="Submit"
              variant="contained"
              color="secondary"
              // sx={{ display: "block", textAlign: "center" }}
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default UserForm;
