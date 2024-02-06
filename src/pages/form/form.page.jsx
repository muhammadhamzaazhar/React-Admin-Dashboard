import { Box, Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "../../components/header/header.component";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

var phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const yupValidation = yup.object().shape({
  firstName: yup
    .string()
    .min(1, "Too Short !")
    .max(30, "Too Long !")
    .required("Required !"),

  lastName: yup
    .string()
    .min(1, "Too Short !")
    .max(30, "Too Long !")
    .required("Required !"),

  email: yup
    .string()
    .email("Enter a Valid Email")
    .required("Email is Required"),

  contact: yup
    .string()
    .matches(phoneRegEx, "Phone number is not valid")
    .required("Required !"),

  address1: yup.string().required("Required !"),

  address2: yup.string().required("Required !"),
});

const ProfileForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handelFormSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
  };

  return (
    <Box m="20px">
      <Header title="Create User" subTitle="Create a New User Profile" />
      <Formik
        onSubmit={handelFormSubmit}
        initialValues={initialValues}
        validationSchema={yupValidation}
      >
        {(props) => {
          return (
            <Form onSubmit={props.handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4,minmax(0,1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                  },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.firstName}
                  name="firstName"
                  error={!!props.errors.firstName && !!props.touched.firstName}
                  helperText={props.touched.firstName && props.errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.lastName}
                  name="lastName"
                  error={!!props.errors.lastName && !!props.touched.lastName}
                  helperText={props.touched.lastName && props.errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.email}
                  name="email"
                  error={!!props.errors.email && !!props.touched.email}
                  helperText={props.touched.email && props.errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.contact}
                  name="contact"
                  error={!!props.errors.contact && !!props.touched.contact}
                  helperText={props.touched.contact && props.errors.contact}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 1"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.address1}
                  name="address1"
                  error={!!props.errors.address1 && !!props.touched.address1}
                  helperText={props.touched.address1 && props.errors.address1}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address 2"
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                  value={props.values.address2}
                  name="address2"
                  error={!!props.errors.address2 && !!props.touched.address2}
                  helperText={props.touched.address2 && props.errors.address2}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ProfileForm;
