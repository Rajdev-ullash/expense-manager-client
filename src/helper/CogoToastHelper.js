import cogoToast from "cogo-toast";

export const toast = (message, type) => {
  console.log("toast", message, type);
  switch (type) {
    case "success":
      cogoToast.success(message, {
        position: "top-center",
        // heading: "Success",
      });
      break;
    case "error":
      cogoToast.error(message, {
        position: "top-center",
        // heading: "Error",
      });
      break;
    case "info":
      cogoToast.info(message, {
        position: "top-center",
        // heading: "Info",
      });
      break;
    case "warn":
      cogoToast.warn(message, {
        position: "top-right",
        // heading: "Warning",
      });
      break;
    default:
      cogoToast.info(message, {
        position: "top-right",
        // heading: "Info",
      });
      break;
  }
};
