import create from "zustand";
import { chatListDummy } from "../dummy-data/chat-list";
interface IMessageButtonStoreState {
  message: typeof chatListDummy;
  isActive: boolean;
  setIsActive: () => void;
  disableMessageButtonStore: () => void;
  requestMessage: () => void;
  isMessageRequestLoading: boolean;
}

export const useMessageButtonStore = create<IMessageButtonStoreState>((set) => ({
  isActive: false,
  message: [],
  isMessageRequestLoading: false,
  setIsActive: () => set({ isActive: true }),
  disableMessageButtonStore: () => set({ isActive: false }),
  requestMessage: async () => {
    set({ isMessageRequestLoading: true });
    const request = await fetch("/api/message");
    const result = await request.json();
    set({ message: result, isMessageRequestLoading: false });
  },
}));
