def on_overlap_tile(sprite, location):
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    tiles.set_current_tilemap(tilemap("""
        level10
    """))
    tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    tiles.set_current_tilemap(tilemap("""
        nivel11
    """))
    tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile34
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    info.change_life_by(1)
    tiles.set_tile_at(location3, assets.tile("""
        transparency16
    """))
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile7
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    tiles.set_current_tilemap(tilemap("""
        level6
    """))
    tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    tiles.set_current_tilemap(tilemap("""
        nivel3
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile25
    """),
    on_overlap_tile5)

def on_right_pressed():
    pedro.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    pedro.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_a_pressed():
    if pedro.is_hitting_tile(CollisionDirection.BOTTOM):
        pedro.vy = -115
        music.play(music.create_sound_effect(WaveShape.SQUARE,
                400,
                600,
                255,
                0,
                100,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_pressed():
    if pedro.is_hitting_tile(CollisionDirection.BOTTOM):
        pedro.vy = -135
        music.play(music.create_sound_effect(WaveShape.SQUARE,
                400,
                600,
                255,
                0,
                100,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
        info.change_score_by(-3)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_overlap_tile6(sprite6, location6):
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    tiles.set_current_tilemap(tilemap("""
        nivel5
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile29
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite7, location7):
    info.change_life_by(5)
    tiles.set_tile_at(location7, assets.tile("""
        transparency16
    """))
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile20
    """),
    on_overlap_tile7)

def on_overlap_tile8(sprite8, location8):
    tiles.set_current_tilemap(tilemap("""
        nivel13
    """))
    music.play(music.create_sound_effect(WaveShape.NOISE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile43
    """),
    on_overlap_tile8)

def on_overlap_tile9(sprite9, location9):
    tiles.set_current_tilemap(tilemap("""
        level11
    """))
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile10
    """),
    on_overlap_tile9)

def on_overlap_tile10(sprite10, location10):
    info.change_score_by(3)
    tiles.set_tile_at(location10, assets.tile("""
        transparency16
    """))
    music.play(music.melody_playable(music.ba_ding),
        music.PlaybackMode.UNTIL_DONE)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile41
    """),
    on_overlap_tile10)

def on_overlap_tile11(sprite11, location11):
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_open,
    on_overlap_tile11)

def on_overlap_tile12(sprite12, location12):
    music.play(music.create_sound_effect(WaveShape.TRIANGLE,
            5000,
            0,
            255,
            0,
            1500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    tiles.set_current_tilemap(tilemap("""
        nivel8
    """))
    tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile30
    """),
    on_overlap_tile12)

pedro: Sprite = None
pedro = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(pedro, 100, 0)
tiles.set_current_tilemap(tilemap("""
    nivel2
"""))
tiles.place_on_tile(pedro, tiles.get_tile_location(0, 0))
scene.camera_follow_sprite(pedro)
pedro.ay = 150
info.set_life(3)
info.set_score(3)
music.play(music.string_playable("E B C5 A B G A F ", 120),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)

def on_on_update():
    if pedro.tile_kind_at(TileDirection.BOTTOM, sprites.castle.tile_grass2):
        pedro.set_position(0, 0)
        info.change_life_by(-1)
game.on_update(on_on_update)

def on_on_update2():
    if pedro.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile40
    """)):
        pedro.set_position(0, 0)
        info.change_life_by(-5)
game.on_update(on_on_update2)

def on_on_update3():
    if pedro.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile0
    """)):
        music.play(music.create_sound_effect(WaveShape.SQUARE,
                2441,
                1,
                255,
                0,
                100,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
        pedro.set_position(0, 0)
        info.change_life_by(-1)
game.on_update(on_on_update3)

def on_on_update4():
    if False:
        pedro.set_position(0, 0)
        info.change_life_by(-1)
game.on_update(on_on_update4)

def on_on_update5():
    if pedro.tile_kind_at(TileDirection.BOTTOM, assets.tile("""
        myTile32
    """)):
        pedro.set_position(0, 0)
        info.change_life_by(-3)
game.on_update(on_on_update5)
