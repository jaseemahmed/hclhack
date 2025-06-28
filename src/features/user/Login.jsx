import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./userApis";
import { userState } from "./userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const schema = Yup.object().shape({
    username: Yup.string().required("*Required"),
    password: Yup.string()
      .required("*Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Invalid password"
      ),
  });
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const user = useSelector(userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorState = useSelector((state) => state?.user?.error);
  const Login = (data) => {
    dispatch(loginUser({ username: data?.username, password: data?.password }));
  };

  useEffect(() => {
    if (user) {
      navigate("/portfolio");
    }
  }, [user, navigate]);

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined" sx={{ maxWidth: "35%" }}>
        {errorState && <Alert title={errorState} />}
        <CardContent>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            User Login
          </Typography>
          <form onSubmit={handleSubmit(Login)}>
            <FormControl fullWidth margin="normal">
              <Controller
                name="username"
                control={control}
                defaultValue={""}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                    label="Username"
                    placeholder="Username"
                    size="small"
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Controller
                name="password"
                control={control}
                defaultValue={""}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    type="password"
                    error={fieldState?.error}
                    helperText={fieldState?.error?.message}
                    label="Password"
                    placeholder="Username"
                    size="small"
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Button variant="contained" type="submit">
                Login
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
