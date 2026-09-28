# StudyVerse: A Scrolling Story

A single-page website that tells the story of StudyVerse, a grades dashboard I built for myself. You move through the story by scrolling.

## The story

It's the middle of the semester and I have three tabs open: Canvas, ACORN and Quercus. All three tell me what's due. None of them can tell me what an 84 on a midterm does to my CGPA, or which assignment actually deserves my Tuesday night. The official transcript only updates once the semester is over, and by then it's too late to change anything.

So I had one question. If I get an 84 on this midterm, where does that leave me?

I couldn't find anything that answered it, so I built StudyVerse. It knows the UofT grading scale, including notations like CR that don't count toward the CGPA. It lets me set a target for each course and warns me when a target starts slipping. I also connected it to Claude, so I can ask "what should I study this week?" and get an answer that comes from my real grades.

The logo is an arc with a star in the middle. The arc shows where you stand right now, and the star shows where you're headed.

## Sections

| Section | What happens |
|---|---|
| Intro | The logo fades in. When you scroll, the logo and the title move at different speeds (parallax) and fade out. |
| 01 · Three tabs | The text fades in and slides up when it reaches the screen. |
| 02 · One question | A sticky section: the CGPA number counts up, the bar fills and the caption changes as you scroll. |
| 03 · So I built it | Three boxes slide in, alternating from the left and the right. |
| 04 · North star | The closing lines and a "Back to top" button. |

## What I used

- **Scroll event**: one `scroll` listener in `script.js` handles everything.
- **CSS transforms**: `translateY` for the parallax, and `translateX` and `translateY` for the slide-in effects.
- **Transitions**: the `.hidden` class fades to `.show` over 0.8s.
- **Sticky positioning**: `position: sticky` keeps chapter 2 on screen while you scroll through it.
- **Progress bar**: a bar across the top shows how far through the page you are.

## Files

```
index.html   the page and the story text
style.css    colours, layout and animations
script.js    scroll effects
logo.svg     StudyVerse logo
```

## How to run

Open `index.html` in a browser.

*The CGPA numbers in chapter 2 are examples, not my real grades.*

## Publish on GitHub Pages

This project is ready to publish from the repository `docs` folder.

1. Keep these deploy files in `/home/runner/work/CCT360/CCT360/docs`:
   - `index.html`
   - `style.css`
   - `script.js`
   - `logo.svg`
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select branch **main** and folder **/docs**.
5. Save and wait for deployment, then open:
   `https://varnan234.github.io/CCT360/`
