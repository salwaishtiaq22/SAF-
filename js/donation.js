document.addEventListener('DOMContentLoaded', function() {
    const amountInput = document.querySelector('.amount-input');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const currencyOptions = document.querySelectorAll('.currency-option');
    const currencySelector = document.querySelector('.currency-selector');

    // Amount Input Handler
    amountInput.addEventListener('input', function(e) {
        // Allow only numbers
        this.value = this.value.replace(/[^0-9]/g, '');
        
        // Remove active state from buttons when typing
        amountButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Amount Buttons Handler
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('sadaqah')) {
                const amount = this.textContent.replace(/[^0-9]/g, '');
                amountInput.value = amount;
                
                amountButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Currency Selection Handler
    currencyOptions.forEach(option => {
        option.addEventListener('click', function() {
            const flag = this.dataset.flag;
            const code = this.dataset.code;
            
            const flagImg = currencySelector.querySelector('.flag-icon');
            flagImg.src = flag;
            flagImg.alt = code;
            
            // Update amounts based on currency
            updateAmounts(code);
        });
    });
});

// Payment Processing Function
function processPayment(method) {
    const amount = document.querySelector('.amount-input').value;
    const currency = document.querySelector('.currency-selector .flag-icon').alt;
    
    if (!amount) {
        alert('Please enter an amount');
        return;
    }

    // Here you would integrate with your payment processor
    console.log(`Processing ${amount} ${currency} payment via ${method}`);
    
    // Example integration (you would replace this with actual payment gateway code)
    switch(method) {
        case 'paypal':
            // Redirect to PayPal
            // window.location.href = `your-paypal-checkout-url?amount=${amount}&currency=${currency}`;
            break;
        case 'visa':
        case 'mastercard':
            // Open card payment form
            openCardPaymentForm(amount, currency);
            break;
        case 'gpay':
            // Initialize Google Pay
            initializeGooglePay(amount, currency);
            break;
    }
}

function updateAmounts(currency) {
    // Update amount buttons with new currency
    const buttons = document.querySelectorAll('.amount-btn');
    buttons.forEach(button => {
        if (!button.classList.contains('sadaqah')) {
            const amount = button.textContent.replace(/[^0-9]/g, '');
            button.textContent = `$${amount} ${currency}`;
        }
    });
} 