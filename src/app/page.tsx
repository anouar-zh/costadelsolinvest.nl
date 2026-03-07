"use client";

import { useState } from "react";
import { I18nProvider } from "@/i18n/context";
import AppShell from "@/components/AppShell";
import Landing from "@/components/Landing";
import Configurator from "@/components/Configurator";

type View = "landing" | "configurator";

function App() {
  const [view, setView] = useState<View>("landing");

  return (
    <AppShell>
      {view === "configurator" ? (
        <Configurator onBack={() => setView("landing")} />
      ) : (
        <Landing onStart={() => setView("configurator")} />
      )}
    </AppShell>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <App />
    </I18nProvider>
  );
}
