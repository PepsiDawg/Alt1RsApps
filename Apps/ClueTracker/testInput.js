function getTestInput() {
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    let img = document.getElementById('testScreen');

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    
    return context.getImageData(0,0,img.width, img.height);
  }