import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
import StreamersPage from "./pages/StreamersPage";
import StreamerDetailPage from "./pages/StreamerDetailPage";
import SessionPage from "./pages/SessionPage";

export default [
  {
    ...App,
    routes: [
      {
        ...StreamersPage,
        path: "/",
        exact: true
      },
      {
        ...StreamerDetailPage,
        path: "/streamer/:id"
      },
      {
        ...SessionPage,
        path: "/session/:id"
      },
      {
        path: "/users",
        ...UsersListPage
      },
      {
        path: "/admins",
        ...AdminsListPage
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
