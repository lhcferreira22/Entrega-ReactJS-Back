const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Games",
      lessons: [
        { id: 1, title: "Call of Duty" },
        { id: 2, title: "Fifa 21" },
      ],
    },
    {
      id: 2,
      title: "Músicas",
      lessons: [
        { id: 3, title: "Flying to the moon - Sinatra " },
        { id: 4, title: "Game of love - Santana" },
      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
