// ─── COURSE DATA ────────────────────────────────────────────────
const PRELOADED_COURSES = [{
  id: "wdc",
  name: "Western Dooars Golf Course",
  shortName: "WDC",
  location: "Ranicherra Tea Garden, Dooars",
  par: 72,
  totalYards: 6562,
  holes: [{
    num: 1,
    par: 4,
    yards: 350,
    strokeindex: 12
  }, {
    num: 2,
    par: 4,
    yards: 450,
    strokeindex: 4
    
  }, {
    num: 3,
    par: 4,
    yards: 420,
    strokeindex: 6
  }, {
    num: 4,
    par: 4,
    yards: 350,
    strokeindex: 10
  }, {
    num: 5,
    par: 4,
    yards: 340,
    strokeindex: 14
  }, {
    num: 6,
    par: 5,
    yards: 500,
    strokeindex: 2

  }, {
    num: 7,
    par: 3,
    yards: 215,
    strokeindex: 16
  }, {
    num: 8,
    par: 5,
    yards: 480,
    strokeindex: 8
  }, {
    num: 9,
    par: 3,
    yards: 126,
    strokeindex: 18
  }, {
    num: 10,
    par: 4,
    yards: 350,
    strokeindex: 11
  }, {
    num: 11,
    par: 5,
    yards: 495,
    strokeindex: 3
  }, {
    num: 12,
    par: 4,
    yards: 444,
    strokeindex: 7
  }, {
    num: 13,
    par: 4,
    yards: 371,
    strokeindex: 9
  }, {
    num: 14,
    par: 4,
    yards: 355,
    strokeindex: 13
  }, {
    num: 15,
    par: 5,
    yards: 515,
    strokeindex: 1
  }, {
    num: 16,
    par: 3,
    yards: 224,
    strokeindex: 15
  }, {
    num: 17,
    par: 4,
    yards: 458,
    strokeindex: 5
  }, {
    num: 18,
    par: 3,
    yards: 120,
    strokeindex: 17
  }]
}, {
  id: "tolly",
  name: "Tollygunge Club",
  shortName: "Tolly Club",
  location: "Tollygunge, Kolkata",
  established: 1895,
  par: 70,
  totalYards: 6281,
  slope: 117,
  rating: 68.7,
  tees: "Blue",
  holes: [{
    num: 1,
    par: 4,
    yards: 404,
    strokeindex: 7
  }, {
    num: 2,
    par: 3,
    yards: 170,
    strokeindex: 17
  }, {
    num: 3,
    par: 4,
    yards: 414,
    strokeindex: 1
  }, {
    num: 4,
    par: 4,
    yards: 398,
    strokeindex: 11
  }, {
    num: 5,
    par: 4,
    yards: 403,
    strokeindex: 3
  }, {
    num: 6,
    par: 3,
    yards: 215,
    strokeindex: 13
  }, {
    num: 7,
    par: 5,
    yards: 491,
    strokeindex: 9
  }, {
    num: 8,
    par: 3,
    yards: 177,
    strokeindex: 15
  }, {
    num: 9,
    par: 4,
    yards: 433,
    strokeindex: 5
  }, {
    num: 10,
    par: 5,
    yards: 509,
    strokeindex: 14
  }, {
    num: 11,
    par: 3,
    yards: 174,
    strokeindex: 16
  }, {
    num: 12,
    par: 4,
    yards: 369,
    strokeindex: 10
  }, {
    num: 13,
    par: 5,
    yards: 497,
    strokeindex: 4
  }, {
    num: 14,
    par: 4,
    yards: 356,
    strokeindex: 12
  }, {
    num: 15,
    par: 4,
    yards: 310,
    strokeindex: 6
  }, {
    num: 16,
    par: 4,
    yards: 391,
    strokeindex: 2
  }, {
    num: 17,
    par: 4,
    yards: 368,
    strokeindex: 8
  }, {
    num: 18,
    par: 3,
    yards: 202,
    strokeindex: 18
  }]
}, {
  id: "fortw",
  name: "Fort William Golf Course",
  shortName: "Fort William",
  location: "Maidan, Kolkata",
  established: 1963,
  par: 71,
  totalYards: 6180,
  slope: 120,
  rating: 69.0,
  tees: "White",
  holes: [{
    num: 1,
    par: 4,
    yards: 385,
    strokeindex: 5
  }, {
    num: 2,
    par: 4,
    yards: 360,
    strokeindex: 9
  }, {
    num: 3,
    par: 3,
    yards: 165,
    strokeindex: 15
  }, {
    num: 4,
    par: 5,
    yards: 510,
    strokeindex: 1
  }, {
    num: 5,
    par: 4,
    yards: 370,
    strokeindex: 7
  }, {
    num: 6,
    par: 3,
    yards: 175,
    strokeindex: 17
  }, {
    num: 7,
    par: 4,
    yards: 395,
    strokeindex: 3
  }, {
    num: 8,
    par: 4,
    yards: 340,
    strokeindex: 13
  }, {
    num: 9,
    par: 4,
    yards: 355,
    strokeindex: 11
  }, {
    num: 10,
    par: 4,
    yards: 380,
    strokeindex: 4
  }, {
    num: 11,
    par: 5,
    yards: 490,
    strokeindex: 10
  }, {
    num: 12,
    par: 3,
    yards: 155,
    strokeindex: 18
  }, {
    num: 13,
    par: 4,
    yards: 365,
    strokeindex: 6
  }, {
    num: 14,
    par: 4,
    yards: 350,
    strokeindex: 12
  }, {
    num: 15,
    par: 4,
    yards: 400,
    strokeindex: 2
  }, {
    num: 16,
    par: 5,
    yards: 505,
    strokeindex: 8
  }, {
    num: 17,
    par: 3,
    yards: 170,
    strokeindex: 16
  }, {
    num: 18,
    par: 4,
    yards: 310,
    strokeindex: 14
  }]
}];
const KEY = "birdie-v3";
const pid = () => Math.random().toString(36).slice(2, 8);
const fmtDate = d => new Date(d).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric"
});
const diffMeta = d => {
  if (d <= -2) return {
    label: "Eagle",
    bg: "#c41230",
    color: "#fff"
  };
  if (d === -1) return {
    label: "Birdie",
    bg: "#c41230",
    color: "#fff"
  };
  if (d === 0) return {
    label: "Par",
    bg: "#1a4731",
    color: "#fff"
  };
  if (d === 1) return {
    label: "Bogey",
    bg: "#f0ece4",
    color: "#1a1915"
  };
  if (d === 2) return {
    label: "Double",
    bg: "#e8e2d8",
    color: "#1a1915"
  };
  return {
    label: `+${d}`,
    bg: "#ddd8cc",
    color: "#1a1915"
  };
};
const scoreLabel = (s, par) => {
  if (!s) return "—";
  const d = s - par;
  if (d <= -2) return "Eagle";
  if (d === -1) return "Birdie";
  if (d === 0) return "Par";
  if (d === 1) return "Bogey";
  if (d === 2) return "Double";
  return `+${d}`;
};
const scoreTextColor = (s, par) => {
  if (!s) return "var(--muted)";
  const d = s - par;
  if (d < 0) return "var(--red)";
  if (d === 0) return "var(--green)";
  return "var(--text)";
};
const playerTotal = function (round, pid, upTo) {
  if (upTo === void 0) {
    upTo = null;
  }
  const holes = upTo !== null ? round.holes.slice(0, upTo + 1) : round.holes;
  return holes.reduce((a, h) => {
    var _h$scores;
    return a + (((_h$scores = h.scores) == null || (_h$scores = _h$scores[pid]) == null ? void 0 : _h$scores.strokes) || 0);
  }, 0);
};
const emptyScore = () => ({
  strokes: 0,
  putts: 0,
  fairway: null,
  gir: null
});

// ─── ROOT ───────────────────────────────────────────────────────
function Birdie() {
  const _useState = useState("home"),
    view = _useState[0],
    setView = _useState[1];
  const _useState2 = useState(PRELOADED_COURSES),
    courses = _useState2[0],
    setCourses = _useState2[1];
  const _useState3 = useState([]),
    rounds = _useState3[0],
    setRounds = _useState3[1];
  const _useState4 = useState(""),
    playerName = _useState4[0],
    setName = _useState4[1];
  const _useState5 = useState(null),
    activeRound = _useState5[0],
    setActiveRound = _useState5[1];
  const _useState6 = useState(null),
    focusRound = _useState6[0],
    setFocus = _useState6[1];
  const _useState7 = useState(false),
    loaded = _useState7[0],
    setLoaded = _useState7[1];
  const _useState9 = useState(false),
    updateReady = _useState9[0],
    setUpdateReady = _useState9[1];
  useEffect(() => {
    (async () => {
      try {
        const saved = localStorage.getItem(KEY);
        const r = saved ? {
          value: saved
        } : null;
        if (r != null && r.value) {
          var _d$courses;
          const d = JSON.parse(r.value);
          if ((_d$courses = d.courses) != null && _d$courses.length) setCourses(d.courses);
          if (d.rounds) setRounds(d.rounds);
          if (d.playerName) setName(d.playerName);
        }
      } catch {}
      setLoaded(true);
    })();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', e => {
        if (e.data === 'UPDATE_READY') setUpdateReady(true);
      });
      navigator.serviceWorker.getRegistration().then(reg => {
        if (reg && reg.waiting) setUpdateReady(true);
        if (reg) {
          reg.addEventListener('updatefound', () => {
            const nw = reg.installing;
            if (nw) nw.addEventListener('statechange', () => {
              if (nw.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateReady(true);
              }
            });
          });
        }
      });
    }
  }, []);
  const save = useCallback(async (c, r, p) => {
    try {
      localStorage.setItem(KEY, JSON.stringify({
        courses: c ?? courses,
        rounds: r ?? rounds,
        playerName: p ?? playerName
      }));
    } catch {}
  }, [courses, rounds, playerName]);
  const finishRound = async round => {
    const done = {
      ...round,
      completed: true
    };
    const nr = [...rounds, done];
    setRounds(nr);
    setFocus(done);
    setActiveRound(null);
    await save(courses, nr, playerName);
    setView("summary");
  };
  // Clear all round scores (keeps name + courses)
