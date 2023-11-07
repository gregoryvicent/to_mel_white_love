const $itemsGallery = document.querySelectorAll('#gallery-item');

document.addEventListener('DOMContentLoaded', () => {
    $itemsGallery.forEach(item => {
        item.addEventListener('click', () => {
            const $ItemCover = item.querySelector('#cover')
            if ($ItemCover.classList.contains('isActive')) {
                $ItemCover.classList.remove('isActive');
                $ItemCover.classList.add('isDeactive');
            } else {
                $ItemCover.classList.remove('isDeactive');
                $ItemCover.classList.add('isActive');
            }
        })
    });
})
