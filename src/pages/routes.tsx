import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./HomePage";
import { ListsTypeGamePage } from "./ListsTypeGamePage";
import { ListsGamesPage } from "./ListsGamesPage";
import { CardGamePage } from "./CardGamePage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lists" element={<ListsTypeGamePage />} />
        <Route path="/games" element={<ListsGamesPage />} />
        <Route path="/game-card" element={<CardGamePage />} />
      </Routes>
    </BrowserRouter>
  )
}