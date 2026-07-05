const STATUSES = {
  'dinheiro': { label: 'Com dinheiro', color: '#22c55e' },
  'sem-dinheiro': { label: 'Sem dinheiro', color: '#ef4444' },
  'dinheiro-papel': { label: 'Dinheiro + Papel', color: '#3b82f6' },
  'papel': { label: 'Só papel', color: '#eab308' },
  'quebrado': { label: 'Avariado', color: '#64748b' },
};

const I = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  dollar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.2-3.7L23 10M1 14l5.3 4.7A9 9 0 0 0 20.5 15"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  signal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  crosshair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
};

const ATM_DATA = [
  { id:1, bank:'BFA', name:'BFA Mutamba', address:'Largo da Mutamba, Ingombota', lat:-8.8190, lng:13.2340, status:'dinheiro', updated:'há 12 min', horario:'24h' },
  { id:2, bank:'BFA', name:'BFA Miramar', address:'Av. 4 de Fevereiro, Miramar', lat:-8.8100, lng:13.2300, status:'dinheiro-papel', updated:'há 5 min', horario:'24h' },
  { id:3, bank:'BFA', name:'BFA Talatona', address:'Centralidade do Talatona, Sul', lat:-8.9480, lng:13.1870, status:'sem-dinheiro', updated:'há 1h', horario:'24h' },
  { id:4, bank:'BFA', name:'BFA Alvalade', address:'Rua Padre Barroso, Alvalade', lat:-8.8350, lng:13.2400, status:'dinheiro', updated:'há 30 min', horario:'08h-22h' },
  { id:5, bank:'BFA', name:'BFA Viana', address:'Av. principal, Viana', lat:-8.9050, lng:13.3740, status:'papel', updated:'há 2h', horario:'24h' },
  { id:6, bank:'BIC', name:'BIC Kinaxixi', address:'Largo do Kinaxixi, Maianga', lat:-8.8220, lng:13.2280, status:'dinheiro', updated:'há 8 min', horario:'24h' },
  { id:7, bank:'BIC', name:'BIC Cidade Alta', address:'Cidade Alta, Luanda', lat:-8.8155, lng:13.2310, status:'quebrado', updated:'há 3h', horario:'09h-20h' },
  { id:8, bank:'BIC', name:'BIC Patriota', address:'Zona Patriota, Luanda Sul', lat:-8.9550, lng:13.2100, status:'dinheiro-papel', updated:'há 20 min', horario:'24h' },
  { id:9, bank:'BIC', name:'BIC Cacuaco', address:'Av. Principal, Cacuaco', lat:-8.7810, lng:13.3660, status:'sem-dinheiro', updated:'há 45 min', horario:'08h-20h' },
  { id:10, bank:'BAI', name:'BAI Centro', address:'Av. dos Combatentes, Centro', lat:-8.8250, lng:13.2320, status:'dinheiro-papel', updated:'há 3 min', horario:'24h' },
  { id:11, bank:'BAI', name:'BAI Rangel', address:'Bairro do Rangel, Rangel', lat:-8.8420, lng:13.2750, status:'dinheiro', updated:'há 18 min', horario:'24h' },
  { id:12, bank:'BAI', name:'BAI Benfica', address:'Estrada de Benfica, Benfica', lat:-8.8730, lng:13.2060, status:'sem-dinheiro', updated:'há 1h 20min', horario:'08h-21h' },
  { id:13, bank:'BAI', name:'BAI Belas', address:'Shopping Belas, Luanda Sul', lat:-8.9380, lng:13.1720, status:'dinheiro', updated:'há 6 min', horario:'09h-22h' },
  { id:14, bank:'Atlântico', name:'Atlântico Ilha', address:'Ilha do Cabo, Luanda', lat:-8.7950, lng:13.2190, status:'dinheiro', updated:'há 10 min', horario:'24h' },
  { id:15, bank:'Atlântico', name:'Atlântico Maianga', address:'Av. de Portugal, Maianga', lat:-8.8270, lng:13.2290, status:'papel', updated:'há 55 min', horario:'24h' },
  { id:16, bank:'Atlântico', name:'Atlântico Cazenga', address:'Estrada do Cazenga, Cazenga', lat:-8.8180, lng:13.3100, status:'dinheiro-papel', updated:'há 25 min', horario:'08h-20h' },
  { id:17, bank:'Atlântico', name:'Atlântico Zango', address:'Aeroporto do Zango, Viana', lat:-8.8780, lng:13.4210, status:'quebrado', updated:'há 4h', horario:'24h' },
  { id:18, bank:'BancSol', name:'BancSol Cassenda', address:'Rua da Cassenda, Sambizanga', lat:-8.8060, lng:13.2620, status:'dinheiro', updated:'há 15 min', horario:'24h' },
  { id:19, bank:'BancSol', name:'BancSol Samba', address:'Estrada de Samba, Belas', lat:-8.9200, lng:13.1820, status:'sem-dinheiro', updated:'há 2h', horario:'08h-22h' },
  { id:20, bank:'BancSol', name:'BancSol Sambizanga', address:'Bairro do Prenda, Sambizanga', lat:-8.8000, lng:13.2700, status:'dinheiro-papel', updated:'há 35 min', horario:'24h' },
  { id:21, bank:'Keve', name:'Keve Ingombota', address:'Rua Major Kanhangulo, Ingombota', lat:-8.8165, lng:13.2345, status:'dinheiro', updated:'há 7 min', horario:'24h' },
  { id:22, bank:'Keve', name:'Keve Samba Grande', address:'Centralidade Samba Grande', lat:-8.9100, lng:13.1900, status:'dinheiro-papel', updated:'há 40 min', horario:'24h' },
  { id:23, bank:'Keve', name:'Keve Palanca', address:'Estrada da Palanca, Viana', lat:-8.9340, lng:13.2870, status:'quebrado', updated:'há 5h', horario:'08h-20h' },
  { id:24, bank:'Standard', name:'Standard Luanda', address:'Av. 4 de Fevereiro, Centro', lat:-8.8130, lng:13.2350, status:'dinheiro-papel', updated:'há 2 min', horario:'24h' },
  { id:25, bank:'Standard', name:'Standard Talatona', address:'Condomínio Talatona Village', lat:-8.9510, lng:13.1760, status:'dinheiro', updated:'há 22 min', horario:'09h-21h' },
  { id:26, bank:'BMA', name:'BMA Maculusso', address:'Rua Rainha Ginga, Maculusso', lat:-8.8285, lng:13.2355, status:'sem-dinheiro', updated:'há 50 min', horario:'24h' },
  { id:27, bank:'BMA', name:'BMA Rocha Pinto', address:'Bairro Rocha Pinto, Rangel', lat:-8.8500, lng:13.2900, status:'dinheiro', updated:'há 14 min', horario:'24h' },
  { id:28, bank:'Caixa', name:'Caixa Central', address:'Av. Lenin, Ingombota', lat:-8.8210, lng:13.2380, status:'dinheiro-papel', updated:'há 9 min', horario:'24h' },
  { id:29, bank:'Caixa', name:'Caixa Palanca', address:'Estrada Catete, Palanca', lat:-8.9650, lng:13.3100, status:'dinheiro', updated:'há 1h', horario:'08h-20h' },
  { id:30, bank:'BFA', name:'BFA Kilamba', address:'Centralidade do Kilamba, Bloco 3', lat:-8.9930, lng:13.1710, status:'dinheiro', updated:'há 15 min', horario:'24h' },
  { id:31, bank:'BFA', name:'BFA Sequele', address:'Centralidade do Sequele, Viana', lat:-8.9720, lng:13.3480, status:'sem-dinheiro', updated:'há 40 min', horario:'08h-20h' },
  { id:32, bank:'BFA', name:'BFA Golf', address:'Bairro do Golf, Rangel', lat:-8.8570, lng:13.2530, status:'dinheiro-papel', updated:'há 12 min', horario:'24h' },
  { id:33, bank:'BFA', name:'BFA Prenda', address:'Bairro da Prenda, Sambizanga', lat:-8.8030, lng:13.2560, status:'dinheiro', updated:'há 8 min', horario:'24h' },
  { id:34, bank:'BIC', name:'BIC Morro Bento', address:'Via Expressa, Morro Bento', lat:-8.9580, lng:13.2040, status:'dinheiro', updated:'há 5 min', horario:'24h' },
  { id:35, bank:'BIC', name:'BIC Camama', address:'Estrada da Camama, Belas', lat:-8.9730, lng:13.2090, status:'papel', updated:'há 2h', horario:'08h-22h' },
  { id:36, bank:'BIC', name:'BIC São Paulo', address:'Bairro São Paulo, Luanda', lat:-8.8140, lng:13.2470, status:'dinheiro-papel', updated:'há 20 min', horario:'24h' },
  { id:37, bank:'BIC', name:'BIC Rocha Pinto', address:'Estrada do Rocha Pinto, Rangel', lat:-8.8520, lng:13.2880, status:'quebrado', updated:'há 6h', horario:'09h-20h' },
  { id:38, bank:'BAI', name:'BAI Kilamba', address:'Centralidade do Kilamba, Bloco 8', lat:-8.9990, lng:13.1770, status:'dinheiro', updated:'há 10 min', horario:'24h' },
  { id:39, bank:'BAI', name:'BAI Sequele', address:'Centralidade do Sequele, Rua 12', lat:-8.9760, lng:13.3440, status:'dinheiro-papel', updated:'há 30 min', horario:'08h-21h' },
  { id:40, bank:'BAI', name:'BAI Morro Bento', address:'Edifício Kiguari, Morro Bento', lat:-8.9560, lng:13.2010, status:'sem-dinheiro', updated:'há 1h 10min', horario:'24h' },
  { id:41, bank:'BAI', name:'BAI Cassenda', address:'Rua da Cassenda, Sambizanga', lat:-8.8090, lng:13.2630, status:'dinheiro', updated:'há 6 min', horario:'08h-22h' },
  { id:42, bank:'Atlântico', name:'Atlântico Kilamba', address:'Rua 25, Centralidade do Kilamba', lat:-8.9890, lng:13.1750, status:'dinheiro', updated:'há 18 min', horario:'24h' },
  { id:43, bank:'Atlântico', name:'Atlântico Golf', address:'Rua do Golf, Rangel', lat:-8.8620, lng:13.2570, status:'papel', updated:'há 50 min', horario:'08h-20h' },
  { id:44, bank:'Atlântico', name:'Atlântico Prenda', address:'Bairro Prenda, Rua Principal', lat:-8.8070, lng:13.2590, status:'dinheiro-papel', updated:'há 22 min', horario:'24h' },
  { id:45, bank:'BancSol', name:'BancSol Marçal', address:'Bairro Marçal, Ingombota', lat:-8.8330, lng:13.2560, status:'dinheiro', updated:'há 14 min', horario:'24h' },
  { id:46, bank:'BancSol', name:'BancSol São Paulo', address:'Rua de São Paulo, Luanda', lat:-8.8150, lng:13.2430, status:'sem-dinheiro', updated:'há 3h', horario:'08h-22h' },
  { id:47, bank:'BancSol', name:'BancSol Rocha Pinto', address:'Bairro Rocha Pinto, Rangel', lat:-8.8480, lng:13.2860, status:'dinheiro-papel', updated:'há 28 min', horario:'24h' },
  { id:48, bank:'Keve', name:'Keve Kilamba', address:'Bloco 11, Centralidade do Kilamba', lat:-8.9950, lng:13.1800, status:'dinheiro', updated:'há 9 min', horario:'24h' },
  { id:49, bank:'Keve', name:'Keve Camama', address:'Estrada da Camama, Belas', lat:-8.9770, lng:13.2120, status:'quebrado', updated:'há 4h', horario:'08h-20h' },
  { id:50, bank:'Keve', name:'Keve Prenda', address:'Rua da Prenda, Sambizanga', lat:-8.8100, lng:13.2550, status:'dinheiro-papel', updated:'há 35 min', horario:'24h' },
  { id:51, bank:'Standard', name:'Standard Belas', address:'Belas Business Park, Talatona', lat:-8.9440, lng:13.1780, status:'dinheiro', updated:'há 4 min', horario:'24h' },
  { id:52, bank:'Standard', name:'Standard Kilamba', address:'Centralidade do Kilamba', lat:-8.9880, lng:13.1840, status:'dinheiro-papel', updated:'há 16 min', horario:'09h-21h' },
  { id:53, bank:'BMA', name:'BMA Prenda', address:'Bairro da Prenda, Rua 5', lat:-8.8060, lng:13.2540, status:'sem-dinheiro', updated:'há 55 min', horario:'24h' },
  { id:54, bank:'BMA', name:'BMA São Paulo', address:'Rua de São Paulo, Luanda', lat:-8.8180, lng:13.2440, status:'dinheiro', updated:'há 11 min', horario:'24h' },
  { id:55, bank:'Caixa', name:'Caixa Kilamba', address:'Centralidade do Kilamba, Bloco 5', lat:-8.9910, lng:13.1740, status:'dinheiro-papel', updated:'há 7 min', horario:'24h' },
  { id:56, bank:'Caixa', name:'Caixa Sequele', address:'Centralidade do Sequele', lat:-8.9790, lng:13.3520, status:'dinheiro', updated:'há 25 min', horario:'08h-20h' },
  { id:57, bank:'Atlântico', name:'Atlântico Futungo', address:'Futungo de Belas, Belas', lat:-8.8850, lng:13.1700, status:'dinheiro', updated:'há 13 min', horario:'24h' },
  { id:58, bank:'BFA', name:'BFA Corimba', address:'Estrada da Corimba, Belas', lat:-8.9020, lng:13.1740, status:'papel', updated:'há 1h 30min', horario:'08h-20h' },
  { id:59, bank:'BAI', name:'BAI Corimba', address:'Rua da Corimba, Belas', lat:-8.9080, lng:13.1680, status:'dinheiro', updated:'há 20 min', horario:'24h' },
  { id:60, bank:'BIC', name:'BIC Futungo', address:'Futungo de Belas, Belas', lat:-8.8800, lng:13.1760, status:'sem-dinheiro', updated:'há 45 min', horario:'08h-22h' },
];

