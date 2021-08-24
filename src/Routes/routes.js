import Home from "../components/Home";
import ToDoApp from "../components/ToDoApp";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/todoapp",
    exact: true,
    render: (props, count, setCount) => {
      return <ToDoApp {...props} count={count} setCount={setCount} />;
    },
  },
];
