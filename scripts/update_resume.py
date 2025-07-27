import json
import re
from pathlib import Path
from pdfminer.high_level import extract_text
import requests

PDF_URL = "https://raw.githubusercontent.com/AshishBytes/portfolio/main/public/Ashish_Singh_Resume.pdf"
OUTPUT_JSON = Path('src/data/resume.json')


def fetch_pdf(url: str, dest: Path):
    response = requests.get(url)
    response.raise_for_status()
    dest.write_bytes(response.content)


def parse_resume(text: str):
    data = {}
    lines = text.splitlines()
    data['name'] = lines[0].strip()

    def section(pattern_start, pattern_end):
        m = re.search(pattern_start + r"\n\n?(.*?)\n\n" + pattern_end, text, re.DOTALL)
        return m.group(1).strip() if m else ''

    data['summary'] = section('Summary', 'Core Skills')
    core = section('Core Skills', 'Education')

    data['core_skills'] = core.split('\n')
    data['education'] = section('Education', 'Selected Experience')
    exp_text = section('Selected Experience', 'Projects')

    # Parse individual experiences
    experiences = []
    hack = re.search(r'(Feb 2025)\nHackIITK Blockchain Hackathon\n(Kanpur, India)\nTeam Lead & Backend Engineer\n((?:•.*\n)+)', text)
    if hack:
        experiences.append({
            'company': 'HackIITK Blockchain Hackathon',
            'role': 'Team Lead & Backend Engineer',
            'date': hack.group(1),
            'location': hack.group(2),
            'responsibilities': [b.lstrip('• ').strip() for b in hack.group(3).splitlines() if b.strip()]
        })

    lines = [l.strip() for l in text.splitlines()]
    if 'Reef — Distributed Discord Platform' in lines:
        start = lines.index('Reef — Distributed Discord Platform')
        role = lines[start + 1]
        bullets = []
        i = start + 2
        while i < len(lines) and not lines[i].startswith('Nov 2021'):
            if lines[i]:
                bullets.append(lines[i].strip('• ').strip())
            i += 1
        date = lines[i]
        location = lines[i + 1]
        i += 2
        while i < len(lines) and 'Happy' not in lines[i]:
            if lines[i]:
                bullets.append(lines[i].strip('• ').strip())
            i += 1
        experiences.append({
            'company': 'Reef — Distributed Discord Platform',
            'role': role,
            'date': date,
            'location': location,
            'responsibilities': bullets
        })

    happy = re.search(r'Happy \u2014 Low-Latency Music Bot\nSoftware Engineer\n(?P<bullets>.*?)Feb 2020 – Jul 2021\n(?P<loc>[^\n]+)', text, re.DOTALL)
    if happy:
        bullets = [l.lstrip('• ').strip() for l in happy.group('bullets').splitlines() if l.strip()]
        experiences.append({
            'company': 'Happy — Low-Latency Music Bot',
            'role': 'Software Engineer',
            'date': 'Feb 2020 – Jul 2021',
            'location': happy.group('loc'),
            'responsibilities': bullets
        })

    data['experience'] = experiences

    try:
        proj_section = text.split('Projects')[1].split('Certifications Awards')[0]
        lines = [l.strip() for l in proj_section.splitlines() if l.strip()]
        projects = []
        if 'DocQA Tutor — Summarisation & QA API' in lines:
            idx = lines.index('DocQA Tutor — Summarisation & QA API')
            projects.append({
                'title': 'DocQA Tutor — Summarisation & QA API',
                'date': lines[idx + 2],
                'details': [
                    lines[idx + 1].lstrip('• ').strip(),
                    lines[idx + 3].lstrip('• ').strip(),
                ]
            })
        if 'TripLedger — O\ufb04ine-First Expense Tracker' in lines:
            idx = lines.index('TripLedger — O\ufb04ine-First Expense Tracker')
            projects.append({
                'title': 'TripLedger — Offline-First Expense Tracker',
                'date': lines[idx + 1],
                'details': [
                    lines[idx + 2].lstrip('• ').strip(),
                    lines[idx + 3].lstrip('• ').strip(),
                ]
            })
        data['projects'] = projects
    except Exception:
        data['projects'] = []
    cert_lines = [l.strip() for l in section('Certifications Awards', 'Publications').splitlines() if l.strip()]
    certifications = []
    for line in cert_lines:
        if '—' in line:
            name, date = line.rsplit('—', 1)
            certifications.append({'name': name.strip(), 'date': date.strip()})
        else:
            certifications.append({'name': line, 'date': ''})
    data['certifications'] = certifications

    pub_lines = [l.strip() for l in section('Publications', 'Leadership').splitlines() if l.strip()]
    publications = []
    for line in pub_lines:
        if '—' in line:
            title, detail = line.split('—', 1)
            publications.append({'title': title.strip(), 'detail': detail.strip()})
        else:
            publications.append({'title': line, 'detail': ''})
    data['publications'] = publications

    # Social links
    github = re.search(r'(?:https?://)?github\.com/\S+', text)
    linkedin = re.search(r'(?:https?://)?linkedin\.com/\S+', text)
    email = re.search(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', text)
    data['social'] = {
        'github': github.group(0) if github else '',
        'linkedin': linkedin.group(0) if linkedin else '',
        'email': email.group(0) if email else ''
    }

    loc_match = re.search(r'\+ ([^\u2014]+)', text)
    data['location'] = loc_match.group(1).strip() if loc_match else ''

    lang_match = re.search(r'Languages\n\n(.+)', text)
    data['languages'] = lang_match.group(1).strip() if lang_match else ''
    return data


def main():
    pdf_path = Path('/tmp/resume.pdf')
    fetch_pdf(PDF_URL, pdf_path)
    text = extract_text(str(pdf_path))
    data = parse_resume(text)
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.write_text(json.dumps(data, indent=2))
    print(f"Wrote {OUTPUT_JSON}")


if __name__ == '__main__':
    main()
