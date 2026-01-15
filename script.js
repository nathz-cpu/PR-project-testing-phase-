:root { --blue: #2563eb; --bg: #f8fafc; --text: #0f172a; --error: #dc2626; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); }

.top-nav { display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 12px 40px; border-bottom: 2px solid #e2e8f0; position: sticky; top: 0; z-index: 100; }
.logo-area h1 { color: var(--blue); font-size: 1.2rem; }
.nav-links { display: flex; gap: 20px; }
.tab-btn { padding: 10px 5px; border: none; background: none; cursor: pointer; font-weight: 600; color: #64748b; }
.tab-btn.active { color: var(--blue); border-bottom: 4px solid var(--blue); }

.profile-area { display: flex; align-items: center; gap: 12px; }
.account-chip { display: flex; align-items: center; gap: 8px; background: #f1f5f9; padding: 6px 15px; border-radius: 25px; }
.account-chip img { width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--blue); }

.container { padding: 40px; max-width: 1200px; margin: auto; }
.search-section input { width: 100%; padding: 14px; border: 1px solid #cbd5e1; border-radius: 12px; margin-bottom: 25px; width: 100%; }

table { width: 100%; background: white; border-radius: 12px; border-collapse: collapse; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
th { text-align: left; padding: 18px; background: #f8fafc; }
td { padding: 18px; border-bottom: 1px solid #f1f5f9; }

.btn-primary-large { width: 100%; padding: 30px; background: #fff; border: 2px dashed var(--blue); border-radius: 15px; color: var(--blue); font-weight: bold; cursor: pointer; margin-bottom: 20px; }
.category-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }
.big-cat-btn { padding: 25px; background: white; border: 2px solid #e2e8f0; border-radius: 15px; font-weight: bold; color: #64748b; cursor: pointer; }
.big-cat-btn.active { border: 4px solid var(--blue); color: var(--blue); box-shadow: 0 0 15px rgba(37,99,235,0.3); background: #eff6ff; }

/* LOGIN MODAL AESTHETICS */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center; z-index: 1000; }
.modal-card { background: white; padding: 40px; border-radius: 24px; width: 380px; text-align: center; box-shadow: 0 20px 25px rgba(0,0,0,0.2); }
.modal-icon { font-size: 3rem; margin-bottom: 10px; }
.input-group input { width: 100%; padding: 12px; margin: 6px 0; border: 2px solid #f1f5f9; border-radius: 10px; background: #f8fafc; }

.btn-login-main { width: 100%; padding: 18px; background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; margin-top: 10px; }
.btn-forgot-style { background: none; border: none; color: #64748b; cursor: pointer; margin-top: 15px; }

/* PREVIEW & RED X */
.absolute-close { position: fixed; top: 20px; right: 20px; width: 50px; height: 50px; background: var(--error); color: white; border: none; border-radius: 50%; font-size: 30px; cursor: pointer; z-index: 2000; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
.preview-card { background: white; width: 90%; height: 85%; border-radius: 15px; display: flex; flex-direction: column; overflow: hidden; }
.preview-body { flex: 1; background: #000; display: flex; justify-content: center; align-items: center; overflow: auto; }
.preview-body img, .preview-body video { max-width: 100%; max-height: 100%; object-fit: contain; }
.preview-body iframe { width: 100%; height: 100%; border: none; }

.logout-btn { background: #fee2e2; color: var(--error); border: none; padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; }
.hidden { display: none !important; }
    
