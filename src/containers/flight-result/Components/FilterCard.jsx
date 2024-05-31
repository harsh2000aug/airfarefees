import React from "react";
import "./FilterCard.css";

export default function FilterCard() {
  return (
    <div
      className="cm-fl-res-item swiper-card"
      style={{ padding: "3rem 1rem 1rem" }}
    >
      <div></div>

      <div className="Hv20">
  <div role="button" tabIndex="0" className="Hv20-option Hv20-mod-state-active" aria-label="Cheapest" aria-selected="true">
    <div className="Hv20-content" data-content="price_a">
      <div className="Hv20-title"><span>Cheapest</span></div>
      <div className="Hv20-value"><div><span>₹ 80,441</span> • <span>7h 22m</span></div></div>
    </div>
    {/* <span class="Hv20-tab-indicator" style="width: 182px; left: 8px;"></span> */}
  </div>
  <div role="button" tabIndex="0" className="Hv20-option" aria-label="Best" aria-selected="false">
    <div className="Hv20-content" data-content="bestflight_a">
      <div className="Hv20-title"><span>Best</span></div>
      <div className="Hv20-value"><div><span>₹ 80,441</span> • <span>7h 22m</span></div></div>
    </div>
  </div>
  <div role="button" tabIndex="0" className="Hv20-option" aria-label="Quickest" aria-selected="false">
    <div className="Hv20-content" data-content="duration_a">
      <div className="Hv20-title"><span>Quickest</span></div>
      <div className="Hv20-value"><div><span>₹ 80,441</span> • <span>7h 22m</span></div></div>
    </div>
  </div>
</div>




    </div>
  );
}
