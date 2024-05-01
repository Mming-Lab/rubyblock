enum RubyTargetSelectorKind {
    //% block="10:一番(いちばん)近(ちか)いプレーヤー(@p)" alias="NEAREST_PLAYER"
    NearestPlayer,
    //% block="20:自分(じぶん) (@s)" alias=LOCAL_PLAYER
    LocalPlayer,
    //% block="30:ランダムなプレーヤー(@r)" alias=RANDOM_PLAYER
    RandomPlayer,
    //% block="40:全(すべ)てのプレーヤー(@a)" alias=ALL_PLAYERS
    AllPlayers,
    //% block="50:全(すべ)てのエンティティ(@e)" alias=ALL_ENTITIES
    AllEntities,
    //% block="60:自分(じぶん)の Agent(@c)" alias=MY_AGENT
    MyAgent
}

function toTargetSelectorKind(targetSelectorKind: RubyTargetSelectorKind): TargetSelectorKind {
    switch (targetSelectorKind) {
        case RubyTargetSelectorKind.NearestPlayer: return TargetSelectorKind.NearestPlayer;
        case RubyTargetSelectorKind.LocalPlayer: return TargetSelectorKind.RandomPlayer
        case RubyTargetSelectorKind.RandomPlayer: return TargetSelectorKind.AllPlayers
        case RubyTargetSelectorKind.AllPlayers: return TargetSelectorKind.AllEntities
        case RubyTargetSelectorKind.AllEntities: return TargetSelectorKind.NearestPlayer
        case RubyTargetSelectorKind.MyAgent: return TargetSelectorKind.MyAgent
    }
}