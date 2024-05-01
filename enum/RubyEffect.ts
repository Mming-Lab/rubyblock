const enum RubyEffect {
    //% block="移動(いどう)速度(そくど)上昇(じょうしょう)" enumval=1 alias="SPEED"
    //% jres alias=SPEED
    //% blockIdentity="mobs.__effect" alias=SPEED
    Speed = 1,
    //% block="移動(いどう)速度(そくど)低下(ていか)" enumval=2
    //% jres alias=SLOWNESS
    //% blockIdentity="mobs.__effect" alias=SLOWNESS
    Slowness = 2,
    //% block="採掘(さいくつ)速度(そくど)上昇(じょうしょう)" enumval=3
    //% jres alias=HASTE
    //% blockIdentity="mobs.__effect" alias=HASTE
    Haste = 3,
    //% block="採掘(さいくつ)速度(そくど)低下(ていか)" enumval=4
    //% jres alias=MINING_FATIGUE
    //% blockIdentity="mobs.__effect" alias=MINING_FATIGUE
    MiningFatigue = 4,
    //% block="攻撃力(こうげきりょく)上昇(じょうしょう)" enumval=5
    //% jres alias=STRENGTH
    //% blockIdentity="mobs.__effect" alias=STRENGTH
    Strength = 5,
    //% block="跳躍力(ちょうやくりょく)上昇(じょうしょう)" enumval=8
    //% jres alias=JUMP_BOOST
    //% blockIdentity="mobs.__effect" alias=JUMP_BOOST
    JumpBoost = 8,
    //% block="吐(は)き気(け)" enumval=9
    //% jres alias=NAUSEA
    //% blockIdentity="mobs.__effect" alias=NAUSEA
    Nausea = 9,
    //% block="再生(さいせい)能力(のうりょく)" enumval=10
    //% jres alias=REGENERATION
    //% blockIdentity="mobs.__effect" alias=REGENERATION
    Regeneration = 10,
    //% block="耐性(たいせい)" enumval=11
    //% jres alias=RESISTANCE
    //% blockIdentity="mobs.__effect" alias=RESISTANCE
    Resistance = 11,
    //% block="火炎(かえん)耐性(たいせい)" enumval=12
    //% jres alias=FIRE_RESISTANCE
    //% blockIdentity="mobs.__effect" alias=FIRE_RESISTANCE
    FireResistance = 12,
    //% block="水中(すいちゅう)呼吸(こきゅう)" enumval=13
    //% jres alias=WATER_BREATHING
    //% blockIdentity="mobs.__effect" alias=WATER_BREATHING
    WaterBreathing = 13,
    //% block="透明(とうめい)化(か)" enumval=14
    //% jres alias=INVISIBILITY
    //% blockIdentity="mobs.__effect" alias=INVISIBILITY
    Invisibility = 14,
    //% block="盲目(もうもく)" enumval=15
    //% jres alias=BLINDNESS
    //% blockIdentity="mobs.__effect" alias=BLINDNESS
    Blindness = 15,
    //% block="暗視(あんし)" enumval=16
    //% jres alias=NIGHT_VISION
    //% blockIdentity="mobs.__effect" alias=NIGHT_VISION
    NightVision = 16,
    //% block="空腹(くうふく)" enumval=17
    //% jres alias=HUNGER
    //% blockIdentity="mobs.__effect" alias=HUNGER
    Hunger = 17,
    //% block="弱体化(じゃくたいか)" enumval=18
    //% jres alias=WEAKNESS
    //% blockIdentity="mobs.__effect" alias=WEAKNESS
    Weakness = 18,
    //% block="毒(どく)" enumval=19
    //% jres alias=POISON
    //% blockIdentity="mobs.__effect" alias=POISON
    Poison = 19,
    //% block="ウィザー" enumval=20
    //% jres alias=WITHER
    //% blockIdentity="mobs.__effect" alias=WITHER
    Wither = 20,
    //% block="体力(たいりょく)増強(ぞうきょう)" enumval=21
    //% jres alias=HEALTH_BOOST
    //% blockIdentity="mobs.__effect" alias=HEALTH_BOOST
    HealthBoost = 21,
    //% block="衝撃(しょうげき)吸収(きゅうしゅう)" enumval=22
    //% jres alias=ABSORPTION
    //% blockIdentity="mobs.__effect" alias=ABSORPTION
    Absorption = 22,
    //% block="浮遊(ふゆう)" enumval=24
    //% jres alias=LEVITATION
    //% blockIdentity="mobs.__effect" alias=LEVITATION
    Levitation = 24
}

function toEffect(effect: RubyEffect): Effect {
    switch (effect) {
        case RubyEffect.Absorption: return Effect.Absorption;
        case RubyEffect.Blindness: return Effect.Blindness;
        case RubyEffect.FireResistance: return Effect.FireResistance;
        case RubyEffect.Haste: return Effect.Haste;
        case RubyEffect.HealthBoost: return Effect.HealthBoost;
        case RubyEffect.Hunger: return Effect.Hunger;
        case RubyEffect.Invisibility: return Effect.Invisibility;
        case RubyEffect.JumpBoost: return Effect.JumpBoost;
        case RubyEffect.Levitation: return Effect.Levitation;
        case RubyEffect.MiningFatigue: return Effect.MiningFatigue;
        case RubyEffect.Nausea: return Effect.Nausea;
        case RubyEffect.NightVision: return Effect.NightVision;
        case RubyEffect.Poison: return Effect.Poison;
        case RubyEffect.Regeneration: return Effect.Regeneration;
        case RubyEffect.Resistance: return Effect.Resistance;
        case RubyEffect.Slowness: return Effect.Slowness;
        case RubyEffect.Speed: return Effect.Speed;
        case RubyEffect.Strength: return Effect.Strength;
        case RubyEffect.WaterBreathing: return Effect.WaterBreathing;
        case RubyEffect.Weakness: return Effect.Weakness;
        case RubyEffect.Wither: return Effect.Wither;
    }
}