let map, markers = {}, activeFilter = 'all', activeBank = null, selectedAtm = null;
let currentSort = 'az', userLocation = null, reportAtmId = null, reportSelection = null;
let legendVisible = true, userMarker = null, searchTimeout = null, routeControl = null, routeLine = null;

function debounce(fn, ms) {
  return function(...args) { clearTimeout(searchTimeout); searchTimeout = setTimeout(() => fn.apply(this, args), ms); };
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('reportModal');
    if (modal.classList.contains('open')) closeModal();
    else if (selectedAtm) closeDetail();
  }
});

function openSidebar() {
  document.querySelector('.sidebar').classList.add('open');
  const o = document.querySelector('.sidebar-overlay');
  if (o) o.classList.add('open');
}

function closeSidebar() {
  document.querySelector('.sidebar').classList.remove('open');
  const o = document.querySelector('.sidebar-overlay');
  if (o) o.classList.remove('open');
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('sidebar-overlay')) {
    closeSidebar();
  }
});

document.addEventListener('click', e => {
  const handle = e.target.closest('.sidebar-handle');
  if (handle) {
    const s = document.querySelector('.sidebar');
    if (s.classList.contains('open')) closeSidebar();
    else openSidebar();
  }
});

function initMap() {
  map = L.map('map', { center: [-8.836, 13.234], zoom: 13, zoomControl: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '©CartoDB', maxZoom: 19 }).addTo(map);
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  ATM_DATA.forEach(atm => addMarker(atm));
  updateStats();
  renderBankChips();
  renderList();
  if (window.innerWidth < 768) { legendVisible = false; document.getElementById('legend').style.display = 'none'; }
}

