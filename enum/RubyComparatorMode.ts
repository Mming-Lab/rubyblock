const enum RubyComparatorMode {
    //% block="10:比較(ひかく)"
    Compare,
    //% block="20:減算(げんざん)"
    Substract
}

function toComparatorMode(comparatorMode: RubyComparatorMode): ComparatorMode {
    switch (comparatorMode) {
        case RubyComparatorMode.Compare: return ComparatorMode.Compare;
        case RubyComparatorMode.Substract: return ComparatorMode.Substract;
    }
}