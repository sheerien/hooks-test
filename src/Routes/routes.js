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
    render: (props) => {
      return <CountPage {...props} />;
    },
  },
];
