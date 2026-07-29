import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/content/site-settings";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/images/logo/kupanda-logo-full-color.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#fefdfb",
          padding: "80px",
        }}
      >
        <img src={logoSrc} width={420} height={175} alt="" />
        <div
          style={{
            marginTop: 48,
            fontSize: 42,
            fontWeight: 600,
            color: "#16391f",
            maxWidth: 980,
            lineHeight: 1.25,
          }}
        >
          Community-led systems where children, caregivers and communities grow together.
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#3d4038" }}>{siteConfig.domain.replace("https://", "")}</div>
      </div>
    ),
    { ...size }
  );
}
