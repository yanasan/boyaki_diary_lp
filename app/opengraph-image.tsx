import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const alt = "ぼやき日記 — ぼやくだけで、日記になる。3人の相棒・週間振り返り・記憶ノート";
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF5E9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "#14110D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 52,
            fontWeight: 800,
            color: "#FFD84D",
            marginBottom: 32,
          }}
        >
          ぼ
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#14110D",
            marginBottom: 16,
            letterSpacing: "-1px",
          }}
        >
          ぼやき日記
        </div>

        <div
          style={{
            fontSize: 42,
            background: "linear-gradient(transparent 60%, #FFD84D 60%, #FFD84D 92%, transparent 92%)",
            color: "#2A251E",
            marginBottom: 28,
          }}
        >
          ぼやくだけで、日記になる。
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#5C5343",
            textAlign: "center",
            maxWidth: 720,
          }}
        >
          3人の相棒・週間振り返り・記憶ノート
        </div>

        {/* Characters */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 36,
            fontSize: 44,
          }}
        >
          <span style={{ fontSize: 22, color: "#2A251E" }}>ぺんまる ・ ホー博士 ・ テト</span>
        </div>
      </div>
    ),
    size
  );
}
