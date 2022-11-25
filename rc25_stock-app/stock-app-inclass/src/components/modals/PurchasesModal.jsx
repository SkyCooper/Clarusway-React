import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function PurchasesModal({ open, setOpen, info, setInfo }) {
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
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={info.name}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={info.name}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={info.name}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <TextField
              label="Quantity"
              name="name"
              id="name"
              required
              type="number"
              variant="outlined"
              value={info?.name || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />
            <TextField
              label="Price"
              name="name"
              id="name"
              required
              type="number"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
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
