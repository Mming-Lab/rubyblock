const enum RubyTravelMethod {
    /**
     * Walking normally (default if on ground)
     */
    //% block="10:歩(ある)いた" enumval=1 alias=WALK
    Walk = 1,
    /**
     * Swimming in water
     */
    //% block="20:水(みず)の中(なか)を泳(およ)いだ時(とき)" enumval=2 alias=SWIM_WATER
    SwimWater = 2,
    /**
     * In the air when not flying (Falling up or down)
     */
    //% block="30:落下(らっか)した" enumval=3 alias=FALL
    Fall = 3,
    /**
     * Climbing a ladder
     */
    //% block="40:登(のぼ)っている" enumval=4 alias=CLIMB
    Climb = 4,
    /**
     * Swimming in lava
     */
    //% block="50:溶岩(ようがん)の中(なか)を歩(ある)いた時(とき)" enumval=5 alias=SWIM_LAVA
    SwimLava = 5,
    /**
     * Flying
     */
    //% block="60:飛(と)んだ" enumval=6 alias=FLY
    Fly = 6,
    /**
     * Riding anything
     */
    //% block="70:乗(の)っている" enumval=7 alias=RIDING
    Riding = 7,
    /**
     * Sneaking
     */
    //% block="80:スニークした" enumval=8 alias=SNEAK
    Sneak = 8,
    /**
     * Sprinting
     */
    //% block="90:走(はし)った" enumval=9 alias=SPRINT
    Sprint = 9,
    /**
     * Bounce
     */
    //% block="100:バウンドした" enumval=10 alias=BOUNCE
    Bounce = 10
}

function toTravelMethod(travelMethod: RubyTravelMethod): TravelMethod {
    switch (travelMethod) {
        case RubyTravelMethod.Bounce: return TravelMethod.Bounce;
        case RubyTravelMethod.Climb: return TravelMethod.Climb;
        case RubyTravelMethod.Fall: return TravelMethod.Fall;
        case RubyTravelMethod.Fly: return TravelMethod.Fly;
        case RubyTravelMethod.Riding: return TravelMethod.Riding;
        case RubyTravelMethod.Sneak: return TravelMethod.Sneak;
        case RubyTravelMethod.Sprint: return TravelMethod.Sprint;
        case RubyTravelMethod.SwimLava: return TravelMethod.SwimLava;
        case RubyTravelMethod.SwimWater: return TravelMethod.SwimWater;
        case RubyTravelMethod.Walk: return TravelMethod.Walk;
    }
}
