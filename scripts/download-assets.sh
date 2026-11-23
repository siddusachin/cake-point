#!/usr/bin/env bash
# Downloads every Figma asset used by the page into public/assets.
# The Figma MCP URLs expire after 7 days - if a download fails, re-run
# get_design_context in Claude and paste the fresh URLs here.
set -euo pipefail
cd "$(dirname "$0")/../public/assets"

dl() { curl -fL --retry 2 -o "$1" "$2" && echo "ok  $1"; }

dl logo.png          "https://www.figma.com/api/mcp/asset/23b82dd5-d64e-4a2d-9dba-3a85718f1923.png"
dl offer-badge.png   "https://www.figma.com/api/mcp/asset/e1c77bc0-7271-4d0e-a88b-bf50e8693b24.png"
dl hero-banner.png   "https://www.figma.com/api/mcp/asset/71866c7a-d293-4885-b72f-f04371703673.png"
dl whatsapp.png      "https://www.figma.com/api/mcp/asset/e721100d-8317-4162-b075-a6712d71973a.png"
dl birthday.png      "https://www.figma.com/api/mcp/asset/ac8727c9-290c-4ca6-8cf7-84f454e53fe2.png"
dl kids.png          "https://www.figma.com/api/mcp/asset/3fc5fe7a-564b-4fcf-a8d7-3d50a05df718.png"
dl wedding.png       "https://www.figma.com/api/mcp/asset/7febd99f-ff58-4427-8018-eefb7c5339eb.png"
dl corporate.png     "https://www.figma.com/api/mcp/asset/45a45ba7-1674-4310-8a97-11718a9fcecf.png"
dl carousel-dots.svg "https://www.figma.com/api/mcp/asset/e7e9341c-cddb-494b-9859-06813cfb5dcf.svg"
dl old-price-strike.svg "https://www.figma.com/api/mcp/asset/43ff2573-4c8c-4d4f-bb6a-89c651bb8cfd.svg"
dl cta-arrow.svg     "https://www.figma.com/api/mcp/asset/321ecac7-eca7-4a2f-81d6-4a656bd1890d.svg"
echo "All assets downloaded."
