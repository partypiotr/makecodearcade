function enemycode (enem: Sprite) {
	
}
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . 
. . . . . 1 3 3 1 . . . . . . . 
. . . . . 1 3 3 1 . . . . . . . 
. . . . . 1 3 3 1 . . . . . . . 
. . . f f 1 1 1 1 f f . . . . . 
. . . f . 1 . . 1 . f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(10, 13)
controller.moveSprite(mySprite)
let enem = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. . 2 2 4 4 2 2 2 2 . . . . . . 
. . 2 2 4 4 2 2 2 2 2 . . . . . 
. . f 2 2 2 2 2 2 2 2 . . . . . 
. . f f 2 2 2 2 2 2 . . . . . . 
. . f f 2 2 2 2 2 f . . . . . . 
. . f f f 2 2 f . f . . . . . . 
. . f f f . . f . f . . . . . . 
. . f f f . . f . f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
forever(function () {
    music.playMelody("D - D A E B E B ", 250)
})
forever(function () {
    enem.follow(mySprite)
    if (true) {
    	
    }
    effects.hearts.startScreenEffect()
})
