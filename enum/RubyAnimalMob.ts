const enum RubyAnimalMob {
    //% blockIdentity="mobs.animal" block="ニワトリ" enumval=10
    //% jres alias=CHICKEN
    Chicken = 10,
    //% blockIdentity="mobs.animal" block="牛(うし)" enumval=11
    //% jres alias=COW
    Cow = 11,
    //% blockIdentity="mobs.animal" block="ブタ" enumval=12
    //% jres alias=PIG
    Pig = 12,
    //% blockIdentity="mobs.animal" block="ヒツジ" enumval=13
    //% jres alias=SHEEP
    Sheep = 13,
    //% blockIdentity="mobs.animal" block="オオカミ" enumval=14
    //% jres alias=WOLF
    Wolf = 14,
    //% blockIdentity="mobs.animal" block="村人(むらびと)" enumval=15
    //% jres alias=VILLAGER
    Villager = 15,
    //% blockIdentity="mobs.animal" block="ムーッシュルーム" enumval=16
    //% jres alias=MUSHROOM_COW
    MushroomCow = 16,
    //% blockIdentity="mobs.animal" block="イカ" enumval=17
    //% jres alias=SQUID
    Squid = 17,
    //% blockIdentity="mobs.animal" block="ウサギ" enumval=18
    //% jres alias=RABBIT
    Rabbit = 18,
    //% blockIdentity="mobs.animal" block="コウモリ" enumval=19
    //% jres alias=BAT
    Bat = 19,
    //% blockIdentity="mobs.animal" block="ヤマネコ" enumval=22
    //% jres alias=OCELOT
    Ocelot = 22,
    //% blockIdentity="mobs.animal" block="ウマ" enumval=23
    //% jres alias=HORSE
    Horse = 23,
    //% blockIdentity="mobs.animal" block="ロバ" enumval=24
    //% jres alias=DONKEY
    Donkey = 24,
    //% blockIdentity="mobs.animal" block="ラバ" enumval=25
    //% jres alias=MULE
    Mule = 25,
    //% blockIdentity="mobs.animal" block="スケルトンホース" enumval=26
    //% jres alias=SKELETON_HORSE
    SkeletonHorse = 26,
    //% blockIdentity="mobs.animal" block="ゾンビホース" enumval=27
    //% jres alias=ZOMBIE_HORSE
    ZombieHorse = 27,
    //% blockIdentity="mobs.animal" block="シロクマ" enumval=28
    //% jres alias=POLAR_BEAR
    PolarBear = 28,
    //% blockIdentity="mobs.animal" block="ラマ" enumval=29
    //% jres alias=LLAMA
    Llama = 29,
    //% blockIdentity="mobs.animal" block="オウム" enumval=30
    //% jres alias=PARROT
    Parrot = 30,
    //% blockIdentity="mobs.animal" block="イルカ" enumval=31
    //% jres alias=DOLPHIN
    Dolphin = 31,
    //% blockIdentity="mobs.animal" block="ウミガメ" enumval=74
    //% jres alias=SEA_TURTLE
    SeaTurtle = 74,
    //% blockIdentity="mobs.animal" block="ネコ" enumval=75
    //% jres alias=CAT
    Cat = 75,
    //% blockIdentity="mobs.animal" block="フグ" enumval=108
    //% jres alias=PUFFERFISH
    Pufferfish = 108,
    //% blockIdentity="mobs.animal" block="鮭(さけ)" enumval=109
    //% jres alias=SALMON
    Salmon = 109,
    //% blockIdentity="mobs.animal" block="熱帯魚(ねったいぎょ)" enumval=111
    //% jres alias=TROPICAL_FISH
    TropicalFish = 111,
    //% blockIdentity="mobs.animal" block="タラ" enumval=112
    //% jres alias=COD
    Cod = 112,
    //% blockIdentity="mobs.animal" block="パンダ" enumval=113
    //% jres alias=PANDA
    Panda = 113,
    //% blockIdentity="mobs.animal" block="行商人(ぎょうしょうにん)" enumval=118
    //% jres alias=WANDERING_TRADER
    WanderingTrader = 118,
    //% blockIdentity="mobs.animal" block="キツネ" enumval=121
    //% jres alias=FOX
    Fox = 121,
    //% blockIdentity="mobs.animal" block="ハチ" enumval=122
    //% jres alias=BEE
    Bee = 122,
    //% blockIdentity="mobs.animal" enumval=123 block="ウーパールーパー"
    //% jres alias=AXOLOTL
    Axolotl = 123,
    //% blockIdentity="mobs.animal" enumval=124 block="発光(はっこう)するイカ"
    //% jres alias=GLOW_SQUID
    GlowSquid = 124,
    //% blockIdentity="mobs.animal" enumval=125 block="ヤギ"
    //% jres alias=GOAT
    Goat = 125,
    //% blockIdentity="mobs.animal" enumval=128 block="ストライダー"
    //% jres alias=STRIDER
    Strider = 128,
}

