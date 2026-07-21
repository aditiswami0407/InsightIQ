import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="dashboard">
        <h2>Dashboard</h2>

        <div className="card-container">
          <Card title="Revenue" value="$5000" />
          <Card title="Profit" value="$2000" />
          <Card title="Expenses" value="$3000" />
          <Card title="Employees" value="50" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;