import MainLayout from "../layouts/MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProductDetails.css";

function ProductDetails() {

  const navigate = useNavigate();
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: "80000",
      stock: "15",
      image: "📱",
      description: "Apple Smartphone with A16 Bionic Chip",
    },
    {
      id: 2,
      name: "MacBook Pro",
      category: "Laptop",
      price: "150000",
      stock: "8",
      image: "💻",
      description: "Apple M3 Pro Laptop",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <MainLayout>
        <div className="product-details">
          <h1>Product Not Found</h1>
        </div>
      </MainLayout>
    );
  }

  return (

    <MainLayout>

      <div className="product-details">

        <button
          className="back-btn"
          onClick={() => navigate("/products")}
        >
          ← Back
        </button>

        <div className="details-card">

          <div className="image-section">

            <div className="product-icon">
              {product.image}
            </div>

          </div>

          <div className="info-section">

            <h1>{product.name}</h1>

            <div className="detail-row">
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>

            <div className="detail-row">
              <span>Price</span>
              <strong>₹{Number(product.price).toLocaleString()}</strong>
            </div>

            <div className="detail-row">
              <span>Stock</span>
              <strong>{product.stock}</strong>
            </div>

            <div className="detail-row">
              <span>Status</span>

              <span
                className={
                  Number(product.stock) > 10
                    ? "status available"
                    : "status low"
                }
              >
                {Number(product.stock) > 10
                  ? "In Stock"
                  : "Low Stock"}
              </span>

            </div>

            <div className="detail-row description">

              <span>Description</span>

              <p>{product.description}</p>

            </div>

            <div className="action-buttons">

              <button className="edit-btn">
                Edit
              </button>

              <button className="delete-btn">
                Delete
              </button>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}

export default ProductDetails;