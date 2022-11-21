import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
//? loadinButton geliştirme aşamasında olduğu için mui içinde lab'dan import ediliyor.
//? importtan önce de yarn add @mui/lab ile kurulması gerekiyor.
import * as yup from "yup";
//? yup formik ile çok uyumlu kullanılıyor fakat mui ve diğer kütüphanelerle birlikte de kullanılabilir.
import useAuthCall from "../hooks/useAuthCall";
import { useEffect } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please  enter an email"),
  //! parantez içine birşey yazılmaz ise yup kendi default uyarısını verir.
  password: yup
    .string()
    .required("Please enter a password ")
    //? handleblur fonksiyonu min-max olayını kontrol ediyor, ona göre hata mesajını çıkarıyor/kaldırıyor.
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    //? regex kullanmak için matches fonksiyonu kullanılıyor.
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state?.auth);
  const { login } = useAuthCall();

  useEffect(() => {
    if (currentUser) {
      navigate("/stock");
      toastSuccessNotify("Login Performed");
    }
  }, [currentUser]);

  useEffect(() => {
    error && toastErrorNotify("Login can not e performed");
  }, [error]);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            //? başlangıç değerlerini boş/null olarak veriyoruz,
            //? form elementlerinde kullanılcak state'lerin başlangıç değerleri
            validationSchema={loginSchema}
            //? aslında formik'in kendi validasyon metodları var, fakat burada biz yup kullandık
            //? 1-direk burada dahili olarak yazılablir, 2-yukarıdaki gibi değişken olarak yazılabilir, 3-ayrı bir dosyada yazılıp burada import edilebilir.
            onSubmit={(values, actions) => {
              login(values);
              //? logine valuler yollanıyor.
              navigate("/stock");
              actions.resetForm();
              //? formu temizle
              actions.setSubmitting(false);
              //? submit olduğunda otomatik true oluyor, manuel olarak false kuruluyor.
            }}
            //? formun submitinde yapılacak işlemler buraya yazılıyor
          >
            {({
              values,
              isSubmitting,
              handleChange,
              handleBlur,
              touched,
              errors,
            }) => (
              //! burada HTML form elementi, formik form elementi, MUI form elementi vs.. ne istersek onu import edip kullanabiliriz.
              //! aşağıdaki formik Form elementi
              <Form>
                {/* //! fakat içindeki elementleri MUİ den kullandık */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    //? value değeri onSubmitteki values içinden geliyor.
                    value={values.email}
                    //? handleChange ve handleBlur dahili olarak formik içinde geliyor.
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  {/* loadinButton geliştirme aşamasında olduğu için mui içinde lab'dan import ediliyor. */}
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    loadingPosition="center"
                    variant="contained"
                  >
                    Submit
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
