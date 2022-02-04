import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import "./Users.css";
import { Fab, Grid, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

class EditSaveCancel extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { userId: 1, fname: "Vishal Bhole", email: "vishal@gmail.com" },
        { userId: 2, fname: "Amol Thorat", email: "amol@gmail.com" },
        { userId: 3, fname: "Vikas Patil", email: "vikas@gmail.com" },
        { userId: 4, fname: "Shubham Salunkhe", email: "shubham@gmail.com" },
      ],
      editContent: "",
      action: "",
      order: "ascending",
      rememberMe: false,
      updatedData: [],
      activity: 10,
    };

    // In Class function bind Click like below
    //01 Use bind method without fat arrow function ()=>
    //02 this.sortByAscending = this.sortByAscending.bind(this);
    //03 this.sortByDescending = this.sortByDescending.bind(this);
    //04 onClick={this.sortByAscending()}

    // In Class function direct add Click on button like below with bind here
    //01 Use bind method with fat arrow function ()=>
    //02 onClick={()=>this.sortByAscending()}
  }

  componentDidMount() {
    this.setState({
      data: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      updatedData: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
    });

    if ("users" in localStorage && "activity" in localStorage) {
      this.getDataFromLocalStorage();
    }
  }
  componentDidUpdate() {
    let dataDidMount = this.state.data
      //   .sort((a, b) => this.ascendOrder(a, b))
      .map((data) => {
        return data.fname;
      });
    this.props.setUsersCount(this.state.data.length);
    this.props.setActivity(this.state.activity);
    localStorage.setItem("activity", this.state.activity);
    var latestData = this.state.data.filter((data) => {
      return data.userId == this.state.data.length;
    });
    if (this.state.order == "ascending") {
      this.props.setRecentlyAddedUser(
        this.state.data[this.state.data.length - 1]
      );
    } else {
      this.props.setRecentlyAddedUser(this.state.data[0]);
    }
  }
  saveName(userId, index) {
    var updatedname = document.getElementById("name_" + index).value;
    var updatedemail = document.getElementById("email_" + index).value;

    if (this.state.action == "add") {
      this.state.data.shift();
      this.state.data.push({
        userId: userId,
        fname: updatedname,
        email: updatedemail,
      });
    } else {
      this.state.data[userId - 1].fname = updatedname;
      this.state.data[userId - 1].email = updatedemail;
    }

    this.setState({
      data: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      updatedData: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      searchContent: "",
      activity: this.state.activity + 1,
    });

    document.getElementById("labelName_" + index).classList.remove("d-none");
    document.getElementById("labelEmail_" + index).classList.remove("d-none");
    document.getElementById("editBtn_" + index).classList.remove("d-none");
    document.getElementById("name_" + index).classList.add("d-none");
    document.getElementById("email_" + index).classList.add("d-none");
    document.getElementById("saveBtn_" + index).classList.add("d-none");
    document.getElementById("cancelBtn_" + index).classList.add("d-none");

    if (
      document.getElementById("name_" + index).value == "" &&
      document.getElementById("email_" + index).value == ""
    ) {
      this.state.data.splice(index, 1);
      var newName = this.state.data.sort((a, b) => this.ascendOrder(a, b));
      this.setState({
        data: newName,
        updated: newName,
      });
    }

    var editClassName = document.getElementsByClassName("editBtn");
    var deleteClassName = document.getElementsByClassName("delBtn");
    for (var i = 0; i < editClassName.length; i++) {
      editClassName[i].style.pointerEvents = "auto";
      editClassName[i].style.opacity = "1";
      deleteClassName[i].style.pointerEvents = "auto";
      deleteClassName[i].style.opacity = "1";
    }

    this.setDataInLocalStorage(); // Save data in local storage
  }
  setDataInLocalStorage = () => {
    // This call under save
    localStorage.setItem("users", JSON.stringify(this.state.data));
    // localStorage.setItem("activity", JSON.stringify(this.state.activity));
    this.setState({
      data: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      updatedData: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
    });
  };
  getDataFromLocalStorage = () => {
    // This call under componentDidMount
    let usersGetItem = localStorage.getItem("users");
    let usersSetItem = JSON.parse(usersGetItem);
    let activityGetItem = localStorage.getItem("activity");
    let activitySetItem = JSON.parse(activityGetItem);
    this.setState({
      data: usersSetItem.sort((a, b) => this.ascendOrder(a, b)),
      updatedData: usersSetItem.sort((a, b) => this.ascendOrder(a, b)),
      activity: activitySetItem,
    });
  };
  editName(name, index) {
    this.setState({ action: "edit" });

    this.setState({ editContent: name }); // Update state here

    document.getElementById("labelName_" + index).classList.add("d-none");
    document.getElementById("labelEmail_" + index).classList.add("d-none");
    document.getElementById("editBtn_" + index).classList.add("d-none");
    document.getElementById("delBtn_" + index).classList.add("d-none");
    document.getElementById("name_" + index).classList.remove("d-none");
    document.getElementById("email_" + index).classList.remove("d-none");
    document.getElementById("saveBtn_" + index).classList.remove("d-none");
    document.getElementById("cancelBtn_" + index).classList.remove("d-none");

    var editclassName = document.getElementsByClassName("editBtn");
    var delclassName = document.getElementsByClassName("delBtn ");
    for (var i = 0; i < editclassName.length; i++) {
      if (i != index) {
        editclassName[i].style.pointerEvents = "none";
        editclassName[i].style.opacity = "0.5";
        delclassName[i].style.pointerEvents = "none";
        delclassName[i].style.opacity = "0.5";
      }
    }
  }
  cancelName(index) {
    document.getElementById("labelName_" + index).classList.remove("d-none");
    document.getElementById("labelEmail_" + index).classList.remove("d-none");
    document.getElementById("editBtn_" + index).classList.remove("d-none");
    document.getElementById("delBtn_" + index).classList.remove("d-none");
    document.getElementById("name_" + index).classList.add("d-none");
    document.getElementById("email_" + index).classList.add("d-none");
    document.getElementById("saveBtn_" + index).classList.add("d-none");
    document.getElementById("cancelBtn_" + index).classList.add("d-none");

    console.log("actionnn", this.state.action);

    var editclassName = document.getElementsByClassName("editBtn");
    var delclassName = document.getElementsByClassName("delBtn ");
    for (var i = 0; i < editclassName.length; i++) {
      if (i != index) {
        editclassName[i].style.pointerEvents = "auto";
        editclassName[i].style.opacity = "1";
        delclassName[i].style.pointerEvents = "auto";
        delclassName[i].style.opacity = "1";
      }
    }

    const lastName = this.state.data.sort((a, b) => this.ascendOrder(a, b));
    const lastItem = lastName[lastName.length - 1]; // last item not in array if not saved "https://flaviocopes.com/how-to-get-last-item-array-javascript/"

    if (
      document.getElementById("name_" + index).value == "" ||
      lastItem == "" ||
      document.getElementById("email_" + index).value == "" ||
      lastItem == ""
    ) {
      console.log("actionnn", this.state.data);
      // this.state.data.splice(index, 1);
      this.state.data.pop();
      var newName = this.state.data.sort((a, b) => this.ascendOrder(a, b));
      this.setState({
        data: newName,
        updatedData: newName,
      });
    }
  }
  deleteRow = (i) => {
    this.state.data.splice(i, 1);
    var newName = this.state.data.sort((a, b) => this.ascendOrder(a, b));
    this.setState({
      data: newName,
      updatedData: newName,
    });
    var className = document.getElementsByClassName("editBtn");
    for (var i = 0; i < className.length; i++) {
      className[i].style.pointerEvents = "auto";
      className[i].style.opacity = "1";
    }

    /* let items =JSON.parse(localStorage.getItem("users"));
        items = items.filter((item) => item.i !== i);
        localStorage.setItem("users", JSON.stringify(items));
        if (items.length === 0) {
            localStorage.removeItem("users");
        } */
    localStorage.setItem("users", JSON.stringify(this.state.data));
    localStorage.setItem("activity", JSON.stringify(this.state.activity + 1));

    this.setState({
      data: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      updatedData: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      activity: this.state.activity + 1,
    });
  };
  addRow() {
    this.setState({ action: "add" });
    var rows = this.state.data.sort((a, b) => this.ascendOrder(a, b));
    // rows.push({ fname: "", email: "" });
    rows.unshift({ userId: this.state.data.length + 1, fname: "", email: "" });
    this.setState({ data: rows, updatedData: rows });

    // var lastRow = rows.length - 1;

    setTimeout(function () {
      //   var index = lastRow;
      var index = 0;
      document.getElementById("labelName_" + index).classList.add("d-none");
      document.getElementById("labelEmail_" + index).classList.add("d-none");
      document.getElementById("editBtn_" + index).classList.add("d-none");
      document.getElementById("delBtn_" + index).classList.add("d-none");
      document.getElementById("name_" + index).classList.remove("d-none");
      document.getElementById("name_" + index).focus();
      document.getElementById("email_" + index).classList.remove("d-none");
      document.getElementById("saveBtn_" + index).classList.remove("d-none");
      document.getElementById("cancelBtn_" + index).classList.remove("d-none");

      document.getElementById("name_" + index).value = "";
      document.getElementById("email_" + index).value = "";

      var className = document.getElementsByClassName("editBtn");
      for (var i = 0; i < className.length; i++) {
        if (i != index) {
          className[i].style.pointerEvents = "none";
          className[i].style.opacity = "0.5";
        }
      }
    }, 500);
  }
  // Ascending Order
  sortByAscending(filterBy) {
    const ascend = this.state.data.sort((a, b) => this.ascendOrder(a, b));
    this.setState({
      data: ascend,
      updatedData: ascend,
      order: "ascending",
    });
  }
  ascendOrder(a, b) {
    if (a.userId < b.userId) {
      return -1;
    }
    if (a.userId > b.userId) {
      return 1;
    }
    return 0;
  }
  // Descending Order
  sortByDescending() {
    const descend = this.state.data.sort((a, b) => this.descendOrder(a, b));
    this.setState({
      data: descend,
      updatedData: descend,
      order: "descending",
    });
    console.log("des", this.state.data);
  }
  descendOrder(a, b) {
    if (b.userId < a.userId) {
      return -1;
    }
    if (b.userId > a.userId) {
      return 1;
    }
    return 0;
  }

  filterByFullName(e) {
    this.setState({ searchContent: e.target.value });
    var updatedData = this.state.data.filter((name) => {
      return name.fname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ updatedData: updatedData });
  }

  render() {
    return (
      <>
        {
          <div
            style={{
              textAlign: "center",
              padding: "20px 40px",
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{
                backgroundColor: "#1b2330",
                mb: "10px",
                pb: "15px",
                width: "100%",
                ml: "0px",
                borderRadius: "5px",
              }}
            >
              <Grid item xs={6} md={8}>
                <input
                  type="text"
                  className="search name input-name form-control"
                  value={this.state.searchContent}
                  id="search"
                  name="search"
                  placeholder="Filter by Full Name..."
                  onChange={(e) => this.filterByFullName(e)}
                  style={{
                    display: "inline-block",
                    width: "50%",
                    float: "left",
                  }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Button
                  onClick={() => {
                    this.addRow();
                  }}
                  variant="contained"
                  startIcon={<AddIcon />}
                  color="secondary"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#1b2330" }}>
                  <TableRow>
                    <TableCell
                      sx={{ color: "white", fontSize: "16px" }}
                      align="center"
                    >
                      User ID &nbsp;
                      <Fab
                        size="small"
                        color="secondary"
                        aria-label="ascending"
                        sx={{
                          minHeight: "25px",
                          height: "25px",
                          width: "25px",
                        }}
                        onClick={() => {
                          this.sortByAscending();
                        }}
                      >
                        <ArrowUpwardRoundedIcon fontSize="small" />
                      </Fab>
                      &nbsp;
                      <Fab
                        size="small"
                        color="secondary"
                        aria-label="descending"
                        sx={{
                          minHeight: "25px",
                          height: "25px",
                          width: "25px",
                        }}
                        onClick={() => {
                          this.sortByDescending();
                        }}
                      >
                        <ArrowDownwardRoundedIcon fontSize="small" />
                      </Fab>
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", fontSize: "16px" }}
                      align="center"
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{ color: "white", fontSize: "16px" }}
                      align="center"
                    >
                      Email Address
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontSize: "16px" }}
                    >
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.updatedData.length != 0 &&
                    this.state.updatedData.map((val, i) => (
                      <TableRow
                        key={val.email}
                        className="contact"
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {val.userId}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          <span id={`labelName_${i}`} className="label">
                            {val.fname}
                          </span>
                          <input
                            type="text"
                            className="d-none name input-name form-control"
                            value={this.state.editContent.fname}
                            id={`name_${i}`}
                            name={`name_${i}`}
                            onChange={(e) =>
                              this.setState({ editContent: e.target.value })
                            }
                            style={{
                              display: "inline-block",
                              width: "90%",
                              float: "left",
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <span id={`labelEmail_${i}`} className="label">
                            {val.email}
                          </span>
                          <input
                            type="text"
                            className="d-none email input-email form-control"
                            value={this.state.editContent.email}
                            id={`email_${i}`}
                            name={`email_${i}`}
                            onChange={(e) =>
                              this.setState({ editContent: e.target.value })
                            }
                            style={{
                              display: "inline-block",
                              width: "90%",
                              float: "left",
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => {
                              this.editName(val, i);
                            }}
                            variant="contained"
                            color="primary"
                            className="btn btn-primary editBtn"
                            id={`editBtn_${i}`}
                          >
                            Edit
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                              this.saveName(val.userId, i);
                            }}
                            className="btn btn-primary d-none saveBtn"
                            id={`saveBtn_${i}`}
                          >
                            Save
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              this.deleteRow(i);
                            }}
                            className="btn btn-primary delBtn"
                            id={`delBtn_${i}`}
                          >
                            Delete
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() => {
                              this.cancelName(i);
                            }}
                            className="btn btn-primary d-none cancelBtn"
                            id={`cancelBtn_${i}`}
                          >
                            Cancel
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  {this.state.updatedData.length == 0 && (
                    <TableRow>
                      <Typography
                        align="right"
                        position="relative"
                        left="235px"
                        variant="h6"
                        gutterBottom
                        component="h6"
                      >
                        No Results Found
                      </Typography>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        }
      </>
    );
  }
}

export default EditSaveCancel;
