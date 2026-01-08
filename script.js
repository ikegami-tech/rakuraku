const API_URL = "https://script.google.com/macros/s/AKfycbwmJXAZnm662aV1BA57QmZuweJQ3dTaHqiBtujRaGWnPoLtnnv1o4RCZcmhxNS78a5v/exec";
const IMG_7F = "data:image/png;base64,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"
const IMG_6F = "data:image/png;base64,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"
let currentFloor = 7; 
const mapConfig = {
    7: {
        image: IMG_7F, 
        areas: [

            { id: "ZOOM(角)", name: "ZOOM(角)", top: 11.0, left: 0.0, width: 12.0, height: 7.5 },

            { id: "ZOOM(中)", name: "ZOOM(中)", top: 0.0, left: 55.0, width: 12.0, height: 7.5 },

            { id: "会議室2", name: "会議室2", top: 28.0, left: 83.0, width: 22.0, height: 15.0 },

            { id: "会議室1", name: "会議室1", top: 50.0, left: 83.0, width: 22.0, height: 15.0 },

            { id: "応接室(8人)", name: "応接室(8人)", top: 75.0, left: 0.0, width: 22.5, height: 25.0 },

            { id: "応接室(6人)", name: "応接室(6人)", top: 75.0, left: 30.0, width: 22.0, height: 25.0 },
        ]
    },
    6: {
        // ...（6階はそのまま、または同様に調整が必要であれば教えてください）
        image: IMG_6F,
        areas: [
             // 変更なし（省略）
             { id: "ZOOM 1", name: "ZOOM 1", top: 0.0, left: 63.4, width: 6.0, height: 17.7 },
             { id: "ZOOM 2", name: "ZOOM 2", top: 0.0, left: 69.3, width: 6.0, height: 17.7 },
             { id: "ZOOM 3", name: "ZOOM 3", top: 0.0, left: 75.4, width: 6.0, height: 17.7 },
             { id: "応接室(10人)", name: "応接室(10人)", top: 0.0, left: 81.5, width: 18.2, height: 43.8 },
             { id: "ZOOM 4", name: "ZOOM 4", top: 44.5, left: 88.5, width: 11.2, height: 6.6 },
             { id: "ZOOM 5", name: "ZOOM 5", top: 51.9, left: 88.6, width: 10.9, height: 6.4 },
             { id: "ZOOM 6", name: "ZOOM 6", top: 59.0, left: 88.8, width: 10.7, height: 7.3 },
             { id: "ZOOM 7", name: "ZOOM 7", top: 66.4, left: 88.6, width: 11.1, height: 7.0 },
             { id: "ZOOM 8", name: "ZOOM 8", top: 73.5, left: 88.8, width: 10.9, height: 7.1 },
        ]
    }
};

const START_HOUR = 9;
const END_HOUR = 19;
const BASE_HOUR_HEIGHT = 50; 

let currentUser = null;
let masterData = { rooms: [], users: [], reservations: [], logs: [], groups: [] };
let selectedParticipantIds = new Set();
let originalParticipantIds = new Set();
let currentMapRoomId = null; 

window.onload = () => {
  document.getElementById('timeline-date').valueAsDate = new Date();
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

async function loadAllData(isUpdate = false) {
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
      
      // ▼▼▼ 修正: 更新モードなら画面遷移しない refreshUI を呼ぶ ▼▼▼
      if (isUpdate) {
          refreshUI();
      } else {
          initUI();
      }
    } else { 
      alert("読込エラー: " + json.message); 
    }
  } catch(e) { 
    document.getElementById('loading').style.display = 'none'; 
  }
}

