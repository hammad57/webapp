// Sidebar Navigation Logic
function showSection(sectionId) {
    document.querySelectorAll('.admin-section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// --- 1. Graphs Logic (Chart.js) ---
const ctx = document.getElementById('userGraph').getContext('2d');
const userChart = new Chart(ctx, {
    type: 'bar', // Professional bar chart
    data: {
        labels: ['Gmail Signup', 'Manual Signup', 'Dummy Users'],
        datasets: [{
            label: 'User Count',
            data: [12, 19, 5], // Dummy data - Replace with Firebase counts later
            backgroundColor: ['#4f46e5', '#8b5cf6', '#cbd5e1'],
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

// --- 2. User Table Mock Data ---
const users = [
    { name: "Asim_99", method: "Gmail", status: "Active", pic: "https://via.placeholder.com/40" },
    { name: "John_Doe", method: "Manual", status: "Deactive", pic: "https://via.placeholder.com/40" },
    { name: "Guest_441", method: "Dummy", status: "Active", pic: "https://via.placeholder.com/40" }
];

const tableBody = document.getElementById('userTableBody');

function loadUsers() {
    tableBody.innerHTML = users.map(user => `
        <tr>
            <td><img src="${user.pic}" class="table-pic"></td>
            <td>${user.name}</td>
            <td><span class="badge">${user.method}</span></td>
            <td><span class="status-${user.status.toLowerCase()}">${user.status}</span></td>
            <td>
                <button class="btn-small" onclick="openEditModal('${user.name}')">Edit</button>
            </td>
        </tr>
    `).join('');
}

loadUsers();

// --- 3. Modal Logic ---
function openEditModal(username) {
    document.getElementById('editUsername').value = username;
    document.getElementById('editUserModal').classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('editUserModal').classList.add('hidden');
}

// --- 4. Post Logic ---
function publishPost() {
    const title = document.getElementById('postTitle').value;
    if(title) {
        alert("Post Published Successfully to Index.html via Firebase!");
        document.getElementById('postTitle').value = "";
    }
}