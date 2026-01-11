const API_URL = "https://script.google.com/macros/s/AKfycbxMdWVjU8TfjmLXMMai2O9lADK5-0dnwGShYSzZD-lQ53nzHP2h9GmmYrMiPst--odS/exec";
const IMG_7F = "data:image/png;base64,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"
const IMG_6F = "data:image/png;base64,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"
let currentFloor = 7; 
const mapConfig = {
    7: {
        image: IMG_7F, 
        areas: [
            // ▼ ZOOMブース：青系 (rgba(0, 100, 255, 0.3))
            { id: "Z 角", name: "Z 角", top: 11.1, left: 0.0, width: 12.0, height: 7.1, color: "rgba(0, 100, 255, 0.3)" },
            { id: "Z 中", name: "Z 中", top: 0.0, left: 56.0, width: 12.0, height: 6.8, color: "rgba(0, 100, 255, 0.3)" },

            // ▼ 会議室：緑系 (rgba(0, 200, 80, 0.3))
            { id: "会議室2", name: "会議室2", top: 15.0, left: 79.0, width: 21.0, height: 22.5, color: "rgba(0, 200, 80, 0.3)" },
            { id: "会議室1", name: "会議室1", top: 37.3, left: 79.0, width: 21.0, height: 15.0, color: "rgba(0, 200, 80, 0.3)" },

            // ▼ 応接室：オレンジ系 (rgba(255, 165, 0, 0.3))
            { id: "応接室(8人)", name: "応接室(8人)", top: 71.0, left: 0.0, width: 22.5, height: 28.5, color: "rgba(255, 165, 0, 0.3)" },
            { id: "応接室(6人)", name: "応接室(6人)", top: 76.5, left: 22.6, width: 20.0, height: 23.0, color: "rgba(255, 165, 0, 0.3)" },
        ]
    },
    6: {
        image: IMG_6F,
        areas: [
             // ▼ ZOOMブース：青系
             { id: "Ｚ １", name: "Ｚ １", top: 0.0, left: 63.4, width: 6.0, height: 17.7, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ２", name: "Ｚ ２", top: 0.0, left: 69.3, width: 6.0, height: 17.7, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ３", name: "Ｚ ３", top: 0.0, left: 75.4, width: 6.0, height: 17.7, color: "rgba(0, 100, 255, 0.3)" },
             
             // ▼ 応接室：オレンジ系
             { id: "応接室(10人)", name: "応接室(10人)", top: 0.0, left: 81.5, width: 18.2, height: 44.2, color: "rgba(255, 165, 0, 0.3)" },
             
             // ▼ ZOOMブース：青系
             { id: "Ｚ ４", name: "Ｚ ４", top: 44.5, left: 88.8, width: 11.1, height: 7.0, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ５", name: "Ｚ ５", top: 51.9, left: 88.8, width: 11.1, height: 7.0, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ６", name: "Ｚ ６", top: 59.0, left: 88.8, width: 11.1, height: 7.2, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ７", name: "Ｚ ７", top: 66.4, left: 88.8, width: 11.1, height: 7.0, color: "rgba(0, 100, 255, 0.3)" },
             { id: "Ｚ ８", name: "Ｚ ８", top: 73.5, left: 88.8, width: 11.1, height: 7.5, color: "rgba(0, 100, 255, 0.3)" },
        ]
    }
};

const START_HOUR = 7;
const END_HOUR = 22;
const BASE_HOUR_HEIGHT = 100; 

let currentUser = null;
let masterData = { rooms: [], users: [], reservations: [], logs: [], groups: [] };
let selectedParticipantIds = new Set();
let originalParticipantIds = new Set();
let currentMapRoomId = null; 

window.onload = () => {
  document.getElementById('timeline-date').valueAsDate = new Date();
  document.getElementById('map-date').valueAsDate = new Date();

  const startInput = document.getElementById('input-start');
  const endInput = document.getElementById('input-end');
  if (startInput) startInput.step = 60; // 900から60に変更、または行ごと削除
  if (endInput) endInput.step = 60;   // 900から60に変更、または行ごと削除
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

  renderGroupButtons();
  
  currentFloor = 7;
  currentTimelineFloor = 7;

  switchTab('map-view');
}

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
  if (idsStr === null || idsStr === undefined || idsStr === "") return;
  const rawIds = String(idsStr).split(/[,、\s]+/);
  const targetUsers = [];
  rawIds.forEach(rawId => {

      const cleanIdStr = rawId.replace(/['"]/g, "").trim();
      
      if (!cleanIdStr) return; 

      const user = masterData.users.find(u => String(u.userId) === cleanIdStr);
      if (user) { targetUsers.push(user); }
  });

  if (targetUsers.length === 0) {
      console.warn("グループメンバーが見つかりませんでした: ", idsStr);
      return;
  }

  // 4. 選択状態の切り替えロジック
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
  
  // 高さの初期化
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

  // 予約に基づいて高さを計算
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

  // 高さの合計（currentTop）を計算
  const hourTops = {};
  let currentTop = 0;
  for(let h=START_HOUR; h<END_HOUR; h++) {
      hourTops[h] = currentTop;
      currentTop += hourRowHeights[h];
  }
  hourTops[END_HOUR] = currentTop;

  // 時間軸を描画
  drawTimeAxis(timeAxisId);
  
  // 時間軸のスタイル設定
  const axisContainer = document.getElementById(timeAxisId);
  if (axisContainer) {
      axisContainer.style.position = "sticky"; // 標準
      axisContainer.style.position = "-webkit-sticky"; // Safari用
      axisContainer.style.left = "0";
      axisContainer.style.zIndex = "9999";
      axisContainer.style.background = "#fff"; 
      axisContainer.style.borderRight = "1px solid #ddd";
      axisContainer.style.minHeight = (currentTop + 40) + "px"; 
  }
  
  // 部屋コンテナをクリアして描画開始
  container.innerHTML = "";
  
  // ▼▼▼ 【重要】コンテナの制限を解除（固定表示を有効にするため） ▼▼▼
  container.style.overflow = "visible";
  // ▲▲▲ 追加ここまで ▲▲▲
  
  targetRooms.forEach(room => {
    const col = document.createElement('div');
    col.className = 'room-col';
    if(mode === 'single') col.style.width = "100%"; 

    // ▼▼▼ 列の制限を解除し、レイヤー順序を設定 ▼▼▼
    col.style.overflow = "visible"; 
    col.style.position = "relative";
    col.style.zIndex = "1"; 
    
    // ヘッダー設定
    const header = document.createElement('div');
    header.className = 'room-header';
    header.innerText = room.roomName;
    
    // ▼▼▼ ヘッダーの強力な固定設定 ▼▼▼
    header.style.position = "-webkit-sticky"; // Safari用
    header.style.position = "sticky";         // 標準
    header.style.top = "0px";                 // 画面最上部に固定
    header.style.zIndex = "999";              // ★予約バー(5)より圧倒的に上に
    header.style.background = "#fafafa";      // 背景色（透け防止）
    header.style.borderBottom = "1px solid #ddd";
    
    // レイアウト
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.justifyContent = "center";
    header.style.height = "40px";       
    header.style.minHeight = "40px";
    header.style.flexShrink = "0";
    header.style.overflow = "hidden";   
    header.style.whiteSpace = "nowrap"; 
    
    col.appendChild(header);
    
    const body = document.createElement('div');
    body.className = 'room-grid-body';
    body.style.height = currentTop + "px"; 
    // bodyにはz-indexを設定せず、header(999)の下になるようにする

    for(let h=START_HOUR; h<END_HOUR; h++) {
        const slot = document.createElement('div');
        slot.className = 'grid-slot';
        slot.style.height = hourRowHeights[h] + "px";
        body.appendChild(slot);
    }
    
    // クリックイベント
    body.onclick = (e) => {
       if (e.target.closest('.v-booking-bar')) return;
       
       if(e.target.classList.contains('grid-slot') || e.target === body) {
           const rect = body.getBoundingClientRect();
           const clickY = e.clientY - rect.top; 
           
           let clickedHour = -1;
           let clickedMin = 0; 

           for(let h=START_HOUR; h<END_HOUR; h++) {
               const top = hourTops[h];
               const bottom = hourTops[h+1] !== undefined ? hourTops[h+1] : (top + hourRowHeights[h]);

               if (clickY >= top && clickY < bottom) {
                   clickedHour = h;
                   const height = bottom - top;
                   const relativeY = clickY - top; 
                   if (relativeY >= height / 2) {
                       clickedMin = 30;
                   }
                   break;
               }
           }
           
           if(clickedHour !== -1) {
                openModal(null, room.roomId, clickedHour, clickedMin);
           }
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

          let heightPx = bottomPx - topPx; 
          const minHeightPx = hourRowHeights[sHour] * (15 / 60);

          if (heightPx < minHeightPx) {
              heightPx = minHeightPx;
          }

          const bar = document.createElement('div');
          bar.className = `v-booking-bar type-${room.type}`;
          
          bar.style.top = (topPx + 1) + "px";
          bar.style.height = (heightPx - 2) + "px"; 

          // 予約枠のレベルを固定（ヘッダー999より下）
          bar.style.zIndex = "5";
          
          let displayTitle = getVal(res, ['title', 'subject', '件名', 'タイトル']) || '予約';

          if (mode === 'map') {
              bar.innerHTML = `
                <div style="flex: 1; text-align: right; padding-right: 10px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${pad(start.getHours())}:${pad(start.getMinutes())}
                </div>
                <div style="flex: 1; text-align: left; padding-left: 10px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${displayTitle}
                </div>
              `;
          } else {
              bar.innerHTML = `
                <span style="font-weight:bold;">${pad(start.getHours())}:${pad(start.getMinutes())}</span><br>
                <span style="font-weight:bold;">${displayTitle}</span>
              `;
          }
        
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

/* =========================================
   ▼▼▼ 履歴表示・ページネーション修正版 ▼▼▼
   ========================================= */

// ページネーション用変数
let currentLogPage = 1;
const LOGS_PER_PAGE = 50; // 1ページあたりの表示数

// 検索ボックス入力時に呼ばれる関数（ページを1に戻す）
function searchLogs() {
    currentLogPage = 1;
    renderLogs();
}

// ページ切り替え用関数
function changeLogPage(direction) {
    currentLogPage += direction;
    renderLogs();
}
function renderLogs() {
    const tbody = document.getElementById('log-tbody');
    tbody.innerHTML = "";
    
    // データがない場合は終了
    if (!masterData.logs || masterData.logs.length === 0) {
        document.getElementById('log-pagination').innerHTML = "データがありません";
        return;
    }

    // 1. 全データを新しい順（降順）に並べ替え
    let allLogs = [...masterData.logs].reverse(); 

    // 2. 検索フィルタリング
    const filterText = document.getElementById('log-search-input').value.toLowerCase().trim();
    
    if (filterText) {
        allLogs = allLogs.filter(log => {
            const dateStr = formatDate(new Date(log.timestamp));
            let roomName = log.resourceName || "";
            const roomObj = masterData.rooms.find(r => String(r.roomId) === String(log.resourceId || log.resourceName));
            if (roomObj) roomName = roomObj.roomName;

            return (
                dateStr.includes(filterText) ||
                (log.operatorName && log.operatorName.toLowerCase().includes(filterText)) ||
                (log.action && log.action.toLowerCase().includes(filterText)) ||
                (roomName && roomName.toLowerCase().includes(filterText)) ||
                (log.details && log.details.toLowerCase().includes(filterText))
            );
        });
    }

    // 3. ページネーション計算
    const totalItems = allLogs.length;
    const totalPages = Math.ceil(totalItems / LOGS_PER_PAGE) || 1;

    if (currentLogPage < 1) currentLogPage = 1;
    if (currentLogPage > totalPages) currentLogPage = totalPages;

    const startIndex = (currentLogPage - 1) * LOGS_PER_PAGE;
    const endIndex = startIndex + LOGS_PER_PAGE;
    
    const displayLogs = allLogs.slice(startIndex, endIndex);

    // ヘルパー関数
    const resolveName = (id) => {
        const targetIdStr = String(id).trim();
        const u = masterData.users.find(user => {
            const uIdStr = String(user.userId).trim();
            return uIdStr === targetIdStr || (!isNaN(uIdStr) && !isNaN(targetIdStr) && Number(uIdStr) === Number(targetIdStr));
        });
        return u ? u.userName : id;
    };

    const formatRange = (rangeStr) => {
        if (!rangeStr || !rangeStr.includes(' - ')) return rangeStr;
        const parts = rangeStr.split(' - ');
        if (!parts[0] || !parts[1]) return rangeStr;
        const sDate = new Date(parts[0]);
        const eDate = new Date(parts[1]);
        if (isNaN(sDate.getTime()) || isNaN(eDate.getTime())) return rangeStr;
        return `${sDate.getMonth() + 1}/${sDate.getDate()} ${pad(sDate.getHours())}:${pad(sDate.getMinutes())} - ${pad(eDate.getHours())}:${pad(eDate.getMinutes())}`;
    };

    // 4. 行（tr）の生成と描画
    displayLogs.forEach(log => {
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
            detailLines = detailLines.replace(/(\d+)/g, (match) => resolveName(match));
        }

        let timeDisplay = log.timeRange || '';
        if (timeDisplay.includes('→')) {
            const ranges = timeDisplay.split('→');
            const oldTime = formatRange(ranges[0].trim());
            const newTime = formatRange(ranges[1].trim());
            timeDisplay = `${oldTime} <br><span style="color:#e67e22; font-weight:bold;">↓</span><br> ${newTime}`;
        } else {
            timeDisplay = formatRange(timeDisplay);
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

    // 5. ページネーションコントロールの描画
    renderPaginationControls(totalPages, totalItems, startIndex + 1, Math.min(endIndex, totalItems));
}


// ページ送りボタン等の描画
function renderPaginationControls(totalPages, totalItems, startCount, endCount) {
    const container = document.getElementById('log-pagination');
    container.innerHTML = "";

    if (totalItems === 0) {
        container.innerText = "一致する履歴はありません";
        return;
    }

    // 前へボタン
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerText = "< 前へ";
    prevBtn.disabled = (currentLogPage === 1);
    if (currentLogPage === 1) prevBtn.classList.add('disabled');
    prevBtn.onclick = () => changeLogPage(-1);
    container.appendChild(prevBtn);

    // 情報表示 (例: 1 - 50 / 120件)
    const infoSpan = document.createElement('span');
    infoSpan.className = 'page-info';
    infoSpan.innerText = ` ${startCount} - ${endCount} / ${totalItems}件 `;
    container.appendChild(infoSpan);

    // 次へボタン
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerText = "次へ >";
    nextBtn.disabled = (currentLogPage === totalPages);
    if (currentLogPage === totalPages) nextBtn.classList.add('disabled');
    nextBtn.onclick = () => changeLogPage(1);
    container.appendChild(nextBtn);
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

// ▼ 引数に clickMin = 0 を追加
function openModal(res = null, defaultRoomId = null, clickHour = null, clickMin = 0) {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'flex';
  
  selectedParticipantIds.clear();
  originalParticipantIds.clear(); 
  document.getElementById('shuttle-search-input').value = "";
  
  // 上部の時間表示エリア
  let timeDisplayEl = document.getElementById('modal-time-display');
  if (!timeDisplayEl) {
      const header = document.getElementById('modal-title');
      timeDisplayEl = document.createElement('div');
      timeDisplayEl.id = 'modal-time-display';
      timeDisplayEl.style.cssText = "font-size: 1.1rem; color: #27ae60; font-weight: bold; margin-bottom: 15px; text-align:center; background:#e8f5e9; padding:8px; border-radius:4px;";
      header.parentNode.insertBefore(timeDisplayEl, header.nextSibling);
  }
  timeDisplayEl.innerText = "";

  const startInput = document.getElementById('input-start');
  const endInput = document.getElementById('input-end');
  // 時間制限 (7:00-21:00)
  if(startInput) { startInput.min = "07:00"; startInput.max = "21:00"; }
  if(endInput)   { endInput.min = "07:00"; endInput.max = "21:00"; }

  if (res) {
    // === 既存予約の編集 ===
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

    // ▼▼▼ openModal 関数内の時間計算ロジックを以下のように書き換えてください ▼▼▼

    const sHour = clickHour !== null ? clickHour : 9;
    const sMin  = clickMin; // 0 または 30

    // 終了時間は、クリックした位置に関わらず「次の時間の00分」に設定します
    // 例: 9:00 (上半分) をクリック → 10:00 終了
    // 例: 9:30 (下半分) をクリック → 10:00 終了
    let eHour = sHour + 1;
    let eMin = 0;

    document.getElementById('input-start').value = `${pad(sHour)}:${pad(sMin)}`;
    document.getElementById('input-end').value = `${pad(eHour)}:${pad(eMin)}`;
    
// ▲▲▲ 修正ここまで ▲▲▲
    
    document.getElementById('input-title').value = "";
    document.getElementById('input-note').value = "";
    document.getElementById('btn-delete').style.display = 'none';
  }
  
  renderShuttleLists();

  const inputs = ['input-date', 'input-start', 'input-end'];
  inputs.forEach(id => {
      const el = document.getElementById(id);
      if(el) {
          el.oninput = updateModalDisplay;
          el.onchange = updateModalDisplay;
      }
  });

  updateModalDisplay();
    // ▼▼▼▼▼▼ ここから追加 ▼▼▼▼▼▼
  // モーダル表示時に一番上までスクロールを戻す
  if (modal) modal.scrollTop = 0;
  const modalContent = modal.querySelector('.modal-content'); // もし中身のクラス名が違う場合は調整
  if (modalContent) modalContent.scrollTop = 0;
  // ▲▲▲▲▲▲ ここまで追加 ▲▲▲▲▲▲
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
  // ▼ 7:00 〜 21:00 に変更
  if (start < "07:00" || start > "21:00" || end < "07:00" || end > "21:00") {
      alert("利用時間は 7:00 〜 21:00 の範囲で設定してください。");
      return;
  }

  // ▼▼▼ 修正: 利用時間が15分未満ならエラーにする ▼▼▼
  
  // 1. 時間文字列を「分」に変換して差分を計算
  const startParts = start.split(':');
  const endParts = end.split(':');
  const startMinutes = parseInt(startParts[0]) * 60 + parseInt(startParts[1]);
  const endMinutes = parseInt(endParts[0]) * 60 + parseInt(endParts[1]);
  
  const duration = endMinutes - startMinutes;

  // 2. 15分未満ならアラート
  if (duration < 15) {
      alert("最低でも15分以上の日時を設定してください。");
      return;
  }
  // ▲▲▲ 修正ここまで ▲▲▲

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
// ▼▼▼ この関数を追加してください ▼▼▼
async function deleteBooking() {
    const id = document.getElementById('edit-res-id').value;

    if (!id) {
        alert("削除対象の予約IDが見つかりません。");
        return;
    }

    if (!confirm("本当にこの予約を削除しますか？")) {
        return;
    }

    const params = {
        action: 'deleteReservation',
        reservationId: id,
        operatorName: currentUser ? currentUser.userName : 'Unknown'
    };

    const result = await callAPI(params);

    if (result.status === 'success') {
        alert("予約を削除しました");
        closeModal();
        // 画面リロードなしでデータを再読み込み
        loadAllData(true);
    } else {
        alert("削除エラー: " + result.message);
    }
}
// ▲▲▲ 追加ここまで ▲▲▲
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

    // 描画する親要素を取得
    const wrapper = document.getElementById('map-inner-wrapper'); 
    const container = document.getElementById('dynamic-map-container');
    const targetParent = wrapper || container;
    
    if (!targetParent) return;

    // 既存のエリアを削除
    const existingAreas = targetParent.querySelectorAll('.map-click-area');
    existingAreas.forEach(el => el.remove());

    // 各部屋のエリアを描画
    config.areas.forEach(area => {
        const div = document.createElement("div");
        div.className = "map-click-area"; // CSSクラス

        // 座標とサイズ設定
        div.style.top = area.top + "%";
        div.style.left = area.left + "%";
        div.style.width = area.width + "%";
        div.style.height = area.height + "%";

        // 部屋名を表示
        div.innerText = area.name;
        
        // 重要: クリック時に使うIDを埋め込む
        div.setAttribute('data-room-id', area.id);

        // クリックイベント
        div.onclick = function() {
            selectRoomFromMap(this);
        };

        // 画面に追加
        targetParent.appendChild(div);
    });

    // マップ下のタイムラインを一旦隠す（部屋を選び直したため）
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
// ▼▼▼ 【修正版】詳細モーダル関連の処理 ▼▼▼
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
  
  // 4. 参加者の表示（リスト形式・スクロール対応）
  // ★ここから修正箇所
  const membersContainer = document.getElementById('detail-members');
  membersContainer.innerHTML = ""; // 一旦クリア

  let pIdsStr = getVal(res, ['participantIds', 'participant_ids', '参加者', 'メンバー']);
  
  // データ形式エラーチェック
  if (String(pIdsStr).includes('e+')) {
      membersContainer.innerHTML = "<div class='detail-member-item' style='color:red;'>⚠️データ形式エラー: 編集ボタンから修正してください</div>";
  } else if (pIdsStr) {
      // IDリストを分割（カンマ区切り、余分なクォーテーション除去）
      const cleanIdsStr = String(pIdsStr).replace(/['"]/g, "");
      const resIds = cleanIdsStr.split(/,\s*/).map(id => id.trim());
      
      // IDを名前に変換してリストを作成
      const names = resIds.map(id => {
          if(!id) return "";
          const u = masterData.users.find(user => {
              const uIdStr = String(user.userId).trim();
              return uIdStr === id || (!isNaN(uIdStr) && !isNaN(id) && Number(uIdStr) === Number(id));
          });
          return u ? u.userName : id;
      }).filter(n => n !== ""); // 空文字を除外

      if(names.length > 0) {
          // 1名ずつdivを作成して追加
          names.forEach(name => {
              const div = document.createElement('div');
              div.className = 'detail-member-item'; // CSSクラスを適用
              div.innerText = name;
              membersContainer.appendChild(div);
          });
      } else {
          // 名前が見つからなかった場合
          membersContainer.innerHTML = "<div class='detail-member-item'>-</div>";
      }
  } else {
      // 参加者がいない場合
      membersContainer.innerHTML = "<div class='detail-member-item'>-</div>";
  }
  // ★ここまで修正箇所（最後の innerText = pNames は削除しました）

  // 5. 備考の表示
  let rawNote = getVal(res, ['note', 'description', '備考', 'メモ']) || '';
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
let isEditMode = false; // ★追加

// script.js の renderGroupButtons 関数をこれに置き換えてください

function renderGroupButtons() {
  const container = document.getElementById('group-buttons-area');
  container.innerHTML = "";
  const serverGroups = masterData.groups || [];

  serverGroups.forEach(grp => {
      // 既存グループボタンの生成
      createGroupButton(container, grp.groupName, grp.memberIds, true, grp.groupId);
  });

  // 1. 「＋新規作成」ボタン
  const addBtn = document.createElement('div');
  addBtn.className = 'group-chip';
  addBtn.style.backgroundColor = '#4caf50'; // 緑
  addBtn.style.color = 'white';
  addBtn.style.fontWeight = 'bold';
  addBtn.innerText = "＋新規作成";
  // 編集・削除モード中は押せないようにする（あるいはモード解除）
  addBtn.style.opacity = (isDeleteMode || isEditMode) ? "0.3" : "1.0";
  addBtn.onclick = () => {
      if(isDeleteMode || isEditMode) return;
      openGroupModal(); // 新規作成として開く
  };
  container.appendChild(addBtn);

  // 共有グループがある場合のみ操作ボタンを表示
  if (serverGroups.length > 0) {
      
      // 2. 「編集」ボタン（★追加）
      const editBtn = document.createElement('div');
      editBtn.className = 'group-chip';
      editBtn.style.backgroundColor = isEditMode ? '#2980b9' : '#3498db';
      editBtn.style.color = 'white';
      editBtn.style.fontWeight = 'bold';
      editBtn.innerText = isEditMode ? "完了" : "✎ 編集";
      editBtn.onclick = () => {
          isEditMode = !isEditMode;
          isDeleteMode = false; // 削除モードは解除
          renderGroupButtons(); // 再描画
      };
      container.appendChild(editBtn);

      // 3. 「削除」ボタン
      const delBtn = document.createElement('div');
      delBtn.className = 'group-chip';
      delBtn.style.backgroundColor = isDeleteMode ? '#c0392b' : '#e74c3c';
      delBtn.style.color = 'white';
      delBtn.style.fontWeight = 'bold';
      delBtn.innerText = isDeleteMode ? "完了" : "× 削除";
      delBtn.onclick = () => {
          isDeleteMode = !isDeleteMode;
          isEditMode = false;   // 編集モードは解除
          renderGroupButtons(); // 再描画
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
        // ▼ 削除モード時
        if (isDeleteMode) {
            if (isCustom) {
                deleteSharedGroup(groupId, name);
            } else {
                alert("この項目はシステム固定のため削除できません。");
            }
            return;
        }
        // ▼ 編集モード時（★追加）
        if (isEditMode) {
            if (isCustom) {
                // 編集用モーダルを開く関数を呼ぶ
                openGroupModal(groupId, name, ids);
            } else {
                alert("この項目はシステム固定のため編集できません。");
            }
            return;
        }

        // ▼ 通常モード時（参加者セット）
        selectGroupMembers(ids);
    };

    // 見た目の調整
    if (isDeleteMode && isCustom) {
        // 削除モード: 赤枠
        btn.style.border = "2px dashed #c0392b"; 
        btn.style.color = "#c0392b";
        btn.style.backgroundColor = "#fdeaea";
    } else if (isEditMode && isCustom) {
        // 編集モード: 青枠（クラス適用）
        btn.classList.add('edit-mode-style');
    }

    container.appendChild(btn);
}

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

function openGroupModal(groupId = null, groupName = "", memberIds = "") {
    document.getElementById('groupCreateModal').style.display = 'flex';
    
    const titleEl = document.getElementById('group-modal-title');
    const nameInput = document.getElementById('new-group-name');
    const idInput = document.getElementById('edit-group-id');
    const searchInput = document.getElementById('group-shuttle-search');

    searchInput.value = "";
    groupCreateSelectedIds.clear();

    if (groupId) {
        titleEl.innerText = "グループ編集";
        idInput.value = groupId; // IDをセット
        nameInput.value = groupName;

        if (memberIds) {
            const ids = String(memberIds).split(/[,、\s]+/).map(s => s.trim());
            ids.forEach(id => {
               const u = masterData.users.find(user => String(user.userId) === id);
               if(u) groupCreateSelectedIds.add(String(u.userId));
            });
        }
    } else {
        // === 新規作成モード ===
        titleEl.innerText = "グループ作成";
        idInput.value = ""; // 空にする
        nameInput.value = "";
    }

    renderGroupCreateShuttle();
}

async function saveNewGroup() {
    const id = document.getElementById('edit-group-id').value; // IDがあるか確認
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

    const action = id ? 'updateGroup' : 'createGroup';

    const params = {
        action: action,
        groupId: id, // 新規の時は無視される
        groupName: name,
        memberIds: idsStr,
        operatorName: currentUser ? currentUser.userName : 'Unknown'
    };

    const result = await callAPI(params);
    
    if (result.status === 'success') {
        const msg = id ? `グループ「${name}」を更新しました` : `グループ「${name}」を作成しました`;
        alert(msg);
        closeGroupModal();

        isEditMode = false;
        isDeleteMode = false;
        
        loadAllData(true); 
    } else {
        alert("保存エラー: " + result.message);
    }
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

function updateModalDisplay() {
    const dateEl = document.getElementById('input-date');
    const startEl = document.getElementById('input-start');
    const endEl = document.getElementById('input-end');
    const displayEl = document.getElementById('modal-time-display');
    if (!dateEl || !startEl || !endEl || !displayEl) return;
    if (!dateEl.value || !startEl.value || !endEl.value) return;

    const parts = dateEl.value.split('-');
    const m = parseInt(parts[1], 10);
    const d = parseInt(parts[2], 10);
    
    // 表示を更新
    displayEl.innerText = `${m}月${d}日 ${startEl.value} - ${endEl.value}`;
}
