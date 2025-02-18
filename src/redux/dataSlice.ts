import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDocs,
  db,
} from "../firebase/config";
import { TaskData } from "../components/AddTask";

interface TaskState {
  tasks: TaskData[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const tasksCollection = collection(db, "tasks");
  const taskSnapshot = await getDocs(tasksCollection);
  return taskSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as TaskData[];
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task: TaskData) => {
    const tasksCollection = collection(db, "tasks");
    const docRef = await addDoc(tasksCollection, task);
    return { id: docRef.id, ...task };
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task: TaskData) => {
    const { id, ...taskData } = task;
    const taskDoc = doc(db, "tasks", id!);
    await updateDoc(taskDoc, taskData);
    return { id, ...taskData };
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: string) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
    return id;
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tasks";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