function initUI() {
  // 1. 時間軸の枠組みだけ準備
  renderTimeAxis('time-axis-all');
  renderTimeAxis('time-axis-map');
  
  // 2. 部屋選択プルダウンの生成
  const roomSelect = document.getElementById('input-room');
  if (roomSelect) {
    roomSelect.innerHTML = "";
    masterData.rooms.forEach(r => {
      const op = document.createElement('option');
      op.value = r.roomId;
      op.innerText = r.roomName;
      roomSelect.appendChild(op);
    });
  }

  // 3. グループボタンの生成
  renderGroupButtons();
  
  // 4. 各画面の変数を初期化（描画はまだしない）
  currentFloor = 7;
  currentTimelineFloor = 7;

  // 5. 最初に表示するタブを指定（この関数の中で描画がトリガーされます）
  switchTab('map-view');
}
// ▼▼▼ 【追加】画面遷移せずにデータを更新する関数 ▼▼▼
function refreshUI() {
  // 1. 履歴の更新
  renderLogs();
  
  // 2. グループボタンの更新
  renderGroupButtons();

  // 3. 部屋プルダウンの更新（選択状態を維持）
  const roomSelect = document.getElementById('input-room');
  if (roomSelect) {
      const currentVal = roomSelect.value;
      roomSelect.innerHTML = "";
      masterData.rooms.forEach(r => {
          const op = document.createElement('option');
          op.value = r.roomId;
          op.innerText = r.roomName;
          roomSelect.appendChild(op);
      });
      if(currentVal) roomSelect.value = currentVal;
  }

  // 4. 現在開いているタブに応じて再描画
  if (document.getElementById('view-timeline').classList.contains('active')) {
      renderVerticalTimeline('all');
  } else if (document.getElementById('view-map-view').classList.contains('active')) {
      if(document.getElementById('map-timeline-section').style.display !== 'none') {
          renderVerticalTimeline('map');
      }
  }
}



