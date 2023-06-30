/*
  useRegisterModal Custom Hook

  This custom hook provides state and functions to manage the register modal.
  It utilizes Zustand, a small state management library, to manage the modal state.

  Usage:
  const { isOpen, onOpen, onClose } = useRegisterModal();

  Returns:
  An object containing the following properties:
  - isOpen: A boolean indicating whether the register modal is open or closed.
  - onOpen: A function to open the register modal.
  - onClose: A function to close the register modal.
*/

import { create } from "zustand";

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
