import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const obj = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const ShowToast = (message = "", type = "success") => {
  switch (type) {
    case "success":
      return toast.success(message, obj);
      break;
    case "error":
      return toast.error(message, obj);
      break;
    case "info":
      return toast.info(message, obj);
      break;
    default:
      toast.success(message, obj);
      break;
  }
};

export default ShowToast;
