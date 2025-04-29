document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const body = document.body;
    const wrapper = document.querySelector('.wrapper');
    
    function toggleSidebar() {
        sidebar.classList.toggle('collapsed');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.toggle('active');
            body.classList.toggle('sidebar-active');
        }

        if (wrapper) {
            wrapper.classList.toggle('');
        }
        
        setTimeout(() => {
            content.style.display = 'none';
            void content.offsetHeight; // Force reflow
            content.style.display = '';
        }, 310);
    }
    
    sidebarCollapse.addEventListener('click', toggleSidebar);
    
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(event.target) && 
            !sidebarCollapse.contains(event.target) && 
            sidebar.classList.contains('active')) {
            
            sidebar.classList.remove('active');
            body.classList.remove('sidebar-active');
        }
    });
    
    // Handle window resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
            sidebar.classList.remove('active');
            body.classList.remove('sidebar-active');
        } else {
            if (!sidebar.classList.contains('user-collapsed')) {
                sidebar.classList.remove('collapsed');
            }
        }
    });
    
    // Keep track of user-initiated collapse state
    sidebarCollapse.addEventListener('click', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('user-collapsed');
        }
    });
    
    // Initialize tooltips if Bootstrap supports it
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Add active class to current page in sidebar
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.sidebar-link');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});