import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import { Button, TextField } from "@mui/material";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({...info, [name]:value})
    //? yukarıda dest yapılmasaydı aşağıdaki gibi yazılırdı.
    //? setInfo({...info, [e.target.name]:e.target.value})
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* //! türünü form yaptık */}
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexCenter}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
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
              type="url"
              variant="outlined"
              value={info?.image || ""}
              //? varsa name yaz, yoksa boş geç hata verme demek
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              Submit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
