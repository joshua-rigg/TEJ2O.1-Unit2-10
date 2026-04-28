/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joshua
 * Created on: April 2026
 * This program will show a specific color depending on the light level 
*/

//variables
let lightLevels: number = 0
const myNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

//setup
basic.showIcon(IconNames.Happy)
myNeopixelStrip.clear()
myNeopixelStrip.show()

// code for lighting up neopixels
input.onButtonPressed(Button.A, function () {
    lightLevels = input.lightLevel()

    // shows the current light level
    basic.showNumber(lightLevels)
    myNeopixelStrip.clear()

    // if lightlevel is greater then 52 the color turns green
    if (lightLevels > 52) {
        myNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    }

    // if lightlevel is greater then 104 the color turns yellow
    if (lightLevels > 104) {
        myNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow ))
    }

    // if lightlevel is greater then 156 the color turns orange
    if (lightLevels > 156) {
        myNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
    }

    // if lightlevel is greater then 208 the color turns red
    if (lightLevels > 208) {
        myNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }
    myNeopixelStrip.show()
})
