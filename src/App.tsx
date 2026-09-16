import React, { useState, useEffect, Suspense } from "react";
import "./effects/kage-landing-page/styles.css";
import { BatikCatalog } from "./components/BatikCatalog";
import { BatikDetail } from "./components/BatikDetail";
import { BATIK_COLLECTION, BatikItem } from "./data/batikData";

// Lazy-load the Kage landing page component per Step 6 of SKILL.md
const KageLandingPage = React.lazy(
  () => import("./effects/kage-landing-page/KageLandingPage")
);

export function Scene({
  currentView
}: {
  currentView: "landing" | "catalog" | "detail";
  onOpenCatalog?: () => void;
}) {
  return (
    <div
      className="effect-frame"
      style={{
        display: currentView === "landing" ? "block" : "none"
      }}
    >
      <Suspense
        fallback={
          <div className="kage-loader">
            <div className="kage-loader-pulse"></div>
            <div className="kage-loader-text">
              <span className="kage-loader-kanji">影</span>
              <span className="kage-loader-title">KAGE</span>
              <span className="kage-loader-sub">Where stillness reveals the unseen</span>
            </div>
          </div>
        }
      >
        <KageLandingPage />
      </Suspense>

      {/* Floating Pill on Landing Page to visit Catalog */}
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<"landing" | "catalog" | "detail">(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("detail")) {
        return "detail";
      }
      if (hash.includes("katalog") || hash.includes("catalog")) {
        return "catalog";
      }
    }
    return "landing";
  });

  const [selectedBatik, setSelectedBatik] = useState<BatikItem | null>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      const match = hash.match(/detail\/([a-z0-9-]+)/i);
      if (match && match[1]) {
        const found = BATIK_COLLECTION.find((b) => b.id === match[1]);
        if (found) return found;
      }
    }
    return BATIK_COLLECTION[0];
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const match = hash.match(/detail\/([a-z0-9-]+)/i);

      if (match && match[1]) {
        const found = BATIK_COLLECTION.find((b) => b.id === match[1]);
        if (found) {
          setSelectedBatik(found);
          setCurrentView("detail");
          return;
        }
      }

      if (hash.includes("katalog") || hash.includes("catalog")) {
        setCurrentView("catalog");
      } else {
        setCurrentView("landing");
      }
    };

    const handleWindowMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "NAVIGATE") {
        if (event.data.view === "catalog") {
          window.location.hash = "#/katalog";
          setCurrentView("catalog");
        } else if (event.data.view === "landing") {
          window.location.hash = "#/";
          setCurrentView("landing");
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("message", handleWindowMessage);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("message", handleWindowMessage);
    };
  }, []);

  const navigateToCatalog = () => {
    window.location.hash = "#/katalog";
    setCurrentView("catalog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToLanding = () => {
    window.location.hash = "#/";
    setCurrentView("landing");
  };

  const handleSelectBatik = (item: BatikItem) => {
    setSelectedBatik(item);
    window.location.hash = `#/detail/${item.id}`;
    setCurrentView("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* 3D WebGL Landing Page (Maintained in DOM for instant zero-reload switching) */}
      <Scene currentView={currentView} onOpenCatalog={navigateToCatalog} />

      {/* Catalog View */}
      {currentView === "catalog" && (
        <div className="catalog-view-wrapper">
          <BatikCatalog
            onNavigateToLanding={navigateToLanding}
            onSelectBatik={handleSelectBatik}
          />
        </div>
      )}

      {/* Detail View */}
      {currentView === "detail" && selectedBatik && (
        <div className="detail-view-wrapper">
          <BatikDetail
            item={selectedBatik}
            onBackToCatalog={navigateToCatalog}
            onNavigateToLanding={navigateToLanding}
          />
        </div>
      )}
    </div>
  );
}
