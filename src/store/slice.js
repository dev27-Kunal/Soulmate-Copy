import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstCardScratched: false,
  secondCardScratched: false,
  thirdCardScratched: false,
  loveJournalVisualCue: true,
  loveCardVisualCue: true
};

export const appSlice = createSlice({
  name: "soulmateSlice",
  initialState,
  reducers: {
    setFirstCardScratched: (state, action) => {
      state.firstCardScratched = true;
      console.log("FirstCardScratched: ", state.firstCardScratched);
    },
    setSecondCardScratched: (state, action) => {
      state.secondCardScratched = true;
      console.log("secondCardScratched: ", state.secondCardScratched);
    },
    setThirdCardScratched: (state, action) => {
      state.thirdCardScratched = true;
      console.log("ThirdCardScratched: ", state.thirdCardScratched);
    },
    setLoveJournalVisualCue: (state, action) => {
      state.loveJournalVisualCue = false
    },
    setLoveCardVisualCue: (state, action) => {
      state.loveCardVisualCue = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setFirstCardScratched,
  setSecondCardScratched,
  setThirdCardScratched,
  setLoveJournalVisualCue,
  setLoveCardVisualCue,
} = appSlice.actions;

export default appSlice.reducer;
