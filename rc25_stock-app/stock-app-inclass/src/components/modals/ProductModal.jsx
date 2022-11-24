import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const { postProduct } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(info.name, info.category_id, info.brand_id); //? yeni ürün eklemek için
    setOpen(false); //? modalın kapanması için
    setInfo({}); //? modalın içini boşaltmak için
  };

  console.log(info);

  const handleChange = (e) => {
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
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            <TextField
              label="Name"
              name="name"
              id="name"
              required
              type="text"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              label="Category ID"
              name="category_id"
              id="category_id"
              required
              type="text"
              variant="outlined"
              value={info?.category_id || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />
            <TextField
              label="Brand ID"
              name="brand_id"
              id="brand_id"
              required
              type="text"
              variant="outlined"
              value={info?.brand_id || ""}
              onChange={handleChange}
            />

            {/* <TextField
              label="Stock"
              name="stock"
              id="stock"
              required
              type="number"
              variant="outlined"
              value={info?.stock || ""}
              onChange={handleChange}
            /> */}
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
            >
              Submit Product
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
