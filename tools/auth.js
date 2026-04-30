/**
 * auth.js — shared password gate for tools.adamleibler.com
 * 
 * To change your password:
 *   1. Go to https://emn178.github.io/online-tools/sha256.html
 *   2. Type your new password and copy the hash
 *   3. Replace the PASS_HASH value below
 */

const PASS_HASH = 'b9ab3b944047aac457b91d9cd9d1f65b4a1f32e839739ff84804941ad73c5f8c';

const SESSION_KEY = 'al_tools_auth';
const SESSION_HOURS = 24; // how long login lasts before asking again

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function isAuthed() {
  const entry = sessionStorage.getItem(SESSION_KEY);
  if (!entry) return false;
  const { hash, expires } = JSON.parse(entry);
  if (Date.now() > expires) { sessionStorage.removeItem(SESSION_KEY); return false; }
  return hash === PASS_HASH;
}

function setAuthed() {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({
    hash: PASS_HASH,
    expires: Date.now() + SESSION_HOURS * 60 * 60 * 1000
  }));
}

function renderGate() {
  document.body.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600&display=swap');
      *{box-sizing:border-box;margin:0;padding:0}
      body{background:#0D0F12;color:#E8EAF0;font-family:'DM Sans',sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;}
      .gate{width:100%;max-width:380px;padding:24px;}
      .gate-logo{font-family:'DM Mono',monospace;font-size:11px;color:#1A6BFF;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:24px;text-align:center;}
      .gate-title{font-size:22px;font-weight:600;letter-spacing:-0.02em;margin-bottom:6px;text-align:center;}
      .gate-sub{font-size:13px;color:#6B7385;text-align:center;margin-bottom:28px;}
      .gate-field{width:100%;background:#13161B;border:1px solid #252A33;border-radius:10px;padding:12px 16px;color:#E8EAF0;font-family:'DM Sans',sans-serif;font-size:15px;outline:none;transition:border-color 0.15s;margin-bottom:12px;}
      .gate-field:focus{border-color:#1A6BFF;}
      .gate-btn{width:100%;background:#1A6BFF;color:#fff;border:none;border-radius:10px;padding:12px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:500;cursor:pointer;transition:background 0.15s;}
      .gate-btn:hover{background:#2a7aff;}
      .gate-error{color:#EF4444;font-size:13px;text-align:center;margin-top:10px;min-height:20px;font-family:'DM Mono',monospace;}
    </style>
    <div class="gate">
      <div class="gate-logo">tools.adamleibler.com</div>
      <div class="gate-title">Private access</div>
      <div class="gate-sub">Enter your password to continue</div>
      <input class="gate-field" type="password" id="gateInput" placeholder="Password" autofocus>
      <button class="gate-btn" id="gateBtn">Unlock</button>
      <div class="gate-error" id="gateError"></div>
    </div>
  `;

  const input = document.getElementById('gateInput');
  const btn   = document.getElementById('gateBtn');
  const err   = document.getElementById('gateError');

  async function attempt() {
    const hash = await sha256(input.value);
    if (hash === PASS_HASH) {
      setAuthed();
      location.reload();
    } else {
      err.textContent = 'Incorrect password.';
      input.value = '';
      input.focus();
      setTimeout(() => err.textContent = '', 3000);
    }
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') attempt(); });
}

/**
 * Call this at the top of every page.
 * If not authed, replaces page with login screen.
 * If authed, does nothing and your page loads normally.
 */
function requireAuth() {
  if (!isAuthed()) {
    document.addEventListener('DOMContentLoaded', renderGate);
  }
}
