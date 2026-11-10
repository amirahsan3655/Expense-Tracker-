/* ===== Reset & Base ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Dark Theme (default) */
:root {
  --bg: #0f172a;
  --card-bg: #1e293b;
  --card-hover: #334155;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --income: #22c55e;
  --income-bg: rgba(34, 197, 94, 0.12);
  --expense: #ef4444;
  --expense-bg: rgba(239, 68, 68, 0.12);
  --balance: #3b82f6;
  --border: #334155;
  --input-bg: #0f172a;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Light Theme */
[data-theme="light"] {
  --bg: #f1f5f9;
  --card-bg: #ffffff;
  --card-hover: #e2e8f0;
  --text: #0f172a;
  --text-muted: #64748b;
  --income: #16a34a;
  --income-bg: rgba(22, 163, 74, 0.1);
  --expense: #dc2626;
  --expense-bg: rgba(220, 38, 38, 0.1);
  --balance: #2563eb;
  --border: #e2e8f0;
  --input-bg: #f8fafc;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.5;
  transition: background 0.25s ease, color 0.25s ease;
}

.hidden { display: none !important; }

/* Password set ho to page load pe lock dikhao */
html.is-locked #mainApp { display: none !important; }
html.is-locked #lockScreen { display: flex !important; }

/* ===== Lock Screen ===== */
.lock-screen {
  position: fixed;
  inset: 0;
  background: var(--bg);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.lock-screen:not(.hidden) {
  display: flex;
}

.lock-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px 28px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  box-shadow: var(--shadow);
}

.lock-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.lock-card h2 {
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.lock-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 18px;
}

.lock-card input[type="password"] {
  width: 100%;
  padding: 12px 14px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-size: 1rem;
  outline: none;
  margin-bottom: 12px;
  text-align: center;
}

.lock-card input[type="password"]:focus {
  border-color: var(--balance);
}

.lock-error {
  color: var(--expense) !important;
  font-size: 0.85rem !important;
  margin-bottom: 10px !important;
}

.lock-card .btn {
  margin-top: 4px;
}

.btn-link {
  background: none;
  border: none;
  color: var(--balance);
  cursor: pointer;
  font-size: 0.85rem;
  margin-top: 14px;
  text-decoration: underline;
  padding: 0;
}

.btn-link:hover {
  opacity: 0.8;
}

.app {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

/* ===== Header ===== */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-icon {
  font-size: 2.4rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-theme {
  background: var(--card-bg);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-theme:hover {
  background: var(--card-hover);
}

.header h1 {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.subtitle {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ===== Summary Cards ===== */
.summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 28px;
}

.card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 20px 22px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.card-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 6px;
  font-weight: 500;
}

.card-value {
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.balance-card .card-value { color: var(--balance); }
.income-card .card-value { color: var(--income); }
.expense-card .card-value { color: var(--expense); }

.balance-card { border-left: 4px solid var(--balance); }
.income-card { border-left: 4px solid var(--income); }
.expense-card { border-left: 4px solid var(--expense); }

/* ===== Forms ===== */
.forms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.form-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.form-card h2 {
  font-size: 1.15rem;
  margin-bottom: 18px;
  font-weight: 600;
}

.form-group {
  margin-bottom: 14px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 6px;
  font-weight: 500;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 11px 14px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #64748b;
}

.form-group input::placeholder {
  color: #64748b;
}

/* ===== Buttons ===== */
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  margin-top: 6px;
}

.btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn-income {
  background: var(--income);
  color: #052e16;
}

.btn-expense {
  background: var(--expense);
  color: #450a0a;
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: var(--card-hover);
  color: var(--text);
}

.btn-danger-outline {
  background: transparent;
  border: 1px solid #7f1d1d;
  color: #f87171;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.btn-danger-outline:hover {
  background: #7f1d1d;
  color: white;
}

/* ===== Filters ===== */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;
  margin-bottom: 20px;
  padding: 16px;
  background: var(--card-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter-group label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.filter-group select,
.filter-group input {
  padding: 8px 12px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.9rem;
  min-width: 160px;
}

/* ===== Monthly Report ===== */
.report-section {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
}

.report-header h2 {
  font-size: 1.15rem;
  font-weight: 600;
}

.report-header input[type="month"] {
  padding: 8px 12px;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.9rem;
}

.report-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.report-card {
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 16px;
  text-align: center;
}

.report-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.report-value {
  font-size: 1.2rem;
  font-weight: 700;
}

.report-value.income { color: var(--income); }
.report-value.expense { color: var(--expense); }
.report-value.balance { color: var(--balance); }

.report-subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-muted);
}

.category-breakdown {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--input-bg);
  border-radius: 8px;
  border: 1px solid var(--border);
}

.category-name {
  flex: 1;
  font-weight: 500;
  font-size: 0.9rem;
  min-width: 100px;
}

.category-bar-wrap {
  flex: 2;
  height: 8px;
  background: var(--card-hover);
  border-radius: 4px;
  overflow: hidden;
}

.category-bar {
  height: 100%;
  background: var(--expense);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.category-amount {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--expense);
  min-width: 90px;
  text-align: right;
}

.no-data {
  color: var(--text-muted);
  font-size: 0.9rem;
  padding: 12px 0;
}

/* ===== Transactions ===== */
.transactions {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.transactions h2 {
  font-size: 1.15rem;
  margin-bottom: 18px;
  font-weight: 600;
}

.transactions-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Table Header */
.table-header {
  display: grid;
  grid-template-columns: 110px 1fr 140px 120px 40px;
  gap: 12px;
  padding: 10px 16px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 1px solid var(--border);
  margin-bottom: 4px;
}

/* Transaction Row */
.transaction-item {
  display: grid;
  grid-template-columns: 110px 1fr 140px 120px 40px;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  background: var(--input-bg);
  border-radius: 10px;
  border: 1px solid var(--border);
  transition: background 0.2s;
}

.transaction-item:hover {
  background: var(--card-hover);
}

.transaction-item.income {
  border-left: 3px solid var(--income);
}

.transaction-item.expense {
  border-left: 3px solid var(--expense);
}

.col-date {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.col-desc {
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.col-cat {
  font-size: 0.85rem;
}

.cat-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  background: var(--card-hover);
  color: var(--text-muted);
  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;
}

.col-amount {
  font-weight: 700;
  font-size: 0.95rem;
  text-align: right;
  white-space: nowrap;
}

.col-amount.income {
  color: var(--income);
}

.col-amount.expense {
  color: var(--expense);
}

.col-action {
  text-align: center;
}

.delete-btn {
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px 6px;
  border-radius: 6px;
  transition: all 0.2s;
}

.delete-btn:hover {
  background: #7f1d1d;
  color: #fca5a5;
}

/* ===== Empty State ===== */
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--text-muted);
  display: none;
}

.empty-state p:first-child {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

/* ===== Footer ===== */
.footer {
  text-align: center;
  margin-top: 32px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* ===== Responsive ===== */
@media (max-width: 700px) {
  .header h1 {
    font-size: 1.3rem;
  }

  .card-value {
    font-size: 1.4rem;
  }

  .table-header {
    display: none;
  }

  .transaction-item {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 6px 12px;
  }

  .col-date {
    grid-column: 1;
    grid-row: 2;
    font-size: 0.8rem;
  }

  .col-desc {
    grid-column: 1;
    grid-row: 1;
  }

  .col-cat {
    display: none;
  }

  .col-amount {
    grid-column: 2;
    grid-row: 1;
    text-align: right;
  }

  .col-action {
    grid-column: 2;
    grid-row: 2;
  }
}