function selectGroupMembers(idsStr) {
  // データがない場合は何もしない
  if (idsStr === null || idsStr === undefined || idsStr === "") return;

  // 1. 強力な分割処理
  // 文字列に変換し、カンマ(,)、読点(、)、スペースなどで区切る
  // これにより "101, 102" や "101 102" などの表記揺れを吸収します
  const rawIds = String(idsStr).split(/[,、\s]+/);

  const targetUsers = [];
  rawIds.forEach(rawId => {
      // 2. IDのクリーニング
      // 前後の空白や、万が一の引用符('や")を除去します
      const cleanIdStr = rawId.replace(/['"]/g, "").trim();
      
      if (!cleanIdStr) return; // 空文字ならスキップ

      // 3. ユーザーの検索（IDの一致確認）
      const user = masterData.users.find(u => String(u.userId) === cleanIdStr);
      if (user) { targetUsers.push(user); }
  });

  // 該当するユーザーがいなければ終了
  if (targetUsers.length === 0) {
      console.warn("グループメンバーが見つかりませんでした: ", idsStr);
      return;
  }

  // 4. 選択状態の切り替えロジック
  // グループ全員がすでに「選択済み」かどうかを判定
  const isAllSelected = targetUsers.every(u => selectedParticipantIds.has(String(u.userId)));

  if (isAllSelected) {
      // 全員選択済みなら → 全員解除（候補者一覧に戻す）
      targetUsers.forEach(u => selectedParticipantIds.delete(String(u.userId)));
  } else {
      // まだ選択されていない人がいれば → 全員追加（参加予定者に移動）
      targetUsers.forEach(u => selectedParticipantIds.add(String(u.userId)));
  }

  // リストの表示を更新（検索フィルタの状態を維持）
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
  // 1. すべてのタブと画面を非アクティブにする
  document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  
  // 2. 選択された画面を表示する（CSSで display: block になる）
  const targetView = document.getElementById('view-' + tabName);
  if(targetView) targetView.classList.add('active');
  
  // 3. ナビゲーションボタンの見た目を更新
  const tabs = document.querySelectorAll('.nav-item');
  // インデックスはHTMLの並び順 (0:マップ, 1:一覧, 2:履歴)
  if(tabName === 'map-view' && tabs[0]) tabs[0].classList.add('active');
  if(tabName === 'timeline' && tabs[1]) tabs[1].classList.add('active');
  if(tabName === 'logs' && tabs[2]) tabs[2].classList.add('active');

  // ▼▼▼ 【重要修正】画面が表示された後に、中身を描画する ▼▼▼
  
  if (tabName === 'map-view') {
      // マップ画面の場合：描画ズレを防ぐため、ほんの少し待ってから描画
      setTimeout(() => {
          switchFloor(currentFloor); 
      }, 50);
      
  } else if (tabName === 'timeline') {
      // 一覧画面の場合：画面幅を正しく取得させるため、setTimeout(0)で実行
      setTimeout(() => {
          // タブの見た目も同期
          document.querySelectorAll('#view-timeline .floor-tab').forEach(tab => tab.classList.remove('active'));
          const activeTab = document.getElementById(`timeline-tab-${currentTimelineFloor}f`);
          if(activeTab) activeTab.classList.add('active');
          
          renderVerticalTimeline('all');
      }, 0);
      
  } else if (tabName === 'logs') {
      // 履歴画面の場合
      renderLogs();
  }
}

let hourRowHeights = {}; 

function drawTimeAxis(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  // 時間軸ヘッダーを生成（これがないと右側とズレます）
  const header = document.createElement('div');
  header.className = 'time-axis-header';
  header.style.height = "40px"; 
  header.style.minHeight = "40px"; 
  header.style.flexShrink = "0";
  container.appendChild(header);

  for (let i = START_HOUR; i < END_HOUR; i++) {
      const height = hourRowHeights[i] || BASE_HOUR_HEIGHT;
      const div = document.createElement('div');
      div.className = 'time-label';
      div.innerText = i + ":00";
      div.style.height = height + "px";
      div.style.minHeight = height + "px";
      container.appendChild(div);
  }
}
function renderTimeAxis(containerId) {
    // 初期化時は何もしない
}

function renderVerticalTimeline(mode) {
  let container, dateInputId, targetRooms;
  let timeAxisId;

  if (mode === 'all') {
      container = document.getElementById('rooms-container-all');
      dateInputId = 'timeline-date';
      timeAxisId = 'time-axis-all';
      
      const floorConfig = mapConfig[currentTimelineFloor];
      if (floorConfig) {
          const floorRoomIds = floorConfig.areas.map(area => area.id);
          targetRooms = masterData.rooms.filter(r => floorRoomIds.includes(r.roomId));
      } else {
          targetRooms = [];
      }
   } else if (mode === 'map') { 
      container = document.getElementById('rooms-container-map');
      dateInputId = 'map-date';
      timeAxisId = 'time-axis-map';
      targetRooms = masterData.rooms.filter(r => String(r.roomId) === String(currentMapRoomId));
      container.style.width = "100%";
  } else {
      return;
  }
  
  if (!targetRooms || targetRooms.length === 0) {
      container.innerHTML = "<div style='padding:20px;'>部屋データが見つかりません。</div>";
      return;
  }

  const rawDateVal = document.getElementById(dateInputId).value; 
  const targetDateNum = formatDateToNum(new Date(rawDateVal)); 
  
  for(let h=START_HOUR; h<END_HOUR; h++) hourRowHeights[h] = BASE_HOUR_HEIGHT;

  const totalWidth = container.clientWidth > 0 ? container.clientWidth : window.innerWidth;
  const colCount = targetRooms.length > 0 ? targetRooms.length : 1;
  let colWidth = Math.floor(totalWidth / colCount);
  if (colWidth < 120) colWidth = 120;

  let calculatedChars = Math.floor((colWidth - 10) / 12);
  if (calculatedChars < 12) calculatedChars = 12; 
  const DYNAMIC_CHARS_PER_LINE = calculatedChars;

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

  // 高さ計算
  allRelevantReservations.forEach(res => {
      const start = new Date(res._startTime);
      const sHour = start.getHours();
      
      let displayText = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';

      const CHARS_PER_LINE = DYNAMIC_CHARS_PER_LINE; 
      const titleLines = Math.ceil(displayText.length / CHARS_PER_LINE) || 1;
      const timeLines = 1; 
      const nameLines = 0; 
      const totalLines = titleLines + timeLines + nameLines; 
      const contentHeightPx = (totalLines * 15) + 10;

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

  // 時間軸を描画
  drawTimeAxis(timeAxisId);
  container.innerHTML = "";
  
  const hourTops = {};
  let currentTop = 0;
  for(let h=START_HOUR; h<END_HOUR; h++) {
      hourTops[h] = currentTop;
      currentTop += hourRowHeights[h];
  }
  hourTops[END_HOUR] = currentTop;

  targetRooms.forEach(room => {
    const col = document.createElement('div');
    col.className = 'room-col';
    if(mode === 'single') col.style.width = "100%"; 
    
    // ▼▼▼ 修正: ヘッダーの高さ固定を強化（minHeight, flexShrinkを追加） ▼▼▼
    const header = document.createElement('div');
    header.className = 'room-header';
    header.innerText = room.roomName;
    header.style.height = "40px";       
    header.style.minHeight = "40px";    // これを追加（押しつぶされ防止）
    header.style.flexShrink = "0";      // これを追加（縮小禁止）
    header.style.overflow = "hidden";   
    header.style.whiteSpace = "nowrap"; 
    col.appendChild(header);
    
    const body = document.createElement('div');
    body.className = 'room-grid-body';
    body.style.height = currentTop + "px"; 

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
    
    // 表示ループ
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
          bar.style.height = (heightPx - 2) + "px"; 
          
          let displayTitle = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';

          bar.innerHTML = `
            <span style="font-weight:bold;">${pad(start.getHours())}:${pad(start.getMinutes())}</span><br>
            <span style="font-weight:bold;">${displayTitle}</span>
          `;
          
          bar.onclick = (e) => { 
              e.stopPropagation(); 
              openDetailModal(res); 
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

function changeDate(days, inputId) {
  const input = document.getElementById(inputId);
  const d = new Date(input.value);
  d.setDate(d.getDate() + days);
  input.valueAsDate = d;
  if(inputId === 'timeline-date') renderVerticalTimeline('all');
    else if(inputId === 'map-date') renderVerticalTimeline('map');
}

function renderLogs() {
  const tbody = document.getElementById('log-tbody');
  tbody.innerHTML = "";
  
  if (!masterData.logs || masterData.logs.length === 0) return;

  const logs = [...masterData.logs].reverse().slice(0, 20);
  
  const resolveName = (id) => {
    const targetIdStr = String(id).trim(); 
    const u = masterData.users.find(user => {
        const uIdStr = String(user.userId).trim();
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

function openModal(res = null, defaultRoomId = null, clickHour = null) {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'flex';
  
  selectedParticipantIds.clear();
  originalParticipantIds.clear(); 
  document.getElementById('shuttle-search-input').value = "";
  
  // 上部の時間表示エリアを作成・取得
  let timeDisplayEl = document.getElementById('modal-time-display');
  if (!timeDisplayEl) {
      const header = document.getElementById('modal-title');
      timeDisplayEl = document.createElement('div');
      timeDisplayEl.id = 'modal-time-display';
      timeDisplayEl.style.cssText = "font-size: 1.1rem; color: #27ae60; font-weight: bold; margin-bottom: 15px; text-align:center; background:#e8f5e9; padding:8px; border-radius:4px;";
      header.parentNode.insertBefore(timeDisplayEl, header.nextSibling);
  }
  // 一旦クリア
  timeDisplayEl.innerText = "";

    const startInput = document.getElementById('input-start');
  const endInput = document.getElementById('input-end');
  if(startInput) { startInput.min = "09:00"; startInput.max = "18:00"; }
  if(endInput)   { endInput.min = "09:00"; endInput.max = "18:00"; }

  if (res) {
    // === 既存予約の編集 ===
    document.getElementById('modal-title').innerText = "予約編集";
    document.getElementById('edit-res-id').value = res.id;
    
    const rId = res._resourceId || res.resourceId || res.roomId; 
    document.getElementById('input-room').value = rId;

    const startObj = new Date(res._startTime || res.startTime);
    const endObj = new Date(res._endTime || res.endTime);
    
    // 日付入力欄
    const y = startObj.getFullYear();
    const m = ('0' + (startObj.getMonth() + 1)).slice(-2);
    const d = ('0' + startObj.getDate()).slice(-2);
    document.getElementById('input-date').value = `${y}-${m}-${d}`;

    // 時間入力欄
    const sh = ('0' + startObj.getHours()).slice(-2);
    const sm = ('0' + startObj.getMinutes()).slice(-2);
    const eh = ('0' + endObj.getHours()).slice(-2);
    const em = ('0' + endObj.getMinutes()).slice(-2);
    document.getElementById('input-start').value = `${sh}:${sm}`;
    document.getElementById('input-end').value = `${eh}:${em}`;
    
    // タイトル・備考
    document.getElementById('input-title').value = getVal(res, ['title', 'subject', '件名', 'タイトル', '用件', 'name']);
    document.getElementById('input-note').value = getVal(res, ['note', 'description', '備考', 'メモ', '詳細', 'body']);
    
    // 参加者の復元
    const pIds = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
    if (pIds) {
        let idList = [];
        if (Array.isArray(pIds)) idList = pIds;
        else if (typeof pIds === 'string') idList = pIds.split(',');
        else if (typeof pIds === 'number') idList = [pIds];

        idList.forEach(rawId => { 
          if(rawId !== null && rawId !== undefined && String(rawId).trim() !== "") {
              const targetId = String(rawId).trim();
              const user = masterData.users.find(u => {
                  const uId = String(u.userId).trim();
                  return uId === targetId || (!isNaN(uId) && !isNaN(targetId) && Number(uId) === Number(targetId));
              });
              const finalId = user ? String(user.userId).trim() : targetId;
              selectedParticipantIds.add(finalId); 
              originalParticipantIds.add(finalId); 
          }
        });
    }
    document.getElementById('btn-delete').style.display = 'inline-block';

  } else {
    // === 新規予約 ===
    document.getElementById('modal-title').innerText = "新規予約";
    document.getElementById('edit-res-id').value = "";
    if(defaultRoomId) document.getElementById('input-room').value = defaultRoomId;
    
    let currentTabDate = "";
    if(document.getElementById('view-timeline').classList.contains('active')) {
        currentTabDate = document.getElementById('timeline-date').value;
    } else {
        currentTabDate = document.getElementById('map-date').value;
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

  // ▼▼▼ 【修正】イベントリスナーの登録強化 ▼▼▼
  // 以前の onchange だけだと反応しないことがあるため、addEventListener を使用
  const inputs = ['input-date', 'input-start', 'input-end'];
  inputs.forEach(id => {
      const el = document.getElementById(id);
      if(el) {
          // 重複登録を防ぐため、念のため古いリスナーを削除する記述を入れることもありますが、
          // モーダルを開くたびに上書きでも動作上は問題ありません。
          // ここではシンプルに 'input' (入力中) と 'change' (確定後) の両方を監視します。
          el.oninput = updateModalDisplay;
          el.onchange = updateModalDisplay;
      }
  });

  // 最後に一度実行して表示を合わせる
  updateModalDisplay();
}
    function closeModal() { document.getElementById('bookingModal').style.display = 'none'; }

async function saveBooking() {
  const id = document.getElementById('edit-res-id').value;
  const room = document.getElementById('input-room').value;
  const date = document.getElementById('input-date').value;
  const start = document.getElementById('input-start').value;
  const end = document.getElementById('input-end').value;
  const title = document.getElementById('input-title').value;
  const note = document.getElementById('input-note').value;
  
 if (start >= end) {
      alert("開始時間は終了時間より前に設定してください。");
      return;
  }
  if (start < "09:00" || start > "18:00" || end < "09:00" || end > "18:00") {
      alert("利用時間は 9:00 〜 18:00 の範囲で設定してください。");
      return;
  }

  const dateSlash = date.replace(/-/g, '/');
  const startTime = `${dateSlash} ${start}`;
  const endTime = `${dateSlash} ${end}`;
  
  // 参加者IDの区切り文字に「スペース」を入れる
  const pIds = Array.from(selectedParticipantIds).join(', ');

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
    // ▼▼▼ 修正: true を渡して画面遷移を防ぐ ▼▼▼
    loadAllData(true);
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
    // ▼▼▼ 修正: true を渡して画面遷移を防ぐ ▼▼▼
    loadAllData(true);
  } else {
    alert("エラー: " + result.message);
  }
}

function pad(n) { return n < 10 ? '0'+n : n; }
function formatDate(d) { return `${d.getMonth()+1}/${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}`; }
function getRoomName(id) { const r = masterData.rooms.find(x => x.roomId === id); return r ? r.roomName : id; }

function selectRoomFromMap(element) {
  const roomId = element.getAttribute('data-room-id');
  
  const roomObj = masterData.rooms.find(r => String(r.roomId) === String(roomId));
  
  if (!roomObj) {
    alert("エラー: 指定された部屋ID (" + roomId + ") が見つかりません。");
    return;
  }

  currentMapRoomId = roomId;

  document.getElementById('map-timeline-section').style.display = 'block';
  
  document.getElementById('map-selected-room-name').innerText = roomObj.roomName;

  renderVerticalTimeline('map');
  
  document.getElementById('map-timeline-section').scrollIntoView({behavior: 'smooth'});
}

function switchFloor(floor) {
    currentFloor = floor;
    
    // マップ画面内のタブだけを対象にする（一覧画面のタブには影響させない）
    const mapContainer = document.getElementById('view-map-view');
    if(mapContainer) {
        mapContainer.querySelectorAll('.floor-tab').forEach(tab => tab.classList.remove('active'));
    }
    
    // 押されたタブを「選択中（active）」にする
    const activeTab = document.getElementById(`tab-${floor}f`);
    if(activeTab) activeTab.classList.add('active');

    // 画像を描画する
    renderMap(floor);
}

function renderMap(floor) {
    const config = mapConfig[floor];
    if (!config) return;

    const imgEl = document.getElementById('office-map-img');
    if(imgEl) imgEl.src = config.image;

    // ▼▼▼ 修正: 追加先を container ではなく inner-wrapper に変更 ▼▼▼
    const container = document.getElementById('dynamic-map-container'); // 必要なら残すが使わないかも
    const wrapper = document.getElementById('map-inner-wrapper'); 
    
    // 念のため wrapper が無ければ container を使う（エラー回避）
    const targetParent = wrapper || container;

    // 既存のエリアを削除 (targetParentの中から探す)
    const existingAreas = targetParent.querySelectorAll('.map-click-area');
    existingAreas.forEach(el => el.remove());

    config.areas.forEach(area => {
        const div = document.createElement('div');
        div.className = 'map-click-area';
        div.setAttribute('data-room-id', area.id);
        
        // %指定の位置情報は、親(targetParent)のサイズに対する割合になる
        div.style.top = area.top + '%';
        div.style.left = area.left + '%';
        div.style.width = area.width + '%';
        div.style.height = area.height + '%';
        
        div.onclick = function() { selectRoomFromMap(this); };
        
        const span = document.createElement('span');
        span.innerText = area.name;
        div.appendChild(span);
        
        // ▼▼▼ 修正: ラッパーに追加する ▼▼▼
        targetParent.appendChild(div);
    });

    const timelineSection = document.getElementById('map-timeline-section');
    if(timelineSection) timelineSection.style.display = 'none';
}
// ▼▼▼ 【追加】一覧画面の階切り替え機能 ▼▼▼
function switchTimelineFloor(floor) {
    currentTimelineFloor = floor;
    
    // タブの見た目を切り替え
    document.querySelectorAll('#view-timeline .floor-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(`timeline-tab-${floor}f`);
    if(activeTab) activeTab.classList.add('active');

    // タイムラインを再描画
    renderVerticalTimeline('all');
}
// ▼▼▼ 【追加】詳細モーダル関連の処理 ▼▼▼
let currentDetailRes = null;

function openDetailModal(res) {
  currentDetailRes = res;
  const modal = document.getElementById('detailModal');
  
  // 1. 日時の表示
  const s = new Date(res._startTime);
  const e = new Date(res._endTime);
  const dateStr = `${s.getMonth()+1}/${s.getDate()}`;
  const timeStr = `${pad(s.getHours())}:${pad(s.getMinutes())} - ${pad(e.getHours())}:${pad(e.getMinutes())}`;
  document.getElementById('detail-time').innerText = `${dateStr} ${timeStr}`;
  
  // 2. 部屋名の表示
  const room = masterData.rooms.find(r => String(r.roomId) === String(res._resourceId));
  document.getElementById('detail-room').innerText = room ? room.roomName : res._resourceId;
  
  // 3. 用件の表示
  const title = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '(なし)';
  document.getElementById('detail-title').innerText = title;
  
  // 4. 参加者の表示（▼▼▼ 修正: 変な数字になっている場合の対策を追加 ▼▼▼）
  let pNames = "-";
  let pIdsStr = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
  
  // もしデータが指数表記(5.04...e+41)のように壊れていたらエラーを表示
  if (String(pIdsStr).includes('e+')) {
      pNames = "⚠️データ形式エラー: 編集ボタンから参加者を登録し直してください";
  } else if (pIdsStr) {
      // カンマ区切りなどで分割して処理
      // (万が一スペースがなくても対応できるよう、正規表現で分割します)
      const resIds = String(pIdsStr).split(/,\s*/).map(id => id.trim()).sort();
      
      const matchedGroup = masterData.groups.find(grp => {
          if (!grp.memberIds) return false;
          const grpIds = grp.memberIds.split(',').map(id => id.trim()).sort();
          return JSON.stringify(resIds) === JSON.stringify(grpIds);
      });

      if (matchedGroup) {
          pNames = matchedGroup.groupName;
      } else {
          const names = resIds.map(id => {
              if(!id) return "";
              const u = masterData.users.find(user => {
                  const uIdStr = String(user.userId).trim();
                  return uIdStr === id || (!isNaN(uIdStr) && !isNaN(id) && Number(uIdStr) === Number(id));
              });
              return u ? u.userName : id;
          }).filter(n => n !== "");
          
          if(names.length > 0) pNames = names.join(', ');
      }
  }
  document.getElementById('detail-members').innerText = pNames;
  
  // 5. 備考の表示（▼▼▼ 修正: 【変更履歴】を含む行を消して表示する ▼▼▼）
  let rawNote = getVal(res, ['note', 'description', '備考', 'メモ']) || '';
  // 「【変更履歴】」から始まる行をすべて削除して表示
  let cleanNote = rawNote.replace(/【変更履歴】.*/g, '').replace(/^\s*[\r\n]/gm, '').trim();
  
  document.getElementById('detail-note').innerText = cleanNote;

  // 「編集する」ボタン
  document.getElementById('btn-go-edit').onclick = function() {
      closeDetailModal();        
      openModal(currentDetailRes); 
  };

  modal.style.display = 'flex';
}
function closeDetailModal() {
  document.getElementById('detailModal').style.display = 'none';
}
/* =========================================
   ▼▼▼ グループ管理機能（完全クリア＆共有版） ▼▼▼
   ========================================= */

// グループ作成モーダル用の一時的なID保存セット
let groupCreateSelectedIds = new Set();
// 削除モードかどうかのフラグ
let isDeleteMode = false;

// script.js の renderGroupButtons 関数をこれに置き換えてください

function renderGroupButtons() {
  const container = document.getElementById('group-buttons-area');
  container.innerHTML = "";
  const serverGroups = masterData.groups || [];

  serverGroups.forEach(grp => {
      // GASからは { groupId, groupName, memberIds, ... } が返ってきています
      createGroupButton(container, grp.groupName, grp.memberIds, true, grp.groupId);
  });

  // 2. 「＋新規作成」ボタン（これを押すとモーダルが開く）
  const addBtn = document.createElement('div');
  addBtn.className = 'group-chip';
  addBtn.style.backgroundColor = '#4caf50'; // 緑色
  addBtn.style.color = 'white';
  addBtn.style.fontWeight = 'bold';
  addBtn.innerText = "＋新規作成";
  addBtn.onclick = openGroupModal;
  container.appendChild(addBtn);

  // 3. 「ー削除」ボタン（共有グループがある場合のみ表示）
  if (serverGroups.length > 0) {
      const delBtn = document.createElement('div');
      delBtn.className = 'group-chip';
      delBtn.style.backgroundColor = isDeleteMode ? '#e74c3c' : '#95a5a6'; // 赤 or グレー
      delBtn.style.color = 'white';
      delBtn.style.fontWeight = 'bold';
      delBtn.innerText = isDeleteMode ? "完了" : "ー削除";
      delBtn.onclick = () => {
          isDeleteMode = !isDeleteMode;
          renderGroupButtons(); // 再描画してバツ印を表示/非表示
      };
      container.appendChild(delBtn);
  }
}
function createGroupButton(container, name, ids, isCustom, groupId) {
    const btn = document.createElement('div');
    btn.className = 'group-chip';
    btn.innerText = name;
    
    // クリック時の動作
    btn.onclick = () => {
        // --- ここから修正 ---
        if (isDeleteMode) {
            if (isCustom) {
                // 削除モード中に自作グループを押した場合、削除確認を出す
                deleteSharedGroup(groupId, name);
            } else {
                // 「全員」などシステム固定のものは削除できない旨を伝える
                alert("この項目はシステム固定のため削除できません。");
            }
            return;
        }
        // 通常モード時は参加者をセット
        selectGroupMembers(ids);
        // --- ここまで修正 ---
    };

    // 削除モードかつカスタム(共有)グループの場合の見た目
    if (isDeleteMode && isCustom) {
        // 削除対象であることを視覚的に目立たせる（赤枠の破線など）
        btn.style.opacity = "1.0"; 
        btn.style.border = "2px dashed #c0392b"; 
        btn.style.color = "#c0392b";
        btn.style.backgroundColor = "#fdeaea"; // 薄い赤背景
        btn.innerText = name; 
    }

    container.appendChild(btn);
}
// ★修正: 新しいグループをサーバー(GAS)に保存する処理
async function saveNewGroup() {
    const name = document.getElementById('new-group-name').value.trim();
    if (!name) {
        alert("グループ名を入力してください");
        return;
    }
    if (groupCreateSelectedIds.size === 0) {
        alert("メンバーを1人以上選択してください");
        return;
    }

    const idsStr = Array.from(groupCreateSelectedIds).join(',');

    // API呼び出し用のパラメータ
    const params = {
        action: 'createGroup',
        groupName: name,
        memberIds: idsStr,
        operatorName: currentUser ? currentUser.userName : 'Unknown'
    };

    const result = await callAPI(params);
    
    if (result.status === 'success') {
        alert(`グループ「${name}」を作成し、共有しました`);
        closeGroupModal();
        isDeleteMode = false;
        // データを再読み込みして全画面に反映（trueを渡して画面遷移を防ぐ）
        loadAllData(true);
    } else {
        alert("保存エラー: " + result.message);
    }
}

// ★修正: サーバー(GAS)からグループを削除する処理
async function deleteSharedGroup(groupId, groupName) {
    if(!confirm(`共有グループ「${groupName}」を本当に削除しますか？\n（全社員の画面から消えます）`)) return;

    const params = {
        action: 'deleteGroup',
        groupId: groupId
    };

    const result = await callAPI(params);

    if (result.status === 'success') {
        alert("削除しました");
        // 最新データを読み直して表示を更新
        loadAllData(true);
    } else {
        alert("削除エラー: " + result.message);
    }
}
// --- グループ作成モーダル関連（不足分を追加） ---
function openGroupModal() {
    document.getElementById('groupCreateModal').style.display = 'flex';
    document.getElementById('new-group-name').value = "";
    document.getElementById('group-shuttle-search').value = "";
    groupCreateSelectedIds.clear();
    renderGroupCreateShuttle();
}

function closeGroupModal() {
    document.getElementById('groupCreateModal').style.display = 'none';
}

function renderGroupCreateShuttle() {
    const filterText = document.getElementById('group-shuttle-search').value.toLowerCase();
    const leftList = document.getElementById('group-create-candidates');
    const rightList = document.getElementById('group-create-selected');
    leftList.innerHTML = "";
    rightList.innerHTML = "";

    masterData.users.forEach(u => {
        const uidStr = String(u.userId);
        if (groupCreateSelectedIds.has(uidStr)) {
            const div = document.createElement('div');
            div.className = 'shuttle-item icon-remove';
            div.innerText = u.userName;
            div.onclick = () => {
                groupCreateSelectedIds.delete(uidStr);
                renderGroupCreateShuttle();
            };
            rightList.appendChild(div);
        } else if (filterText === "" || u.userName.toLowerCase().includes(filterText)) {
            const div = document.createElement('div');
            div.className = 'shuttle-item icon-add';
            div.innerText = u.userName;
            div.onclick = () => {
                groupCreateSelectedIds.add(uidStr);
                renderGroupCreateShuttle();
            };
            leftList.appendChild(div);
        }
    });
}
// ▼▼▼ 【追加】モーダルの上部表示を更新する関数 ▼▼▼
// ▼▼▼ 【修正版】モーダルの上部表示を更新する関数 ▼▼▼
function updateModalDisplay() {
    // 要素の取得
    const dateEl = document.getElementById('input-date');
    const startEl = document.getElementById('input-start');
    const endEl = document.getElementById('input-end');
    const displayEl = document.getElementById('modal-time-display');

    // 要素が見つからない、または値が空の場合は何もしない
    if (!dateEl || !startEl || !endEl || !displayEl) return;
    if (!dateEl.value || !startEl.value || !endEl.value) return;

    // 日付のパース (YYYY-MM-DD を M月D日 に)
    const parts = dateEl.value.split('-');
    const m = parseInt(parts[1], 10);
    const d = parseInt(parts[2], 10);
    
    // 表示を更新
    displayEl.innerText = `${m}月${d}日 ${startEl.value} - ${endEl.value}`;
}
