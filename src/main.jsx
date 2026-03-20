import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// #region agent log
try {
  console.log("[debug][b717b5] main.jsx starting render");
  const payload = JSON.stringify({
    sessionId: "b717b5",
    runId: "pre-debug-main",
    hypothesisId: "H_log_main",
    location: "src/main.jsx",
    message: "main.jsx render starting",
    data: {},
    timestamp: Date.now(),
  });
  fetch("http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "b717b5" },
    body: payload,
  }).catch(() => {});
  // Fallback to reduce potential CORS/preflight issues
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    navigator.sendBeacon("http://127.0.0.1:7840/ingest/783476b0-ecb3-43f0-b6aa-bc82e28b0e4a", payload);
  }
} catch {
  // ignore logging failures
}
// #endregion

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
