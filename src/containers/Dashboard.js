import React from "react";
import TopContainer from "./TopContainer";
import jwt from "jsonwebtoken"

let token = localStorage.getItem("token");
var decoded = jwt.decode(token, { complete: true });

export default () => <TopContainer merchantName={decoded.payload.name}/>;