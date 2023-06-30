/*
  useEditModal Custom Hook

  This custom hook is used to manage the state of an edit modal.
  It uses Zustand library to create a store with isOpen, onOpen, and onClose actions.

  Usage:
  const { isOpen, onOpen, onClose } = useEditModal();

  Returns:
  - isOpen: A boolean indicating whether the edit modal is open or not.
  - onOpen: Function to open the edit modal.
  - onClose: Function to close the edit modal.
*/

import { create } from "zustand";

// Define the interface for the EditModalStore
interface EditModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Create a custom hook called useEditModal using Zustand
const useEditModal = create<EditModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditModal;
