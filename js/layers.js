function drawBackground(background, context, backgroundSprites){
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for(let x = x1; x < x2; x++){
      for(let y = y1; y < y2; y++){
        backgroundSprites.drawTile(background.tile, context, x, y);

      }
    }
  });
}

export function createBackgroundLayer(backgrounds, backgroundSprites){
  const buffer = document.createElement('canvas');
  buffer.width = 256;
  buffer.height = 240;

  backgrounds.forEach(background=> {
    drawBackground(background, buffer.getContext('2d'), backgroundSprites);
  });
  return function drawBackgroundLayer(context) {
    context.drawImage(buffer, 0, 0);
  };
}
