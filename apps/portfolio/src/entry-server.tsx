import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppProviders } from "./app/providers";
import {
  getCanonicalUrl,
  getPageMetadata,
  getStructuredData,
} from "./app/metadata";
import App from "./App";
import { blogLive } from "./content/articles";

export async function render(url: string) {
  return new Promise<string>((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    let renderError: unknown;
    output.setEncoding("utf8");
    output.on("data", (chunk: string) => {
      html += chunk;
    });
    output.on("end", () => resolve(html));

    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppProviders>
          <App />
        </AppProviders>
      </StaticRouter>,
      {
        onAllReady() {
          if (renderError) {
            reject(renderError);
            return;
          }
          stream.pipe(output);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          renderError = error;
          console.error(error);
        },
      },
    );
  });
}

export { blogLive, getCanonicalUrl, getPageMetadata, getStructuredData };