const clearRounds = async () => {
  setRounds([]);
  setActiveRound(null);
  await save(courses, [], playerName);
};

// Full reset — wipe everything, return to login
const resetAll = async () => {
  localStorage.removeItem(KEY);
  setRounds([]);
  setActiveRound(null);
  setName("");
};
  const deleteRound = async id => {
    const nr = rounds.filter(r => r.id !== id);
    setRounds(nr);
    await save(courses, nr, playerName);
  };
  const addCourse = async course => {
    const nc = [...courses, course];
    setCourses(nc);
    await save(nc, rounds, playerName);
  };
  const saveName = async n => {
    setName(n);
    await save(courses, rounds, n);
  };
  if (!loaded) return null;
  if (!playerName) return /*#__PURE__*/React.createElement(Welcome, {
    onSubmit: saveName
  });
  return /*#__PURE__*/React.createElement("div", {
    style: S.app
  }, /*#__PURE__*/React.createElement("style", null, CSS), updateReady && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      background: "var(--gold-dec)", padding: "12px 16px",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12
    }
  },
  /*#__PURE__*/React.createElement("div", {
    style: {fontSize: 13, color: "#1a1915", fontFamily: "var(--fb)", fontWeight: 500, lineHeight: 1.4}
  }, "Fairway has been updated"),
  /*#__PURE__*/React.createElement("button", {
    onClick: () => window.location.reload(),
    style: {
      background: "var(--green)", color: "var(--white)", border: "none",
      padding: "8px 16px", borderRadius: "var(--r)", fontSize: 12, fontWeight: 600,
      fontFamily: "var(--fb)", letterSpacing: "0.06em", cursor: "pointer",
      textTransform: "uppercase", flexShrink: 0
    }
  }, "Tap to reload")), view === "home" && /*#__PURE__*/React.createElement(Home, {
    playerName: playerName,
    rounds: rounds,
    courses: courses,
    onNav: setView,
    onStartSetup: c => {
      setActiveRound({
        _course: c
      });
      setView("setup");
    },
    onSelectRound: r => {
      setFocus(r);
      setView("summary");
    }
  }), view === "setup" && (activeRound == null ? void 0 : activeRound._course) && /*#__PURE__*/React.createElement(Setup, {
    course: activeRound._course,
    ownerName: playerName,
    onBack: () => {
      setActiveRound(null);
      setView("home");
    },
    onStart: (players, hc) => {
      const c = activeRound._course,
        hs = c.holes.slice(0, hc);
      setActiveRound({
        id: pid(),
        courseId: c.id,
        courseName: c.name,
        date: new Date().toISOString(),
        par: hs.reduce((a, h) => a + h.par, 0),
        holeCount: hc,
        completed: false,
        players,
        holes: hs.map(h => ({
          num: h.num,
          par: h.par,
          yards: h.yards,
          strokeindex: h.strokeindex,
          scores: Object.fromEntries(players.map(p => [p.id, emptyScore()]))
        }))
      });
      setView("scoring");
    }
  }), view === "scoring" && (activeRound == null ? void 0 : activeRound.holes) && /*#__PURE__*/React.createElement(Scoring, {
    round: activeRound,
    onUpdate: setActiveRound,
    onFinish: finishRound,
    onBack: () => {
      setActiveRound(null);
      setView("home");
    },
    allRounds: rounds
  }), view === "summary" && focusRound && /*#__PURE__*/React.createElement(Summary, {
    round: focusRound,
    allRounds: rounds.filter(r => r.completed),
    onNavigate: r => setFocus(r),
    onBack: () => setView(rounds.some(r => r.id === focusRound.id) ? "history" : "home")
  }), view === "history" && /*#__PURE__*/React.createElement(History, {
    rounds: rounds,
    onBack: () => setView("home"),
    onSelect: r => {
      setFocus(r);
      setView("summary");
    },
    onDelete: deleteRound
  }), view === "analytics" && /*#__PURE__*/React.createElement(Analytics, {
    rounds: rounds,
    courses: courses,
    playerName: playerName,
    onBack: () => setView("home")
  }), view === "courses" && /*#__PURE__*/React.createElement(Courses, {
    courses: courses,
    onBack: () => setView("home"),
    onAdd: addCourse,
    onPlay: c => {
      setActiveRound({
        _course: c
      });
      setView("setup");
    }
  }), view === "profile" && /*#__PURE__*/React.createElement(Profile, {
    playerName: playerName,
    rounds: rounds,
    onSaveName: saveName,
    onClearRounds: clearRounds,
    onResetAll: resetAll, 
    onBack: () => setView("home")
  }));
}

// ─── WELCOME ────────────────────────────────────────────────────
function Welcome(_ref) {
  let onSubmit = _ref.onSubmit;
  const _useState8 = useState(""),
    name = _useState8[0],
    setName = _useState8[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.app,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "var(--green)",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      fontFamily: "var(--fd)",
      color: "var(--white)",
      fontWeight: 600,
      letterSpacing: "0.01em",
      lineHeight: 1
    }
  }, "Fairway"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 1,
      background: "var(--gold-dec)",
      margin: "16px auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.45)",
      letterSpacing: "0.16em",
      textTransform: "uppercase"
    }
  }, "Score \xB7 Track \xB7 Improve")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Your Name"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    onKeyDown: e => e.key === "Enter" && name.trim() && onSubmit(name.trim()),
    placeholder: "Enter your name",
    style: {
      width: "100%",
      padding: "14px 0",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      color: "var(--white)",
      fontSize: 20,
      fontFamily: "var(--fd)",
      letterSpacing: "0.01em",
      outline: "none",
      caretColor: "var(--gold-dec)"
    },
    autoFocus: true
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => name.trim() && onSubmit(name.trim()),
    disabled: !name.trim(),
    style: {
      width: "100%",
      marginTop: 28,
      padding: "15px",
      borderRadius: "var(--r)",
      background: name.trim() ? "var(--gold-dec)" : "rgba(255,255,255,0.1)",
      border: "none",
      color: "var(--white)",
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      fontFamily: "var(--fb)",
      cursor: name.trim() ? "pointer" : "default",
      transition: "background 0.2s"
    }
  }, "Enter")));
}

// ─── HOME ───────────────────────────────────────────────────────
function Home(_ref2) {
  let playerName = _ref2.playerName,
    rounds = _ref2.rounds,
    courses = _ref2.courses,
    onNav = _ref2.onNav,
    onStartSetup = _ref2.onStartSetup,
    onSelectRound = _ref2.onSelectRound;
  const done = rounds.filter(r => r.completed);
  const last = done[done.length - 1];
  const p0id = r => r.players[0].id;
  const roundScore = r => r.holes.reduce((a, h) => {
    var _h$scores2;
    return a + (((_h$scores2 = h.scores) == null || (_h$scores2 = _h$scores2[p0id(r)]) == null ? void 0 : _h$scores2.strokes) || 0);
  }, 0);
  const avg = done.length ? Math.round(done.reduce((s, r) => s + roundScore(r), 0) / done.length) : null;
  const best = done.length ? Math.min(...done.map(roundScore)) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement("div", {
    style: S.header
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 28,
      color: "var(--white)",
      fontWeight: 600,
      letterSpacing: "0.01em",
      lineHeight: 1
    }
  }, playerName)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("profile"),
    style: S.avatar
  }, playerName[0].toUpperCase())), done.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      margin: "0 0 1px"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    val: done.length,
    label: "Rounds"
  }), /*#__PURE__*/React.createElement(StatCard, {
    val: avg,
    label: "Avg Score"
  }), /*#__PURE__*/React.createElement(StatCard, {
    val: best,
    label: "Best Score",
    accent: true
  })), /*#__PURE__*/React.createElement(SectionLabel, null, "Play a Round"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 1
    }
  }, courses.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onStartSetup(c),
    style: S.courseRow
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text)",
      marginBottom: 3,
      fontFamily: "var(--fb)"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      fontFamily: "var(--fb)"
    }
  }, c.location, " \xB7 ", c.holes.length, " holes \xB7 Par ", c.par)), /*#__PURE__*/React.createElement("div", {
    style: S.playBtn
  }, "Play")))), last && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Last Round"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelectRound(last),
    style: {
      ...S.courseRow,
      flexDirection: "column",
      alignItems: "stretch",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text)",
      marginBottom: 2,
      fontFamily: "var(--fb)"
    }
  }, last.courseName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)"
    }
  }, fmtDate(last.date), " \xB7 ", last.holeCount || last.holes.length, " holes")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, last.players.map(p => {
    const tot = playerTotal(last, p.id),
      d = tot - last.par;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 6,
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--muted)"
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 24,
        fontWeight: 700,
        color: "var(--text)",
        lineHeight: 1
      }
    }, tot), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: d < 0 ? "var(--red)" : d === 0 ? "var(--green)" : "var(--text)"
      }
    }, d === 0 ? "E" : d > 0 ? `+${d}` : d));
  }))))), /*#__PURE__*/React.createElement(SectionLabel, null, "More"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1
    }
  }, [{
    label: "Courses",
    sub: "Manage courses",
    nav: "courses"
  }, {
    label: "Round History",
    sub: "View past rounds",
    nav: "history"
  }, {
    label: "Analytics",
    sub: "Stats & insights",
    nav: "analytics"
  }, {
    label: "Profile",
    sub: "Settings",
    nav: "profile"
  }].map(_ref3 => {
    let label = _ref3.label,
      sub = _ref3.sub,
      nav = _ref3.nav;
    return /*#__PURE__*/React.createElement("button", {
      key: nav,
      onClick: () => onNav(nav),
      style: S.navCard
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text)",
        fontFamily: "var(--fb)",
        marginBottom: 2
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--muted)"
      }
    }, sub));
  })));
}
function StatCard(_ref4) {
  let val = _ref4.val,
    label = _ref4.label,
    accent = _ref4.accent;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--white)",
      padding: "14px 12px",
      textAlign: "center",
      borderBottom: "2px solid " + (accent ? "var(--red)" : "var(--border-lt)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 26,
      fontWeight: 700,
      color: accent ? "var(--red)" : "var(--green)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, val || "—"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--muted)",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      marginTop: 4
    }
  }, label));
}
function SectionLabel(_ref5) {
  let children = _ref5.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 16px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--green)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      whiteSpace: "nowrap"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-lt)"
    }
  }));
}

