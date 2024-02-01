import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ModalState {
    isOpen: boolean;
    setOpen: () => void;
    setClose: () => void;
  }
  
  const useModalStore = create<ModalState>()(
        (set) => ({
          isOpen: false,
          setOpen: () => set({ isOpen: true }),
          setClose: () => set({ isOpen: false }),
        }),
    );
  
  export default useModalStore;