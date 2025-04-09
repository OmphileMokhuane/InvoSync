// Add event listeners to navigation items
document.addEventListener('DOMContentLoaded', function() {
    // Load the dashboard by default
    loadPage('dashboard');
    
    // Add click event listeners to navigation items
    const navItems = document.querySelectorAll('.main-nav li a');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(navItem => {
                navItem.parentElement.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            // Determine which page to load based on text or data attribute
            const pageName = this.textContent.trim().toLowerCase();
            loadPage(pageName);
        });
    });
});

// Enhance the loadPage function to handle other pages
function loadPage(page) {
    // Convert page name to lowercase and remove spaces
    page = page.toLowerCase().replace(/\s+/g, '');
    
    if(page === 'dashboard') {
        content.innerHTML = `
            <div class="dashboard">
                <h2 class="section-title">Dashboard</h2>
                
                <!-- Stats Cards -->
                <div class="stats-cards">
                    <div class="card">
                        <div class="card-icon income">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div class="card-info">
                            <h3>Total Income</h3>
                            <p class="amount">$24,500.00</p>
                            <p class="trend positive"><i class="fas fa-arrow-up"></i> 12% from last month</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-icon pending">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="card-info">
                            <h3>Pending Invoices</h3>
                            <p class="amount">$7,250.00</p>
                            <p class="count">12 invoices</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-icon overdue">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="card-info">
                            <h3>Overdue</h3>
                            <p class="amount">$3,180.00</p>
                            <p class="count">5 invoices</p>
                        </div>
                    </div>
                </div>
            </div>`;
    } else if(page === 'invoices') {
        content.innerHTML = `<h2 class="section-title">Invoices</h2><p>Invoices content will go here</p>`;
    } else if(page === 'clients') {
        content.innerHTML = `<h2 class="section-title">Clients</h2><p>Clients content will go here</p>`;
    } else if(page === 'reports') {
        content.innerHTML = `<h2 class="section-title">Reports</h2><p>Reports content will go here</p>`;
    } else if(page === 'settings') {
        content.innerHTML = `<h2 class="section-title">Settings</h2><p>Settings content will go here</p>`;
    } else {
        content.innerHTML = `<h2 class="section-title">Page Not Found</h2><p>The requested page does not exist.</p>`;
    }
}