function getMarkerIcon(atm) {
  const s = STATUSES[atm.status];
  const div = document.createElement('div');
  div.className = `atm-marker m-${atm.status}`;
  div.style.background = s.color + 'dd';
  div.style.borderColor = s.color;
  div.textContent = atm.bank.substring(0,2);
  return L.divIcon({ html: div.outerHTML, className: '', iconSize: [30, 30], iconAnchor: [15, 15] });
}

function addMarker(atm) {
  const marker = L.marker([atm.lat, atm.lng], { icon: getMarkerIcon(atm) }).addTo(map).on('click', () => openDetail(atm));
  markers[atm.id] = marker;
}

function renderList() {
  const raw = document.getElementById('searchInput').value;
  const search = raw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let data = ATM_DATA.filter(a => {
    const mf = activeFilter === 'all' || a.status === activeFilter;
    const mb = !activeBank || a.bank === activeBank;
    const ms = !search || a.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(search) ||
      a.address.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(search);
    return mf && mb && ms;
  });

  if (currentSort === 'az') data.sort((a,b) => a.name.localeCompare(b.name));
  else if (currentSort === 'status') {
    const ord = ['dinheiro-papel','dinheiro','papel','sem-dinheiro','quebrado'];
    data.sort((a,b) => ord.indexOf(a.status) - ord.indexOf(b.status));
  }

  if (userLocation) {
    data.forEach(a => { a._dist = Math.sqrt((a.lat-userLocation.lat)**2 + (a.lng-userLocation.lng)**2) * 111; });
    if (currentSort === 'dist') data.sort((a,b) => a._dist - b._dist);
  }

  document.getElementById('visibleCount').textContent = data.length;

  const list = document.getElementById('atmList');
  if (!data.length) {
    list.innerHTML = '<div style="text-align:center;padding:36px 16px;color:var(--muted);font-size:13px;">Nenhum ATM encontrado</div>';
    ATM_DATA.forEach(a => { if (markers[a.id]) map.removeLayer(markers[a.id]); });
    return;
  }

  list.innerHTML = data.map(atm => {
    const s = STATUSES[atm.status];
    const dist = atm._dist ? `${atm._dist.toFixed(1)} km` : '';
    return `<div class="atm-card ${selectedAtm?.id === atm.id ? 'selected' : ''}" onclick="openDetail(atmById(${atm.id})); focusMarker(${atm.id})">
      <div class="atm-card-header">
        <span class="bank-badge">${atm.bank}</span>
        <span style="font-size:11px;color:var(--muted);margin-left:auto">${atm.updated}</span>
      </div>
      <div class="atm-name">${atm.name}</div>
      <div class="atm-address">
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${atm.address}
      </div>
      <div class="atm-meta">
        <span class="status-indicator"><span class="dot" style="background:${s.color}"></span><span class="label">${s.label}</span></span>
        ${dist ? `<span class="dist-tag">${I.pin} ${dist}</span>` : ''}
      </div>
    </div>`;
  }).join('');

  ATM_DATA.forEach(a => {
    const v = data.find(d => d.id === a.id);
    if (markers[a.id]) { if (v) map.addLayer(markers[a.id]); else map.removeLayer(markers[a.id]); }
  });
}

