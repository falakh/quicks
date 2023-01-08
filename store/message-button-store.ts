import create from "zustand";

interface IMessageButtonStoreState {
  message: any;
  isActive: boolean;
  setIsActive: () => void;
  disableMessageButtonStore: () => void;
}

export const useMessageButtonStore = create<IMessageButtonStoreState>((set) => ({
  isActive: false,
  message: {},
  setIsActive: () => set({ isActive: true }),
  disableMessageButtonStore: () => set({ isActive: false }),
}));
