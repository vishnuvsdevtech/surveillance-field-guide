# Surveillance Systems Field Guide

**Live:** https://vishnuvsdevtech.github.io/surveillance-field-guide/

Ten interactive chapters on how CCTV systems actually work — camera to courtroom —
written for an engineer who has never touched surveillance. Built from an internal
research brief (November 2026); every fact, hedge and status label comes from that
brief and nothing else.

## What is interactive

| Chapter | Interaction |
|---|---|
| 1 · Five jobs | A frame travels the pipeline; EdgeVision's stations light up, plus the AI station most recorders lack |
| 2 · Vocabulary | 14 flip cards with live filtering |
| 3 · Three kinds of system | Site maps for shop / campus / cloud-chain, with detail on click |
| 4 · Protocols | Status-pilled table, plus a playable ONVIF handshake showing ONVIF asking and RTSP carrying |
| 5 · ONVIF profiles | Filterable profile cards (S, T, G, M, V, Q) |
| 6 · FTP vs SFTP | The same file travelling two ways, with a snooper reading the plain one |
| 7 · Storage | Tier ladder + a three-mode simulator: unplug a disk (failover), unplug a disk (redundant), cut the network (backfill) |
| 8 · Compliance | Five accordion families, filterable by India / EU / US |
| 9 · EdgeVision's fit | Tabbed A/B/C diagrams with arrow-key support |
| 10 · Cheat sheet | Ten cards and a ten-question quiz |

## Conventions kept throughout

- **Status colours** mean the same thing everywhere: green = exists / yes,
  blue = Phase 1a, amber = partly / manual, grey = not yet / planned.
- **Hedges preserved**: "release candidate", "still being finalised", "still to
  confirm", "needs confirming" are left exactly as the brief states them.
- **Compliance chapter carries a visible "Orientation, not legal advice."** banner.
- **No brand assets** — no ONVIF, Milestone, Genetec, Hikvision or other logos.
  Vendor names appear only as text where the brief names them as examples.

## Two honest notes about the source brief

1. The chapter called "sixteen words" in the brief defines **fourteen** terms in
   the table it supplies. The page presents the fourteen it can actually define
   and says so, rather than padding the count.
2. The profile table in the brief is partly garbled by interleaved text. The
   profiles reconstructed with confidence are S, T, G, M, V and Q — T and M are
   named elsewhere in the brief (chapters 9 and 10) without their own table rows,
   so their cards carry no invented year or status beyond "Current".

## Run it

Static — open `index.html`, or serve the folder. No build step, no dependencies.