function atmById(id) { return ATM_DATA.find(a => a.id === id); }
function focusMarker(id) { const a = atmById(id); if (a) map.flyTo([a.lat, a.lng], 16, { duration: 0.8 }); }

function setFilter(f, el) {
  activeFilter = f;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  if (selectedAtm) closeDetail();
  renderList();
}

function renderBankChips() {
  const banks = [...new Set(ATM_DATA.map(a => a.bank))];
  document.getElementById('bankChips').innerHTML = banks.map(b =>
    `<button class="bank-chip ${activeBank === b ? 'active' : ''}" onclick="toggleBank('${b}')">${b}</button>`
  ).join('');
}

function toggleBank(bank) {
  activeBank = activeBank === bank ? null : bank;
  renderBankChips();
  if (selectedAtm) closeDetail();
  renderList();
}

function openDetail(atm) {
  selectedAtm = atm;
  clearRoute();
  if (window.innerWidth <= 768) { closeSidebar(); }
  const s = STATUSES[atm.status];
  const hasMoney = ['dinheiro','dinheiro-papel'].includes(atm.status);
  const hasPaper = ['papel','dinheiro-papel'].includes(atm.status);
  const isBroken = atm.status === 'quebrado';

  document.getElementById('panelContent').innerHTML = `
    <div class="panel-header">
      <div>
        <div class="panel-badge"><span class="bank-badge">${atm.bank}</span></div>
        <div class="panel-name">${atm.name}</div>
        <div class="panel-address">
          <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${atm.address}
        </div>
      </div>
      <button class="panel-close" onclick="closeDetail()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>

    <div class="panel-info">
      <div class="panel-info-item"><span class="ico">${hasMoney ? I.dollar : I.x}</span> ${hasMoney ? 'Com dinheiro' : 'Sem dinheiro'}</div>
      <div class="panel-info-item"><span class="ico">${hasPaper ? I.file : I.x}</span> ${hasPaper ? 'Papel disp.' : 'Sem papel'}</div>
      <div class="panel-info-item"><span class="ico">${!isBroken ? I.check : I.wrench}</span> ${!isBroken ? 'Operacional' : 'Avariado'}</div>
    </div>

    <div class="panel-grid">
      <div class="grid-cell"><div class="grid-label">Horário</div><div class="grid-value panel-value">${I.clock} ${atm.horario}</div></div>
      <div class="grid-cell"><div class="grid-label">Actualização</div><div class="grid-value panel-value">${I.refresh} ${atm.updated}</div></div>
      <div class="grid-cell"><div class="grid-label">Estado</div><div class="grid-value" style="color:${s.color}">${s.label}</div></div>
      <div class="grid-cell"><div class="grid-label">Rede</div><div class="grid-value">Multicaixa</div></div>
    </div>

    <div class="panel-actions">
      <button class="action-btn" onclick="openReport(${atm.id})">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Reportar
      </button>
      <button class="action-btn primary" onclick="getDirections(${atm.lat}, ${atm.lng}, '${atm.name}')">
        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        Ir para aqui
      </button>
    </div>`;

  document.getElementById('detailPanel').classList.add('open');
  renderList();
}

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('open');
  selectedAtm = null;
  renderList();
}

