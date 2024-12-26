import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ClipboardState {
  readText: string | undefined;
  canReadText: boolean;
}

interface ClipboardActions {
  setReadText: (text: string) => void;
  setCanReadText: (canRead: boolean) => void;
  clearText: () => void;
}

const initialState: ClipboardState = {
  readText: undefined,
  canReadText: false,
};

const useClipboard = create<ClipboardState & ClipboardActions>()(
  persist(
    (set) => ({
      ...initialState,
      setReadText: (text) => set(() => ({ readText: text })),
      setCanReadText: (canRead) => set({ canReadText: canRead }),
      clearText: () => set({ readText: "" }),
    }),
    {
      name: "clipboard-storage",
    }
  )
);

export default useClipboard;
