import { create } from 'zustand';

interface RegisterModelStore{
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}

 //hook to control login model
const useRegisterModel= create<RegisterModelStore>((set)=>({
  isOpen: false, //turn off/on login page
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useRegisterModel;