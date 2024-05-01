const enum RubyDayTime {
    //% block="10:日中(にっちゅう)" enumval=0 blockIdentity="gameplay.time" alias=DAY
    Day = 0,
    //% block="20:夜明(よあ)け" enumval=23000 blockIdentity="gameplay.time" alias=DAWN
    Dawn = 23000,
    //% block="30:真昼(まひる)" enumval=6000 blockIdentity="gameplay.time" alias=MIDDAY
    Midday = 6000,
    //% block="40:夕暮(ゆうぐ)れ" enumval=12000 blockIdentity="gameplay.time" alias=DUSK
    Dusk = 12000,
    //% block="50:夜(よる)" enumval=14000 blockIdentity="gameplay.time" alias=NIGHT
    Night = 14000,
    //% block="60:真夜中(まよなか)" enumval=18000 blockIdentity="gameplay.time" alias=MIDNIGHT
    Midnight = 18000
}

function toDayTime(dayTime: RubyDayTime): DayTime {
    switch (dayTime) {
        case RubyDayTime.Day: return DayTime.Day;
        case RubyDayTime.Dawn: return DayTime.Dawn;
        case RubyDayTime.Midday: return DayTime.Midday;
        case RubyDayTime.Dusk: return DayTime.Dusk;
        case RubyDayTime.Night: return DayTime.Night;
        case RubyDayTime.Midnight: return DayTime.Midnight;
    }
}