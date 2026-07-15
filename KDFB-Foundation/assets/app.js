// Preset amount buttons
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const amtSelect = document.getElementById('donation-amount');
    if (amtSelect) amtSelect.value = btn.dataset.amount;
  });
});

// Razorpay donate
function initDonation() {
  const name = document.getElementById('donor-name')?.value || '';
  const email = document.getElementById('donor-email')?.value || '';
  const amount = document.getElementById('donation-amount')?.value || '';
  const cause = document.getElementById('donation-cause')?.value || '';

  if (!name || !email || !amount) {
    alert('Please fill in your name, email, and select an amount.');
    return;
  }

  // Razorpay integration placeholder
  const options = {
    key: 'YOUR_RAZORPAY_KEY', // Replace with actual key
    amount: parseInt(amount) * 100,
    currency: 'INR',
    name: 'Krrishna Dhwarka Foundation Bharat',
    description: cause || 'General Donation',
    image: 'assets/logo.png',
    handler: function(response) {
      alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
      generateReceipt(response.razorpay_payment_id, name, email, amount, cause);
    },
    prefill: { name, email },
    theme: { color: '#C9A84C' }
  };

  // const rzp = new Razorpay(options);
  // rzp.open();
  alert('Razorpay integration ready! Add your API key to activate payments.\n\nDonation Details:\nName: ' + name + '\nAmount: ₹' + amount + '\nCause: ' + cause);
}

function generateReceipt(paymentId, name, email, amount, cause) {
  const receiptWindow = window.open('', '_blank');
  const date = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
  receiptWindow.document.write(`
    <html><head><title>Donation Receipt</title>
    <style>
      body { font-family: Arial, sans-serif; max-width: 600px; margin: 40px auto; padding: 0 20px; }
      .header { text-align: center; border-bottom: 3px solid #C9A84C; padding-bottom: 20px; margin-bottom: 24px; }
      h1 { color: #0D1B2A; font-size: 1.4rem; }
      .gold { color: #C9A84C; } .row { display:flex; justify-content:space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
      .footer { text-align: center; margin-top: 30px; font-size: 0.8rem; color: #888; }
    </style></head>
    <body>
      <div class="header"><h1>Krrishna Dhwarka Foundation Bharat</h1><p class="gold">Donation Receipt</p></div>
      <div class="row"><span>Receipt No.</span><span>${paymentId}</span></div>
      <div class="row"><span>Date</span><span>${date}</span></div>
      <div class="row"><span>Donor Name</span><span>${name}</span></div>
      <div class="row"><span>Email</span><span>${email}</span></div>
      <div class="row"><span>Cause</span><span>${cause || 'General Fund'}</span></div>
      <div class="row"><strong>Amount Donated</strong><strong class="gold">₹${amount}</strong></div>
      <div class="footer"><p>Thank you for your generous contribution. Your support makes a difference.</p>
      <p>This is a valid receipt for tax purposes under Section 80G.</p>
      <button onclick="window.print()" style="margin-top:16px;padding:10px 24px;background:#C9A84C;border:none;border-radius:4px;font-weight:700;cursor:pointer;">Download / Print</button>
      </div>
    </body></html>
  `);
}

// Inquiry form
function submitInquiry(e) {
  e.preventDefault();
  alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  e.target.reset();
}

// Smooth nav active state
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) nav.style.background = 'rgba(13,27,42,0.99)';
  else nav.style.background = 'rgba(13,27,42,0.97)';
});
