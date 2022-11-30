import * as React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

import useStockCalls from "../../hooks/useStockCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PurchasesModal({ open, setOpen, info, setInfo }) {
  const navigate = useNavigate();
  const { postProduct, putPurchase, postPurchase } = useStockCalls();
  const { firms, brands, products } = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putPurchase(info); //? varolan ürün güncellemek için;
    } else {
      postPurchase(info); //? yeni ürün eklemek için;
    }

    // postProduct(info.name, info.category_id, info.brand_id); //? yeni ürün eklemek için
    setOpen(false); //? modalın kapanması için
    setInfo({}); //? modalın içini boşaltmak için
  };

  console.log(info);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    //? yukarıda dest yapılmasaydı aşağıdaki gibi yazılırdı.
    //? setInfo({...info, [e.target.name]:e.target.value})
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false); //? kapanınca false'a kur
          setInfo({}); //? modal kapanınca sıfırla
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* //! türünü form yaptık */}
        <Box sx={modalStyle}>
          <Box sx={flexColumn} component={"form"} onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel variant="outlined" id="firm-select-label">
                Firm
              </InputLabel>
              <Select
                labelId="firm-select-label"
                label="Firm"
                id="firm-select"
                name="firm_id"
                value={info?.firm_id || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/firms")}>
                  Add New Firm
                </MenuItem>
                <hr />
                {firms?.map((firm) => {
                  return (
                    <MenuItem key={firm.id} value={firm.id}>
                      {firm.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant="outlined" id="brand-select-label">
                Brand
              </InputLabel>
              <Select
                labelId="brand-select-label"
                label="Brand"
                id="brand-select"
                name="brand_id"
                value={info?.brand_id || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/brands")}>
                  Add New Brand
                </MenuItem>
                {brands?.map((brand) => {
                  return (
                    <MenuItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant="outlined" id="product-select-label">
                Product
              </InputLabel>
              <Select
                labelId="product-select-label"
                label="Product"
                id="product-select"
                name="product_id"
                value={info?.product_id || ""}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate("/stock/products")}>
                  Add New Product
                </MenuItem>
                {products?.map((product) => {
                  return (
                    <MenuItem key={product.id} value={product.id}>
                      {product.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <TextField
              label="Quantity"
              id="quantity"
              name="quantity"
              type="number"
              variant="outlined"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.quantity || ""}
              onChange={handleChange}
              required
            />
            <TextField
              label="Price"
              id="price"
              type="number"
              variant="outlined"
              name="price"
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.price || ""}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
            >
              {info?.id ? "Update Purchase" : "Add New Purchase"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
