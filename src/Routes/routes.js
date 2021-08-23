import CountPage from "../components/CountPage";
import Home from "../components/Home";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/countpage",
    exact: true,
    render: (props, count, setCount) => {
      return <CountPage {...props} count={count} setCount={setCount} />;
    },
  },
];
