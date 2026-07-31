import { FaDatabase } from "react-icons/fa";
import "../styles/EmptyState.css";

function EmptyState({
  title = "No Data Found",
  subtitle = "There is nothing to display."
}) {
  return (
    <div className="empty-state">

      <FaDatabase className="empty-icon" />

      <h2>{title}</h2>

      <p>{subtitle}</p>

    </div>
  );
}

export default EmptyState;