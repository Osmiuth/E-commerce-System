import React, { useEffect, useState } from "react";
import "../styles/OffCanvas.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import api from "../api";

function AddEditProduct({ show, handleClose, initialProduct, isEditing }) {
  const [errors, setErrors] = useState({});

  const [product, setProduct] = useState(
    initialProduct || {
      productID: "",
      productName: "",
      description: "",
      dim_x: "",
      dim_y: "",
      category: { name: "", newCategory: "" }, // This should be an object with a name field
      material: "",
      metric: "",
      capacity: "",
      metric2: "",
      image: "",
    }
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get("/api/categories/"); // replace with your API endpoint
      setCategories(response.data);
    };

    fetchCategories();
  }, []);
  
  useEffect(() => {
    setProduct(
      initialProduct || {
        productID: "",
        productName: "",
        description: "",
        dim_x: "",
        dim_y: "",
        category: { name: "", newCategory: "" },
        material: "",
        metric: "",
        capacity: "",
        metric2: "",
        image: "",
      }
    );
  }, [initialProduct]);



  const handleChange = (e) => {
    if (e.target.name.includes(".")) {
      const [field, nestedField] = e.target.name.split(".");
      setProduct({
        ...product,
        [field]: { ...product[field], [nestedField]: e.target.value },
      });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));

    // Clear the error message for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateField = (name, value) => {
    let errorMessage = null;

    if (name === "productID") {
      if (value.length <= 3) {
        errorMessage = "Product ID must be more than 3 characters!";
      }
      if (value.length >= 20) {
        errorMessage = "Product ID must be less than 20 characters!";
      } else if (!/^[a-zA-Z0-9_-]*$/.test(value)) {
        errorMessage =
          "Product ID can only contain alphanumeric characters, hyphens, and underscores!";
      }
    }
    if (name === "productName") {
      if (value.length >= 20) {
        errorMessage = "Product Name must not be more than 20 characters!";
      } else if (!/^[a-zA-Z0-9-& ]*$/.test(value)) {
        errorMessage = "Product Name can only contain letters, numbers, spaces, hyphens (-), and ampersands (&)!";
      }
    }
    if (name === "productName" && !value.trim()) {
      errorMessage = "Product Name cannot be blank!";
    }
    if (name === "productName" && value.length <= 2) {
      errorMessage = "Product Name must be more than 2 characters!";
    }
    if (name === "description" && value.length > 1000) {
      errorMessage = "Description must not exceed 1000 characters!";
    }
    if (name === "description" && value.length <= 10) {
      errorMessage = "Description must be more than 10 characters!";
    }
    if (name === "description" && !value.trim()) {
      errorMessage = "Description cannot be blank!";
    }
    if (name === "category.name" && value === "") {
      errorMessage = "Please select a category!";
    }
    if (name === "category.newCategory" && value && !value.trim()) {
      errorMessage = "Category Name cannot be blank!";
    }
    if (name === "category.newCategory" && product.category.name === "other" && value.length > 50) {
      errorMessage = "New Category must not exceed 50 characters!";
    }
    if (
      name === "category.newCategory" &&
      product.category.name === "other" &&
      value && value.length <= 2
    ) {
      errorMessage = "Category Name must be more than 2 characters!";
    }
    if (name === "category.newCategory" && categories.some(category => category.name === value)) {
      errorMessage = "This category already exists.";
    }
    if (name === "material" && value.length > 50) {
      errorMessage = "Material must not exceed 50 characters!";
    }
    if (name === "material" && value.length <= 2) {
      errorMessage = "Material must be more than 2 characters!";
    }
    if (name === "material" && !value.trim()) {
      errorMessage = "Material cannot be blank!";
    }
    if (name === "dim_x" && value !== "" && value < 0) {
      errorMessage = "Dimension X must not be a negative number!";
    }
    if (name === "dim_y" && value !== "" && value < 0) {
      errorMessage = "Dimension Y must not be a negative number!";
    }
    if (name === "dim_x" && value !== "" && (product.dim_y === "" || product.metric === "")) {
      errorMessage = "Please fill out all dimension and metric fields!";
    }
    if (name === "dim_y" && value !== "" && (product.dim_x === "" || product.metric === "")) {
      errorMessage = "Please fill out all dimension and metric fields!";
    }
    if (name === "metric" && value !== "" && (product.dim_x === "" || product.dim_y === "")) {
      errorMessage = "Please fill out all dimension and metric fields!";
    }
    if (
      name === "metric" &&
      product.dim_x !== "" &&
      product.dim_y !== "" &&
      value === ""
    ) {
      errorMessage = "Please select a metric!";
    }
    if (name === "capacity" && value !== "") {
      if (!/^\d+$/.test(value)) {
        errorMessage = "Capacity must only contain numbers!";
      } else if (parseInt(value, 10) < 0) {
        errorMessage = "Capacity must not be negative!";
      }
    }
    if (name === "capacity" && value !== "0" && product.metric2 === "") {
      errorMessage = "You entered a capacity. Please enter a metric2!";
    }
    if (name === "capacity" && value === "0" && product.metric2 !== "") {
      errorMessage = "You entered a capacity of 0. Please remove the measurement!";
    }
    if (name === "capacity" && value === "" && product.metric2 !== "") {
      errorMessage = "You entered a measurement. Please enter a capacity!";
    }
    return errorMessage;
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024; // size in MB
    const validImageTypes = [
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    if (!validImageTypes.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        image:
          "Invalid file type. The image must be a .gif, .jpeg, or .png file.",
      }));
    } else if (fileSize > 10) {
      // if the file is larger than 10MB
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: "File size too large. The image must be less than 10MB.",
      }));
    } else {
      // clear the error and set the file
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: null,
      }));
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    const newErrors = {};
    let hasError = false;

    // Validate each field
    Object.keys(product).forEach((field) => {
      let fieldValue = product[field];

      if (typeof fieldValue === "object") {
        // For nested objects
        Object.keys(fieldValue).forEach((nestedField) => {
          const fieldName = `${field}.${nestedField}`;
          if (
            fieldName === "category.newCategory" &&
            product.category.name !== "other"
          ) {
            return;
          }
          const error = validateField(fieldName, fieldValue[nestedField]);
          newErrors[fieldName] = error;
          if (error) {
            hasError = true;
          }
        });
      } else {
        const error = validateField(field, fieldValue);
        newErrors[field] = error;
        if (error) {
          hasError = true;
        }
      }
    });

    if (product.category.name === "other" && (!product.category.newCategory || product.category.newCategory.trim() === "")) {
      newErrors["category.newCategory"] = "New Category must not be blank!";
      hasError = true;
    }
    
    if (!isEditing && !image) {
      newErrors.image = "An image is required.";
      hasError = true;
    }

    setErrors(newErrors);
    console.log("product here", errors);

    if (hasError) {
      console.log("Validation errors found!");
      // If there are validation errors, don't proceed with the submission
      return;
    }

    try {
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      }
      Object.keys(product).forEach((key) => {
        if (key === "image") {
          // Skip appending the image here, because we've already appended it at the beginning
          return;
        }
        if (key === "category") {
          if (product[key] && product[key].name) {
            // If the selected category is "Other", append the new category name
            if (product[key].name === "other") {
              formData.append("category.name", product[key].newCategory);
            } else {
              formData.append("category.name", product[key].name.trimStart());
            }
          } else {
            // Append an empty string if product.category or product.category.name is falsy
            formData.append(key, "");
          }
        } else {
          formData.append(key, typeof product[key] === 'string' ? product[key].trimStart() : product[key]);
        }
      });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      if (initialProduct) {
        await api.put(`/api/products/${initialProduct.id}/`, formData, config);
      } else {
        console.log(product);
        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
        api.post("/api/products/", formData, config);
      }

      handleClose();
      window.location.reload(); // This might not be necessary, consider removing
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains("offcanvas-backdrop")) {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1040,
          }}
          onClick={handleBackdropClick}
        />
      )}
      <div
        className={`offcanvas offcanvas-end custom-offcanvas ${
          isOpen ? "show" : ""
        }`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        s
        style={{ padding: "1rem" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">
            {isEditing ? "Edit/Update Product" : "Add a Product"}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
        <div className="offcanvas-body">
          <form
            id="form"
            onSubmit={handleSubmit}
            className={`needs-validation`}
            noValidate
          >
            <div className="mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${
                    errors.productID ? "is-invalid" : ""
                  }`}
                  id="productID"
                  name="productID"
                  placeholder="Product ID"
                  value={product.productID}
                  onChange={handleChange}
                  required
                />
                <label>Product ID</label>
                <div className="invalid-feedback">{errors.productID}</div>
              </div>
            </div>
            <div className="mb-2">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${
                    errors.productName ? "is-invalid" : ""
                  }`}
                  id="productName"
                  name="productName"
                  placeholder="Product Name"
                  value={product.productName}
                  onChange={handleChange}
                  required
                />
                <label>Product Name</label>
                <div className="invalid-feedback">{errors.productName}</div>
              </div>
            </div>
            <div className="mb-2">
              <label className="form-label">Description</label>
              <textarea
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
                id="description"
                name="description"
                rows="5"
                value={product.description}
                onChange={handleChange}
                required
              ></textarea>
              <div className="invalid-feedback">{errors.description}</div>
            </div>
            <div className="mb-2">
              <div>
                <label className="form-label">Category</label>
                <select
                  className={`form-select ${
                    errors["category.name"] ? "is-invalid" : ""
                  }`}
                  id="category"
                  name="category.name"
                  value={product.category.name}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a Category
                  </option>

                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
                <div className="invalid-feedback">
                  {errors["category.name"]}
                </div>
              </div>
              {product.category.name === "other" && (
                <div className="form-floating mt-2">
                  <input
                    type="text"
                    className={`form-control ${
                      errors["category.newCategory"] ? "is-invalid" : ""
                    }`}
                    id="newCategory"
                    name="category.newCategory"
                    placeholder="New Category"
                    value={product.category.newCategory}
                    onChange={handleChange}
                  />
                  <label>New Category</label>
                  <div className="invalid-feedback">
                    {errors["category.newCategory"]}
                  </div>
                </div>
              )}
            </div>
            <div className="col">
              <div className="form-floating">
                <input
                  type="text"
                  className={`form-control ${
                    errors.material ? "is-invalid" : ""
                  }`}
                  placeholder="Material"
                  aria-label="material"
                  name="material"
                  value={product.material}
                  onChange={handleChange}
                />
                <label className="col-form-label">Material</label>
                <div className="invalid-feedback">{errors.material}</div>
              </div>
            </div>
            <label className="col-form-label">Dimension</label>
            <div className="input-group mb-3">
              <input
                type="number"
                className={`form-control ${errors.dim_x ? "is-invalid" : ""}`}
                placeholder="Dimension"
                name="dim_x"
                value={product.dim_x}
                onChange={handleChange}
                aria-label="Dimension"
              />
              <span className="input-group-text">X</span>
              <input
                type="number"
                className={`form-control ${errors.dim_y ? "is-invalid" : ""}`}
                placeholder="Dimension"
                name="dim_y"
                value={product.dim_y}
                onChange={handleChange}
                aria-label="Dimension"
              />
              <div className="col-md-2">
                <select
                  className={`form-select ${
                    errors.metric ? "is-invalid" : ""
                  }`}
                  id="metric"
                  name="metric"
                  value={product.metric}
                  onChange={handleChange}
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  <option value="">
                    measurement
                  </option>
                  <option value="in">in</option>
                  <option value="ft">ft</option>
                  <option value="yd">yd</option>
                  <option value="mm">mm</option>
                  <option value="m">m</option>
                </select>
              </div>
              <div className="invalid-feedback">{errors.dim_x}</div>
              <div className="invalid-feedback">{errors.dim_y}</div>
              <div className="invalid-feedback">{errors.metric}</div>
            </div>
            <div class="input-group mb-2 col">
            <div className="col-8">
            <div className="form-floating">
                <input
                  type="number"
                  className={`form-control ${
                    errors.capacity ? "is-invalid" : ""
                  }`}
                  id="capacity"
                  name="capacity"
                  placeholder="capacity"
                  value={product.capacity}
                  onChange={handleChange}
                />
                <label htmlFor="capacity">Capacity</label>
                <div className="invalid-feedback">{errors.capacity}</div>
              </div>
              </div>
              <select
                  className={`form-select col-1 ${
                    errors.metric2 ? "is-invalid" : ""
                  }`}
                  id="metric2"
                  name="metric2"
                  value={product.metric2}
                  onChange={handleChange}
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  <option value="">
                    measurement
                  </option>
                  <option value="L">Liter (L)</option>
                  <option value="ml">Milliliter (mL)</option>
                  <option value="oz">Ounce (oz)</option>
                  <option value="pt">Pint (pt)</option>
                  <option value="gal">Gallon (gal)</option>
                </select>
                <div className="invalid-feedback">
                  {errors.metric2}
                </div>
            </div>

            
            {product.image && (
              <div>
                <p className="mb-0 mt-2">Current image</p>
                <img
                  src={product.image}
                  alt="Current product"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            )}
            <div className="mb-5">
              <label className="col-form-label">
                {isEditing ? "Select a new picture" : "Insert Product Image"}
              </label>
              <input
                className={`form-control ${errors.image ? "is-invalid" : ""}`}
                id="productImage"
                type="file"
                name="image"
                onChange={handleImageChange}
                required
              />
              <div className="invalid-feedback">{errors.image}</div>
            </div>

            <div className="gap-3 btn-footer mt-3">
              <button
                type="button"
                className="btn btn-secondary wide-btn w-100"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={handleClose}
              >
                Close
              </button>
              <button className="btn btn-primary wide-btn w-100" type="submit">
                {isEditing ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddEditProduct;
