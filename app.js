// --- 1. UI Elements & Dropdown Logic ---
const userIconBtn = document.getElementById('userIconBtn');
const userDropdown = document.getElementById('userDropdown');

userIconBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('hidden');
});

// --- 2. Settings Modal Logic ---
const settingsLink = document.getElementById('settingsLink');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');

settingsLink.addEventListener('click', (e) => {
    e.preventDefault();
    settingsModal.classList.remove('hidden');
    userDropdown.classList.add('hidden'); // Dropdown band kar dein
});

closeSettings.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
});

// --- 3. Layout/Theme Applicator Logic ---
const applyLayoutBtn = document.getElementById('applyLayoutBtn');
const templateSelector = document.getElementById('templateSelector');

applyLayoutBtn.addEventListener('click', () => {
    const selectedTheme = templateSelector.value;
    
    // Body se purani classes remove kar ke nayi theme class add karein
    document.body.className = ''; 
    document.body.classList.add(selectedTheme);
    
    // Future Note: Yahan code aayega jo is setting ko Firebase mein save karega
    alert("Template Applied: " + selectedTheme);
});

// --- 4. Password Visibility Toggle ---
const toggleEye = document.getElementById('toggleEye');
const passwordInput = document.getElementById('passwordInput');

toggleEye.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleEye.innerText = "🙈";
    } else {
        passwordInput.type = "password";
        toggleEye.innerText = "👁️";
    }
});

// --- FIREBASE PLACEHOLDERS (Next Steps) ---
/*
  Yahan hum Firebase import karenge (Auth, Firestore/Realtime DB, Storage).
  Example functions jo humein bananay honge:
  
  1. checkAuthState(): Check karega ke user logged in hai ya nahi.
     - Agar logged in hai toh Login/Signup button hide kar ke Settings/Logout show karega.
  2. loadPackages(): Firebase Storage/DB se Pkg1, Pkg2, Pkg3 ki pictures fetch karega.
  3. loadPosts(): Admin ke banaye gaye posts fetch kar ke <div id="posts-container"> mein show karega.
*/