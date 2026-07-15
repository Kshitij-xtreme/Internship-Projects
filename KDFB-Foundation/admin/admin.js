function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  document.querySelector('.topbar-title h1').textContent = document.querySelector(`[data-tab="${id}"]`).dataset.label;
}

function downloadReceipt(name, amount, paymentId) {
  const receiptWindow = window.open('', '_blank');
  const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  receiptWindow.document.write(`
    <html><head><title>Donation Receipt</title>
    <style>
      body{font-family:Arial,sans-serif;max-width:600px;margin:40px auto;padding:0 20px;}
      .header{text-align:center;border-bottom:3px solid #C9A84C;padding-bottom:20px;margin-bottom:24px;}
      h1{color:#0D1B2A;font-size:1.4rem;} .gold{color:#C9A84C;}
      .row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #eee;}
      .footer{text-align:center;margin-top:30px;font-size:0.8rem;color:#888;}
    </style></head>
    <body>
      <div class="header"><h1>Krrishna Dhwarka Foundation Bharat</h1><p class="gold">Official Donation Receipt</p></div>
      <div class="row"><span>Receipt No.</span><span>${paymentId}</span></div>
      <div class="row"><span>Date</span><span>${date}</span></div>
      <div class="row"><span>Donor Name</span><span>${name}</span></div>
      <div class="row"><strong>Amount</strong><strong class="gold">₹${amount}</strong></div>
      <div class="footer"><p>Thank you for your generous support. Valid for 80G tax deduction.</p>
      <button onclick="window.print()" style="margin-top:16px;padding:10px 24px;background:#C9A84C;border:none;border-radius:4px;font-weight:700;cursor:pointer;">Print / Download</button>
      </div>
    </body></html>
  `);
}

function uploadBanner() {
  document.getElementById('banner-input').click();
}
function uploadCert() {
  document.getElementById('cert-input').click();
}

document.addEventListener('DOMContentLoaded', () => {
  showTab('tab-inquiries');
});
