/* Content for the field guide.
 * Facts are taken only from the supplied brief (researched November 2026).
 * Hedges are preserved where the brief hedges: "release candidate", "still being
 * finalised", "needs confirming", "still to confirm".
 */
window.CH = [

/* ------------------------------------------------------------------ 1 */
{
  id: "big-picture", n: "01", title: "The big picture — five jobs",
  html: `
  <p class="lede">Every surveillance system, from a ₹5,000 home kit to a city control room, does the
  same five jobs. Products differ only in which box does which job, and how well.</p>

  <div class="everyday"><b>Everyday comparison</b>
  <span>A TV news station. Cameras film, cables carry the signal, a recorder tapes it, a library keeps
  the tapes, and people watch, search and send clips onward.</span></div>

  <figure class="figure" data-svg="system" data-cap="The whole system in one picture. Five jobs, one frame of video: light becomes data at the camera, crosses the network, lands on disks inside the recorder, and is served back to an operator. EdgeVision is the middle box — plus the AI it adds."></figure>

  <div class="widget" data-w="pipeline"></div>

  <h3>The five jobs</h3>
  <ol>
    <li><strong>Capture.</strong> Cameras turn light into video.</li>
    <li><strong>Transport.</strong> The network carries video.</li>
    <li><strong>Record.</strong> A recorder writes video to files.</li>
    <li><strong>Retain.</strong> Storage keeps the files safe for the required time.</li>
    <li><strong>Operate.</strong> People watch live, search, play back, export and share.</li>
  </ol>

  <p>EdgeVision does jobs 3, 4 and 5, plus a sixth that most recorders don't: <strong>understanding
  the video with AI</strong>.</p>

  <h3>Why storage matters</h3>
  <p>Customers judge a recorder mostly on job 4. They ask four questions:</p>
  <ul>
    <li>Did it record everything?</li>
    <li>Can I find it?</li>
    <li>Can I prove it wasn't altered?</li>
    <li>What happened when a disk died?</li>
  </ul>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>Our product is a recorder, a store and an operator console in one box — and the AI is the part
    customers can't get from a normal NVR. Every claim about EdgeVision is ultimately a claim about one
    of these five jobs.</p>
  </div>`
},

/* ------------------------------------------------------------------ 2 */
{
  id: "words", n: "02", title: "The words you'll hear",
  html: `
  <p class="lede">Fourteen terms carry most of the conversations in this field. Learn these and vendor
  documentation stops reading like a foreign language.</p>
  <div class="widget" data-w="glossary"></div>
  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>Notice how many of these words describe <em>failure</em> — segment, index, RAID, failover, chain
    of custody. Surveillance vocabulary is mostly a vocabulary for things going wrong.</p>
  </div>`
},

/* ------------------------------------------------------------------ 3 */
{
  id: "three-kinds", n: "03", title: "The three kinds of systems customers already own",
  html: `
  <p class="lede">A customer rarely starts from nothing. EdgeVision must slot in next to what they have,
  not ask them to throw it away.</p>

  <div class="widget" data-w="sites"></div>

  <h3>A. All-in-one NVR box — shops, schools, offices</h3>
  <p>Cameras plug into one box with 1–8 disks inside. One vendor supplies recording, playback and the
  phone app. Storage is internal disks, sometimes RAID. Many NVRs can push clips to FTP or a NAS, and
  many can pull back camera SD-card footage after a network cut — that's called <strong>ANR</strong>.</p>

  <h3>B. Software VMS on servers — campuses, airports, cities</h3>
  <p>A management server holds settings and users. Several recording servers each record a group of
  cameras — Genetec calls them "Archivers". Operators use desktop clients in a control room. Storage is
  fast "live" storage, then scheduled archiving to cheaper disks or a network drive. Standby recording
  servers take over on failure: Milestone offers cold and hot standby, and Genetec also offers
  redundant archiving, where two servers record the same camera.</p>

  <h3>C. Cloud / VSaaS — retail chains, banks</h3>
  <p>A small on-site bridge sends video to the provider's cloud, and viewing happens in a browser. Some
  days are kept on site, the rest in the cloud, paid per camera per month.</p>

  <div class="callout">
    <div class="k">What this means for EdgeVision — the contrast worth memorising</div>
    <p>Milestone's documentation says that if a recording server's storage fails, live view continues but
    recording and archiving stop until the disk is restored. Their protection is a whole standby server.
    EdgeVision's Phase 1a fails over at the <strong>disk level inside one box</strong>. That is a selling
    point for small sites where nobody buys a second server.</p>
  </div>`
},

/* ------------------------------------------------------------------ 4 */
{
  id: "protocols", n: "04", title: "Protocols — the agreed languages",
  html: `
  <p class="lede">A protocol is an agreed way of talking, like the standard format of a postal address.
  Products from different companies work together only when they speak the same protocol.</p>

  <div class="table-wrap"><table>
    <thead><tr><th>Protocol</th><th>Everyday comparison</th><th>What it carries</th><th>EdgeVision today</th></tr></thead>
    <tbody>
      <tr><td>RTSP / RTP</td><td>A water pipe: RTSP is the tap (play, pause), RTP is the water</td>
        <td>The live video stream itself</td><td><span class="pill yes">Yes</span><br><small>Pulls video from cameras and re-streams it</small></td></tr>
      <tr><td>HTTP / REST</td><td>Ordering from a website</td><td>Web pages and APIs, often with JSON</td>
        <td><span class="pill yes">Yes</span></td></tr>
      <tr><td>FTP / SFTP</td><td>A courier dropping files at a counter</td><td>Whole files — snapshots, clips — pushed to a server folder</td>
        <td><span class="pill no">No</span></td></tr>
      <tr><td>iSCSI</td><td>A disk in another room, cabled to you</td><td>A remote disk the server sees as its own</td>
        <td><span class="pill partly">Manual setup</span></td></tr>
      <tr><td>NTP / PTP</td><td>Everyone setting their watches from one clock</td>
        <td>Time sync. Clocks that disagree weaken evidence.</td>
        <td><span class="pill partly">Relies on the system clock</span></td></tr>
      <tr><td>SNMP / Syslog</td><td>A building's fire panel reporting to the guard desk</td>
        <td>Health and logs sent to the customer's IT monitoring tools</td><td><span class="pill no">No</span></td></tr>
      <tr><td>LDAP / SAML / OIDC</td><td>Using your office ID card everywhere</td>
        <td>Single sign-on with company accounts (Active Directory, Azure AD)</td>
        <td><span class="pill no">No — local users only</span></td></tr>
      <tr><td>WebRTC / HLS</td><td>Live TV versus on-demand TV in a browser</td>
        <td>Browser video: WebRTC for low-delay live view, HLS for playback</td><td><span class="pill yes">Yes</span></td></tr>
    </tbody>
  </table></div>

  <h3>RTSP versus ONVIF — the common confusion</h3>
  <p>They aren't alternatives.</p>
  <p><strong>RTSP carries the video.</strong> It's the cable bringing the channel into the TV.<br>
  <strong>ONVIF is the remote control and channel guide.</strong> It finds cameras, reads their details,
  changes settings and receives events. For live video, ONVIF only hands back the RTSP address; the video
  itself still travels over RTSP.</p>

  <figure class="figure" data-svg="control" data-cap="Two separate conversations. The dashed lines are ONVIF — asking who the camera is and what it can do. The solid line is RTSP, carrying the video. ONVIF's answer to &quot;what is your stream address&quot; is just an rtsp:// URL."></figure>

  <div class="widget" data-w="onvifFlow"></div>

  <p>Without ONVIF you must know every brand's RTSP address format by heart. Many cheap cameras support
  RTSP without ONVIF.</p>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>Our "Yes" rows are the ones customers already rely on: RTSP in, RTSP and WebRTC/HLS out. The "No"
    rows are integration requests waiting to happen — the first SFTP alert export and the first SNMP check
    will both arrive from a customer's IT team, not from a product manager.</p>
  </div>`
},

/* ------------------------------------------------------------------ 5 */
{
  id: "onvif", n: "05", title: "ONVIF and its profiles",
  html: `
  <p class="lede">ONVIF (Open Network Video Interface Forum) is an industry group founded in 2008 by Axis,
  Bosch and Sony. Before it existed, every camera brand had its own commands. ONVIF wrote one shared
  rulebook.</p>

  <p>The rulebook is huge, so ONVIF bundles it into <strong>profiles</strong>. A profile is a promise:
  "a product with Profile T supports exactly this list of features." Tenders name profiles — for example,
  "cameras must be ONVIF Profile T and G conformant."</p>

  <h3>Key ideas</h3>
  <ul>
    <li><strong>Two roles.</strong> Every ONVIF product is a <em>device</em> (it answers requests, like a
      camera) or a <em>client</em> (it sends requests, like a VMS). They're guaranteed to work together
      only when both support the same profile. EdgeVision is a client today. To feed a customer's VMS, it
      would also have to act as a device.</li>
    <li><strong>Mandatory and conditional features.</strong> A camera needn't support PTZ — but if it does,
      it must follow the profile's rules.</li>
    <li><strong>A product often supports several profiles.</strong> S + T + G + M is typical.</li>
  </ul>

  <figure class="figure" data-svg="profiles" data-cap="Profiles overlap in practice: a product usually supports several, and S + T + G + M is typical. That is why a tender names a combination rather than a single profile."></figure>

  <div class="widget" data-w="profiles"></div>

  <h3>Two more ONVIF documents</h3>
  <p><strong>Export File Format.</strong> A standard MP4-based format for exported clips that the receiver
  can verify as authentic. NIST recommended it as the FBI's minimum standard for exporting and sharing
  video.</p>
  <p><strong>Media Signing.</strong> The camera embeds a cryptographic signature in the video, so any later
  edit is detectable. Recorders and exports must keep the signature intact. The spec is still being
  finalised, and ONVIF publishes an open-source signing library.</p>

  <h3>"Conformant" versus "compatible"</h3>
  <p>A product may claim a profile only after its maker joins ONVIF (paid membership), passes ONVIF's test
  tool, and files a Declaration of Conformance. Customers check ONVIF's public list. Saying "ONVIF
  compatible" without this is a red flag in tenders.</p>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>T, G and M are the profiles that matter to us. S is being retired and V is on the way. The
    client-to-device gap is the single largest piece of standards work in front of the product: it is
    significant, but well-defined.</p>
  </div>`
},

/* ------------------------------------------------------------------ 6 */
{
  id: "ftp", n: "06", title: "FTP and its safer cousins",
  html: `
  <p class="lede">FTP (File Transfer Protocol, from 1971) moves whole files from one computer to a folder
  on another. In surveillance it's the old, reliable way for a camera or NVR to push a snapshot or short
  clip to a server when something happens.</p>

  <p>Many customers still run an FTP server that receives licence-plate photos or alarm snapshots, and
  their other software reads that folder. Plain FTP sends the password and the files unencrypted, so
  anyone on the network can read both.</p>

  <div class="widget" data-w="ftp"></div>

  <div class="table-wrap"><table>
    <thead><tr><th>Option</th><th>What it is</th><th>Security</th><th>Typical use</th></tr></thead>
    <tbody>
      <tr><td>FTP (port 21)</td><td>The original</td><td>Plain-text passwords; video visible on the wire</td>
        <td>Old NVRs and cameras, closed LANs</td></tr>
      <tr><td>SFTP (port 22)</td><td>File transfer over SSH: a different protocol with a similar name</td>
        <td><span class="pill yes">Encrypted</span> One simple port</td>
        <td>Linux servers, modern integrations. <strong>The best default</strong></td></tr>
    </tbody>
  </table></div>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>Relevant as a cheap integration — "send every alert snapshot or clip to the customer's SFTP folder"
    — and as a simple archive-copy target. It is <strong>not a recording method</strong>, because you can't
    stream live video over FTP. Offer SFTP by default, and plain FTP only behind a clear "insecure" warning.</p>
  </div>`
},

/* ------------------------------------------------------------------ 7 */
{
  id: "storage", n: "07", title: "How serious products store video",
  html: `
  <p class="lede">Video is stored in layers — "tiers". Each tier is slower and cheaper than the one above,
  and keeps video longer.</p>

  <figure class="figure" data-svg="segments" data-cap="Why recorders cut video into short files, and why the index matters as much as the footage. One corrupt segment costs two seconds. A lost index costs everything, without losing a single byte."></figure>

  <div class="widget" data-w="ladder"></div>

  <h3>Three different protections</h3>
  <p>Big VMSs combine all three. Phase 1a provides the first.</p>
  <ul>
    <li><strong>Failover:</strong> the primary disk fails, recording switches to the standby automatically,
      and a few seconds are held in memory during the switch.</li>
    <li><strong>Redundant recording:</strong> every frame is written to two places all the time, so a
      failure leaves no gap — but storage cost doubles.</li>
    <li><strong>Backfill:</strong> the camera keeps recording to its SD card during an outage, and the
      recorder copies the gap back afterwards.</li>
  </ul>

  <div class="widget" data-w="sim"></div>

  <h3>Checklist that serious products cover</h3>
  <div class="table-wrap"><table>
    <thead><tr><th>Item</th><th>Meaning</th><th>EdgeVision status</th></tr></thead>
    <tbody>
      <tr><td>Time-based retention</td><td>"Keep 30 days, then delete", per camera, even when the disk isn't
        full. Privacy law favours deleting on time.</td><td><span class="pill yes">Yes</span> per-camera days</td></tr>
      <tr><td>Legal hold / evidence lock</td><td>Mark a clip "do not delete" because of an incident</td>
        <td><span class="pill partly">Partly</span> export cases only</td></tr>
      <tr><td>Integrity proof</td><td>A fingerprint (hash) of every file, so anyone can check nothing changed</td>
        <td><span class="pill phase">Phase 1a</span> SHA-256 per segment</td></tr>
      <tr><td>Signed exports</td><td>The exported clip carries its hash or signature, plus who exported it and when</td>
        <td><span class="pill no">Not yet</span></td></tr>
      <tr><td>Encryption</td><td>In transit (HTTPS, SRTP, SFTP) stops eavesdroppers; at rest (encrypted disks)
        makes a stolen disk useless</td><td><span class="pill partly">In transit only</span></td></tr>
      <tr><td>Audit trail</td><td>Who watched, exported or deleted which video, and when</td>
        <td><span class="pill yes">Exists</span></td></tr>
      <tr><td>Index backup</td><td>Copy the catalogue regularly — without it the video can't be found</td>
        <td><span class="pill phase">Phase 1a</span> daily backup</td></tr>
      <tr><td>Health monitoring</td><td>Disk S.M.A.R.T., free space, time until full, alarms to the customer's
        IT tools</td><td><span class="pill partly">In-app only</span></td></tr>
    </tbody>
  </table></div>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>Phase 1a covers local disks plus a standby disk, a SHA-256 fingerprint per segment, a daily index
    backup and an audit log. Archive tiers, backfill and cloud storage are the next three rungs on the
    ladder — and each one is a customer conversation before it is an engineering task.</p>
  </div>`
},

/* ------------------------------------------------------------------ 8 */
{
  id: "compliance", n: "08", title: "Rules and compliance, in five families",
  html: `
  <p class="lede">"Compliance" means following rules someone else wrote. Some apply to the customer — how
  long they keep footage — and our job is to make following them easy. Others apply to the product itself,
  such as security testing, and decide whether we can sell at all.</p>

  <div class="legal"><span>⚖</span><span><b>Orientation, not legal advice.</b> Which rules apply depends on
  the customer's country and industry. The certification team or a lawyer should confirm before we promise
  compliance.</span></div>

  <figure class="figure" data-svg="compliance" data-cap="Which family bites where. Filled dots mean the rules apply in that region; hollow dots mean they do not. Device security and video standards follow the product; privacy, sector rules and evidence law follow the customer's country."></figure>

  <div class="widget" data-w="compliance"></div>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>Two of these families are Indian, current, and directly affect what we can sell and how useful our
    exports are in court: <strong>MeitY/STQC</strong> on the device side, and <strong>BSA §63(4)</strong> on
    the evidence side. Both are still being confirmed with the certification team.</p>
  </div>`
},

/* ------------------------------------------------------------------ 9 */
{
  id: "fit", n: "09", title: "Where EdgeVision fits — three situations",
  html: `
  <p class="lede">Every deployment conversation starts by working out which of these three situations the
  customer is in. The product is the same; the interfaces and the storage story are not.</p>

  <div class="widget" data-w="situations"></div>

  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>In A we are the recorder, so storage features are the whole story. In B we are a contributor, and the
    customer's VMS and storage rules win — that is the case the manager raised. In C we are one of many
    sites reporting upward, and the interfaces are about reporting rather than recording.</p>
  </div>`
},

/* ------------------------------------------------------------------ 10 */
{
  id: "cheat", n: "10", title: "Cheat sheet — ten things to say in a review",
  html: `
  <p class="lede">The whole guide, compressed into ten sentences you can say out loud in a design review.</p>
  <div class="cheats" id="cheats"></div>
  <h3>Check yourself</h3>
  <p>Ten questions, all answerable from this guide alone.</p>
  <div class="widget" data-w="quiz"></div>
  <div class="callout">
    <div class="k">What this means for EdgeVision</div>
    <p>The companion architecture plan maps every standard here to a concrete feature, its status and its
    phase. If you can say these ten things, you can read that plan.</p>
  </div>`
}

];

/* ---------------- widget data ---------------- */
window.TERMS = [
  ["IP camera", "A camera that is a small computer on the network. It has an address, a web page and a password, and sends video as data."],
  ["DVR / NVR", "A recorder box. A DVR takes old analog cameras over coax cable. An NVR (Network Video Recorder) takes IP cameras over the network."],
  ["VMS", "Video Management Software. It runs on ordinary servers and manages hundreds or thousands of cameras. Examples: Milestone XProtect, Genetec Security Center, Avigilon, Nx Witness."],
  ["Edge", "\"At the camera end\" rather than in a data centre. An SD card in a camera is edge storage. EdgeVision is an edge AI box."],
  ["Codec", "The \"zip format\" for video. H.264 is common. H.265 makes files about half the size for the same picture."],
  ["Main / sub stream", "Cameras send two copies: a sharp main stream for recording and a small sub stream for AI and thumbnail grids."],
  ["Segment", "Recorders cut video into short files, so one bad file loses seconds, not hours. EdgeVision uses 2-second MP4 files."],
  ["Index", "The catalogue that maps \"camera 3 at 10:42\" to a file on disk. If you lose it, the video still exists but can't be found."],
  ["Retention", "How long footage is kept before it's overwritten, e.g. \"30 days\". It's usually set by a rule or contract, not by disk size."],
  ["RAID", "Several disks acting as one, so one or two can die without data loss. RAID 5 survives 1 dead disk; RAID 6 survives 2."],
  ["NAS / SAN", "Storage on the network. A NAS is a shared folder. A SAN or iSCSI target is a remote disk that looks local."],
  ["Failover", "When the main part breaks, a standby takes over automatically."],
  ["Chain of custody", "A record of who handled a piece of evidence and when, so a court can trust it wasn't changed. For video: hashes, signatures and audit logs."],
  ["VSaaS", "\"Video Surveillance as a Service\": cloud-hosted recording and viewing for a monthly fee."],
];

window.PROFILES = [
  { k: "S", name: "Streaming (original)", when: "2011 · being retired", filters: ["retired"],
    what: "Basic live video and audio, PTZ, relay outputs.",
    note: "In October 2025 ONVIF announced the end of Profile S support — its login methods no longer meet current security advice — and recommends Profile T. Keep supporting S cameras; build nothing new on it.", retired: true },
  { k: "T", name: "Streaming (current)", when: "Current", filters: ["high"],
    what: "The profile ONVIF recommends in place of S. Tenders name it alongside G: \"cameras must be ONVIF Profile T and G conformant.\"",
    note: "Matters to EdgeVision: T is the streaming profile referenced in our own AI-overlay video path." },
  { k: "G", name: "Recording & storage", when: "2014 · current", filters: ["storage", "high"],
    what: "Configure, search and replay recordings on a camera SD card or recorder.",
    note: "Two uses for us: as a client, pull camera SD-card footage to fill gaps after an outage (backfill); as a device, let a VMS search and play EdgeVision's recordings." },
  { k: "M", name: "Metadata & events", when: "Current", filters: ["ai", "high"],
    what: "Carries analytics metadata and events between products.",
    note: "The profile behind sending AI events into a customer's VMS, alongside MQTT and webhooks." },
  { k: "V", name: "Cloud video (VSaaS)", when: "Release candidate · July 2026", filters: ["cloud"],
    what: "Cameras and recorders connecting to cloud services without vendor lock-in; requires OAuth 2.0 and encryption of recordings sent to the cloud.",
    note: "Watch it. Design any \"cloud storage\" offering toward it." },
  { k: "Q", name: "Quick install", when: "Deprecated 2022", filters: ["retired"],
    what: "Out-of-box setup.",
    note: "Ignore.", retired: true },
];

window.SITES = {
  A: { title: "All-in-one NVR box", where: "shops · schools · offices",
    detail: "Cameras plug into one box with <b>1–8 disks</b> inside. One vendor supplies recording, playback and the phone app. Internal disks, sometimes RAID. Many NVRs push clips to FTP or a NAS, and many pull back camera SD-card footage after a network cut (<b>ANR</b>)." },
  B: { title: "Software VMS on servers", where: "campuses · airports · cities",
    detail: "A management server holds settings and users; several recording servers each record a group of cameras — Genetec calls them <b>Archivers</b>. Operators use desktop clients. Fast live storage, then scheduled archiving to cheaper disks. Standby servers take over on failure: Milestone offers cold and hot standby; Genetec offers redundant archiving, two servers recording the same camera." },
  C: { title: "Cloud / VSaaS", where: "retail chains · banks",
    detail: "A small on-site bridge sends video to the provider's cloud and viewing happens in a browser. Some days kept on site, the rest in the cloud, <b>paid per camera per month</b>." },
};

window.FAMILIES = [
  { id: "privacy", title: "Privacy law", who: "Customer", badge: "cust",
    slogan: "You are filming people. Treat it as their personal data.",
    body: `<p><strong>India:</strong> DPDP Act 2023 plus DPDP Rules 2025. The Rules were notified in November 2025 and take effect in phases up to May 2027. They require that personal data is deleted once its purpose is served (unless a law requires keeping it), that security safeguards are in place, and that breaches are reported.</p>
      <p><strong>EU / UK:</strong> GDPR. The same ideas, stricter, with large fines. People may ask for a copy of footage of themselves, and other faces must be blurred first.</p>
      <p><strong>What it asks of our product:</strong></p>
      <ul><li>Per-camera retention that deletes on time</li><li>Privacy masks</li><li>Role-based access</li>
      <li>An audit log of who viewed or exported what</li><li>Blurring other people in exports</li>
      <li>The ability to find and delete one person's data</li></ul>`,
    countries: ["in", "eu"] },
  { id: "device", title: "Device cybersecurity", who: "Vendor", badge: "us",
    slogan: "Your box must not be the hole hackers walk through.",
    body: `<p><strong>India:</strong> MeitY "Essential Requirements" for CCTV security (ER-01), notified April 2024 and enforced from April 2025. CCTV products need STQC security testing on top of BIS registration (IS 13252, safety). <em>Still to confirm: whether an AI box that records counts as a CCTV product.</em></p>
      <p><strong>Europe:</strong> ETSI EN 303 645 (IoT security baseline, already passed by major camera makers), EN 18031, and the coming Cyber Resilience Act.<br>
      <strong>Industrial sites:</strong> IEC 62443.<br>
      <strong>US government work:</strong> NDAA §889, which bans certain Chinese-made components.</p>
      <p><strong>What it asks of our product:</strong></p>
      <ul><li>No default passwords</li><li>Encrypted connections</li><li>Signed software updates</li>
      <li>A way to report vulnerabilities</li><li>Secure storage of secrets</li><li>A list of shipped components (SBOM)</li></ul>`,
    countries: ["in", "eu", "us"] },
  { id: "standards", title: "Video-system standards", who: "Industry", badge: "ind",
    slogan: "How a proper surveillance system should be built.",
    body: `<p><strong>IEC 62676 series:</strong></p>
      <ul><li>Part 1-1 — system requirements, including retention and secure storage</li>
      <li>Part 2-32 — recording control and replay, closely tied to ONVIF Profile G</li>
      <li>Part 4 (2025 edition) — application guidelines on storage, time/date/camera-ID stamps, encryption and export formats</li></ul>
      <p><strong>ONVIF profiles</strong> — what tenders actually name.</p>
      <p><strong>What it asks of our product:</strong></p>
      <ul><li>Declare how we store and modify video</li><li>Correct timestamps and camera IDs on every recording</li>
      <li>A defined export format</li><li>Documented behaviour when storage fails</li></ul>`,
    countries: ["global"] },
  { id: "sector", title: "Industry-specific rules", who: "Customer", badge: "cust",
    slogan: "Your sector's regulator sets a number of days.",
    body: `<p><strong>Card payments, PCI DSS v4 (requirement 9.2.1.1):</strong> camera or access records of sensitive areas kept for at least three months. Vendors round this to "90 days".</p>
      <p><strong>Banks in India:</strong> RBI has ordered banks to preserve specific footage "until further orders" — for example from the 2016 demonetisation period. Banks also write their own retention policies into tenders.</p>
      <p><strong>Others:</strong> hospitals (HIPAA in the US), casinos, airports and police all have their own rules.</p>
      <p><strong>What it asks of our product:</strong></p>
      <ul><li>A guaranteed minimum retention, with an early warning if the disk can't hold it</li>
      <li>"Preserve this period indefinitely"</li><li>Reports proving footage was kept</li></ul>`,
    countries: ["us", "in"] },
  { id: "evidence", title: "Evidence law", who: "Customer", badge: "cust",
    slogan: "Can this clip be used in court?",
    body: `<p><strong>India:</strong> Bharatiya Sakshya Adhiniyam (BSA) 2023, Section 63(4). Electronic evidence such as CCTV footage needs a certificate that includes its hash value (e.g. SHA-256) and the hash function used, plus an expert's certification. The Supreme Court upheld this requirement in 2026.</p>
      <p><strong>US:</strong> NIST recommended the ONVIF Export File Format for sharing video with the FBI.</p>
      <p><strong>What it asks of our product:</strong></p>
      <ul><li>A hash for every file — Phase 1a stores SHA-256 per segment</li>
      <li>Exports that include hashes and a certificate-ready report</li>
      <li>Accurate clock sync</li><li>An untouched audit trail</li></ul>`,
    countries: ["in", "us"] },
];

window.SITUATIONS = {
  A: { label: "We are the recorder", where: "shops · schools · warehouses · small factories",
    desc: "EdgeVision replaces the NVR, so its storage features are the whole story.",
    nodes: [["Cameras", "capture"], ["EdgeVision", "record + AI"], ["Local disks", "primary store"], ["NAS / S3", "optional"]] },
  B: { label: "They already have a VMS", where: "campuses · hospitals · airports · cities",
    desc: "The customer has a VMS workflow, and EdgeVision must fit into it rather than replace it. Cameras feed both the customer's VMS and EdgeVision.",
    nodes: [["Cameras", "both systems"], ["EdgeVision", "AI events"], ["VMS", "Profile M · T · SFTP"], ["Customer storage", "their rules win"]] },
  C: { label: "Many sites, central storage", where: "bank branches · retail chains",
    desc: "Each site records locally through internet outages. Clips, archives and health reports go to a head office or cloud.",
    nodes: [["Site EdgeVision", "local recording"], ["Central archive", "S3 · SFTP"], ["Health", "SNMP · syslog"], ["Head office", "reviews"]] },
};

window.CHEATS = [
  "Customers already own an NVR, a VMS or a cloud service. EdgeVision must work as their recorder (A), feed their VMS (B), or report to their centre (C) — each needs different interfaces.",
  "ONVIF is the industry's common language. Profiles are feature promises that tenders name. T, G and M matter to us; S is being retired; V is on the way.",
  "Today EdgeVision is only an ONVIF client (discovery and PTZ). Feeding a customer's VMS means also acting as an ONVIF device: significant but well-defined work.",
  "Profile G is the storage profile. It lets other systems search and replay recordings, and lets us pull camera SD-card footage to fill gaps (backfill).",
  "FTP is a file-drop integration, not a recording method. Offer SFTP; plain FTP leaks passwords.",
  "Good storage is layered: edge card → local disks → standby disk → archive → cloud. Phase 1a covers local plus standby. Archive, backfill and cloud come next.",
  "Compliance comes in five families: privacy (DPDP, GDPR), device security (MeitY ER-01 and STQC, EN 303 645, IEC 62443), video standards (IEC 62676), sector rules (PCI DSS, bank policies) and evidence law (BSA §63).",
  "Two of those — MeitY/STQC and BSA §63 hashes — are Indian, current, and directly affect what we can sell and how useful our exports are in court.",
  "Phase 1a already helps: a SHA-256 fingerprint for every segment, an audit log, daily index backups, and alarms when storage fails.",
  "The companion architecture plan maps every standard to a concrete feature, its status and its phase.",
];

window.QUIZ = [
  { q: "Which ONVIF profile covers recording and storage?", a: "Profile G", opts: ["Profile S", "Profile G", "Profile Q", "Profile V"] },
  { q: "What does ONVIF do, compared with RTSP?", a: "It finds cameras and controls them; RTSP carries the video", opts: ["It carries the video; RTSP controls it", "It finds cameras and controls them; RTSP carries the video", "Both carry video, ONVIF is just newer", "They are the same thing with different names"] },
  { q: "Plain FTP uses which port?", a: "21", opts: ["21", "22", "80", "443"] },
  { q: "RAID 5 survives how many dead disks?", a: "1", opts: ["0", "1", "2", "All of them"] },
  { q: "How long is an EdgeVision segment?", a: "2-second MP4", opts: ["2-second MP4", "1-minute MP4", "10-second MKV", "One file per hour"] },
  { q: "Which profile did ONVIF announce it would end support for in October 2025?", a: "Profile S", opts: ["Profile S", "Profile T", "Profile M", "Profile G"] },
  { q: "Under PCI DSS v4, records of sensitive areas must be kept for at least…", a: "Three months", opts: ["Seven days", "One month", "Three months", "Two years"] },
  { q: "BSA Section 63(4) requires an electronic-evidence certificate that includes…", a: "The hash value and the hash function used", opts: ["The camera model and firmware", "The hash value and the hash function used", "A screenshot of the playback", "The operator's phone number"] },
  { q: "What is ANR / backfill?", a: "Pulling the missing minutes from a camera's SD card after an outage", opts: ["Automatic night recording", "Pulling the missing minutes from a camera's SD card after an outage", "A backup NVR in the cloud", "Re-encoding video at a lower bitrate"] },
  { q: "What role does EdgeVision play in ONVIF today?", a: "Client only", opts: ["Device only", "Client only", "Both client and device", "Neither"] },
];
