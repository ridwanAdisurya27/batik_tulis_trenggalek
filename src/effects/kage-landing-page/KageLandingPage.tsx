import React from "react";
import { LandingPageFrame, LandingPageFrameProps } from "./LandingPageFrame";

export interface KageLandingPageProps extends Partial<LandingPageFrameProps> {}

export const KageLandingPage: React.FC<KageLandingPageProps> = (props) => {
  return (
    <LandingPageFrame
      title="Kage"
      sourceUrl="/landing-pages/kage.html"
      {...props}
    />
  );
};

export default KageLandingPage;
