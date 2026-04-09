import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Santiago Samuel — Aplicaciones y páginas web"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
    const sora = await fetch(
        new URL("https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap")
    ).then(() =>
        fetch("https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-700-normal.woff").then((res) =>
            res.arrayBuffer()
        )
    )

    const soraRegular = await fetch(
        "https://cdn.jsdelivr.net/fontsource/fonts/sora@latest/latin-400-normal.woff"
    ).then((res) => res.arrayBuffer())

    const SERVICE_COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"]

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#08080c",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Dot grid */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />

                {/* Gradient orb — blue top-left */}
                <div
                    style={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        top: "-150px",
                        left: "-100px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                    }}
                />

                {/* Gradient orb — green bottom-right */}
                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        bottom: "-100px",
                        right: "-50px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
                    }}
                />

                {/* Vignette */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        background:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)",
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 10,
                    }}
                >
                    {/* Name with gradient */}
                    <div
                        style={{
                            fontSize: "72px",
                            fontFamily: "Sora",
                            fontWeight: 700,
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ color: "rgba(255,255,255,0.95)" }}>Santiago</span>
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3B82F6, #10B981)",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Samuel
                        </span>
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: "22px",
                            fontFamily: "Sora",
                            fontWeight: 400,
                            color: "rgba(255,255,255,0.4)",
                            marginTop: "20px",
                            letterSpacing: "0.06em",
                        }}
                    >
                        Aplicaciones y páginas web
                    </div>

                    {/* Separator line */}
                    <div
                        style={{
                            width: "60px",
                            height: "1px",
                            background: "rgba(255,255,255,0.1)",
                            marginTop: "32px",
                            marginBottom: "32px",
                            display: "flex",
                        }}
                    />

                    {/* Service color dots */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                    >
                        {SERVICE_COLORS.map((color, i) => (
                            <div
                                key={i}
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: color,
                                    opacity: 0.7,
                                    display: "flex",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Sora", data: sora, weight: 700, style: "normal" },
                { name: "Sora", data: soraRegular, weight: 400, style: "normal" },
            ],
        }
    )
}
