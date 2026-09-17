# FDA review-index text census

This directory records **machine discovery**, not a manually verified inventory of all IND information.

## Scope and denominators

- Stage A starts with every one of the 7,857 `ApplicationDocsTypeID=3` (Review) rows in the retrieved FDA index snapshot. These reduce to 7,179 normalized source URLs. Package pages expand that queue to their linked public PDF documents, including administrative correspondence and other documents in those packages.
- Stage B preserves the other 73,224 index rows in `stage-b-other-types.csv`. They have **not** been screened by this process. A different document type does not establish irrelevance.
- FDA sources outside this index, the complete-response-letter collection, advisory committee materials, and CBER materials require separate search strata. This process does not cover every FDA record or every IND.

`scope.json` contains the actual type counts and search expressions. `progress.json` is a timestamped snapshot; it must be read before describing coverage. A resolved package is not a screened PDF, and a keyword-positive PDF is not a verified IND teaching example.

## What is retained

- `manifest.csv`: every discovered URL, source kind, depth, attempt count, status, errors, extraction classification, page counts, source hash, and local file paths.
- `index-origins.csv`: all index-row/application/submission associations, including duplicate URLs.
- `package-edges.csv`: parent package, child document, and link label. A child may have multiple parents.
- `candidates.json`: keyword-positive PDFs and unverified lesson hints. Full page snippets are in the referenced per-document JSON.
- `machine-hit-pages.jsonl`: all machine-hit pages exported with inherited index/application provenance and exact context windows.
- `manual-review-priority.csv`: pages containing more specific terms such as an original IND review or clinical hold. These still require manual review.
- `attempt-events.csv`: exported fetch/parse outcomes, including retained failures and cache evictions.
- `/tmp/ind-full-screen/screen.sqlite`: resumable live queue and attempt-event log.
- `/tmp/ind-full-screen/text/`: compressed full extracted text, separated by one-based PDF page.
- `/tmp/ind-full-screen/hits/`: every matched page and merged context window, with search terms and **unverified** lesson hints.
- `/tmp/ind-full-screen/files/`: bounded source cache. A cached PDF can be evicted after extraction; the exact URL, hash, extracted text, and snippets remain. An evicted file is explicitly cleared from `source_file`.

PDF page locators refer to one-based file pages, not printed page numbers. Pages with fewer than 40 word characters are flagged for OCR/visual triage: they may be scans, blank pages, diagrams, or redactions. Low-text flags do not themselves prove that OCR will recover content. Text-negative files and unreadable pages **cannot** establish absence of IND information.

## Retrieval method

The source URL is retained. FDA HTTP URLs are normalized to HTTPS and fragments removed; paths and query case are preserved. Spaces are percent-encoded only for transport. No broken URL is silently repaired to an invented path.

Package resolution reads ordinary links and two explicit FDA TOC formats: quoted `pdfFilenames` values and enabled `pdfFiles` href expressions using the page's own `pdfBaseName`. It does not execute JavaScript. All discovered public FDA PDFs are queued. Unresolved packages and HTTP/download failures remain visible for later adjudication.

Downloads use system curl with normal TLS verification, bounded timeouts and file sizes, and conservative concurrency. PDF text extraction uses PyMuPDF. Full text is preserved so future search terms can be applied without redownloading a PDF. A starting-dose or IND-word match can refer to marketing review, a later indication, boilerplate, or an OCR artifact; manual context is essential.

## Run and resume

From the project root:

```sh
python3 research/index-screen/screen_fda_index.py --initialize --report
python3 -u research/index-screen/screen_fda_index.py --run --workers 3 --cache-gb 18
python3 research/index-screen/screen_fda_index.py --report
```

The active full run uses four workers (three PDF slots and one package-resolution slot). Recent packages are processed first to provide readable cases for early curation; historical sources remain in the full queue. The ordering is not a date filter.

The initial source CSV and FDA extracted table paths are defaults in the script. `--initialize` is idempotent; it does not reset completed records. After an interrupted run, `--run` returns in-progress rows to pending and continues. Errors are not silently discarded or automatically treated as completed negative screens. Preserve the scratch directory if stopping: the live SQLite database and extracted text are needed for efficient resume. A self-contained `screen-checkpoint.sqlite` backup is updated every ten minutes alongside the passage and event exports. The CSV exports provide an inspectable census even if the local cache is unavailable.

Run `python3 research/index-screen/test_screen.py` for five offline checks of package parsing, whole-word matching, one-based page locators, and explicit unreadable-page handling.

The worker stops fetching when fewer than 8 GiB remain free. The PDF cache is bounded separately. The queue has no arbitrary sample limit.

## Turning discovery into lessons

The nine regex-based hints correspond to Part 3 pharmacology, exposure, potential harm, safety-package design, material definition, manufacturing controls, stability, clinical-study planning, and starting-dose planning. They are candidate routing hints only. A curator must determine:

1. What sponsor question or FDA decision the passage actually documents.
2. Whether it concerns the initial IND, later IND development, or marketing review referring backward.
3. Which source-stage evidence and redactions limit the inference.
4. Which specific lesson the example clarifies, with exact pages and an attributable summary.

Avoid assigning a whole review to a lesson merely because the same vocabulary appears somewhere in it. For website teaching, favor a concrete question, evidence, decision, and remaining uncertainty.
