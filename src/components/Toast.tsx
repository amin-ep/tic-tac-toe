import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster
      position="bottom-right"
      gutter={5}
      toastOptions={{
        success: {
          duration: 4000,
        },
        error: {
          duration: 4000,
        },
        style: {
          fontSize: "16px",
          maxWidth: "95%",
          padding: "1rem 1.5rem",
        },
      }}
    />
  );
}

export default Toast;
