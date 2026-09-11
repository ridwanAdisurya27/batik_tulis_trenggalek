import React, { useState } from "react";
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  Maximize2,
  X,
  Star
} from "lucide-react";
import { BatikItem } from "../data/batikData";
import "./BatikDetail.css";

interface BatikDetailProps {
  item: BatikItem;
  onBackToCatalog: () => void;
  onNavigateToLanding?: () => void;
}

export const BatikDetail: React.FC<BatikDetailProps> = ({
  item,
  onBackToCatalog,
  onNavigateToLanding
}) => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const formatRupiah = (price: number): string => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(price);
  };

  const getWhatsAppLink = (item: BatikItem): string => {
    const text = encodeURIComponent(
      `Halo Batik Tulis Trenggalek, saya tertarik dengan karya batik tulis "${item.name}" (${formatRupiah(
        item.price
      )}). Mohon informasi ketersediaan kain dan proses pemesanannya. Terima kasih.`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="batik-detail-page">
      {/* Background Atmosphere Overlays */}
      <div className="detail-bg-grain" aria-hidden="true" />
      <div className="detail-bg-vignette" aria-hidden="true" />

      {/* Main Container UI */}
      <div className="detail-app-frame">
        {/* Top Navbar */}
        <header className="detail-top-nav">
          <button
            type="button"
            className="detail-logo-group"
            onClick={onBackToCatalog}
            title="Kembali ke Katalog Batik"
          >
            <img
              src="/branding/Logo.svg"
              alt="Batik Tulis Trenggalek"
              className="detail-brand-logo"
            />
            <div className="detail-brand-text">
              <span className="detail-brand-title">Kage Batik</span>
              <span className="detail-brand-sub">Trenggalek Heritage</span>
            </div>
          </button>

          <nav className="detail-nav-links">
            <button
              type="button"
              className="detail-nav-btn active"
              onClick={onBackToCatalog}
            >
              katalog
            </button>
            <button
              type="button"
              className="detail-nav-btn"
              onClick={() => scrollToSection("makna")}
            >
              makna
            </button>
            <button
              type="button"
              className="detail-nav-btn"
              onClick={() => scrollToSection("mockup-bento")}
            >
              mockup
            </button>
            {onNavigateToLanding && (
              <button
                type="button"
                className="detail-nav-btn btn-landing-link"
                onClick={onNavigateToLanding}
              >
                landing page
              </button>
            )}
          </nav>

          <div className="detail-nav-right">
            <span className="detail-nav-price">{formatRupiah(item.price)}</span>
            <button
              type="button"
              className="detail-btn-back"
              onClick={onBackToCatalog}
              title="Kembali ke Katalog"
            >
              <ArrowLeft size={15} />
              <span>Kembali</span>
            </button>
          </div>
        </header>

        {/* Hero Section Banner */}
        <div className="detail-hero-banner">
          <div className="detail-breadcrumb">
            <button type="button" onClick={onBackToCatalog} className="crumb-link">
              katalog
            </button>
            <span className="crumb-slash">/</span>
            <span className="crumb-current">{item.name}</span>
          </div>

          <h1 className="detail-page-title">Details</h1>
        </div>

        {/* Main Floating Card Showcase */}
        <section className="detail-main-card">
          {/* Left Column: Title & Tags Only (Description removed per request) */}
          <div className="main-card-col-left">
            <div className="detail-badge-pill">
              <Sparkles size={12} />
              <span>{item.category}</span>
            </div>

            <h2 className="detail-item-title">{item.name}</h2>

            <div className="detail-origin-badge">
              <span className="origin-dot" />
              <span>{item.origin}</span>
            </div>

            <div className="detail-hero-highlights">
              <div className="highlight-tag">
                <span className="hl-k">Teknik</span>
                <span className="hl-v">{item.details.technique}</span>
              </div>
              <div className="highlight-tag">
                <span className="hl-k">Bahan</span>
                <span className="hl-v">{item.details.material}</span>
              </div>
            </div>
          </div>

          {/* Center Showcase Stage: Product Image Spotlight Prominent */}
          <div className="main-card-col-center">
            <div className="showcase-img-stage">
              <div className="showcase-spotlight-glow" />
              <img
                src={item.bgImage}
                alt={`Kain Batik ${item.name}`}
                className="showcase-hanger-img"
              />
            </div>

            <div className="showcase-price-tag">
              {formatRupiah(item.price)}
            </div>
          </div>

          {/* Right Column: Meta, Specs Grid, CTA */}
          <div className="main-card-col-right">
            <div className="meta-review-row">
              <span className="review-label">Kualitas:</span>
              <div className="review-stars">
                <Star size={13} fill="#c9a24a" color="#c9a24a" />
                <Star size={13} fill="#c9a24a" color="#c9a24a" />
                <Star size={13} fill="#c9a24a" color="#c9a24a" />
                <Star size={13} fill="#c9a24a" color="#c9a24a" />
                <Star size={13} fill="#c9a24a" color="#c9a24a" />
              </div>
              <span className="review-score">5.0 (100% Tulis Manual)</span>
            </div>

            <div className="meta-specs-box">
              <span className="specs-box-title">Spesifikasi Kain:</span>
              <div className="specs-button-grid">
                <div className="spec-item-btn">
                  <span className="lbl">Ukuran</span>
                  <span className="val">{item.details.dimensions}</span>
                </div>
                <div className="spec-item-btn">
                  <span className="lbl">Bahan</span>
                  <span className="val">{item.details.material}</span>
                </div>
                <div className="spec-item-btn">
                  <span className="lbl">Teknik</span>
                  <span className="val">{item.details.technique}</span>
                </div>
                <div className="spec-item-btn">
                  <span className="lbl">Pewarnaan</span>
                  <span className="val">{item.details.dye}</span>
                </div>
                <div className="spec-item-btn full">
                  <span className="lbl">Pengerjaan</span>
                  <span className="val">{item.details.craftDuration}</span>
                </div>
              </div>
            </div>

            <a
              href={getWhatsAppLink(item)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-add-to-cart"
            >
              <MessageCircle size={18} />
              <span>Pesan via WhatsApp</span>
            </a>
          </div>
        </section>

        {/* SECTION 2: MAKNA & FILOSOFI */}
        <section id="makna" className="detail-section-makna">
          <div className="section-header-block">
            <span className="section-eyebrow">FILOSOFI KARYA</span>
            <h2 className="section-main-heading">Makna & Nilai Budaya Motif</h2>
          </div>

          <div className="makna-card-container">
            <div className="makna-quote-box">
              <div className="makna-quote-mark">“</div>
              <p className="makna-quote-text">{item.philosophySummary}</p>
            </div>

            <div className="makna-narrative-box">
              <h3>Sejarah & Filosofi Spiritual</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MOCKUP DESAIN BENTO 4 GAMBAR */}
        <section id="mockup-bento" className="detail-section-bento">
          <div className="section-header-block">
            <span className="section-eyebrow">PERAGAAN BUSANA</span>
            <h2 className="section-main-heading">Mockup Desain Bento (4 Gambar)</h2>
          </div>

          <div className="bento-grid-4">
            {item.bentoImages.map((imgUrl, index) => (
              <div
                key={index}
                className={`bento-cell bento-cell-${index + 1}`}
                onClick={() => setLightboxImg(imgUrl)}
              >
                <img
                  src={imgUrl}
                  alt={`Mockup ${item.name} ${index + 1}`}
                  className="bento-img"
                  loading="lazy"
                />
                <div className="bento-hover-overlay">
                  <span className="bento-zoom-icon">
                    <Maximize2 size={18} /> Perbesar Foto
                  </span>
                </div>
                <div className="bento-badge">
                  <span>Mockup #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="detail-page-footer">
          <div className="footer-left">
            <span>© {new Date().getFullYear()} Kage Batik Tulis Trenggalek</span>
          </div>
          <button
            type="button"
            className="footer-btn-back"
            onClick={onBackToCatalog}
          >
            ← Kembali ke Katalog Batik
          </button>
        </footer>
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxImg(null)}
            >
              <X size={22} />
            </button>
            <img src={lightboxImg} alt="Preview Mockup" className="lightbox-full-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BatikDetail;
