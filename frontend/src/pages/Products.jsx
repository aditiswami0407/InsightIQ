import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProductModal from "../components/ProductModal";
import "../styles/Products.css";

function Products() {


  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
    description: "",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: "80000",
      stock: "15",
      image: "📱",
      description: "Apple Smartphone",
    },
    {
      id: 2,
      name: "MacBook Pro",
      category: "Laptop",
      price: "150000",
      stock: "8",
      image: "💻",
      description: "Apple Laptop",
    },
  ]);

  const handleSave = () => {

    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.stock
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingId !== null) {

      setProducts(
        products.map((item) =>
          item.id === editingId
            ? {
                ...item,
                ...product,
              }
            : item
        )
      );

    } else {

      setProducts([
        ...products,
        {
          id: Date.now(),
          ...product,
        },
      ]);

    }

    setProduct({
      name: "",
      category: "",
      price: "",
      stock: "",
      image: "",
      description: "",
    });

    setEditingId(null);

    setShowModal(false);

  };

  const editProduct = (item) => {

    setEditingId(item.id);

    setProduct({
      name: item.name,
      category: item.category,
      price: item.price,
      stock: item.stock,
      image: item.image,
      description: item.description,
    });

    setShowModal(true);

  };

  const deleteProduct = (id) => {

    if (window.confirm("Delete this product?")) {

      setProducts(
        products.filter((item) => item.id !== id)
      );

    }

  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const inventoryValue = products.reduce(
    (total, item) =>
      total +
      Number(item.price) *
      Number(item.stock),
    0
  );

  return (

    <MainLayout>

      <div className="products">

        {/* Header */}

        <div className="products-header">

          <div>

            <h1>Product Management</h1>

            <p>
              Manage all company products from one place.
            </p>

          </div>

          <button
            className="add-product-btn"
            onClick={() => {

              setEditingId(null);

              setProduct({
                name: "",
                category: "",
                price: "",
                stock: "",
                image: "",
                description: "",
              });

              setShowModal(true);

            }}
          >
            + Add Product
          </button>

        </div>

        {/* Search */}

        <div className="search-section">

          <input
            type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Cards */}

        <div className="product-cards">

          <div className="product-card">

            <h3>Total Products</h3>

            <h2>{products.length}</h2>

          </div>

          <div className="product-card">

            <h3>Categories</h3>

            <h2>

              {
                new Set(
                  products.map((item) => item.category)
                ).size
              }

            </h2>

          </div>

          <div className="product-card">

            <h3>Low Stock</h3>

            <h2>

              {
                products.filter(
                  (item) =>
                    Number(item.stock) <= 10
                ).length
              }

            </h2>

          </div>

          <div className="product-card">

            <h3>Inventory Value</h3>

            <h2>

              ₹{inventoryValue.toLocaleString()}

            </h2>

          </div>

        </div>

        {/* Table */}

        <div className="table-section">

          <table>

            <thead>

              <tr>

                <th>Image</th>

                <th>Name</th>

                <th>Category</th>

                <th>Price</th>

                <th>Stock</th>

                <th>Status</th>

                <th>Description</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {filteredProducts.map((item) => (

                <tr key={item.id}>

                  <td>

                    {item.image || "📦"}

                  </td>

                  <td>{item.name}</td>

                  <td>{item.category}</td>

                  <td>

                    ₹{Number(item.price).toLocaleString()}

                  </td>

                  <td>{item.stock}</td>

                  <td>

                    {Number(item.stock) > 10 && (

                      <span className="status available">

                        In Stock

                      </span>

                    )}

                    {Number(item.stock) <= 10 &&
                      Number(item.stock) > 0 && (

                      <span className="status low">

                        Low Stock

                      </span>

                    )}

                    {Number(item.stock) === 0 && (

                      <span className="status out">

                        Out of Stock

                      </span>

                    )}

                  </td>

                  <td>

                    {item.description}

                  </td>

                 <td className="action-buttons">

                    <button
                   className="view-btn"
                    onClick={() => navigate(`/products/${item.id}`)}
  >   
                   👁 <span>View</span>
                  </button>

  <button
    className="edit-btn"
    onClick={() => editProduct(item)}
  >
    ✏ <span>Edit</span>
  </button>

  <button
    className="delete-btn"
    onClick={() => deleteProduct(item.id)}
  >
    🗑 <span>Delete</span>
  </button>

</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <ProductModal
        show={showModal}
        editing={editingId !== null}
        onClose={() => {

          setShowModal(false);

          setEditingId(null);

        }}
        onSave={handleSave}
        product={product}
        setProduct={setProduct}
      />

    </MainLayout>

  );

}

export default Products;