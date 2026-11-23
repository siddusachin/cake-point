import { useEffect, useState } from "react";
import { flavours, weights } from "../data.js";

// Set VITE_WHATSAPP_NUMBER=91XXXXXXXXXX (country code, digits only) in .env
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "";

export default function CustomizeForm() {
  const [flavour, setFlavour] = useState(flavours[0]);
  const [weight, setWeight] = useState(weights[1]);
  const [count, setCount] = useState(1);
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!file) { setPreview(""); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const enquire = () => {
    const text = [
      "Hi Cake Point! I'd like to enquire about a custom cake.",
      `Flavour: ${flavour}`,
      `Weight: ${weight}`,
      `No. of cakes: ${count}`,
      `Delivery location: ${location || "-"}`,
      file ? "(I will send a reference image in this chat.)" : ""
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <div className="customize">
      <label className="upload">
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        {preview ? (
          <img className="upload__preview" src={preview} alt="Reference cake preview" />
        ) : (
          <span className="upload__empty">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 16V4M12 4l-4 4M12 4l4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
            </svg>
            Upload reference image
          </span>
        )}
      </label>

      <div className="customize__rows">
        <div className="field">
          <span className="field__label">Flavour</span>
          <select className="control control--select" value={flavour} onChange={(e) => setFlavour(e.target.value)} aria-label="Flavour">
            {flavours.map((f) => <option key={f}>{f}</option>)}
          </select>
        </div>

        <div className="field">
          <span className="field__label">Weight</span>
          <div className="chips" role="radiogroup" aria-label="Weight">
            {weights.map((w) => (
              <button
                key={w}
                type="button"
                role="radio"
                aria-checked={weight === w}
                className={"chip" + (weight === w ? " chip--active" : "")}
                onClick={() => setWeight(w)}
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        <div className="field">
          <span className="field__label">No of cakes</span>
          <div className="stepper">
            <button type="button" aria-label="Decrease" onClick={() => setCount((c) => Math.max(1, c - 1))}>−</button>
            <output aria-live="polite">{count}</output>
            <button type="button" aria-label="Increase" onClick={() => setCount((c) => c + 1)}>+</button>
          </div>
        </div>

        <div className="field">
          <span className="field__label">Delivery location</span>
          <input
            className="control control--input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Moolakadai"
            aria-label="Delivery location"
          />
        </div>
      </div>

      <button type="button" className="cta cta--whatsapp" onClick={enquire}>
        <img src="/assets/whatsapp.png" alt="" width="40" height="40" />
        <span>Enquire Cake</span>
      </button>
    </div>
  );
}
