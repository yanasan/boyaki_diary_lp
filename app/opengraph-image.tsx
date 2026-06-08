import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fdf6f0 0%, #f0e4d4 50%, #e8d5c0 100%)",
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
            background: "linear-gradient(135deg, #f97316, #ea580c)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 52,
            fontWeight: 800,
            color: "#fff",
            marginBottom: 32,
          }}
        >
          ぼ
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#1a1a1a",
            marginBottom: 16,
            letterSpacing: "-1px",
          }}
        >
          ぼやき日記
        </div>

        <div
          style={{
            fontSize: 34,
            color: "#555",
            marginBottom: 28,
          }}
        >
          ぼやいてたら、日記になってた。
        </div>

        <div
          style={{
            fontSize: 22,
            color: "#888",
            textAlign: "center",
            maxWidth: 720,
          }}
        >
          AIキャラクターと話すだけで日記が完成する、対話型日記アプリ
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
          <span>🐧</span>
          <span>🦉</span>
          <span>🐱</span>
        </div>
      </div>
    ),
    size
  );
}
