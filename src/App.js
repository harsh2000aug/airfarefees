import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.page";
import NotFoundPage from "./pages/error/NotFound.page";
import CustomToast from "./components/toast/CustomToast.component";
import FlightResult from "./pages/flight-result/FlightResult.page";
import Layout from "./containers/layout/Layout.container";
import BookTicketsPage from "./pages/book-tickets/BookTickets.page";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicy.page";
import TncPage from "./pages/legal/Tnc.page";
import DisclaimerPage from "./pages/legal/Disclaimer.page";
import RefundPolicyPage from "./pages/legal/RefundPolicy.page";
import ContactPage from "./pages/contact-us/Contact.page";
import AboutPage from "./pages/about-us/About.page";
import PackagesPage from "./pages/packages/Packages.page";
import Payment from "./pages/legal/Payment.page";
import { HelmetProvider } from 'react-helmet-async';
import { RyanAir } from "./pages/top-airlines/ryan";
import { CopaAirlines } from "./pages/top-airlines/copa";
import { DeltaAirlines } from "./pages/top-airlines/delta";
import { VirginAtlantic } from "./pages/top-airlines/virgin";
import { AirFrance } from "./pages/top-airlines/air";
import { UnitedAirlines } from "./pages/top-airlines/united";
import { AlaskaAirlines } from "./pages/top-airlines/alaska";
import { AeroMexico } from "./pages/top-airlines/aeromexico";
import { Iberia } from "./pages/top-airlines/iberia";
import { KlmAirlines } from "./pages/top-airlines/klm";
import { SingaporeAirlines } from "./pages/top-airlines/singapore";
import { RoyalJordanian } from "./pages/top-airlines/royal-jordnian";
import { LasVegas } from "./pages/top-destinations/las-vegas";
import { Goa } from "./pages/top-destinations/goa";
import { BritishAirways } from "./pages/top-airlines/british-airways";
import { Cancun } from "./pages/top-destinations/cancun";
import { Chicago } from "./pages/top-destinations/chicago";
import { Bangkok } from "./pages/top-destinations/bangkok";
import { Miami } from "./pages/top-destinations/miami";
import { NewYork } from "./pages/top-destinations/new-york";
import { Toronto } from "./pages/top-destinations/toronto";
import { London } from "./pages/top-destinations/london";
import { Europe } from "./pages/top-destinations/europe";
import { Paris } from "./pages/top-destinations/paris";
import { LotPolish } from "./pages/top-airlines/lot-polish";
import { TopDestinations } from "./pages/top-destinations/top-destinations";
import { PopAirlines } from "./pages/top-airlines/popular-airlines";
import { JetBlue } from "./pages/top-airlines/jetBlue";
import { Southwest } from "./pages/top-airlines/southwest";
import { Westjet } from "./pages/top-airlines/westjet";
import UnitedNameChange from "./pages/united";
import DeltaNameChange from "./pages/delta/delta";
// test comment

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="flights" element={<FlightResult />} />
              <Route path="booking" element={<BookTicketsPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-and-conditions" element={<TncPage />} />
              <Route path="disclaimer" element={<DisclaimerPage />} />
              <Route path="refund-and-cancellation-policy" element={<RefundPolicyPage />} />
              <Route path="contact-us" element={<ContactPage />} />
              <Route path="about-us" element={<AboutPage />} />
              <Route path="packages" element={<PackagesPage />} />
              <Route path="thank-you-page" element={<Payment />} />
              <Route path="ryan-air" element={<RyanAir />} />
              <Route path="copa-airlines" element={<CopaAirlines />} />
              <Route path="delta-airlines" element={<DeltaAirlines />} />
              <Route path="virgin-atlantic" element={<VirginAtlantic />} />
              <Route path="air-france" element={<AirFrance />} />
              <Route path="united-airlines" element={<UnitedAirlines />} />
              <Route path="jetblue-airlines" element={<JetBlue />} />
              <Route path="southwest-airlines" element={<Southwest />} />
              <Route path="westjet-airlines" element={<Westjet />} />
              <Route path="alaska-airlines" element={<AlaskaAirlines />} />
              <Route path="aeromexico-airlines" element={<AeroMexico />} />
              <Route path="iberia-airlines" element={<Iberia />} />
              <Route path="klm-airlines" element={<KlmAirlines />} />
              <Route path="singapore-airlines" element={<SingaporeAirlines />} />
              <Route path="royal-jordanian-airlines" element={<RoyalJordanian />} />
              <Route path="british-airways" element={<BritishAirways />} />
              <Route path="lot-polish-airlines" element={<LotPolish />} />
              <Route path="popular-airlines" element={<PopAirlines />} />
              <Route path="las-vegas" element={<LasVegas />} />
              <Route path="goa" element={<Goa />} />
              <Route path="cancun" element={<Cancun />} />
              <Route path="chicago" element={<Chicago />} />
              <Route path="bangkok" element={<Bangkok />} />
              <Route path="miami" element={<Miami />} />
              <Route path="new-york" element={<NewYork />} />
              <Route path="toronto" element={<Toronto />} />
              <Route path="london" element={<London />} />
              <Route path="europe" element={<Europe />} />
              <Route path="paris" element={<Paris />} />
              <Route path="top-destinations" element={<TopDestinations />} />
              <Route path="united-airlines-name-change" element={<UnitedNameChange />} />
              <Route path="delta-airlines-name-change" element={<DeltaNameChange />} />
              {/* <Route path="deals">
              <Route index element={<DealsPage />} />
              <Route path=":dealSlug" element={<SingleDealPage />} />
              </Route> */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
      <CustomToast />
    </div>
  );
}

export default App;
