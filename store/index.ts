const initState = {
  greeting: "Hello",
};

const AppModel = {
  namespace: "app",
  state: initState,
  reducers: {
    setGreeting(state: any) {
      return { ...state, greeting: state.greeting + "... again, " };
    },
  },
  effects: {
    *example({ payload }: any, { call, put, select }: any): any {},
  },
  subscriptions: {},
};

export default AppModel;
