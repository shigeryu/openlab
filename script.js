// 卒業生データ（画像の実際のデータを基に構造化）
const alumniData = [
    // 2024年度 修士課程
    {
        id: 30,
        nameJa: "小野 恵太郎",
        nameEn: "Keitaro Ono",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 31,
        nameJa: "小俣 陽紀",
        nameEn: "Haruki Omata",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 32,
        nameJa: "川﨑 舜平",
        nameEn: "Shunpei Kawasaki",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 33,
        nameJa: "草間 知貴",
        nameEn: "Tomoki Kusama",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 34,
        nameJa: "済田 祥平",
        nameEn: "Shohei Saida",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 35,
        nameJa: "田口 龍之介",
        nameEn: "Ryunosuke Taguchi",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 36,
        nameJa: "花井 竜人",
        nameEn: "Ryuto Hanai",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 37,
        nameJa: "蛭田 諒",
        nameEn: "Ryo Hiruta",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 38,
        nameJa: "山田 遼",
        nameEn: "Ryo Yamada",
        year: 2024,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    // 2024年度 学士課程
    {
        id: 39,
        nameJa: "前田 空我",
        nameEn: "Kuga Maeda",
        year: 2024,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 40,
        nameJa: "照井 大晴",
        nameEn: "Taisei Terui",
        year: 2024,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 41,
        nameJa: "敏鎌 廉",
        nameEn: "Ren Togama",
        year: 2024,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 42,
        nameJa: "中山 絢太",
        nameEn: "Kenta Nakayama",
        year: 2024,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    // 2023年度 修士課程
    {
        id: 43,
        nameJa: "石川 輝",
        nameEn: "Hikaru Ishikawa",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 44,
        nameJa: "小川 泰輝",
        nameEn: "Taiki Ogawa",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    {
        id: 45,
        nameJa: "近藤 亮也",
        nameEn: "Ryoya Kondo",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 46,
        nameJa: "佐川 智輝",
        nameEn: "Tomoki Sagawa",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "attending"
        }
    },
    {
        id: 47,
        nameJa: "佐藤 陸",
        nameEn: "Riku Sato",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 48,
        nameJa: "高本 光規",
        nameEn: "Mituki Takamoto",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "absent"
        }
    },
    {
        id: 49,
        nameJa: "吉岡 汰涼",
        nameEn: "Taisuke Yoshioka",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "absent",
            alumni: "attending"
        }
    },
    {
        id: 50,
        nameJa: "吉本 穣",
        nameEn: "Minoru Yoshimoto",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    // 2023年度 学士課程
    {
        id: 51,
        nameJa: "倉方 歩",
        nameEn: "Ayumu Kurakata",
        year: 2023,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 52,
        nameJa: "竹中 亮太",
        nameEn: "Ryota Takenaka",
        year: 2023,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 53,
        nameJa: "Wang Wenhe",
        nameEn: "Wang Wenhe",
        year: 2023,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 54,
        nameJa: "小笹 翔士",
        nameEn: "Shoshi Kozasa",
        year: 2023,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 55,
        nameJa: "中山 優人",
        nameEn: "Yuto Nakayama",
        year: 2023,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    {
        id: 56,
        nameJa: "渡邊 一帆",
        nameEn: "Kazuho Watanabe",
        year: 2023,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    // 2022年度 修士課程
    {
        id: 1,
        nameJa: "熊谷 優佑",
        nameEn: "Yusuke Kumagai",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 2,
        nameJa: "鈴木 啓太",
        nameEn: "Keita Suzuki",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 3,
        nameJa: "鈴木 皓",
        nameEn: "Hikaru Suzuki",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "attending"
        }
    },
    {
        id: 4,
        nameJa: "前田 康貴",
        nameEn: "Kouki Maeda",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    {
        id: 5,
        nameJa: "梁島 一希",
        nameEn: "Kazuki Yanashima",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "absent",
            alumni: "attending"
        }
    },
    {
        id: 6,
        nameJa: "渡邊 一成",
        nameEn: "Kazunari Watanabe",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    // 2022年度 学士課程
    {
        id: 7,
        nameJa: "金子 泰輔",
        nameEn: "Taisuke Kaneko",
        year: 2022,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 8,
        nameJa: "小宮 佑太",
        nameEn: "Yuta Komiya",
        year: 2022,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    // 2021年度 修士課程
    {
        id: 9,
        nameJa: "志村 泰知",
        nameEn: "Taichi Shimura",
        year: 2021,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    {
        id: 10,
        nameJa: "堀切 翼",
        nameEn: "Tsubasa Horikiri",
        year: 2021,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 11,
        nameJa: "松島 涼介",
        nameEn: "Ryosuke Matsushima",
        year: 2021,
        course: "master",
        attendance: {
            openlab: "absent",
            alumni: "attending"
        }
    },
    // 2021年度 学士課程
    {
        id: 12,
        nameJa: "久保田 大輝",
        nameEn: "Hiroki Kubota",
        year: 2021,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 13,
        nameJa: "谷口 周平",
        nameEn: "Syuhei Taniguchi",
        year: 2021,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 14,
        nameJa: "篠田 拓真",
        nameEn: "Takuma Shinoda",
        year: 2021,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "absent"
        }
    },
    {
        id: 15,
        nameJa: "小林 遼",
        nameEn: "Ryo Kobayashi",
        year: 2021,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    // 2020年度 修士課程
    {
        id: 16,
        nameJa: "谷口 和輝",
        nameEn: "Kazuki Taniguchi",
        year: 2020,
        course: "master",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    // 2020年度 学士課程
    {
        id: 17,
        nameJa: "榎本 一舞",
        nameEn: "Kazuma Enomoto",
        year: 2020,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 18,
        nameJa: "植木 克也",
        nameEn: "Katsuya Ueki",
        year: 2020,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 19,
        nameJa: "末村 萌",
        nameEn: "Moe Suemura",
        year: 2020,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    // 2019年度 修士課程
    {
        id: 20,
        nameJa: "佐藤 芳紀",
        nameEn: "Yoshiki Sato",
        year: 2019,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    // 2019年度 学士課程
    {
        id: 21,
        nameJa: "岡野 壮一郎",
        nameEn: "Soichiro Okano",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 22,
        nameJa: "小崎 晃",
        nameEn: "Akira Ozaki",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "attending"
        }
    },
    {
        id: 23,
        nameJa: "斉藤 幸丸",
        nameEn: "Yukimaru Saito",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    {
        id: 24,
        nameJa: "榊原 碧",
        nameEn: "Midori Sakakibara",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    },
    {
        id: 25,
        nameJa: "清水 敬介",
        nameEn: "Kesuke Shimizu",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "absent",
            alumni: "attending"
        }
    },
    {
        id: 26,
        nameJa: "鈴木 凜汰郎",
        nameEn: "Rintaro Suzuki",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "pending"
        }
    },
    {
        id: 27,
        nameJa: "高橋 遼人",
        nameEn: "Ryoto Takahashi",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 28,
        nameJa: "早坂 雄介",
        nameEn: "Yusuke Hayasaka",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "absent"
        }
    },
    {
        id: 29,
        nameJa: "山崎 陽斗",
        nameEn: "Haruto Yamazaki",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "attending",
            alumni: "attending"
        }
    }
];

// グローバル変数
let currentEvent = 'both';
let filteredData = [...alumniData];

// DOM要素
const eventButtons = document.querySelectorAll('.event-btn');
const alumniGrid = document.getElementById('alumni-grid');
const yearFilter = document.getElementById('year-filter');
const courseFilter = document.getElementById('course-filter');
const statusFilter = document.getElementById('status-filter');

// 統計表示要素
const totalAlumniEl = document.getElementById('total-alumni');
const attendingCountEl = document.getElementById('attending-count');
const absentCountEl = document.getElementById('absent-count');
const pendingCountEl = document.getElementById('pending-count');

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    renderAlumni();
    updateStats();
});

// イベントリスナーの設定
function initializeEventListeners() {
    // イベント選択ボタン
    eventButtons.forEach(button => {
        button.addEventListener('click', function() {
            eventButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentEvent = this.dataset.event;
            renderAlumni();
            updateStats();
        });
    });

    // フィルター
    yearFilter.addEventListener('change', applyFilters);
    courseFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
}

// フィルターの適用
function applyFilters() {
    filteredData = alumniData.filter(alumni => {
        const yearMatch = yearFilter.value === 'all' || alumni.year.toString() === yearFilter.value;
        const courseMatch = courseFilter.value === 'all' || alumni.course === courseFilter.value;
        
        // 状況フィルターは選択されたイベントモードに応じて適用
        let statusMatch = true;
        if (statusFilter.value !== 'all') {
            if (currentEvent === 'both') {
                // 全イベント表示モードの場合、どちらかのイベントで条件に合えばOK
                statusMatch = alumni.attendance.openlab === statusFilter.value || 
                             alumni.attendance.alumni === statusFilter.value;
            } else {
                statusMatch = alumni.attendance[currentEvent] === statusFilter.value;
            }
        }
        
        return yearMatch && courseMatch && statusMatch;
    });
    
    renderAlumni();
    updateStats();
}

// 卒業生カードの生成（オープンラボと同窓会の出席状況を同時表示）
function createAlumniCard(alumni) {
    const courseText = alumni.course === 'master' ? '修士' : '学士';
    
    // プレースホルダー画像（実際の実装では適切な画像を使用）
    const photoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.nameEn)}&size=100&background=random&color=fff&format=png`;
    
    // 表示モードに応じて出席状況を表示
    let attendanceHtml = '';
    if (currentEvent === 'both') {
        attendanceHtml = `
            <div class="attendance-status">
                <div class="attendance-item">
                    <div class="attendance-label">オープンラボ</div>
                    <span class="status-badge status-${alumni.attendance.openlab}">${getStatusText(alumni.attendance.openlab)}</span>
                </div>
                <div class="attendance-item">
                    <div class="attendance-label">同窓会</div>
                    <span class="status-badge status-${alumni.attendance.alumni}">${getStatusText(alumni.attendance.alumni)}</span>
                </div>
            </div>
        `;
    } else {
        const eventName = currentEvent === 'openlab' ? 'オープンラボ' : '同窓会';
        attendanceHtml = `
            <div class="attendance-status">
                <div class="attendance-item">
                    <div class="attendance-label">${eventName}</div>
                    <span class="status-badge status-${alumni.attendance[currentEvent]}">${getStatusText(alumni.attendance[currentEvent])}</span>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="alumni-card" data-year="${alumni.year}" data-course="${alumni.course}">
            <img src="${photoUrl}" alt="${alumni.nameJa}" class="alumni-photo" loading="lazy">
            <div class="alumni-name">${alumni.nameJa}</div>
            <div class="alumni-name-en">${alumni.nameEn}</div>
            <div class="alumni-info">
                <span class="alumni-year">${alumni.year}年</span>
                <span class="alumni-course">${courseText}課程</span>
            </div>
            ${attendanceHtml}
        </div>
    `;
}

// 出席状況テキストの取得
function getStatusText(status) {
    switch(status) {
        case 'attending': return '出席';
        case 'absent': return '欠席';
        case 'pending': return '未回答';
        default: return '未回答';
    }
}

// 卒業生リストの描画
function renderAlumni() {
    if (filteredData.length === 0) {
        alumniGrid.innerHTML = '<div class="no-results">該当する卒業生が見つかりませんでした。</div>';
        return;
    }

    // 年度別にグループ化
    const groupedByYear = filteredData.reduce((acc, alumni) => {
        if (!acc[alumni.year]) {
            acc[alumni.year] = [];
        }
        acc[alumni.year].push(alumni);
        return acc;
    }, {});

    // 年度順（降順）でソート
    const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

    let html = '';
    sortedYears.forEach(year => {
        const yearAlumni = groupedByYear[year];
        const yearStats = calculateYearStats(yearAlumni);
        
        html += `
            <div class="year-section">
                <div class="year-header">
                    <h3 class="year-title">${year}年度卒業生</h3>
                    <div class="year-stats">
                        <div class="year-stat">
                            <div class="year-stat-number">${yearStats.total}</div>
                            <div class="year-stat-label">総数</div>
                        </div>
                        <div class="year-stat">
                            <div class="year-stat-number">${yearStats.attending}</div>
                            <div class="year-stat-label">出席</div>
                        </div>
                        <div class="year-stat">
                            <div class="year-stat-number">${yearStats.absent}</div>
                            <div class="year-stat-label">欠席</div>
                        </div>
                        <div class="year-stat">
                            <div class="year-stat-number">${yearStats.pending}</div>
                            <div class="year-stat-label">未回答</div>
                        </div>
                    </div>
                </div>
                <div class="alumni-grid">
                    ${yearAlumni.map(alumni => createAlumniCard(alumni)).join('')}
                </div>
            </div>
        `;
    });

    alumniGrid.innerHTML = html;
}

// 年度別統計の計算
function calculateYearStats(yearAlumni) {
    if (currentEvent === 'both') {
        // 全イベント表示モードの場合、オープンラボの統計を表示
        return {
            total: yearAlumni.length,
            attending: yearAlumni.filter(a => a.attendance.openlab === 'attending').length,
            absent: yearAlumni.filter(a => a.attendance.openlab === 'absent').length,
            pending: yearAlumni.filter(a => a.attendance.openlab === 'pending').length
        };
    } else {
        return {
            total: yearAlumni.length,
            attending: yearAlumni.filter(a => a.attendance[currentEvent] === 'attending').length,
            absent: yearAlumni.filter(a => a.attendance[currentEvent] === 'absent').length,
            pending: yearAlumni.filter(a => a.attendance[currentEvent] === 'pending').length
        };
    }
}

// 統計の更新
function updateStats() {
    let stats;
    
    if (currentEvent === 'both') {
        // 全イベント表示モードの場合、オープンラボの統計を表示
        stats = {
            total: filteredData.length,
            attending: filteredData.filter(a => a.attendance.openlab === 'attending').length,
            absent: filteredData.filter(a => a.attendance.openlab === 'absent').length,
            pending: filteredData.filter(a => a.attendance.openlab === 'pending').length
        };
    } else {
        stats = {
            total: filteredData.length,
            attending: filteredData.filter(a => a.attendance[currentEvent] === 'attending').length,
            absent: filteredData.filter(a => a.attendance[currentEvent] === 'absent').length,
            pending: filteredData.filter(a => a.attendance[currentEvent] === 'pending').length
        };
    }

    // アニメーション付きで数値を更新
    animateNumber(totalAlumniEl, stats.total);
    animateNumber(attendingCountEl, stats.attending);
    animateNumber(absentCountEl, stats.absent);
    animateNumber(pendingCountEl, stats.pending);
}

// 数値アニメーション
function animateNumber(element, targetValue) {
    const startValue = parseInt(element.textContent) || 0;
    const duration = 500;
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// 検索機能（オプション）
function searchAlumni(searchTerm) {
    if (!searchTerm) {
        filteredData = [...alumniData];
    } else {
        filteredData = alumniData.filter(alumni => 
            alumni.nameJa.includes(searchTerm) || 
            alumni.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    renderAlumni();
    updateStats();
}

// 出席状況の更新（管理者機能）
function updateAttendanceStatus(alumniId, event, status) {
    const alumni = alumniData.find(a => a.id === alumniId);
    if (alumni) {
        alumni.attendance[event] = status;
        renderAlumni();
        updateStats();
    }
}

// エクスポート機能
function exportData() {
    const dataToExport = filteredData.map(alumni => ({
        名前: alumni.nameJa,
        英名: alumni.nameEn,
        年度: alumni.year,
        課程: alumni.course === 'master' ? '修士' : '学士',
        オープンラボ: getStatusText(alumni.attendance.openlab),
        同窓会: getStatusText(alumni.attendance.alumni)
    }));

    const csvContent = convertToCSV(dataToExport);
    downloadCSV(csvContent, `卒業生出席状況_${new Date().toISOString().split('T')[0]}.csv`);
}

// CSV変換
function convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
    
    data.forEach(row => {
        const values = headers.map(header => {
            const value = row[header];
            return typeof value === 'string' ? `"${value}"` : value;
        });
        csvRows.push(values.join(','));
    });
    
    return csvRows.join('\n');
}

// CSVダウンロード
function downloadCSV(csvContent, filename) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// ローカルストレージへの保存
function saveToLocalStorage() {
    localStorage.setItem('alumniData', JSON.stringify(alumniData));
}

// ローカルストレージからの読み込み
function loadFromLocalStorage() {
    const saved = localStorage.getItem('alumniData');
    if (saved) {
        const loadedData = JSON.parse(saved);
        alumniData.splice(0, alumniData.length, ...loadedData);
        renderAlumni();
        updateStats();
    }
} 
