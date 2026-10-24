import { createRoot } from "react-dom/client";
import "./base.css";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GalleryPage from "./pages/GalleryPage";
import HistoryPage from "./pages/HistoryPage";
import SoundtracksPage from "./pages/SoundtracksPage";
import TrackPreviewPage from "./pages/TrackPreviewPage";

const pages = {
  home: HomePage,
  games: GamesPage,
  gallery: GalleryPage,
  history: HistoryPage,
  soundtracks: SoundtracksPage,
  "track-preview": TrackPreviewPage,
};

const rootElement = document.getElementById("root");
const Page = pages[rootElement.dataset.page] ?? HomePage;

createRoot(rootElement).render(<Page />);