// ─── SETUP ──────────────────────────────────────────────────────
function Setup(_ref6) {
  let course = _ref6.course,
    ownerName = _ref6.ownerName,
    onBack = _ref6.onBack,
    onStart = _ref6.onStart;
  const _useState9 = useState([{
      id: pid(),
      name: ownerName,
      isOwner: true
    }]),
    players = _useState9[0],
    setPlayers = _useState9[1];
  const _useState0 = useState(""),
    newName = _useState0[0],
    setNewName = _useState0[1];
  const maxH = course.holes.length;
  const _useState1 = useState(maxH >= 18 ? 9 : maxH),
    hc = _useState1[0],
    setHc = _useState1[1];
  const selPar = course.holes.slice(0, hc).reduce((a, h) => a + h.par, 0);
  const add = () => {
    if (!newName.trim()) return;
    setPlayers([...players, {
      id: pid(),
      name: newName.trim(),
      isOwner: false
    }]);
    setNewName("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    title: "Set Up Round"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderLeft: "3px solid var(--green)",
      padding: "14px 16px",
      marginTop: 16,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text)",
      fontFamily: "var(--fb)"
    }
  }, course.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      marginTop: 2
    }
  }, course.location, " \xB7 Est. ", course.established)), maxH >= 18 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Holes to Play"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 4
    }
  }, [9, 18].map(n => {
    const par9 = course.holes.slice(0, 9).reduce((a, h) => a + h.par, 0);
    const sel = hc === n;
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => setHc(n),
      style: {
        flex: 1,
        padding: "11px 12px",
        borderRadius: "var(--r)",
        background: sel ? "var(--green)" : "var(--white)",
        border: `1px solid ${sel ? "var(--green)" : "var(--border)"}`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: sel ? "var(--white)" : "var(--text)",
        fontFamily: "var(--fb)"
      }
    }, n, " holes"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: sel ? "rgba(255,255,255,0.65)" : "var(--muted)"
      }
    }, "Par ", n === 9 ? par9 : course.par), n === 9 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: sel ? "rgba(255,255,255,0.5)" : "var(--green)",
        letterSpacing: "0.1em",
        textTransform: "uppercase"
      }
    }, "Default"));
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "Players"), players.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--white)",
      padding: "12px 14px",
      marginBottom: 1,
      borderLeft: `3px solid ${p.isOwner ? "var(--green)" : "var(--border-lt)"}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: p.isOwner ? "var(--green)" : "var(--cream)",
      color: p.isOwner ? "var(--white)" : "var(--text-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      fontFamily: "var(--fd)",
      flexShrink: 0
    }
  }, p.name[0].toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text)"
    }
  }, p.name), p.isOwner && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--green)",
      letterSpacing: "0.04em"
    }
  }, "You")), !p.isOwner && /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlayers(players.filter(x => x.id !== p.id)),
    style: {
      background: "none",
      border: "none",
      color: "var(--muted)",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      padding: "4px"
    }
  }, "\xD7"))), players.length < 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newName,
    onChange: e => setNewName(e.target.value),
    onKeyDown: e => e.key === "Enter" && add(),
    placeholder: "Add player name",
    style: S.input
  }), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    disabled: !newName.trim(),
    style: {
      ...S.btnPrimary,
      padding: "10px 18px",
      opacity: newName.trim() ? 1 : 0.4,
      flexShrink: 0
    }
  }, "Add")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStart(players, hc),
    style: {
      ...S.btnPrimary,
      width: "100%",
      marginTop: 28,
      padding: 16
    }
  }, "Start ", hc, "-Hole Round")));
}

// ─── SCORE PILLS ────────────────────────────────────────────────
function ScorePills(_ref7) {
  let value = _ref7.value,
    par = _ref7.par,
    onChange = _ref7.onChange;
  const min = Math.max(1, par - 2);
  const max = par + 5;
  const nums = Array.from({
    length: max - min + 1
  }, (_, i) => min + i);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      overflowX: "auto",
      padding: "4px 0",
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }
  }, nums.map(s => {
    const d = s - par,
      sel = value === s;
    const bg = sel ? d < 0 ? "var(--red)" : d === 0 ? "var(--green)" : "var(--text)" : "var(--white)";
    const col = sel ? "var(--white)" : d < 0 ? "var(--red)" : d === 0 ? "var(--green)" : "var(--text)";
    const bdr = sel ? "transparent" : d < 0 ? "rgba(196,18,48,0.25)" : d === 0 ? "rgba(26,71,49,0.25)" : "var(--border)";
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => onChange(sel ? 0 : s),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 54,
        height: 66,
        flexShrink: 0,
        border: `1px solid ${bdr}`,
        borderRadius: "var(--r)",
        background: bg,
        cursor: "pointer",
        gap: 3,
        padding: "6px 4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        fontFamily: "var(--fd)",
        color: col,
        lineHeight: 1,
        letterSpacing: "-0.02em"
      }
    }, s), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: sel ? "rgba(255,255,255,0.7)" : "var(--muted)",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        fontFamily: "var(--fb)"
      }
    }, scoreLabel(s, par)));
  }));
}

// ─── SCORING ────────────────────────────────────────────────────
function Scoring(_ref8) {
  let round = _ref8.round,
    onUpdate = _ref8.onUpdate,
    onFinish = _ref8.onFinish,
    onBack = _ref8.onBack,
    allRounds = _ref8.allRounds;
  const _useState10 = useState(0),
    holeIdx = _useState10[0],
    setHoleIdx = _useState10[1];
  const _useState11 = useState(round.players[0].id),
    expandedP = _useState11[0],
    setExpP = _useState11[1];
  const _useState12 = useState(false),
    showBoard = _useState12[0],
    setBoard = _useState12[1];
  const _useState13 = useState(false),
    showGIR = _useState13[0],
    setGIR = _useState13[1];
  const hole = round.holes[holeIdx];
  const total = round.holes.length;
  const updateScore = (pid, field, val) => {
    const nh = round.holes.map((h, i) => i !== holeIdx ? h : {
      ...h,
      scores: {
        ...h.scores,
        [pid]: {
          ...h.scores[pid],
          [field]: val
        }
      }
    });
    onUpdate({
      ...round,
      holes: nh
    });
  };
  const allDone = round.holes.every(h => round.players.every(p => {
    var _h$scores3;
    return (((_h$scores3 = h.scores) == null || (_h$scores3 = _h$scores3[p.id]) == null ? void 0 : _h$scores3.strokes) || 0) > 0;
  }));
  const board = [...round.players].map(p => ({
    ...p,
    total: playerTotal(round, p.id)
  })).sort((a, b) => a.total - b.total);
  const insight = computeInsight(allRounds || [], round.courseId, hole.num, hole.par);
  const goHole = i => {
    setHoleIdx(i);
    setExpP(round.players[0].id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.screen,
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.header
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.75)",
      cursor: "pointer",
      fontSize: 18,
      lineHeight: 1,
      padding: "4px 0",
      fontFamily: "var(--fb)"
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "rgba(255,255,255,0.9)",
      fontFamily: "var(--fb)",
      fontWeight: 500
    }
  }, round.courseName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: "0.06em",
      marginTop: 3
    }
  }, "Hole ", holeIdx + 1, " of ", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36
    }
  })), showBoard ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Live Leaderboard"), board.map((p, i) => {
    const d = p.total - round.par;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--white)",
        padding: "14px 16px",
        marginBottom: 1,
        borderLeft: `3px solid ${i === 0 ? "var(--green)" : "var(--border-lt)"}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 24,
        fontWeight: 700,
        color: i === 0 ? "var(--green)" : "var(--muted)",
        minWidth: 28
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 16,
        fontWeight: i === 0 ? 600 : 400,
        color: "var(--text)"
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 26,
        fontWeight: 700,
        color: "var(--text)",
        lineHeight: 1
      }
    }, p.total || "—"), p.total > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: d < 0 ? "var(--red)" : d === 0 ? "var(--green)" : "var(--text)",
        marginTop: 2
      }
    }, d === 0 ? "Even" : d > 0 ? `+${d}` : d)));
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      borderBottom: "1px solid var(--border-lt)",
      display: "flex",
      gap: 2,
      padding: "8px 10px",
      overflowX: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }
  }, round.holes.map((h, i) => {
    const anyScored = round.players.some(p => {
      var _h$scores4;
      return (((_h$scores4 = h.scores) == null || (_h$scores4 = _h$scores4[p.id]) == null ? void 0 : _h$scores4.strokes) || 0) > 0;
    });
    const isCur = i === holeIdx;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => goHole(i),
      style: {
        width: 36,
        height: 36,
        border: "none",
        flexShrink: 0,
        cursor: "pointer",
        background: isCur ? "var(--green)" : anyScored ? "var(--cream)" : "transparent",
        color: isCur ? "var(--white)" : anyScored ? "var(--text)" : "var(--muted)",
        fontSize: 14,
        fontWeight: 700,
        fontFamily: "var(--fb)"
      }
    }, h.num);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream)",
      padding: "14px 16px",
      borderBottom: "1px solid var(--border-lt)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 32,
      fontWeight: 600,
      color: "var(--text)",
      marginBottom: 10,
      letterSpacing: "0.01em"
    }
  }, "Hole ", hole.num), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [`Par ${hole.par}`, `${hole.yards} yds`, `Stroke Index ${hole.strokeindex}`].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: "6px 12px",
      background: "var(--white)",
      border: "1px solid var(--border-lt)",
      borderRadius: "var(--r)",
      fontSize: 13,
      color: "var(--text-2)",
      fontFamily: "var(--fb)"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 0"
    }
  }, round.players.map(p => {
    const sc = hole.scores[p.id] || emptyScore();
    const isExp = expandedP === p.id;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        background: "var(--white)",
        marginBottom: 1,
        borderLeft: `3px solid ${isExp ? "var(--green)" : "transparent"}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setExpP(isExp ? null : p.id),
      style: {
        display: "flex",
        alignItems: "center",
        padding: "14px 16px",
        gap: 10,
        width: "100%",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--fb)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        flexShrink: 0,
        background: isExp ? "var(--green)" : "var(--cream)",
        color: isExp ? "var(--white)" : "var(--text-2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: 700,
        fontFamily: "var(--fd)"
      }
    }, p.name[0].toUpperCase()), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: "var(--text)"
      }
    }, p.name), sc.strokes > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: scoreTextColor(sc.strokes, hole.par),
        marginTop: 1
      }
    }, scoreLabel(sc.strokes, hole.par))), sc.strokes > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 30,
        fontWeight: 700,
        color: scoreTextColor(sc.strokes, hole.par),
        marginRight: 8,
        lineHeight: 1
      }
    }, sc.strokes), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "7px 16px",
        borderRadius: "var(--r)",
        fontSize: 13,
        fontWeight: 600,
        fontFamily: "var(--fb)",
        flexShrink: 0,
        background: isExp ? "var(--green)" : "var(--cream)",
        color: isExp ? "var(--white)" : "var(--text-2)",
        border: `1px solid ${isExp ? "var(--green)" : "var(--border)"}`
      }
    }, isExp ? "Done" : "Score")), isExp && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 14px 16px",
        borderTop: "1px solid var(--border-lt)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(FieldLabel, null, "Strokes"), /*#__PURE__*/React.createElement(ScorePills, {
      value: sc.strokes,
      par: hole.par,
      onChange: v => updateScore(p.id, "strokes", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(FieldLabel, null, "Putts"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => sc.putts > 0 && updateScore(p.id, "putts", sc.putts - 1),
      style: S.ctrBtn
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 28,
        fontWeight: 700,
        color: "var(--text)",
        minWidth: 36,
        textAlign: "center",
        lineHeight: 1
      }
    }, sc.putts || "—"), /*#__PURE__*/React.createElement("button", {
      onClick: () => updateScore(p.id, "putts", (sc.putts || 0) + 1),
      style: S.ctrBtn
    }, "+"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(FieldLabel, null, "Fairway Hit"), hole.par === 3 ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--muted)"
      }
    }, "Not applicable on par 3") : /*#__PURE__*/React.createElement(YesNo, {
      value: sc.fairway,
      onChange: v => updateScore(p.id, "fairway", v)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(FieldLabel, {
      style: {
        margin: 0
      }
    }, "Green in Regulation"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setGIR(!showGIR),
      style: {
        width: 18,
        height: 18,
        borderRadius: "50%",
        border: "1px solid var(--border)",
        background: "var(--cream)",
        color: "var(--muted)",
        cursor: "pointer",
        fontSize: 10,
        fontFamily: "var(--fb)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, "?")), showGIR && /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--cream)",
        border: "1px solid var(--border-lt)",
        padding: "10px 12px",
        fontSize: 13,
        color: "var(--text-2)",
        lineHeight: 1.6,
        marginBottom: 8,
        borderLeft: "2px solid var(--green)"
      }
    }, "Ball reaches the green in par minus 2 strokes. Par 3 \u2192 1 shot \xB7 Par 4 \u2192 2 shots \xB7 Par 5 \u2192 3 shots. High GIR means strong iron play."), /*#__PURE__*/React.createElement(YesNo, {
      value: sc.gir,
      onChange: v => updateScore(p.id, "gir", v)
    }))));
  })), /*#__PURE__*/React.createElement(HoleInsight, {
    insight: insight
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "var(--white)",
      borderTop: "1px solid var(--border-lt)",
      display: "flex",
      gap: 1,
      padding: "0 0 env(safe-area-inset-bottom,0)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => goHole(Math.max(0, holeIdx - 1)),
    disabled: holeIdx === 0,
    style: {
      flex: 1,
      padding: "16px 8px",
      border: "none",
      background: "var(--cream)",
      color: "var(--text-2)",
      cursor: holeIdx === 0 ? "default" : "pointer",
      fontSize: 13,
      fontFamily: "var(--fb)",
      opacity: holeIdx === 0 ? 0.3 : 1
    }
  }, "Prev"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setBoard(!showBoard),
    style: {
      flex: 1.4,
      padding: "16px 8px",
      border: "none",
      background: showBoard ? "var(--green)" : "var(--cream)",
      color: showBoard ? "var(--white)" : "var(--text-2)",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: "var(--fb)"
    }
  }, showBoard ? "Scorecard" : "Leaderboard"), holeIdx < total - 1 ? /*#__PURE__*/React.createElement("button", {
    onClick: () => goHole(holeIdx + 1),
    style: {
      flex: 1,
      padding: "16px 8px",
      border: "none",
      background: "var(--green)",
      color: "var(--white)",
      cursor: "pointer",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: "var(--fb)"
    }
  }, "Next") : /*#__PURE__*/React.createElement("button", {
    onClick: () => allDone && onFinish(round),
    style: {
      flex: 1,
      padding: "16px 8px",
      border: "none",
      background: allDone ? "var(--green)" : "var(--cream)",
      color: allDone ? "var(--white)" : "var(--muted)",
      cursor: allDone ? "pointer" : "default",
      fontSize: 13,
      fontWeight: 600,
      fontFamily: "var(--fb)"
    }
  }, allDone ? "Finish" : "—")));
}
function YesNo(_ref9) {
  let value = _ref9.value,
    onChange = _ref9.onChange;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [{
    v: true,
    l: "Yes"
  }, {
    v: false,
    l: "No"
  }].map(_ref0 => {
    let v = _ref0.v,
      l = _ref0.l;
    const sel = value === v;
    return /*#__PURE__*/React.createElement("button", {
      key: l,
      onClick: () => onChange(sel ? null : v),
      style: {
        flex: 1,
        padding: "10px 0",
        fontSize: 13,
        fontFamily: "var(--fb)",
        fontWeight: sel ? 600 : 400,
        cursor: "pointer",
        letterSpacing: "0.04em",
        border: `1px solid ${sel ? v ? "rgba(26,71,49,0.6)" : "rgba(196,18,48,0.4)" : "var(--border)"}`,
        borderRadius: "var(--r)",
        background: sel ? v ? "var(--green-lt)" : "var(--red-lt)" : "var(--white)",
        color: sel ? v ? "var(--green)" : "var(--red)" : "var(--text-2)"
      }
    }, l);
  }));
}
function FieldLabel(_ref1) {
  let children = _ref1.children,
    style = _ref1.style;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: "var(--green)",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      marginBottom: 8,
      ...style
    }
  }, children);
}

// ─── HOLE INSIGHT ───────────────────────────────────────────────
function computeInsight(allRounds, courseId, holeNum, holePar) {
  const cr = allRounds.filter(r => r.completed && r.courseId === courseId);
  const data = cr.map(r => {
    var _h$scores5;
    const p = r.players[0],
      h = r.holes.find(h => h.num === holeNum);
    if (!h || !((_h$scores5 = h.scores) != null && _h$scores5[p.id])) return null;
    return h.scores[p.id];
  }).filter(Boolean);
  if (data.length < 3) return {
    enough: false,
    rounds: data.length
  };
  const strokes = data.map(d => d.strokes).filter(s => s > 0);
  if (!strokes.length) return {
    enough: false,
    rounds: 0
  };
  const avg = strokes.reduce((a, b) => a + b, 0) / strokes.length;
  const diff = avg - holePar;
  const puttsArr = data.map(d => d.putts).filter(p => p > 0);
  const avgPutts = puttsArr.length ? puttsArr.reduce((a, b) => a + b, 0) / puttsArr.length : null;
  const girArr = data.filter(d => d.gir !== null).map(d => d.gir);
  const girPct = girArr.length ? Math.round(girArr.filter(Boolean).length / girArr.length * 100) : null;
  const firArr = data.filter(d => d.fairway !== null).map(d => d.fairway);
  const firPct = firArr.length ? Math.round(firArr.filter(Boolean).length / firArr.length * 100) : null;
  const conf = diff <= 0 ? "strong" : diff <= 1 ? "watch" : "tough";
  const ad = Math.round(diff * 10) / 10;
  let text = "";
  if (diff <= -0.5) text = `A consistently strong hole for you — averaging ${Math.round(avg * 10) / 10}. Play your natural game.`;else if (diff <= 0.3) text = `You hold close to par here. Stay patient and execute your routine.`;else if (diff < 1) {
    if (girPct !== null && girPct < 40 && holePar !== 3) text = `Slight bogey tendency. You only hit this green ${girPct}% of the time — try clubbing up on your approach.`;else if (firPct !== null && firPct < 40) text = `Slight bogey tendency. Tee accuracy is the issue here — choose accuracy over distance off the tee.`;else if (avgPutts !== null && avgPutts > 2.2) text = `Your approach is okay but you tend to need extra putts. Aim centre of the green, not the flag.`;else text = `Slight bogey tendency (+${ad} avg). One shot at a time — take the par and move on.`;
  } else {
    if (girPct !== null && girPct < 30) text = `A tough hole for you (+${ad} avg). You're only hitting this green ${girPct}% of the time — rethink your approach club.`;else if (firPct !== null && firPct < 30) text = `Trouble hole (+${ad} avg). Tee shot accuracy is the root cause — step down a club and find the fairway.`;else if (avgPutts !== null && avgPutts > 2.5) text = `You're losing shots on the green here. Leave your approach below the hole and take two putts.`;else text = `Your toughest hole this nine (+${ad} avg). Take the bogey, protect your next hole.`;
  }
  return {
    enough: true,
    rounds: data.length,
    conf,
    avg: Math.round(avg * 10) / 10,
    diff: ad,
    girPct,
    firPct,
    avgPutts: avgPutts ? Math.round(avgPutts * 10) / 10 : null,
    text
  };
}
function HoleInsight(_ref10) {
  let insight = _ref10.insight;
  const _useState14 = useState(false),
    open = _useState14[0],
    setOpen = _useState14[1];
  const dotColor = !(insight != null && insight.enough) ? "var(--border-lt)" : insight.conf === "strong" ? "var(--green)" : insight.conf === "watch" ? "#c89a2a" : "var(--red)";
  const confLabel = !(insight != null && insight.enough) ? null : insight.conf === "strong" ? "Strong hole" : insight.conf === "watch" ? "Watch this one" : "Tough hole";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "0 0 1px",
      background: "var(--white)",
      borderTop: "1px solid var(--border-lt)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 16px",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--fb)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: dotColor,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "left",
      fontSize: 13,
      color: "var(--text-2)"
    }
  }, "Course history on this hole", confLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dotColor,
      marginLeft: 6,
      fontSize: 11
    }
  }, "\u2014 ", confLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)"
    }
  }, open ? "Close" : "View")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px"
    }
  }, !(insight != null && insight.enough) ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      lineHeight: 1.6
    }
  }, (insight == null ? void 0 : insight.rounds) > 0 ? `${insight.rounds} round${insight.rounds > 1 ? "s" : ""} played here. Need 3 to unlock insights.` : "No history on this hole yet.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, [{
    l: "Avg",
    v: `${insight.avg} (${insight.diff >= 0 ? "+" : ""}${insight.diff})`
  }, ...(insight.girPct !== null ? [{
    l: "GIR",
    v: `${insight.girPct}%`
  }] : []), ...(insight.firPct !== null ? [{
    l: "FIR",
    v: `${insight.firPct}%`
  }] : []), ...(insight.avgPutts !== null ? [{
    l: "Putts",
    v: insight.avgPutts
  }] : [])].map(_ref11 => {
    let l = _ref11.l,
      v = _ref11.v;
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        padding: "5px 10px",
        background: "var(--cream)",
        border: "1px solid var(--border-lt)",
        fontSize: 13,
        color: "var(--text-2)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--muted)",
        marginRight: 4,
        textTransform: "uppercase",
        letterSpacing: "0.08em"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, v));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-2)",
      lineHeight: 1.65,
      padding: "10px 12px",
      background: "var(--cream)",
      borderLeft: `2px solid ${dotColor}`
    }
  }, insight.text), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--muted)",
      marginTop: 6,
      letterSpacing: "0.04em"
    }
  }, "Based on ", insight.rounds, " round", insight.rounds > 1 ? "s" : "", " at this course"))));
}

// ─── SUMMARY ────────────────────────────────────────────────────
function Summary(_ref12) {
  let round = _ref12.round,
    allRounds = _ref12.allRounds,
    onNavigate = _ref12.onNavigate,
    onBack = _ref12.onBack;
  const _useState15 = useState(round.players[0].id),
    activeP = _useState15[0],
    setActiveP = _useState15[1];

  // Prev / next round navigation
  const idx = (allRounds == null ? void 0 : allRounds.findIndex(r => r.id === round.id)) ?? -1;
  const prevRound = idx > 0 ? allRounds[idx - 1] : null;
  const nextRound = idx >= 0 && idx < ((allRounds == null ? void 0 : allRounds.length) || 0) - 1 ? allRounds[idx + 1] : null;
  const sc = round.holes.map(h => ({
    ...h,
    ...(h.scores[activeP] || emptyScore())
  }));
  const total = sc.reduce((a, h) => a + (h.strokes || 0), 0);
  const diff = total - round.par;
  const totalPutts = sc.reduce((a, h) => a + (h.putts || 0), 0);
  const firH = sc.filter(h => h.par !== 3 && h.fairway !== null);
  const girH = sc.filter(h => h.gir !== null);
  const firPct = firH.length ? Math.round(firH.filter(h => h.fairway).length / firH.length * 100) : null;
  const girPct = girH.length ? Math.round(girH.filter(h => h.gir).length / girH.length * 100) : null;
  const bd = {
    eagle: 0,
    birdie: 0,
    par: 0,
    bogey: 0,
    double: 0,
    worse: 0
  };
  sc.forEach(h => {
    const d = (h.strokes || 0) - h.par;
    if (d <= -2) bd.eagle++;else if (d === -1) bd.birdie++;else if (d === 0) bd.par++;else if (d === 1) bd.bogey++;else if (d === 2) bd.double++;else bd.worse++;
  });
  const board = round.players.map(p => ({
    ...p,
    total: playerTotal(round, p.id)
  })).sort((a, b) => a.total - b.total);
  const f9 = sc.slice(0, 9),
    b9 = sc.slice(9);
  return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    title: "Round Summary"
  }), (prevRound || nextRound) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      background: "var(--cream)",
      borderBottom: "1px solid var(--border-lt)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => prevRound && onNavigate(prevRound),
    disabled: !prevRound,
    style: {
      flex: 1,
      padding: "11px 12px",
      border: "none",
      background: "transparent",
      color: prevRound ? "var(--green)" : "var(--border)",
      cursor: prevRound ? "pointer" : "default",
      fontSize: 13,
      fontFamily: "var(--fb)",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("span", null, prevRound ? fmtDate(prevRound.date) : "—")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--border-lt)",
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => nextRound && onNavigate(nextRound),
    disabled: !nextRound,
    style: {
      flex: 1,
      padding: "11px 12px",
      border: "none",
      background: "transparent",
      color: nextRound ? "var(--green)" : "var(--border)",
      cursor: nextRound ? "pointer" : "default",
      fontSize: 13,
      fontFamily: "var(--fb)",
      textAlign: "right",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, nextRound ? fmtDate(nextRound.date) : "—"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u203A"))), round.players.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      borderBottom: "1px solid var(--border-lt)"
    }
  }, round.players.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setActiveP(p.id),
    style: {
      flex: 1,
      padding: "12px 8px",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--fb)",
      background: activeP === p.id ? "var(--green)" : "var(--white)",
      color: activeP === p.id ? "var(--white)" : "var(--text-2)",
      fontSize: 13,
      fontWeight: activeP === p.id ? 600 : 400,
      borderBottom: activeP === p.id ? "2px solid var(--gold-dec)" : "none"
    }
  }, p.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      padding: "28px 20px 20px",
      textAlign: "center",
      borderBottom: "1px solid var(--border-lt)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, round.courseName, " \xB7 ", fmtDate(round.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 72,
      fontWeight: 700,
      color: "var(--text)",
      lineHeight: 1,
      letterSpacing: "-0.03em"
    }
  }, total), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, diff !== 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 20,
      color: diff < 0 ? "var(--red)" : "var(--text)",
      fontWeight: 600
    }
  }, diff > 0 ? `+${diff}` : diff), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      fontFamily: "var(--fb)"
    }
  }, diff === 0 ? "Even par" : diff < 0 ? "under par" : "over par"))), round.players.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Group Result"), board.map((p, i) => {
    const d = p.total - round.par;
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--white)",
        padding: "12px 14px",
        marginBottom: 1,
        borderLeft: `3px solid ${i === 0 ? "var(--green)" : "var(--border-lt)"}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 18,
        fontWeight: 700,
        color: i === 0 ? "var(--green)" : "var(--muted)",
        minWidth: 20
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: p.id === activeP ? 600 : 400,
        color: "var(--text)"
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 20,
        fontWeight: 700
      }
    }, p.total), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        minWidth: 28,
        textAlign: "right",
        color: d < 0 ? "var(--red)" : d === 0 ? "var(--green)" : "var(--text)"
      }
    }, d === 0 ? "E" : d > 0 ? `+${d}` : d));
  })), (round.holeCount === 18 || round.holes.length === 18) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Front & Back Nine"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCell,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, f9.reduce((a, h) => a + (h.strokes || 0), 0)), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Front 9 (par ", f9.reduce((a, h) => a + h.par, 0), ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCell,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, b9.reduce((a, h) => a + (h.strokes || 0), 0)), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Back 9 (par ", b9.reduce((a, h) => a + h.par, 0), ")")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Stats"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCell,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, totalPutts), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Putts")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCell,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, firPct !== null ? `${firPct}%` : "—"), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Fairways")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCell,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, girPct !== null ? `${girPct}%` : "—"), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "GIR")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Breakdown"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1
    }
  }, [{
    l: "Eagle+",
    v: bd.eagle,
    c: "var(--red)"
  }, {
    l: "Birdie",
    v: bd.birdie,
    c: "var(--red)"
  }, {
    l: "Par",
    v: bd.par,
    c: "var(--green)"
  }, {
    l: "Bogey",
    v: bd.bogey,
    c: "var(--text)"
  }, {
    l: "Double+",
    v: bd.double + bd.worse,
    c: "var(--muted)"
  }].map(b => /*#__PURE__*/React.createElement("div", {
    key: b.l,
    style: {
      flex: 1,
      background: "var(--white)",
      padding: "12px 4px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 22,
      fontWeight: 700,
      color: b.c
    }
  }, b.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "var(--muted)",
      marginTop: 3,
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, b.l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 32px"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Scorecard"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      background: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12,
      fontFamily: "var(--fb)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--cream)"
    }
  }, ["Hole", "Par", "Yds", "Score", "Putts", "FIR", "GIR"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "8px 6px",
      textAlign: "center",
      fontSize: 9,
      textTransform: "uppercase",
      color: "var(--green)",
      letterSpacing: "0.1em",
      fontWeight: 600,
      borderBottom: "1px solid var(--border)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, sc.map((h, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: `1px solid ${i === 8 ? "var(--border)" : "var(--border-lt)"}`
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      fontWeight: 600
    }
  }, h.num), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      color: "var(--text-2)"
    }
  }, h.par), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      color: "var(--muted)"
    }
  }, h.yards), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      fontWeight: 700,
      fontFamily: "var(--fd)",
      fontSize: 14,
      color: scoreTextColor(h.strokes, h.par)
    }
  }, h.strokes || "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      color: "var(--text-2)"
    }
  }, h.putts || "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      color: h.fairway ? "var(--green)" : "var(--muted)"
    }
  }, h.par === 3 ? "—" : h.fairway === true ? "Yes" : h.fairway === false ? "No" : "—"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "7px 6px",
      textAlign: "center",
      color: h.gir ? "var(--green)" : "var(--muted)"
    }
  }, h.gir === true ? "Yes" : h.gir === false ? "No" : "—"))))))));
}

