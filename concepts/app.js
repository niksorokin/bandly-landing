document.documentElement.classList.add('js');

const themes = {
  revolut: {
    title: 'Editorial calm',
    label: 'Revolut-inspired system',
    headline: 'See where your books stand.',
    lede: 'A Dubai accounting firm that turns documents you already have into a clear working state — then puts important work through professional review.',
    art: 'A clearer close',
    sub: 'documents → prepared → reviewed'
  },
  cal: {
    title: 'Utility first',
    label: 'Cal.com-inspired system',
    headline: 'Start with one simple accounting question.',
    lede: 'Tell Bandly how you work today. We map the next useful step, organize the records, and bring a professional in where judgement matters.',
    art: 'First step',
    sub: 'not a dashboard · a useful start'
  },
  augen: {
    title: 'Clinical confidence',
    label: 'Augen Pro-inspired system',
    headline: 'Accounting, made legible.',
    lede: 'Automation gathers and prepares the work. People remain accountable for the review. The client sees a calm, clear state instead of a chain of reminders.',
    art: 'The review loop',
    sub: 'capture · ask · review'
  },
  refero: {
    title: 'Editorial conviction',
    label: 'Refero-inspired system',
    headline: 'Your books should not be a mystery.',
    lede: 'Bandly is an AI-native accounting firm for Dubai businesses. Send the records you have; receive one understandable working picture and precise requests when something is missing.',
    art: 'A working picture',
    sub: 'shorter copy · stronger clarity'
  },
  family: {
    title: 'Human and memorable',
    label: 'Family-inspired system',
    headline: 'The calmer way to keep the books moving.',
    lede: 'Your documents come in from the channels you already use. Bandly turns the scattered work into one clear next step — with a person responsible for what matters.',
    art: 'From scattered to sorted',
    sub: 'one ask at a time'
  }
};

const key = document.body.dataset.theme;
const t = themes[key] || themes.revolut;
document.title = `Bandly concepts — ${t.title}`;

const navLinks = '<a href="#how">How it works</a><a href="#intake">First step</a><a href="#faq">Questions</a>';
document.querySelector('#app').innerHTML = `
  <a class="skip" href="#main">Skip to content</a>
  <div class="wrap"><nav class="nav" aria-label="Primary"><a href="../" class="mark"><i></i>Bandly</a><div class="nav-links">${navLinks}</div><button class="button button--primary" data-dialog>Start with a question</button></nav></div>
  <main id="main">
    <div class="wrap"><section class="hero">
      <div class="reveal"><div class="kicker">AI-native accounting firm · Dubai, UAE</div><h1>${t.headline}</h1><p class="lede">${t.lede}</p><div class="actions"><button class="button button--primary" data-dialog>Start with a question</button><a class="button button--quiet" href="#how">How Bandly works</a></div><small class="note">Concept preview — booking and data collection are not connected.</small></div>
      <div class="art reveal" aria-label="Illustration of the Bandly review cycle"><div class="orbit"></div><div class="core">${t.art}<small>${t.sub}</small></div><div class="signal one"><b></b>records received</div><div class="signal two"><b></b>review boundary</div><div class="signal three"><b></b>one precise ask</div></div>
    </section></div>

    <section class="section" id="how"><div class="wrap"><div class="section-intro reveal"><div><div class="kicker">${t.label}</div><h2>Clear enough to act on.</h2></div><p class="body">The buyer does not need a tour of internal operations. They need to know what Bandly is, what they send, what becomes visible, and where a person remains accountable.</p></div>
      <div class="cycle">
        <article class="step reveal"><span class="n">01</span><strong>Send what you have</strong><p>Email, WhatsApp and shared folders remain valid starting points.</p></article>
        <article class="step reveal"><span class="n">02</span><strong>See a working state</strong><p>Documents are gathered and prepared into one understandable picture.</p></article>
        <article class="step reveal"><span class="n">03</span><strong>Get one exact ask</strong><p>A missing fact becomes a precise request, not a vague reminder chain.</p></article>
        <article class="step reveal"><span class="n">04</span><strong>Reach review</strong><p>Important outputs stop at a professional boundary before external action.</p></article>
      </div>
    </div></section>

    <section class="section intake" id="intake"><div class="wrap intake-grid"><div class="reveal"><div class="kicker">A better conversion path</div><h2>Do not ask for a calendar before you have context.</h2><p class="body">The first CTA should start a lightweight intake. It can collect just enough context to decide whether a call is actually useful.</p></div>
      <div class="intake-card reveal"><h3>What do you need help with?</h3>
        <button class="choice" aria-pressed="false" data-choice="I want to understand my current accounting setup."><i>→</i><span>Understand my current setup<small>Start with the records and tools you already use.</small></span></button>
        <button class="choice" aria-pressed="false" data-choice="I need to get a backlog under control."><i>→</i><span>Get a backlog under control<small>Map the first safe way forward.</small></span></button>
        <button class="choice" aria-pressed="false" data-choice="I want ongoing bookkeeping support."><i>→</i><span>Plan ongoing support<small>Find out what the scope should include.</small></span></button>
        <div class="result" aria-live="polite">Nothing is sent in this concept.</div>
      </div>
    </div></section>

    <section class="section" id="faq"><div class="wrap"><div class="section-intro reveal"><div><div class="kicker">The questions that matter</div><h2>Short answers, no theatre.</h2></div><p class="body">These answers preserve the accountability boundary. They do not make unsupported service, pricing, speed, team or outcome claims.</p></div>
      <div class="faq reveal"><details><summary>Is Bandly software or an accounting firm?</summary><p>Bandly is an accounting firm. Automation can gather, sort and prepare work; people remain accountable for important review and judgement.</p></details><details><summary>Do I need a new system?</summary><p>No. The starting point can be the documents and channels you already use, including email, WhatsApp and shared folders.</p></details><details><summary>What happens when something is missing?</summary><p>The goal is one precise request for the missing record or fact. Missing information is not guessed.</p></details></div>
    </div></section>
  </main>
  <footer class="footer wrap"><span>Bandly concept · ${t.title}</span><span>Built for direction review, not a live sales flow.</span></footer>
  <dialog id="dialog"><div class="dialog-inner"><div class="kicker">Prototype only</div><h3>Start with a question.</h3><p>This concept demonstrates a gentler first conversion step. It does not book a meeting or send data. The actual intake destination still needs approval.</p><div class="dialog-actions"><button class="button button--primary" data-close>Close</button></div></div></dialog>`;

const dialog = document.querySelector('#dialog');
document.querySelectorAll('[data-dialog]').forEach(btn => btn.addEventListener('click', () => dialog.showModal()));
document.querySelector('[data-close]').addEventListener('click', () => dialog.close());
document.querySelectorAll('[data-choice]').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('[data-choice]').forEach(b => b.setAttribute('aria-pressed','false'));
  btn.setAttribute('aria-pressed','true');
  document.querySelector('.result').textContent = `${btn.dataset.choice} A real version would ask only the next relevant question.`;
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); } }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
