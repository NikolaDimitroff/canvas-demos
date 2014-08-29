// Assumes that all frames are layed out vertically
var AnimatedSprite = function (img, frameCount) {
    this.img = img;
    this.frameHeight = img.height / frameCount;
    this.frame = 0;
    this.totalFrames = frameCount;
    this.lastFrame = Date.now();
}

AnimatedSprite.prototype.update = function (fps) {
    fps = fps || 1000 / 60;
    if (Date.now() - this.lastFrame >= 1000 / fps) {
        this.lastFrame = Date.now();
        this.frame = (this.frame + 1) % this.totalFrames;
    }
}

AnimatedSprite.prototype.draw = function (x, y) {
    context.drawImage(this.img, 0, 
                      this.frame * this.frameHeight, this.img.width, this.frameHeight,
                      x, y, this.img.width, this.frameHeight);
}
    