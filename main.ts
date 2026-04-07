/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joshua
 * Created on: April 2026
 * This program ...
*/

//variables
let amountOfLight: number
let neopixelStrip: neopixel.Strip = null

//cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// light up leds
input.onButtonPressed(Button.A, function () {
    // get light level
    amountOfLight = input.lightLevel()

    // show light level
    basic.clearScreen()
    basic.showNumber(amountOfLight)

    if (amountOfLight <= 51) {
        // show nothing
    }

    // light up 1 led
    if (amountOfLight > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    }

    // light up 2 leds
    if (amountOfLight > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    }

    // light up 3 leds
    if (amountOfLight > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    }

    // light up 4 leds
    if (amountOfLight > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    }

    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
