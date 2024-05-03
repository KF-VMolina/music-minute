import React from "react";

const HomeStats = () => {
  return (
    <div>
      <div className="stats stats-horizontal lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Artistas</div>
          <div className="stat-value">756</div>
        </div>

        <div className="stat">
          <div className="stat-title">Discos</div>
          <div className="stat-value">1280</div>
        </div>

        <div className="stat">
          <div className="stat-title">Géneros</div>
          <div className="stat-value">87</div>
        </div>
      </div>
    </div>
  );
};

export default HomeStats;
