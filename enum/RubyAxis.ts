const enum RubyAxis {
    //% block="10:x[東西(とうざい)]"
    X,
    //% block="20:y[高低(こうてい)]"
    Y,
    //% block="30:z[南北(なんぼく)]"
    Z
}
function toAxis(axis: RubyAxis): Axis {
    switch (axis) {
        case RubyAxis.X: return Axis.X;
        case RubyAxis.Y: return Axis.Y;
        case RubyAxis.Z: return Axis.Z;
    }
}
