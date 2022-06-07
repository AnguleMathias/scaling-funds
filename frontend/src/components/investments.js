import React, { useEffect, useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const GATEWAY_INVESTORS_URL = "http://localhost:9001/investors";

const Investments = () => {
  // const [investors, setInvestors] = useState({});

  // useEffect(() => {
  const data = async () => await fetch(GATEWAY_INVESTORS_URL)
    .then((result) => {
      console.log("result", result);
      return result.json();
    })
    .catch((err) => console.error(err));
  
  

  const investors = Promise.resolve(data()).then((investors) => {
    console.log("investors 1", investors);
    return investors
  });
  // }, []);

  console.log("investors at 2", investors);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default Investments;
