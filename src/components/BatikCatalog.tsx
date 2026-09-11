import React, { useState, useMemo } from "react";
import {
  Search,
  X,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { BATIK_COLLECTION, BatikItem } from "../data/batikData";
import "./BatikCatalog.css";

interface BatikCatalogProps {
  onNavigateToLanding?: () => void;
  onSelectBatik?: (item: BatikItem) => void;
}

export const BatikCatalog: React.FC<BatikCatalogProps> = ({
  onNavigateToLanding,
  onSelectBatik
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [sortBy, setSortBy] = useState<string>("rekomendasi");

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let list = BATIK_COLLECTION.filter((item) => {
      const matchesCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.origin.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.philosophySummary.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [searchQuery, selectedCategory, sortBy]);

  const formatRupiah = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(price);
  };

  const getWhatsAppLink = (item: BatikItem): string => {
    const text = encodeURIComponent(
      `Halo Batik Tulis Trenggalek, saya tertarik dengan koleksi karya batik tulis "${item.name}" (${formatRupiah(
        item.price
      )}). Mohon info ketersediaan kain dan proses pemesanannya. Terima kasih.`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  const handleOpenItem = (item: BatikItem) => {
    if (onSelectBatik) {
      onSelectBatik(item);
    }
  };

  return (
    <div className="catalog-root">
      {/* Background Atmosphere Overlays */}
      <div className="catalog-grain" aria-hidden="true" />
      <div className="catalog-vignette" aria-hidden="true" />

      <div className="catalog-container">
        {/* Navigation Bar */}
        <header className="catalog-top-nav">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="catalog-brand-wrap"
            style={{ cursor: "pointer" }}
          >
            <img
              src="/branding/Logo.svg"
              alt="Batik Tulis Trenggalek"
              className="catalog-brand-logo"
            />
            <div className="catalog-brand-text">
              <span className="catalog-brand-title">Kage Batik Tulis</span>
              <span className="catalog-brand-sub">Trenggalek Heritage</span>
            </div>
          </div>

          <div className="catalog-nav-actions">
            {onNavigateToLanding && (
              <button
                type="button"
                className="btn-nav-return"
                onClick={onNavigateToLanding}
              >
                <ArrowLeft size={14} />
                <span>Kembali ke Landing Page (Kage)</span>
              </button>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="catalog-hero-intro">
          <div className="catalog-eyebrow">
            <span className="catalog-eyebrow-dot" />
            <span>Koleksi Terpilih — Warisan Luhur Nusantara</span>
          </div>

          <div className="catalog-title-row">
            <h1 className="catalog-headline">
              Katalog Karya Batik Tulis
            </h1>
            <div className="catalog-kanji-stamp">図録・手業</div>
          </div>

          <p className="catalog-lead-text">
            Setiap helai kain diukir manual oleh maestro pembatik menggunakan
            canting tembaga dan lilin malam murni. Klik kartu produk untuk membuka
            detail 3 section: <strong>Biodata Batik</strong>, <strong>Makna Filosofi</strong>, dan <strong>Photo Model</strong>.
          </p>
        </section>

        {/* Search & Filtering Panel */}
        <section
          className="catalog-controls-panel"
          aria-label="Filter dan Pencarian Katalog"
        >
          <div className="search-primary-row">
            {/* Search Input */}
            <div className="search-input-wrapper">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari motif batik (contoh: Bledak, Parang, Merak, Kawung)..."
                className="search-input-field"
                aria-label="Cari nama atau motif batik"
              />
              <Search className="search-icon-leading" />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  title="Hapus pencarian"
                  aria-label="Hapus pencarian"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <div className="sort-select-wrapper">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
                aria-label="Urutkan koleksi"
              >
                <option value="rekomendasi">Urutkan: Rekomendasi Kurasi</option>
                <option value="name-asc">Nama Motif: A → Z</option>
                <option value="name-desc">Nama Motif: Z → A</option>
                <option value="price-low">Harga: Terendah → Tertinggi</option>
                <option value="price-high">Harga: Tertinggi → Terendah</option>
              </select>
              <ChevronDown className="sort-icon-trailing" />
            </div>
          </div>

          {/* Filter Categories Chips */}
          <div className="filter-secondary-row">
            <div className="filter-chips-list">
              {[
                { label: "Semua Motif", value: "Semua", count: 8 },
                { label: "Bledak", value: "Bledak", count: 3 },
                { label: "Keraton Klasik", value: "Keraton Klasik", count: 3 },
                { label: "Trenggalek Khas", value: "Trenggalek Khas", count: 2 }
              ].map((cat) => {
                const isActive = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    className={`filter-chip-btn ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    {isActive && <span className="filter-chip-dot" />}
                    <span>{cat.label}</span>
                    <span style={{ opacity: 0.6, fontSize: "9px" }}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="filter-results-stat">
              Menampilkan <b>{filteredItems.length}</b> dari {BATIK_COLLECTION.length} motif
            </div>
          </div>
        </section>

        {/* Catalog Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="batik-grid">
            {filteredItems.map((item) => (
              <article key={item.id} className="batik-card">
                {/* Double-Bezel Media Wrapper */}
                <div
                  className="batik-card-media-shell"
                  onClick={() => handleOpenItem(item)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="batik-card-media-core">
                    <img
                      src={item.image}
                      alt={`Batik ${item.name}`}
                      className="batik-card-image"
                      loading="lazy"
                    />
                    <div className="batik-card-media-scrim" />

                    <div className="batik-card-badge-tag">
                      <span className="batik-badge-dot" />
                      <span>{item.category}</span>
                    </div>

                    <div className="batik-card-origin-tag">{item.origin}</div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="batik-card-body">
                  <div className="batik-card-header">
                    <h2 className="batik-card-title">{item.name}</h2>
                    <div className="batik-card-price">
                      {formatRupiah(item.price)}
                    </div>
                  </div>

                  <p className="batik-card-summary">
                    {item.philosophySummary}
                  </p>

                  <div className="batik-card-footer">
                    <button
                      type="button"
                      className="btn-card-explore"
                      onClick={() => handleOpenItem(item)}
                    >
                      <span>Lihat 3 Section Detail</span>
                      <ArrowRight size={13} className="explore-arrow" />
                    </button>

                    <a
                      href={getWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-inquire"
                      title="Pesan atau tanya via WhatsApp"
                    >
                      <MessageCircle size={13} />
                      <span>Pesan</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="catalog-empty-state">
            <div className="empty-icon-wrap">
              <Search size={24} />
            </div>
            <h3 className="empty-title">Motif Tidak Ditemukan</h3>
            <p className="empty-desc">
              Tidak ada motif batik yang sesuai dengan kata kunci "
              <strong>{searchQuery}</strong>" pada kategori "
              {selectedCategory}". Silakan gunakan kata kunci lain atau reset filter.
            </p>
            <button
              type="button"
              className="btn-empty-reset"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Semua");
              }}
            >
              <Sparkles size={14} />
              <span>Reset Pencarian</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
};

export default BatikCatalog;


