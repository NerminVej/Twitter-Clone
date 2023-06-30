/*
  useLoginModal Custom Hook

  This custom hook is used to manage the state of a login modal.
  It utilizes Zustand, a state management library, to create a store with isOpen, onOpen, and onClose actions.

  Usage:
  const loginModal = useLoginModal();

  Returns:
  - loginModal: An object containing the state and actions for the login modal.

  loginModal:
    - isOpen: A boolean indicating whether the login modal is open.
    - onOpen: A function to open the login modal.
    - onClose: A function to close the login modal.
*/

import { create } from "zustand";

interface LoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Custom hook to manage the login modal state
const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
