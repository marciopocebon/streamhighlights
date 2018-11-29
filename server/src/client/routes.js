import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
import StreamersPage from "./pages/StreamersPage";
import StreamerDetailPage from "./pages/StreamerDetailPage";
import SessionPage from "./pages/SessionPage";
import GamesPage from "./pages/GamesPage";
import GamesDetailPage from "./pages/GamesDetailPage";
import PaginatedStreamersPage from "./pages/paginated/PaginatedStreamersPage";

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
        ...StreamersPage,
        path: "/streamers",
        exact: true
      },
      {
        ...PaginatedStreamersPage,
        path: "/streamers/page/:id"
      },
      {
        ...GamesPage,
        path: "/games"
      },
      {
        ...GamesDetailPage,
        path: "/game/:id"
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
