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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TablePagination,
  Autocomplete,
  TextField,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Title from "./Header/Title";
import BaseUrl from "../base_url/BaseUrl";
const eventOptions = [
  {
    id: "MAIN-1",
    name: "Paper Presentation",
    department: "MAIN",
    event_type: "TEAM",
  },
  {
    id: "MAIN-2",
    name: "Technical Quiz",
    department: "MAIN",
    event_type: "TEAM",
  },
  {
    id: "MAIN-3",
    name: "Technical Debate",
    department: "MAIN",
    event_type: "INDIVIDUAL",
  },
  { id: "MAIN-4", name: "Hackathon", department: "MAIN", event_type: "TEAM" },
  { id: "MAIN-5", name: "Robo Mania", department: "MAIN", event_type: "TEAM" },
  { id: "CSE-1", name: "Virtual Hunt", department: "CSE", event_type: "TEAM" },
  {
    id: "CSE-2",
    name: "ImaginAItion Station",
    department: "CSE",
    event_type: "TEAM",
  },
  {
    id: "CHEM-1",
    name: "Brain Bonding",
    department: "CHEM",
    event_type: "TEAM",
  },
  { id: "MAT-1", name: "Olympiad", department: "MAT", event_type: "TEAM" },
  { id: "CE-1", name: "Stick Structure", department: "CE", event_type: "TEAM" },
  {
    id: "CE-2",
    name: "Experimental Design",
    department: "CE",
    event_type: "TEAM",
  },
  { id: "ISE-1", name: "Urban Pulse", department: "ISE", event_type: "TEAM" },
  {
    id: "ISE-2",
    name: "Mobile Marvels",
    department: "ISE",
    event_type: "TEAM",
  },
  { id: "ECE-1", name: "IGNITE", department: "ECE", event_type: "TEAM" },
  { id: "ECE-2", name: "Laser Mazer", department: "ECE", event_type: "TEAM" },
  {
    id: "ARCH-1",
    name: "Urban Lens",
    department: "ARCH",
    event_type: "INDIVIDUAL",
  },
  {
    id: "ARCH-2",
    name: "Quizzy Braniacs",
    department: "ARCH",
    event_type: "TEAM",
  },
  { id: "EEE-1", name: "Model Making", department: "EEE", event_type: "TEAM" },
  { id: "EEE-2", name: "Electrifest", department: "EEE", event_type: "TEAM" },
  {
    id: "EEE-3",
    name: "Troubleshooting",
    department: "EEE",
    event_type: "TEAM",
  },
  {
    id: "ME-1",
    name: "Icarus - Glider Making Competition",
    department: "ME",
    event_type: "TEAM",
  },
  {
    id: "ME-2",
    name: "Metis - Simplex to Complex",
    department: "ME",
    event_type: "TEAM",
  },
  {
    id: "AE-2",
    name: "Aircrash Investigation",
    department: "AE",
    event_type: "TEAM",
  },
  {
    id: "PHY-1",
    name: "Entangled Expression",
    department: "PHYSICS",
    event_type: "TEAM",
  },
];

const EventDetails = () => {
  const [selectedEvent, setSelectedEvent] = useState("MAIN-1");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("Username");
  const [eventType, setEventType] = useState("");
  const baseUrl = `${BaseUrl}/analytics/event-participants`;
  const excelDownloadUrl = `{${BaseUrl}/analytics/event-participation-excel`;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fetchEventData = async (eventId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/${eventId}`);
      setData(response.data.data.participants || []);
      setEventType(response.data.data.event_type.toUpperCase());
      setFilteredData(response.data.data.participants || []);
    } catch (error) {
      console.error("Error fetching event data:", error);
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
      link.setAttribute("download", "event_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  useEffect(() => {
    fetchEventData(selectedEvent);
  }, [selectedEvent]);

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
    fetchEventData(event.target.value);
  };

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

  const handleCategoryChange = (event, newCategory) => {
    setSearchCategory(newCategory);
    filterData(searchTerm, newCategory);
  };

  const filterData = (term, category) => {
    if (!term) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((participant) => {
      const participantData =
        eventType === "TEAM"
          ? participant.team_details.leader
          : participant.user_details;

      switch (category) {
        case "Username":
          return participantData.username
            ?.toLowerCase()
            .includes(term.toLowerCase());
        case "Email":
          return participantData.email
            ?.toLowerCase()
            .includes(term.toLowerCase());
        case "USN":
          return participantData.usn
            ?.toLowerCase()
            .includes(term.toLowerCase());
        case "Transaction ID":
          return participantData.transactionId
            ?.toLowerCase()
            .includes(term.toLowerCase());
        default:
          return false;
      }
    });

    setFilteredData(filtered);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Title title="Event Details"></Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => fetchEventData(selectedEvent)}
        >
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
      <FormControl fullWidth style={{ marginBottom: "20px" }}>
        <Autocomplete
          options={eventOptions}
          getOptionLabel={(option) => option.name}
          value={
            eventOptions.find((event) => event.id === selectedEvent) || null
          }
          onChange={(event, newValue) => {
            handleEventChange({
              target: { value: newValue ? newValue.id : "" },
            });
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Event" variant="outlined" />
          )}
          isOptionEqualToValue={(option, value) => option.id === value.id}
        />
      </FormControl>
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
          style={{ flex: "1 1 150px" }} // Adjust width and flex-grow/shrink basis
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
          <TableContainer style={{ maxHeight: "70vh" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell style={{ backgroundColor: "#f5f5f5" }}>
                    {eventType === "TEAM"
                      ? "Team Leader Name"
                      : "Participant Name"}
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f5f5f5" }}>
                    Email
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f5f5f5" }}>
                    USN
                  </TableCell>
                  {eventType === "TEAM" && (
                    <TableCell style={{ backgroundColor: "#f5f5f5" }}>
                      Team Size
                    </TableCell>
                  )}
                  <TableCell style={{ backgroundColor: "#f5f5f5" }}>
                    Payment Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((participant, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {eventType === "TEAM"
                          ? participant.team_details.leader.username
                          : participant.user_details.username}
                      </TableCell>
                      <TableCell>
                        {eventType === "TEAM"
                          ? participant.team_details.leader.email
                          : participant.user_details.email}
                      </TableCell>
                      <TableCell>
                        {eventType === "TEAM"
                          ? participant.team_details.leader.usn
                          : participant.user_details.usn}
                      </TableCell>
                      {eventType === "TEAM" && (
                        <TableCell>
                          {participant.team_details.teamSize}
                        </TableCell>
                      )}
                      <TableCell>
                        {eventType === "TEAM"
                          ? participant.team_details.leader.paymentStatus
                          : participant.user_details.paymentStatus}
                      </TableCell>
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

export default EventDetails;
