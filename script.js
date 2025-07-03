let currentPage = 'home';

function showPage(page) {
  currentPage = page;
  const app = document.getElementById('app');

  if (page === 'apush') {
    app.innerHTML = `
      <div class="min-h-screen bg-pink-100 text-pink-900 font-sans p-6">
        <header class="text-center py-8 bg-pink-200 rounded-xl shadow-md">
          <h1 class="text-4xl font-bold">APUSH 📜</h1>
          <p class="text-pink-800 mt-2">your guide to timelines, key concepts, and test prep!</p>
        </header>
        <main class="max-w-4xl mx-auto mt-8 space-y-6">
          <section class="bg-white p-6 rounded-2xl shadow space-y-4 max-h-[50vh] overflow-y-auto">
            <h2 class="text-2xl font-semibold mb-2">Comprehensive Period Breakdown</h2>
            <div class="text-pink-700 space-y-4">
              <h3 class="font-bold text-lg">Period One (1491–1607)</h3>
              <p>Pre-Columbian societies, Colombian Exchange, Spanish colonization, Pueblo Revolt</p>
              <h3 class="font-bold text-lg">Period Two (1607–1754)</h3>
              <p>13 Colonies formation, Puritans, Great Awakening, colonial self-governance</p>
              <h3 class="font-bold text-lg">Period Three (1754–1800)</h3>
              <p>French & Indian War, American Revolution, Constitution, Federalists vs Anti-Federalists</p>
              <h3 class="font-bold text-lg">Period Four (1800–1848)</h3>
              <p>Jefferson, War of 1812, Market Revolution, Jacksonian Democracy, reform movements</p>
              <h3 class="font-bold text-lg">Period Five (1844–1877)</h3>
              <p>Manifest Destiny, Civil War, Emancipation Proclamation, Reconstruction</p>
              <h3 class="font-bold text-lg">Period Six (1865–1898)</h3>
              <p>Gilded Age, industrialization, immigration, labor unions, Populists</p>
              <h3 class="font-bold text-lg">Period Seven (1890–1945)</h3>
              <p>Imperialism, Progressive Era, WWI, Great Depression, New Deal, WWII</p>
              <h3 class="font-bold text-lg">Period Eight (1945–1980)</h3>
              <p>Cold War, Civil Rights, Vietnam War, Great Society, conservative resurgence</p>
              <h3 class="font-bold text-lg">Period Nine (1980–Present)</h3>
              <p>Reaganomics, end of Cold War, 9/11, globalization, political polarization</p>
            </div>
          </section>
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Helpful Links & Resources</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-2">
              <li><a href="https://www.youtube.com/@HeimlersHistory" class="text-pink-500 underline" target="_blank">Heimler's History YouTube Channel</a></li>
              <li><a href="https://knowt.io" class="text-pink-500 underline" target="_blank">Knowt: Study Guides & Quizzes</a></li>
              <li><a href="https://myap.collegeboard.org" class="text-pink-500 underline" target="_blank">AP Classroom (College Board)</a></li>
            </ul>
          </section>
          <div class="text-center">
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">← back to home</button>
          </div>
        </main>
        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">© 2025 AP Study Helper — APUSH edition 💕</footer>
      </div>
    `;
  } else if (page === 'apcsp') {
    app.innerHTML = `
      <div class="min-h-screen bg-pink-100 text-pink-900 font-sans p-6">
        <header class="text-center py-8 bg-pink-200 rounded-xl shadow-md">
          <h1 class="text-4xl font-bold">AP CSP 💻</h1>
          <p class="text-pink-800 mt-2">your guide to big ideas, algorithms, and computational thinking!</p>
        </header>
        <main class="max-w-4xl mx-auto mt-8 space-y-6">
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Big Ideas Overview</h2>
            <div class="text-pink-700 space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              <h3 class="font-bold text-lg">Big Idea 1: Creative Development</h3>
              <p>• Collaboration enhances the creative process</p>
              <p>• Program function & purpose guide development</p>
              <p>• Program design and development use iterative processes</p>
              <h3 class="font-bold text-lg">Big Idea 2: Data</h3>
              <p>• Data abstractions organize and manipulate data</p>
              <p>• Data compression, extraction, and filtering</p>
              <p>• Binary number system and data representation</p>
              <h3 class="font-bold text-lg">Big Idea 3: Algorithms and Programming</h3>
              <p>• Variables, expressions, statements, and procedures</p>
              <p>• Control structures: sequencing, selection, iteration</p>
              <p>• Lists and their operations</p>
              <h3 class="font-bold text-lg">Big Idea 4: Computer Systems and Networks</h3>
              <p>• Internet protocols and data transmission</p>
              <p>• Fault tolerance and redundancy</p>
              <p>• Parallel and distributed computing</p>
              <h3 class="font-bold text-lg">Big Idea 5: Impact of Computing</h3>
              <p>• Beneficial and harmful effects of technology</p>
              <p>• Digital divide and computing bias</p>
              <p>• Intellectual property, privacy, and security</p>
            </div>
          </section>
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Key Vocabulary & Concepts</h2>
            <div class="grid md:grid-cols-2 gap-4 text-pink-700">
              <div>
                <h4 class="font-semibold">Programming Terms:</h4>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Algorithm</li>
                  <li>Pseudocode</li>
                  <li>API (Application Programming Interface)</li>
                  <li>Parameter vs Argument</li>
                  <li>Abstraction</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold">Data & Internet:</h4>
                <ul class="list-disc list-inside text-sm space-y-1">
                  <li>Binary & Hexadecimal</li>
                  <li>Metadata</li>
                  <li>IP Address & Domain Name</li>
                  <li>HTTP/HTTPS protocols</li>
                  <li>Encryption & Decryption</li>
                </ul>
              </div>
            </div>
          </section>
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Helpful Links & Resources</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-2">
              <li><a href="https://code.org/educate/csp" class="text-pink-500 underline" target="_blank">Code.org AP CSP Curriculum</a></li>
              <li><a href="https://apcentral.collegeboard.org/courses/ap-computer-science-principles" class="text-pink-500 underline" target="_blank">College Board AP CSP Course</a></li>
              <li><a href="https://www.khanacademy.org/computing/ap-computer-science-principles" class="text-pink-500 underline" target="_blank">Khan Academy AP CSP</a></li>
              <li><a href="https://knowt.io" class="text-pink-500 underline" target="_blank">Knowt: Study Guides & Quizzes</a></li>
            </ul>
          </section>
          <div class="text-center">
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">← back to home</button>
          </div>
        </main>
        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">© 2025 AP Study Helper — CSP edition 💕</footer>
      </div>
    `;
  } else if (page === 'apcsa') {
    app.innerHTML = `
      <div class="min-h-screen bg-pink-100 text-pink-900 font-sans p-6">
        <header class="text-center py-8 bg-pink-200 rounded-xl shadow-md">
          <h1 class="text-4xl font-bold">AP CSA ☕</h1>
          <p class="text-pink-800 mt-2">master Java, object-oriented programming, and data structures!</p>
        </header>

        <main class="max-w-4xl mx-auto mt-8 space-y-6">
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Helpful Resources</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-2">
              <li><a href="https://runestone.academy/runestone/books/published/csawesome/index.html" class="text-pink-500 underline" target="_blank">CSAwesome Interactive Book</a></li>
              <li><a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a" class="text-pink-500 underline" target="_blank">College Board AP CSA Page</a></li>
              <li><a href="https://codingbat.com/java" class="text-pink-500 underline" target="_blank">CodingBat Java Practice</a></li>
            </ul>
          </section>

          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-1">
              <li>Practice writing code by hand for the FRQs</li>
              <li>Review the Java Quick Reference sheet often</li>
              <li>Understand class design, constructors, and inheritance</li>
              <li>Don’t memorize — focus on logic and patterns</li>
            </ul>
          </section>

          <div class="text-center">
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">
              ← back to home
            </button>
          </div>
        </main>

        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">
          © 2025 AP Study Helper — CSA edition 💕
        </footer>
      </div>
    `;
  } else if (page === 'apbio') {
    app.innerHTML = `
      <div class="min-h-screen bg-pink-100 text-pink-900 font-sans p-6">
        <header class="text-center py-8 bg-pink-200 rounded-xl shadow-md">
          <h1 class="text-4xl font-bold">AP Biology 🧬</h1>
          <p class="text-pink-800 mt-2">explore life from cells to ecosystems!</p>
        </header>

        <main class="max-w-4xl mx-auto mt-8 space-y-6">
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Helpful Resources</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-2">
              <li><a href="https://www.youtube.com/@bozemanbiology" class="text-pink-500 underline" target="_blank">Bozeman Science Videos</a></li>
              <li><a href="https://www.khanacademy.org/science/ap-biology" class="text-pink-500 underline" target="_blank">Khan Academy AP Bio</a></li>
              <li><a href="https://apcentral.collegeboard.org/courses/ap-biology" class="text-pink-500 underline" target="_blank">College Board AP Biology</a></li>
            </ul>
          </section>

          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-1">
              <li>Focus on understanding processes over memorization</li>
              <li>Know your experimental design and data analysis</li>
              <li>Practice explaining biological reasoning</li>
              <li>Master cell structure, genetics, and feedback loops</li>
            </ul>
          </section>

          <div class="text-center">
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">
              ← back to home
            </button>
          </div>
        </main>

        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">
          © 2025 AP Study Helper — Bio edition 💕
        </footer>
      </div>
    `;
  } else if (page === 'apchem') {
    app.innerHTML = `
      <div class="min-h-screen bg-pink-100 text-pink-900 font-sans p-6">
        <header class="text-center py-8 bg-pink-200 rounded-xl shadow-md">
          <h1 class="text-4xl font-bold">AP Chemistry ⚗️</h1>
          <p class="text-pink-800 mt-2">bonding, reactions, equilibria, and lab skills simplified!</p>
        </header>

        <main class="max-w-4xl mx-auto mt-8 space-y-6">
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Helpful Resources</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-2">
              <li><a href="https://www.youtube.com/@HeimlersHistory" class="text-pink-500 underline" target="_blank">Heimler’s Chemistry Playlist</a></li>
              <li><a href="https://www.khanacademy.org/science/ap-chemistry" class="text-pink-500 underline" target="_blank">Khan Academy AP Chemistry</a></li>
              <li><a href="https://apcentral.collegeboard.org/courses/ap-chemistry" class="text-pink-500 underline" target="_blank">College Board AP Chemistry</a></li>
            </ul>
          </section>

          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-1">
              <li>Memorize strong acids/bases and solubility rules</li>
              <li>Understand conceptual stoichiometry</li>
              <li>Practice equilibrium and rate law problems</li>
              <li>Familiarize yourself with lab procedure and analysis</li>
            </ul>
          </section>

          <div class="text-center">
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">
              ← back to home
            </button>
          </div>
        </main>

        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">
          © 2025 AP Study Helper — Chemistry edition 💕
        </footer>
      </div>
    `;
  } else if (page === 'apprecalc') {
    app.innerHTML = `
      <div class="min-h-screen bg-pink-100 text-pink-900 font-sans p-6">
        <header class="text-center py-8 bg-pink-200 rounded-xl shadow-md">
          <h1 class="text-4xl font-bold">AP Pre-Calc 📈</h1>
          <p class="text-pink-800 mt-2">build your foundation for calculus success!</p>
        </header>

        <main class="max-w-4xl mx-auto mt-8 space-y-6">
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Helpful Resources</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-2">
              <li><a href="https://www.khanacademy.org/math/ap-precalculus" class="text-pink-500 underline" target="_blank">Khan Academy AP Precalculus</a></li>
              <li><a href="https://apcentral.collegeboard.org/courses/ap-precalculus" class="text-pink-500 underline" target="_blank">College Board Pre-Calc</a></li>
              <li><a href="https://www.youtube.com/@TheOrganicChemistryTutor" class="text-pink-500 underline" target="_blank">Organic Chemistry Tutor Videos</a></li>
            </ul>
          </section>

          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Tips for Success</h2>
            <ul class="list-disc list-inside text-pink-700 space-y-1">
              <li>Master function transformations and compositions</li>
              <li>Practice graphing polynomial and rational functions</li>
              <li>Understand unit circle and trig identities deeply</li>
              <li>Use Desmos or graphing tools to visualize problems</li>
            </ul>
          </section>
          <div class="text-center">
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">← back to home</button>
          </div>
        </main>
        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">© 2025 AP Study Helper — Pre-Calc edition 💕</footer>
      </div>
    `;
  } else if (page === 'home') {
    location.reload();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  alert("thank you for subscribing! stay tuned for weekly emails ✨");
}