function updateStats() {
  document.getElementById('count-operational').textContent = ATM_DATA.filter(a => ['dinheiro','dinheiro-papel'].includes(a.status)).length;
  document.getElementById('count-sem').textContent = ATM_DATA.filter(a => a.status === 'sem-dinheiro').length;
  document.getElementById('count-quebrado').textContent = ATM_DATA.filter(a => a.status === 'quebrado').length;
}

function getLocation() {
  const btn = document.getElementById('locateBtn');
  btn.classList.add('locating');
  showToast(I.crosshair, 'A obter localização...');
  if (!navigator.geolocation) { showToast(I.x, 'Geolocalização não suportada'); btn.classList.remove('locating'); return; }
  navigator.geolocation.getCurrentPosition(
    pos => {
      userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      if (userMarker) map.removeLayer(userMarker);
      const icon = L.divIcon({ html: '<div class="my-location-marker"></div>', className: '', iconSize: [18,18], iconAnchor: [9,9] });
      userMarker = L.marker([userLocation.lat, userLocation.lng], { icon }).addTo(map).bindPopup(`<b>${I.pin} A sua localização</b>`).openPopup();
      map.flyTo([userLocation.lat, userLocation.lng], 14, { duration: 1.2 });
      btn.classList.remove('locating');
      showToast(I.check, 'Localização obtida');
      currentSort = 'dist';
      document.getElementById('sortLabel').textContent = 'Próximo';
      renderList();
    },
    err => {
      btn.classList.remove('locating');
      userLocation = { lat: -8.836, lng: 13.234 };
      showToast(I.pin, 'A usar localização simulada: Luanda Centro');
      currentSort = 'dist';
      document.getElementById('sortLabel').textContent = 'Próximo';
      renderList();
    }
  );
}

