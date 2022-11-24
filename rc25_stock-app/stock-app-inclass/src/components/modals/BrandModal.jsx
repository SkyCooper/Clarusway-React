import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function BrandModal({ open, setOpen, info, setInfo }) {
  const { postBrand, putBrand } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putBrand(info); //? update etmek için (yani edit)
    } else {
      postBrand(info); //? yeni firma eklemek için
    }
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
          <Box component="form" onSubmit={handleSubmit} sx={flexCenter}>
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
            <Button type="submit" variant="contained">
              Save Brand
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
