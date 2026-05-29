<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Finesse Dashboard</title>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<style>
  /* =========================================
     1. CSS UTAMA & HALAMAN INDUK
     ========================================= */
  *{box-sizing:border-box;margin:0;padding:0}
  body { background-color: #f4f4f4; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; font-family:sans-serif; }
  .app{display:flex;width: 100%; max-width: 1000px; height:780px;background:#eaf3de;border-radius:12px;overflow:hidden;border:0.5px solid #c0dd97; position:relative;}
  .sidebar{width:148px;background:#3B6D11;display:flex;flex-direction:column;padding:16px 10px;gap:4px;flex-shrink:0; transition:0.3s;}
  .logo{color:#fff;font-size:18px;font-weight:500;text-align:center;padding:8px 0 16px;letter-spacing:1px}
  .logo span{color:#FAC775}
  .nav-item{display:flex;align-items:center;gap:8px;padding:9px 10px;border-radius:8px;font-size:12px;color:rgba(255,255,255,0.7);cursor:pointer}
  .nav-item.active{background:rgba(255,255,255,0.2);color:#fff;font-weight:500}
  .nav-item:hover{background:rgba(255,255,255,0.12)}
  .nav-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.4);flex-shrink:0}
  .nav-item.active .nav-dot{background:#FAC775}
  .sidebar-footer{margin-top:auto;background:rgba(255,255,255,0.12);border-radius:10px;padding:10px;display:flex;align-items:center;gap:8px}
  .avatar{width:32px;height:32px;border-radius:50%;background:#FAC775;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:500;color:#412402;flex-shrink:0}
  .avatar-info p{font-size:12px;color:#fff;font-weight:500;line-height:1.3}
  .avatar-info span{font-size:11px;color:rgba(255,255,255,0.6)}
  .main{flex:1;display:flex;flex-direction:column;overflow:hidden}
  .topbar{background:#fff;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:0.5px solid #c0dd97}
  .topbar-greet{font-size:15px;font-weight:500;color:#27500A}
  .topbar-greet span{color:#3B6D11}
  .add-btn{background:#3B6D11;color:#fff;border:none;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:500;cursor:pointer;transition:0.2s;white-space:nowrap;}
  .add-btn:hover{background:#27500A}
  .content{flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:12px; position: relative;}
  
  /* Layout Konten Dashboard */
  .stat-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
  .stat-card{background:#fff;border-radius:10px;padding:12px 14px;border:0.5px solid #c0dd97}
  .stat-label{font-size:11px;color:#888780;margin-bottom:4px}
  .stat-val{font-size:20px;font-weight:500;color:#27500A;line-height:1.2}
  .stat-sub{font-size:10px;color:#B4B2A9;margin-top:3px}
  .stat-card.score .stat-val{color:#1D9E75}
  .stat-card.xp .stat-val{color:#639922}
  .mid-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .card{background:#fff;border-radius:10px;padding:14px;border:0.5px solid #c0dd97}
  .card-title{font-size:13px;font-weight:500;color:#27500A;margin-bottom:10px}
  .budget-wrap{display:flex;align-items:center;gap:14px}
  .donut-svg{flex-shrink:0}
  .budget-legend{display:flex;flex-direction:column;gap:6px}
  .leg-item{display:flex;align-items:center;gap:6px;font-size:11px;color:#5F5E5A}
  .leg-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
  .xp-bar-wrap{margin-bottom:12px}
  .xp-bar-label{display:flex;justify-content:space-between;font-size:11px;color:#888780;margin-bottom:5px}
  .xp-bar-bg{height:10px;background:#eaf3de;border-radius:6px;overflow:hidden}
  .xp-bar-fill{height:100%;width:70%;background:#639922;border-radius:6px;transition:0.5s}
  .badge-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}
  .badge{background:#eaf3de;border-radius:8px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:9px;color:#3B6D11;font-weight:500;border:1.5px solid transparent}
  .badge.earned{background:#EAF3DE;border-color:#97C459}
  .badge-icon{width:18px;height:18px;border-radius:4px;margin-bottom:3px}
  .challenge{background:#f0f8e8;border-radius:8px;padding:8px 10px;font-size:11px;color:#3B6D11;display:flex;align-items:center;gap:8px}
  .ch-dot{width:8px;height:8px;border-radius:50%;background:#639922;flex-shrink:0}
  .bottom-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .tx-item{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:0.5px solid #eaf3de}
  .tx-item:last-child{border-bottom:none}
  .tx-name{font-size:12px;color:#27500A}
  .tx-cat{font-size:10px;color:#B4B2A9}
  .tx-amt{font-size:12px;font-weight:500}
  .tx-amt.out{color:#D85A30}
  .tx-amt.inn{color:#1D9E75}
  .bar-row{display:flex;align-items:flex-end;gap:5px;height:90px}
  .bar-col{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1}
  .bar{border-radius:4px 4px 0 0;width:100%}
  .bar-lbl{font-size:9px;color:#B4B2A9}
  .runway-note{font-size:10px;color:#1D9E75;background:#E1F5EE;border-radius:6px;padding:5px 8px;margin-top:8px}

  /* =========================================
     2. CSS MULTI-PAGES & KOMPONEN
     ========================================= */
  .page { display: none; flex-direction: column; gap: 12px; animation: fadeIn 0.3s ease; }
  .page.active { display: flex; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slideIn { from { transform: translateX(120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  
  .filter-row { display: flex; gap: 8px; margin-bottom: 10px; }
  .filter-btn { padding: 6px 14px; border-radius: 20px; border: 1px solid #c0dd97; background: #fff; font-size: 11px; cursor: pointer; color: #3B6D11; font-weight: 500; transition:0.2s; }
  .filter-btn.active { background: #3B6D11; color: #fff; border-color: #3B6D11; }
  .budget-list { display: flex; flex-direction: column; gap: 12px; }
  .budget-item { background: #fff; padding: 14px; border-radius: 10px; border: 0.5px solid #c0dd97; }
  .profile-header { display: flex; align-items: center; gap: 16px; background: #fff; padding: 20px; border-radius: 10px; border: 0.5px solid #c0dd97; margin-bottom: 12px; }
  .profile-avatar { width: 60px; height: 60px; border-radius: 50%; background: #FAC775; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #412402; }
  .menu-list { background: #fff; border-radius: 10px; border: 0.5px solid #c0dd97; overflow: hidden; }
  .menu-item { padding: 14px 16px; border-bottom: 0.5px solid #eaf3de; font-size: 13px; color: #27500A; cursor: pointer; display: flex; justify-content: space-between; align-items: center; }
  .menu-item:last-child { border-bottom: none; }
  .menu-item:hover { background: #f9fbf4; }

  /* =========================================
     TAMBAHAN: RESPONSIVE MEDIA QUERIES (Side Quest 9 Terpenuhi)
     ========================================= */
  @media (max-width: 768px) {
    body { padding: 0; background: #fff; }
    .app { flex-direction: column; height: 100vh; border-radius: 0; border: none; max-width: 100%; }
    
    /* Ubah Sidebar jadi Bottom Navigation Bar */
    .sidebar { width: 100%; flex-direction: row; justify-content: space-around; padding: 10px 5px; order: 2; border-radius: 20px 20px 0 0; z-index: 50; }
    .logo, .sidebar-footer { display: none; } 
    .nav-item { flex-direction: column; padding: 5px; font-size: 10px; gap: 4px; border-radius: 8px; flex: 1; justify-content: center; text-align: center; }
    .nav-dot { display: none; }
    
    .main { order: 1; flex: 1; overflow: hidden; }
    .topbar { padding: 12px; flex-wrap: wrap; gap: 10px; }
    .topbar-greet { font-size: 13px; line-height: 1.4; width: 100%; }
    .add-btn { width: 100%; padding: 10px; }
    
    /* Grid jadi memanjang ke bawah di layar kecil */
    .stat-row { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .mid-row, .bottom-row { grid-template-columns: 1fr; }
    
    #success-toast { bottom: 80px; right: 15px; left: 15px; } /* Sesuaikan posisi toast di mobile */
  }
</style>
</head>
<body>

<div class="app">
  <div class="sidebar">
    <div class="logo">Fine<span>sse</span></div>
    <div class="nav-item active" data-target="dashboard"><div class="nav-dot"></div>Dashboard</div>
    <div class="nav-item" data-target="transaksi"><div class="nav-dot"></div>Transaksi</div>
    <div class="nav-item" data-target="budget"><div class="nav-dot"></div>Budget</div>
    <div class="nav-item" data-target="badges"><div class="nav-dot"></div>Badges</div>
    <div class="nav-item" data-target="profil"><div class="nav-dot"></div>Profil</div>
    <div class="sidebar-footer">
      <div class="avatar">NK</div>
      <div class="avatar-info"><p>Nick</p><span>Level 7</span></div>
    </div>
  </div>

  <div class="main">
    <div class="topbar">
      <div class="topbar-greet">Selamat pagi, <span>Nick!</span> Kamu sudah catat 2 transaksi hari ini.</div>
      <button class="add-btn">+ Tambah Transaksi</button>
    </div>

    <div class="content">
      <div id="page-dashboard" class="page active">
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-label">Total saldo</div>
            <div class="stat-val">Rp 4,2 jt</div>
            <div class="stat-sub">+Rp 800rb dari bulan lalu</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Pengeluaran bulan ini</div>
            <div class="stat-val">Rp 1,8 jt</div>
            <div class="stat-sub">dari budget Rp 2,5 jt</div>
          </div>
          <div class="stat-card score">
            <div class="stat-label">Financial health score</div>
            <div class="stat-val">78</div>
            <div class="stat-sub">dari 100 — Bagus!</div>
          </div>
          <div class="stat-card xp">
            <div class="stat-label">Level / XP</div>
            <div class="stat-val">Lv. 7</div>
            <div class="stat-sub">1.400 / 2.000 XP</div>
          </div>
        </div>
        <div class="mid-row">
          <div class="card">
            <div class="card-title">Budget bulan ini</div>
            <div class="budget-wrap">
              <svg class="donut-svg" width="90" height="90" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r="34" fill="none" stroke="#eaf3de" stroke-width="16"/>
                <circle cx="45" cy="45" r="34" fill="none" stroke="#639922" stroke-width="16" stroke-dasharray="133 80" stroke-linecap="round" transform="rotate(-90 45 45)"/>
                <text x="45" y="41" text-anchor="middle" font-size="11" fill="#888780">Sisa</text>
                <text x="45" y="54" text-anchor="middle" font-size="14" font-weight="500" fill="#27500A">35%</text>
              </svg>
              <div class="budget-legend">
                <div class="leg-item"><div class="leg-dot" style="background:#639922"></div>Terpakai — Rp 1,8 jt</div>
                <div class="leg-item"><div class="leg-dot" style="background:#eaf3de;border:1px solid #97C459"></div>Sisa — Rp 700rb</div>
                <div class="leg-item"><div class="leg-dot" style="background:#FAC775"></div>Tabungan — Rp 500rb</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-title">Pencapaian & gamifikasi</div>
            <div class="xp-bar-wrap">
              <div class="xp-bar-label"><span>XP Level 7</span><span>1.400 / 2.000</span></div>
              <div class="xp-bar-bg"><div class="xp-bar-fill"></div></div>
            </div>
            <div class="badge-grid">
              <div class="badge earned"><div class="badge-icon" style="background:#c0dd97"></div>Hemat</div>
              <div class="badge earned"><div class="badge-icon" style="background:#9FE1CB"></div>Rutin</div>
              <div class="badge earned"><div class="badge-icon" style="background:#FAEEDA"></div>Investor</div>
              <div class="badge"><div class="badge-icon" style="background:#eaf3de"></div>Locked</div>
            </div>
            <div class="challenge"><div class="ch-dot"></div>Tantangan: Catat 3 transaksi hari ini (2/3)</div>
          </div>
        </div>
        <div class="bottom-row">
          <div class="card">
            <div class="card-title">Transaksi terbaru</div>
          </div>
          <div class="card">
            <div class="card-title">Runway predictor</div>
            <div class="bar-row">
              <div class="bar-col"><div class="bar" style="height:52px;background:#c0dd97"></div><div class="bar-lbl">Jan</div></div>
              <div class="bar-col"><div class="bar" style="height:68px;background:#c0dd97"></div><div class="bar-lbl">Feb</div></div>
              <div class="bar-col"><div class="bar" style="height:60px;background:#c0dd97"></div><div class="bar-lbl">Mar</div></div>
              <div class="bar-col"><div class="bar" style="height:75px;background:#c0dd97"></div><div class="bar-lbl">Apr</div></div>
              <div class="bar-col"><div class="bar" style="height:80px;background:#c0dd97"></div><div class="bar-lbl">Mei</div></div>
              <div class="bar-col"><div class="bar" style="height:90px;background:#3B6D11"></div><div class="bar-lbl">Jun*</div></div>
            </div>
            <div class="runway-note">Prediksi: saldo Nick aman hingga akhir Juni jika pola ini berlanjut.</div>
          </div>
        </div>
      </div>

      <div id="page-transaksi" class="page">
        <div class="filter-row">
          <button class="filter-btn active">Semua</button>
          <button class="filter-btn">Pemasukan</button>
          <button class="filter-btn">Pengeluaran</button>
        </div>
        <div class="card">
          <div class="card-title">Riwayat Bulan Ini</div>
        </div>
      </div>

      <div id="page-budget" class="page">
        <div class="budget-list">
          <div class="budget-item">
            <div class="card-title" style="margin-bottom: 8px;">Makanan & Minuman</div>
            <div class="xp-bar-label"><span>Terpakai Rp 800rb</span><span>Sisa Rp 200rb</span></div>
            <div class="xp-bar-bg"><div class="xp-bar-fill" style="width: 80%; background: #D85A30;"></div></div>
          </div>
          <div class="budget-item">
            <div class="card-title" style="margin-bottom: 8px;">Transportasi</div>
            <div class="xp-bar-label"><span>Terpakai Rp 300rb</span><span>Sisa Rp 200rb</span></div>
            <div class="xp-bar-bg"><div class="xp-bar-fill" style="width: 60%; background: #FAC775;"></div></div>
          </div>
          <div class="budget-item">
            <div class="card-title" style="margin-bottom: 8px;">Hiburan & Langganan</div>
            <div class="xp-bar-label"><span>Terpakai Rp 100rb</span><span>Sisa Rp 400rb</span></div>
            <div class="xp-bar-bg"><div class="xp-bar-fill" style="width: 20%; background: #639922;"></div></div>
          </div>
        </div>
      </div>

      <div id="page-badges" class="page">
        <div class="card">
          <div class="card-title">Koleksi Badges Kamu (Level 7)</div>
          <div class="badge-grid" style="grid-template-columns: repeat(3, 1fr); gap: 15px;">
            <div class="badge earned" style="padding: 15px;"><div class="badge-icon" style="background:#c0dd97; width:24px; height:24px;"></div>Hemat<br><span style="font-size:8px; color:#888780; font-weight:normal; text-align:center;">Budget sisa >30%</span></div>
            <div class="badge earned" style="padding: 15px;"><div class="badge-icon" style="background:#9FE1CB; width:24px; height:24px;"></div>Rutin<br><span style="font-size:8px; color:#888780; font-weight:normal; text-align:center;">Catat 30 hari</span></div>
            <div class="badge earned" style="padding: 15px;"><div class="badge-icon" style="background:#FAEEDA; width:24px; height:24px;"></div>Investor<br><span style="font-size:8px; color:#888780; font-weight:normal; text-align:center;">Tabung 1 Juta</span></div>
            <div class="badge" style="padding: 15px;"><div class="badge-icon" style="background:#eaf3de; width:24px; height:24px;"></div>Locked<br><span style="font-size:8px; color:#888780; font-weight:normal; text-align:center;">Level 10 Req.</span></div>
          </div>
        </div>
      </div>

      <div id="page-profil" class="page">
        <div class="profile-header">
          <div class="profile-avatar">NK</div>
          <div>
            <h3 style="color:#27500A; font-size:18px;">Nick</h3>
            <p style="font-size:12px; color:#888780;">nick@finesse.app • Bergabung 2023</p>
          </div>
        </div>
        <div class="menu-list">
          <div class="menu-item">Pengaturan Akun <span>></span></div>
          <div class="menu-item">Notifikasi & Pengingat <span>></span></div>
          <div class="menu-item">Ekspor Data (CSV/PDF) <span>></span></div>
          <div class="menu-item">Bantuan & Syarat Ketentuan <span>></span></div>
          <div class="menu-item" style="color: #D85A30;">Keluar (Logout) <span>></span></div>
        </div>
      </div>

    </div>
  </div>

  <div id="transaction-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); justify-content:center; align-items:center; z-index:9999; animation: fadeIn 0.2s ease;">
    <div style="background:#fff; width:90%; max-width:400px; padding:24px; border-radius:16px; border:1px solid #c0dd97; box-shadow:0 10px 25px rgba(0,0,0,0.1);">
      <h3 style="color:#27500A; margin-bottom:16px; font-size:16px; display:flex; align-items:center; gap:8px;">📝 Catat Transaksi Baru</h3>
      
      <div style="margin-bottom:12px;">
        <label style="font-size:11px; color:#888780; display:block; margin-bottom:4px;">Nama Transaksi</label>
        <input type="text" id="modal-tx-name" placeholder="Contoh: Beli Kopi" style="width:100%; padding:10px; border:1px solid #c0dd97; border-radius:8px; font-size:13px; outline:none;">
      </div>

      <div style="margin-bottom:12px;">
        <label style="font-size:11px; color:#888780; display:block; margin-bottom:4px;">Kategori</label>
        <select id="modal-tx-category" style="width:100%; padding:10px; border:1px solid #c0dd97; border-radius:8px; font-size:13px; outline:none; background:#fff;">
          <option value="Umum">Umum</option>
          <option value="Makanan & Minuman">Makanan & Minuman</option>
          <option value="Transportasi">Transportasi</option>
          <option value="Hiburan & Langganan">Hiburan & Langganan</option>
        </select>
      </div>

      <div style="margin-bottom:20px;">
        <label style="font-size:11px; color:#888780; display:block; margin-bottom:4px;">Nominal (Gunakan minus jika Pengeluaran)</label>
        <input type="number" id="modal-tx-amount" placeholder="Contoh: 500000 atau -25000" style="width:100%; padding:10px; border:1px solid #c0dd97; border-radius:8px; font-size:13px; outline:none;">
      </div>

      <div style="display:flex; gap:10px; justify-content:flex-end;">
        <button id="modal-close-btn" style="background:#f4f4f4; color:#5F5E5A; border:none; padding:8px 16px; border-radius:8px; font-size:12px; cursor:pointer; font-weight:500;">Batal</button>
        <button id="modal-submit-btn" style="background:#3B6D11; color:#fff; border:none; padding:8px 16px; border-radius:8px; font-size:12px; cursor:pointer; font-weight:500;">Simpan Data</button>
      </div>
    </div>
  </div>

  <div id="success-toast" style="display:none; position:fixed; bottom:24px; right:24px; background:#fff; border-left:5px solid #1D9E75; padding:14px 20px; border-radius:8px; box-shadow:0 8px 20px rgba(0,0,0,0.15); z-index:10000; align-items:center; gap:12px; animation: slideIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
    <div id="toast-icon" style="background:#E1F5EE; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#1D9E75; font-weight:bold; font-size:14px;">✓</div>
    <div>
      <h4 style="font-size:12px; color:#27500A; font-weight:600;" id="toast-title">Notifikasi</h4>
      <p style="font-size:11px; color:#888780;" id="toast-desc">Pesan</p>
    </div>
  </div>

</div> 

<script>
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // LOGIC 1: Sistem Navigasi Multi-Halaman
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const topbarGreet = document.querySelector('.topbar-greet');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('data-target');

            pages.forEach(page => page.classList.remove('active'));
            const targetPage = document.getElementById('page-' + targetId);
            if(targetPage) {
                targetPage.classList.add('active');
            }

            if(targetId === 'dashboard') {
                topbarGreet.innerHTML = "Selamat pagi, <span>Nick!</span> Kamu sudah catat 2 transaksi hari ini.";
            } else {
                const title = targetId.charAt(0).toUpperCase() + targetId.slice(1);
                topbarGreet.innerHTML = `<span style="font-size:18px; font-weight:600; color:#3B6D11">${title}</span>`;
            }
        });
    });

    // ==========================================
    // LOGIC 2: Modal & Form Pengiriman (POST Menggunakan AXIOS)
    // ==========================================
    const addBtn = document.querySelector('.add-btn');
    const txModal = document.getElementById('transaction-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalSubmitBtn = document.getElementById('modal-submit-btn');
    
    const inputName = document.getElementById('modal-tx-name');
    const inputAmount = document.getElementById('modal-tx-amount');
    const inputCategory = document.getElementById('modal-tx-category');
    
    const successToast = document.getElementById('success-toast');
    const toastIcon = document.getElementById('toast-icon');

    let transaksiHariIni = 2; 

    addBtn.addEventListener('click', () => {
        inputName.value = "";
        inputAmount.value = "";
        inputCategory.value = "Umum";
        txModal.style.display = "flex";
    });

    modalCloseBtn.addEventListener('click', () => {
        txModal.style.display = "none";
    });

    const showToast = (isError, title, desc) => {
        if(isError) {
            successToast.style.borderLeft = "5px solid #D85A30";
            toastIcon.style.background = "#FADED5";
            toastIcon.style.color = "#D85A30";
            toastIcon.innerText = "!";
        } else {
            successToast.style.borderLeft = "5px solid #1D9E75";
            toastIcon.style.background = "#E1F5EE";
            toastIcon.style.color = "#1D9E75";
            toastIcon.innerText = "✓";
        }
        document.getElementById('toast-title').innerText = title;
        document.getElementById('toast-desc').innerText = desc;
        successToast.style.display = "flex";
        
        setTimeout(() => {
            successToast.style.animation = "fadeIn 0.3s ease reverse";
            setTimeout(() => { 
                successToast.style.display = "none"; 
                successToast.style.animation = "slideIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            }, 300);
        }, 4000);
    };

    modalSubmitBtn.addEventListener('click', async () => {
        const nameVal = inputName.value.trim();
        const amountVal = inputAmount.value.trim();
        const categoryVal = inputCategory.value;

        if (!nameVal) { alert("❌ Gagal: Nama transaksi tidak boleh kosong!"); return; }
        if (!amountVal || isNaN(amountVal) || Number(amountVal) === 0) { alert("❌ Gagal: Nominal harus angka dan bukan 0!"); return; }

        const dataKirim = {
            name: nameVal,
            category: categoryVal,
            amount: Number(amountVal)
        };

        txModal.style.display = "none";

        try {
            // MENGGUNAKAN AXIOS: Jauh lebih singkat dan elegan dari fetch!
            const response = await axios.post('http://localhost:3000/api/transactions', dataKirim);
            const result = response.data; // Axios otomatis mengurai JSON ke .data

            if (result.status === "success") {
                loadTransactions(); 
                loadAIAdvice();      
                updateGamifikasi(); 

                const isPemasukan = Number(amountVal) > 0;
                showToast(false, isPemasukan ? "Pemasukan Dicatat!" : "Pengeluaran Dicatat!", `Berhasil menyimpan "${nameVal}".`);
            } else {
                showToast(true, "Terjadi Kesalahan", result.message || "Gagal menyimpan data.");
            }
        } catch (error) {
            console.error("Gagal memproses alur server:", error);
            showToast(true, "Koneksi Gagal!", "Hubungan ke Server Backend terputus.");
        }
    });

    // ==========================================
    // LOGIC 3: Update Gamifikasi
    // ==========================================
    function updateGamifikasi() {
        const challengeText = document.querySelector('.challenge');
        const xpFill = document.querySelector('.xp-bar-fill');
        
        if (transaksiHariIni < 3) {
            transaksiHariIni++;
            challengeText.innerHTML = `<div class="ch-dot"></div>Tantangan: Catat 3 transaksi hari ini (${transaksiHariIni}/3)`;
            if (transaksiHariIni === 3) {
                setTimeout(() => {
                    alert("🎉 Selamat! Kamu menyelesaikan tantangan hari ini dan mendapat XP tambahan!");
                    xpFill.style.width = "85%"; 
                }, 400);
            }
        }
    }

    // ==========================================
    // LOGIC 4: Mengambil Data & Filter (GET Menggunakan AXIOS)
    // ==========================================
    let allTransactions = []; 

    async function loadTransactions() {
        try {
            // MENGGUNAKAN AXIOS GET
            const response = await axios.get('http://localhost:3000/api/transactions');
            const result = response.data; 

            if (result.status === "success") {
                allTransactions = result.data;
                renderFilteredData(allTransactions);
            }
        } catch (error) {
            console.error("Gagal mengambil data dari server:", error);
        }
    }

    function renderFilteredData(transactionsToRender) {
        const transactionCardDashboard = document.querySelector('#page-dashboard .bottom-row .card:nth-child(1)');
        const transactionCardPage = document.querySelector('#page-transaksi .card');
        
        const renderData = (element, includeTitle, titleText) => {
            if (!element) return;
            element.innerHTML = includeTitle ? `<div class="card-title">${titleText}</div>` : '';
            
            if (transactionsToRender.length === 0) {
                element.insertAdjacentHTML('beforeend', `<div style="font-size:12px; color:#888780; padding:10px 0; text-align:center;">Tidak ada riwayat transaksi.</div>`);
                return;
            }

            [...transactionsToRender].reverse().forEach(tx => {
                const formatNominal = Math.abs(tx.amount) / 1000 + "rb";
                const amtClass = tx.type === 'out' ? 'out' : 'inn';
                const sign = tx.type === 'out' ? '-Rp' : '+Rp';

                const txHTML = `
                    <div class="tx-item">
                        <div>
                            <div class="tx-name">${tx.name}</div>
                            <div class="tx-cat">${tx.category}</div>
                        </div>
                        <div class="tx-amt ${amtClass}">${sign} ${formatNominal}</div>
                    </div>
                `;
                element.insertAdjacentHTML('beforeend', txHTML);
            });
        };

        renderData(transactionCardDashboard, true, "Transaksi terbaru dari Server");
        renderData(transactionCardPage, true, "Riwayat Bulan Ini");
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterType = this.innerText.trim(); 
            if (filterType === "Pemasukan") {
                renderFilteredData(allTransactions.filter(tx => tx.type === 'inn'));
            } else if (filterType === "Pengeluaran") {
                renderFilteredData(allTransactions.filter(tx => tx.type === 'out'));
            } else {
                renderFilteredData(allTransactions);
            }
        });
    });

    // ==========================================
    // LOGIC 5: Fitur AI Gemini (GET Menggunakan AXIOS)
    // ==========================================
    async function loadAIAdvice() {
        const aiNoteElement = document.querySelector('.runway-note');
        if (!aiNoteElement) return;

        aiNoteElement.innerHTML = "✨ AI sedang menganalisis pola keuanganmu...";

        try {
            // MENGGUNAKAN AXIOS GET
            const response = await axios.get('http://localhost:3000/api/ai-advice');
            const result = response.data;

            if (result.status === "success") {
                aiNoteElement.innerHTML = `🤖 <b>Finesse AI Insights:</b> "${result.advice.trim()}"`;
            } else {
                aiNoteElement.innerHTML = "❌ Gagal memuat saran dari AI.";
            }
        } catch (error) {
            console.error("Error fetching AI advice:", error);
            aiNoteElement.innerHTML = "❌ Hubungan ke Server AI terputus.";
        }
    }

    // ==========================================
    // EKSEKUSI AWAL
    // ==========================================
    loadTransactions();
    loadAIAdvice();
    
});
</script>
</body>
</html>
