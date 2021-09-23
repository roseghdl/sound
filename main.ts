input.onButtonPressed(Button.A, function () {
    radio.sendString("han")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("yeom")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "siny") {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Double))
        신호송신횟수 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("yangh")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("leee")
})
let 신호송신횟수 = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(신호송신횟수)
})
