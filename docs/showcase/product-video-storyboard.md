# Kenvio product film: 45-60 second storyboard

Status: production plan only (Step 3). Nothing recorded.
Format: 1920 x 1080, 30 fps, H.264 MP4 (web) plus a 1080 x 1920 vertical cut
for social if wanted. Silent-safe: every beat carries an on-screen caption so
the film works muted. Music and voice-over are optional layers added last.

Every product shot is a screen capture of the live Kenvio Demo (Northgate
Retrofit & Mechanical Ltd). No mock UI, no AI-generated screens.

| # | Time | Beat | On screen | Caption |
| - | ---- | ---- | --------- | ------- |
| 1 | 0-5s | Problem | Dark title card, Kenvio wordmark small. | "Five systems. Three spreadsheets. One job." |
| 2 | 5-12s | Home | Slow push-in on Home: attention strip, operational health, your attention list. | "One operational view." |
| 3 | 12-19s | Work | Jobs hub, then one job record (Harlow Court EWI). Cursor opens the job. | "Every job. Where it stands." |
| 4 | 19-27s | People and compliance | Competence requirements with expiry, then H&S hub tiles. | "Who is competent. What is controlled." |
| 5 | 27-35s | Approvals and evidence | Method statement with approval state and acknowledgements; a permit record. | "Approved, briefed, evidenced." |
| 6 | 35-42s | Lucy | Lucy assistance panel drafting a risk assessment section. Hold on the human review step. | "Lucy drafts. Competent people decide." |
| 7 | 42-50s | Commercial | Job commercial control: accepted quote, cost entries, committed cost. | "What the job is worth. What it is costing." |
| 8 | 50-58s | Close | Cut to dark card, Kenvio wordmark, URL. | "Book a 30-minute operational review. kenvio.co.uk" |

Motion rules: one movement per shot (push-in, pan or cursor action), 0.4s
cross-dissolves, no zooms beyond 108 percent, no bounce. Captions in the
website type scale, bottom-left, teal accent bar.

## Production pipeline (all runnable in this environment once the Demo is reachable)
1. Capture: Playwright `recordVideo` at 1920 x 1080 against the live Demo,
   logged in as a demo user, scripted navigation per beat. Output WebM.
2. Edit: ffmpeg (static build with libx264, obtained via pip imageio-ffmpeg):
   trim, `zoompan` push-ins, `xfade` dissolves, caption overlays rendered as
   PNG frames from the website's own fonts, title cards from HTML rendered in
   Playwright.
3. Export: H.264 MP4, CRF 20, AAC audio track if music is supplied.
4. Review: contact sheet of one frame per beat for approval before export.

## Not available here
- Voice-over and music: no TTS or licensed music library in this environment.
  Supply a track and/or a recorded VO, or ship the silent captioned cut.
