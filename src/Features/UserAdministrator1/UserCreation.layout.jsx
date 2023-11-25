import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  isAlphaNumeric,
  isValidCharacter,
  isValidEmail,
  isValidIndianPhoneNum,
  isValidPassword,
} from "../../utils/regex/regex.service";
import InputTextView from "../../components/organism/InputTextView/InputTextView.Component";

const initialInputState = {
  firstName: "",
  middleName: "",
  lastName: "",
  mobileNumber: "",
  emailId: "",
  userName: "",
  password: "",
  roleType: "",
  groupType: "",
  status: "",
};
const UserCereation = () => {
  const [userDetail, setUserDetail] = useState({ ...initialInputState });
  const [validationError, setValidationError] = useState({
    firstName: false,
    lastName: false,
    mobileNumber: false,
    emailId: false,
    userName: false,
    password: false,
    roleType: false,
    groupType: false,
    status: false,
  });

  const getInputDetails = (e) => {
    const { name, value } = e.target;
    setUserDetail({ ...userDetail, [name]: value });
    console.log("First Name cature:", userDetail);
  };

  const onFormValidate = () => {
    const errorData = {};

    if (isValidCharacter(userDetail.firstName)) {
      errorData["firstName"] = true;
    } else {
      errorData["firstName"] = false;
    }

    errorData["firstName"] = !isValidCharacter(userDetail.firstName);
    errorData["lastName"] = !isValidCharacter(userDetail.lastName);
    errorData["mobileNumber"] = !isValidIndianPhoneNum(userDetail.mobileNumber);
    errorData["emailId"] = !isValidEmail(userDetail.emailId);
    errorData["userName"] = !isAlphaNumeric(userDetail.userName);
    errorData["password"] = !isValidPassword(userDetail.password);
    errorData["roleType"] = !userDetail.roleType;
    errorData["groupType"] = !userDetail.groupType;

    console.log("ErrData: ", errorData);
    console.log("usrData: ", userDetail);

    setValidationError((prevState) => ({ ...prevState, ...errorData }));

    const postResquest = async () => {
      const response = await axios.post(
        "http://localhost:3030/userAdmin",
        userDetail
      );
      toast("User created SuccessFully ");
      console.log("Data sent to the server:", response.data);
    };
    postResquest();
  };

  // const getUserDetailsSubmit = () => {
  //   let result;
  //   const userDetailsValidations = () => {
  //     result = userFirstNameValidation();
  //     result = userLastNameValidation();
  //     result = userMobileValidation();
  //     result = userEmailValidation();
  //     result = userRoleTypeValidation();
  //     result = userGroupTypeValidation();
  //     result = userUserName();
  //     result = userPassword();
  //   };
  //   userDetailsValidations();

  //   const userDetailSubmitArr = [];
  //   userDetailSubmitArr.push(userDetail);
  //   if (result) {
  //     setUserDetail({ ...initialInputState });
  //   }

  //   console.log("inside Submit method", userDetail);
  // };

  // const userPassword = () => {
  //   const isPasswordValid =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
  //       userDetail.password
  //     );
  //   if (!isPasswordValid) {
  //     // const errMsg =
  //     //   "Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special symbols";
  //     // set(errMsg);
  //     // toast(
  //     //   "Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special symbols"
  //     // );

  //   }
  // };

  return (
    <div className="MainContainer" style={{ margin: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>User Administrator</h1>
      </div>

      <div className="UserName">
        <h4>UserName: </h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <InputTextView
            name="firstName"
            placeholder="Enter first name"
            value={userDetail.firstName}
            errorMessage="Please enter a valid first name"
            onChange={getInputDetails}
            hasError={validationError.firstName}
            label="First Name"
          />
          {/*     <div>
            <div style={{ display: "-ms-flexbox" }}>
              <p>FirstName:</p>
              <input
                type="text"
                name="firstName"
                value={userDetail.firstName}
                onChange={getInputDetails}
              />
              <p style={{ fontSize: "12px", color: "red", height: "20px" }}>
                {validationError.firstName && "Please enter a valid first name"}
              </p>
            </div>
          </div> */}
          <div>
            <p>MiddleName:</p>
            <input
              type="text"
              name="middleName"
              value={userDetail.middleName}
              onChange={getInputDetails}
            />
            <p style={{ fontSize: "12px", color: "red", height: "20px" }}>{}</p>
          </div>

          <InputTextView
            name="lastName"
            placeholder="Enter last name"
            value={userDetail.lastName}
            errorMessage="Please enter a valid last name."
            onChange={getInputDetails}
            hasError={validationError.lastName}
            label="Last Name"
          />

          {/*    <div>
            <p>LastName:</p>
            <input
              type="text"
              name="lastName"
              onChange={getInputDetails}
              value={userDetail.lastName}
            />
            <p style={{ fontSize: "12px", color: "red", height: "20px" }}>
              {validationError.lastName && "Please enter a valid last name"}
            </p>
          </div> */}
        </div>
      </div>
      <div className="UserContactDetails">
        <h4>User Contact Details: </h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <InputTextView
            name="mobileNumber"
            type="number"
            placeholder="Enter phone number"
            value={userDetail.mobileNumber}
            errorMessage="Please enter a valid phone no."
            onChange={getInputDetails}
            hasError={validationError.mobileNumber}
            label="Mobile Number"
          />
          {/*   <div>
            <p>MobileNumber:</p>
            <input
              type="number"
              value={userDetail.mobileNumber}
              name="mobileNumber"
              onChange={getInputDetails}
            />
            <p style={{ fontSize: "12px", color: "red", height: "20px" }}>
              {validationError.mobileNumber &&
                "Please enter a valid contact number"}
            </p>
          </div> */}
          <div>
            EmailId:{" "}
            <input
              type="email"
              name="emailId"
              value={userDetail.emailId}
              onChange={getInputDetails}
            />
            <p style={{ fontSize: "12px", color: "red" }}>{}</p>
          </div>
        </div>
      </div>
      <div className="User Role">
        <h4>User Role: </h4>
        <div>
          Role Type:{" "}
          <select
            name="roleType"
            onChange={getInputDetails}
            value={userDetail.roleType}
          >
            <option value="initial">Select Type</option>
            <option value="Technician">Technician</option>
            <option value="Manager">Manager</option>
            <option value="Circle Manager">Circle Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>
      <div className="userGroup">
        <h4>User Group: </h4>
        <div>
          Group Type:
          <select
            name="groupType"
            onChange={getInputDetails}
            value={userDetail.groupType}
          >
            <option value="initial">Select Type</option>
            <option value="TechnicianGrp">TechnicianGrp</option>
            <option value="ManagerGrp">ManagerGrp</option>
            <option value="CircleManagerGrp">CircleManagerGrp</option>
            <option value="AdminGrp">AdminGrp</option>
          </select>
        </div>
      </div>
      <div className="userStatus">
        <div>
          <h3>User Status: </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p> Active:</p>{" "}
            <input
              type="radio"
              name="status"
              value={"active"}
              onChange={getInputDetails}
              checked={userDetail.status === "active"}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p> InActive:</p>{" "}
            <input
              type="radio"
              name="status"
              value={"inActive"}
              onChange={getInputDetails}
              checked={userDetail.status === "inActive"}
            />
          </div>
        </div>
      </div>
      <div className="userAuthenticationDetails">
        <div>
          <h3>User Authentication Details: </h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          <div>
            UserName:{" "}
            <input
              type="text"
              name="userName"
              onChange={getInputDetails}
              value={userDetail.userName}
            />
          </div>
          <div>
            Password:{" "}
            <input
              type="password"
              name="password"
              onChange={getInputDetails}
              value={userDetail.password}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <button onClick={onFormValidate}>Submit</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserCereation;
