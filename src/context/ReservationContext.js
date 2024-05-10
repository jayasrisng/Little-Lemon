import React, { createContext, useContext, useReducer } from "react";

const ReservationContext = createContext();

const initialState = {
  formData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_RESERVATION":
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export const ReservationStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ReservationContext.Provider value={{ state, dispatch }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationState = () => useContext(ReservationContext);
