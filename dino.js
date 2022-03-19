class Dino {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(
      ASSET_MANAGER.getAsset('./dino.png'),
      0,
      0,
      2453,
      750,
      48,
      0.25
    );
  }

  update() {}

  draw(ctx) {
    // ctx.drawImage(ASSET_MANAGER.getAsset('./dino.png'), 0, 536);
    this.animator.drawFrame(this.game.clockTick, ctx, 0,80 ,0.8);
  }
}
