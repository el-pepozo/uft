scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel11`)
    tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.showLongText("toma la antorcha magica", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`nivel3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.startCountdown(0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pedro.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pedro.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pedro.isHittingTile(CollisionDirection.Bottom)) {
        pedro.vy = -115
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pedro.isHittingTile(CollisionDirection.Bottom)) {
        pedro.vy = -135
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        info.changeScoreBy(-3)
    }
})
info.onCountdownEnd(function () {
    game.showLongText("el narrador:hola pedro ", DialogLayout.Bottom)
    game.showLongText("el narrador:veo que encontraste la antorcha magica ", DialogLayout.Bottom)
    game.showLongText("el narrador:puede que encuentres mas a lo largo del camino", DialogLayout.Bottom)
    game.showLongText("Pedro:ah pero quien eres tu?", DialogLayout.Bottom)
    game.showLongText("el narrador:yo , pedro sere tu guia en este camino", DialogLayout.Bottom)
    game.showLongText("Pedro:y donde estoy?", DialogLayout.Bottom)
    game.showLongText("el narrador: Tu Pedro estas en uft ", DialogLayout.Bottom)
    game.showLongText("el narrador: Yque es uft te preguntaras", DialogLayout.Bottom)
    game.showLongText("el narrador: eso miquerido amigo lo descubriras mas adelante", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`nivel5`)
    game.showLongText("el narrador: muy bien mi querido amigo ", DialogLayout.Bottom)
    game.showLongText("el narrador: pero nada es lo que parece", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    info.changeLifeBy(5)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
info.onScore(0, function () {
    game.showLongText("toma un rayo para mas energia", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`nivel13`)
    music.play(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level11`)
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile41`, function (sprite, location) {
    info.changeScoreBy(3)
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 1500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`nivel8`)
    tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
})
let pedro: Sprite = null
pedro = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(pedro, 100, 0)
tiles.setCurrentTilemap(tilemap`nivel2`)
tiles.placeOnTile(pedro, tiles.getTileLocation(0, 0))
scene.cameraFollowSprite(pedro)
pedro.ay = 150
info.setLife(3)
info.setScore(3)
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
game.showLongText("pulsa espacio para saltar ", DialogLayout.Bottom)
game.showLongText("pulsa x para un salto mas alto", DialogLayout.Bottom)
game.showLongText("toma los corazones a lo largo del camino para vidas extra", DialogLayout.Bottom)
game.onUpdate(function () {
    if (pedro.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass2)) {
        pedro.setPosition(0, 0)
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    if (pedro.tileKindAt(TileDirection.Bottom, assets.tile`myTile40`)) {
        pedro.setPosition(0, 0)
        info.changeLifeBy(-5)
    }
})
game.onUpdate(function () {
    if (pedro.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        music.play(music.createSoundEffect(WaveShape.Square, 2441, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        pedro.setPosition(0, 0)
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    if (false) {
        pedro.setPosition(0, 0)
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    if (pedro.tileKindAt(TileDirection.Bottom, assets.tile`myTile32`)) {
        pedro.setPosition(0, 0)
        info.changeLifeBy(-3)
    }
})
