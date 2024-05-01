const enum RubyMonsterMob {
    //% blockIdentity="mobs.monster" block="ゾンビ" enumval=32
    //% jres alias=ZOMBIE
    Zombie,
    //% blockIdentity="mobs.monster" block="クリーパー" enumval=33
    //% jres alias=CREEPER
    Creeper,
    //% blockIdentity="mobs.monster" block="スケルトン" enumval=34
    //% jres alias=SKELETON
    Skeleton,
    //% blockIdentity="mobs.monster" block="クモ" enumval=35
    //% jres alias=SPIDER
    Spider,
    //% blockIdentity="mobs.monster" block="ゾンビピッグマン" enumval=36
    //% jres alias=PIG_ZOMBIE
    PigZombie,
    //% blockIdentity="mobs.monster" block="スライム" enumval=37
    //% jres alias=SLIME
    Slime,
    //% blockIdentity="mobs.monster" block="エンダーマン" enumval=38
    //% jres alias=ENDERMAN
    Enderman,
    //% blockIdentity="mobs.monster" block="シルバーフィッシュ" enumval=39
    //% jres alias=SILVERFISH
    Silverfish,
    //% blockIdentity="mobs.monster" block="洞窟(どうくつ)グモ" enumval=40
    //% jres alias=CAVE_SPIDER
    CaveSpider,
    //% blockIdentity="mobs.monster" block="ガスト" enumval=41
    //% jres alias=GHAST
    Ghast,
    //% blockIdentity="mobs.monster" block="マグマキューブ" enumval=42
    //% jres alias=LAVA_SLIME
    LavaSlime,
    //% blockIdentity="mobs.monster" block="ブレイズ" enumval=43
    //% jres alias=BLAZE
    Blaze,
    //% blockIdentity="mobs.monster" block="ゾンビ 村人(むらびと)" enumval=44
    //% jres alias=ZOMBIE_VILLAGER
    ZombieVillager,
    //% blockIdentity="mobs.monster" block="ウィッチ" enumval=45
    //% jres alias=WITCH
    Witch,
    //% blockIdentity="mobs.monster" block="ストレイ" enumval=46
    //% jres alias=STRAY
    Stray,
    //% blockIdentity="mobs.monster" block="ハスク" enumval=47
    //% jres alias=HUSK
    Husk,
    //% blockIdentity="mobs.monster" block="ウィザースケルトン" enumval=48
    //% jres alias=WITHER_SKELETON
    WitherSkeleton,
    //% blockIdentity="mobs.monster" block="ガーディアン" enumval=49
    //% jres alias=GUARDIAN
    Guardian,
    //% blockIdentity="mobs.monster" block="エルダーガーディアン" enumval=50
    //% jres alias=ELDER_GUARDIAN
    ElderGuardian,
    //% blockIdentity="mobs.monster" block="シュルカー" enumval=54
    //% jres alias=SHULKER
    Shulker,
    //% blockIdentity="mobs.monster" block="エンダーマイト" enumval=55
    //% jres alias=ENDERMITE
    Endermite,
    //% blockIdentity="mobs.monster" block="ヴィンディケーター" enumval=57
    //% jres alias=VINDICATOR
    Vindicator,
    //% blockIdentity="mobs.monster" block="ファントム" enumval=58
    //% jres alias=PHANTOM
    Phantom,
    //% blockIdentity="mobs.monster" block="ラヴェジャー" enumval=59
    //% jres alias=RAVAGER
    Ravager = 59,
    //% blockIdentity="mobs.monster" block="エヴォーカー" enumval=104
    //% jres alias=EVOKER
    Evoker,
    //% blockIdentity="mobs.monster" block="ヴェックス" enumval=105
    //% jres alias=VEX
    Vex,
    //% blockIdentity="mobs.monster" block="溺死(できし)ゾンビ" enumval=110
    //% jres alias=DROWNED
    Drowned,
    //% blockIdentity="mobs.monster" block="ピリジャー" enumval=114
    //% jres alias=PILLAGER
    Pillager = 114,
    //% blockIdentity="mobs.monster" enumval=126 block="ホグリン"
    //% jres alias=HOGLIN
    Hoglin = 126,
    //% blockIdentity="mobs.monster" enumval=127 block="ピグリン"
    //% jres alias=PIGLIN
    Piglin = 127,
    //% blockIdentity="mobs.monster" enumval=129 block="ゾグリン"
    //% jres alias=ZOGLIN
    Zoglin = 129,
}

function toMonsterMob(monsterMob: RubyMonsterMob): MonsterMob {
    switch (monsterMob) {
        case RubyMonsterMob.Blaze: return MonsterMob.Blaze;
        case RubyMonsterMob.CaveSpider: return MonsterMob.CaveSpider;
        case RubyMonsterMob.Creeper: return MonsterMob.Creeper;
        case RubyMonsterMob.Drowned: return MonsterMob.Drowned;
        case RubyMonsterMob.ElderGuardian: return MonsterMob.ElderGuardian;
        case RubyMonsterMob.Enderman: return MonsterMob.Enderman;
        case RubyMonsterMob.Endermite: return MonsterMob.Endermite;
        case RubyMonsterMob.Evoker: return MonsterMob.Evoker;
        case RubyMonsterMob.Ghast: return MonsterMob.Ghast;
        case RubyMonsterMob.Guardian: return MonsterMob.Guardian;
        case RubyMonsterMob.Hoglin: return MonsterMob.Hoglin;
        case RubyMonsterMob.Husk: return MonsterMob.Husk;
        case RubyMonsterMob.LavaSlime: return MonsterMob.LavaSlime;
        case RubyMonsterMob.Phantom: return MonsterMob.Phantom;
        case RubyMonsterMob.Piglin: return MonsterMob.Piglin;
        case RubyMonsterMob.PigZombie: return MonsterMob.PigZombie;
        case RubyMonsterMob.Pillager: return MonsterMob.Pillager;
        case RubyMonsterMob.Ravager: return MonsterMob.Ravager;
        case RubyMonsterMob.Shulker: return MonsterMob.Shulker;
        case RubyMonsterMob.Silverfish: return MonsterMob.Silverfish;
        case RubyMonsterMob.Skeleton: return MonsterMob.Skeleton;
        case RubyMonsterMob.Slime: return MonsterMob.Slime;
        case RubyMonsterMob.Spider: return MonsterMob.Spider;
        case RubyMonsterMob.Stray: return MonsterMob.Stray;
        case RubyMonsterMob.Vex: return MonsterMob.Vex;
        case RubyMonsterMob.Vindicator: return MonsterMob.Vindicator;
        case RubyMonsterMob.Witch: return MonsterMob.Witch;
        case RubyMonsterMob.WitherSkeleton: return MonsterMob.WitherSkeleton;
        case RubyMonsterMob.Zoglin: return MonsterMob.Zoglin;
        case RubyMonsterMob.Zombie: return MonsterMob.Zombie;
        case RubyMonsterMob.ZombieVillager: return MonsterMob.ZombieVillager;
    }
}
