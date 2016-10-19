var World = {
	snapped: false,
	init: function() {
    // トラッカーの設定
    this.tracker = new AR.ClientTracker("assets/tracker.wtc");
    // モデルの読み込み
    this.modelDragon = new AR.Model("assets/dragon_floating.wt3", {
      scale: {
        x: 0.0007,
        y: 0.0007,
        z: 0.0007
      },
      translate: {
        x: 0.0,
        y: 0.0,
        z: 0.0
      },
      rotate: {
        roll: 25,
        tilt: -100.0
      }
    });
    
    // スナップボタンの作成
    var imgSnap = new AR.ImageResource("assets/snapButton.png");
    this.buttonSnap = new AR.ImageDrawable(imgSnap, 0.2, {
      offsetX: -0.35,
      offsetY: -0.45,
      onClick: this.toggleSnapping
    });
    
    // トラッキングオブジェクトの作成
    this.trackable = new AR.Trackable2DObject(this.tracker, "*", {
      drawables: {
        cam: [this.modelDragon, this.buttonSnap]
      },
      snapToScreen: {
        snapContainer: document.getElementById('snapContainer')
      }
    });
	},
  toggleSnapping: function() {
		World.snapped = !World.snapped;
		World.trackable.snapToScreen.enabled = World.snapped;
	},
};

World.init();
