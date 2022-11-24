import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flexColumn, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const { postFirm, putFirm } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putFirm(info); //? update etmek için (yani edit)
    } else {
      postFirm(info); //? yeni firma eklemek için
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
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            <TextField
              label="Firm Name"
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
              label="Phone"
              name="phone"
              id="phone"
              required
              type="tel"
              variant="outlined"
              value={info?.phone || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              required
              type="text"
              variant="outlined"
              value={info?.address || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />
            <TextField
              label="Image"
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
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
