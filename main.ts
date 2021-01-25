function readDistanceInCentimeters () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(20)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distanceSensorPulseLength = pins.pulseIn(DigitalPin.P8, PulseValue.High)
    distanceInCentimeters = distanceSensorPulseLength * 0.02637931
    if (distanceInCentimeters > 0) {
        lastDistanceInCentimeters = distanceInCentimeters
    } else {
        distanceInCentimeters = lastDistanceInCentimeters
    }
    return distanceInCentimeters
}
let distanceSensorPulseLength = 0
let distanceInCentimeters = 0
let lastDistanceInCentimeters = 0
lastDistanceInCentimeters = 1000
distanceInCentimeters = 0
basic.forever(function () {
    basic.pause(2000)
    basic.showString(convertToText(Math.round(readDistanceInCentimeters())))
})
