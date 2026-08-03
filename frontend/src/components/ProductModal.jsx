import "./ProductModal.css";

function ProductModal({
  show,
  editing,
  onClose,
  onSave,
  product,
  setProduct,
}) {

  if (!show) return null;

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onloadend = () => {

        setProduct({
          ...product,
          image: reader.result,
        });

      };

      reader.readAsDataURL(file);

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>

          {editing ? "Edit Product" : "Add Product"}

        </h2>

        {/* Product Name */}

        <div className="form-group">

          <label>Product Name</label>

          <input
            type="text"
            placeholder="Enter product name"
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value,
              })
            }
          />

        </div>

        {/* Category */}

        <div className="form-group">

          <label>Category</label>

          <input
            type="text"
            placeholder="Electronics, Clothing..."
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value,
              })
            }
          />

        </div>

        {/* Price */}

        <div className="form-group">

          <label>Price (₹)</label>

          <input
            type="number"
            placeholder="Enter product price"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value,
              })
            }
          />

        </div>

        {/* Stock */}

        <div className="form-group">

          <label>Stock Quantity</label>

          <input
            type="number"
            placeholder="Enter stock quantity"
            value={product.stock}
            onChange={(e) =>
              setProduct({
                ...product,
                stock: e.target.value,
              })
            }
          />

        </div>

        {/* Product Image */}

        <div className="form-group">

          <label>Upload Product Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

        </div>

        {/* Preview */}

        {product.image && (

          <div className="image-preview">

            <img
              src={product.image}
              alt="Preview"
            />

          </div>

        )}

        {/* Description */}

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="4"
            placeholder="Enter product description"
            value={product.description}
            onChange={(e) =>
              setProduct({
                ...product,
                description: e.target.value,
              })
            }
          />

        </div>

        {/* Buttons */}

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={onSave}
          >
            {editing ? "Update Product" : "Save Product"}
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductModal;