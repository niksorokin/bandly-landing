document.documentElement.classList.add('js');
const key = document.body.dataset.theme;
const directions = {
  revolut: {
    name: 'Revolut editorial', image: 'revolut-sky', badge: 'A calm operating picture',
    hero: 'Know what your books need — without living in them.',
    lede: 'Bandly is an AI-native accounting firm for Dubai businesses. Send the records you already have; get a clear working state, one precise request when something is missing, and professional review before important work goes out.',
    tension: 'The work is not invisible. It is simply scattered.',
    statement: 'A buyer should be able to see the path from <em>documents</em> to a <em>reviewed outcome</em> without learning a new dashboard.',
    scope: 'The accounting work, made readable.',
    scopeBody: 'Bandly gathers records from the channels your business already uses, prepares the work into an understandable state, and keeps the next decision visible. The exact service scope is confirmed for each business before work begins.',
    review: 'Automation handles repetition. A professional owns the boundary.',
    intake: 'Start with the records and routines you already have.',
    intakeBody: 'A first conversation should begin with your current setup, not a generic sales calendar. This prototype demonstrates the opening question only.'
  },
  cal: {
    name: 'Cal utility', image: 'cal-grid', badge: 'A useful first step',
    hero: 'A clearer starting point for the books.',
    lede: 'Bandly is an AI-native accounting firm in Dubai. It turns the records you already have into a working state, asks exactly for what is missing, and routes important outputs through professional review.',
    tension: 'Accounting becomes difficult when nobody can name the next useful action.',
    statement: 'The page should work like a practical intake: <em>what you have</em>, <em>what needs attention</em>, and <em>what happens next</em>.',
    scope: 'A service model, not a mystery process.',
    scopeBody: 'The point is not to make a buyer inspect an internal system. The point is to make the service boundary legible: records come in, preparation happens, gaps are named precisely, and important work is reviewed.',
    review: 'A clean handoff beats a decorative dashboard.',
    intake: 'Choose the question that matches your situation.',
    intakeBody: 'The next version can route each choice to a short, real intake. Nothing is submitted from this concept preview.'
  },
  augen: {
    name: 'Augen clinical', image: 'augen-loop', badge: 'The review loop',
    hero: 'A clear state. A visible boundary.',
    lede: 'Bandly is an AI-native accounting firm for Dubai businesses. It gathers and prepares the records you already use, identifies missing facts without guessing, and keeps professional review visible where it matters.',
    tension: 'The promise is not “AI does everything.” The promise is a calmer, accountable system.',
    statement: 'The visual focus is the <em>review loop</em>: the work can move quickly, while judgement remains deliberately human.',
    scope: 'A quieter service surface.',
    scopeBody: 'This direction uses spare language and physical visual form rather than fake software UI. It makes the distinction between assistance and accountability feel like part of the system, not a disclaimer.',
    review: 'Human judgement is not a handoff you hide.',
    intake: 'Begin with a single, specific question.',
    intakeBody: 'A real intake should reveal only the next relevant question and explain what will happen with the answer. This preview sends nothing.'
  },
  refero: {
    name: 'Refero editorial', image: 'refero-paper', badge: 'A readable firm',
    hero: 'The books should not feel like a mystery.',
    lede: 'Bandly is an AI-native accounting firm in Dubai. Records arrive through the channels you already use; automation prepares the work; people review important outputs before external action.',
    tension: 'There is a difference between receiving reports and understanding the state of the work.',
    statement: 'A firm can be modern without pretending to be a product. Make the real operating promise <em>large enough to read.</em>',
    scope: 'A stronger editorial point of view.',
    scopeBody: 'This direction turns the landing page into a sequence of conviction: scattered records, one working picture, a precise request, then a human review boundary. The visual language does not need artificial metrics to carry authority.',
    review: 'The final call belongs to a person.',
    intake: 'Start before the calendar.',
    intakeBody: 'The first interaction should establish context: whether the buyer is clarifying a current setup, addressing a backlog, or considering ongoing support. This is a non-submitting prototype.'
  },
  family: {
    name: 'Family human', image: 'family-cutout', badge: 'From scattered to sorted',
    hero: 'The calmer way to keep the books moving.',
    lede: 'Bandly is an AI-native accounting firm for Dubai businesses. Send the records you have. Bandly organizes the working picture, asks one precise question when something is missing, and brings professional review to important work.',
    tension: 'The work is serious. The experience of getting it done does not have to feel hostile.',
    statement: 'This direction turns the service into an easy-to-follow story: <em>send it</em>, <em>see it</em>, <em>resolve it</em>, <em>review it</em>.',
    scope: 'A service people can follow.',
    scopeBody: 'The design uses warmth as reassurance, not as a substitute for control. The underlying message stays precise: nothing missing is guessed, and important external action is reviewed by a professional.',
    review: 'Friendly does not mean casual about judgement.',
    intake: 'One question at a time.',
    intakeBody: 'A contextual first step reduces the pressure of an immediate sales booking. This concept lets the visitor state an intention without transmitting data.'
  }
};
const d = directions[key] || directions.revolut;
document.title = `Bandly — ${d.name} direction`;
const app = document.querySelector('#app');
app.innerHTML = `
  ${key === 'revolut' ? '<div class="promo">A prototype of a clearer, calmer first accounting conversation.</div>' : ''}
  <a class="skip" href="#main">Skip to content</a>
  <div class="shell"><nav class="nav" aria-label="Primary navigation"><a class="brand" href="../"><span class="brand-mark" aria-hidden="true"><b></b><b></b><b></b><b></b></span>Bandly</a><div class="nav-links"><a href="#process">The model</a><a href="#review">Review boundary</a><a href="#questions">Questions</a></div><button class="cta" data-open>Start with a question</button></nav></div>
  <main id="main">
    <div class="shell"><section class="hero">
      <div class="hero-copy reveal"><div class="eyebrow">AI-native accounting firm · Dubai, UAE</div><h1>${d.hero}</h1><p class="lede">${d.lede}</p><div class="button-row"><button class="cta" data-open>Start with a question <span aria-hidden="true">↗</span></button><a class="cta cta--outline" href="#process">See how it works</a></div><p class="micro">Concept preview only. The CTA opens a non-submitting intake prototype.</p></div>
      <div class="hero-art reveal"><img src="../assets/${d.image}.png" alt="Concept artwork for a clearer accounting workflow"><span class="badge">${d.badge}</span></div>
    </section></div>

    <section class="section" id="process"><div class="shell"><div class="lead-grid reveal"><div><div class="eyebrow">The buyer problem</div><h2>${d.tension}</h2></div><div><p class="statement">${d.statement}</p><p class="lede">The story is intentionally operational, not technological theatre. It shows what a client can provide, what becomes visible, and who stays responsible for important judgement.</p></div></div>
      <div class="stage-list" aria-label="The Bandly operating cycle">
        <article class="stage reveal"><span class="stage-num">01</span><h3>Bring the records you already have</h3><p>Email, WhatsApp and shared folders can be practical starting points. The landing page should remove the fear of a system migration.</p></article>
        <article class="stage reveal"><span class="stage-num">02</span><h3>Build one working picture</h3><p>Automation gathers, sorts and prepares the material so the active state is visible rather than buried across threads and files.</p></article>
        <article class="stage reveal"><span class="stage-num">03</span><h3>Ask precisely when a fact is missing</h3><p>A gap becomes one useful request for the record or detail that is needed. It is not guessed, invented or turned into a reminder chain.</p></article>
        <article class="stage reveal"><span class="stage-num">04</span><h3>Put important work through review</h3><p>Professional judgement remains visible before important outputs move to external action. This is the service boundary that earns trust.</p></article>
      </div>
    </div></section>

    <section class="section"><div class="shell"><div class="scope reveal"><div class="scope-copy"><div class="eyebrow">What the firm is doing</div><h3>${d.scope}</h3><p>${d.scopeBody}</p><p class="micro">Exact scopes, pricing, client proof and any compliance claims remain launch dependencies until verified.</p></div><figure class="scope-image"><img src="../assets/${d.image}.png" alt="Abstract accounting workflow concept artwork"></figure></div></div></section>

    <section class="review" id="review"><div class="shell review-grid"><div class="reveal"><div class="eyebrow">The accountability boundary</div><h2>${d.review}</h2><p class="lede">Automation can remove repetitive collection and preparation work. It does not turn a service firm into an unaccountable black box. Important work stops at a professional review boundary before it goes out.</p></div><div class="review-loop reveal" aria-label="A visual loop from records to review"><span class="review-node one">records prepared</span><span class="review-node two">professional review</span><span class="review-node three">precise request</span><div class="review-core">working<br>state<small>visible · accountable</small></div></div></div></section>

    <section class="intake"><div class="shell intake-grid"><div class="reveal"><div class="eyebrow">A better first CTA</div><h2>${d.intake}</h2><p class="lede">${d.intakeBody}</p></div><div class="intake-card reveal"><h3>What would you like to make clearer?</h3><button class="choice" data-choice="Clarify my current setup" aria-pressed="false"><b>→</b><span>My current setup<small>I want to understand what I have and what needs attention.</small></span></button><button class="choice" data-choice="Address a backlog" aria-pressed="false"><b>→</b><span>A backlog of records<small>I need a safe, practical place to start.</small></span></button><button class="choice" data-choice="Consider ongoing support" aria-pressed="false"><b>→</b><span>Ongoing support<small>I want to understand what a continuing service could cover.</small></span></button><div class="result" aria-live="polite">Nothing is submitted in this preview.</div></div></div></section>

    <section class="section" id="questions"><div class="shell"><div class="lead-grid reveal"><div><div class="eyebrow">Fair questions</div><h2>Short answers. Clear boundaries.</h2></div><p class="lede">The FAQ answers the service-vs-software question directly and does not rely on unverified metrics, testimonials or compliance badges.</p></div><div class="faq reveal"><details><summary>Is Bandly software or an accounting firm?</summary><p>Bandly is an accounting firm. Automation helps gather, sort and prepare the work; professionals remain responsible for important review and judgement.</p></details><details><summary>Do I need to change how my business already works?</summary><p>No new system is implied by this starting point. Documents and records can begin from channels you already use, such as email, WhatsApp and shared folders.</p></details><details><summary>What happens if something is missing?</summary><p>The intended operating model is a precise request for the missing record or fact. Missing information is not guessed.</p></details><details><summary>What happens when I use the CTA?</summary><p>In this concept it opens an informational prototype only. A production intake destination and handling flow must be approved before launch.</p></details></div></div></section>
  </main>
  <footer class="footer shell"><span>Bandly concept direction · ${d.name}</span><span>Illustrations are synthetic concept artwork. No customer data, claims or bookings are transmitted.</span></footer>
  <dialog id="intake-dialog"><div class="dialog-inner"><div class="eyebrow">Prototype-only interaction</div><h3>Start with a question.</h3><p>This demonstrates the opening of a contextual intake. It is not connected to a booking flow and does not collect or transmit data.</p><button class="cta" data-close>Close</button></div></dialog>`;

const dialog = document.querySelector('#intake-dialog');
document.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => dialog.showModal()));
document.querySelector('[data-close]').addEventListener('click', () => dialog.close());
document.querySelectorAll('[data-choice]').forEach(el => el.addEventListener('click', () => {
  document.querySelectorAll('[data-choice]').forEach(x => x.setAttribute('aria-pressed','false'));
  el.setAttribute('aria-pressed','true');
  document.querySelector('.result').textContent = `${el.dataset.choice}: a real version would ask only the next relevant question. Nothing was sent.`;
}));
const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
