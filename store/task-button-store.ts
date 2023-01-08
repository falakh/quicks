import create from "zustand";

interface ITaskButtonStoreState {
  message: any;
  isActive: boolean;
  setIsActive: () => void;
  disableTaskButtonStore: () => void;
}

export const useTaskButtonStore = create<ITaskButtonStoreState>((set) => ({
  isActive: false,
  message: {},
  setIsActive: () => set({ isActive: true }),
  disableTaskButtonStore: () => set({ isActive: false }),
}));
