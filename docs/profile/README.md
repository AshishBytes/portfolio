# Keeping the portfolio resume in sync

The editable resume source is [`Ashish_Singh_Resume.corrected.tex`](./Ashish_Singh_Resume.corrected.tex).
The portfolio serves the compiled PDF from
[`apps/portfolio/public/documents/Ashish_Singh_Resume.pdf`](../../apps/portfolio/public/documents/Ashish_Singh_Resume.pdf),
through the existing `/documents/Ashish_Singh_Resume.pdf` profile link.

## Update workflow

1. Edit and save the `.tex` source in the LaTeX editor.
2. Make sure [Tectonic](https://tectonic-typesetting.github.io/) is installed.
   On Windows, if it is not already on PATH, install it into a per-user folder
   from PowerShell:

   ```powershell
   $installDir = Join-Path $env:LOCALAPPDATA 'Programs\Tectonic'
   New-Item -ItemType Directory -Force $installDir | Out-Null
   Push-Location $installDir
   [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
   iex ((New-Object System.Net.WebClient).DownloadString('https://drop-ps1.fullyjustified.net'))
   Pop-Location
   ```

   The sync script detects `tectonic.exe` in that folder. You can also set
   `TECTONIC_PATH` to the full path of an existing executable.
3. From the repository root, run:

   ```sh
   pnpm resume:sync
   ```

   This compiles the source and replaces the portfolio PDF only when the
   compilation succeeds.
4. Check the updated PDF in the editor or open
   `apps/portfolio/public/documents/Ashish_Singh_Resume.pdf`. If Poppler is
   installed, `pdfinfo` can confirm the page count and metadata.
5. Review both the `.tex` source and generated `.pdf` in `git diff`, then
   include both in the same commit.

The portfolio's regular build does not compile LaTeX; Vercel does not need a
Tectonic installation. Run `pnpm resume:sync` locally whenever the source
changes, before deploying the portfolio.
