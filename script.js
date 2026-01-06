/* --- ★重要: GASの最新デプロイURLに書き換えてください --- */
const API_URL = "https://script.google.com/macros/s/AKfycby5VLs0rwSnZk8fah8jrb-iCI3HMpi7KxggEK_83QuX64K9kCB-BovDd2Nu0tHg3r3S/exec";
// ▼▼▼ ここにBase64コードを貼り付けます ▼▼▼

// 7階の画像（以前の画像コードをこの引用符の中に貼り付け）
const IMG_7F = "data:image/png;base64,ここに7階の長い文字コードを貼り付けてください"; 

// 6階の画像（新しい画像コードをこの引用符の中に貼り付け）
const IMG_6F = "data:image/png;base64,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";

// ▲▲▲ 貼り付けここまで ▲▲▲
const START_HOUR = 9;
const END_HOUR = 19;
// CSSの設定と合わせる（基準高さ）
const BASE_HOUR_HEIGHT = 50; 

let currentUser = null;
let masterData = { rooms: [], users: [], reservations: [], logs: [], groups: [] };
let selectedParticipantIds = new Set();
let originalParticipantIds = new Set();
let currentMapRoomId = null; 

window.onload = () => {
  document.getElementById('timeline-date').valueAsDate = new Date();
  document.getElementById('search-date').valueAsDate = new Date();
  document.getElementById('map-date').valueAsDate = new Date();
};

async function callAPI(params) {
  if(API_URL.indexOf("http") === -1) { alert("GASのURLを設定してください"); return; }
  document.getElementById('loading').style.display = 'flex';
  const options = { method: 'POST', body: JSON.stringify(params), headers: { 'Content-Type': 'text/plain;charset=utf-8' } };
  try {
    const res = await fetch(API_URL, options);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    document.getElementById('loading').style.display = 'none';
    if (json.status === 'error') { alert("システムエラー: " + json.message); return { status: 'error' }; }
    return json;
  } catch(e) {
    document.getElementById('loading').style.display = 'none';
    alert("通信エラー: " + e.message);
    return { status: 'error' };
  }
}

