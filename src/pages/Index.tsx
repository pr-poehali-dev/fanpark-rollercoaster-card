import { useState } from "react";
import Icon from "@/components/ui/icon";

type Status = "working" | "maintenance" | "closed";
type TicketAccess = "included" | "not_included";

const ATTRACTION_IMAGE = "https://cdn.poehali.dev/projects/ce4a11b6-b727-4562-a29d-7e3cb8c5b0da/files/774d5891-7264-4295-8748-455138e84f9e.jpg";

const statusConfig = {
  working: {
    label: "Работает",
    color: "bg-emerald-500/15 text-emerald-400",
    border: "1px solid rgba(52,211,153,0.25)",
    dot: "#34D399",
    pulse: true,
  },
  maintenance: {
    label: "На техобслуживании до 14:00",
    color: "bg-amber-500/15 text-amber-400",
    border: "1px solid rgba(251,191,36,0.25)",
    dot: "#FBBF24",
    pulse: false,
  },
  closed: {
    label: "Закрыт",
    color: "bg-red-500/15 text-red-400",
    border: "1px solid rgba(248,113,113,0.25)",
    dot: "#F87171",
    pulse: false,
  },
};

const Index = () => {
  const [status, setStatus] = useState<Status>("working");
  const [access, setAccess] = useState<TicketAccess>("included");
  const [booked, setBooked] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const st = statusConfig[status];
  const isBookable = status === "working" && access === "included";

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 py-8"
      style={{ fontFamily: "'Golos Text', sans-serif", background: "hsl(220, 16%, 6%)" }}
    >
      {/* Phone frame */}
      <div
        style={{
          width: 390,
          borderRadius: 48,
          overflow: "hidden",
          background: "hsl(220, 14%, 10%)",
          border: "1px solid hsl(220, 12%, 16%)",
          boxShadow: "0 50px 140px rgba(0,0,0,0.8), 0 0 0 1px hsl(220,12%,18%)",
          flexShrink: 0,
        }}
      >
        {/* Status bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 28px 8px" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "hsl(210, 20%, 65%)" }}>9:41</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 12 }}>
              {[3, 5, 7, 10].map((h, i) => (
                <div key={i} style={{ width: 3, height: h, borderRadius: 2, background: i < 3 ? "hsl(210,20%,65%)" : "hsl(220,12%,28%)" }} />
              ))}
            </div>
            <Icon name="Wifi" size={13} style={{ color: "hsl(210,20%,60%)", opacity: 0.8 }} />
            <Icon name="Battery" size={16} style={{ color: "hsl(210,20%,60%)", opacity: 0.8 }} />
          </div>
        </div>

        {/* Nav bar */}
        <div style={{ display: "flex", alignItems: "center", padding: "4px 20px 12px", gap: 12 }}>
          <button style={{ width: 36, height: 36, borderRadius: 12, background: "hsl(220,12%,15%)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="ChevronLeft" size={18} style={{ color: "hsl(36,100%,58%)" }} />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "hsl(210,20%,90%)" }}>Аттракцион</div>
          </div>
          <button style={{ width: 36, height: 36, borderRadius: 12, background: "hsl(220,12%,15%)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="Share2" size={15} style={{ color: "hsl(210,20%,60%)" }} />
          </button>
        </div>

        {/* Hero image */}
        <div style={{ margin: "0 16px", borderRadius: 24, overflow: "hidden", height: 220, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, background: "hsl(220,14%,14%)", transition: "opacity 0.5s", opacity: imgLoaded ? 0 : 1, zIndex: 1 }} />
          <img
            src={ATTRACTION_IMAGE}
            alt="Американские горки"
            onLoad={() => setImgLoaded(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.7s, transform 0.7s", opacity: imgLoaded ? 1 : 0, transform: imgLoaded ? "scale(1)" : "scale(1.06)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, hsl(220,14%,10%) 0%, transparent 55%)", zIndex: 2 }} />
          <div style={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}>
            <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,0.14)", color: "white", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              Экстрим
            </span>
          </div>
          <div style={{ position: "absolute", top: 12, right: 12, zIndex: 3, display: "flex", alignItems: "center", gap: 4, padding: "4px 10px", borderRadius: 999, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Icon name="Star" size={11} style={{ color: "hsl(36,100%,58%)", fill: "hsl(36,100%,58%)" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>4.8</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "16px 20px 4px" }}>
          {/* Title + status */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
            <h1 style={{ fontSize: 24, fontWeight: 900, color: "hsl(210,20%,95%)", lineHeight: 1.2, margin: 0 }}>
              Американские горки
            </h1>
            <div
              className={st.color}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 999,
                fontSize: 11, fontWeight: 600, whiteSpace: "nowrap", marginTop: 4, border: st.border, flexShrink: 0,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: st.dot, flexShrink: 0, boxShadow: st.pulse ? `0 0 6px ${st.dot}` : "none" }} />
              {st.label}
            </div>
          </div>

          {/* Info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            <div style={{ background: "hsl(220,12%,14%)", borderRadius: 18, padding: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <Icon name="Clock" size={13} style={{ color: "hsl(36,100%,58%)" }} />
                <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(215,10%,48%)" }}>Ожидание</span>
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "hsl(210,20%,93%)" }}>~15 мин</div>
            </div>
            <div style={{ background: "hsl(220,12%,14%)", borderRadius: 18, padding: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <Icon name="ShieldAlert" size={13} style={{ color: "hsl(36,100%,58%)" }} />
                <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "hsl(215,10%,48%)" }}>Ограничения</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "hsl(210,20%,78%)", lineHeight: 1.4 }}>Рост от 120 см,<br />вес до 120 кг</div>
            </div>
          </div>

          {/* Ticket access */}
          <div
            style={{
              borderRadius: 18, padding: "14px 16px", marginBottom: 14,
              background: access === "included" ? "linear-gradient(135deg, hsl(36,60%,12%) 0%, hsl(220,14%,13%) 100%)" : "hsl(220,12%,14%)",
              border: access === "included" ? "1px solid hsl(36,80%,28%)" : "1px solid hsl(220,12%,20%)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: access === "included" ? "hsl(36,80%,18%)" : "hsl(220,12%,20%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name={access === "included" ? "Ticket" : "TicketX"} size={18} style={{ color: access === "included" ? "hsl(36,100%,60%)" : "hsl(215,10%,48%)" }} />
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: access === "included" ? "hsl(36,100%,72%)" : "hsl(215,10%,68%)", marginBottom: 2 }}>
                  {access === "included" ? "Входит в ваш Premium-билет" : "Не входит в ваш билет"}
                </div>
                <div style={{ fontSize: 10, color: access === "included" ? "hsl(36,60%,52%)" : "hsl(215,10%,48%)" }}>
                  {access === "included" ? "Дополнительная оплата не требуется" : "Доплатить 350 ₽?"}
                </div>
              </div>
            </div>
            {access === "not_included" && (
              <button style={{ background: "hsl(36,100%,58%)", color: "hsl(220,16%,8%)", border: "none", borderRadius: 10, padding: "7px 14px", fontSize: 11, fontWeight: 800, cursor: "pointer" }}>
                Оплатить
              </button>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ padding: "0 20px 8px", display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            disabled={!isBookable}
            onClick={() => isBookable && setBooked(!booked)}
            style={{
              width: "100%", padding: "16px", borderRadius: 18, fontSize: 15, fontWeight: 800,
              border: isBookable && booked ? "1px solid hsl(36,100%,30%)" : "none",
              cursor: isBookable ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              transition: "all 0.3s ease",
              background: !isBookable
                ? "hsl(220,12%,13%)"
                : booked
                ? "hsl(220,12%,18%)"
                : "linear-gradient(135deg, hsl(36,100%,60%) 0%, hsl(24,100%,52%) 100%)",
              color: !isBookable
                ? "hsl(215,10%,35%)"
                : booked
                ? "hsl(36,100%,60%)"
                : "hsl(220,16%,8%)",
              boxShadow: isBookable && !booked ? "0 10px 35px rgba(251,146,60,0.35)" : "none",
            }}
          >
            <Icon name={booked ? "CheckCircle2" : "CalendarCheck"} size={19} />
            {booked ? "Время забронировано!" : "Забронировать время"}
          </button>

          <button
            style={{
              width: "100%", padding: "16px", borderRadius: 18, fontSize: 15, fontWeight: 700,
              background: "hsl(220,12%,14%)", color: "hsl(210,20%,80%)",
              border: "1px solid hsl(220,12%,20%)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            <Icon name="MapPin" size={18} style={{ color: "hsl(36,100%,58%)" }} />
            Показать на карте
          </button>
        </div>

        {/* Demo switcher */}
        <div style={{ margin: "8px 16px 16px", background: "hsl(220,12%,12%)", borderRadius: 18, padding: "12px 14px", border: "1px solid hsl(220,12%,16%)" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 6 }}>
            {(["working", "maintenance", "closed"] as Status[]).map((s) => (
              <button
                key={s}
                onClick={() => { setStatus(s); setBooked(false); }}
                style={{
                  padding: "7px 4px", borderRadius: 12, border: "none", cursor: "pointer",
                  fontSize: 10, fontWeight: 700, transition: "all 0.2s",
                  background: status === s ? "hsl(36,100%,58%)" : "hsl(220,12%,17%)",
                  color: status === s ? "hsl(220,16%,8%)" : "hsl(215,10%,50%)",
                }}
              >
                {s === "working" ? "Работает" : s === "maintenance" ? "Обслуж." : "Закрыт"}
              </button>
            ))}
          </div>

        </div>

        {/* Home indicator */}
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: 10 }}>
          <div style={{ width: 130, height: 5, borderRadius: 3, background: "hsl(220,12%,20%)" }} />
        </div>
      </div>
    </div>
  );
};

export default Index;