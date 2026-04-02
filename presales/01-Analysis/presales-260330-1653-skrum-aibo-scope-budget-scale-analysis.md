# Presales Analysis: 1595 - Skrum - AiBoシステム開発

> Date: 2026-03-30 | Source: Facon room `hcbp8h5e3ipm5hpgc` + `Estimate_AiBoo_20260327.xlsx`

---

## TL;DR

AiBo là hệ thống **AI-powered business document platform** cho client của Skrum — gồm User App (Web) + Admin App (Web). Core value: AI tự động trích xuất nội dung file, tạo báo giá/đề xuất/hóa đơn/phân tích cạnh tranh. Team Quân/Đạt est **6.3 MM** (~3.5 tháng, 2 người). Budget chưa rõ — client dùng "ものづくり補助金" (trợ cấp nhà nước), gaisan only. **Rủi ro cao** vì yêu cầu AI chưa rõ output quality.

---

## 1. Dữ liệu trích xuất

### 1.1 Thông tin dự án
[SoT: Vault] Facon room messages 25-30/3/2026

| Item | Value |
|------|-------|
| Oppo ID | 1595 |
| Tên dự án | AiBoシステム開発 |
| Client | Skrum (JP) → client của Skrum (end-user) |
| Facon room | `hcbp8h5e3ipm5hpgc` (fname: 1595 - Skrum - AiBoシステム開発) |
| FES | Đã tạo (@duyenbtm) |
| Team presales | @canh (sponsor), @anhnt2 (sales), @dzung + @luongkam (est reviewer), @quannm2 + @datpt (estimator) |
| Figma | [Updated 03/27](https://www.figma.com/make/nx5v43254sTCgkVhZx1H2O/AIBoO_other) |
| Drive | [Folder](https://drive.google.com/drive/folders/1aqn-kfE9BQfKdleuW9iMsdIUP8P8iGtk) |
| GSheet (client) | `1qTivwTkwR7vy3J3qfgiOT9kzPAzqJLy8Vh02YS0wpos` (not accessible — client file) |
| Estimate xlsx | `1d8AtMhagzsEscd7EpFqLzwcBmJg_BA5a` (Estimate_AiBoo_20260327.xlsx) |

### 1.2 Bối cảnh client
[SoT: Vault] Facon message @duyenbtm 25/3/2026

- Client của Skrum đang xây dựng **dịch vụ mới**
- Dự kiến dùng **ものづくり補助金** (trợ cấp chế tạo từ chính phủ Nhật)
- Kể cả không được trợ cấp vẫn muốn phát triển
- Design/chức năng **chưa xác định**, có thể thay đổi
- Yêu cầu: **概算見積** (rough estimate) chứ chưa phải báo giá chính thức

### 1.3 Budget
[SoT: Vault] Facon messages 30/3/2026

- @canh: "Gaisan thôi. Chưa có chi tiết gì đâu"
- @luongkam: "budget bao nhiêu nữa" — **chưa có câu trả lời**
- **Budget: UNKNOWN** — chỉ là rough estimate phase

---

## 2. Phạm vi công việc (Scope of Work)

### 2.1 Tổng quan hệ thống
[SoT: Code] Estimate_AiBoo_20260327.xlsx — Sheet "3. 詳細見積(JP)"

**2 ứng dụng, 24 chức năng chính:**

#### A. ユーザアプリ (User App — Web) — 21 features

| # | Category | Feature | Coding (MD) | Testing (MD) | Risk |
|---|----------|---------|-------------|--------------|------|
| 1 | Dashboard | Dashboard | 1.5 | 2.0 | Low |
| 2 | File Management | File upload (single/multi) | 1.0 | 0.4 | Low |
| **3** | **File Management** | **AI content extraction** | **15.0** | **8.0** | **🔴 HIGH** |
| 4 | File Management | File list/sort | 2.0 | 1.0 | Low |
| 5 | File Management | File delete | 0.25 | 0.1 | Low |
| 6 | File Management | File download (single/batch) | 1.0 | 0.5 | Low |
| **7** | **AI Doc Gen** | **Create proposals (提案書)** | **10.0** | **3.0** | **🔴 HIGH** |
| **8** | **AI Doc Gen** | **Create quotes (見積書)** | **5.0** | **3.0** | **🟡 MED** |
| **9** | **AI Doc Gen** | **Create invoices (請求書)** | **5.0** | **3.0** | **🟡 MED** |
| **10** | **AI Doc Gen** | **Competitive analysis report** | **5.0** | **3.0** | **🔴 HIGH** |
| **11** | **Settings** | **AI template config** | **10.0** | **6.0** | **🟡 MED** |
| 12 | Settings | Template marketplace | 5.0 | 3.0 | Med |
| 13 | Settings | User info | 1.5 | 0.5 | Low |
| 14 | Settings | Pricing plans | 4.0 | 1.5 | Med |
| 15 | Settings | Notification settings | 1.0 | 0.25 | Low |
| 16 | Settings | Password change | 0.25 | 0.1 | Low |
| 17 | Inquiry | Contact form | 0.25 | 0.1 | Low |

#### B. 管理アプリ (Admin App — Web) — 7 features

| # | Category | Feature | Coding (MD) | Testing (MD) |
|---|----------|---------|-------------|--------------|
| 18 | Auth | Login/Logout | 0.5 | 0.25 |
| 19 | Tenant Mgmt | Tenant list/search | 0.5 | 0.2 |
| 20 | Tenant Mgmt | Create tenant | 1.5 | 0.8 |
| 21 | Tenant Mgmt | Edit tenant | 0.75 | 0.4 |
| 22 | Tenant Mgmt | Suspend/delete tenant | 0.5 | 0.2 |
| 23 | Plan Mgmt | Plan list | 0.25 | 0.1 |
| 24 | Plan Mgmt | Edit plan config | 0.5 | 0.2 |

### 2.2 Tổng hợp effort
[SoT: Code] Sheet "1. 概算工数一覧"

| Hạng mục | Man-months |
|----------|-----------|
| Coding + UT Fixbug | 3.6125 |
| Unit Testing (UT) | 1.88 |
| Dev Management | 0.549 |
| Documentation/BrSE | 0.275 |
| **Total development** | **5.493** |
| Non-dev (PM 15%) | 0.824 |
| **GRAND TOTAL** | **6.316 MM** |

**Phân bổ theo vai trò:**

| Role | MM | % |
|------|-----|---|
| SE (coder) | 3.613 | 57% |
| Tester | 1.880 | 30% |
| PM | 0.549 | 9% |
| BrSE | 0.207 | 3% |

### 2.3 Screen Design Specs (画面定義)
[SoT: Code] Sheets 3-19 of the xlsx

Excel chứa **17 screen definition sheets** chi tiết (Japanese format):
- 公募詳細画面, お気に入りリスト, フォローフォロワー一覧, 作品検索画面, ポートフォリオ画面, プロフィール画面, ポートフォリオとは, ポートフォリオの作成, 作品の投稿, グループ運用, メンバーシップ機能, イベントの開催, コミュニティチャット, フィードバック送信, 不正報告, お問い合わせ

⚠️ **Lưu ý quan trọng**: Các screens này thuộc về **phần portfolio/community** — KHÔNG nằm trong estimate 24 features ở trên. Đây có thể là specs từ project gốc (STIC/AiBo portfolio platform) chứ không phải phần AI business document.

---

## 3. Đánh giá quy mô (Scale Assessment)

### 3.1 Classification
[SoT: Inference] Based on feature analysis + system-design classification framework

| Axis | Score | Rationale |
|------|-------|-----------|
| A — Scale | 2 (Medium) | Multi-tenant SaaS, ~24 features, 2 apps, file storage + AI pipeline |
| B — Complexity | 3 (High) | AI integration (LLM for doc gen, OCR for extraction), multi-tenant, marketplace |
| C — Criticality | 2 (Medium) | Business documents (quotes/invoices) — financial accuracy matters |

**Derived Gate: Gate-3** (Medium scale + High complexity)

### 3.2 Sizing comparison

| Metric | AiBo | Zagaku (same client) | Domus (DC) |
|--------|------|---------------------|------------|
| Features | 24 | 41 | ~30 |
| Total MM | 6.3 | 3.65 | ~8 |
| AI features | 6 (core) | 0 | 5 (core) |
| Multi-tenant | Yes | No | Yes |
| Complexity | High (AI) | Medium | High (AI) |

### 3.3 Effort reality check
[SoT: Inference] Based on similar AI platform experience (Domus)

**AI features chiếm 50 MD coding + 26 MD testing = 76 MD = ~3.8 MM** → 60% tổng effort.

| AI Feature | Est (MD) | Reality check | Risk |
|------------|----------|---------------|------|
| AI content extraction | 15 | Depends on document types, languages, accuracy requirements. OCR + NLP pipeline. **15 MD is tight** if need high accuracy | 🔴 |
| Create proposals | 10 | Template + LLM generation + formatting. **Feasible** if template-based | 🟡 |
| Create quotes | 5 | Similar to proposals but with pricing logic | 🟡 |
| Create invoices | 5 | Similar pattern, needs legal format compliance (JP) | 🟡 |
| Competitive analysis | 5 | Needs external data source. **5 MD extremely tight** — where does data come from? | 🔴 |
| AI template config | 10 | Complex if truly customizable (prompt engineering UI) | 🟡 |

---

## 4. Risk Assessment

### 4.1 Critical risks (from conversation)
[SoT: Vault] @dzung 30/3/2026: "đang bốc thuốc khi không rõ yêu cầu output chất lượng"

| # | Risk | Severity | Mitigation |
|---|------|----------|------------|
| 1 | **AI output quality undefined** — "tạo báo giá" là tạo cái gì? Format nào? Accuracy level nào? | 🔴 CRITICAL | Cần tiền điều kiện (preconditions) rõ ràng từ client |
| 2 | **Budget unknown** — gaisan only, trợ cấp chưa chắc | 🔴 HIGH | Confirm budget range trước khi estimate chi tiết |
| 3 | **Design chưa xác định** — Figma "可能性あり変更" | 🟡 MED | Estimate theo assumption, ghi rõ scope change policy |
| 4 | **AI provider undefined** — bên nào làm AI? Fabbi hay client? | 🔴 HIGH | @luongkam đã hỏi — cần answer |
| 5 | **Scope confusion** — 17 screen specs (portfolio/community) vs 24 features (AI business) | 🟡 MED | Clarify: là 1 system hay 2 separate projects? |
| 6 | **Similar to Domus** — @dzung: "khác gì con domus dành cho bộ phận kinh doanh đâu" | 🟡 STRATEGIC | Reuse Domus architecture? Or white-label? |

### 4.2 @dzung's observation — chiến lược
[SoT: Vault] @dzung 30/3/2026

> "về bản chất: nếu build hệ thống ngon, thì cái này khác gì con `domus` dành cho bộ phận kinh doanh đâu"

Đây là insight quan trọng: AiBo về core = **AI-powered document generation platform cho sales/business** — giống Domus cho investment analysis. Nếu Fabbi đã build Domus, có thể **reuse AI pipeline + multi-tenant architecture**.

---

## 5. Summary Assessment

### Phạm vi Fabbi
[SoT: Inference] Based on conversation context

| Aspect | Detail |
|--------|--------|
| **Vai trò** | Offshore development partner (through Skrum as intermediary) |
| **Scope** | Full-stack development: User App + Admin App + AI integration |
| **Deliverable** | Source code + test cases + deployment |
| **NOT included** | AI model training, data preparation, ongoing AI tuning |
| **Timeline** | ~3.5 months (2 devs parallel), chưa confirm |

### Budget estimate
[SoT: Inference] Based on 6.3 MM × standard JP offshore rate

| Scenario | Unit price | Total |
|----------|-----------|-------|
| Low (¥600K/MM) | ¥600,000 | **¥3,790,000** |
| Mid (¥800K/MM) | ¥800,000 | **¥5,053,000** |
| High (¥1M/MM) | ¥1,000,000 | **¥6,316,000** |

ものづくり補助金 typically covers **1/2 to 2/3** of development cost → client out-of-pocket: ¥1.3M~¥3.2M range.

### Quy mô đánh giá

| Dimension | Rating |
|-----------|--------|
| **Technical complexity** | ⭐⭐⭐⭐ (4/5) — AI integration is core, not auxiliary |
| **Business risk** | ⭐⭐⭐⭐ (4/5) — undefined AI quality, no budget, no acceptance criteria |
| **Estimate confidence** | ⭐⭐ (2/5) — too many unknowns, "bốc thuốc" as @dzung says |
| **Strategic value** | ⭐⭐⭐ (3/5) — reuse potential with Domus, but client is Skrum's client (not direct) |

---

## 6. Unresolved Questions

1. **AI provider**: Fabbi làm AI hay client/Skrum cung cấp? LLM nào? (OpenAI, Claude, local?)
2. **AI acceptance criteria**: Output quality thế nào là đạt? Template-based hay free-form?
3. **Budget range**: Client ngân sách bao nhiêu? Có ceiling không?
4. **Screen specs mismatch**: 17 screen definitions (portfolio/community) có trong scope không?
5. **Competitive analysis data source**: Dữ liệu cạnh tranh lấy từ đâu? Web scraping? Manual input?
6. **JP legal compliance**: Invoice (請求書) cần tuân thủ Invoice System (インボイス制度) không?
7. **Domus reuse**: Có cơ hội white-label/adapt Domus architecture cho AiBo không?
8. **Multi-tenant billing**: Pricing plan management — integrate payment gateway nào?

---

## Artifacts

- Report: `plans/reports/presales-260330-1653-skrum-aibo-scope-budget-scale-analysis.md`
- Excel source: `/tmp/Estimate_AiBoo_20260327.xlsx`
- Facon room: `hcbp8h5e3ipm5hpgc` (ID: `fsJv7QkYxt83FGffD`)
