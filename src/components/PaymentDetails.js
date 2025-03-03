import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  TablePagination,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Title from "./Header/Title";
import BaseUrl from "../base_url/BaseUrl";
const PaymentDetails = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("Username");
  const apiUrl = `${BaseUrl}/analytics/payment-details`;
  const excelDownloadUrl = `${BaseUrl}/analytics/payment-details-excel`;
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadExcelFile = async () => {
    try {
      const response = await axios.get(excelDownloadUrl, {
        responseType: "blob",
      });
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "payment_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value, searchCategory);
  };

  const handleCategoryChange = (event) => {
    setSearchCategory(event.target.value);
    filterData(searchTerm, event.target.value);
  };

  const filterData = (term, category) => {
    if (!term) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((row) => {
      switch (category) {
        case "Username":
          return row.username.toLowerCase().includes(term.toLowerCase());
        case "Email":
          return row.email.toLowerCase().includes(term.toLowerCase());
        case "USN":
          return row.usn.toLowerCase().includes(term.toLowerCase());
        case "Transaction ID":
          return row.transactionId.toLowerCase().includes(term.toLowerCase());
        default:
          return false;
      }
    });

    setFilteredData(filtered);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Title title="Payment Details"></Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" color="primary" onClick={fetchData}>
          Reload
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={downloadExcelFile}
        >
          Download Excel
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ flex: "1 1 150px" }}
        />

        <Autocomplete
          options={["Username", "Email", "USN", "Transaction ID"]}
          value={searchCategory}
          onChange={handleCategoryChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Category"
              variant="outlined"
              fullWidth
              style={{ flex: "1 1 150px" }} // Adjust width and flex-grow/shrink basis
            />
          )}
        />
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Paper>
          <TableContainer component={Paper} style={{ maxHeight: "70vh" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "#f5f5f5",
                      zIndex: 1,
                    }}
                  >
                    Username
                  </TableCell>
                  <TableCell
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "#f5f5f5",
                      zIndex: 1,
                    }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "#f5f5f5",
                      zIndex: 1,
                    }}
                  >
                    USN
                  </TableCell>
                  <TableCell
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "#f5f5f5",
                      zIndex: 1,
                    }}
                  >
                    Transaction ID
                  </TableCell>
                  <TableCell
                    style={{
                      position: "sticky",
                      top: 0,
                      backgroundColor: "#f5f5f5",
                      zIndex: 1,
                    }}
                  >
                    Payment Date
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.usn}</TableCell>
                      <TableCell>{row.transactionId}</TableCell>
                      <TableCell>{row.paymentDate}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Container>
  );
};

export default PaymentDetails;
