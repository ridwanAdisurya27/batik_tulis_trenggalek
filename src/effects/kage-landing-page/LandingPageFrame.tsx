import React, { useState, useEffect, useRef } from "react";

export interface LandingPageFrameProps {
  title?: string;
  sourceUrl?: string;
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: number;
  bodyWeight?: number;
  primaryColor?: string;
  className?: string;
  onLoad?: () => void;
}

export const LandingPageFrame: React.FC<LandingPageFrameProps> = ({
  title = "Kage",
  sourceUrl = "/landing-pages/kage.html",
  headingFont,
  bodyFont,
  headingWeight,
  bodyWeight,
  primaryColor,
  className = "",
  onLoad,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeLoad = () => {
    setIsLoading(false);

    // Apply optional style overrides if specified in props
    try {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentDocument) {
        const doc = iframe.contentDocument;
        let customStyles = "";

        if (primaryColor) {
          customStyles += `
            :root {
              --vermilion: ${primaryColor} !important;
              --ember: ${primaryColor} !important;
            }
            ::selection {
              background: ${primaryColor} !important;
            }
          `;
        }

        if (headingFont) {
          customStyles += `
            h1, h2, h3, .nav-brand, .chapter-title {
              font-family: '${headingFont}', serif, sans-serif !important;
              ${headingWeight ? `font-weight: ${headingWeight} !important;` : ""}
            }
          `;
        }

        if (bodyFont) {
          customStyles += `
            body, p, span, li, a {
              font-family: '${bodyFont}', sans-serif !important;
              ${bodyWeight ? `font-weight: ${bodyWeight} !important;` : ""}
            }
          `;
        }

        if (customStyles) {
          const styleEl = doc.createElement("style");
          styleEl.id = "kage-theme-overrides";
          styleEl.textContent = customStyles;
          doc.head.appendChild(styleEl);
        }
      }
    } catch {
      // In case of cross-origin isolation or restrictions, fail gracefully
    }

    if (onLoad) {
      onLoad();
    }
  };

  useEffect(() => {
    // Reset loading state if sourceUrl changes
    setIsLoading(true);
    setHasError(false);
  }, [sourceUrl]);

  return (
    <div className={`kage-frame-container ${className}`}>
      {isLoading && (
        <div className="kage-loader" aria-live="polite" aria-busy="true">
          <div className="kage-loader-pulse"></div>
          <div className="kage-loader-text">
            <span className="kage-loader-kanji">影</span>
            <span className="kage-loader-title">KAGE</span>
            <span className="kage-loader-sub">Where stillness reveals the unseen</span>
          </div>
        </div>
      )}

      {hasError ? (
        <div className="kage-error-container">
          <p>Failed to load {title} interactive canvas.</p>
          <button
            className="kage-retry-button"
            onClick={() => {
              setHasError(false);
              setIsLoading(true);
              if (iframeRef.current) {
                iframeRef.current.src = sourceUrl;
              }
            }}
          >
            Retry
          </button>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={sourceUrl}
          title={title}
          className={`kage-iframe ${isLoading ? "is-hidden" : "is-visible"}`}
          allow="accelerometer; autoplay; camera; encrypted-media; display-capture; fullscreen; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-pointer-lock"
          loading="eager"
          onLoad={handleIframeLoad}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      )}
    </div>
  );
};
