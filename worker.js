import manifest from "./manifest.json";

const FAVICON_BASE64 = "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";

const FAVICON_BYTES = Uint8Array.from(
  atob(FAVICON_BASE64),
  (char) => char.charCodeAt(0),
);

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "public, max-age=300",
};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/manifest.json") {
      return new Response(JSON.stringify(manifest, null, 2), {
        headers: JSON_HEADERS,
      });
    }

    if (url.pathname === "/favicon.png") {
      return new Response(FAVICON_BYTES, {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=86400",
        },
      });
    }

    if (url.pathname === "/" || url.pathname === "") {
      const body = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${manifest.display_name ?? manifest.name}</title>
  </head>
  <body>
    <main>
      <h1>${manifest.display_name ?? manifest.name}</h1>
      <p>${manifest.description}</p>
      <ul>
        <li><a href="https://github.com/adsinsight-ai/facebook-ads-mcp-server">Project documentation</a></li>
        <li><a href="/manifest.json">Manifest</a></li>
      </ul>
    </main>
  </body>
</html>`;

      return new Response(body, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
        },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
};
