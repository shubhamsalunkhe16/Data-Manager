import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import "./Users.css";
import { Fab, Grid, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

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
      open: false,
      selectedUserID: null,
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
  saveName(userId) {
    var updatedname = document.getElementById("name_" + userId).value;
    var updatedemail = document.getElementById("email_" + userId).value;

    if (updatedname == "" && updatedemail == "") {
      alert("Please Enter Name and Email");
      return;
    } else if (updatedname == "") {
      alert("Please Enter Name");
      return;
    } else if (updatedemail == "") {
      alert("Please Enter Email");
      return;
    }

    const selectedIndex = this.state.data.findIndex((x) => x.userId == userId);

    if (this.state.action == "add") {
      this.state.data.shift();
      this.state.data.push({
        userId: userId,
        fname: updatedname,
        email: updatedemail,
      });
    } else {
      this.state.data[selectedIndex].userId = userId;
      this.state.data[selectedIndex].fname = updatedname;
      this.state.data[selectedIndex].email = updatedemail;
    }

    this.setState({
      data: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      updatedData: this.state.data.sort((a, b) => this.ascendOrder(a, b)),
      searchContent: "",
      activity: this.state.activity + 1,
    });

    document.getElementById("labelName_" + userId).classList.remove("d-none");
    document.getElementById("labelEmail_" + userId).classList.remove("d-none");
    document.getElementById("editBtn_" + userId).classList.remove("d-none");
    document.getElementById("delBtn_" + userId).classList.remove("d-none");
    document.getElementById("name_" + userId).classList.add("d-none");
    document.getElementById("email_" + userId).classList.add("d-none");
    document.getElementById("saveBtn_" + userId).classList.add("d-none");
    document.getElementById("cancelBtn_" + userId).classList.add("d-none");

    var editClassName = document.getElementsByClassName("editBtn");
    var deleteClassName = document.getElementsByClassName("delBtn");
    for (var i = 0; i < editClassName.length; i++) {
      editClassName[i].style.pointerEvents = "auto";
      editClassName[i].style.opacity = "1";
      deleteClassName[i].style.pointerEvents = "auto";
      deleteClassName[i].style.opacity = "1";
    }

    this.setDataInLocalStorage();
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
  editName(userId) {
    this.setState({ action: "edit" });

    // this.setState({ editContent: "abc" }); // Update state here

    document.getElementById("labelName_" + userId).classList.add("d-none");
    document.getElementById("labelEmail_" + userId).classList.add("d-none");
    document.getElementById("editBtn_" + userId).classList.add("d-none");
    document.getElementById("delBtn_" + userId).classList.add("d-none");
    document.getElementById("name_" + userId).classList.remove("d-none");
    document.getElementById("email_" + userId).classList.remove("d-none");
    document.getElementById("saveBtn_" + userId).classList.remove("d-none");
    document.getElementById("cancelBtn_" + userId).classList.remove("d-none");

    document.getElementById("name_" + userId).value = document.getElementById(
      "labelName_" + userId
    ).innerText;
    document.getElementById("email_" + userId).value = document.getElementById(
      "labelEmail_" + userId
    ).innerText;

    var editclassName = document.getElementsByClassName("editBtn");
    var delclassName = document.getElementsByClassName("delBtn ");

    for (var i = 0; i < editclassName.length; i++) {
      var ids = editclassName[i].id.substring(8);

      if (ids != userId) {
        editclassName[i].style.pointerEvents = "none";
        editclassName[i].style.opacity = "0.5";
        delclassName[i].style.pointerEvents = "none";
        delclassName[i].style.opacity = "0.5";
      }
    }
  }
  cancelName(userId) {
    document.getElementById("labelName_" + userId).classList.remove("d-none");
    document.getElementById("labelEmail_" + userId).classList.remove("d-none");
    document.getElementById("editBtn_" + userId).classList.remove("d-none");
    document.getElementById("delBtn_" + userId).classList.remove("d-none");
    document.getElementById("name_" + userId).classList.add("d-none");
    document.getElementById("email_" + userId).classList.add("d-none");
    document.getElementById("saveBtn_" + userId).classList.add("d-none");
    document.getElementById("cancelBtn_" + userId).classList.add("d-none");

    var editclassName = document.getElementsByClassName("editBtn");
    var delclassName = document.getElementsByClassName("delBtn ");
    for (var i = 0; i < editclassName.length; i++) {
      var ids = editclassName[i].id.substring(8);
      if (ids != userId) {
        editclassName[i].style.pointerEvents = "auto";
        editclassName[i].style.opacity = "1";
        delclassName[i].style.pointerEvents = "auto";
        delclassName[i].style.opacity = "1";
      }
    }

    const lastName = this.state.data.sort((a, b) => this.ascendOrder(a, b));
    const lastItem = lastName[lastName.length - 1]; // last item not in array if not saved "https://flaviocopes.com/how-to-get-last-item-array-javascript/"

    if (
      document.getElementById("name_" + userId).value == "" ||
      lastItem == "" ||
      document.getElementById("email_" + userId).value == "" ||
      lastItem == "" ||
      this.state.action == "add"
    ) {
      this.state.data.pop();
      var newName = this.state.data.sort((a, b) => this.ascendOrder(a, b));
      this.setState({
        data: newName,
        updatedData: newName,
      });
    }
  }
  deleteRow = (userId) => {
    var afterDelete = this.state.data.filter((data) => data.userId != userId);

    var newName = afterDelete.sort((a, b) => this.ascendOrder(a, b));

    this.setState({
      data: newName,
      updatedData: newName,
    });
    var className = document.getElementsByClassName("editBtn");
    for (var i = 0; i < className.length; i++) {
      className[i].style.pointerEvents = "auto";
      className[i].style.opacity = "1";
    }

    localStorage.setItem("users", JSON.stringify(afterDelete));
    localStorage.setItem("activity", JSON.stringify(this.state.activity + 1));

    this.setState({
      data: newName,
      updatedData: newName,
      activity: this.state.activity + 1,
    });
  };
  addRow() {
    this.setState({ action: "add" });
    var rows = this.state.data.sort((a, b) => this.ascendOrder(a, b));
    var newIdToGenrate = this.state.data[this.state.data.length - 1].userId + 1;

    // rows.push({ fname: "", email: "" });
    rows.unshift({ userId: newIdToGenrate, fname: "", email: "" });
    this.setState({ data: rows, updatedData: rows });

    // var lastRow = rows.length - 1;

    setTimeout(function () {
      //   var index = lastRow;
      var index = 0;
      document
        .getElementById("labelName_" + newIdToGenrate)
        ?.classList.add("d-none");
      document
        .getElementById("labelEmail_" + newIdToGenrate)
        ?.classList.add("d-none");
      document
        .getElementById("editBtn_" + newIdToGenrate)
        ?.classList.add("d-none");
      document
        .getElementById("delBtn_" + newIdToGenrate)
        ?.classList.add("d-none");
      document
        .getElementById("name_" + newIdToGenrate)
        ?.classList.remove("d-none");
      document.getElementById("name_" + newIdToGenrate)?.focus();
      document
        .getElementById("email_" + newIdToGenrate)
        ?.classList.remove("d-none");
      document
        .getElementById("saveBtn_" + newIdToGenrate)
        ?.classList.remove("d-none");
      document
        .getElementById("cancelBtn_" + newIdToGenrate)
        ?.classList.remove("d-none");

      document.getElementById("name_" + index) &&
        (document.getElementById("name_" + index).value = "");
      document.getElementById("email_" + index) &&
        (document.getElementById("email_" + index).value = "");

      // var className = document.getElementsByClassName("editBtn");
      // if (className.length != 0)
      //   for (var i = 0; i < className.length; i++) {
      //     if (i != index) {
      //       className[i].style.pointerEvents = "none";
      //       className[i].style.opacity = "0.5";
      //     }
      //   }

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
    }, 500);
  }
  // Ascending Order
  sortByAscending() {
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

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
                <TextField
                  type="text"
                  className="search name input-name form-control"
                  value={this.state.searchContent}
                  id="search"
                  name="search"
                  autoComplete="off"
                  placeholder="Filter by Full Name..."
                  // label="Filter by Full Name..."
                  onChange={(e) => this.filterByFullName(e)}
                  sx={{
                    width: "50%",
                    float: "left",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                  type="search"
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
                  size="large"
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <TableContainer
              component={Paper}
              sx={{ minWidth: 650, height: 350 }}
            >
              <Table
                // sx={{ minWidth: 650, height: 200 }}
                aria-label="simple table"
              >
                <TableHead sx={{ backgroundColor: "#1b2330" }}>
                  <TableRow sx={{ height: "60px" }}>
                    <TableCell
                      sx={{ color: "white", fontSize: "16px" }}
                      align="center"
                    >
                      User ID &nbsp;
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
                          height: "60px",
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {val.userId}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          <span
                            id={`labelName_${val.userId}`}
                            className="label"
                          >
                            {val.fname}
                          </span>
                          <input
                            type="text"
                            className="d-none name input-name form-control"
                            value={this.state.editContent.fname}
                            id={`name_${val.userId}`}
                            name={`name_${val.userId}`}
                            onChange={(e) =>
                              this.setState({ editContent: e.target.value })
                            }
                            style={{
                              display: "inline-block",
                              width: "70%",
                              float: "center",
                              padding: "5px",
                              textAlign: "center",
                              borderRadius: "5px",
                              border: "1px solid black",
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <span
                            id={`labelEmail_${val.userId}`}
                            className="label"
                          >
                            {val.email}
                          </span>
                          <input
                            type="text"
                            className="d-none email input-email form-control"
                            value={this.state.editContent.email}
                            id={`email_${val.userId}`}
                            name={`email_${val.userId}`}
                            onChange={(e) =>
                              this.setState({ editContent: e.target.value })
                            }
                            style={{
                              display: "inline-block",
                              width: "70%",
                              float: "center",
                              padding: "5px",
                              textAlign: "center",
                              borderRadius: "5px",
                              border: "1px solid black",
                            }}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            onClick={() => {
                              this.editName(val.userId);
                            }}
                            variant="contained"
                            color="primary"
                            className="btn btn-primary editBtn"
                            id={`editBtn_${val.userId}`}
                          >
                            Edit
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => {
                              this.saveName(val.userId);
                            }}
                            className="btn btn-primary d-none saveBtn"
                            id={`saveBtn_${val.userId}`}
                          >
                            Save
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              this.handleClickOpen();
                              // this.deleteRow(val);
                              this.setState({ selectedUserID: val.userId });
                            }}
                            className="btn btn-primary delBtn"
                            id={`delBtn_${val.userId}`}
                          >
                            Delete
                          </Button>
                          <Dialog
                            open={this.state.open}
                            onClose={() => this.handleClose()}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              <Typography
                                // textAlign="center"
                                variant="h4"
                                component="h4"
                              >
                                <InfoRoundedIcon
                                  sx={{
                                    fontSize: "50px",
                                    color: "orange",
                                    mr: "10px",
                                    position: "relative",
                                    top: "15px",
                                  }}
                                />
                                Please Confirm
                              </Typography>
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                <Typography
                                  textAlign="center"
                                  variant="h6"
                                  component="h6"
                                  fontWeight="normal"
                                >
                                  Are you sure you want Delete record?
                                </Typography>
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions
                              sx={{
                                mb: "15px !important",
                                mr: "15px !important",
                              }}
                            >
                              <Button
                                color="error"
                                variant="contained"
                                onClick={() => {
                                  this.deleteRow(this.state.selectedUserID);
                                  this.handleClose();
                                }}
                              >
                                Delete
                              </Button>
                              <Button
                                color="info"
                                variant="contained"
                                onClick={() => this.handleClose()}
                                autoFocus
                              >
                                Cancel
                              </Button>
                            </DialogActions>
                          </Dialog>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() => {
                              this.cancelName(val.userId);
                            }}
                            className="btn btn-primary d-none cancelBtn"
                            id={`cancelBtn_${val.userId}`}
                          >
                            Cancel
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  {this.state.updatedData.length == 0 && (
                    <TableRow>
                      <TableCell>
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
                      </TableCell>
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
