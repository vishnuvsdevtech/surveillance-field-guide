/* Hand-drawn SVG figures. Colours come from CSS variables so they follow the
 * theme; nothing here is a bitmap, and nothing is a brand logo. */
(() => {
  const V = {};

  /* ---------- 1. the whole system ---------- */
  V.system = `
  <svg viewBox="0 0 760 250" role="img" aria-label="A camera sends video through a network switch to a recorder, which writes to disks and serves an operator screen">
    <defs>
      <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker>
    </defs>

    <!-- camera -->
    <g class="d-line">
      <rect class="d-box" x="20" y="64" width="86" height="52" rx="6"/>
      <circle cx="63" cy="90" r="15" fill="none"/>
      <circle cx="63" cy="90" r="6" fill="none"/>
      <path d="M106 90 h14" />
      <path d="M63 116 v16 M45 132 h36"/>
    </g>
    <text class="d-strong" x="20" y="46">Camera</text>
    <text class="d-label" x="20" y="160">turns light into video</text>
    <text class="d-mono" x="20" y="176">01 CAPTURE</text>

    <!-- switch -->
    <g class="d-line">
      <rect class="d-box" x="140" y="78" width="74" height="34" rx="5"/>
      <path d="M152 88 h10 M152 96 h10 M152 104 h10 M186 88 h10 M186 96 h10 M186 104 h10" opacity=".6"/>
    </g>
    <text class="d-strong" x="140" y="66">Switch</text>
    <text class="d-mono" x="140" y="132">02 TRANSPORT</text>

    <!-- recorder -->
    <rect class="d-box" x="250" y="34" width="240" height="140" rx="10" stroke="var(--acc)" stroke-width="1.6" fill="var(--acc-soft)"/>
    <text class="d-strong" x="264" y="56">Recorder · EdgeVision</text>
    <text class="d-label" x="264" y="72">writes, keeps, understands</text>

    <g class="d-line">
      <rect x="266" y="86" width="88" height="18" rx="3" fill="var(--panel)"/>
      <rect x="266" y="110" width="88" height="18" rx="3" fill="var(--panel)"/>
      <text class="d-label" x="270" y="99" style="font-size:9.5px">disk 1</text>
      <text class="d-label" x="270" y="123" style="font-size:9.5px">disk 2</text>
      <rect x="368" y="86" width="104" height="42" rx="4" fill="var(--panel)" stroke-dasharray="4 3"/>
      <text class="d-label" x="376" y="104" style="font-size:10px">AI</text>
      <text class="d-label" x="376" y="118" style="font-size:9px">people · vehicles</text>
    </g>
    <text class="d-mono" x="264" y="154">03 RECORD · 04 RETAIN · 06 UNDERSTAND</text>

    <!-- operator -->
    <g class="d-line">
      <rect class="d-box" x="580" y="58" width="96" height="64" rx="6"/>
      <path d="M596 74 h64 M596 84 h50 M596 94 h58" opacity=".5"/>
      <path d="M614 122 v10 M594 132 h52"/>
      <circle cx="640" cy="140" r="7" fill="none"/>
    </g>
    <text class="d-strong" x="580" y="46">Operator</text>
    <text class="d-label" x="580" y="160">watch · search · export</text>
    <text class="d-mono" x="580" y="176">05 OPERATE</text>

    <!-- flows -->
    <g class="d-line" color="var(--ink2)">
      <path d="M114 95 h22" marker-end="url(#ar)"/>
      <path d="M222 95 h20" marker-end="url(#ar)"/>
      <path d="M498 104 h70" marker-end="url(#ar)"/>
    </g>
    <text class="d-label" x="222" y="188" style="font-size:10px">video travels as data</text>
    <text class="d-label" x="500" y="96" style="font-size:10px">live · playback</text>
  </svg>`;

  /* ---------- 2. control plane vs video ---------- */
  V.control = `
  <svg viewBox="0 0 760 235" role="img" aria-label="ONVIF control messages travel between recorder and camera while RTSP carries the video">
    <defs>
      <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8"
              markerUnits="userSpaceOnUse" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker>
    </defs>

    <rect class="d-box" x="20" y="64" width="158" height="76" rx="8"/>
    <text class="d-strong" x="36" y="92">Recorder / VMS</text>
    <text class="d-label" x="36" y="110">asks the questions</text>
    <text class="d-mono" x="36" y="128">CLIENT</text>

    <rect class="d-box" x="582" y="64" width="158" height="76" rx="8"/>
    <text class="d-strong" x="598" y="92">Camera</text>
    <text class="d-label" x="598" y="110">answers them</text>
    <text class="d-mono" x="598" y="128">DEVICE</text>

    <!-- ONVIF lane: request right, response left -->
    <text class="d-mono" x="196" y="56" style="fill:var(--blue)">ONVIF — FIND, DESCRIBE, CONFIGURE, EVENTS</text>
    <g class="d-line d-dash d-blue">
      <path d="M186 78 H 574" marker-end="url(#ar2)"/>
      <path d="M574 106 H 186" marker-end="url(#ar2)"/>
    </g>
    <text class="d-label" x="196" y="124" style="font-size:10px">GetProfiles · GetStreamUri · PTZ move</text>

    <!-- RTSP lane -->
    <text class="d-mono" x="196" y="176" style="fill:var(--green)">RTSP — THE VIDEO ITSELF</text>
    <g class="d-line d-green">
      <path d="M574 196 H 186" stroke-width="3" marker-end="url(#ar2)"/>
    </g>

    <text class="d-label" x="196" y="222" style="font-size:10px">ONVIF answers with an rtsp:// URL — the video never travels inside ONVIF.</text>
  </svg>`;


  /* ---------- 3. one product, several profiles ---------- */
  V.profiles = `
  <svg viewBox="0 0 760 230" role="img" aria-label="Overlapping profile circles showing that one product usually supports several profiles">
    <circle cx="300" cy="110" r="74" fill="var(--acc-soft)" stroke="var(--acc)" stroke-width="1.4" opacity=".85"/>
    <circle cx="420" cy="110" r="74" fill="var(--green-bg)" stroke="var(--green)" stroke-width="1.4" opacity=".8"/>
    <circle cx="360" cy="176" r="58" fill="var(--blue-bg)" stroke="var(--blue)" stroke-width="1.4" opacity=".8"/>
    <circle cx="470" cy="176" r="44" fill="var(--amber-bg)" stroke="var(--amber)" stroke-width="1.2" opacity=".75" stroke-dasharray="4 3"/>

    <text class="d-strong" x="238" y="96">Profile S</text>
    <text class="d-label" x="238" y="112" style="font-size:9.5px">streaming (retiring)</text>
    <text class="d-strong" x="410" y="96">Profile T</text>
    <text class="d-label" x="410" y="112" style="font-size:9.5px">streaming (current)</text>
    <text class="d-strong" x="316" y="180">Profile G</text>
    <text class="d-label" x="316" y="196" style="font-size:9.5px">recording &amp; storage</text>
    <text class="d-strong" x="452" y="180">Profile M</text>
    <text class="d-label" x="452" y="196" style="font-size:9.5px">metadata</text>

    <text class="d-mono" x="596" y="70">TYPICAL PRODUCT</text>
    <text class="d-strong" x="596" y="92" style="font-size:14px">S + T + G + M</text>
    <text class="d-label" x="596" y="112" style="font-size:10px">a profile is a promise:</text>
    <text class="d-label" x="596" y="126" style="font-size:10px">"supports exactly this list"</text>
    <text class="d-label" x="596" y="150" style="font-size:10px">Profile V (cloud) is a</text>
    <text class="d-label" x="596" y="164" style="font-size:10px">release candidate.</text>
  </svg>`;

  /* ---------- 4. segments and the index ---------- */
  V.segments = `
  <svg viewBox="0 0 760 260" role="img" aria-label="Video written as short segment files, with an index table mapping time to file name">
    <text class="d-mono" x="20" y="20">DISK — 2-SECOND MP4 SEGMENTS</text>
    <g>
      ${Array.from({ length: 10 }).map((_, i) => `<rect x="${20 + i * 72}" y="32" width="64" height="34" rx="3"
        fill="${i === 6 ? 'var(--amber-bg)' : 'var(--green-bg)'}"
        stroke="${i === 6 ? 'var(--amber)' : 'var(--green)'}" stroke-width="1.2" opacity=".9"/>`).join('')}
    </g>
    <text class="d-label" x="20" y="80" style="font-size:10px">one bad file loses seconds, not hours</text>
    <text class="d-label" x="452" y="80" style="font-size:10px;fill:var(--amber)">▲ corrupt segment</text>

    <path class="d-line" d="M380 96 v34" marker-end="url(#ar3)"/>
    <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/></marker></defs>

    <text class="d-mono" x="20" y="156">INDEX — THE CATALOGUE</text>
    <rect class="d-box" x="20" y="166" width="470" height="76" rx="6"/>
    <g class="d-label" style="font-family:var(--mono);font-size:10.5px">
      <text x="34" y="188">cam 03 · 10:42:06  →  seg_00042.mp4</text>
      <text x="34" y="206">cam 03 · 10:42:08  →  seg_00043.mp4</text>
      <text x="34" y="224">cam 03 · 10:42:10  →  seg_00044.mp4</text>
    </g>

    <rect class="d-box" x="520" y="166" width="220" height="76" rx="6" stroke="var(--amber)" stroke-dasharray="4 3"/>
    <text class="d-strong" x="534" y="188" style="font-size:11.5px">Lose the index</text>
    <text class="d-label" x="534" y="206" style="font-size:10px">the video still exists,</text>
    <text class="d-label" x="534" y="222" style="font-size:10px">but nobody can find it.</text>

    <text class="d-label" x="20" y="132" style="font-size:10px">"camera 3 at 10:42" → a file on disk. That mapping is the index.</text>
  </svg>`;

  /* ---------- 5. compliance matrix ---------- */
  V.compliance = (() => {
    const cols = ['India', 'EU', 'US', 'Industry'];
    const rows = window.FAMILIES.map((f) => ({
      t: f.title,
      has: [f.countries.includes('in'), f.countries.includes('eu'), f.countries.includes('us'), f.countries.includes('global')],
    }));
    return `
    <svg viewBox="0 0 760 ${70 + rows.length * 34}" role="img" aria-label="Matrix of which compliance family applies in which region">
      <text class="d-mono" x="20" y="24">WHICH RULE APPLIES WHERE</text>
      ${cols.map((c, i) => `<text class="d-label" x="${420 + i * 84}" y="56" style="font-size:10px">${c}</text>`).join('')}
      ${rows.map((r, ri) => {
        const y = 82 + ri * 34;
        return `<text class="d-label" x="20" y="${y}" style="font-size:11px">${r.t}</text>
          <line x1="20" y1="${y + 9}" x2="740" y2="${y + 9}" stroke="var(--line)" stroke-width="1"/>
          ${r.has.map((on, ci) => on
            ? `<circle cx="${426 + ci * 84}" cy="${y - 4}" r="5" fill="var(--acc)"/>`
            : `<circle cx="${426 + ci * 84}" cy="${y - 4}" r="4" fill="none" stroke="var(--line2)"/>`).join('')}`;
      }).join('')}
    </svg>`;
  })();

  /* ---------- glossary icons ---------- */
  const I = {
    camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 10l5-2v8l-5-2"/><circle cx="9" cy="12" r="2.5"/></svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/><circle cx="17" cy="15.5" r="1.4"/></svg>`,
    disk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h6M7 16.5h6"/></svg>`,
    net: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="9" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 12h3v-6h3M12 12v6h3"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l7 3v6c0 4-3 7-7 8-4-1-7-4-7-8V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l8 4.5-8 4.5-8-4.5z"/><path d="M4 12l8 4.5 8-4.5"/><path d="M4 16.5l8 4.5 8-4.5"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 1.5A3.2 3.2 0 0 0 7 18z"/></svg>`,
    doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/></svg>`,
  };
  const MAP = {
    'IP camera': 'camera', 'DVR / NVR': 'box', 'VMS': 'box', 'Edge': 'camera', 'Codec': 'doc',
    'Main / sub stream': 'layers', 'Segment': 'doc', 'Index': 'layers', 'Retention': 'clock',
    'RAID': 'disk', 'NAS / SAN': 'net', 'Failover': 'shield', 'Chain of custody': 'shield', 'VSaaS': 'cloud',
  };
  V.icon = (term) => I[MAP[term]] || I.box;

  window.VISUALS = V;
})();