// ─── HISTORY ────────────────────────────────────────────────────
function History(_ref13) {
  let rounds = _ref13.rounds,
    onBack = _ref13.onBack,
    onSelect = _ref13.onSelect,
    onDelete = _ref13.onDelete;
  const done = [...rounds].filter(r => r.completed).reverse();
  return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    title: "Round History"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 32px"
    }
  }, !done.length ? /*#__PURE__*/React.createElement(Empty, {
    msg: "No rounds recorded yet. Play your first round to begin tracking."
  }) : done.map(r => {
    const tot = playerTotal(r, r.players[0].id),
      d = tot - r.par;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        ...S.listRow,
        cursor: "pointer"
      },
      onClick: () => onSelect(r)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: "var(--text)",
        marginBottom: 3
      }
    }, r.courseName), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--muted)"
      }
    }, fmtDate(r.date), " \xB7 ", r.holeCount || r.holes.length, " holes \xB7 ", r.players.map(p => p.name).join(", "))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 24,
        fontWeight: 700,
        color: "var(--text)",
        lineHeight: 1
      }
    }, tot), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        marginTop: 2,
        color: d < 0 ? "var(--red)" : d === 0 ? "var(--green)" : "var(--text)"
      }
    }, d === 0 ? "Even" : d > 0 ? `+${d}` : d)), /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        onDelete(r.id);
      },
      style: {
        background: "none",
        border: "none",
        color: "var(--muted)",
        cursor: "pointer",
        fontSize: 16,
        padding: "4px",
        lineHeight: 1
      }
    }, "\xD7")));
  })));
}

