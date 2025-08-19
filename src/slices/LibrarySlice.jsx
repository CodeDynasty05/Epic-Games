import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ownedGameIds: [],
};

export const LibrarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addGame: (state, action) => {
      if (!state.ownedGameIds.includes(action.payload.id)) {
        state.ownedGameIds.push(action.payload.id);
      }
    },
    addMultipleGames: (state, action) => {
      const newGameIds = action.payload;
      newGameIds.forEach((id) => {
        if (!state.ownedGameIds.includes(id)) {
          state.ownedGameIds.push(id);
        }
      });
    },
  },
});

export const { addGame, addMultipleGames } = LibrarySlice.actions;

export const selectOwnedGameIds = (state) => state.library.ownedGameIds;

export default LibrarySlice.reducer;
