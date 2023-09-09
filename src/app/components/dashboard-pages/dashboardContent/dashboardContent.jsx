import { Suspense } from "react";
import HeroContent from "../../HeroContent/HeroContent";
import { ChartsDashboard } from "../../ChartsDashboard/ChartsDashboard";

const DashboardContent = () => {
  return (
    <Suspense fallback={<p>loading Dashboard Content</p>}>
      <div>
        <HeroContent />
        <ChartsDashboard />
      </div>
    </Suspense>
  );
};

export default DashboardContent;
