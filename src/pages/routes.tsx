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
        <Route path="/lists-type" element={<ListsTypeGamePage />} />
        <Route path="/lists-games" element={<ListsGamesPage />} />
        <Route path="/card-game" element={<CardGamePage />} />
      </Routes>
    </BrowserRouter>
  )
}