// ─── ANALYTICS ──────────────────────────────────────────────────
function Analytics(_ref14) {
  let rounds = _ref14.rounds,
    courses = _ref14.courses,
    playerName = _ref14.playerName,
    onBack = _ref14.onBack;
  const _useState16 = useState("overview"),
    tab = _useState16[0],
    setTab = _useState16[1];
  const done = rounds.filter(r => r.completed);
  const UNLOCK = 5;
  if (done.length < 2) return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    title: "Analytics"
  }), /*#__PURE__*/React.createElement(Empty, {
    msg: `Play at least 2 rounds to unlock analytics. You have ${done.length} so far.`
  }));
  const pRounds = done.map(r => {
    const p = r.players[0];
    const holes = r.holes.map(h => ({
      ...h,
      ...(h.scores[p.id] || emptyScore())
    }));
    return {
      ...r,
      holes,
      total: holes.reduce((a, h) => a + (h.strokes || 0), 0)
    };
  });
  const avg = Math.round(pRounds.reduce((a, r) => a + r.total, 0) / pRounds.length);
  const best = Math.min(...pRounds.map(r => r.total));
  const worst = Math.max(...pRounds.map(r => r.total));
  const avgPutts = Math.round(pRounds.reduce((a, r) => a + r.holes.reduce((b, h) => b + (h.putts || 0), 0), 0) / pRounds.length);
  const girR = pRounds.filter(r => r.holes.some(h => h.gir !== null));
  const avgGir = girR.length ? Math.round(girR.reduce((a, r) => {
    const g = r.holes.filter(h => h.gir !== null);
    return a + g.filter(h => h.gir).length / g.length * 100;
  }, 0) / girR.length) : null;
  const recent = pRounds.slice(-10);
  const tMin = Math.min(...recent.map(r => r.total));
  const tMax = Math.max(...recent.map(r => r.total));
  const tRange = Math.max(tMax - tMin, 4);
  const byCourse = {};
  pRounds.forEach(r => {
    if (!byCourse[r.courseId]) byCourse[r.courseId] = [];
    byCourse[r.courseId].push(r);
  });
  const topCourse = Object.entries(byCourse).sort((a, b) => b[1].length - a[1].length)[0];
  const insightCourse = courses.find(c => c.id === (topCourse == null ? void 0 : topCourse[0]));
  const holeInsights = insightCourse == null ? void 0 : insightCourse.holes.map(h => {
    const sc = topCourse[1].map(r => {
      const hd = r.holes.find(hh => hh.num === h.num);
      return (hd == null ? void 0 : hd.strokes) || null;
    }).filter(Boolean);
    const a = sc.length ? sc.reduce((x, y) => x + y, 0) / sc.length : null;
    const girs = topCourse[1].map(r => {
      const hd = r.holes.find(hh => hh.num === h.num);
      return hd == null ? void 0 : hd.gir;
    }).filter(v => v !== null && v !== undefined);
    const gp = girs.length ? Math.round(girs.filter(Boolean).length / girs.length * 100) : null;
    return {
      ...h,
      avg: a ? Math.round(a * 10) / 10 : null,
      diff: a ? Math.round((a - h.par) * 10) / 10 : null,
      girPct: gp,
      rounds: sc.length
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement(TopBar, {
    onBack: onBack,
    title: "Analytics"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      borderBottom: "1px solid var(--border-lt)"
    }
  }, ["overview", "holes"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      flex: 1,
      padding: "13px 8px",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--fb)",
      background: tab === t ? "var(--green)" : "var(--white)",
      color: tab === t ? "var(--white)" : "var(--text-2)",
      fontSize: 12,
      fontWeight: tab === t ? 600 : 400,
      letterSpacing: "0.04em"
    }
  }, t === "overview" ? "Overview" : "Hole Insights" + (done.length < UNLOCK ? ` (${done.length}/${UNLOCK})` : "")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 32px"
    }
  }, tab === "overview" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Summary \u2014 ", playerName), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      marginBottom: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCell
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, done.length), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Rounds")), /*#__PURE__*/React.createElement("div", {
    style: S.statCell
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, avg), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Avg Score")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statCell,
      borderBottom: "2px solid var(--red)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...S.statNum,
      color: "var(--red)"
    }
  }, best), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Best"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 1,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statCell
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, worst), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Worst")), /*#__PURE__*/React.createElement("div", {
    style: S.statCell
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, avgPutts), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Avg Putts")), /*#__PURE__*/React.createElement("div", {
    style: S.statCell
  }, /*#__PURE__*/React.createElement("div", {
    style: S.statNum
  }, avgGir !== null ? `${avgGir}%` : "—"), /*#__PURE__*/React.createElement("div", {
    style: S.statLbl
  }, "Avg GIR"))), /*#__PURE__*/React.createElement(SectionLabel, null, "Score Trend \u2014 Last ", recent.length, " Rounds"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--white)",
      padding: "16px 12px",
      border: "1px solid var(--border-lt)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 100
    }
  }, recent.map((r, i) => {
    const h = (r.total - tMin + 1) / (tRange + 2) * 100;
    const d = r.total - r.par;
    const col = d <= 0 ? "var(--red)" : d <= 5 ? "var(--green)" : "var(--text-2)";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: col,
        fontFamily: "var(--fd)"
      }
    }, r.total), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 24,
        height: `${Math.max(h, 8)}%`,
        background: col,
        opacity: 0.85
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: "var(--muted)",
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        maxHeight: 32,
        overflow: "hidden"
      }
    }, new Date(r.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short"
    })));
  }))), /*#__PURE__*/React.createElement(SectionLabel, null, "By Course"), Object.entries(byCourse).map(_ref15 => {
    let cid = _ref15[0],
      rs = _ref15[1];
    const c = courses.find(x => x.id === cid);
    const a = Math.round(rs.reduce((x, r) => x + r.total, 0) / rs.length);
    const b = Math.min(...rs.map(r => r.total));
    return /*#__PURE__*/React.createElement("div", {
      key: cid,
      style: S.listRow
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: "var(--text)",
        marginBottom: 2
      }
    }, (c == null ? void 0 : c.name) || cid), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--muted)"
      }
    }, rs.length, " rounds \xB7 Avg ", a, " \xB7 Best ", b)));
  })), tab === "holes" && (done.length < UNLOCK ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 40,
      color: "var(--border)",
      marginBottom: 12
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text)",
      marginBottom: 6
    }
  }, "Unlocks after ", UNLOCK, " rounds"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      lineHeight: 1.6,
      maxWidth: 260,
      margin: "0 auto"
    }
  }, "You have ", done.length, " round", done.length !== 1 ? "s" : "", ". Once unlocked, you'll see average score, GIR%, and patterns per hole.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Hole Insights \u2014 ", insightCourse == null ? void 0 : insightCourse.name, " (", topCourse[1].length, " rounds)"), holeInsights == null ? void 0 : holeInsights.map(h => {
    const col = !h.diff ? null : h.diff < 0 ? "var(--red)" : h.diff === 0 ? "var(--green)" : "var(--text)";
    return /*#__PURE__*/React.createElement("div", {
      key: h.num,
      style: {
        ...S.listRow,
        marginBottom: 1,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        background: h.diff !== null && h.diff <= 0 ? "var(--green-lt)" : "var(--cream)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "var(--fd)",
        fontSize: 16,
        fontWeight: 700,
        color: h.diff !== null && h.diff <= 0 ? "var(--green)" : "var(--text-2)"
      }
    }, h.num), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--text)"
      }
    }, "Par ", h.par, " \xB7 ", h.yards, " yds"), h.girPct !== null && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--muted)"
      }
    }, "GIR ", h.girPct, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--fd)",
        fontSize: 20,
        fontWeight: 700,
        color: "var(--text)"
      }
    }, h.avg || "—"), h.diff !== null && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: col
      }
    }, h.diff === 0 ? "par" : h.diff > 0 ? `+${h.diff}` : `${h.diff}`)));
  })))));
}

