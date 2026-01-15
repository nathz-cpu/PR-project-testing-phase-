let currentCat = 'PDF';
let library = JSON.parse(localStorage.getItem('dropbox_lib')) || [];
let isLoggedIn = false;
let userRole = 'guest';

window.onload = () => {
    document.getElementById('u-mem').value = localStorage.getItem('saved_u') || "";
    document.getElementById('p-mem').value = localStorage.getItem('saved_p') || "";
    refresh(library);
    setInterval(() => { document.getElementById('clock').innerText = new Date().toLocaleTimeString(); }, 1000);
};

function showTab(id) {
    if (!isLoggedIn) return;
    if (id === 'upload' && userRole !== 'admin') return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(id + '-view').classList.remove('hidden');
}

function login() {
    const u = document.getElementById('u-mem').value;
    const p = document.getElementById('p-mem').value;
    if(!u || !p) return;

    isLoggedIn = true;
    if (u === "admin" && p === "1234") {
        userRole = 'admin';
        document.getElementById('admin-acc').classList.remove('hidden');
        document.getElementById('student-acc').classList.add('hidden');
        document.getElementById('tab-upload').classList.remove('hidden');
    } else {
        userRole = 'student';
        localStorage.setItem('saved_u', u);
        localStorage.setItem('saved_p', p);
        document.getElementById('display-name').innerText = u;
    }
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('logout-btn').classList.remove('hidden');
    refresh(library);
}

function logout() {
    isLoggedIn = false;
    userRole = 'guest';
    document.getElementById('admin-acc').classList.add('hidden');
    document.getElementById('tab-upload').classList.add('hidden');
    document.getElementById('logout-btn').classList.add('hidden');
    document.getElementById('student-acc').classList.remove('hidden');
    document.getElementById('display-name').innerText = "Guest";
    document.getElementById('login-modal').classList.remove('hidden');
    showTab('repo');
}

function upload() {
    if (userRole !== 'admin') return;
    const f = document.getElementById('picker').files[0];
    if(!f) return;
    const url = URL.createObjectURL(f);
    library.push({ name: f.name, type: currentCat, url: url });
    localStorage.setItem('dropbox_lib', JSON.stringify(library));
    refresh(library);
    alert("File Uploaded Successfully!");
}

function deleteFile(i) {
    if (userRole === 'admin' && confirm("Delete this file permanently?")) {
        library.splice(i, 1);
        localStorage.setItem('dropbox_lib', JSON.stringify(library));
        refresh(library);
    }
}

function refresh(data) {
    const list = document.getElementById('file-list');
    list.innerHTML = data.map((item, i) => `
        <tr>
            <td>${item.name}</td>
            <td><strong>${item.type}</strong></td>
            <td>
                <button onclick="previewFile(${i})" style="color:green; border:none; background:none; cursor:pointer; font-weight:bold; margin-right:10px;">View</button>
                <button onclick="downloadFile('${item.name}', '${item.url}')" style="color:blue; border:none; background:none; cursor:pointer; font-weight:bold; margin-right:10px;">Download</button>
                ${userRole === 'admin' ? `<button onclick="deleteFile(${i})" style="color:red; border:none; background:none; cursor:pointer; font-weight:bold;">Delete</button>` : ''}
            </td>
        </tr>
    `).join('');
}

function previewFile(i) {
    const item = library[i];
    const body = document.getElementById('preview-body');
    body.innerHTML = '';
    if (item.type === 'PDF' || item.type === 'Documents') body.innerHTML = `<iframe src="${item.url}"></iframe>`;
    else if (item.type === 'Image') body.innerHTML = `<img src="${item.url}">`;
    else if (item.type === 'Video') body.innerHTML = `<video src="${item.url}" controls autoplay></video>`;
    document.getElementById('preview-modal').classList.remove('hidden');
}

function closePreview() { document.getElementById('preview-modal').classList.add('hidden'); document.getElementById('preview-body').innerHTML = ''; }

function forgotPassword() {
    const u = document.getElementById('u-mem').value;
    const savedU = localStorage.getItem('saved_u');
    if (u === savedU && u !== "") alert("Found Account! Password is: " + localStorage.getItem('saved_p'));
    else alert("Account not found in local memory.");
}

function setCat(t) {
    currentCat = t;
    document.querySelectorAll('.big-cat-btn').forEach(b => b.classList.remove('active'));
    const idMap = {'PDF':'c-pdf', 'Documents':'c-doc', 'Video':'c-vid', 'Image':'c-img'};
    document.getElementById(idMap[t]).classList.add('active');
}

function updateFileName() { if(document.getElementById('picker').files[0]) document.getElementById('file-selected-name').innerText = "Selected: " + document.getElementById('picker').files[0].name; }
function downloadFile(n, u) { const a = document.createElement("a"); a.href = u; a.download = n; a.click(); }
function searchFiles() {
    const q = document.getElementById('search').value.toLowerCase();
    const filtered = library.filter(f => f.name.toLowerCase().includes(q) || f.type.toLowerCase().includes(q));
    refresh(filtered);
}
