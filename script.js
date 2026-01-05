/* --- ★重要: GASの最新デプロイURLに書き換えてください --- */
const API_URL = "https://script.google.com/macros/s/AKfycbzfIiqSlcddCxzaLBK2iEHnzhKrs_qix1wAt8YqkmHEwcO_yIhJCRO4kYnWdUUuwYlT/exec";

const START_HOUR = 9;
const END_HOUR = 19;
// CSSの設定と合わせる（基準高さ）
const BASE_HOUR_HEIGHT = 50; 

let currentUser = null;
let masterData = { rooms: [], users: [], reservations: [], logs: [], groups: [] };
let selectedParticipantIds = new Set();
let originalParticipantIds = new Set(); 

window.onload = () => {
  document.getElementById('timeline-date').valueAsDate = new Date();
  document.getElementById('search-date').valueAsDate = new Date();
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
  if(tabName==='timeline') tabs[0].classList.add('active');
  if(tabName==='room-search') { tabs[1].classList.add('active'); renderRoomSearch(); }
  if(tabName==='logs') tabs[2].classList.add('active');
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

// ▼▼▼ ズレ防止・高さ計算 修正版 renderVerticalTimeline ▼▼▼
function renderVerticalTimeline(mode) {
  let container, dateInputId, targetRooms;
  let timeAxisId;

  if (mode === 'all') {
      container = document.getElementById('rooms-container-all');
      dateInputId = 'timeline-date';
      timeAxisId = 'time-axis-all';
      targetRooms = masterData.rooms;
  } else {
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

  // 2. 高さ自動計算（CSSと数値を完全一致させる）
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
                  const u = masterData.users.find(user => String(user.userId) === id);
                  return u ? u.userName : "";
              }).filter(n => n);
              namesText = names.join(', ');
          }
      }

      // --- 文字数からの行数計算 (修正版: 10文字基準) ---
      const CHARS_PER_LINE = 14; 
      
      const titleLines = Math.ceil(displayText.length / CHARS_PER_LINE) || 1;
      const timeLines = 1; // 時間表示
      const nameLines = namesText ? Math.ceil(namesText.length / CHARS_PER_LINE) : 0;
      
      // 合計行数（余白として+1行追加）
      const totalLines = titleLines + timeLines + nameLines + 1;
      
      // 必要な高さ(px) = 行数 × 15px(CSSのline-height) + 8px(余白バッファ)
      const contentHeightPx = (totalLines * 15) + 10;

      // --- 時間比率による拡張 ---
      // 予約が30分(0.5時間)しかないのに中身が大きい場合、1時間の枠を倍に広げる必要がある
      let durationMin = (new Date(res._endTime) - new Date(res._startTime)) / 60000;
      if (durationMin < 15) durationMin = 15;
      
      // この予約が占める割合 (60分=1.0, 30分=0.5)
      const ratio = durationMin / 60;
      
      // 1時間枠として必要な高さ = 中身の高さ / 割合
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

    // グリッド線（JS計算の高さを使用）
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
          
          // 開始位置(px)
          const topPx = hourTops[sHour] + (hourRowHeights[sHour] * (sMin / 60));
          
          // 終了位置(px)
          let bottomPx = 0;
          if (eHour === END_HOUR) {
              bottomPx = hourTops[END_HOUR];
          } else {
              bottomPx = hourTops[eHour] + (hourRowHeights[eHour] * (eMin / 60));
          }
          
          const heightPx = bottomPx - topPx;

          const bar = document.createElement('div');
          bar.className = `v-booking-bar type-${room.type}`;
          
          // グリッド線と重ならないように位置微調整
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
                      const u = masterData.users.find(user => String(user.userId) === id);
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
  else renderRoomSearch();
}

function renderLogs() {
  const tbody = document.getElementById('log-tbody');
  tbody.innerHTML = "";
  const logs = [...masterData.logs].reverse().slice(0, 20);
  logs.forEach(log => {
    const tr = document.createElement('tr');
    const roomNameDisplay = getRoomName(log.resourceName) || log.resourceName || '-';
    let timeDisplay = log.timeRange || '';
    if (log.action === '更新') {
    } else if (timeDisplay.includes(' - ')) {
        const parts = timeDisplay.split(' - ');
        if (parts[0] && parts[1]) {
            const sDate = new Date(parts[0]);
            const eDate = new Date(parts[1]);
            timeDisplay = `${sDate.getMonth()+1}/${sDate.getDate()} ${pad(sDate.getHours())}:${pad(sDate.getMinutes())} - ${pad(eDate.getHours())}:${pad(eDate.getMinutes())}`;
        }
    }
    tr.innerHTML = `<td>${formatDate(new Date(log.timestamp))}</td><td>${log.operatorName}</td><td>${log.action}</td><td><strong>${roomNameDisplay}</strong><br><span style="font-size:0.85em; color:#666;">${timeDisplay}</span></td>`;
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

function openModal(res = null, defaultRoomId = null, clickHour = null) {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'flex';
  
  selectedParticipantIds.clear();
  originalParticipantIds.clear(); 
  document.getElementById('shuttle-search-input').value = "";
  
  if (res) {
    document.getElementById('modal-title').innerText = "予約編集";
    document.getElementById('edit-res-id').value = res.id;
    
    const rId = res._resourceId || res.resourceId || res.roomId; 
    document.getElementById('input-room').value = rId;

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
    
    const titleVal = getVal(res, ['title', 'subject', '件名', 'タイトル', '用件', 'name']);
    document.getElementById('input-title').value = titleVal;

    const noteVal = getVal(res, ['note', 'description', '備考', 'メモ', '詳細', 'body']);
    document.getElementById('input-note').value = noteVal;
    
    const pIds = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
    if (pIds) {
        let idList = [];
        if (Array.isArray(pIds)) idList = pIds;
        else if (typeof pIds === 'string') idList = pIds.split(',');
        else if (typeof pIds === 'number') idList = [pIds];

        idList.forEach(id => { 
          if(id !== null && id !== undefined && String(id).trim() !== "") {
              const cleanId = String(id).trim();
              selectedParticipantIds.add(cleanId); 
              originalParticipantIds.add(cleanId); 
          }
        });
    }
    document.getElementById('btn-delete').style.display = 'inline-block';

  } else {
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