// ─── COURSES ────────────────────────────────────────────────────
function Courses(_ref16) {
  let courses = _ref16.courses,
    onBack = _ref16.onBack,
    onAdd = _ref16.onAdd,
    onPlay = _ref16.onPlay;
  const _useState17 = useState(false),
    adding = _useState17[0],
    setAdding = _useState17[1];
  const _useState18 = useState({
      name: "",
      location: "",
      n: 18
    }),
    form = _useState18[0],
    setForm = _useState18[1];
  const _useState19 = useState([]),
    holes = _useState19[0],
    setHoles = _useState19[1];
  const init = n => setHoles(Array.from({
    length: n
  }, (_, i) => ({
    num: i + 1,
    par: 4,
    yards: 350,
    strokeindex: i + 1
  })));
  const submit = () => {
    onAdd({
      id: "c_" + Date.now(),
      name: form.name,
      shortName: form.name.slice(0, 16),
      location: form.location,
      established: null,
      tees: "Custom",
      par: holes.reduce((a, h) => a + h.par, 0),
      totalYards: holes.reduce((a, h) => a + h.yards, 0),
      slope: null,
      rating: null,
      holes
    });
    setAdding(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: S.screen
  }, /*#__PURE__*/React.createElement("div", {
    style: S.header
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.7)",
      cursor: "pointer",
      fontSize: 14,
      fontFamily: "var(--fb)"
    }
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 18,
      color: "var(--white)",
      fontWeight: 600
    }
  }, "Courses"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setAdding(true);
      init(18);
    },
    style: {
      background: "none",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "var(--white)",
      cursor: "pointer",
      fontSize: 11,
      padding: "5px 10px",
      fontFamily: "var(--fb)",
      letterSpacing: "0.08em"
    }
  }, "Add")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 32px"
    }
  }, adding ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "New Course"), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    placeholder: "Course name",
    style: {
      ...S.input,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: form.location,
    onChange: e => setForm({
      ...form,
      location: e.target.value
    }),
    placeholder: "Location",
    style: {
      ...S.input,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, [9, 18].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => {
      setForm({
        ...form,
        n
      });
      init(n);
    },
    style: {
      flex: 1,
      padding: "10px",
      border: `1px solid ${form.n === n ? "var(--green)" : "var(--border)"}`,
      background: form.n === n ? "var(--green)" : "var(--white)",
      color: form.n === n ? "var(--white)" : "var(--text-2)",
      cursor: "pointer",
      fontSize: 13,
      fontFamily: "var(--fb)"
    }
  }, n, " holes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 12,
      fontFamily: "var(--fb)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--cream)"
    }
  }, ["#", "Par", "Yards", "Stroke Index"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: "7px 6px",
      textAlign: "center",
      fontSize: 9,
      textTransform: "uppercase",
      color: "var(--green)",
      letterSpacing: "0.1em",
      fontWeight: 600,
      borderBottom: "1px solid var(--border)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, holes.map((h, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: "1px solid var(--border-lt)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "6px",
      textAlign: "center",
      color: "var(--text-2)"
    }
  }, h.num), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "6px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: h.par,
    onChange: e => {
      const d = [...holes];
      d[i] = {
        ...d[i],
        par: +e.target.value
      };
      setHoles(d);
    },
    style: {
      background: "var(--white)",
      color: "var(--text)",
      border: "1px solid var(--border)",
      padding: "2px",
      fontSize: 12,
      width: 40,
      fontFamily: "var(--fb)"
    }
  }, [3, 4, 5].map(p => /*#__PURE__*/React.createElement("option", {
    key: p
  }, p)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "6px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: h.yards,
    onChange: e => {
      const d = [...holes];
      d[i] = {
        ...d[i],
        yards: +e.target.value
      };
      setHoles(d);
    },
    style: {
      background: "var(--white)",
      color: "var(--text)",
      border: "1px solid var(--border)",
      padding: "2px 4px",
      fontSize: 12,
      width: 52,
      textAlign: "center",
      fontFamily: "var(--fb)"
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "6px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: h.strokeindex,
    onChange: e => {
      const d = [...holes];
      d[i] = {
        ...d[i],
        strokeindex: +e.target.value
      };
      setHoles(d);
    },
    style: {
      background: "var(--white)",
      color: "var(--text)",
      border: "1px solid var(--border)",
      padding: "2px 4px",
      fontSize: 12,
      width: 44,
      textAlign: "center",
      fontFamily: "var(--fb)"
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setAdding(false),
    style: {
      ...S.btnSecondary,
      flex: 1
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    disabled: !form.name.trim(),
    style: {
      ...S.btnPrimary,
      flex: 2,
      opacity: form.name.trim() ? 1 : 0.4
    }
  }, "Save Course"))) : courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: S.listRow
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text)",
      marginBottom: 2
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)"
    }
  }, c.location, c.established ? ` · Est. ${c.established}` : "", " \xB7 ", c.holes.length, " holes \xB7 Par ", c.par)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onPlay(c),
    style: S.playBtn
  }, "Play")))));
}

