const enum RubyTimeQuery {
    //% block="10:ゲーム時間(じかん)" alias=GAME_TIME
    GameTime,
    //% block="20:日中(にっちゅう)" alias=DAY_TIME
    DayTime,
    //% block="30:日中(にっちゅう)" alias=DAY_TIME_QUERY
    Day,
    /**
     * The real-life time of day, expressed in Minecraft game ticks
     */
    //% block="40:実際(じっさい)の時刻(じこく)" alias=REAL_LIFE
    RealLife
}

function toTimeQuery(timeQuery: RubyTimeQuery): TimeQuery {
    switch (timeQuery) {
        case RubyTimeQuery.GameTime: return TimeQuery.GameTime;
        case RubyTimeQuery.DayTime: return TimeQuery.DayTime;
        case RubyTimeQuery.Day: return TimeQuery.Day;
        case RubyTimeQuery.RealLife: return TimeQuery.RealLife;
    }
}