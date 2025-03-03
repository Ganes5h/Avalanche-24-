import BaseUrl from "../base_url/BaseUrl";
import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Users, CreditCard, Users2, UserPlus } from "lucide-react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import Title from "./Header/Title";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);
const AvalancheDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalVerifiedPayments: 0,
    totalRegistrations: 0,
    registrationsByDay: [],
    totalTeams: 0,
  });

  useEffect(() => {
    const fetchEventStats = async () => {
      try {
        const response = await fetch(`${BaseUrl}/team/events/stats`);
        const data = await response.json();
        setStats({
          ...data,
          registrationsByDay: data.registrationsByDay.map((item) => ({
            date: item._id,
            count: item.count,
          })),
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    fetchEventStats();
  }, []);

  // Data for the line chart
  const lineChartData = {
    labels: stats.registrationsByDay.map((item) => item.date),
    datasets: [
      {
        label: "Registrations",
        data: stats.registrationsByDay.map((item) => item.count),
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
      },
    ],
  };

  // Data for the doughnut chart
  const doughnutData = {
    labels: ["Total Users", "Verified Payments", "Total Teams"],
    datasets: [
      {
        label: "Distribution",
        data: [stats.totalUsers, stats.totalVerifiedPayments, stats.totalTeams],
        backgroundColor: ["#42a5f5", "#66bb6a", "#ffb74d"],
      },
    ],
  };

  // Data for the bar chart
  const barChartData = {
    labels: [
      "Total Users",
      "Verified Payments",
      "Total Teams",
      "Total Registrations",
    ],
    datasets: [
      {
        label: "Overview",
        data: [
          stats.totalUsers,
          stats.totalVerifiedPayments,
          stats.totalTeams,
          stats.totalRegistrations,
        ],
        backgroundColor: ["#3f51b5", "#4caf50", "#ff9800", "#009688"],
      },
    ],
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Title title="Dashboard Analytics" />
      <Grid style={{ marginTop: "20px" }} container spacing={4}>
        {[
          {
            title: "Total Users",
            value: stats.totalUsers,
            icon: <Users />,
            color: "#3f51b5",
          },
          {
            title: "Verified Payments",
            value: stats.totalVerifiedPayments,
            icon: <CreditCard />,
            color: "#4caf50",
          },
          {
            title: "Total Teams",
            value: stats.totalTeams,
            icon: <Users2 />,
            color: "#ff9800",
          },
          {
            title: "Total Registrations",
            value: stats.totalRegistrations,
            icon: <UserPlus />,
            color: "#009688",
          },
        ].map((stat, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Paper
              style={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: stat.color,
                color: "#fff",
              }}
            >
              {stat.icon}
              <Typography variant="h6" component="h3">
                {stat.title}
              </Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Payment Status */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Payment Status</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Verified Payments</span>
            <span className="text-success font-medium">
              {stats.totalVerifiedPayments}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Pending Payments</span>
            <span className="text-warning font-medium">
              {stats.totalUsers - stats.totalVerifiedPayments}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Payment Success Rate</span>
            <span className="text-primary font-medium">
              {stats.totalRegistrations > 0
                ? (
                    (stats.totalVerifiedPayments / stats.totalUsers) *
                    100
                  ).toFixed(1)
                : "0.0"}
              %
            </span>
          </div>
        </div>
      </div>

      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={6}>
          <h2 className="text-2xl font-bold mb-4">Data Distribution</h2>
          <Doughnut data={doughnutData} options={{ responsive: true }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <h2 className="text-2xl font-bold mb-4">Overview Comparison</h2>
          <Bar data={barChartData} options={{ responsive: true }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvalancheDashboard;
