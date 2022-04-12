var boxes = new Array(18);

for (i=0; i<boxes.length; i++) {
    index = i + 1;
    boxes[i] = 'box' + index.toString();
}

var images = newArray(9);
images[0] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519203520l/36336078._SY475_.jpg'
images[1] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435766837l/25831956.jpg'
images[2] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584274906l/13537029._SY475_.jpg'
images[3] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546419714l/15777407._SY475_.jpg'
images[4] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546419288l/15994711._SY475_.jpg'
images[5] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631544792l/58989059._SY475_.jpg'
images[6] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1527540345l/33160963._SY475_.jpg'
images[7] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560955053l/44421460._SY475_.jpg'
images[8] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546419467l/15804129._SY475_.jpg'
images[9] = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546419388l/12974171._SY475_.jpg'

document.getElementById("box1").onclick = function(){
    document.getElementById("box1").innerHTML = '<img src=' + images[0] + '>';
} 