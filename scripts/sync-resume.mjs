import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(
  root,
  "docs",
  "profile",
  "Ashish_Singh_Resume.corrected.tex",
);
const destination = path.join(
  root,
  "apps",
  "portfolio",
  "public",
  "documents",
  "Ashish_Singh_Resume.pdf",
);
const localTectonic = process.env.LOCALAPPDATA
  ? path.join(process.env.LOCALAPPDATA, "Programs", "Tectonic", "tectonic.exe")
  : undefined;
const tectonicCommand =
  process.env.TECTONIC_PATH ??
  (localTectonic && existsSync(localTectonic) ? localTectonic : "tectonic");
const outputDir = mkdtempSync(path.join(tmpdir(), "ashish-resume-"));

try {
  const result = spawnSync(tectonicCommand, ["--outdir", outputDir, source], {
    cwd: root,
    stdio: "inherit",
  });

  if (result.error?.code === "ENOENT") {
    console.error(
      "Tectonic was not found. Install it to %LOCALAPPDATA%\\Programs\\Tectonic or set TECTONIC_PATH to tectonic.exe, then run `pnpm resume:sync` again.",
    );
    process.exitCode = 1;
  } else if (result.status !== 0) {
    process.exitCode = result.status ?? 1;
  } else {
    const compiledPdf = path.join(
      outputDir,
      "Ashish_Singh_Resume.corrected.pdf",
    );
    copyFileSync(compiledPdf, destination);
    console.log(`Updated portfolio resume: ${path.relative(root, destination)}`);
  }
} finally {
  rmSync(outputDir, { recursive: true, force: true });
}
