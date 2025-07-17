import { create } from "zustand";
import type { Line } from "../types";
import { getTubeLineStatuses } from "../api/tflApi";

interface LineState {
  lines: Line[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  fetchLineStatuses: () => Promise<void>;
}

export const useLineStore = create<LineState>((set) => ({
  lines: [],
  loading: true,
  error: null,
  lastUpdated: null,

  fetchLineStatuses: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getTubeLineStatuses();
      set({
        lines: data,
        lastUpdated: new Date(),
        loading: false,
      });
    } catch (err) {
      console.error(err);
      set({
        error: "Failed to retrieve data from TFL station.",
        loading: false,
      });
    }
  },
}));
