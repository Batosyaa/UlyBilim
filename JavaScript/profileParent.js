        const ctx = document.getElementById('progressChart').getContext('2d');
        const progressChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [
                    {
                        label: 'Overall Average',
                        data: [78, 80, 82, 85, 84, 87],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Mathematics',
                        data: [75, 78, 83, 88, 90, 92],
                        borderColor: '#10b981',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderDash: [3, 3]
                    },
                    {
                        label: 'Physics',
                        data: [72, 75, 80, 82, 84, 85],
                        borderColor: '#f97316',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        borderDash: [3, 3]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                scales: {
                    y: {
                        min: 60,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });

        document.getElementById("SendMessageButton").addEventListener("click", function () {
        alert("The message is sent!");
        const modalElement = document.getElementById("contactTeacherModal");
        const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
        modal.hide();
            });