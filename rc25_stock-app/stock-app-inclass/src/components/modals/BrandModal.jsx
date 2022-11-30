import * as React from "react";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStockCalls from "../../hooks/useStockCalls";

export default function BrandModal({ open, setOpen, info, setInfo }) {
  const { postBrand, putBrand } = useStockCalls();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
    //? yukarıda dest yapılmasaydı aşağıdaki gibi yazılırdı.
    //? setInfo({...info, [e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    if (info.id) {
      putBrand(info); //? update etmek için (yani edit)
    } else {
      postBrand(info); //? yeni marka eklemek için
    }
    setOpen(false); //? modalın kapanması için
    setInfo({}); //? modalın içini boşaltmak için
  };

  return (
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
              label="Brand Name"
              name="name"
              id="name"
              required
              type="text"
              variant="outlined"
              value={info?.name || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />

            <TextField
              label="Image Url"
              name="image"
              id="image"
              required
              type="url"
              variant="outlined"
              value={info?.image || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
            >
              Save Brand
            </Button>
          </Box>
        </Box>
      </Modal>
  );
}
