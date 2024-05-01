const enum RubyCompassDirection {
    //% block="10:西(にし) [Xのマイナス方向(ほうこう)]" alias=WEST blockIdentity="agent._compassDirection"
    West = CardinalDirection.West,
    //% block="20:東(ひがし)[Xのプラス方向(ほうこう)]" alias=EAST blockIdentity="agent._compassDirection"
    East = CardinalDirection.East,
    //% block="30:北(きた) [Zのマイナス方向(ほうこう)]" alias=NORTH blockIdentity="agent._compassDirection"
    North = CardinalDirection.North,
    //% block="40:南(みなみ)[Zのプラス方向(ほうこう)]" alias=SOUTH blockIdentity="agent._compassDirection"
    South = CardinalDirection.South
}
function toCompassDirection(compassDirection: RubyCompassDirection): CompassDirection {
    switch (compassDirection) {
        case RubyCompassDirection.West: return CompassDirection.West;
        case RubyCompassDirection.East: return CompassDirection.East;
        case RubyCompassDirection.North: return CompassDirection.North;
        case RubyCompassDirection.South: return CompassDirection.South;
        default: return CompassDirection.West;
    }
}