async function tryLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  if(!id || !pass) return;
  document.getElementById('loading').style.display = 'flex';
  
  const url = new URL(API_URL);
  url.searchParams.append('action', 'login');
  url.searchParams.append('userId', id);
  url.searchParams.append('password', pass);
  try {
    const res = await fetch(url.toString(), { method: 'GET', headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
    const json = await res.json();
    document.getElementById('loading').style.display = 'none';
    if (json.status === 'success') {
      currentUser = json.user;
      document.getElementById('display-user-name').innerText = currentUser.userName;
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('app-screen').style.display = 'flex'; 
      loadAllData();
    } else { alert("ログイン失敗: " + json.message); }
  } catch (e) {
    document.getElementById('loading').style.display = 'none';
    alert("通信エラー: " + e.message);
  }
}

function logout() { location.reload(); }

async function loadAllData() {
  document.getElementById('loading').style.display = 'flex';
  const url = new URL(API_URL);
  url.searchParams.append('action', 'getAllData');
  url.searchParams.append('_t', new Date().getTime()); 
  
  try {
    const res = await fetch(url.toString(), { method: 'GET', headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
    const json = await res.json();
    document.getElementById('loading').style.display = 'none';
    if (json.status === 'success') {
      masterData = json.data;
      initUI();
    } else { 
      alert("読込エラー: " + json.message); 
    }
  } catch(e) { 
    document.getElementById('loading').style.display = 'none'; 
  }
}

function initUI() {
  const searchSelect = document.getElementById('search-room-select');
  const currentSearchRoomId = searchSelect.value;

  renderTimeAxis('time-axis-all');
  renderTimeAxis('time-axis-single');
  renderTimeAxis('time-axis-map');
  
  const roomSelects = [document.getElementById('input-room'), searchSelect];
  roomSelects.forEach(sel => {
    sel.innerHTML = "";
    masterData.rooms.forEach(r => {
      const op = document.createElement('option');
      op.value = r.roomId;
      op.innerText = r.roomName;
      sel.appendChild(op);
    });
  });

  if (currentSearchRoomId) {
      searchSelect.value = currentSearchRoomId;
  }

  renderVerticalTimeline('all');
  renderLogs();
  
  if (document.getElementById('view-room-search').classList.contains('active')) {
      renderRoomSearch();
  }
  
  renderGroupButtons();
}

function renderGroupButtons() {
  const container = document.getElementById('group-buttons-area');
  container.innerHTML = "";
  if (!masterData.groups || masterData.groups.length === 0) return;
  masterData.groups.forEach(grp => {
      const btn = document.createElement('div');
      btn.className = 'group-chip';
      btn.innerText = `+ ${grp.groupName}`;
      btn.onclick = () => selectGroupMembers(grp.memberIds);
      container.appendChild(btn);
  });
}

function selectGroupMembers(idsStr) {
  if (!idsStr) return;
  const rawIds = idsStr.split(',');
  const targetUsers = [];
  rawIds.forEach(rawId => {
      const cleanIdStr = rawId.trim();
      const user = masterData.users.find(u => String(u.userId) === cleanIdStr);
      if (user) { targetUsers.push(user); }
  });
  if (targetUsers.length === 0) return;

  const isAllSelected = targetUsers.every(u => selectedParticipantIds.has(String(u.userId)));
  if (isAllSelected) {
      targetUsers.forEach(u => selectedParticipantIds.delete(String(u.userId)));
  } else {
      targetUsers.forEach(u => selectedParticipantIds.add(String(u.userId)));
  }
  renderShuttleLists(document.getElementById('shuttle-search-input').value);
}

function renderShuttleLists(filterText = "") {
  const leftList = document.getElementById('list-candidates');
  const rightList = document.getElementById('list-selected');
  leftList.innerHTML = "";
  rightList.innerHTML = "";

  masterData.users.forEach(u => {
      if (!u.userId) return;
      const uidStr = String(u.userId);

      if (selectedParticipantIds.has(uidStr)) {
          const div = document.createElement('div');
          div.className = 'shuttle-item icon-remove';
          div.innerText = u.userName;
          div.onclick = () => {
              selectedParticipantIds.delete(uidStr);
              renderShuttleLists(document.getElementById('shuttle-search-input').value);
          };
          rightList.appendChild(div);
      } else {
          if (filterText === "" || u.userName.toLowerCase().includes(filterText.toLowerCase())) {
              const div = document.createElement('div');
              div.className = 'shuttle-item icon-add';
              div.innerText = u.userName;
              div.onclick = () => {
                  selectedParticipantIds.add(uidStr);
                  renderShuttleLists(document.getElementById('shuttle-search-input').value);
              };
              leftList.appendChild(div);
          }
      }
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  
  document.getElementById('view-' + tabName).classList.add('active');
  
  const tabs = document.querySelectorAll('.nav-item');
  // インデックスが変わる可能性があるので、クラス名やロジックで判定したほうが安全ですが
  // 簡易的に以下のように変更します
  if(tabName==='map-view') tabs[0].classList.add('active'); // 新規追加
  if(tabName==='timeline') tabs[1].classList.add('active');
  if(tabName==='room-search') { tabs[2].classList.add('active'); renderRoomSearch(); }
  if(tabName==='logs') tabs[3].classList.add('active');
}

let hourRowHeights = {}; 

function drawTimeAxis(containerId) {
  const container = document.getElementById(containerId);
  const children = Array.from(container.children);
  children.forEach(child => {
      if(!child.classList.contains('time-axis-header')) container.removeChild(child);
  });

  for (let i = START_HOUR; i < END_HOUR; i++) {
      const height = hourRowHeights[i] || BASE_HOUR_HEIGHT;
      const div = document.createElement('div');
      div.className = 'time-label';
      div.innerText = i + ":00";
      div.style.height = height + "px";
      container.appendChild(div);
  }
}

function renderTimeAxis(containerId) {
    // 初期化時は何もしない
}

// ▼▼▼ 修正版 renderVerticalTimeline (script.js) ▼▼▼
function renderVerticalTimeline(mode) {
  let container, dateInputId, targetRooms;
  let timeAxisId;

  if (mode === 'all') {
      container = document.getElementById('rooms-container-all');
      dateInputId = 'timeline-date';
      timeAxisId = 'time-axis-all';
      targetRooms = masterData.rooms;
   } else if (mode === 'map') { // ★ここを追加
      container = document.getElementById('rooms-container-map');
      dateInputId = 'map-date';
      timeAxisId = 'time-axis-map';
      // マップで選択中の部屋IDを使う
      targetRooms = masterData.rooms.filter(r => String(r.roomId) === String(currentMapRoomId));
      container.style.width = "100%";
  }  else {
      container = document.getElementById('rooms-container-single');
      dateInputId = 'search-date';
      timeAxisId = 'time-axis-single';
      const selectedId = document.getElementById('search-room-select').value;
      targetRooms = masterData.rooms.filter(r => r.roomId === selectedId);
      container.style.width = "100%"; 
  }
  
  if (!targetRooms || targetRooms.length === 0) {
      container.innerHTML = "<div style='padding:20px;'>部屋データが見つかりません。</div>";
      return;
  }

  const rawDateVal = document.getElementById(dateInputId).value; 
  const targetDateNum = formatDateToNum(new Date(rawDateVal)); 
  
  // 1. 高さ計算配列を初期化
  for(let h=START_HOUR; h<END_HOUR; h++) hourRowHeights[h] = BASE_HOUR_HEIGHT;

  // ▼▼▼ 【追加修正】画面幅に合わせて1行の文字数を自動計算する ▼▼▼
  // コンテナの幅を取得（非表示などで0の場合はウィンドウ幅を使う）
  const totalWidth = container.clientWidth > 0 ? container.clientWidth : window.innerWidth;
  const colCount = targetRooms.length > 0 ? targetRooms.length : 1;
  
  // 1列あたりの幅 (CSSの min-width: 120px を考慮しつつ、平均幅を算出)
  let colWidth = Math.floor(totalWidth / colCount);
  if (colWidth < 120) colWidth = 120;

  // 1行に入る文字数の概算
  // フォントサイズ11px + 余白等を考慮して、1文字あたり約12px幅と仮定
  // (列幅 - 左右パディング約10px) / 12px
  let calculatedChars = Math.floor((colWidth - 10) / 12);
  if (calculatedChars < 12) calculatedChars = 12; // 最低でも12文字基準は維持

  // この値を後続の計算で使用
  const DYNAMIC_CHARS_PER_LINE = calculatedChars;
  // ▲▲▲ 追加ここまで ▲▲▲

  const allRelevantReservations = masterData.reservations.filter(res => {
      const startTimeVal = getVal(res, ['startTime', 'start_time', '開始日時', '開始', 'Start']);
      if (!startTimeVal) return false;

      const rId = getVal(res, ['resourceId', 'roomId', 'room_id', 'resource_id', '部屋ID', '部屋']);
      const isTargetRoom = targetRooms.some(r => String(r.roomId) === String(rId));
      const resDateNum = formatDateToNum(new Date(startTimeVal));
      
      res._startTime = startTimeVal;
      res._endTime = getVal(res, ['endTime', 'end_time', '終了日時', '終了', 'End']);
      res._resourceId = rId;

      return isTargetRoom && (resDateNum === targetDateNum);
  });

  // 2. 高さ自動計算
  allRelevantReservations.forEach(res => {
      const start = new Date(res._startTime);
      const sHour = start.getHours();
      
      let displayText = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';
      let namesText = "";
      
      const pIdsStr = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
      if (pIdsStr) {
          const resIds = String(pIdsStr).split(',').map(id => id.trim()).sort();
          const matchedGroup = masterData.groups.find(grp => {
              if (!grp.memberIds) return false;
              const grpIds = grp.memberIds.split(',').map(id => id.trim()).sort();
              return JSON.stringify(resIds) === JSON.stringify(grpIds);
          });
          if (matchedGroup) {
              namesText = matchedGroup.groupName;
          } else {
              const names = resIds.map(id => {
                  const u = masterData.users.find(user => {
                      const uIdStr = String(user.userId);
                      return uIdStr === id || (!isNaN(uIdStr) && !isNaN(id) && Number(uIdStr) === Number(id));
                  });
                  return u ? u.userName : "";
              }).filter(n => n);
              namesText = names.join(', ');
          }
      }

      // --- 【修正】文字数見積もり ---
      // 自動計算した文字数を使用する（これで幅広のときは行数が減り、余白が消えます）
      const CHARS_PER_LINE = DYNAMIC_CHARS_PER_LINE; 
      
      const titleLines = Math.ceil(displayText.length / CHARS_PER_LINE) || 1;
      const timeLines = 1; // 時間表示
      const nameLines = namesText ? Math.ceil(namesText.length / CHARS_PER_LINE) : 0;
      
      // 合計行数
      const totalLines = titleLines + timeLines + nameLines; 
      
      // --- 高さ計算 ---
      const contentHeightPx = (totalLines * 15) + 10;

      // --- 時間比率による拡張 ---
      let durationMin = (new Date(res._endTime) - new Date(res._startTime)) / 60000;
      if (durationMin < 15) durationMin = 15;
      
      const ratio = durationMin / 60;
      const requiredHourHeight = contentHeightPx / ratio;
      
      if (sHour >= START_HOUR && sHour < END_HOUR) {
          if (requiredHourHeight > hourRowHeights[sHour]) {
              hourRowHeights[sHour] = requiredHourHeight;
          }
      }
  });

  drawTimeAxis(timeAxisId);
  container.innerHTML = "";
  
  // 3. 各時間のY座標（開始位置）を計算
  const hourTops = {};
  let currentTop = 0;
  for(let h=START_HOUR; h<END_HOUR; h++) {
      hourTops[h] = currentTop;
      currentTop += hourRowHeights[h];
  }
  hourTops[END_HOUR] = currentTop;

  // 4. 描画処理
  targetRooms.forEach(room => {
    const col = document.createElement('div');
    col.className = 'room-col';
    if(mode === 'single') col.style.width = "100%"; 
    const header = document.createElement('div');
    header.className = 'room-header';
    header.innerText = room.roomName;
    col.appendChild(header);
    
    const body = document.createElement('div');
    body.className = 'room-grid-body';
    body.style.height = currentTop + "px"; 

    // グリッド線
    for(let h=START_HOUR; h<END_HOUR; h++) {
        const slot = document.createElement('div');
        slot.className = 'grid-slot';
        slot.style.height = hourRowHeights[h] + "px";
        body.appendChild(slot);
    }
    
    body.onclick = (e) => {
       if (e.target.closest('.v-booking-bar')) return;
       if(e.target.classList.contains('grid-slot') || e.target === body) {
           const rect = body.getBoundingClientRect();
           const clickY = e.clientY - rect.top;
           let clickedHour = -1;
           for(let h=START_HOUR; h<END_HOUR; h++) {
               if (clickY >= hourTops[h] && clickY < hourTops[h+1]) {
                   clickedHour = h;
                   break;
               }
           }
           if(clickedHour !== -1) openModal(null, room.roomId, clickedHour);
       }
    };

    const reservations = allRelevantReservations.filter(res => String(res._resourceId) === String(room.roomId));
    
    reservations.forEach(res => {
      const start = new Date(res._startTime);
      const end = new Date(res._endTime);
      
      let sHour = start.getHours();
      let sMin = start.getMinutes();
      let eHour = end.getHours();
      let eMin = end.getMinutes();

      if (sHour < START_HOUR) { sHour = START_HOUR; sMin = 0; }
      if (eHour >= END_HOUR) { eHour = END_HOUR; eMin = 0; }
      
      if (sHour < END_HOUR && (sHour > START_HOUR || (sHour === START_HOUR && sMin >= 0))) {
          
          const topPx = hourTops[sHour] + (hourRowHeights[sHour] * (sMin / 60));
          
          let bottomPx = 0;
          if (eHour === END_HOUR) {
              bottomPx = hourTops[END_HOUR];
          } else {
              bottomPx = hourTops[eHour] + (hourRowHeights[eHour] * (eMin / 60));
          }
          
          const heightPx = bottomPx - topPx;

          const bar = document.createElement('div');
          bar.className = `v-booking-bar type-${room.type}`;
          
          bar.style.top = (topPx + 1) + "px";
          // 枠からはみ出さないように高さを微調整 (-2px)
          bar.style.height = (heightPx - 2) + "px"; 
          
          let displayTitle = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';
          let pNames = "";
          
          const pIdsStr = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
          if (pIdsStr) {
              const resIds = String(pIdsStr).split(',').map(id => id.trim()).sort();
              const matchedGroup = masterData.groups.find(grp => {
                  if (!grp.memberIds) return false;
                  const grpIds = grp.memberIds.split(',').map(id => id.trim()).sort();
                  return JSON.stringify(resIds) === JSON.stringify(grpIds);
              });
              if (matchedGroup) {
                  pNames = `(${matchedGroup.groupName})`;
              } else {
                  const names = resIds.map(id => {
                      // 【描画時もID照合を強化】
                      const u = masterData.users.find(user => {
                          const uIdStr = String(user.userId);
                          return uIdStr === id || (!isNaN(uIdStr) && !isNaN(id) && Number(uIdStr) === Number(id));
                      });
                      return u ? u.userName : "";
                  }).filter(n => n);
                  pNames = `(${names.join(', ')})`;
              }
          }

          bar.innerHTML = `
            <span style="font-weight:bold;">${pad(start.getHours())}:${pad(start.getMinutes())}</span><br>
            <span style="font-weight:bold;">${displayTitle}</span>
            ${pNames ? `<br><span style="font-size:0.7rem; opacity:0.9;">${pNames}</span>` : ''}
          `;
          
          bar.onclick = (e) => { 
              e.stopPropagation(); 
              openModal(res); 
          };
          body.appendChild(bar);
      }
    });
    col.appendChild(body);
    container.appendChild(col);
  });
}
function formatDateToNum(d) {
  if (isNaN(d.getTime())) return ""; 
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function renderRoomSearch() { renderVerticalTimeline('single'); }

function changeDate(days, inputId) {
  const input = document.getElementById(inputId);
  const d = new Date(input.value);
  d.setDate(d.getDate() + days);
  input.valueAsDate = d;
  if(inputId === 'timeline-date') renderVerticalTimeline('all');
    else if(inputId === 'map-date') renderVerticalTimeline('map');
  else renderRoomSearch();
}

// ▼▼▼ script.js の renderLogs を修正 ▼▼▼

function renderLogs() {
  const tbody = document.getElementById('log-tbody');
  tbody.innerHTML = "";
  
  if (!masterData.logs || masterData.logs.length === 0) return;

  const logs = [...masterData.logs].reverse().slice(0, 20);
  
  // 【修正】ID解決ロジック（型変換とトリムを強化）
  const resolveName = (id) => {
    const targetIdStr = String(id).trim(); // 検索対象を文字列化してトリム
    
    const u = masterData.users.find(user => {
        const uIdStr = String(user.userId).trim();
        // 文字列として一致、または数値として一致を確認
        return uIdStr === targetIdStr || (!isNaN(uIdStr) && !isNaN(targetIdStr) && Number(uIdStr) === Number(targetIdStr));
    });
    return u ? u.userName : id;
  };

  logs.forEach(log => {
    const tr = document.createElement('tr');
    
    let rawResName = log.resourceName || '-';
    let roomDisplay = rawResName;
    let detailLines = "";

    if (rawResName.includes('\n')) {
        const parts = rawResName.split('\n');
        const roomIdPart = parts[0].trim();
        detailLines = parts.slice(1).join('<br>');
        
        const roomObj = masterData.rooms.find(r => String(r.roomId) === String(roomIdPart));
        roomDisplay = roomObj ? roomObj.roomName : roomIdPart;
    } else {
        const roomObj = masterData.rooms.find(r => String(r.roomId) === String(rawResName));
        if (roomObj) roomDisplay = roomObj.roomName;
    }

    if (detailLines) {
        // 数字の羅列を見つけて名前変換（IDの前後に余計な文字があっても対応）
        detailLines = detailLines.replace(/(\d+)/g, (match) => {
            return resolveName(match);
        });
    }

    let timeDisplay = log.timeRange || '';
    if (timeDisplay.includes(' - ')) {
        const parts = timeDisplay.split(' - ');
        if (parts[0] && parts[1]) {
            const sDate = new Date(parts[0]);
            const eDate = new Date(parts[1]);
            timeDisplay = `${sDate.getMonth()+1}/${sDate.getDate()} ${pad(sDate.getHours())}:${pad(sDate.getMinutes())} - ${pad(eDate.getHours())}:${pad(eDate.getMinutes())}`;
        }
    }

    const detailHtml = `<strong>${roomDisplay}</strong>${detailLines ? `<br><span style="font-size:0.85em; color:#666;">${detailLines}</span>` : ''}<br><span style="font-size:0.8em; color:#999;">${timeDisplay}</span>`;

    tr.innerHTML = `
      <td>${formatDate(new Date(log.timestamp))}</td>
      <td>${log.operatorName}</td>
      <td>${log.action}</td>
      <td>${detailHtml}</td>
    `;
    tbody.appendChild(tr);
  });
}

function getVal(obj, keys) {
    if(!obj) return "";
    for (const k of keys) {
        if (obj[k] !== undefined && obj[k] !== null) {
            return obj[k];
        }
    }
    return ""; 
}

// ▼▼▼ 修正版 openModal (script.js) ▼▼▼
function openModal(res = null, defaultRoomId = null, clickHour = null) {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'flex';
  
  selectedParticipantIds.clear();
  originalParticipantIds.clear(); 
  document.getElementById('shuttle-search-input').value = "";
  
  if (res) {
    document.getElementById('modal-title').innerText = "予約編集";
    document.getElementById('edit-res-id').value = res.id;
    
    // 部屋IDの解決（_resourceIdプロパティがあればそれを優先）
    const rId = res._resourceId || res.resourceId || res.roomId; 
    document.getElementById('input-room').value = rId;

    // 日時のセット
    const startObj = new Date(res._startTime || res.startTime);
    const endObj = new Date(res._endTime || res.endTime);
    
    const y = startObj.getFullYear();
    const m = ('0' + (startObj.getMonth() + 1)).slice(-2);
    const d = ('0' + startObj.getDate()).slice(-2);
    document.getElementById('input-date').value = `${y}-${m}-${d}`;

    const sh = ('0' + startObj.getHours()).slice(-2);
    const sm = ('0' + startObj.getMinutes()).slice(-2);
    const eh = ('0' + endObj.getHours()).slice(-2);
    const em = ('0' + endObj.getMinutes()).slice(-2);
    document.getElementById('input-start').value = `${sh}:${sm}`;
    document.getElementById('input-end').value = `${eh}:${em}`;
    
    // タイトル・備考のセット
    const titleVal = getVal(res, ['title', 'subject', '件名', 'タイトル', '用件', 'name']);
    document.getElementById('input-title').value = titleVal;

    const noteVal = getVal(res, ['note', 'description', '備考', 'メモ', '詳細', 'body']);
    document.getElementById('input-note').value = noteVal;
    
    // 【修正箇所】参加者の読み込み（ID照合・変換ロジックを追加）
    const pIds = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
    if (pIds) {
        let idList = [];
        if (Array.isArray(pIds)) idList = pIds;
        else if (typeof pIds === 'string') idList = pIds.split(',');
        else if (typeof pIds === 'number') idList = [pIds];

        idList.forEach(rawId => { 
          if(rawId !== null && rawId !== undefined && String(rawId).trim() !== "") {
              const targetId = String(rawId).trim();
              
              // マスタから該当ユーザーを探す（数値・文字列の違いを吸収）
              const user = masterData.users.find(u => {
                  const uId = String(u.userId).trim();
                  return uId === targetId || (!isNaN(uId) && !isNaN(targetId) && Number(uId) === Number(targetId));
              });

              // マスタにいるなら「マスタ側の正しいID」を使う（これで "1" -> "001" に変換される）
              // いないならそのまま使う（削除されたユーザーなどのため）
              const finalId = user ? String(user.userId).trim() : targetId;

              selectedParticipantIds.add(finalId); 
              originalParticipantIds.add(finalId); 
          }
        });
    }
    document.getElementById('btn-delete').style.display = 'inline-block';

  } else {
    // 新規作成時の処理（変更なし）
    document.getElementById('modal-title').innerText = "新規予約";
    document.getElementById('edit-res-id').value = "";
    if(defaultRoomId) document.getElementById('input-room').value = defaultRoomId;
    
    let currentTabDate = "";
    const timelineDateInput = document.getElementById('timeline-date');
    const searchDateInput = document.getElementById('search-date');
    
    if(document.getElementById('view-timeline').classList.contains('active')) {
        currentTabDate = timelineDateInput.value;
    } else {
        currentTabDate = searchDateInput.value;
    }
    
    if(!currentTabDate) {
        const now = new Date();
        const y = now.getFullYear();
        const mm = ('0' + (now.getMonth() + 1)).slice(-2);
        const dd = ('0' + now.getDate()).slice(-2);
        currentTabDate = `${y}-${mm}-${dd}`;
    }
    document.getElementById('input-date').value = currentTabDate;

    const sHour = clickHour ? clickHour : 9;
    document.getElementById('input-start').value = `${pad(sHour)}:00`;
    document.getElementById('input-end').value = `${pad(sHour+1)}:00`;
    
    document.getElementById('input-title').value = "";
    document.getElementById('input-note').value = "";
    document.getElementById('btn-delete').style.display = 'none';
  }
  
  // リストを再描画して反映させる
  renderShuttleLists();
}

function closeModal() { document.getElementById('bookingModal').style.display = 'none'; }

async function saveBooking() {
  const id = document.getElementById('edit-res-id').value;
  const room = document.getElementById('input-room').value;
  const date = document.getElementById('input-date').value;
  const start = document.getElementById('input-start').value;
  const end = document.getElementById('input-end').value;
  const title = document.getElementById('input-title').value;
  
  let note = document.getElementById('input-note').value;
  
  if (start >= end) {
      alert("開始時間は終了時間より前に設定してください。");
      return;
  }

  if (id) {
      let addedNames = [];
      let removedNames = [];

      selectedParticipantIds.forEach(newId => {
          if (!originalParticipantIds.has(newId)) {
              const u = masterData.users.find(user => String(user.userId) === newId);
              if (u) addedNames.push(u.userName);
          }
      });

      originalParticipantIds.forEach(oldId => {
          if (!selectedParticipantIds.has(oldId)) {
              const u = masterData.users.find(user => String(user.userId) === oldId);
              if (u) removedNames.push(u.userName);
          }
      });

      if (addedNames.length > 0 || removedNames.length > 0) {
          let changeLog = "【変更履歴】";
          if (addedNames.length > 0) changeLog += " 追加: " + addedNames.join(", ");
          if (removedNames.length > 0) changeLog += " 削除: " + removedNames.join(", ");
          
          const now = new Date();
          const timeStr = `${now.getHours()}:${pad(now.getMinutes())}`;
          changeLog += ` (${timeStr})`;

          if (!note.includes(changeLog)) {
              note = note ? note + "\n" + changeLog : changeLog;
          }
      }
  }

  const dateSlash = date.replace(/-/g, '/');
  const startTime = `${dateSlash} ${start}`;
  const endTime = `${dateSlash} ${end}`;
  const pIds = Array.from(selectedParticipantIds).join(',');

  const action = id ? 'updateReservation' : 'createReservation';
  
  const params = {
    action: action,
    reservationId: id,
    resourceId: room,
    startTime: startTime,
    endTime: endTime,
    reserverId: currentUser.userId,
    operatorName: currentUser.userName,
    participantIds: pIds, 
    title: title,
    note: note 
  };

  const result = await callAPI(params);
  if(result.status === 'success') {
    alert("保存しました");
    closeModal();
    loadAllData();
  } else {
    alert("エラー: " + result.message);
  }
}

async function deleteBooking() {
  if(!confirm("削除しますか？")) return;
  const id = document.getElementById('edit-res-id').value;
  const params = {
    action: 'deleteReservation',
    reservationId: id,
    operatorId: currentUser.userId,
    operatorName: currentUser.userName
  };
  const result = await callAPI(params);
  if(result.status === 'success') {
    alert("削除しました");
    closeModal();
    loadAllData();
  } else {
    alert("エラー: " + result.message);
  }
}

function pad(n) { return n < 10 ? '0'+n : n; }
function formatDate(d) { return `${d.getMonth()+1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`; }
function getRoomName(id) { const r = masterData.rooms.find(x => x.roomId === id); return r ? r.roomName : id; }
// マップから部屋を選択したときの処理（書き換え）
function selectRoomFromMap(element) {
  const roomId = element.getAttribute('data-room-id');
  
  // マスタデータから部屋名を取得（日本語ID対応）
  const roomObj = masterData.rooms.find(r => String(r.roomId) === String(roomId));
  
  if (!roomObj) {
    alert("エラー: 指定された部屋ID (" + roomId + ") が見つかりません。");
    return;
  }

  // グローバル変数にセット
  currentMapRoomId = roomId;

  // 表示エリアをONにする
  document.getElementById('map-timeline-section').style.display = 'block';
  
  // 部屋名を表示
  document.getElementById('map-selected-room-name').innerText = roomObj.roomName;

  // タイムラインを描画 ('map'モードで呼び出し)
  renderVerticalTimeline('map');
  
  // スマホなどで見やすいように、少しスクロールする（オプション）
  document.getElementById('map-timeline-section').scrollIntoView({behavior: 'smooth'});
}
