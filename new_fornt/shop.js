document.addEventListener('DOMContentLoaded', function() {
    const kitTypes = document.querySelectorAll('.kit-type');
    const kits = document.querySelectorAll('.kit');

    function showKit(kitType) {
        kits.forEach(function(kit) {
            if (kit.id === kitType + '-kits') {
                kit.classList.add('active');
            } else {
                kit.classList.remove('active');
            }
        });
    }

    kitTypes.forEach(function(kitType) {
        kitType.addEventListener('click', function() {
            const selectedKit = this.getAttribute('data-kit');
            showKit(selectedKit);
        });
    });

    // Initially show the first kit type
    showKit('home');
});