function toAnimalMob(animalMob: RubyAnimalMob): AnimalMob {
    switch (animalMob) {
        case RubyAnimalMob.Axolotl: return AnimalMob.Axolotl;
        case RubyAnimalMob.Bat: return AnimalMob.Bat;
        case RubyAnimalMob.Bee: return AnimalMob.Bee;
        case RubyAnimalMob.Cat: return AnimalMob.Cat;
        case RubyAnimalMob.Chicken: return AnimalMob.Chicken;
        case RubyAnimalMob.Cod: return AnimalMob.Cod;
        case RubyAnimalMob.Cow: return AnimalMob.Cow;
        case RubyAnimalMob.Dolphin: return AnimalMob.Dolphin;
        case RubyAnimalMob.Donkey: return AnimalMob.Donkey;
        case RubyAnimalMob.Fox: return AnimalMob.Fox;
        case RubyAnimalMob.GlowSquid: return AnimalMob.GlowSquid;
        case RubyAnimalMob.Goat: return AnimalMob.Goat;
        case RubyAnimalMob.Horse: return AnimalMob.Horse;
        case RubyAnimalMob.Llama: return AnimalMob.Llama;
        case RubyAnimalMob.Mule: return AnimalMob.Mule;
        case RubyAnimalMob.MushroomCow: return AnimalMob.MushroomCow;
        case RubyAnimalMob.Ocelot: return AnimalMob.Ocelot;
        case RubyAnimalMob.Panda: return AnimalMob.Panda;
        case RubyAnimalMob.Parrot: return AnimalMob.Parrot;
        case RubyAnimalMob.Pig: return AnimalMob.Pig;
        case RubyAnimalMob.PolarBear: return AnimalMob.PolarBear;
        case RubyAnimalMob.Pufferfish: return AnimalMob.Pufferfish;
        case RubyAnimalMob.Rabbit: return AnimalMob.Rabbit;
        case RubyAnimalMob.Salmon: return AnimalMob.Salmon;
        case RubyAnimalMob.SeaTurtle: return AnimalMob.SeaTurtle;
        case RubyAnimalMob.Sheep: return AnimalMob.Sheep;
        case RubyAnimalMob.SkeletonHorse: return AnimalMob.SkeletonHorse;
        case RubyAnimalMob.Squid: return AnimalMob.Squid;
        case RubyAnimalMob.Strider: return AnimalMob.Strider;
        case RubyAnimalMob.TropicalFish: return AnimalMob.TropicalFish;
        case RubyAnimalMob.Villager: return AnimalMob.Villager;
        case RubyAnimalMob.WanderingTrader: return AnimalMob.WanderingTrader;
        case RubyAnimalMob.Wolf: return AnimalMob.Wolf;
        case RubyAnimalMob.ZombieHorse: return AnimalMob.ZombieHorse;
    }
}
