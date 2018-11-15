import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
import StreamersPage from "./pages/StreamersPage";
import StreamerDetailPage from "./pages/StreamerDetailPage";

export default [
  {
    ...App,
    routes: [
      {
        ...StreamersPage,
        path: "/",
        exact: true
      },
      { path: '/streamer/:id',
        ...StreamerDetailPage
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
