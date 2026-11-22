# Logic of Archives

A multi-page personal website in plain HTML, CSS, and JavaScript. It is intentionally dependency-free so you can edit it in any code editor and host it almost anywhere.

## Files

- `index.html` — home / archive index
- `about.html` — about me
- `interests.html` — interests
- `hobbies.html` — hobbies
- `achievements.html` — achievements
- `facts.html` — interesting facts
- `styles.css` — all colors, fonts, spacing, layout, image placeholders, and animations
- `site.js` — active navigation, mobile menu, full-page 1.5-second fades when switching pages, and 1.5-second scroll reveals that slide content down from above

## Quick edits

1. Open `styles.css` and edit the variables at the top of `:root`.
   - `--color-red: #460404;` is the moonlight red background.
   - `--color-ink` controls the main text color.
   - `--font-display` and `--font-body` control the typefaces.
   - `--space-*` controls spacing, and `--reveal-time: 1.5s` controls both the page fade and the scroll fade/slide timing.
2. Open any page and replace the sample text directly in the HTML.
3. Replace an image placeholder by swapping the `<figure class="image-slot ...">...</figure>` block with an image, for example:

   ```html
   <figure class="image-slot image-slot--wide">
     <img src="assets/my-image.jpg" alt="Describe the image here">
   </figure>
   ```

   Add your images in a new `assets` folder. There are two editable image slots on each inner page.
4. Keep all files in the same folder so the navigation continues to work.

## Edit online

The live site is backed by the public GitHub repository:

`https://github.com/delapenaella48-lgtm/logic-of-archives`

To edit it in your browser:

1. Open the repository and sign in to GitHub with the connected account.
2. Open the file you want to change, such as `about.html` for page text or `styles.css` for colors, fonts, spacing, and animations.
3. Click the pencil icon, make your edits, then choose **Commit changes**.
4. GitHub Pages automatically republishes the live site after the commit finishes. It may take a minute or two to update.

The **Edit site ↗** link in the footer of every page opens this repository.

## Run locally

From this folder, use any static server. For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing

This site can be published as-is with GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static hosting service. No build step is needed.
