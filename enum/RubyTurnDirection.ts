const enum RubyTurnDirection {
    //% block="10:左(ひだり)" blockIdentity="agent._turnDirection"
    Left = 2,
    //% block="20:右(みぎ)" blockIdentity="agent._turnDirection"
    Right = 3
}

function toTurnDirection(turnDirection: RubyTurnDirection): TurnDirection {
    switch (turnDirection) {
        case RubyTurnDirection.Left: return TurnDirection.Left;
        case RubyTurnDirection.Right: return TurnDirection.Right;
    }
}
