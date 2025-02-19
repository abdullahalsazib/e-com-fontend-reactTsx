import { create } from "zustand";

interface AlertState {
  message: string;
  type: "success" | "error" | "info";
  show: boolean;
  showAlert: (msg: string, type?: "success" | "error" | "info") => void;
  hideAlert: () => void;
}

const useAlertStore = create<AlertState>((set) => ({
  message: "",
  type: "success",
  show: false,
  showAlert: (msg, type = "success") => set({ message: msg, type, show: true }),
  hideAlert: () => set({ show: false }),
}));
export default useAlertStore
