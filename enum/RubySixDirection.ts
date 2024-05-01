const enum RubySixDirection {
    //% block="10:前(まえ)" alias="FORWARD" blockIdentity="agent._sixDirection"
    Forward,
    //% block="20:後(うし)ろ" alias=BACK blockIdentity="agent._sixDirection"
    Back,
    //% block="30:左(ひだり)" alias=LEFT blockIdentity="agent._sixDirection"
    Left,
    //% block="40:右(みぎ)" alias=RIGHT blockIdentity="agent._sixDirection"
    Right,
    //% block="50:上(うえ)" alias=UP blockIdentity="agent._sixDirection"
    Up,
    //% block="60:下(した)" alias=DOWN blockIdentity="agent._sixDirection"
    Down
}
function toSixDirection(sixDirection: RubySixDirection): SixDirection {
    switch (sixDirection) {
        case RubySixDirection.Forward: return SixDirection.Forward;
        case RubySixDirection.Back: return SixDirection.Back;
        case RubySixDirection.Left: return SixDirection.Left;
        case RubySixDirection.Right: return SixDirection.Right;
        case RubySixDirection.Up: return SixDirection.Up;
        case RubySixDirection.Down: return SixDirection.Down;
    }
}