// ─── PROFILE ────────────────────────────────────────────────────
function Profile(_ref17) {
  let playerName = _ref17.playerName,
    rounds     = _ref17.rounds,
    onSaveName = _ref17.onSaveName,
    onClearRounds = _ref17.onClearRounds,
    onResetAll    = _ref17.onResetAll,
    onBack        = _ref17.onBack;

  const [editing, setEditing]   = useState(false);
  const [name, setName]         = useState(playerName);
  const [confirm, setConfirm]   = useState(null); // null | "clear" | "reset"

  const done = rounds.filter(r => r.completed);
  const best = done.length ? Math.min(...done.map(r => playerTotal(r, r.players[0].id))) : null;

  const CONFIRM_COPY = {
    clear: {
      title:  "Clear all rounds?",
      body:   "Your score history will be deleted. Your name and courses stay.",
      action: "Yes, clear rounds",
      fn:     onClearRounds,
    },
    reset: {
      title:  "Reset everything?",
      body:   "All data — scores, name, settings — will be wiped and you'll return to the start screen.",
      action: "Yes, reset app",
      fn:     onResetAll,
    },
  };

  // Confirmation modal
  if (confirm) {
    const c = CONFIRM_COPY[confirm];
    return React.createElement("div", { style: S.screen },
      React.createElement(TopBar, { onBack: () => setConfirm(null), title: "Are you sure?" }),
      React.createElement("div", {
        style: { padding: "40px 24px", display: "flex", flexDirection: "column", gap: 16 }
      },
        React.createElement("div", {
          style: { fontFamily: "var(--fd)", fontSize: 22, fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }
        }, c.title),
        React.createElement("div", {
          style: { fontSize: 14, color: "var(--muted)", lineHeight: 1.65 }
        }, c.body),
        React.createElement("button", {
          onClick: () => { c.fn(); setConfirm(null); },
          style: {
            ...S.btnPrimary,
            background: "var(--red)",
            marginTop: 8
          }
        }, c.action),
        React.createElement("button", {
          onClick: () => setConfirm(null),
          style: S.btnSecondary
        }, "Cancel")
      )
    );
  }

  return React.createElement("div", { style: S.screen },
    React.createElement(TopBar, { onBack, title: "Profile" }),

    // ── Avatar + name ──
    React.createElement("div", {
      style: { padding: "32px 20px", textAlign: "center" }
    },
      React.createElement("div", {
        style: {
          width: 72, height: 72, borderRadius: "50%",
          background: "var(--green)", color: "var(--white)",
          fontSize: 28, fontWeight: 700, fontFamily: "var(--fd)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 16px"
        }
      }, playerName[0].toUpperCase()),

      editing
        ? React.createElement("div", {
            style: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 16 }
          },
            React.createElement("input", {
              value: name,
              onChange: e => setName(e.target.value),
              style: { ...S.input, maxWidth: 200, textAlign: "center" },
              autoFocus: true
            }),
            React.createElement("button", {
              onClick: () => { onSaveName(name); setEditing(false); },
              style: S.btnPrimary
            }, "Save")
          )
        : React.createElement(React.Fragment, null,
            React.createElement("div", {
              style: { fontFamily: "var(--fd)", fontSize: 26, fontWeight: 600, color: "var(--text)", marginBottom: 4 }
            }, playerName),
            React.createElement("button", {
              onClick: () => setEditing(true),
              style: {
                background: "none", border: "none", color: "var(--green)",
                cursor: "pointer", fontSize: 12, letterSpacing: "0.06em",
                textDecoration: "underline", fontFamily: "var(--fb)"
              }
            }, "Edit name")
          ),

      // ── Stats ──
      React.createElement("div", { style: { display: "flex", gap: 1, marginTop: 32 } },
        React.createElement("div", { style: S.statCell },
          React.createElement("div", { style: S.statNum }, done.length),
          React.createElement("div", { style: S.statLbl }, "Total Rounds")
        ),
        React.createElement("div", { style: { ...S.statCell, borderBottom: "2px solid var(--red)" } },
          React.createElement("div", { style: { ...S.statNum, color: "var(--red)" } }, best || "—"),
          React.createElement("div", { style: S.statLbl }, "Best Score")
        )
      ),

      React.createElement("div", {
        style: { marginTop: 24, fontSize: 14, color: "var(--muted)", letterSpacing: "0.04em" }
      }, "Data saved locally — no account required")
    ),

    // ── Data section ──
    React.createElement("div", {
      style: {
        margin: "0 0 1px",
        borderTop: "1px solid var(--border-lt)"
      }
    },
      React.createElement("div", {
        style: {
          padding: "12px 20px 8px",
          fontSize: 10,
          color: "var(--muted)",
          letterSpacing: "0.12em",
          textTransform: "uppercase"
        }
      }, "Data"),

      // Clear rounds row
      React.createElement("button", {
        onClick: () => setConfirm("clear"),
        style: {
          ...S.navCard,
          width: "100%",
          borderRadius: 0,
          borderBottom: "1px solid var(--border-lt)",
          padding: "16px 20px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12
        }
      },
        React.createElement("div", null,
          React.createElement("div", {
            style: { fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 2 }
          }, "Clear round history"),
          React.createElement("div", {
            style: { fontSize: 13, color: "var(--muted)" }
          }, "Delete all saved scores")
        ),
        React.createElement("div", {
          style: {
            width: 8, height: 8,
            borderRight: "2px solid var(--border)",
            borderTop: "2px solid var(--border)",
            transform: "rotate(45deg)",
            flexShrink: 0
          }
        })
      ),

      // Reset app row
      React.createElement("button", {
        onClick: () => setConfirm("reset"),
        style: {
          ...S.navCard,
          width: "100%",
          borderRadius: 0,
          padding: "16px 20px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12
        }
      },
        React.createElement("div", null,
          React.createElement("div", {
            style: { fontSize: 15, fontWeight: 600, color: "var(--red)", marginBottom: 2 }
          }, "Reset app"),
          React.createElement("div", {
            style: { fontSize: 13, color: "var(--muted)" }
          }, "Wipe all data and return to start")
        ),
        React.createElement("div", {
          style: {
            width: 8, height: 8,
            borderRight: "2px solid var(--border)",
            borderTop: "2px solid var(--border)",
            transform: "rotate(45deg)",
            flexShrink: 0
          }
        })
      )
    )
  );
}

