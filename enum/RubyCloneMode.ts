const enum RubyCloneMode {
    //% block="10:ノーマル"
    Normal,
    //% block="20:移動(いどう)"
    Move,
    //% block="30:強制(きょうせい)"
    Force
}
function toCloneMode(cloneMode: RubyCloneMode): CloneMode {
    switch (cloneMode) {
        case RubyCloneMode.Normal: return CloneMode.Normal;
        case RubyCloneMode.Move: return CloneMode.Move;
        case RubyCloneMode.Force: return CloneMode.Force;
    }
}