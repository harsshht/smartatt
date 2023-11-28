// AttendanceDashboard.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const AttendanceDashboard = () => {
  useEffect(() => {
    // Sample data for analytics
    const analyticsData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Attendance Rate',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    // Sample data for graph
    const graphData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [
        {
          label: 'Weekly Attendance',
          data: [30, 45, 60, 75, 90],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };

    // Keep track of created charts
    let analyticsChart;
    let graphChart;

    // Destroy existing charts
    const destroyCharts = () => {
      if (analyticsChart) {
        analyticsChart.destroy();
      }
      if (graphChart) {
        graphChart.destroy();
      }
    };

    destroyCharts();

    // Analytics Chart
    const analyticsChartContext = document.getElementById('analyticsChart').getContext('2d');
    analyticsChart = new Chart(analyticsChartContext, {
      type: 'bar',
      data: analyticsData,
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Graph Chart
    const graphChartContext = document.getElementById('graphChart').getContext('2d');
    graphChart = new Chart(graphChartContext, {
      type: 'line',
      data: graphData,
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Cleanup on component unmount
    return () => destroyCharts();
  }, []);

  return (
    <div className="h-screen w-full bg-black p-8 ">
      <h2 className="text-2xl font-bold mb-4 text-white">Attendance Dashboard</h2>
      
      {/* Display both graphs side by side */}
      <div className="flex flex-wrap justify-between ">
        {/* Analytics Chart */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 p-10 bg-slate-800 rounded-3xl">
          <h3 className="text-xl font-bold mb-2 text-white">Attendance Analytics</h3>
          <canvas id="analyticsChart" width="400" height="200"></canvas>
        </div>

        {/* Graph Chart */}
        <div className="w-full md:w-1/2 mb-2 p-10 bg-slate-800 rounded-3xl">
          <h3 className="text-xl font-bold mb-2 text-white">Weekly Attendance Graph</h3>
          <canvas id="graphChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