// ─── SHARED COMPONENTS ──────────────────────────────────────────
function TopBar(_ref18) {
  let onBack = _ref18.onBack,
    title = _ref18.title;
  return /*#__PURE__*/React.createElement("div", {
    style: S.header
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.8)",
      cursor: "pointer",
      fontSize: 15,
      fontFamily: "var(--fb)",
      letterSpacing: "0.04em",
      padding: "2px 0"
    }
  }, "Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 22,
      color: "var(--white)",
      fontWeight: 600,
      letterSpacing: "0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }));
}
function Empty(_ref19) {
  let msg = _ref19.msg;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "64px 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--fd)",
      fontSize: 32,
      color: "var(--border)",
      marginBottom: 12,
      fontStyle: "italic"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--muted)",
      lineHeight: 1.65,
      maxWidth: 260,
      margin: "0 auto"
    }
  }, msg));
}

// ─── STYLES ─────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');
  :root {
    --fd:        'Cormorant Garamond', Georgia, serif;
    --fb:        'Source Sans 3', 'Helvetica Neue', sans-serif;
    --green:     #1a4731;
    --green-lt:  #e8f2ec;
    --gold-dec:  #c9a84c;
    --cream:     #f4f1ea;
    --white:     #ffffff;
    --text:      #1a1915;
    --text-2:    #4a4540;
    --muted:     #857e75;
    --border:    #ccc7bb;
    --border-lt: #e2ddd5;
    --red:       #c41230;
    --red-lt:    #fdf0f2;
    --r:         6px;
    --r-lg:      10px;
    --shadow:    0 1px 4px rgba(0,0,0,0.08);
  }
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:var(--cream); }
  ::-webkit-scrollbar { width:3px; height:3px; }
  ::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }
  input,select { outline:none; }
`;
const S = {
  app: {
    fontFamily: "var(--fb)",
    background: "var(--cream)",
    color: "var(--text)",
    minHeight: "100vh"
  },
  screen: {
    minHeight: "100vh",
    paddingBottom: 48,
    background: "var(--cream)"
  },
  header: {
    background: "var(--green)",
    padding: "16px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid var(--gold-dec)"
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "var(--white)",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--fd)"
  },
  courseRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--white)",
    padding: "16px",
    width: "100%",
    border: "none",
    borderBottom: "1px solid var(--border-lt)",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "var(--fb)",
    borderLeft: "3px solid transparent",
    borderRadius: 0
  },
  playBtn: {
    background: "var(--green)",
    color: "var(--white)",
    border: "none",
    padding: "10px 18px",
    fontSize: 12,
    borderRadius: "var(--r)",
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "var(--fb)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    flexShrink: 0
  },
  navCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "var(--white)",
    border: "none",
    borderRadius: "var(--r-lg)",
    borderBottom: "1px solid var(--border-lt)",
    padding: "18px 16px",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "var(--fb)"
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "var(--r)",
    border: "1px solid var(--border)",
    borderBottom: "2px solid var(--green)",
    background: "var(--white)",
    color: "var(--text)",
    fontSize: 15,
    fontFamily: "var(--fb)"
  },
  btnPrimary: {
    padding: "13px 24px",
    borderRadius: "var(--r)",
    border: "none",
    background: "var(--green)",
    color: "var(--white)",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "var(--fb)",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  },
  btnSecondary: {
    padding: "13px 24px",
    borderRadius: "var(--r)",
    border: "1px solid var(--border)",
    background: "var(--white)",
    color: "var(--text-2)",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "var(--fb)",
    letterSpacing: "0.04em"
  },
  ctrBtn: {
    width: 44,
    height: 44,
    borderRadius: "var(--r)",
    border: "1px solid var(--border)",
    background: "var(--white)",
    color: "var(--green)",
    fontSize: 22,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--fb)"
  },
  listRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--white)",
    padding: "15px 16px",
    marginBottom: 1,
    borderLeft: "3px solid transparent"
  },
  statCell: {
    flex: 1,
    background: "var(--white)",
    padding: "14px 8px",
    textAlign: "center",
    borderBottom: "2px solid var(--border-lt)"
  },
  statNum: {
    fontFamily: "var(--fd)",
    fontSize: 24,
    fontWeight: 700,
    color: "var(--green)",
    letterSpacing: "-0.02em",
    lineHeight: 1
  },
  statLbl: {
    fontSize: 10,
    color: "var(--muted)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginTop: 5
  }
};
