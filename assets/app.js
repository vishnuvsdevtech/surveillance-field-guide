/* Field guide — rendering + the small simulations. No dependencies. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const main = $('#main');
  const nav = $('#chapterNav');

  /* ---------------- shell ---------------- */
  main.innerHTML = window.CH.map((c) => `
    <section class="chapter" id="${c.id}">
      <div class="chap-no">Chapter ${c.n}</div>
      <h2>${c.title}</h2>
      ${c.html}
    </section>`).join('');

  nav.innerHTML = window.CH.map((c) => `<li><a href="#${c.id}" data-id="${c.id}">${c.title}</a></li>`).join('');

  // scroll spy
  const links = [...nav.querySelectorAll('a')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('active', a.dataset.id === e.target.id));
    });
  }, { rootMargin: '-15% 0px -70% 0px' });
  document.querySelectorAll('.chapter').forEach((s) => io.observe(s));

  // progress
  const bar = $('#progress');
  addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = Math.min(100, (scrollY / Math.max(1, h)) * 100) + '%';
  }, { passive: true });

  // theme
  const themeBtn = $('#themeBtn');
  const saved = localStorage.getItem('guide-theme');
  if (saved) document.documentElement.dataset.theme = saved;
  else if (matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
  themeBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('guide-theme', next);
  });

  // mobile sidebar
  const sidebar = $('#sidebar'), scrim = $('#scrim');
  $('#menuBtn').addEventListener('click', () => { sidebar.classList.toggle('open'); scrim.classList.toggle('on'); });
  scrim.addEventListener('click', () => { sidebar.classList.remove('open'); scrim.classList.remove('on'); });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) { sidebar.classList.remove('open'); scrim.classList.remove('on'); }
  });

  // figures declared with data-svg are filled from assets/visuals.js
  document.querySelectorAll('[data-svg]').forEach((el) => {
    const fig = window.VISUALS[el.dataset.svg];
    if (!fig) return;
    el.innerHTML = (typeof fig === 'function' ? fig() : fig) +
      (el.dataset.cap ? `<figcaption>${el.dataset.cap}</figcaption>` : '');
  });

  /* ---------------- ch1: pipeline ---------------- */
  (function pipeline() {
    const host = $('[data-w="pipeline"]');
    if (!host) return;
    const ST = [
      ['1', 'Capture', 'cameras'], ['2', 'Transport', 'network'], ['3', 'Record', 'writes files'],
      ['4', 'Retain', 'storage'], ['5', 'Operate', 'watch · search'], ['6', 'Understand', 'AI'],
    ];
    host.innerHTML = `<div class="widget-top"><span class="widget-title">The five jobs, plus ours</span>
      <span class="hint">a frame travelling through the system</span></div>
      <div class="pipe" id="pipeRow">
        <div class="frame-dot" id="dot"></div>
        ${ST.map((s, i) => `<div class="station ${i >= 2 ? 'on' : ''} ${i === 5 ? 'ai' : ''}" data-i="${i}">
          <div class="n">${s[0]}</div><div class="t">${s[1]}</div><div class="s">${s[2]}</div></div>`).join('')}
      </div>
      <div class="hint" id="pipeNote" style="margin-top:8px">EdgeVision covers jobs 3, 4 and 5 — and adds a sixth: understanding the video.</div>`;
    const dot = $('#dot'), row = $('#pipeRow');
    const stations = [...row.querySelectorAll('.station')];
    let i = 0;
    setInterval(() => {
      i = (i + 1) % stations.length;
      const s = stations[i];
      stations.forEach((x) => x.classList.remove('hot'));
      s.classList.add('hot');
      const r = s.getBoundingClientRect(), rr = row.getBoundingClientRect();
      dot.style.opacity = '1';
      dot.style.left = (r.left - rr.left + r.width / 2 - 6) + 'px';
      dot.style.top = '-9px';
      const ai = i === 5;
      $('#pipeNote').textContent = ai
        ? 'Sixth station: AI understanding — the part a normal NVR cannot do.'
        : `Station ${i + 1}: ${s.querySelector('.t').textContent.toLowerCase()} — ${['the camera turns light into video', 'the network carries the video', 'the recorder writes it to files', 'storage keeps it for the required time', 'people watch, search, export and share'][i]}.`;
    }, 1600);
  })();

  /* ---------------- ch2: glossary ---------------- */
  (function glossary() {
    const host = $('[data-w="glossary"]');
    if (!host) return;
    host.innerHTML = `<div class="widget-top"><span class="widget-title">${window.TERMS.length} terms</span>
      <span class="hint">click a card to flip · type to filter</span></div>
      <input class="search" id="termSearch" placeholder="search terms — try “index”, “raid”, “retention”" />
      <div class="cards" id="termCards"></div>`;
    const cards = $('#termCards');
    const render = (filter = '') => {
      const f = filter.trim().toLowerCase();
      cards.innerHTML = window.TERMS.filter(([t, d]) => !f || t.toLowerCase().includes(f) || d.toLowerCase().includes(f))
        .map(([t, d]) => `<div class="flip" tabindex="0"><div class="flip-inner">
          <div class="face"><div class="ti">${window.VISUALS.icon(t)}</div><b>${t}</b><span>click to reveal</span></div>
          <div class="face back"><p>${d}</p></div></div></div>`).join('');
      cards.querySelectorAll('.flip').forEach((c) => {
        const toggle = () => c.classList.toggle('open');
        c.addEventListener('click', toggle);
        c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
      });
    };
    render();
    $('#termSearch').addEventListener('input', (e) => render(e.target.value));
  })();

  /* ---------------- ch3: three site maps ---------------- */
  (function sites() {
    const host = $('[data-w="sites"]');
    if (!host) return;
    const icon = {
      A: `<svg viewBox="0 0 120 60"><rect x="8" y="16" width="26" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="21" cy="26" r="4" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M34 26 h20" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 3"/><rect x="54" y="12" width="30" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M58 18 h22 M58 23 h22" stroke="currentColor" stroke-width="1.2" opacity=".6"/><rect x="88" y="18" width="22" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="99" cy="26" r="3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`,
      B: `<svg viewBox="0 0 120 60"><rect x="6" y="26" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="30" y="18" width="18" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="54" y="10" width="20" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="80" y="18" width="18" height="22" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M24 33 h6 M48 29 h6 M74 25 h6" stroke="currentColor" stroke-width="1.3" stroke-dasharray="2 2"/><path d="M6 44 h92" stroke="currentColor" stroke-width="1" opacity=".4"/></svg>`,
      C: `<svg viewBox="0 0 120 60"><rect x="8" y="30" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="42" y="30" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="76" y="30" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M18 30 C18 12 100 12 86 30" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="3 3"/><ellipse cx="60" cy="12" rx="12" ry="6" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`,
    };
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Pick a site</span>
      <span class="hint">what the customer already owns</span></div>
      <div class="sites">
        ${Object.entries(window.SITES).map(([k, s]) => `<div class="site" data-k="${k}">
          <span style="color:var(--acc)">${icon[k]}</span>
          <h4>${k}. ${s.title}</h4><p>${s.where}</p></div>`).join('')}
      </div>
      <div class="site-detail" id="siteDetail">Select a site to see how it is built.</div>`;
    const det = $('#siteDetail');
    host.querySelectorAll('.site').forEach((el) => el.addEventListener('click', () => {
      host.querySelectorAll('.site').forEach((x) => x.classList.remove('sel'));
      el.classList.add('sel');
      det.innerHTML = window.SITES[el.dataset.k].detail;
    }));
  })();

  /* ---------------- ch4: ONVIF handshake ---------------- */
  (function flow() {
    const host = $('[data-w="onvifFlow"]');
    if (!host) return;
    const STEPS = [
      ['onvif', 'Discover the camera on the network'],
      ['onvif', 'Ask its model and available streams'],
      ['onvif', 'Ask for the stream address — get an rtsp://… URL back'],
      ['rtsp', 'Open that URL and video flows'],
      ['onvif', 'Later: PTZ commands and motion events'],
    ];
    host.innerHTML = `<div class="widget-top"><span class="widget-title">When a recorder meets a new camera</span>
      <button class="btn primary" id="playFlow">Play</button></div>
      <div class="seq">${STEPS.map(([w, t], i) => `<div class="step" data-i="${i}">
        <span class="who ${w}">${w}</span><p>${i + 1}. ${t}</p></div>`).join('')}</div>
      <div class="hint" style="margin-top:8px">ONVIF asks the questions. RTSP carries the video.</div>`;
    let timer = null;
    $('#playFlow').addEventListener('click', () => {
      clearInterval(timer);
      const els = [...host.querySelectorAll('.step')];
      els.forEach((e) => e.classList.remove('on'));
      let i = 0;
      const tick = () => {
        if (i >= els.length) { clearInterval(timer); return; }
        els[i].classList.add('on');
        i++;
      };
      tick();
      timer = setInterval(tick, 780);
    });
  })();

  /* ---------------- ch5: profiles ---------------- */
  (function profiles() {
    const host = $('[data-w="profiles"]');
    if (!host) return;
    const FILTERS = [['all', 'All'], ['high', 'High relevance'], ['storage', 'Storage'], ['ai', 'AI'], ['cloud', 'Cloud'], ['retired', 'Retired']];
    host.innerHTML = `<div class="widget-top"><span class="widget-title">ONVIF profiles</span>
      <span class="hint">a profile is a promise about features</span></div>
      <div class="filters">${FILTERS.map(([k, l], i) => `<button class="filter ${i === 0 ? 'on' : ''}" data-f="${k}">${l}</button>`).join('')}</div>
      <div class="profiles" id="profList"></div>`;
    const list = $('#profList');
    const render = (f = 'all') => {
      const rows = window.PROFILES.filter((p) => f === 'all' || p.filters.includes(f));
      list.innerHTML = rows.map((p) => `<div class="profile ${p.retired ? 'retired' : ''}">
        <div class="tag">Profile ${p.k} · ${p.when}</div>
        <h4>${p.name}</h4>
        <p>${p.what}</p>
        <p style="margin-top:6px;color:var(--muted)">${p.note}</p></div>`).join('');
    };
    render();
    host.querySelectorAll('.filter').forEach((b) => b.addEventListener('click', () => {
      host.querySelectorAll('.filter').forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      render(b.dataset.f);
    }));
  })();

  /* ---------------- ch6: FTP vs SFTP ---------------- */
  (function ftp() {
    const host = $('[data-w="ftp"]');
    if (!host) return;
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Same file, two journeys</span>
      <button class="btn primary" id="sendFile">Send snapshot</button></div>
      <div class="lanes">
        <div class="lane"><h4>FTP · port 21 <span class="pill no">plain</span></h4>
          <div class="track"><div class="plain"></div><div class="packet" id="p1">file</div>
          <div class="snoop" id="snoop">snooper reads it</div></div>
          <p class="hint" style="margin:6px 0 0">Password and video visible on the wire.</p></div>
        <div class="lane"><h4>SFTP · port 22 <span class="pill yes">encrypted</span></h4>
          <div class="track"><div class="locked"></div><div class="packet" id="p2">file</div></div>
          <p class="hint" style="margin:6px 0 0">One port, inside an SSH tunnel.</p></div>
      </div>`;
    $('#sendFile').addEventListener('click', () => {
      ['p1', 'p2'].forEach((id) => {
        const el = document.getElementById(id);
        el.style.transition = 'none'; el.style.transform = 'translate(-30px,-50%)'; el.style.background = id === 'p1' ? 'var(--amber)' : 'var(--green)';
        requestAnimationFrame(() => {
          el.style.transition = 'transform 1.4s linear';
          el.style.transform = 'translate(230px,-50%)';
        });
      });
      const snoop = $('#snoop');
      snoop.classList.add('on');
      setTimeout(() => snoop.classList.remove('on'), 1700);
    });
  })();

  /* ---------------- ch7: ladder + simulator ---------------- */
  (function ladder() {
    const host = $('[data-w="ladder"]');
    if (!host) return;
    const RUNGS = [
      ['Edge · camera SD card', 'ANR / backfill when the network returns', 'no', 'Not yet', 'Small cards loop; event data from the gap is usually lost'],
      ['Local disks in the recorder', 'Everything lands here first — usually RAID, watched with S.M.A.R.T.', 'phase', 'Phase 1a', 'Yes, with failover'],
      ['Secondary · second disk, USB or NAS', 'Standby recording if the first fails, or a second copy at the same time', 'phase', 'Phase 1a', 'Failover only'],
      ['Cloud · S3 object storage', 'Off-site copies or long-term archive; cold tiers ~$1/TB/month, hours to retrieve', 'no', 'Not yet', 'Object Lock makes files undeletable until a set date (WORM)'],
    ];
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Storage ladder</span>
      <span class="hint">each rung is slower and cheaper</span></div>
      <div class="ladder">${RUNGS.map(([t, d, cls, label, note]) => `<div class="rung">
        <div class="lab"><b>${t}</b><span>${d}</span></div>
        <span class="pill ${cls}">${label}</span></div>`).join('')}</div>`;
  })();

  (function sim() {
    const host = $('[data-w="sim"]');
    if (!host) return;
    const N = 24;
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Storage simulator</span>
      <span class="hint">24 segments · 2 seconds each</span></div>
      <div class="tabs">
        <button class="btn on" data-m="failover">Failover</button>
        <button class="btn" data-m="redundant">Redundant</button>
        <button class="btn" data-m="backfill">Backfill</button>
      </div>
      <div class="sim">
        <div class="timeline" id="tl"></div>
        <div class="sim-controls" id="controls"></div>
        <div class="sim-log" id="log">Choose a protection, then break something.</div>
      </div>`;
    let mode = 'failover', segs = [];

    const paint = () => {
      $('#tl').innerHTML = segs.map((s, i) => `<div class="seg ${s}" style="left:${(i / N) * 100}%;width:${100 / N - 0.6}%"></div>`).join('');
    };
    const reset = () => { segs = Array(N).fill(''); paint(); };

    const CTRL = {
      failover: [['Unplug the primary disk', 'failover-break'], ['Restore the disk', 'failover-fix']],
      redundant: [['Unplug one disk', 'red-break'], ['Restore it', 'red-fix']],
      backfill: [['Cut the network', 'net-cut'], ['Network returns', 'net-back']],
    };

    const log = (t) => { $('#log').textContent = t; };

    const actions = {
      'failover-break': () => {
        reset();
        for (let i = 9; i < 12; i++) segs[i] = 'gap';
        for (let i = 12; i < N; i++) segs[i] = '';
        paint(); log('Primary disk fails. A few seconds are held in memory during the switch, then the standby disk takes over. Recording continues.');
      },
      'failover-fix': () => { reset(); log('Primary restored. The standby returns to being a standby — there is no gap to fill, because recording never stopped after the switch.'); },
      'red-break': () => {
        reset();
        log('One disk dies. No gap: every frame was being written to two places all along. The cost is doubled storage, not lost video.');
      },
      'red-fix': () => { reset(); log('Disk replaced and re-mirrored. Storage cost returns to normal.'); },
      'net-cut': () => {
        reset();
        for (let i = 8; i < 16; i++) segs[i] = 'gap';
        paint(); log('Network cut. EdgeVision records nothing for these segments — but the camera kept recording to its own SD card.');
      },
      'net-back': () => {
        reset();
        for (let i = 8; i < 16; i++) segs[i] = 'backfill';
        paint(); log('Network returns. Profile G lets us pull the missing minutes back from the camera card and fill the gap. Event data from that window is usually lost.');
      },
    };

    const mount = () => {
      $('#controls').innerHTML = CTRL[mode].map(([label, k]) => `<button class="btn" data-a="${k}">${label}</button>`).join('');
      host.querySelectorAll('[data-a]').forEach((b) => b.addEventListener('click', () => actions[b.dataset.a]()));
      reset();
      log({ failover: 'Failover: the standby disk takes over automatically.', redundant: 'Redundant: every frame written twice.', backfill: 'Backfill: the gap is filled from the camera card afterwards.' }[mode]);
    };

    host.querySelectorAll('[data-m]').forEach((b) => b.addEventListener('click', () => {
      host.querySelectorAll('[data-m]').forEach((x) => x.classList.remove('on'));
      b.classList.add('on'); mode = b.dataset.m; mount();
    }));
    mount();
  })();

  /* ---------------- ch8: compliance accordions ---------------- */
  (function compliance() {
    const host = $('[data-w="compliance"]');
    if (!host) return;
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Five families</span>
      <span class="hint">filter by where you sell</span></div>
      <div class="filters">
        <button class="filter on" data-c="all">All</button>
        <button class="filter" data-c="in">India</button>
        <button class="filter" data-c="eu">EU</button>
        <button class="filter" data-c="us">US</button>
      </div>
      <div id="famList"></div>`;
    const list = $('#famList');
    const render = (c = 'all') => {
      list.innerHTML = window.FAMILIES
        .filter((f) => c === 'all' || f.countries.includes(c))
        .map((f) => `<div class="acc" data-id="${f.id}">
          <div class="acc-head"><h4>${f.title}</h4><span class="badge ${f.badge}">${f.who}</span></div>
          <div class="acc-body"><p style="margin:0 0 6px;font-style:italic;color:var(--ink)">${f.slogan}</p>${f.body}</div></div>`)
        .join('');
      list.querySelectorAll('.acc-head').forEach((h) => h.addEventListener('click', () => h.parentElement.classList.toggle('open')));
    };
    render();
    host.querySelectorAll('.filter').forEach((b) => b.addEventListener('click', () => {
      host.querySelectorAll('.filter').forEach((x) => x.classList.remove('on'));
      b.classList.add('on'); render(b.dataset.c);
    }));
  })();

  /* ---------------- ch9: three situations ---------------- */
  (function situations() {
    const host = $('[data-w="situations"]');
    if (!host) return;
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Which situation is this customer in?</span>
      <span class="hint">← → to switch</span></div>
      <div class="tabset">
        ${Object.entries(window.SITUATIONS).map(([k, s], i) => `<button class="btn ${i === 0 ? 'on' : ''}" data-s="${k}">${k} · ${s.label}</button>`).join('')}
      </div>
      <div class="diagram" id="diag"></div>`;
    let cur = 'A';
    const draw = (k) => {
      cur = k;
      const s = window.SITUATIONS[k];
      $('#diag').innerHTML = `
        <div class="flow">${s.nodes.map(([t, sub], i) => `${i ? '<div class="arrow">→</div>' : ''}
          <div class="node ${i === 1 ? 'ev' : ''}">${t}<small>${sub}</small></div>`).join('')}</div>
        <p class="link-note"><b>${s.where}</b> — ${s.desc}</p>`;
      host.querySelectorAll('[data-s]').forEach((b) => b.classList.toggle('on', b.dataset.s === k));
    };
    draw('A');
    host.querySelectorAll('[data-s]').forEach((b) => b.addEventListener('click', () => draw(b.dataset.s)));
    host.tabIndex = 0;
    host.addEventListener('keydown', (e) => {
      const ks = Object.keys(window.SITUATIONS);
      if (e.key === 'ArrowRight') draw(ks[(ks.indexOf(cur) + 1) % ks.length]);
      if (e.key === 'ArrowLeft') draw(ks[(ks.indexOf(cur) + 3) % ks.length]);
    });
  })();

  /* ---------------- ch10: cheats + quiz ---------------- */
  $('#cheats').innerHTML = window.CHEATS.map((c, i) => `<div class="cheat"><b>${String(i + 1).padStart(2, '0')}</b>${c}</div>`).join('');

  (function quiz() {
    const host = $('[data-w="quiz"]');
    if (!host) return;
    host.innerHTML = `<div class="widget-top"><span class="widget-title">Ten questions</span>
      <span class="hint" id="qScore">0 answered</span></div><div class="quiz" id="qList"></div>`;
    let answered = 0, right = 0;
    $('#qList').innerHTML = window.QUIZ.map((q, qi) => `<div class="q" data-q="${qi}">
      <p>${qi + 1}. ${q.q}</p>
      <div class="opts">${q.opts.map((o) => `<button class="opt" data-o="${o.replace(/"/g, '&quot;')}">${o}</button>`).join('')}</div>
    </div>`).join('');
    $('#qList').querySelectorAll('.opt').forEach((b) => b.addEventListener('click', () => {
      const card = b.closest('.q');
      if (card.dataset.done) return;
      card.dataset.done = '1';
      const q = window.QUIZ[+card.dataset.q];
      const correct = b.dataset.o === q.a;
      b.classList.add(correct ? 'right' : 'wrong');
      if (!correct) {
        [...card.querySelectorAll('.opt')].find((o) => o.dataset.o === q.a).classList.add('right');
      }
      answered++; if (correct) right++;
      $('#qScore').textContent = `${right}/${answered} correct`;
    }));
  })();

  document.documentElement.dataset.ready = '1';
})();
