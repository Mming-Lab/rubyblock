const enum RubyProjectileMob {
    //% block="10:着火(ちゃっか)したTNT" enumval=65 alias="PRIMED_TNT"
    //% blockIdentity="mobs.projectile" alias=PRIMED_TNT
    PrimedTnt,
    //% block="20:エンチャントの瓶(びん)" enumval=68 alias=XP_BOTTLE
    //% blockIdentity="mobs.projectile" alias=XP_BOTTLE
    XpBottle,
    //% block="30:経験(けいけん)値(ち)オーブ" enumval=69 alias=XP_ORB
    //% blockIdentity="mobs.projectile" alias=XP_ORB
    XpOrb,
    //% block="40:ロケット花火(はなび)" enumval=72 alias=FIREWORKS_ROCKET
    //% blockIdentity="mobs.projectile" alias=FIREWORKS_ROCKET
    FireworksRocket,
    //% block="50:矢(や)" enumval=80 alias=ARROW_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=ARROW_PROJECTILE_MOB
    Arrow,
    //% block="60:雪玉(ゆきだま)" enumval=81 alias=SNOWBALL_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=SNOWBALL_PROJECTILE_MOB
    Snowball,
    //% block="70:卵(たまご)" enumval=82 alias=EGG_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=EGG_PROJECTILE_MOB
    Egg,
    //% block="80:スプラッシュポーション" enumval=86 alias=SPLASH_POTION
    //% blockIdentity="mobs.projectile" alias=SPLASH_POTION
    SplashPotion,
    //% block="90:ライトニング ボルト" enumval=93 alias=LIGHTNING_BOLT
    //% blockIdentity="mobs.projectile" alias=LIGHTNING_BOLT
    LightningBolt,
    //% block="100:エヴォーカーの牙(きば)" enumval=103 alias=EVOCATION_FANG
    //% blockIdentity="mobs.projectile" alias=EVOCATION_FANG
    EvocationFang
}

function toProjectileMob(projectileMob: RubyProjectileMob): ProjectileMob {
    switch (projectileMob) {
        case RubyProjectileMob.Arrow: return ProjectileMob.Arrow;
        case RubyProjectileMob.Egg: return ProjectileMob.Egg;
        case RubyProjectileMob.EvocationFang: return ProjectileMob.EvocationFang;
        case RubyProjectileMob.FireworksRocket: return ProjectileMob.FireworksRocket;
        case RubyProjectileMob.LightningBolt: return ProjectileMob.LightningBolt;
        case RubyProjectileMob.PrimedTnt: return ProjectileMob.PrimedTnt;
        case RubyProjectileMob.Snowball: return ProjectileMob.Snowball;
        case RubyProjectileMob.SplashPotion: return ProjectileMob.SplashPotion;
        case RubyProjectileMob.XpBottle: return ProjectileMob.XpBottle;
        case RubyProjectileMob.XpOrb: return ProjectileMob.XpOrb;
    }
}
