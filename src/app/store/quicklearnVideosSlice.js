import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../config/api"

const initialState = {
  loading: false,
  haveData: false,
  haveError: false,
  videos: []
}

export const fetchQuickLearnVideos = createAsyncThunk('videos/getData', async() => {
  const result = await api.get('/videos');
  return result;
})

export const quicklearnVideosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuickLearnVideos.pending, (state, action) => {
      state.loading = true;
      state.haveData = false;
      state.haveError = false;
    }).addCase(fetchQuickLearnVideos.fulfilled, (state, action) => {
      //console.log(action)
      state.videos = action.payload.videos;
      state.loading = false;
      state.haveData = true;
      state.haveError = false;
    }).addCase(fetchQuickLearnVideos.rejected, (state, action) => {
      state.loading = false;
      state.haveError = true;
      state.haveData = false;
    })
  }
})
export default quicklearnVideosSlice.reducer;