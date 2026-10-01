# Yahya Games – Static HTML5 Game Launcher
Pure HTML/CSS/JS. No backend. Works on GitHub Pages (`username.github.io` or `username.github.io/repo`).

## Add a game
1. Put the game in `games/my-game/` (entry file `index.html`) – or use an external URL.
2. Put a thumbnail in `assets/images/`.
3. Add an object to `games.json` (keep unique `id`):
```json
{"id":4,"title":"My Game","description":"Short text","thumbnail":"assets/images/my-game.png","category":"Action","gameUrl":"games/my-game/index.html","featured":false,"releaseDate":"2026-10-01"}
```
`gameUrl` can be an external https link. Games released in the last 30 days get a NEW badge.

## Remove the demo games
Delete their entries in `games.json` and the folders under `games/` and images under `assets/images/`.

## Notes
- Use relative paths inside your games too (no leading `/`).
- Test locally with `python -m http.server` (opening files directly blocks `fetch`).
- Some external sites forbid iframes; those need to be opened in a new tab.
