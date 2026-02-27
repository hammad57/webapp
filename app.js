import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://dailytasktracker-1851b-default-rtdb.firebaseio.com/",
    // Yahan apni Firebase Project Settings se API Key aur Auth Domain copy karke paste karein
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 1. Load Templates & Settings
function loadUserSettings(userId) {
    const userRef = ref(db, 'users/' + userId);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if(data) {
            document.body.className = data.theme || 'theme-default';
            document.getElementById('navUsername').innerText = data.username;
            document.getElementById('navProfilePic').src = data.profilePic;
        }
    });
}

// 2. Load Packages
const pkgRef = ref(db, 'packages');
onValue(pkgRef, (snapshot) => {
    const pkgs = snapshot.val();
    const container = document.getElementById('packagesContainer');
    container.innerHTML = '';
    for(let id in pkgs) {
        container.innerHTML += `
            <div class="pkg-card">
                <img src="${pkgs[id].img}">
                <h3>${pkgs[id].name}</h3>
                <button onclick="subscribe('${id}')">Subscribe</button>
            </div>
        `;
    }
});

// 3. Load Posts
onValue(ref(db, 'posts'), (snapshot) => {
    const posts = snapshot.val();
    const container = document.getElementById('posts-container');
    container.innerHTML = '';
    for(let id in posts) {
        container.innerHTML += `<div class="post-card"><h4>${posts[id].title}</h4><p>${posts[id].content}</p></div>`;
    }
});

// Settings Toggle
document.getElementById('settingsBtn').onclick = () => document.getElementById('settingsModal').classList.remove('hidden');
document.getElementById('closeSettings').onclick = () => document.getElementById('settingsModal').classList.add('hidden');
