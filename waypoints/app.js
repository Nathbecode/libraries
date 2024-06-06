document.addEventListener('DOMContentLoaded', function() {
    var waypointElement = document.getElementById('basic-waypoint');
    if (waypointElement) {
        var waypoint = new Waypoint({
            element: waypointElement,
            handler: function(direction) {
                if (direction === 'down') {
                    alert('Are you sure? Things are wild down there.');
                } else if (direction === 'up') {
                    alert('i told you')
                }
            },
            offset: '100%' // Trigger when the top of the element is at the bottom of the viewport
        });
    } else {
        console.error('Waypoint element not found');
    }
});

