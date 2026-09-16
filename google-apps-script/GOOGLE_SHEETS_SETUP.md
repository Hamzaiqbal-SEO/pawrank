# Google Sheets & Apps Script Setup Guide

Follow these steps to connect your Paw Rank contact form to your Google Sheet and automated email system.

---

### Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser (while logged into your Google account, preferably `pawrankofficial@gmail.com`).
2. Rename the spreadsheet to **Paw Rank - Contact Inquiries**.
3. Rename the first sheet tab at the bottom to **`Leads`** (or leave it as Sheet1, the script will automatically create the `Leads` tab if not found).

---

### Step 2: Open Apps Script Editor
1. In your Google Sheet, click on the top menu: **Extensions** &rarr; **Apps Script**.
2. Rename the Apps Script project at the top left from *Untitled project* to **Paw Rank Form Backend**.

---

### Step 3: Paste the Code
1. In the Apps Script code editor, delete any placeholder code inside `Code.gs`.
2. Copy the entire contents of [`Code.gs`](./Code.gs) and paste it into the editor.
3. Click the **Save** icon (disk icon) or press `Ctrl + S`.

---

### Step 4: Deploy as a Web App
1. At the top right of the Apps Script editor, click the blue **Deploy** button &rarr; **New deployment**.
2. Next to *Select type*, click the gear icon (⚙️) and choose **Web app**.
3. Configure the deployment settings:
   - **Description:** `Paw Rank Contact Form v1`
   - **Execute as:** `Me (pawrankofficial@gmail.com)`
   - **Who has access:** `Anyone` *(Crucial: This allows your website visitors to submit the form without needing a Google account)*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click **Authorize access**.
   - Select your Google account.
   - You may see a warning screen *"Google hasn't verified this app"*. Click **Advanced** at the bottom left, then click **Go to Paw Rank Form Backend (unsafe)**.
   - Click **Allow** to grant permission to write to Google Sheets and send emails on your behalf.
6. Once deployed, copy the **Web app URL** (it will look like `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 5: Connect the URL to Your Astro Website
You have two easy ways to set your Web App URL:

#### Option A: Using `.env` (Recommended)
Create or edit a `.env` file in the root of the project:
```bash
PUBLIC_CONTACT_FORM_ENDPOINT="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

#### Option B: Directly in `src/components/ContactForm.astro`
Replace the fallback URL in `src/components/ContactForm.astro`:
```astro
const DEFAULT_ENDPOINT = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
```

---

### Step 6: Test Your Form!
1. Start your local dev server: `npm run dev`
2. Navigate to `/contact-us#contact-form`
3. Fill out and submit the form with test information.
4. Check:
   - ✅ New row appears in your Google Sheet under tab **Leads**.
   - ✅ Admin notification email arrives at `pawrankofficial@gmail.com`.
   - ✅ Form submitter receives a branded thank-you / confirmation email.
