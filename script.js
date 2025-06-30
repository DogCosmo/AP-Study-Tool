
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
          <section class="bg-white p-6 rounded-2xl shadow space-y-4">
            <h2 class="text-2xl font-semibold mb-2">Comprehensive Period Breakdown</h2>
            <div class="text-pink-700 space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              <h3 class="font-bold text-lg">Period One</h3>
              <p>1492 – Columbus arrives in the New World</p>
              <p>Flows of trade between the Old World & New World increase food production and stimulate growth</p>
              <p>Spain becomes colonial power in the Americas</p>
              <p>Chart on Native American vs. European Views</p>
              <p>1587 - Roanoke "Lost Colony"; 1588 - English defeat Spanish Armada</p>
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
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">
              ← back to home
            </button>
          </div>
        </main>

        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">
          © 2025 AP Study Helper — APUSH edition 💕
        </footer>
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
            <button onclick="showPage('home')" class="mt-6 px-6 py-2 rounded-full bg-pink-300 text-white shadow hover:bg-pink-400">
              ← back to home
            </button>
          </div>
        </main>

        <footer class="mt-12 text-center text-pink-600 text-sm py-4 border-t border-pink-200">
          © 2025 AP Study Helper — CSP edition 💕
        </footer>
      </div>
    `;
  } else if (page === 'home') {
    location.reload(); // Simple way to go back to home
  }
  // Add other pages as needed
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Subscribed! You'll now get cute lil study emails ✨");
}
