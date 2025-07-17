import { useEffect, useReducer } from "react";
import type { Line } from "../types";
import { getTubeLineStatuses } from "../api/tflApi";

interface State {
  lines: Line[];
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: { lines: Line[]; lastUpdated: Date } }
  | { type: "FETCH_ERROR"; payload: string };

const lineStatusReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        lines: action.payload.lines,
        lastUpdated: action.payload.lastUpdated,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialState: State = {
  lines: [],
  loading: true,
  error: null,
  lastUpdated: null,
};

export const useLineStatus = () => {
  const [state, dispatch] = useReducer(lineStatusReducer, initialState);

  useEffect(() => {
    const fetchStatuses = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await getTubeLineStatuses();
        dispatch({
          type: "FETCH_SUCCESS",
          payload: { lines: data, lastUpdated: new Date() },
        });
      } catch (err) {
        dispatch({
          type: "FETCH_ERROR",
          payload:
            "Failed to retrieve data from TFL station. Please try again later.",
        });
        console.error(err);
      }
    };

    fetchStatuses();
  }, []);

  return { ...state };
};
