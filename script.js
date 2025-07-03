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
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 44,
        nameJa: "小川 泰輝",
        nameEn: "Taiki Ogawa",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "pending",
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
            openlab: "pending",
            alumni: "pending"
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
            alumni: "pending"
        }
    },
    {
        id: 47,
        nameJa: "佐藤 陸",
        nameEn: "Riku Sato",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 48,
        nameJa: "高本 光規",
        nameEn: "Mituki Takamoto",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 49,
        nameJa: "吉岡 汰涼",
        nameEn: "Taisuke Yoshioka",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 50,
        nameJa: "吉本 穣",
        nameEn: "Minoru Yoshimoto",
        year: 2023,
        course: "master",
        attendance: {
            openlab: "pending",
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
            openlab: "pending",
            alumni: "pending"
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
            openlab: "pending",
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
            openlab: "attending",
            alumni: "attending"
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
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 2,
        nameJa: "鈴木 啓太",
        nameEn: "Keita Suzuki",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
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
            alumni: "pending"
        }
    },
    {
        id: 4,
        nameJa: "前田 康貴",
        nameEn: "Kouki Maeda",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "pending",
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
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 6,
        nameJa: "渡邊 一成",
        nameEn: "Kazunari Watanabe",
        year: 2022,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
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
            openlab: "pending",
            alumni: "pending"
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
            alumni: "attending"
        }
    },
    {
        id: 10,
        nameJa: "堀切 翼",
        nameEn: "Tsubasa Horikiri",
        year: 2021,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 11,
        nameJa: "松島 涼介",
        nameEn: "Ryosuke Matsushima",
        year: 2021,
        course: "master",
        attendance: {
            openlab: "pending",
            alumni: "pending"
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
            openlab: "pending",
            alumni: "pending"
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
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 15,
        nameJa: "小林 遼",
        nameEn: "Ryo Kobayashi",
        year: 2021,
        course: "bachelor",
        attendance: {
            openlab: "pending",
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
            openlab: "pending",
            alumni: "pending"
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
            openlab: "pending",
            alumni: "pending"
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
            openlab: "pending",
            alumni: "pending"
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
            alumni: "pending"
        }
    },
    {
        id: 23,
        nameJa: "斉藤 幸丸",
        nameEn: "Yukimaru Saito",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "pending",
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
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 25,
        nameJa: "清水 敬介",
        nameEn: "Kesuke Shimizu",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 26,
        nameJa: "鈴木 凜汰郎",
        nameEn: "Rintaro Suzuki",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "pending",
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
            openlab: "pending",
            alumni: "pending"
        }
    },
    {
        id: 29,
        nameJa: "山崎 陽斗",
        nameEn: "Haruto Yamazaki",
        year: 2019,
        course: "bachelor",
        attendance: {
            openlab: "pending",
            alumni: "pending"
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

// 調整さん連携機能
const CHOUSEISAN_URL = 'https://chouseisan.com/s?h=964f3514cc0f4a01bfc6d02447c3882e';

// 調整さんからデータを取得する関数
async function fetchChousesanData() {
    try {
        // CORS制限を回避するためのプロキシサービスを使用
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = encodeURIComponent(CHOUSEISAN_URL);
        
        showLoadingIndicator('調整さんからデータを取得中...');
        
        const response = await fetch(proxyUrl + targetUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const htmlContent = data.contents;
        
        // HTMLを解析して出欠データを抽出
        const attendanceData = parseChousesanHTML(htmlContent);
        return attendanceData;
        
    } catch (error) {
        console.error('調整さんデータの取得に失敗しました:', error);
        showErrorMessage('調整さんからのデータ取得に失敗しました。手動で更新してください。');
        return null;
    } finally {
        hideLoadingIndicator();
    }
}

// 調整さんのHTMLを解析して出欠データを抽出
function parseChousesanHTML(htmlContent) {
    try {
        // DOMParserを使用してHTMLを解析
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        
        // 出欠表のテーブルを取得
        const table = doc.querySelector('table');
        if (!table) {
            throw new Error('出欠表が見つかりませんでした');
        }
        
        const attendanceData = [];
        const rows = table.querySelectorAll('tr');
        
        // ヘッダー行をスキップして処理
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const cells = row.querySelectorAll('td');
            
            if (cells.length >= 3) {
                const nameCell = cells[0];
                const name = nameCell.textContent.trim();
                
                // ラボツアーと同窓会の出欠状況を取得
                const labTourStatus = cells[1] ? parseAttendanceStatus(cells[1].textContent.trim()) : 'pending';
                const reunionStatus = cells[2] ? parseAttendanceStatus(cells[2].textContent.trim()) : 'pending';
                
                attendanceData.push({
                    name: name,
                    labTour: labTourStatus,
                    reunion: reunionStatus
                });
            }
        }
        
        return attendanceData;
        
    } catch (error) {
        console.error('HTMLの解析に失敗しました:', error);
        return [];
    }
}

// 調整さんの出欠記号を内部形式に変換
function parseAttendanceStatus(statusText) {
    const status = statusText.toLowerCase().trim();
    
    if (status.includes('○') || status.includes('出席') || status.includes('参加')) {
        return 'attending';
    } else if (status.includes('×') || status.includes('欠席') || status.includes('不参加')) {
        return 'absent';
    } else if (status.includes('△') || status.includes('未定') || status.includes('保留')) {
        return 'pending';
    } else if (status === '' || status.includes('未回答')) {
        return 'pending';
    }
    
    return 'pending';
}

// 名前マッチング機能
function findAlumniByName(chousesanName) {
    // 完全一致を最優先
    let match = alumniData.find(alumni => 
        alumni.nameJa === chousesanName || 
        alumni.nameEn === chousesanName
    );
    
    if (match) return match;
    
    // 姓名の部分一致（日本語）
    match = alumniData.find(alumni => {
        const [familyName, givenName] = alumni.nameJa.split(' ');
        return chousesanName.includes(familyName) || chousesanName.includes(givenName);
    });
    
    if (match) return match;
    
    // 英語名での部分一致
    match = alumniData.find(alumni => {
        const [firstName, lastName] = alumni.nameEn.split(' ');
        const lowerChousesanName = chousesanName.toLowerCase();
        return lowerChousesanName.includes(firstName.toLowerCase()) || 
               lowerChousesanName.includes(lastName.toLowerCase());
    });
    
    return match || null;
}

// 調整さんデータを使用して出欠状況を更新
async function updateFromChouseisan() {
    const chousesanData = await fetchChousesanData();
    if (!chousesanData) return;
    
    let updateCount = 0;
    const updateLog = [];
    
    chousesanData.forEach(chousesanEntry => {
        const alumni = findAlumniByName(chousesanEntry.name);
        
        if (alumni) {
            const oldOpenlab = alumni.attendance.openlab;
            const oldAlumni = alumni.attendance.alumni;
            
            // ラボツアー（オープンラボ）の出欠を更新
            alumni.attendance.openlab = chousesanEntry.labTour;
            // 同窓会の出欠を更新
            alumni.attendance.alumni = chousesanEntry.reunion;
            
            updateLog.push({
                name: alumni.nameJa,
                openlab: { old: oldOpenlab, new: chousesanEntry.labTour },
                alumni: { old: oldAlumni, new: chousesanEntry.reunion }
            });
            
            updateCount++;
        } else {
            console.warn(`マッチする卒業生が見つかりません: ${chousesanEntry.name}`);
        }
    });
    
    // データを保存
    saveToLocalStorage();
    
    // UI を更新
    renderAlumni();
    updateStats();
    
    // 更新結果を表示
    showUpdateResults(updateCount, updateLog);
}

// 更新結果を表示
function showUpdateResults(updateCount, updateLog) {
    const modal = document.createElement('div');
    modal.className = 'update-results-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-sync-alt"></i> 調整さん連携結果</h3>
                <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="update-summary">
                    <p><strong>${updateCount}名</strong>の出欠状況を更新しました。</p>
                </div>
                <div class="update-details">
                    ${updateLog.map(log => `
                        <div class="update-item">
                            <div class="update-name">${log.name}</div>
                            <div class="update-changes">
                                <div class="change-item">
                                    <span class="change-label">ラボツアー:</span>
                                    <span class="status-change">
                                        <span class="status-badge status-${log.openlab.old}">${getStatusText(log.openlab.old)}</span>
                                        <i class="fas fa-arrow-right"></i>
                                        <span class="status-badge status-${log.openlab.new}">${getStatusText(log.openlab.new)}</span>
                                    </span>
                                </div>
                                <div class="change-item">
                                    <span class="change-label">同窓会:</span>
                                    <span class="status-change">
                                        <span class="status-badge status-${log.alumni.old}">${getStatusText(log.alumni.old)}</span>
                                        <i class="fas fa-arrow-right"></i>
                                        <span class="status-badge status-${log.alumni.new}">${getStatusText(log.alumni.new)}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 5秒後に自動で閉じる
    setTimeout(() => {
        if (modal.parentElement) {
            modal.remove();
        }
    }, 10000);
}

// ローディングインジケーター表示
function showLoadingIndicator(message) {
    const indicator = document.createElement('div');
    indicator.id = 'loading-indicator';
    indicator.className = 'loading-indicator';
    indicator.innerHTML = `
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <div class="loading-text">${message}</div>
        </div>
    `;
    document.body.appendChild(indicator);
}

// ローディングインジケーター非表示
function hideLoadingIndicator() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// エラーメッセージ表示
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div class="error-content">
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    document.body.appendChild(errorDiv);
    
    // 5秒後に自動で閉じる
    setTimeout(() => {
        if (errorDiv.parentElement) {
            errorDiv.remove();
        }
    }, 5000);
}

// 手動データ入力機能
function showManualDataInput() {
    const modal = document.createElement('div');
    modal.className = 'update-results-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3><i class="fas fa-edit"></i> 手動データ入力</h3>
                <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="manual-input-info">
                    <p>調整さんのデータを手動で入力してください。</p>
                    <p>形式: 名前,ラボツアー出欠,同窓会出欠（1行に1人）</p>
                    <p>出欠記号: ○=出席, ×=欠席, △=未定, 空白=未回答</p>
                </div>
                <textarea id="manual-data-input" placeholder="例:&#10;田中太郎,○,○&#10;佐藤花子,×,△&#10;山田次郎,,○" rows="10" style="width: 100%; margin: 1rem 0; padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px; font-family: monospace;"></textarea>
                <div class="manual-input-buttons">
                    <button class="bulk-btn" onclick="processManualData()">
                        <i class="fas fa-upload"></i>
                        データを適用
                    </button>
                    <button class="bulk-btn" onclick="this.closest('.update-results-modal').remove()">
                        <i class="fas fa-times"></i>
                        キャンセル
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// 手動入力データの処理
function processManualData() {
    const textarea = document.getElementById('manual-data-input');
    const inputData = textarea.value.trim();
    
    if (!inputData) {
        showErrorMessage('データが入力されていません。');
        return;
    }
    
    const lines = inputData.split('\n').filter(line => line.trim());
    let updateCount = 0;
    const updateLog = [];
    
    lines.forEach(line => {
        const parts = line.split(',').map(part => part.trim());
        if (parts.length >= 1) {
            const name = parts[0];
            const labTourStatus = parts[1] ? parseAttendanceStatus(parts[1]) : 'pending';
            const reunionStatus = parts[2] ? parseAttendanceStatus(parts[2]) : 'pending';
            
            const alumni = findAlumniByName(name);
            if (alumni) {
                const oldOpenlab = alumni.attendance.openlab;
                const oldAlumni = alumni.attendance.alumni;
                
                alumni.attendance.openlab = labTourStatus;
                alumni.attendance.alumni = reunionStatus;
                
                updateLog.push({
                    name: alumni.nameJa,
                    openlab: { old: oldOpenlab, new: labTourStatus },
                    alumni: { old: oldAlumni, new: reunionStatus }
                });
                
                updateCount++;
            } else {
                console.warn(`マッチする卒業生が見つかりません: ${name}`);
            }
        }
    });
    
    // データを保存
    saveToLocalStorage();
    
    // UI を更新
    renderAlumni();
    updateStats();
    
    // モーダルを閉じる
    document.querySelector('.update-results-modal').remove();
    
    // 更新結果を表示
    showUpdateResults(updateCount, updateLog);
}

// 調整さん連携の拡張機能
async function updateFromChousesanWithFallback() {
    try {
        await updateFromChouseisan();
    } catch (error) {
        console.error('自動取得に失敗しました:', error);
        const confirmManual = confirm('自動取得に失敗しました。手動でデータを入力しますか？');
        if (confirmManual) {
            showManualDataInput();
        }
    }
} 
