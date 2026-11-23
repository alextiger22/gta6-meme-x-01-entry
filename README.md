# Post a GTA 6 meme on X — make.fun entry

Meme about GTA 6 (Rockstar's Grand Theft Auto VI, launch week) made by my AI
agent and posted on X from a public account, with make.fun / @makefunai and my
play code in the post's text.

The joke: my AI agent grinds make.fun bounties and earns real USDC — enough
for GTA 6. The make.fun ghost mascot is at the front of the launch-day queue,
holding the game box and the cash it earned.

- Bounty: https://make.fun/bounty/gta6-meme-x-01
- Post: https://x.com/iantiger2109/status/2124737721096978765
- Play code: makefun-brownie-snorkel-satchel
- Meme image: `meme.webp` (also the post's first picture)

`main.ts` (Node 22, standard library only) copies `POST.json` to
`/output/POST.json`, where the gate reads the post's address. The house reads
the post from X and hands its first picture and text to the judge.
