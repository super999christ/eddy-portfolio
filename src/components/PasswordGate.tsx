import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import { FormEvent, useState } from "react";

const SITE_PASSWORD = "qwertyuiop";
const SESSION_KEY = "eddy-portfolio-authenticated";

function isAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(isAuthenticated);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) {
    return children;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === SITE_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setError(false);
      setUnlocked(true);
      return;
    }

    setError(true);
  };

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit}
        gap={2}
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Stack gap={0.5}>
          <Typography level="h3">Private preview</Typography>
          <Typography level="body1" textColor="text.tertiary">
            Enter the password to view this portfolio.
          </Typography>
        </Stack>

        <FormControl error={error}>
          <FormLabel>Password</FormLabel>
          <Input
            autoFocus
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              if (error) setError(false);
            }}
            placeholder="Enter password"
          />
          {error && (
            <Typography level="body2" color="danger" mt={0.5}>
              Incorrect password. Please try again.
            </Typography>
          )}
        </FormControl>

        <Button type="submit" fullWidth>
          Enter
        </Button>
      </Stack>
    </Box>
  );
}
