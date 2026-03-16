"use client";

import { useState, useEffect } from "react";

interface ContactFormProps {
  sectionId?: string;
  accentColor?: string;
  accentColorRgb?: string;
  title?: string;
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: "#333",
  marginBottom: "6px",
};

const fieldWrapStyle: React.CSSProperties = {
  marginBottom: "22px",
};

export default function ContactForm({
  sectionId = "contacto-form",
  accentColor = "#9b30ff",
  accentColorRgb = "155,48,255",
  title,
}: Readonly<ContactFormProps>) {
  const [formData, setFormData] = useState({
    correo: "",
    nombre: "",
    apellidos: "",
    empresa: "",
    rol: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ correo: "", nombre: "", apellidos: "", empresa: "", rol: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const baseInputStyle: React.CSSProperties = {
    width: "100%",
    height: isMobile ? "46px" : "42px",
    background: "#f5f5f5",
    borderRadius: "4px",
    padding: "0 12px",
    fontSize: isMobile ? "16px" : "14px",
    color: "#111",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const getFieldStyle = (name: string): React.CSSProperties => ({
    ...baseInputStyle,
    border: focusedField === name
      ? `1px solid ${accentColor}`
      : "1px solid #e8e8e8",
    boxShadow: focusedField === name
      ? `0 0 0 3px rgba(${accentColorRgb},0.08)`
      : "none",
  });

  const fields = [
    { id: "correo", label: "Correo", type: "email" },
    { id: "nombre", label: "Nombre", type: "text" },
    { id: "apellidos", label: "Apellidos", type: "text" },
    { id: "empresa", label: "Nombre de la empresa", type: "text" },
    { id: "rol", label: "Rol en la empresa", type: "text" },
    { id: "mensaje", label: "En que te podemos ayudar", type: "text" },
  ] as const;

  return (
    <section
      id={sectionId}
      style={{ background: "#ffffff", padding: isMobile ? "40px 0 60px" : "52px 0 80px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "clamp(1.25rem, 5vw, 4rem)", paddingRight: "clamp(1.25rem, 5vw, 4rem)" }}>
      {title && (
        <div style={{ textAlign: "center", paddingBottom: isMobile ? "32px" : "40px" }}>
          <h2
            style={{
              fontSize: isMobile ? "24px" : "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              color: accentColor,
              margin: 0,
              letterSpacing: "-0.5px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
        </div>
      )}
      <div>
        {status === "success" ? (
          <div style={{ textAlign: "center", padding: "64px 24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                marginBottom: "24px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111", margin: "0 0 10px" }}>
              ¡Mensaje enviado!
            </h2>
            <p style={{ fontSize: "15px", color: "#555" }}>
              Nos pondremos en contacto con vos a la brevedad.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {fields.map(({ id, label, type }) => (
              <div key={id} style={fieldWrapStyle}>
                <label style={labelStyle} htmlFor={`${sectionId}-${id}`}>
                  {label} *
                </label>
                <input
                  id={`${sectionId}-${id}`}
                  name={id}
                  type={type}
                  required
                  value={formData[id]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(id)}
                  onBlur={() => setFocusedField(null)}
                  style={getFieldStyle(id)}
                />
              </div>
            ))}

            {status === "error" && (
              <p style={{ fontSize: "13px", color: "#cc0000", marginBottom: "16px" }}>
                No se pudo enviar el mensaje. Intenta de nuevo más tarde.
              </p>
            )}

            <div style={{ marginTop: "8px" }}>
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "44px",
                  padding: "0 36px",
                  borderRadius: "999px",
                  background: status === "loading"
                    ? `rgba(${accentColorRgb},0.6)`
                    : `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
              >
                {status === "loading" ? "Enviando…" : "Enviar"}
              </button>
            </div>
          </form>
        )}
      </div>
      </div>
    </section>
  );
}
