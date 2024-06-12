controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`A`, SpaceShip, 0, -200)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
let Alien: Sprite = null
let projectile: Sprite = null
let SpaceShip: Sprite = null
effects.starField.startScreenEffect()
info.setLife(3)
info.setScore(0)
SpaceShip = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
SpaceShip.setStayInScreen(true)
controller.moveSprite(SpaceShip, 100, 100)
game.onUpdateInterval(1000, function () {
    Alien = sprites.create(assets.image`Alien`, SpriteKind.Enemy)
    Alien.setVelocity(0, 100)
    Alien.setPosition(randint(5, 155), 0)
    Alien.setFlag(SpriteFlag.AutoDestroy, true)
})