function showToast(iconSvg, text) {
  const t = document.getElementById('toast');
  document.getElementById('toastIcon').innerHTML = iconSvg;
  document.getElementById('toastText').textContent = text;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

function toggleSort() {
  const opts = userLocation ? ['az','status','dist'] : ['az','status'];
  const labels = { az: 'A-Z', status: 'Estado', dist: 'Próximo' };
  const idx = opts.indexOf(currentSort);
  currentSort = opts[(idx+1) % opts.length];
  document.getElementById('sortLabel').textContent = labels[currentSort];
  renderList();
}

function toggleLegend() {
  legendVisible = !legendVisible;
  document.getElementById('legend').style.display = legendVisible ? 'block' : 'none';
}

function clearRoute() {
  if (routeControl) {
    map.removeControl(routeControl);
    routeControl = null;
  }
  if (routeLine) { map.removeLayer(routeLine); routeLine = null; }
  document.getElementById('routeInfo').style.display = 'none';
  document.getElementById('gmapsLink').style.display = 'none';
}

function getDirections(lat, lng, atmName) {
  if (userLocation) {
    buildRoute(userLocation, lat, lng, atmName);
    return;
  }
  getLocation();
  showToast(I.crosshair, 'A obter localização para criar rota...');
  const check = setInterval(() => {
    if (userLocation) {
      clearInterval(check);
      buildRoute(userLocation, lat, lng, atmName);
    }
  }, 300);
  setTimeout(() => clearInterval(check), 10000);
}

function buildRoute(origin, destLat, destLng, atmName) {
  clearRoute();
  closeDetail();

  const dest = L.latLng(destLat, destLng);

  routeControl = L.Routing.control({
    waypoints: [L.latLng(origin.lat, origin.lng), dest],
    position: 'topleft',
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    lineOptions: { styles: [{ color: '#3b82f6', opacity: 0.8, weight: 4 }] },
    createMarker: () => null,
    router: L.Routing.osrmv1({
      serviceUrl: 'https://routing.openstreetmap.de/routed-car/',
      profile: 'driving',
      language: 'pt'
    })
  }).addTo(map);

  routeControl.on('routesfound', e => {
    const route = e.routes[0];
    const km = (route.summary.totalDistance / 1000).toFixed(1);
    const min = Math.round(route.summary.totalTime / 60);

    document.getElementById('routeDist').textContent = `${km} km`;
    document.getElementById('routeTime').textContent = `${min} min`;
    document.getElementById('routeEnd').textContent = atmName || 'ATM';
    document.getElementById('routeInfo').style.display = 'flex';

    const gmapsLink = document.getElementById('gmapsLink');
    gmapsLink.href = `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${destLat},${destLng}`;
    gmapsLink.style.display = 'flex';

    const container = routeControl.getContainer();
    if (container) container.style.display = 'block';
  });

  routeControl.on('routingerror', e => {
    console.warn('OSRM routing failed, using fallback:', e);
    showToast(I.alert, 'Rota detalhada indisponível, a usar distância directa');
    fallbackRoute(origin, destLat, destLng, atmName);
  });

  setTimeout(() => {
    if (routeControl && !document.querySelector('.leaflet-routing-container')) {
      fallbackRoute(origin, destLat, destLng, atmName);
    }
  }, 10000);
}

function fallbackRoute(origin, destLat, destLng, atmName) {
  clearRoute();
  const R = 6371;
  const dLat = (destLat - origin.lat) * Math.PI / 180;
  const dLng = (destLng - origin.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(origin.lat * Math.PI / 180) * Math.cos(destLat * Math.PI / 180) * Math.sin(dLng/2)**2;
  const km = (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))).toFixed(1);

  routeLine = L.polyline([[origin.lat, origin.lng], [destLat, destLng]], {
    color: '#3b82f6', opacity: 0.5, weight: 3, dashArray: '8,8'
  }).addTo(map);
  map.fitBounds(routeLine.getBounds(), { padding: [50,50] });

  document.getElementById('routeDist').textContent = `${km} km`;
  document.getElementById('routeTime').textContent = '— min';
  document.getElementById('routeEnd').textContent = atmName || 'ATM';
  document.getElementById('routeInfo').style.display = 'flex';

  const gmapsLink = document.getElementById('gmapsLink');
  gmapsLink.href = `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${destLat},${destLng}`;
  gmapsLink.style.display = 'flex';

  L.marker([destLat, destLng], {
    icon: L.divIcon({
      html: '<div style="background:#3b82f6;color:white;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.4)">' + I.pin + '</div>',
      className: '', iconSize: [24,24], iconAnchor: [12,12]
    })
  }).addTo(map);
}

function openReport(atmId) {
  reportAtmId = atmId;
  reportSelection = null;
  const atm = atmById(atmId);
  document.getElementById('reportAtmName').textContent = `Actualizar estado: ${atm.name}`;
  document.querySelectorAll('.radio-opt').forEach(o => o.classList.remove('selected'));
  document.getElementById('reportModal').classList.add('open');
}

function selectReport(status, el) {
  reportSelection = status;
  document.querySelectorAll('.radio-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
}

function closeModal() { document.getElementById('reportModal').classList.remove('open'); }

function submitReport() {
  if (!reportSelection) return;
  const atm = atmById(reportAtmId);
  if (!atm) return;
  atm.status = reportSelection;
  atm.updated = 'agora mesmo';
  map.removeLayer(markers[atm.id]);
  addMarker(atm);
  closeModal();
  updateStats();
  renderList();
  if (selectedAtm?.id === atm.id) openDetail(atm);
  showToast(I.check, 'Relatório enviado! Obrigado.');
}

document.getElementById('searchInput').addEventListener('input', debounce(renderList, 300));

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelector('.sidebar').classList.remove('open');
  }
});

initMap();
