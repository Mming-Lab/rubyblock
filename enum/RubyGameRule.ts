const enum RubyGameRule {
    //% block="10:他(た)プレイヤーへの攻撃(こうげき)" alias=PV_P
    PvP,
    //% block="20:溺水(できすい)ダメージ" alias=DROWNING_DAMAGE
    DrowningDamage,
    //% block="30:落下(らっか)ダメージ" alias=FALL_DAMAGE
    FallDamage,
    //% block="40:炎(ほのお)ダメージ" alias=FIRE_DAMAGE
    FireDamage,
    //% block="50:昼夜(ちゅうや)のサイクル" alias=DAYLIGHT_CYCLE
    DaylightCycle,
    //% block="60:生(い)き物(もの)のアイテムドロップ" alias=MOB_LOOT
    MobLoot,
    //% block="70:生(い)き物(もの)の出現(しゅつげん)" alias=MOB_SPAWNING
    MobSpawning,
    //% block="80:天気(てんき)のサイクル" alias=WEATHER_CYCLE
    WeatherCycle,
    //% block="90:生(い)き物(もの)による妨害(ぼうがい)" alias=MOB_GRIEFING
    MobGriefing,
    //% block="100:ブロックのドロップ" alias=TILE_DROPS
    TileDrops,
    //% block="110:持(も)ち物(もの)を保持(ほじ)" alias=KEEP_INVENTORY
    KeepInventory,
    //% block="120:TNTの爆発(ばくはつ)" alias=TNT_EXPLODES
    TntExplodes,
    //% block="130:自然(しぜん)再生(さいせい)" alias=NATURAL_REGENERATION
    NaturalRegeneration,
    //% block="140:コマンドブロックの出力(しゅつりょく)" alias=COMMAND_BLOCK_OUTPUT
    CommandBlockOutput,
    //% block="150:エンティティのドロップ" alias=ENTITY_DROPS
    EntityDrops,
    //% block="160:延焼(えんしょう)" alias=DO_FIRE_TICK
    DoFireTick,
    //% block="170:プレイヤーの座標(ざひょう)を表示(ひょうじ)" alias=SHOW_COORDINATES
    ShowCoordinates
}

function toGameRule(gameRule: RubyGameRule): GameRule {
    switch (gameRule) {
        case RubyGameRule.CommandBlockOutput: return GameRule.CommandBlockOutput;
        case RubyGameRule.DaylightCycle: return GameRule.DaylightCycle;
        case RubyGameRule.DoFireTick: return GameRule.DoFireTick;
        case RubyGameRule.DrowningDamage: return GameRule.DrowningDamage;
        case RubyGameRule.EntityDrops: return GameRule.EntityDrops;
        case RubyGameRule.FallDamage: return GameRule.FallDamage;
        case RubyGameRule.FireDamage: return GameRule.FireDamage;
        case RubyGameRule.KeepInventory: return GameRule.KeepInventory;
        case RubyGameRule.MobGriefing: return GameRule.MobGriefing;
        case RubyGameRule.MobLoot: return GameRule.MobLoot;
        case RubyGameRule.MobSpawning: return GameRule.MobSpawning;
        case RubyGameRule.NaturalRegeneration: return GameRule.NaturalRegeneration;
        case RubyGameRule.PvP: return GameRule.PvP;
        case RubyGameRule.ShowCoordinates: return GameRule.ShowCoordinates;
        case RubyGameRule.TileDrops: return GameRule.TileDrops;
        case RubyGameRule.TntExplodes: return GameRule.TntExplodes;
        case RubyGameRule.WeatherCycle: return GameRule.WeatherCycle;
    }
}
