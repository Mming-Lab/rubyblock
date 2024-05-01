/**
 * blockHidden="OFF"
 */
//% emitAsConstant
enum RubyTargetSelectorKind {
    //% block="一番(いちばん)近(ちか)いプレーヤー(@p)" alias="NEAREST_PLAYER"
    NearestPlayer,
    //% block="自分(じぶん) (@s)" alias=LOCAL_PLAYER
    LocalPlayer,
    //% block="ランダムなプレーヤー(@r)" alias=RANDOM_PLAYER
    RandomPlayer,
    //% block="全(すべ)てのプレーヤー(@a)" alias=ALL_PLAYERS
    AllPlayers,
    //% block="全(すべ)てのエンティティ(@e)" alias=ALL_ENTITIES
    AllEntities,
    //% block="自分(じぶん)の Agent(@c)" alias=MY_AGENT
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


declare const enum RubyBlock {
    //% blockIdentity="blocks.block" enumval=2 block="草(くさ)ブロック"
    //% jres alias=GRASS
    Grass = 2,
    //% blockIdentity="blocks.block" enumval=0 block="空気(くうき)"
    //% jres alias=AIR
    Air = 0,
    //% blockIdentity="blocks.block" enumval=1 block="石(いし)"
    //% jres alias=STONE
    Stone = 1,
    //% blockIdentity="blocks.block" enumval=65537 block="花崗岩(かこうがん)"
    //% jres alias=GRANITE
    Granite = 65537,
    //% blockIdentity="blocks.block" enumval=131073 block="磨(みが)かれた花崗岩(かこうがん)"
    //% jres alias=POLISHED_GRANITE
    PolishedGranite = 131073,
    //% blockIdentity="blocks.block" enumval=196609 block="閃緑岩(せんりょくがん)"
    //% jres alias=DIORITE
    Diorite = 196609,
    //% blockIdentity="blocks.block" enumval=262145 block="磨(みが)かれた閃緑岩(せんりょくがん)"
    //% jres alias=POLISHED_DIORITE
    PolishedDiorite = 262145,
    //% blockIdentity="blocks.block" enumval=327681 block="安山岩(あんざんがん)"
    //% jres alias=ANDESITE
    Andesite = 327681,
    //% blockIdentity="blocks.block" enumval=393217 block="磨(みが)かれた安山岩(あんざんがん)"
    //% jres alias=POLISHED_ANDESITE
    PolishedAndesite = 393217,
    //% blockIdentity="blocks.block" enumval=3 block="土(つち)"
    //% jres alias=DIRT
    Dirt = 3,
    //% blockIdentity="blocks.block" enumval=65539 block="粗(あら)い土(つち)"
    //% jres alias=COARSE_DIRT
    CoarseDirt = 65539,
    //% blockIdentity="blocks.block" enumval=4 block="丸石(まるいし)"
    //% jres alias=COBBLESTONE
    Cobblestone = 4,
    //% blockIdentity="blocks.block" enumval=5 block="樫(かし)の木材(もくざい)"
    //% jres alias=PLANKS_OAK
    PlanksOak = 5,
    //% blockIdentity="blocks.block" enumval=65541 block="トウヒの木材(もくざい)"
    //% jres alias=PLANKS_SPRUCE
    PlanksSpruce = 65541,
    //% blockIdentity="blocks.block" enumval=131077 block="樺(かば)の木材(もくざい)"
    //% jres alias=PLANKS_BIRCH
    PlanksBirch = 131077,
    //% blockIdentity="blocks.block" enumval=196613 block="ジャングルの木(き)の木材(もくざい)"
    //% jres alias=PLANKS_JUNGLE
    PlanksJungle = 196613,
    //% blockIdentity="blocks.block" enumval=262149 block="アカシアの木材(もくざい)"
    //% jres alias=PLANKS_ACACIA
    PlanksAcacia = 262149,
    //% blockIdentity="blocks.block" enumval=327685 block="黒樫(くろがし)の木材(もくざい)"
    //% jres alias=PLANKS_DARK_OAK
    PlanksDarkOak = 327685,
    //% blockIdentity="blocks.block" enumval=6 block="オークの苗木(なえぎ)"
    //% jres alias=OAK_SAPLING
    OakSapling = 6,
    //% blockIdentity="blocks.block" enumval=65542 block="トウヒの苗木(なえぎ)"
    //% jres alias=SPRUCE_SAPLING
    SpruceSapling = 65542,
    //% blockIdentity="blocks.block" enumval=131078 block="シラカバの苗木(なえぎ)"
    //% jres alias=BIRCH_SAPLING
    BirchSapling = 131078,
    //% blockIdentity="blocks.block" enumval=196614 block="ジャングルの苗木(なえぎ)"
    //% jres alias=JUNGLE_SAPLING
    JungleSapling = 196614,
    //% blockIdentity="blocks.block" enumval=262150 block="アカシアの苗木(なえぎ)"
    //% jres alias=ACACIA_SAPLING
    AcaciaSapling = 262150,
    //% blockIdentity="blocks.block" enumval=327686 block="ダークオークの苗木(なえぎ)"
    //% jres alias=DARK_OAK_SAPLING
    DarkOakSapling = 327686,
    //% blockIdentity="blocks.block" enumval=7 block="岩盤(がんばん)"
    //% jres alias=BEDROCK
    Bedrock = 7,
    //% blockIdentity="blocks.block" enumval=8 block="水(みず)"
    //% jres alias=WATER
    Water = 8,
    //% blockIdentity="blocks.block" enumval=10 block="溶岩(ようがん)"
    //% jres alias=LAVA
    Lava = 10,
    //% blockIdentity="blocks.block" enumval=12 block="砂(すな)"
    //% jres alias=SAND
    Sand = 12,
    //% blockIdentity="blocks.block" enumval=65548 block="赤(あか)い砂(すな)"
    //% jres alias=RED_SAND
    RedSand = 65548,
    //% blockIdentity="blocks.block" enumval=13 block="砂利(じゃり)"
    //% jres alias=GRAVEL
    Gravel = 13,
    //% blockIdentity="blocks.block" enumval=14 block="金鉱石(きんこうせき)"
    //% jres alias=GOLD_ORE
    GoldOre = 14,
    //% blockIdentity="blocks.block" enumval=15 block="鉄鉱石(てっこうせき)"
    //% jres alias=IRON_ORE
    IronOre = 15,
    //% blockIdentity="blocks.block" enumval=16 block="石炭(せきたん)鉱石(こうせき)"
    //% jres alias=COAL_ORE
    CoalOre = 16,
    //% blockIdentity="blocks.block" enumval=17 block="オークの木(き)"
    //% jres alias=LOG_OAK
    LogOak = 17,
    //% blockIdentity="blocks.block" enumval=65553 block="トウヒの木(き)"
    //% jres alias=LOG_SPRUCE
    LogSpruce = 65553,
    //% blockIdentity="blocks.block" enumval=131089 block="シラカバの木(き)"
    //% jres alias=LOG_BIRCH
    LogBirch = 131089,
    //% blockIdentity="blocks.block" enumval=196625 block="ジャングルの木(き)"
    //% jres alias=LOG_JUNGLE
    LogJungle = 196625,
    //% blockIdentity="blocks.block" enumval=18 block="オークの葉(は)"
    //% jres alias=LEAVES_OAK
    LeavesOak = 18,
    //% blockIdentity="blocks.block" enumval=65554 block="トウヒの葉(は)"
    //% jres alias=LEAVES_SPRUCE
    LeavesSpruce = 65554,
    //% blockIdentity="blocks.block" enumval=131090 block="シラカバの葉(は)"
    //% jres alias=LEAVES_BIRCH
    LeavesBirch = 131090,
    //% blockIdentity="blocks.block" enumval=196626 block="ジャングルの葉(は)"
    //% jres alias=LEAVES_JUNGLE
    LeavesJungle = 196626,
    //% blockIdentity="blocks.block" enumval=19 block="スポンジ"
    //% jres alias=SPONGE
    Sponge = 19,
    //% blockIdentity="blocks.block" enumval=65555 block="濡(ぬ)れたスポンジ"
    //% jres alias=WET_SPONGE
    WetSponge = 65555,
    //% blockIdentity="blocks.block" enumval=20 block="ガラス"
    //% jres alias=GLASS
    Glass = 20,
    //% blockIdentity="blocks.block" enumval=21 block="ラピスラズリ鉱石(こうせき)"
    //% jres alias=LAPIS_ORE
    LapisOre = 21,
    //% blockIdentity="blocks.block" enumval=22 block="ラピスラズリのブロック"
    //% jres alias=LAPIS_LAZULI_BLOCK
    LapisLazuliBlock = 22,
    //% blockIdentity="blocks.block" enumval=196631 block="ディスペンサー"
    //% jres alias=DISPENSER
    Dispenser = 196631,
    //% blockIdentity="blocks.block" enumval=24 block="砂岩(さがん)"
    //% jres alias=SANDSTONE
    Sandstone = 24,
    //% blockIdentity="blocks.block" enumval=65560 block="模様(もよう)入(い)りの砂岩(さがん)"
    //% jres alias=CHISELED_SANDSTONE
    ChiseledSandstone = 65560,
    //% blockIdentity="blocks.block" enumval=131096 block="滑(なめ)らかな砂岩(さがん)"
    //% jres alias=SMOOTH_SANDSTONE
    SmoothSandstone = 131096,
    //% blockIdentity="blocks.block" enumval=25 block="音符(おんぷ)ブロック"
    //% jres alias=NOTE_BLOCK
    NoteBlock = 25,
    //% blockIdentity="blocks.block" enumval=26 block="ベッド"
    //% jres alias=BED
    Bed = 26,
    //% blockIdentity="blocks.block" enumval=27 block="パワードレール"
    //% jres alias=POWERED_RAIL
    PoweredRail = 27,
    //% blockIdentity="blocks.block" enumval=28 block="ディテクターレール"
    //% jres alias=DETECTOR_RAIL
    DetectorRail = 28,
    //% blockIdentity="blocks.block" enumval=29 block="粘着(ねんちゃく)ピストン"
    //% jres alias=STICKY_PISTON
    StickyPiston = 29,
    //% blockIdentity="blocks.block" enumval=30 block="クモ(くも)の巣(す)"
    //% jres alias=COBWEB
    Cobweb = 30,
    //% blockIdentity="blocks.block" enumval=65567 block="草(くさ)"
    //% jres alias=TALLGRASS
    Tallgrass = 65567,
    //% blockIdentity="blocks.block" enumval=131103 block="シダ"
    //% jres alias=FERN
    Fern = 131103,
    //% blockIdentity="blocks.block" enumval=32 block="枯(か)れ木(き)"
    //% jres alias=DEAD_BUSH
    DeadBush = 32,
    //% blockIdentity="blocks.block" enumval=65569 block="ピストン"
    //% jres alias=PISTON
    Piston = 65569,
    //% blockIdentity="blocks.block" enumval=35 block="白色(しろいろ)の羊毛(ようもう)"
    //% jres alias=WOOL
    Wool = 35,
    //% blockIdentity="blocks.block" enumval=65571 block="橙色(だいだいいろ)の羊毛(ようもう)"
    //% jres alias=ORANGE_WOOL
    OrangeWool = 65571,
    //% blockIdentity="blocks.block" enumval=131107 block="赤紫色(あかむらさきいろ)の羊毛(ようもう)"
    //% jres alias=MAGENTA_WOOL
    MagentaWool = 131107,
    //% blockIdentity="blocks.block" enumval=196643 block="空色(そらいろ)の羊毛(ようもう)"
    //% jres alias=LIGHT_BLUE_WOOL
    LightBlueWool = 196643,
    //% blockIdentity="blocks.block" enumval=262179 block="黄色(きいろ)の羊毛(ようもう)"
    //% jres alias=YELLOW_WOOL
    YellowWool = 262179,
    //% blockIdentity="blocks.block" enumval=327715 block="黄緑色(おうりょくしょく)の羊毛(ようもう)"
    //% jres alias=LIME_WOOL
    LimeWool = 327715,
    //% blockIdentity="blocks.block" enumval=393251 block="桃色(ももいろ)の羊毛(ようもう)"
    //% jres alias=PINK_WOOL
    PinkWool = 393251,
    //% blockIdentity="blocks.block" enumval=458787 block="灰色(はいいろ)の羊毛(ようもう)"
    //% jres alias=GRAY_WOOL
    GrayWool = 458787,
    //% blockIdentity="blocks.block" enumval=524323 block="薄灰色(うすはいいろ)の羊毛(ようもう)"
    //% jres alias=LIGHT_GRAY_WOOL
    LightGrayWool = 524323,
    //% blockIdentity="blocks.block" enumval=589859 block="青緑色(あおみどりいろ)の羊毛(ようもう)"
    //% jres alias=CYAN_WOOL
    CyanWool = 589859,
    //% blockIdentity="blocks.block" enumval=655395 block="紫色(むらさきいろ)の羊毛(ようもう)"
    //% jres alias=PURPLE_WOOL
    PurpleWool = 655395,
    //% blockIdentity="blocks.block" enumval=720931 block="青色(あおいろ)の羊毛(ようもう)"
    //% jres alias=BLUE_WOOL
    BlueWool = 720931,
    //% blockIdentity="blocks.block" enumval=786467 block="茶色(ちゃいろ)の羊毛(ようもう)"
    //% jres alias=BROWN_WOOL
    BrownWool = 786467,
    //% blockIdentity="blocks.block" enumval=852003 block="緑色(みどりいろ)の羊毛(ようもう)"
    //% jres alias=GREEN_WOOL
    GreenWool = 852003,
    //% blockIdentity="blocks.block" enumval=917539 block="赤色(あかいろ)の羊毛(ようもう)"
    //% jres alias=RED_WOOL
    RedWool = 917539,
    //% blockIdentity="blocks.block" enumval=983075 block="黒色(こくしょく)の羊毛(ようもう)"
    //% jres alias=BLACK_WOOL
    BlackWool = 983075,
    //% blockIdentity="blocks.block" enumval=37 block="タンポポ"
    //% jres alias=YELLOW_FLOWER
    YellowFlower = 37,
    //% blockIdentity="blocks.block" enumval=38 block="ポピー"
    //% jres alias=POPPY
    Poppy = 38,
    //% blockIdentity="blocks.block" enumval=65574 block="ヒスイラン"
    //% jres alias=BLUE_ORCHID
    BlueOrchid = 65574,
    //% blockIdentity="blocks.block" enumval=131110 block="アリウム"
    //% jres alias=ALLIUM
    Allium = 131110,
    //% blockIdentity="blocks.block" enumval=196646 block="ヒナソウ"
    //% jres alias=AZURE_BLUET
    AzureBluet = 196646,
    //% blockIdentity="blocks.block" enumval=262182 block="赤色(あかいろ)のチューリップ"
    //% jres alias=RED_TULIP
    RedTulip = 262182,
    //% blockIdentity="blocks.block" enumval=327718 block="橙色(だいだいいろ)のチューリップ"
    //% jres alias=ORANGE_TULIP
    OrangeTulip = 327718,
    //% blockIdentity="blocks.block" enumval=393254 block="白色(しろいろ)のチューリップ"
    //% jres alias=WHITE_TULIP
    WhiteTulip = 393254,
    //% blockIdentity="blocks.block" enumval=458790 block="桃色(ももいろ)のチューリップ"
    //% jres alias=PINK_TULIP
    PinkTulip = 458790,
    //% blockIdentity="blocks.block" enumval=524326 block="フランスギク"
    //% jres alias=OXEYE_DAISY
    OxeyeDaisy = 524326,
    //% blockIdentity="blocks.block" enumval=674 block="竹(たけ)"
    //% jres alias=BAMBOO
    Bamboo = 674,
    //% blockIdentity="blocks.block" enumval=589862 block="ヤグルマギク"
    //% jres alias=CORNFLOWER
    Cornflower = 589862,
    //% blockIdentity="blocks.block" enumval=655398 block="スズラン"
    //% jres alias=LILY_OF_THE_VALLEY
    LilyOfTheValley = 655398,
    //% blockIdentity="blocks.block" enumval=39 block="きのこ"
    //% jres alias=BROWN_MUSHROOM
    BrownMushroom = 39,
    //% blockIdentity="blocks.block" enumval=40 block="きのこ"
    //% jres alias=RED_MUSHROOM
    RedMushroom = 40,
    //% blockIdentity="blocks.block" enumval=41 block="金(きん)ブロック"
    //% jres alias=GOLD_BLOCK
    GoldBlock = 41,
    //% blockIdentity="blocks.block" enumval=42 block="鉄(てつ)ブロック"
    //% jres alias=IRON_BLOCK
    IronBlock = 42,
    //% blockIdentity="blocks.block" enumval=43 block="二段(だん)重(かさ)ねの石(いし)ハーフブロック"
    //% jres alias=DOUBLE_STONE_SLAB
    DoubleStoneSlab = 43,
    //% blockIdentity="blocks.block" enumval=44 block="石(いし)のハーフブロック"
    //% jres alias=STONE_SLAB
    StoneSlab = 44,
    //% blockIdentity="blocks.block" enumval=65580 block="砂岩(さがん)のハーフブロック"
    //% jres alias=SANDSTONE_SLAB
    SandstoneSlab = 65580,
    //% blockIdentity="blocks.block" enumval=196652 block="丸石(まるいし)のハーフブロック"
    //% jres alias=COBBLESTONE_SLAB
    CobblestoneSlab = 196652,
    //% blockIdentity="blocks.block" enumval=262188 block="レンガのハーフブロック"
    //% jres alias=BRICKS_SLAB
    BricksSlab = 262188,
    //% blockIdentity="blocks.block" enumval=327724 block="石(いし)レンガハーフブロック"
    //% jres alias=STONE_BRICKS_SLAB
    StoneBricksSlab = 327724,
    //% blockIdentity="blocks.block" enumval=393260 block="クォーツのハーフブロック"
    //% jres alias=QUARTZ_SLAB
    QuartzSlab = 393260,
    //% blockIdentity="blocks.block" enumval=458796 block="ネザーレンガのハーフブロック"
    //% jres alias=NETHER_BRICK_SLAB
    NetherBrickSlab = 458796,
    //% blockIdentity="blocks.block" enumval=45 block="レンガ ブロック"
    //% jres alias=BRICKS
    Bricks = 45,
    //% blockIdentity="blocks.block" enumval=46 block="TNT"
    //% jres alias=TNT
    TNT = 46,
    //% blockIdentity="blocks.block" enumval=47 block="本棚(ほんだな)"
    //% jres alias=BOOKSHELF
    Bookshelf = 47,
    //% blockIdentity="blocks.block" enumval=48 block="苔石(たいせき)"
    //% jres alias=MOSS_STONE
    MossStone = 48,
    //% blockIdentity="blocks.block" enumval=49 block="黒曜石(こくようせき)"
    //% jres alias=OBSIDIAN
    Obsidian = 49,
    //% blockIdentity="blocks.block" enumval=50 block="松明(たいまつ)"
    //% jres alias=TORCH
    Torch = 50,
    //% blockIdentity="blocks.block" enumval=51 block="炎(ほのお)"
    //% jres alias=FIRE
    Fire = 51,
    //% blockIdentity="blocks.block" enumval=52 block="モンスター スポーナー"
    //% jres alias=MONSTER_SPAWNER
    MonsterSpawner = 52,
    //% blockIdentity="blocks.block" enumval=53 block="樫(かし)の階段(かいだん)"
    //% jres alias=OAK_WOOD_STAIRS
    OakWoodStairs = 53,
    //% blockIdentity="blocks.block" enumval=54 block="チェスト"
    //% jres alias=CHEST
    Chest = 54,
    //% blockIdentity="blocks.block" enumval=55 block="レッドストーンダスト"
    //% jres alias=REDSTONE_WIRE
    RedstoneWire = 55,
    //% blockIdentity="blocks.block" enumval=56 block="ダイヤモンド鉱石(こうせき)"
    //% jres alias=DIAMOND_ORE
    DiamondOre = 56,
    //% blockIdentity="blocks.block" enumval=57 block="ダイヤモンドブロック"
    //% jres alias=DIAMOND_BLOCK
    DiamondBlock = 57,
    //% blockIdentity="blocks.block" enumval=58 block="作業(さぎょう)台(だい)"
    //% jres alias=CRAFTING_TABLE
    CraftingTable = 58,
    //% blockIdentity="blocks.block" enumval=59 block="作物(さくもつ)"
    //% jres alias=CROPS
    Crops = 59,
    //% blockIdentity="blocks.block" enumval=60 block="耕地(こうち)"
    //% jres alias=FARMLAND
    Farmland = 60,
    //% blockIdentity="blocks.block" enumval=61 block="かまど"
    //% jres alias=FURNACE
    Furnace = 61,
    //% blockIdentity="blocks.block" enumval=63 block="署名(しょめい)"
    //% jres alias=SIGN
    Sign = 63,
    //% blockIdentity="blocks.block" enumval=65 block="はしご"
    //% jres alias=LADDER
    Ladder = 65,
    //% blockIdentity="blocks.block" enumval=66 block="レール"
    //% jres alias=RAIL
    Rail = 66,
    //% blockIdentity="blocks.block" enumval=67 block="丸石(まるいし)の階段(かいだん)"
    //% jres alias=COBBLESTONE_STAIRS
    CobblestoneStairs = 67,
    //% blockIdentity="blocks.block" enumval=69 block="レバー"
    //% jres alias=LEVER
    Lever = 69,
    //% blockIdentity="blocks.block" enumval=70 block="石(いし)の感圧(かんあつ)板(ばん)"
    //% jres alias=STONE_PRESSURE_PLATE
    StonePressurePlate = 70,
    //% blockIdentity="blocks.block" enumval=72 block="オークの感圧(かんあつ)板(ばん)"
    //% jres alias=WOODEN_PRESSURE_PLATE
    WoodenPressurePlate = 72,
    //% blockIdentity="blocks.block" enumval=73 block="レッドストーン鉱石(こうせき)"
    //% jres alias=REDSTONE_ORE
    RedstoneOre = 73,
    //% blockIdentity="blocks.block" enumval=76 block="レッドストーントーチ"
    //% jres alias=REDSTONE_TORCH
    RedstoneTorch = 76,
    //% blockIdentity="blocks.block" enumval=327757 block="石(いし)のボタン"
    //% jres alias=STONE_BUTTON
    StoneButton = 327757,
    //% blockIdentity="blocks.block" enumval=78 block="積雪(せきせつ)"
    //% jres alias=TOP_SNOW
    TopSnow = 78,
    //% blockIdentity="blocks.block" enumval=79 block="氷(こおり)"
    //% jres alias=ICE
    Ice = 79,
    //% blockIdentity="blocks.block" enumval=80 block="雪(ゆき)"
    //% jres alias=SNOW
    Snow = 80,
    //% blockIdentity="blocks.block" enumval=81 block="サボテン"
    //% jres alias=CACTUS
    Cactus = 81,
    //% blockIdentity="blocks.block" enumval=82 block="粘土(ねんど)ブロック"
    //% jres alias=CLAY
    Clay = 82,
    //% blockIdentity="blocks.block" enumval=83 block="サトウキビ"
    //% jres alias=SUGAR_CANE
    SugarCane = 83,
    //% blockIdentity="blocks.block" enumval=84 block="ジュークボックス"
    //% jres alias=JUKEBOX
    Jukebox = 84,
    //% blockIdentity="blocks.block" enumval=85 block="オークのフェンス"
    //% jres alias=OAK_FENCE
    OakFence = 85,
    //% blockIdentity="blocks.block" enumval=65621 block="トウヒのフェンス"
    //% jres alias=SPRUCE_FENCE
    SpruceFence = 65621,
    //% blockIdentity="blocks.block" enumval=131157 block="シラカバのフェンス"
    //% jres alias=BIRCH_FENCE
    BirchFence = 131157,
    //% blockIdentity="blocks.block" enumval=196693 block="ジャングルのフェンス"
    //% jres alias=JUNGLE_FENCE
    JungleFence = 196693,
    //% blockIdentity="blocks.block" enumval=262229 block="アカシアのフェンス"
    //% jres alias=ACACIA_FENCE
    AcaciaFence = 262229,
    //% blockIdentity="blocks.block" enumval=327765 block="ダークオークのフェンス"
    //% jres alias=DARK_OAK_FENCE
    DarkOakFence = 327765,
    //% blockIdentity="blocks.block" enumval=86 block="カボチャ"
    //% jres alias=PUMPKIN
    Pumpkin = 86,
    //% blockIdentity="blocks.block" enumval=87 block="ネザーラック"
    //% jres alias=NETHERRACK
    Netherrack = 87,
    //% blockIdentity="blocks.block" enumval=88 block="ソウルサンド"
    //% jres alias=SOUL_SAND
    SoulSand = 88,
    //% blockIdentity="blocks.block" enumval=89 block="グロウストーン"
    //% jres alias=GLOWSTONE
    Glowstone = 89,
    //% blockIdentity="blocks.block" enumval=91 block="ジャック・オ・ランタン"
    //% jres alias=JACK_O_LANTERN
    JackOLantern = 91,
    //% blockIdentity="blocks.block" enumval=92 block="ケーキ"
    //% jres alias=CAKE
    Cake = 92,
    //% blockIdentity="blocks.block" enumval=93 block="無(む)通電(つうでん)のリピーター"
    //% jres alias=UNPOWERED_REPEATER
    UnpoweredRepeater = 93,
    //% blockIdentity="blocks.block" enumval=96 block="オークのトラップドア"
    //% jres alias=WOODEN_TRAPDOOR
    WoodenTrapdoor = 96,
    //% blockIdentity="blocks.block" enumval=97 block="シルバーフィッシュ入(い)りの石(いし)"
    //% jres alias=STONE_MONSTER_EGG
    StoneMonsterEgg = 97,
    //% blockIdentity="blocks.block" enumval=65633 block="シルバーフィッシュ入(い)りの丸石(まるいし)"
    //% jres alias=COBBLESTONE_MONSTER_EGG
    CobblestoneMonsterEgg = 65633,
    //% blockIdentity="blocks.block" enumval=131169 block="シルバーフィッシュ入(はい)り石(いし)レンガ"
    //% jres alias=STONE_BRICK_MONSTER_EGG
    StoneBrickMonsterEgg = 131169,
    //% blockIdentity="blocks.block" enumval=196705 block="シルバーフィッシュの苔(こけ)の生(は)えた石(いし)レンガ"
    //% jres alias=MOSSY_STONE_BRICK_MONSTER_EGG
    MossyStoneBrickMonsterEgg = 196705,
    //% blockIdentity="blocks.block" enumval=262241 block="ひび割(わ)れた石(いし)レンガモンスターエッグ"
    //% jres alias=CRACKED_STONE_BRICK_MONSTER_EGG
    CrackedStoneBrickMonsterEgg = 262241,
    //% blockIdentity="blocks.block" enumval=327777 block="模様(もよう)入(はい)り石(いし)レンガモンスターエッグ"
    //% jres alias=CHISELED_STONE_BRICK_MONSTER_EGG
    ChiseledStoneBrickMonsterEgg = 327777,
    //% blockIdentity="blocks.block" enumval=98 block="石(いし)レンガ"
    //% jres alias=STONE_BRICKS
    StoneBricks = 98,
    //% blockIdentity="blocks.block" enumval=65634 block="苔(こけ)むした石(いし)レンガ"
    //% jres alias=MOSSY_STONE_BRICKS
    MossyStoneBricks = 65634,
    //% blockIdentity="blocks.block" enumval=131170 block="ひび割(わ)れた石(いし)レンガ"
    //% jres alias=CRACKED_STONE_BRICKS
    CrackedStoneBricks = 131170,
    //% blockIdentity="blocks.block" enumval=196706 block="模様(もよう)入(い)りの石(いし)レンガ"
    //% jres alias=CHISELED_STONE_BRICKS
    ChiseledStoneBricks = 196706,
    //% blockIdentity="blocks.block" enumval=99 block="きのこ"
    //% jres
    Mushroom0 = 99,
    //% blockIdentity="blocks.block" enumval=917603 block="きのこ"
    //% jres
    Mushroom14 = 917603,
    //% blockIdentity="blocks.block" enumval=983139 block="きのこ"
    //% jres
    Mushroom15 = 983139,
    //% blockIdentity="blocks.block" enumval=917604 block="きのこ"
    //% jres alias=RED_MUSHROOM_BLOCK
    RedMushroomBlock = 917604,
    //% blockIdentity="blocks.block" enumval=101 block="鉄格子(てつごうし)"
    //% jres alias=IRON_BARS
    IronBars = 101,
    //% blockIdentity="blocks.block" enumval=102 block="ガラス(がらす)板(いた)"
    //% jres alias=GLASS_PANE
    GlassPane = 102,
    //% blockIdentity="blocks.block" enumval=103 block="スイカ"
    //% jres alias=MELON_BLOCK
    MelonBlock = 103,
    //% blockIdentity="blocks.block" enumval=104 block="カボチャの茎(くき)"
    //% jres alias=PUMPKIN_STEM
    PumpkinStem = 104,
    //% blockIdentity="blocks.block" enumval=105 block="メロンの茎(くき)"
    //% jres alias=MELON_STEM
    MelonStem = 105,
    //% blockIdentity="blocks.block" enumval=106 block="ツタ"
    //% jres alias=VINES
    Vines = 106,
    //% blockIdentity="blocks.block" enumval=107 block="オークのフェンスゲート"
    //% jres alias=OAK_FENCE_GATE
    OakFenceGate = 107,
    //% blockIdentity="blocks.block" enumval=108 block="レンガの階段(かいだん)"
    //% jres alias=BRICK_STAIRS
    BrickStairs = 108,
    //% blockIdentity="blocks.block" enumval=109 block="石(いし)レンガの階段(かいだん)"
    //% jres alias=STONE_BRICK_STAIRS
    StoneBrickStairs = 109,
    //% blockIdentity="blocks.block" enumval=110 block="菌糸(きんし)"
    //% jres alias=MYCELIUM
    Mycelium = 110,
    //% blockIdentity="blocks.block" enumval=111 block="スイレンの葉(は)"
    //% jres alias=LILY_PAD
    LilyPad = 111,
    //% blockIdentity="blocks.block" enumval=112 block="ネザーレンガのブロック"
    //% jres alias=NETHER_BRICK
    NetherBrick = 112,
    //% blockIdentity="blocks.block" enumval=113 block="ネザーレンガのフェンス"
    //% jres alias=NETHER_BRICK_FENCE
    NetherBrickFence = 113,
    //% blockIdentity="blocks.block" enumval=114 block="ネザーレンガの階段(かいだん)"
    //% jres alias=NETHER_BRICK_STAIRS
    NetherBrickStairs = 114,
    //% blockIdentity="blocks.block" enumval=115 block="ネザーウォート"
    //% jres alias=NETHER_WART
    NetherWart = 115,
    //% blockIdentity="blocks.block" enumval=116 block="エンチャントテーブル"
    //% jres alias=ENCHANTMENT_TABLE
    EnchantmentTable = 116,
    //% blockIdentity="blocks.block" enumval=117 block="醸造(じょうぞう)台(だい)"
    //% jres alias=BREWING_STAND
    BrewingStand = 117,
    //% blockIdentity="blocks.block" enumval=118 block="大釜(おおかま)"
    //% jres alias=CAULDRON
    Cauldron = 118,
    //% blockIdentity="blocks.block" enumval=120 block="エンドポータル"
    //% jres alias=END_PORTAL
    EndPortal = 120,
    //% blockIdentity="blocks.block" enumval=121 block="エンドストーン"
    //% jres alias=ENDSTONE
    Endstone = 121,
    //% blockIdentity="blocks.block" enumval=122 block="ドラゴンの卵(たまご)"
    //% jres alias=DRAGON_EGG
    DragonEgg = 122,
    //% blockIdentity="blocks.block" enumval=123 block="レッドストーンランプ"
    //% jres alias=REDSTONE_LAMP
    RedstoneLamp = 123,
    //% blockIdentity="blocks.block" enumval=196733 block="ドロッパー"
    //% jres alias=DROPPER
    Dropper = 196733,
    //% blockIdentity="blocks.block" enumval=126 block="アクティベーターレール"
    //% jres alias=ACTIVATOR_RAIL
    ActivatorRail = 126,
    //% blockIdentity="blocks.block" enumval=127 block="カカオの実(み)"
    //% jres alias=COCOA
    Cocoa = 127,
    //% blockIdentity="blocks.block" enumval=128 block="砂岩(さがん)の階段(かいだん)"
    //% jres alias=SANDSTONE_STAIRS
    SandstoneStairs = 128,
    //% blockIdentity="blocks.block" enumval=129 block="エメラルド鉱石(こうせき)"
    //% jres alias=EMERALD_ORE
    EmeraldOre = 129,
    //% blockIdentity="blocks.block" enumval=130 block="エンダーチェスト"
    //% jres alias=ENDER_CHEST
    EnderChest = 130,
    //% blockIdentity="blocks.block" enumval=131 block="トリップワイヤーフック"
    //% jres alias=TRIPWIRE_HOOK
    TripwireHook = 131,
    //% blockIdentity="blocks.block" enumval=132 block="トリップワイヤー"
    //% jres alias=TRIPWIRE
    Tripwire = 132,
    //% blockIdentity="blocks.block" enumval=133 block="エメラルドブロック"
    //% jres alias=EMERALD_BLOCK
    EmeraldBlock = 133,
    //% blockIdentity="blocks.block" enumval=134 block="トウヒの階段(かいだん)"
    //% jres alias=SPRUCE_WOOD_STAIRS
    SpruceWoodStairs = 134,
    //% blockIdentity="blocks.block" enumval=135 block="樺(かば)の階段(かいだん)"
    //% jres alias=BIRCH_WOOD_STAIRS
    BirchWoodStairs = 135,
    //% blockIdentity="blocks.block" enumval=136 block="ジャングルの木(き)の階段(かいだん)"
    //% jres alias=JUNGLE_WOOD_STAIRS
    JungleWoodStairs = 136,
    //% blockIdentity="blocks.block" enumval=138 block="ビーコン"
    //% jres alias=BEACON
    Beacon = 138,
    //% blockIdentity="blocks.block" enumval=139 block="丸石(まるいし)の壁(かべ) "
    //% jres alias=COBBLESTONE_WALL
    CobblestoneWall = 139,
    //% blockIdentity="blocks.block" enumval=65675 block="苔(こけ)むした丸石(まるいし)の塀(へい)"
    //% jres alias=MOSSY_COBBLESTONE_WALL
    MossyCobblestoneWall = 65675,
    //% blockIdentity="blocks.block" enumval=140 block="植木鉢(うえきばち)"
    //% jres alias=FLOWER_POT
    FlowerPot = 140,
    //% blockIdentity="blocks.block" enumval=141 block="ニンジン"
    //% jres alias=CARROTS
    Carrots = 141,
    //% blockIdentity="blocks.block" enumval=142 block="ジャガイモ"
    //% jres alias=POTATOES
    Potatoes = 142,
    //% blockIdentity="blocks.block" enumval=327823 block="オークのボタン"
    //% jres alias=WOODEN_BUTTON
    WoodenButton = 327823,
    //% blockIdentity="blocks.block" enumval=144 block="スケルトンの頭蓋骨(ずがいこつ)"
    //% jres alias=SKELETON_SKULL
    SkeletonSkull = 144,
    //% blockIdentity="blocks.block" enumval=145 block="金床(かなとこ)"
    //% jres alias=ANVIL
    Anvil = 145,
    //% blockIdentity="blocks.block" enumval=65681 block="少(すこ)し壊(こわ)れた金床(かなとこ)"
    //% jres alias=SLIGHTLY_DAMAGED_ANVIL
    SlightlyDamagedAnvil = 65681,
    //% blockIdentity="blocks.block" enumval=131217 block="かなり壊(こわ)れた金床(かなとこ)"
    //% jres alias=VERY_DAMAGED_ANVIL
    VeryDamagedAnvil = 131217,
    //% blockIdentity="blocks.block" enumval=146 block="トラップチェスト"
    //% jres alias=TRAPPED_CHEST
    TrappedChest = 146,
    //% blockIdentity="blocks.block" enumval=147 block="感圧(かんあつ)版(ばん) (軽(けい))"
    //% jres alias=WEIGHTED_PRESSURE_PLATE_LIGHT
    WeightedPressurePlateLight = 147,
    //% blockIdentity="blocks.block" enumval=148 block="感圧(かんあつ)版(ばん) (重(じゅう))"
    //% jres alias=WEIGHTED_PRESSURE_PLATE_HEAVY
    WeightedPressurePlateHeavy = 148,
    //% blockIdentity="blocks.block" enumval=149 block="無(む)通電(つうでん)のコンパレーター"
    //% jres alias=UNPOWERED_COMPARATOR
    UnpoweredComparator = 149,
    //% blockIdentity="blocks.block" enumval=151 block="日照(にっしょう)センサー"
    //% jres alias=DAYLIGHT_SENSOR
    DaylightSensor = 151,
    //% blockIdentity="blocks.block" enumval=152 block="レッドストーンブロック"
    //% jres alias=REDSTONE_BLOCK
    RedstoneBlock = 152,
    //% blockIdentity="blocks.block" enumval=153 block="ネザークォーツ鉱石(こうせき)"
    //% jres alias=QUARTZ_ORE
    QuartzOre = 153,
    //% blockIdentity="blocks.block" enumval=154 block="ホッパー"
    //% jres alias=HOPPER
    Hopper = 154,
    //% blockIdentity="blocks.block" enumval=155 block="クォーツブロック"
    //% jres alias=BLOCK_OF_QUARTZ
    BlockOfQuartz = 155,
    //% blockIdentity="blocks.block" enumval=65691 block="模様(もよう)入(い)りのクォーツブロック"
    //% jres alias=CHISELED_QUARTZ_BLOCK
    ChiseledQuartzBlock = 65691,
    //% blockIdentity="blocks.block" enumval=131227 block="柱状(ちゅうじょう)のクォーツのブロック"
    //% jres alias=PILLAR_QUARTZ_BLOCK
    PillarQuartzBlock = 131227,
    //% blockIdentity="blocks.block" enumval=156 block="クォーツの階段(かいだん)"
    //% jres alias=QUARTZ_STAIRS
    QuartzStairs = 156,
    //% blockIdentity="blocks.block" enumval=157 block="二段(だん)重(かさ)ねの木材(もくざい)ハーフブロック"
    //% jres alias=DOUBLE_WOODEN_SLAB
    DoubleWoodenSlab = 157,
    //% blockIdentity="blocks.block" enumval=158 block="樫(かし)のハーフブロック"
    //% jres alias=OAK_WOOD_SLAB
    OakWoodSlab = 158,
    //% blockIdentity="blocks.block" enumval=65694 block="トウヒのハーフブロック"
    //% jres alias=SPRUCE_WOOD_SLAB
    SpruceWoodSlab = 65694,
    //% blockIdentity="blocks.block" enumval=131230 block="樺(かば)のハーフブロック"
    //% jres alias=BIRCH_WOOD_SLAB
    BirchWoodSlab = 131230,
    //% blockIdentity="blocks.block" enumval=196766 block="ジャングルの木(き)のハーフブロック"
    //% jres alias=JUNGLE_WOOD_SLAB
    JungleWoodSlab = 196766,
    //% blockIdentity="blocks.block" enumval=262302 block="アカシアの木(き)のハーフブロック"
    //% jres alias=ACACIA_WOOD_SLAB
    AcaciaWoodSlab = 262302,
    //% blockIdentity="blocks.block" enumval=327838 block="黒樫(くろがし)の木(き)のハーフブロック"
    //% jres alias=DARK_OAK_WOOD_SLAB
    DarkOakWoodSlab = 327838,
    //% blockIdentity="blocks.block" enumval=159 block="白色(しろいろ)のテラコッタ"
    //% jres alias=WHITE_TERRACOTTA
    WhiteTerracotta = 159,
    //% blockIdentity="blocks.block" enumval=65695 block="橙色(だいだいいろ)のテラコッタ"
    //% jres alias=ORANGE_TERRACOTTA
    OrangeTerracotta = 65695,
    //% blockIdentity="blocks.block" enumval=131231 block="赤紫色(あかむらさきいろ)のテラコッタ"
    //% jres alias=MAGENTA_TERRACOTTA
    MagentaTerracotta = 131231,
    //% blockIdentity="blocks.block" enumval=196767 block="空色(そらいろ)のテラコッタ"
    //% jres alias=LIGHT_BLUE_TERRACOTTA
    LightBlueTerracotta = 196767,
    //% blockIdentity="blocks.block" enumval=262303 block="黄色(きいろ)のテラコッタ"
    //% jres alias=YELLOW_TERRACOTTA
    YellowTerracotta = 262303,
    //% blockIdentity="blocks.block" enumval=327839 block="黄緑色(おうりょくしょく)のテラコッタ"
    //% jres alias=LIME_TERRACOTTA
    LimeTerracotta = 327839,
    //% blockIdentity="blocks.block" enumval=393375 block="桃色(ももいろ)のテラコッタ"
    //% jres alias=PINK_TERRACOTTA
    PinkTerracotta = 393375,
    //% blockIdentity="blocks.block" enumval=458911 block="灰色(はいいろ)のテラコッタ"
    //% jres alias=GRAY_TERRACOTTA
    GrayTerracotta = 458911,
    //% blockIdentity="blocks.block" enumval=524447 block="薄灰色(うすはいいろ)のテラコッタ"
    //% jres alias=LIGHT_GRAY_TERRACOTTA
    LightGrayTerracotta = 524447,
    //% blockIdentity="blocks.block" enumval=589983 block="青緑色(あおみどりいろ)のテラコッタ"
    //% jres alias=CYAN_TERRACOTTA
    CyanTerracotta = 589983,
    //% blockIdentity="blocks.block" enumval=655519 block="紫色(むらさきいろ)のテラコッタ"
    //% jres alias=PURPLE_TERRACOTTA
    PurpleTerracotta = 655519,
    //% blockIdentity="blocks.block" enumval=721055 block="青色(あおいろ)のテラコッタ"
    //% jres alias=BLUE_TERRACOTTA
    BlueTerracotta = 721055,
    //% blockIdentity="blocks.block" enumval=786591 block="茶色(ちゃいろ)のテラコッタ"
    //% jres alias=BROWN_TERRACOTTA
    BrownTerracotta = 786591,
    //% blockIdentity="blocks.block" enumval=852127 block="緑色(みどりいろ)のテラコッタ"
    //% jres alias=GREEN_TERRACOTTA
    GreenTerracotta = 852127,
    //% blockIdentity="blocks.block" enumval=917663 block="赤色(あかいろ)のテラコッタ"
    //% jres alias=RED_TERRACOTTA
    RedTerracotta = 917663,
    //% blockIdentity="blocks.block" enumval=983199 block="黒色(こくしょく)のテラコッタ"
    //% jres alias=BLACK_TERRACOTTA
    BlackTerracotta = 983199,
    //% blockIdentity="blocks.block" enumval=160 block="白色(しろいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=WHITE_STAINED_GLASS_PANE
    WhiteStainedGlassPane = 160,
    //% blockIdentity="blocks.block" enumval=65696 block="橙色(だいだいいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=ORANGE_STAINED_GLASS_PANE
    OrangeStainedGlassPane = 65696,
    //% blockIdentity="blocks.block" enumval=131232 block="赤紫色(あかむらさきいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=MAGENTA_STAINED_GLASS_PANE
    MagentaStainedGlassPane = 131232,
    //% blockIdentity="blocks.block" enumval=196768 block="空色(そらいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=LIGHT_BLUE_STAINED_GLASS_PANE
    LightBlueStainedGlassPane = 196768,
    //% blockIdentity="blocks.block" enumval=262304 block="黄色(きいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=YELLOW_STAINED_GLASS_PANE
    YellowStainedGlassPane = 262304,
    //% blockIdentity="blocks.block" enumval=327840 block="黄緑色(おうりょくしょく)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=LIME_STAINED_GLASS_PANE
    LimeStainedGlassPane = 327840,
    //% blockIdentity="blocks.block" enumval=393376 block="桃色(ももいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=PINK_STAINED_GLASS_PANE
    PinkStainedGlassPane = 393376,
    //% blockIdentity="blocks.block" enumval=458912 block="灰色(はいいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=GRAY_STAINED_GLASS_PANE
    GrayStainedGlassPane = 458912,
    //% blockIdentity="blocks.block" enumval=524448 block="薄灰色(うすはいいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=LIGHT_GRAY_STAINED_GLASS_PANE
    LightGrayStainedGlassPane = 524448,
    //% blockIdentity="blocks.block" enumval=589984 block="青緑色(あおみどりいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=CYAN_STAINED_GLASS_PANE
    CyanStainedGlassPane = 589984,
    //% blockIdentity="blocks.block" enumval=655520 block="紫色(むらさきいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=PURPLE_STAINED_GLASS_PANE
    PurpleStainedGlassPane = 655520,
    //% blockIdentity="blocks.block" enumval=721056 block="青色(あおいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=BLUE_STAINED_GLASS_PANE
    BlueStainedGlassPane = 721056,
    //% blockIdentity="blocks.block" enumval=786592 block="茶色(ちゃいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=BROWN_STAINED_GLASS_PANE
    BrownStainedGlassPane = 786592,
    //% blockIdentity="blocks.block" enumval=852128 block="緑色(みどりいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=GREEN_STAINED_GLASS_PANE
    GreenStainedGlassPane = 852128,
    //% blockIdentity="blocks.block" enumval=917664 block="赤色(あかいろ)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=RED_STAINED_GLASS_PANE
    RedStainedGlassPane = 917664,
    //% blockIdentity="blocks.block" enumval=983200 block="黒色(こくしょく)の色付(いろづ)きガラス(がらす)板(いた)"
    //% jres alias=BLACK_STAINED_GLASS_PANE
    BlackStainedGlassPane = 983200,
    //% blockIdentity="blocks.block" enumval=161 block="アカシアの葉(は)"
    //% jres alias=ACACIA_LEAVES
    AcaciaLeaves = 161,
    //% blockIdentity="blocks.block" enumval=65697 block="ダークオークの葉(は)"
    //% jres alias=DARK_OAK_LEAVES
    DarkOakLeaves = 65697,
    //% blockIdentity="blocks.block" enumval=162 block="アカシアの木(き)"
    //% jres alias=LOG_ACACIA
    LogAcacia = 162,
    //% blockIdentity="blocks.block" enumval=65698 block="ダークオークの木(き)"
    //% jres alias=LOG_DARK_OAK
    LogDarkOak = 65698,
    //% blockIdentity="blocks.block" enumval=163 block="アカシアの木(き)の階段(かいだん)"
    //% jres alias=ACACIA_WOOD_STAIRS
    AcaciaWoodStairs = 163,
    //% blockIdentity="blocks.block" enumval=164 block="黒樫(くろがし)の木(き)の階段(かいだん)"
    //% jres alias=DARK_OAK_WOOD_STAIRS
    DarkOakWoodStairs = 164,
    //% blockIdentity="blocks.block" enumval=165 block="スライムブロック"
    //% jres alias=SLIME_BLOCK
    SlimeBlock = 165,
    //% blockIdentity="blocks.block" enumval=167 block="鉄(てつ)のトラップドア"
    //% jres alias=IRON_TRAPDOOR
    IronTrapdoor = 167,
    //% blockIdentity="blocks.block" enumval=168 block="プリズマリン"
    //% jres alias=PRISMARINE
    Prismarine = 168,
    //% blockIdentity="blocks.block" enumval=65704 block="ダークプリズマリン"
    //% jres alias=DARK_PRISMARINE
    DarkPrismarine = 65704,
    //% blockIdentity="blocks.block" enumval=131240 block="プリズマリンレンガ"
    //% jres alias=PRISMARINE_BRICKS
    PrismarineBricks = 131240,
    //% blockIdentity="blocks.block" enumval=169 block="シーランタン"
    //% jres alias=SEA_LANTERN
    SeaLantern = 169,
    //% blockIdentity="blocks.block" enumval=170 block="干草(ほしくさ)の俵(たわら)"
    //% jres alias=HAY_BLOCK
    HayBlock = 170,
    //% blockIdentity="blocks.block" enumval=171 block="白色(しろいろ)のカーペット"
    //% jres alias=WHITE_CARPET
    WhiteCarpet = 171,
    //% blockIdentity="blocks.block" enumval=65707 block="橙色(だいだいいろ)のカーペット"
    //% jres alias=ORANGE_CARPET
    OrangeCarpet = 65707,
    //% blockIdentity="blocks.block" enumval=131243 block="赤紫色(あかむらさきいろ)のカーペット"
    //% jres alias=MAGENTA_CARPET
    MagentaCarpet = 131243,
    //% blockIdentity="blocks.block" enumval=196779 block="空色(そらいろ)のカーペット"
    //% jres alias=LIGHT_BLUE_CARPET
    LightBlueCarpet = 196779,
    //% blockIdentity="blocks.block" enumval=262315 block="黄色(きいろ)のカーペット"
    //% jres alias=YELLOW_CARPET
    YellowCarpet = 262315,
    //% blockIdentity="blocks.block" enumval=327851 block="黄緑色(おうりょくしょく)のカーペット"
    //% jres alias=LIME_CARPET
    LimeCarpet = 327851,
    //% blockIdentity="blocks.block" enumval=393387 block="桃色(ももいろ)のカーペット"
    //% jres alias=PINK_CARPET
    PinkCarpet = 393387,
    //% blockIdentity="blocks.block" enumval=458923 block="灰色(はいいろ)のカーペット"
    //% jres alias=GRAY_CARPET
    GrayCarpet = 458923,
    //% blockIdentity="blocks.block" enumval=524459 block="薄灰色(うすはいいろ)のカーペット"
    //% jres alias=LIGHT_GRAY_CARPET
    LightGrayCarpet = 524459,
    //% blockIdentity="blocks.block" enumval=589995 block="青緑色(あおみどりいろ)のカーペット"
    //% jres alias=CYAN_CARPET
    CyanCarpet = 589995,
    //% blockIdentity="blocks.block" enumval=655531 block="紫色(むらさきいろ)のカーペット"
    //% jres alias=PURPLE_CARPET
    PurpleCarpet = 655531,
    //% blockIdentity="blocks.block" enumval=721067 block="青色(あおいろ)のカーペット"
    //% jres alias=BLUE_CARPET
    BlueCarpet = 721067,
    //% blockIdentity="blocks.block" enumval=786603 block="茶色(ちゃいろ)のカーペット"
    //% jres alias=BROWN_CARPET
    BrownCarpet = 786603,
    //% blockIdentity="blocks.block" enumval=852139 block="緑色(みどりいろ)のカーペット"
    //% jres alias=GREEN_CARPET
    GreenCarpet = 852139,
    //% blockIdentity="blocks.block" enumval=917675 block="赤色(あかいろ)のカーペット"
    //% jres alias=RED_CARPET
    RedCarpet = 917675,
    //% blockIdentity="blocks.block" enumval=983211 block="黒色(こくしょく)のカーペット"
    //% jres alias=BLACK_CARPET
    BlackCarpet = 983211,
    //% blockIdentity="blocks.block" enumval=172 block="テラコッタ"
    //% jres alias=HARDENED_CLAY
    HardenedClay = 172,
    //% blockIdentity="blocks.block" enumval=173 block="石炭(せきたん)ブロック"
    //% jres alias=COAL_BLOCK
    CoalBlock = 173,
    //% blockIdentity="blocks.block" enumval=174 block="氷塊(ひょうかい)"
    //% jres alias=PACKED_ICE
    PackedIce = 174,
    //% blockIdentity="blocks.block" enumval=175 block="ヒマワリ"
    //% jres alias=SUNFLOWER
    Sunflower = 175,
    //% blockIdentity="blocks.block" enumval=65711 block="ライラック"
    //% jres alias=LILAC
    Lilac = 65711,
    //% blockIdentity="blocks.block" enumval=131247 block="背(せ)の高(たか)い草(くさ)"
    //% jres alias=DOUBLE_TALLGRASS
    DoubleTallgrass = 131247,
    //% blockIdentity="blocks.block" enumval=196783 block="大(おお)きなシダ"
    //% jres alias=LARGE_FERN
    LargeFern = 196783,
    //% blockIdentity="blocks.block" enumval=262319 block="バラの低木(ていぼく)"
    //% jres alias=ROSE_BUSH
    RoseBush = 262319,
    //% blockIdentity="blocks.block" enumval=327855 block="ボタン"
    //% jres alias=PEONY
    Peony = 327855,
    //% blockIdentity="blocks.block" enumval=179 block="赤(あか)い砂岩(さがん)"
    //% jres alias=RED_SANDSTONE
    RedSandstone = 179,
    //% blockIdentity="blocks.block" enumval=65715 block="模様(もよう)入(い)りの赤(あか)い砂岩(さがん)"
    //% jres alias=CHISELED_RED_SANDSTONE
    ChiseledRedSandstone = 65715,
    //% blockIdentity="blocks.block" enumval=131251 block="滑(なめ)らかな赤(あか)い砂岩(さがん)"
    //% jres alias=SMOOTH_RED_SANDSTONE
    SmoothRedSandstone = 131251,
    //% blockIdentity="blocks.block" enumval=180 block="赤(あか)い砂岩(さがん)の階段(かいだん)"
    //% jres alias=RED_SANDSTONE_STAIRS
    RedSandstoneStairs = 180,
    //% blockIdentity="blocks.block" enumval=181 block="二段(だん)重(かさ)ねの赤(あか)い砂岩(さがん)ハーフブロック"
    //% jres alias=DOUBLE_RED_SANDSTONE_SLAB
    DoubleRedSandstoneSlab = 181,
    //% blockIdentity="blocks.block" enumval=182 block="赤(あか)い砂岩(さがん)のハーフブロック"
    //% jres alias=RED_SANDSTONE_SLAB
    RedSandstoneSlab = 182,
    //% blockIdentity="blocks.block" enumval=65718 block="プルプァのハーフブロック"
    //% jres alias=PURPUR_SLAB
    PurpurSlab = 65718,
    //% blockIdentity="blocks.block" enumval=131254 block="プリズマリンのハーフブロック"
    //% jres alias=PRISMARINE_SLAB
    PrismarineSlab = 131254,
    //% blockIdentity="blocks.block" enumval=196790 block="ダークプリズマリンのハーフブロック"
    //% jres alias=DARK_PRISMARINE_SLAB
    DarkPrismarineSlab = 196790,
    //% blockIdentity="blocks.block" enumval=262326 block="プリズマリンレンガのハーフブロック"
    //% jres alias=PRISMARINE_BRICK_SLAB
    PrismarineBrickSlab = 262326,
    //% blockIdentity="blocks.block" enumval=183 block="トウヒのフェンスゲート"
    //% jres alias=SPRUCE_FENCE_GATE
    SpruceFenceGate = 183,
    //% blockIdentity="blocks.block" enumval=184 block="シラカバのフェンスゲート"
    //% jres alias=BIRCH_FENCE_GATE
    BirchFenceGate = 184,
    //% blockIdentity="blocks.block" enumval=185 block="ジャングルのフェンスゲート"
    //% jres alias=JUNGLE_FENCE_GATE
    JungleFenceGate = 185,
    //% blockIdentity="blocks.block" enumval=186 block="ダークオークのフェンスゲート"
    //% jres alias=DARK_OAK_FENCE_GATE
    DarkOakFenceGate = 186,
    //% blockIdentity="blocks.block" enumval=187 block="アカシアのフェンスゲート"
    //% jres alias=ACACIA_FENCE_GATE
    AcaciaFenceGate = 187,
    //% blockIdentity="blocks.block" enumval=198 block="草(くさ)の道(みち)"
    //% jres alias=GRASS_PATH
    GrassPath = 198,
    //% blockIdentity="blocks.block" enumval=199 block="フレーム"
    //% jres alias=FRAME
    Frame = 199,
    //% blockIdentity="blocks.block" enumval=200 block="コーラスフラワー"
    //% jres alias=CHORUS_FLOWER
    ChorusFlower = 200,
    //% blockIdentity="blocks.block" enumval=201 block="プルプァブロック"
    //% jres alias=PURPUR_BLOCK
    PurpurBlock = 201,
    //% blockIdentity="blocks.block" enumval=131273 block="プルプァの柱(はしら)"
    //% jres alias=PURPUR_PILLAR
    PurpurPillar = 131273,
    //% blockIdentity="blocks.block" enumval=203 block="プルプァの階段(かいだん)"
    //% jres alias=PURPUR_STAIRS
    PurpurStairs = 203,
    //% blockIdentity="blocks.block" enumval=1048781 block="シュルカーボックス"
    //% jres alias=SHULKER_BOX
    ShulkerBox = 1048781,
    //% blockIdentity="blocks.block" enumval=206 block="エンドストーンレンガ"
    //% jres alias=END_STONE_BRICKS
    EndStoneBricks = 206,
    //% blockIdentity="blocks.block" enumval=208 block="エンドロッド"
    //% jres alias=END_ROD
    EndRod = 208,
    //% blockIdentity="blocks.block" enumval=213 block="マグマブロック"
    //% jres alias=MAGMA_BLOCK
    MagmaBlock = 213,
    //% blockIdentity="blocks.block" enumval=214 block="ネザーウォートブロック"
    //% jres alias=NETHER_WART_BLOCK
    NetherWartBlock = 214,
    //% blockIdentity="blocks.block" enumval=215 block="赤(あか)いネザーレンガ"
    //% jres alias=RED_NETHER_BRICK
    RedNetherBrick = 215,
    //% blockIdentity="blocks.block" enumval=216 block="骨(ほね)ブロック"
    //% jres alias=BONE_BLOCK
    BoneBlock = 216,
    //% blockIdentity="blocks.block" enumval=218 block="白色(しろいろ)のシュルカーボックス"
    //% jres alias=WHITE_SHULKER_BOX
    WhiteShulkerBox = 218,
    //% blockIdentity="blocks.block" enumval=65754 block="橙色(だいだいいろ)のシュルカーボックス"
    //% jres alias=ORANGE_SHULKER_BOX
    OrangeShulkerBox = 65754,
    //% blockIdentity="blocks.block" enumval=131290 block="赤紫色(あかむらさきいろ)のシュルカーボックス"
    //% jres alias=MAGENTA_SHULKER_BOX
    MagentaShulkerBox = 131290,
    //% blockIdentity="blocks.block" enumval=196826 block="空色(そらいろ)のシュルカーボックス"
    //% jres alias=LIGHT_BLUE_SHULKER_BOX
    LightBlueShulkerBox = 196826,
    //% blockIdentity="blocks.block" enumval=262362 block="黄色(きいろ)のシュルカーボックス"
    //% jres alias=YELLOW_SHULKER_BOX
    YellowShulkerBox = 262362,
    //% blockIdentity="blocks.block" enumval=327898 block="黄緑色(おうりょくしょく)のシュルカーボックス"
    //% jres alias=LIME_SHULKER_BOX
    LimeShulkerBox = 327898,
    //% blockIdentity="blocks.block" enumval=393434 block="桃色(ももいろ)のシュルカーボックス"
    //% jres alias=PINK_SHULKER_BOX
    PinkShulkerBox = 393434,
    //% blockIdentity="blocks.block" enumval=458970 block="灰色(はいいろ)のシュルカーボックス"
    //% jres alias=GRAY_SHULKER_BOX
    GrayShulkerBox = 458970,
    //% blockIdentity="blocks.block" enumval=524506 block="薄灰色(うすはいいろ)のシュルカー ボックス"
    //% jres alias=SILVER_SHULKER_BOX
    SilverShulkerBox = 524506,
    //% blockIdentity="blocks.block" enumval=590042 block="青緑色(あおみどりいろ)のシュルカーボックス"
    //% jres alias=CYAN_SHULKER_BOX
    CyanShulkerBox = 590042,
    //% blockIdentity="blocks.block" enumval=655578 block="紫色(むらさきいろ)のシュルカーボックス"
    //% jres alias=PURPLE_SHULKER_BOX
    PurpleShulkerBox = 655578,
    //% blockIdentity="blocks.block" enumval=721114 block="青色(あおいろ)のシュルカーボックス"
    //% jres alias=BLUE_SHULKER_BOX
    BlueShulkerBox = 721114,
    //% blockIdentity="blocks.block" enumval=786650 block="茶色(ちゃいろ)のシュルカーボックス"
    //% jres alias=BROWN_SHULKER_BOX
    BrownShulkerBox = 786650,
    //% blockIdentity="blocks.block" enumval=852186 block="緑色(みどりいろ)のシュルカーボックス"
    //% jres alias=GREEN_SHULKER_BOX
    GreenShulkerBox = 852186,
    //% blockIdentity="blocks.block" enumval=917722 block="赤色(あかいろ)のシュルカーボックス"
    //% jres alias=RED_SHULKER_BOX
    RedShulkerBox = 917722,
    //% blockIdentity="blocks.block" enumval=983258 block="黒色(こくしょく)のシュルカーボックス"
    //% jres alias=BLACK_SHULKER_BOX
    BlackShulkerBox = 983258,
    //% blockIdentity="blocks.block" enumval=219 block="赤紫色(あかむらさきいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=PURPLE_GLAZED_TERRACOTTA
    PurpleGlazedTerracotta = 219,
    //% blockIdentity="blocks.block" enumval=220 block="白色(しろいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=WHITE_GLAZED_TERRACOTTA
    WhiteGlazedTerracotta = 220,
    //% blockIdentity="blocks.block" enumval=221 block="橙色(だいだいいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=ORANGE_GLAZED_TERRACOTTA
    OrangeGlazedTerracotta = 221,
    //% blockIdentity="blocks.block" enumval=222 block="赤紫色(あかむらさきいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=MAGENTA_GLAZED_TERRACOTTA
    MagentaGlazedTerracotta = 222,
    //% blockIdentity="blocks.block" enumval=223 block="空色(そらいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=LIGHT_BLUE_GLAZED_TERRACOTTA
    LightBlueGlazedTerracotta = 223,
    //% blockIdentity="blocks.block" enumval=224 block="黄色(きいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=YELLOW_GLAZED_TERRACOTTA
    YellowGlazedTerracotta = 224,
    //% blockIdentity="blocks.block" enumval=225 block="黄緑色(おうりょくしょく)の彩釉(さいゆう)テラコッタ"
    //% jres alias=LIME_GLAZED_TERRACOTTA
    LimeGlazedTerracotta = 225,
    //% blockIdentity="blocks.block" enumval=226 block="桃色(ももいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=PINK_GLAZED_TERRACOTTA
    PinkGlazedTerracotta = 226,
    //% blockIdentity="blocks.block" enumval=227 block="灰色(はいいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=GRAY_GLAZED_TERRACOTTA
    GrayGlazedTerracotta = 227,
    //% blockIdentity="blocks.block" enumval=228 block="薄灰色(うすはいいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=LIGHT_GRAY_GLAZED_TERRACOTTA
    LightGrayGlazedTerracotta = 228,
    //% blockIdentity="blocks.block" enumval=229 block="青緑色(あおみどりいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=CYAN_GLAZED_TERRACOTTA
    CyanGlazedTerracotta = 229,
    //% blockIdentity="blocks.block" enumval=231 block="青色(あおいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=BLUE_GLAZED_TERRACOTTA
    BlueGlazedTerracotta = 231,
    //% blockIdentity="blocks.block" enumval=232 block="茶色(ちゃいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=BROWN_GLAZED_TERRACOTTA
    BrownGlazedTerracotta = 232,
    //% blockIdentity="blocks.block" enumval=233 block="緑色(みどりいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=GREEN_GLAZED_TERRACOTTA
    GreenGlazedTerracotta = 233,
    //% blockIdentity="blocks.block" enumval=234 block="赤色(あかいろ)の彩釉(さいゆう)テラコッタ"
    //% jres alias=RED_GLAZED_TERRACOTTA
    RedGlazedTerracotta = 234,
    //% blockIdentity="blocks.block" enumval=235 block="黒色(こくしょく)の彩釉(さいゆう)テラコッタ"
    //% jres alias=BLACK_GLAZED_TERRACOTTA
    BlackGlazedTerracotta = 235,
    //% blockIdentity="blocks.block" enumval=236 block="白色(しろいろ)のコンクリート"
    //% jres alias=WHITE_CONCRETE
    WhiteConcrete = 236,
    //% blockIdentity="blocks.block" enumval=65772 block="橙色(だいだいいろ)のコンクリート"
    //% jres alias=ORANGE_CONCRETE
    OrangeConcrete = 65772,
    //% blockIdentity="blocks.block" enumval=131308 block="赤紫色(あかむらさきいろ)のコンクリート"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = 131308,
    //% blockIdentity="blocks.block" enumval=196844 block="空色(そらいろ)のコンクリート"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = 196844,
    //% blockIdentity="blocks.block" enumval=262380 block="黄色(きいろ)のコンクリート"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380,
    //% blockIdentity="blocks.block" enumval=327916 block="黄緑色(おうりょくしょく)のコンクリート"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = 327916,
    //% blockIdentity="blocks.block" enumval=393452 block="桃色(ももいろ)のコンクリート"
    //% jres alias=PINK_CONCRETE
    PinkConcrete = 393452,
    //% blockIdentity="blocks.block" enumval=458988 block="灰色(はいいろ)のコンクリート"
    //% jres alias=GRAY_CONCRETE
    GrayConcrete = 458988,
    //% blockIdentity="blocks.block" enumval=524524 block="薄灰色(うすはいいろ)のコンクリート"
    //% jres alias=LIGHT_GRAY_CONCRETE
    LightGrayConcrete = 524524,
    //% blockIdentity="blocks.block" enumval=590060 block="青緑色(あおみどりいろ)のコンクリート"
    //% jres alias=CYAN_CONCRETE
    CyanConcrete = 590060,
    //% blockIdentity="blocks.block" enumval=655596 block="紫色(むらさきいろ)のコンクリート"
    //% jres alias=PURPLE_CONCRETE
    PurpleConcrete = 655596,
    //% blockIdentity="blocks.block" enumval=721132 block="青色(あおいろ)のコンクリート"
    //% jres alias=BLUE_CONCRETE
    BlueConcrete = 721132,
    //% blockIdentity="blocks.block" enumval=786668 block="茶色(ちゃいろ)のコンクリート"
    //% jres alias=BROWN_CONCRETE
    BrownConcrete = 786668,
    //% blockIdentity="blocks.block" enumval=852204 block="緑色(みどりいろ)のコンクリート"
    //% jres alias=GREEN_CONCRETE
    GreenConcrete = 852204,
    //% blockIdentity="blocks.block" enumval=917740 block="赤色(あかいろ)のコンクリート"
    //% jres alias=RED_CONCRETE
    RedConcrete = 917740,
    //% blockIdentity="blocks.block" enumval=983276 block="黒色(こくしょく)のコンクリート"
    //% jres alias=BLACK_CONCRETE
    BlackConcrete = 983276,
    //% blockIdentity="blocks.block" enumval=237 block="白色(しろいろ)のコンクリートパウダー"
    //% jres alias=WHITE_CONCRETE_POWDER
    WhiteConcretePowder = 237,
    //% blockIdentity="blocks.block" enumval=65773 block="橙色(だいだいいろ)のコンクリートパウダー"
    //% jres alias=ORANGE_CONCRETE_POWDER
    OrangeConcretePowder = 65773,
    //% blockIdentity="blocks.block" enumval=131309 block="赤紫色(あかむらさきいろ)のコンクリートパウダー"
    //% jres alias=MAGENTA_CONCRETE_POWDER
    MagentaConcretePowder = 131309,
    //% blockIdentity="blocks.block" enumval=196845 block="空色(そらいろ)のコンクリートパウダー"
    //% jres alias=LIGHT_BLUE_CONCRETE_POWDER
    LightBlueConcretePowder = 196845,
    //% blockIdentity="blocks.block" enumval=262381 block="黄色(きいろ)のコンクリートパウダー"
    //% jres alias=YELLOW_CONCRETE_POWDER
    YellowConcretePowder = 262381,
    //% blockIdentity="blocks.block" enumval=327917 block="黄緑色(おうりょくしょく)のコンクリートパウダー"
    //% jres alias=LIME_CONCRETE_POWDER
    LimeConcretePowder = 327917,
    //% blockIdentity="blocks.block" enumval=393453 block="桃色(ももいろ)のコンクリートパウダー"
    //% jres alias=PINK_CONCRETE_POWDER
    PinkConcretePowder = 393453,
    //% blockIdentity="blocks.block" enumval=458989 block="灰色(はいいろ)のコンクリートパウダー"
    //% jres alias=GRAY_CONCRETE_POWDER
    GrayConcretePowder = 458989,
    //% blockIdentity="blocks.block" enumval=524525 block="薄灰色(うすはいいろ)のコンクリートパウダー"
    //% jres alias=LIGHT_GRAY_CONCRETE_POWDER
    LightGrayConcretePowder = 524525,
    //% blockIdentity="blocks.block" enumval=590061 block="青緑色(あおみどりいろ)のコンクリートパウダー"
    //% jres alias=CYAN_CONCRETE_POWDER
    CyanConcretePowder = 590061,
    //% blockIdentity="blocks.block" enumval=655597 block="紫色(むらさきいろ)のコンクリートパウダー"
    //% jres alias=PURPLE_CONCRETE_POWDER
    PurpleConcretePowder = 655597,
    //% blockIdentity="blocks.block" enumval=721133 block="青色(あおいろ)のコンクリートパウダー"
    //% jres alias=BLUE_CONCRETE_POWDER
    BlueConcretePowder = 721133,
    //% blockIdentity="blocks.block" enumval=786669 block="茶色(ちゃいろ)のコンクリートパウダー"
    //% jres alias=BROWN_CONCRETE_POWDER
    BrownConcretePowder = 786669,
    //% blockIdentity="blocks.block" enumval=852205 block="緑色(みどりいろ)のコンクリートパウダー"
    //% jres alias=GREEN_CONCRETE_POWDER
    GreenConcretePowder = 852205,
    //% blockIdentity="blocks.block" enumval=917741 block="赤色(あかいろ)のコンクリートパウダー"
    //% jres alias=RED_CONCRETE_POWDER
    RedConcretePowder = 917741,
    //% blockIdentity="blocks.block" enumval=983277 block="黒色(こくしょく)のコンクリートパウダー"
    //% jres alias=BLACK_CONCRETE_POWDER
    BlackConcretePowder = 983277,
    //% blockIdentity="blocks.block" enumval=240 block="コーラスプラント"
    //% jres alias=CHORUS_PLANT
    ChorusPlant = 240,
    //% blockIdentity="blocks.block" enumval=241 block="白色(しろいろ)の色付(いろづ)きガラス"
    //% jres alias=WHITE_STAINED_GLASS
    WhiteStainedGlass = 241,
    //% blockIdentity="blocks.block" enumval=65777 block="橙色(だいだいいろ)の色付(いろづ)きガラス"
    //% jres alias=ORANGE_STAINED_GLASS
    OrangeStainedGlass = 65777,
    //% blockIdentity="blocks.block" enumval=131313 block="赤紫色(あかむらさきいろ)の色付(いろづ)きガラス"
    //% jres alias=MAGENTA_STAINED_GLASS
    MagentaStainedGlass = 131313,
    //% blockIdentity="blocks.block" enumval=196849 block="空色(そらいろ)の色付(いろづ)きガラス"
    //% jres alias=LIGHT_BLUE_STAINED_GLASS
    LightBlueStainedGlass = 196849,
    //% blockIdentity="blocks.block" enumval=262385 block="黄色(きいろ)の色付(いろづ)きガラス"
    //% jres alias=YELLOW_STAINED_GLASS
    YellowStainedGlass = 262385,
    //% blockIdentity="blocks.block" enumval=327921 block="黄緑色(おうりょくしょく)の色付(いろづ)きガラス"
    //% jres alias=LIME_STAINED_GLASS
    LimeStainedGlass = 327921,
    //% blockIdentity="blocks.block" enumval=393457 block="桃色(ももいろ)の色付(いろづ)きガラス"
    //% jres alias=PINK_STAINED_GLASS
    PinkStainedGlass = 393457,
    //% blockIdentity="blocks.block" enumval=458993 block="灰色(はいいろ)の色付(いろづ)きガラス"
    //% jres alias=GRAY_STAINED_GLASS
    GrayStainedGlass = 458993,
    //% blockIdentity="blocks.block" enumval=524529 block="薄灰色(うすはいいろ)の色付(いろづ)きガラス"
    //% jres alias=LIGHT_GRAY_STAINED_GLASS
    LightGrayStainedGlass = 524529,
    //% blockIdentity="blocks.block" enumval=590065 block="青緑色(あおみどりいろ)の色付(いろづ)きガラス"
    //% jres alias=CYAN_STAINED_GLASS
    CyanStainedGlass = 590065,
    //% blockIdentity="blocks.block" enumval=655601 block="紫色(むらさきいろ)の色付(いろづ)きガラス"
    //% jres alias=PURPLE_STAINED_GLASS
    PurpleStainedGlass = 655601,
    //% blockIdentity="blocks.block" enumval=721137 block="青色(あおいろ)の色付(いろづ)きガラス"
    //% jres alias=BLUE_STAINED_GLASS
    BlueStainedGlass = 721137,
    //% blockIdentity="blocks.block" enumval=786673 block="茶色(ちゃいろ)の色付(いろづ)きガラス"
    //% jres alias=BROWN_STAINED_GLASS
    BrownStainedGlass = 786673,
    //% blockIdentity="blocks.block" enumval=852209 block="緑色(みどりいろ)の色付(いろづ)きガラス"
    //% jres alias=GREEN_STAINED_GLASS
    GreenStainedGlass = 852209,
    //% blockIdentity="blocks.block" enumval=917745 block="赤色(あかいろ)の色付(いろづ)きガラス"
    //% jres alias=RED_STAINED_GLASS
    RedStainedGlass = 917745,
    //% blockIdentity="blocks.block" enumval=983281 block="黒色(こくしょく)の色付(いろづ)きガラス"
    //% jres alias=BLACK_STAINED_GLASS
    BlackStainedGlass = 983281,
    //% blockIdentity="blocks.block" enumval=243 block="ポドゾル"
    //% jres alias=PODZOL
    Podzol = 243,
    //% blockIdentity="blocks.block" enumval=244 block="ビートルート"
    //% jres alias=BEETROOT
    Beetroot = 244,
    //% blockIdentity="blocks.block" enumval=245 block="石切(いしきり)台(だい)"
    //% jres alias=STONECUTTER
    Stonecutter = 245,
    //% blockIdentity="blocks.block" enumval=251 block="オブザーバー"
    //% jres alias=OBSERVER
    Observer = 251,
    //% blockIdentity="blocks.block" enumval=252 block="ストラクチャーブロック"
    //% jres alias=STRUCTURE_BLOCK
    StructureBlock = 252,
    //% blockIdentity="blocks.block" enumval=513 block="プリズマリンの階段(かいだん)"
    //% jres alias=PRISMARINE_STAIRS
    PrismarineStairs = 513,
    //% blockIdentity="blocks.block" enumval=514 block="ダークプリズマリンの階段(かいだん)"
    //% jres alias=DARK_PRISMARINE_STAIRS
    DarkPrismarineStairs = 514,
    //% blockIdentity="blocks.block" enumval=515 block="プリズマリンレンガの階段(かいだん)"
    //% jres alias=PRISMARINE_BRICK_STAIRS
    PrismarineBrickStairs = 515,
    //% blockIdentity="blocks.block" enumval=516 block="樹皮(じゅひ)を剥(は)いだトウヒの木(き)"
    //% jres alias=STRIPPED_SPRUCE_WOOD
    StrippedSpruceWood = 516,
    //% blockIdentity="blocks.block" enumval=517 block="樹皮(じゅひ)を剥(は)いだシラカバの木(き)"
    //% jres alias=STRIPPED_BIRCH_WOOD
    StrippedBirchWood = 517,
    //% blockIdentity="blocks.block" enumval=518 block="樹皮(じゅひ)を剥(は)いだジャングルの木(き)"
    //% jres alias=STRIPPED_JUNGLE_WOOD
    StrippedJungleWood = 518,
    //% blockIdentity="blocks.block" enumval=519 block="樹皮(じゅひ)を剥(は)いだアカシアの木(き)"
    //% jres alias=STRIPPED_ACACIA_WOOD
    StrippedAcaciaWood = 519,
    //% blockIdentity="blocks.block" enumval=520 block="樹皮(じゅひ)を剥(は)いだダークオークの木(き)"
    //% jres alias=STRIPPED_DARK_OAK_WOOD
    StrippedDarkOakWood = 520,
    //% blockIdentity="blocks.block" enumval=521 block="樹皮(じゅひ)を剥(は)いだオークの木(き)"
    //% jres alias=STRIPPED_OAK_WOOD
    StrippedOakWood = 521,
    //% blockIdentity="blocks.block" enumval=676 block="足場(あしば)"
    //% jres alias=SCAFFOLDING
    Scaffolding = 676,
    //% blockIdentity="blocks.block" enumval=522 block="青(あお)氷(こおり)"
    //% jres alias=BLUE_ICE
    BlueIce = 522,
    //% blockIdentity="blocks.block" enumval=641 block="海草(かいそう)"
    //% jres alias=SEAGRASS
    Seagrass = 641,
    //% blockIdentity="blocks.block" enumval=642 block="クダサンゴ"
    //% jres alias=TUBE_CORAL
    TubeCoral = 642,
    //% blockIdentity="blocks.block" enumval=66178 block="ノウサンゴ"
    //% jres alias=BRAIN_CORAL
    BrainCoral = 66178,
    //% blockIdentity="blocks.block" enumval=131714 block="ミズタマサンゴ"
    //% jres alias=BUBBLE_CORAL
    BubbleCoral = 131714,
    //% blockIdentity="blocks.block" enumval=197250 block="ミレポラサンゴ"
    //% jres alias=FIRE_CORAL
    FireCoral = 197250,
    //% blockIdentity="blocks.block" enumval=262786 block="シカツノサンゴ"
    //% jres alias=HORN_CORAL
    HornCoral = 262786,
    //% blockIdentity="blocks.block" enumval=643 block="クダサンゴブロック"
    //% jres alias=TUBE_CORAL_BLOCK
    TubeCoralBlock = 643,
    //% blockIdentity="blocks.block" enumval=66179 block="ノウサンゴブロック"
    //% jres alias=BRAIN_CORAL_BLOCK
    BrainCoralBlock = 66179,
    //% blockIdentity="blocks.block" enumval=131715 block="ミズタマサンゴブロック"
    //% jres alias=BUBBLE_CORAL_BLOCK
    BubbleCoralBlock = 131715,
    //% blockIdentity="blocks.block" enumval=197251 block="ミレポラサンゴブロック"
    //% jres alias=FIRE_CORAL_BLOCK
    FireCoralBlock = 197251,
    //% blockIdentity="blocks.block" enumval=262787 block="シカツノサンゴブロック"
    //% jres alias=HORN_CORAL_BLOCK
    HornCoralBlock = 262787,
    //% blockIdentity="blocks.block" enumval=328323 block="死(し)んだクダサンゴブロック"
    //% jres alias=DEAD_TUBE_CORAL_BLOCK
    DeadTubeCoralBlock = 328323,
    //% blockIdentity="blocks.block" enumval=393859 block="死(し)んだノウサンゴブロック"
    //% jres alias=DEAD_BRAIN_CORAL_BLOCK
    DeadBrainCoralBlock = 393859,
    //% blockIdentity="blocks.block" enumval=459395 block="死(し)んだミズタマサンゴブロック"
    //% jres alias=DEAD_BUBBLE_CORAL_BLOCK
    DeadBubbleCoralBlock = 459395,
    //% blockIdentity="blocks.block" enumval=721539 block="死(し)んだミレポラサンゴブロック"
    //% jres alias=DEAD_FIRE_CORAL_BLOCK
    DeadFireCoralBlock = 721539,
    //% blockIdentity="blocks.block" enumval=787075 block="死(し)んだシカツノサンゴブロック"
    //% jres alias=DEAD_HORN_CORAL_BLOCK
    DeadHornCoralBlock = 787075,
    //% blockIdentity="blocks.block" enumval=644 block="クダウチワサンゴ"
    //% jres alias=TUBE_CORAL_FAN
    TubeCoralFan = 644,
    //% blockIdentity="blocks.block" enumval=66180 block="ノウウチワサンゴ"
    //% jres alias=BRAIN_CORAL_FAN
    BrainCoralFan = 66180,
    //% blockIdentity="blocks.block" enumval=131716 block="ミズタマウチワサンゴ"
    //% jres alias=BUBBLE_CORAL_FAN
    BubbleCoralFan = 131716,
    //% blockIdentity="blocks.block" enumval=197252 block="ミレポラウチワサンゴ"
    //% jres alias=FIRE_CORAL_FAN
    FireCoralFan = 197252,
    //% blockIdentity="blocks.block" enumval=262788 block="シカツノウチワサンゴ"
    //% jres alias=HORN_CORAL_FAN
    HornCoralFan = 262788,
    //% blockIdentity="blocks.block" enumval=645 block="死(し)んだクダウチワサンゴ"
    //% jres alias=DEAD_TUBE_CORAL_FAN
    DeadTubeCoralFan = 645,
    //% blockIdentity="blocks.block" enumval=66181 block="死(し)んだノウウチワサンゴ"
    //% jres alias=DEAD_BRAIN_CORAL_FAN
    DeadBrainCoralFan = 66181,
    //% blockIdentity="blocks.block" enumval=131717 block="死(し)んだミズタマウチワサンゴ"
    //% jres alias=DEAD_BUBBLE_CORAL_FAN
    DeadBubbleCoralFan = 131717,
    //% blockIdentity="blocks.block" enumval=197253 block="死(し)んだミレポラウチワサンゴ"
    //% jres alias=DEAD_FIRE_CORAL_FAN
    DeadFireCoralFan = 197253,
    //% blockIdentity="blocks.block" enumval=262789 block="死(し)んだシカツノウチワサンゴ"
    //% jres alias=DEAD_HORN_CORAL_FAN
    DeadHornCoralFan = 262789,
    //% blockIdentity="blocks.block" enumval=649 block="コンブ"
    //% jres alias=KELP
    Kelp = 649,
    //% blockIdentity="blocks.block" enumval=650 block="乾燥(かんそう)した昆布(こんぶ)ブロック"
    //% jres alias=DRIED_KELP_BLOCK
    DriedKelpBlock = 650,
    //% blockIdentity="blocks.block" enumval=651 block="アカシアのボタン"
    //% jres alias=ACACIA_BUTTON
    AcaciaButton = 651,
    //% blockIdentity="blocks.block" enumval=652 block="シラカバのボタン"
    //% jres alias=BIRCH_BUTTON
    BirchButton = 652,
    //% blockIdentity="blocks.block" enumval=653 block="ダークオークのボタン"
    //% jres alias=DARK_OAK_BUTTON
    DarkOakButton = 653,
    //% blockIdentity="blocks.block" enumval=654 block="ジャングルのボタン"
    //% jres alias=JUNGLE_BUTTON
    JungleButton = 654,
    //% blockIdentity="blocks.block" enumval=655 block="トウヒのボタン"
    //% jres alias=SPRUCE_BUTTON
    SpruceButton = 655,
    //% blockIdentity="blocks.block" enumval=656 block="アカシアのトラップドア"
    //% jres alias=ACACIA_TRAPDOOR
    AcaciaTrapdoor = 656,
    //% blockIdentity="blocks.block" enumval=657 block="シラカバのトラップドア"
    //% jres alias=BIRCH_TRAPDOOR
    BirchTrapdoor = 657,
    //% blockIdentity="blocks.block" enumval=658 block="ダークオークのトラップドア"
    //% jres alias=DARK_OAK_TRAPDOOR
    DarkOakTrapdoor = 658,
    //% blockIdentity="blocks.block" enumval=659 block="ジャングルのトラップドア"
    //% jres alias=JUNGLE_TRAPDOOR
    JungleTrapdoor = 659,
    //% blockIdentity="blocks.block" enumval=660 block="トウヒのトラップドア"
    //% jres alias=SPRUCE_TRAPDOOR
    SpruceTrapdoor = 660,
    //% blockIdentity="blocks.block" enumval=661 block="アカシアの感圧(かんあつ)板(ばん)"
    //% jres alias=ACACIA_PRESSURE_PLATE
    AcaciaPressurePlate = 661,
    //% blockIdentity="blocks.block" enumval=662 block="シラカバの感圧(かんあつ)板(ばん)"
    //% jres alias=BIRCH_PRESSURE_PLATE
    BirchPressurePlate = 662,
    //% blockIdentity="blocks.block" enumval=663 block="ダークオークの感圧(かんあつ)板(ばん)"
    //% jres alias=DARK_OAK_PRESSURE_PLATE
    DarkOakPressurePlate = 663,
    //% blockIdentity="blocks.block" enumval=664 block="ジャングルの感圧(かんあつ)板(ばん)"
    //% jres alias=JUNGLE_PRESSURE_PLATE
    JunglePressurePlate = 664,
    //% blockIdentity="blocks.block" enumval=665 block="トウヒの感圧(かんあつ)板(ばん)"
    //% jres alias=SPRUCE_PRESSURE_PLATE
    SprucePressurePlate = 665,
    //% blockIdentity="blocks.block" enumval=666 block="くり抜(ぬ)かれたカボチャ"
    //% jres alias=CARVED_PUMPKIN
    CarvedPumpkin = 666,
    //% blockIdentity="blocks.block" enumval=667 block="シーピクルス"
    //% jres alias=SEA_PICKLE
    SeaPickle = 667,
    //% blockIdentity="blocks.block" enumval=711 block="製図台(せいずだい)"
    //% jres alias=CARTOGRAPHY_TABLE
    CartographyTable = 711,
    //% blockIdentity="blocks.block" enumval=712 block="矢細工(やさいく)台(だい)"
    //% jres alias=FLETCHING_TABLE
    FletchingTable = 712,
    //% blockIdentity="blocks.block" enumval=707 block="溶鉱炉(ようこうろ)"
    //% jres alias=BLAST_FURNACE
    BlastFurnace = 707,
    //% blockIdentity="blocks.block" enumval=708 block="ストーンカッター ブロック"
    //% jres alias=STONECUTTER_BLOCK
    StonecutterBlock = 708,
    //% blockIdentity="blocks.block" enumval=709 block="燻製器(くんせいき)"
    //% jres alias=SMOKER
    Smoker = 709,
    //% blockIdentity="blocks.block" enumval=713 block="鍛冶(かじ)台(だい)"
    //% jres alias=SMITHING_TABLE
    SmithingTable = 713,
    //% blockIdentity="blocks.block" enumval=714 block="樽(たる)"
    //% jres alias=BARREL
    Barrel = 714,
    //% blockIdentity="blocks.block" enumval=715 block="機織(はたお)り機(き)"
    //% jres alias=LOOM
    Loom = 715,
    //% blockIdentity="blocks.block" enumval=717 block="鐘(かね)"
    //% jres alias=BELL
    Bell = 717,
    //% blockIdentity="blocks.block" enumval=720 block="焚(た)き火(び)"
    //% jres alias=CAMPFIRE
    Campfire = 720,
    //% blockIdentity="blocks.block" enumval=724 block="コンポスター"
    //% jres alias=COMPOSTER
    Composter = 724,
    //% blockIdentity="blocks.block" enumval=729 block="ミツバチの巣(す)"
    //% jres alias=BEE_NEST
    BeeNest = 729,
    //% blockIdentity="blocks.block" enumval=730 block="養蜂(ようほう)箱(はこ)"
    //% jres alias=BEEHIVE
    Beehive = 730,
    //% blockIdentity="blocks.block" enumval=731 block="ハチミツブロック"
    //% jres alias=HONEY_BLOCK
    HoneyBlock = 731,
    //% blockIdentity="blocks.block" enumval=732 block="ハニカムブロック"
    //% jres alias=HONEYCOMB_BLOCK
    HoneycombBlock = 732,
    //% blockIdentity="blocks.block" enumval=738 block="真紅(しんく)の板材(いたざい)"
    //% jres alias=CRIMSON_PLANKS
    CrimsonPlanks = 738,
    //% blockIdentity="blocks.block" enumval=739 block="歪(ゆが)んだ板材(いたざい)"
    //% jres alias=WARPED_PLANKS
    WarpedPlanks = 739,
    //% blockIdentity="blocks.block" enumval=740 block="ブラックストーンの塀(へい)"
    //% jres alias=BLACKSTONE_WALL
    BlackstoneWall = 740,
    //% blockIdentity="blocks.block" enumval=741 block="真紅(しんく)のフェンス"
    //% jres alias=CRIMSON_FENCE
    CrimsonFence = 741,
    //% blockIdentity="blocks.block" enumval=742 block="歪(ゆが)んだフェンス"
    //% jres alias=WARPED_FENCE
    WarpedFence = 742,
    //% blockIdentity="blocks.block" enumval=743 block="真紅(しんく)のフェンスゲート"
    //% jres alias=CRIMSON_FENCE_GATE
    CrimsonFenceGate = 743,
    //% blockIdentity="blocks.block" enumval=744 block="歪(ゆが)んだフェンスゲート"
    //% jres alias=WARPED_FENCE_GATE
    WarpedFenceGate = 744,
    //% blockIdentity="blocks.block" enumval=745 block="鎖(くさり)"
    //% jres alias=CHAIN
    Chain = 745,
    //% blockIdentity="blocks.block" enumval=746 block="小(ちい)さなドリップリーフ"
    //% jres alias=SMALL_DRIPLEAF
    SmallDripleaf = 746,
    //% blockIdentity="blocks.block" enumval=747 block="真紅(しんく)の階段(かいだん)"
    //% jres alias=CRIMSON_STAIRS
    CrimsonStairs = 747,
    //% blockIdentity="blocks.block" enumval=748 block="歪(ゆが)んだ階段(かいだん)"
    //% jres alias=WARPED_STAIRS
    WarpedStairs = 748,
    //% blockIdentity="blocks.block" enumval=749 block="ブラックストーンの階段(かいだん)"
    //% jres alias=BLACKSTONE_STAIRS
    BlackstoneStairs = 749,
    //% blockIdentity="blocks.block" enumval=750 block="ヒカリゴケ"
    //% jres alias=GLOW_LICHEN
    GlowLichen = 750,
    //% blockIdentity="blocks.block" enumval=751 block="真紅(しんく)のボタン"
    //% jres alias=CRIMSON_BUTTON
    CrimsonButton = 751,
    //% blockIdentity="blocks.block" enumval=752 block="古代(こだい)の残骸(ざんがい)"
    //% jres alias=ANCIENT_DEBRIS
    AncientDebris = 752,
    //% blockIdentity="blocks.block" enumval=753 block="リスポーンアンカー"
    //% jres alias=RESPAWN_ANCHOR
    RespawnAnchor = 753,
    //% blockIdentity="blocks.block" enumval=754 block="遮光(しゃこう)ガラス"
    //% jres alias=TINTED_GLASS
    TintedGlass = 754,
    //% blockIdentity="blocks.block" enumval=755 block="ソウルソイル"
    //% jres alias=SOUL_SOIL
    SoulSoil = 755,
    //% blockIdentity="blocks.block" enumval=756 block="真紅(しんく)のハーフブロック"
    //% jres alias=CRIMSON_SLAB
    CrimsonSlab = 756,
    //% blockIdentity="blocks.block" enumval=757 block="歪(ゆが)んだハーフブロック"
    //% jres alias=WARPED_SLAB
    WarpedSlab = 757,
    //% blockIdentity="blocks.block" enumval=758 block="ブラックストーンのハーフブロック"
    //% jres alias=BLACKSTONE_SLAB
    BlackstoneSlab = 758,
    //% blockIdentity="blocks.block" enumval=759 block="模様(もよう)入(い)りのネザーレンガ"
    //% jres alias=CHISELED_NETHER_BRICKS
    ChiseledNetherBricks = 759,
    //% blockIdentity="blocks.block" enumval=760 block="ひび割(わ)れたネザーレンガ"
    //% jres alias=CRACKED_NETHER_BRICKS
    CrackedNetherBricks = 760,
    //% blockIdentity="blocks.block" enumval=761 block="銅(どう)ブロック"
    //% jres alias=BLOCK_OF_COPPER
    BlockOfCopper = 761,
    //% blockIdentity="blocks.block" enumval=762 block="風化(ふうか)した銅(どう)"
    //% jres alias=EXPOSED_COPPER
    ExposedCopper = 762,
    //% blockIdentity="blocks.block" enumval=763 block="錆(さ)びた銅(どう)"
    //% jres alias=WEATHERED_COPPER
    WeatheredCopper = 763,
    //% blockIdentity="blocks.block" enumval=764 block="酸化(さんか)した銅(どう)"
    //% jres alias=OXIDIZED_COPPER
    OxidizedCopper = 764,
    //% blockIdentity="blocks.block" enumval=765 block="ネザライトブロック"
    //% jres alias=BLOCK_OF_NETHERITE
    BlockOfNetherite = 765,
    //% blockIdentity="blocks.block" enumval=766 block="シュルームライト"
    //% jres alias=SHROOMLIGHT
    Shroomlight = 766,
    //% blockIdentity="blocks.block" enumval=767 block="真紅(しんく)のドア"
    //% jres alias=CRIMSON_DOOR
    CrimsonDoor = 767,
    //% blockIdentity="blocks.block" enumval=768 block="玄武岩(げんぶがん)"
    //% jres alias=BASALT
    Basalt = 768,
    //% blockIdentity="blocks.block" enumval=769 block="磨(みが)かれた玄武岩(げんぶがん)"
    //% jres alias=POLISHED_BASALT
    PolishedBasalt = 769,
    //% blockIdentity="blocks.block" enumval=770 block="ブラックストーン"
    //% jres alias=BLACKSTONE
    Blackstone = 770,
    //% blockIdentity="blocks.block" enumval=771 block="磨(みが)かれたブラックストーン"
    //% jres alias=POLISHED_BLACKSTONE
    PolishedBlackstone = 771,
    //% blockIdentity="blocks.block" enumval=772 block="ツツジの葉(は)"
    //% jres alias=AZALEA_LEAVES
    AzaleaLeaves = 772,
    //% blockIdentity="blocks.block" enumval=773 block="鍾乳石(しょうにゅうせき)"
    //% jres alias=POINTED_DRIPSTONE
    PointedDripstone = 773,
    //% blockIdentity="blocks.block" enumval=774 block="大(おお)きなドリップリーフ"
    //% jres alias=BIG_DRIPLEAF
    BigDripleaf = 774,
    //% blockIdentity="blocks.block" enumval=775 block="ツツジ"
    //% jres alias=AZALEA
    Azalea = 775,
    //% blockIdentity="blocks.block" enumval=776 block="開花(かいか)したツツジ"
    //% jres alias=FLOWERING_AZALEA
    FloweringAzalea = 776,
    //% blockIdentity="blocks.block" enumval=777 block="Amethyst Block"
    //% jres alias=AMETHYST_BLOCK
    AmethystBlock = 777,
    //% blockIdentity="blocks.block" enumval=778 block="アメジストの塊(かたまり)"
    //% jres alias=AMETHYST_CLUSTER
    AmethystCluster = 778,
    //% blockIdentity="blocks.block" enumval=779 block="泣(な)く黒曜石(こくようせき)"
    //% jres alias=CRYING_OBSIDIAN
    CryingObsidian = 779,
    //% blockIdentity="blocks.block" enumval=780 block="避雷針(ひらいしん)"
    //% jres alias=LIGHTNING_ROD
    LightningRod = 780,
    //% blockIdentity="blocks.block" enumval=781 block="リード"
    //% jres alias=LEAD
    Lead = 781,
    //% blockIdentity="blocks.block" enumval=782 block="歪(ゆが)んだボタン"
    //% jres alias=WARPED_BUTTON
    WarpedButton = 782,
    //% blockIdentity="blocks.block" enumval=783 block="真紅(しんく)の感圧(かんあつ)板(ばん)"
    //% jres alias=CRIMSON_PRESSURE_PLATE
    CrimsonPressurePlate = 783,
    //% blockIdentity="blocks.block" enumval=784 block="歪(ゆが)んだ感圧(かんあつ)板(ばん)"
    //% jres alias=WARPED_PRESSURE_PLATE
    WarpedPressurePlate = 784,
    //% blockIdentity="blocks.block" enumval=785 block="的(まと)"
    //% jres alias=TARGET
    Target = 785,
    //% blockIdentity="blocks.block" enumval=786 block="歪(ゆが)んだドア"
    //% jres alias=WARPED_DOOR
    WarpedDoor = 786,
    //% blockIdentity="blocks.block" enumval=787 block="粉雪(こなゆき)"
    //% jres alias=POWDER_SNOW
    PowderSnow = 787,
    //% blockIdentity="blocks.block" enumval=788 block="鉄(てつ)のドア"
    //% jres alias=IRON_DOOR
    IronDoor = 788,
    //% blockIdentity="blocks.block" enumval=789 block="魂(たましい)の焚(た)き火(び)"
    //% jres alias=SOUL_CAMPFIRE
    SoulCampfire = 789,
}


function toBlock(block: RubyBlock): Block {
    switch (block) {
        case RubyBlock.AcaciaButton: return Block.AcaciaButton;
        case RubyBlock.AcaciaFence: return Block.AcaciaFence;
        case RubyBlock.AcaciaFenceGate: return Block.AcaciaFenceGate;
        case RubyBlock.AcaciaLeaves: return Block.AcaciaLeaves;
        case RubyBlock.AcaciaPressurePlate: return Block.AcaciaPressurePlate;
        case RubyBlock.AcaciaSapling: return Block.AcaciaSapling;
        case RubyBlock.AcaciaTrapdoor: return Block.AcaciaTrapdoor;
        case RubyBlock.AcaciaWoodSlab: return Block.AcaciaWoodSlab;
        case RubyBlock.AcaciaWoodStairs: return Block.AcaciaWoodStairs;
        case RubyBlock.ActivatorRail: return Block.ActivatorRail;
        case RubyBlock.Air: return Block.Air;
        case RubyBlock.Allium: return Block.Allium;
        case RubyBlock.AmethystBlock: return Block.AmethystBlock;
        case RubyBlock.AmethystCluster: return Block.AmethystCluster;
        case RubyBlock.AncientDebris: return Block.AncientDebris;
        case RubyBlock.Andesite: return Block.Andesite;
        case RubyBlock.Anvil: return Block.Anvil;
        case RubyBlock.Azalea: return Block.Azalea;
        case RubyBlock.AzaleaLeaves: return Block.AzaleaLeaves;
        case RubyBlock.AzureBluet: return Block.AzureBluet;
        case RubyBlock.Bamboo: return Block.Bamboo;
        case RubyBlock.Barrel: return Block.Barrel;
        case RubyBlock.Basalt: return Block.Basalt;
        case RubyBlock.Beacon: return Block.Beacon;
        case RubyBlock.Bed: return Block.Bed;
        case RubyBlock.Bedrock: return Block.Bedrock;
        case RubyBlock.Beehive: return Block.Beehive;
        case RubyBlock.BeeNest: return Block.BeeNest;
        case RubyBlock.Beetroot: return Block.Beetroot;
        case RubyBlock.Bell: return Block.Bell;
        case RubyBlock.BigDripleaf: return Block.BigDripleaf;
        case RubyBlock.BirchButton: return Block.BirchButton;
        case RubyBlock.BirchFence: return Block.BirchFence;
        case RubyBlock.BirchFenceGate: return Block.BirchFenceGate;
        case RubyBlock.BirchPressurePlate: return Block.BirchPressurePlate;
        case RubyBlock.BirchSapling: return Block.BirchSapling;
        case RubyBlock.BirchTrapdoor: return Block.BirchTrapdoor;
        case RubyBlock.BirchWoodSlab: return Block.BirchWoodSlab;
        case RubyBlock.BirchWoodStairs: return Block.BirchWoodStairs;
        case RubyBlock.BlackCarpet: return Block.BlackCarpet;
        case RubyBlock.BlackConcrete: return Block.BlackConcrete;
        case RubyBlock.BlackConcretePowder: return Block.BlackConcretePowder;
        case RubyBlock.BlackGlazedTerracotta: return Block.BlackGlazedTerracotta;
        case RubyBlock.BlackShulkerBox: return Block.BlackShulkerBox;
        case RubyBlock.BlackStainedGlass: return Block.BlackStainedGlass;
        case RubyBlock.BlackStainedGlassPane: return Block.BlackStainedGlassPane;
        case RubyBlock.Blackstone: return Block.Blackstone;
        case RubyBlock.BlackstoneSlab: return Block.BlackstoneSlab;
        case RubyBlock.BlackstoneStairs: return Block.BlackstoneStairs;
        case RubyBlock.BlackstoneWall: return Block.BlackstoneWall;
        case RubyBlock.BlackTerracotta: return Block.BlackTerracotta;
        case RubyBlock.BlackWool: return Block.BlackWool;
        case RubyBlock.BlastFurnace: return Block.BlastFurnace;
        case RubyBlock.BlockOfCopper: return Block.BlockOfCopper;
        case RubyBlock.BlockOfNetherite: return Block.BlockOfNetherite;
        case RubyBlock.BlockOfQuartz: return Block.BlockOfQuartz;
        case RubyBlock.BlueCarpet: return Block.BlueCarpet;
        case RubyBlock.BlueConcrete: return Block.BlueConcrete;
        case RubyBlock.BlueConcretePowder: return Block.BlueConcretePowder;
        case RubyBlock.BlueGlazedTerracotta: return Block.BlueGlazedTerracotta;
        case RubyBlock.BlueIce: return Block.BlueIce;
        case RubyBlock.BlueOrchid: return Block.BlueOrchid;
        case RubyBlock.BlueShulkerBox: return Block.BlueShulkerBox;
        case RubyBlock.BlueStainedGlass: return Block.BlueStainedGlass;
        case RubyBlock.BlueStainedGlassPane: return Block.BlueStainedGlassPane;
        case RubyBlock.BlueTerracotta: return Block.BlueTerracotta;
        case RubyBlock.BlueWool: return Block.BlueWool;
        case RubyBlock.BoneBlock: return Block.BoneBlock;
        case RubyBlock.Bookshelf: return Block.Bookshelf;
        case RubyBlock.BrainCoral: return Block.BrainCoral;
        case RubyBlock.BrainCoralBlock: return Block.BrainCoralBlock;
        case RubyBlock.BrainCoralFan: return Block.BrainCoralFan;
        case RubyBlock.BrewingStand: return Block.BrewingStand;
        case RubyBlock.Bricks: return Block.Bricks;
        case RubyBlock.BricksSlab: return Block.BricksSlab;
        case RubyBlock.BrickStairs: return Block.BrickStairs;
        case RubyBlock.BrownCarpet: return Block.BrownCarpet;
        case RubyBlock.BrownConcrete: return Block.BrownConcrete;
        case RubyBlock.BrownConcretePowder: return Block.BrownConcretePowder;
        case RubyBlock.BrownGlazedTerracotta: return Block.BrownGlazedTerracotta;
        case RubyBlock.BrownMushroom: return Block.BrownMushroom;
        case RubyBlock.BrownShulkerBox: return Block.BrownShulkerBox;
        case RubyBlock.BrownStainedGlass: return Block.BrownStainedGlass;
        case RubyBlock.BrownStainedGlassPane: return Block.BrownStainedGlassPane;
        case RubyBlock.BrownTerracotta: return Block.BrownTerracotta;
        case RubyBlock.BrownWool: return Block.BrownWool;
        case RubyBlock.BubbleCoral: return Block.BubbleCoral;
        case RubyBlock.BubbleCoralBlock: return Block.BubbleCoralBlock;
        case RubyBlock.BubbleCoralFan: return Block.BubbleCoralFan;
        case RubyBlock.Cactus: return Block.Cactus;
        case RubyBlock.Cake: return Block.Cake;
        case RubyBlock.Campfire: return Block.Campfire;
        case RubyBlock.Carrots: return Block.Carrots;
        case RubyBlock.CartographyTable: return Block.CartographyTable;
        case RubyBlock.CarvedPumpkin: return Block.CarvedPumpkin;
        case RubyBlock.Cauldron: return Block.Cauldron;
        case RubyBlock.Chain: return Block.Chain;
        case RubyBlock.Chest: return Block.Chest;
        case RubyBlock.ChiseledNetherBricks: return Block.ChiseledNetherBricks;
        case RubyBlock.ChiseledQuartzBlock: return Block.ChiseledQuartzBlock;
        case RubyBlock.ChiseledRedSandstone: return Block.ChiseledRedSandstone;
        case RubyBlock.ChiseledSandstone: return Block.ChiseledSandstone;
        case RubyBlock.ChiseledStoneBrickMonsterEgg: return Block.ChiseledStoneBrickMonsterEgg;
        case RubyBlock.ChiseledStoneBricks: return Block.ChiseledStoneBricks;
        case RubyBlock.ChorusFlower: return Block.ChorusFlower;
        case RubyBlock.ChorusPlant: return Block.ChorusPlant;
        case RubyBlock.Clay: return Block.Clay;
        case RubyBlock.CoalBlock: return Block.CoalBlock;
        case RubyBlock.CoalOre: return Block.CoalOre;
        case RubyBlock.CoarseDirt: return Block.CoarseDirt;
        case RubyBlock.Cobblestone: return Block.Cobblestone;
        case RubyBlock.CobblestoneMonsterEgg: return Block.CobblestoneMonsterEgg;
        case RubyBlock.CobblestoneSlab: return Block.CobblestoneSlab;
        case RubyBlock.CobblestoneStairs: return Block.CobblestoneStairs;
        case RubyBlock.CobblestoneWall: return Block.CobblestoneWall;
        case RubyBlock.Cobweb: return Block.Cobweb;
        case RubyBlock.Cocoa: return Block.Cocoa;
        case RubyBlock.Composter: return Block.Composter;
        case RubyBlock.Cornflower: return Block.Cornflower;
        case RubyBlock.CrackedNetherBricks: return Block.CrackedNetherBricks;
        case RubyBlock.CrackedStoneBrickMonsterEgg: return Block.CrackedStoneBrickMonsterEgg;
        case RubyBlock.CrackedStoneBricks: return Block.CrackedStoneBricks;
        case RubyBlock.CraftingTable: return Block.CraftingTable;
        case RubyBlock.CrimsonButton: return Block.CrimsonButton;
        case RubyBlock.CrimsonDoor: return Block.CrimsonDoor;
        case RubyBlock.CrimsonFence: return Block.CrimsonFence;
        case RubyBlock.CrimsonFenceGate: return Block.CrimsonFenceGate;
        case RubyBlock.CrimsonPlanks: return Block.CrimsonPlanks;
        case RubyBlock.CrimsonPressurePlate: return Block.CrimsonPressurePlate;
        case RubyBlock.CrimsonSlab: return Block.CrimsonSlab;
        case RubyBlock.CrimsonStairs: return Block.CrimsonStairs;
        case RubyBlock.Crops: return Block.Crops;
        case RubyBlock.CryingObsidian: return Block.CryingObsidian;
        case RubyBlock.CyanCarpet: return Block.CyanCarpet;
        case RubyBlock.CyanConcrete: return Block.CyanConcrete;
        case RubyBlock.CyanConcretePowder: return Block.CyanConcretePowder;
        case RubyBlock.CyanGlazedTerracotta: return Block.CyanGlazedTerracotta;
        case RubyBlock.CyanShulkerBox: return Block.CyanShulkerBox;
        case RubyBlock.CyanStainedGlass: return Block.CyanStainedGlass;
        case RubyBlock.CyanStainedGlassPane: return Block.CyanStainedGlassPane;
        case RubyBlock.CyanTerracotta: return Block.CyanTerracotta;
        case RubyBlock.CyanWool: return Block.CyanWool;
        case RubyBlock.DarkOakButton: return Block.DarkOakButton;
        case RubyBlock.DarkOakFence: return Block.DarkOakFence;
        case RubyBlock.DarkOakFenceGate: return Block.DarkOakFenceGate;
        case RubyBlock.DarkOakLeaves: return Block.DarkOakLeaves;
        case RubyBlock.DarkOakPressurePlate: return Block.DarkOakPressurePlate;
        case RubyBlock.DarkOakSapling: return Block.DarkOakSapling;
        case RubyBlock.DarkOakTrapdoor: return Block.DarkOakTrapdoor;
        case RubyBlock.DarkOakWoodSlab: return Block.DarkOakWoodSlab;
        case RubyBlock.DarkOakWoodStairs: return Block.DarkOakWoodStairs;
        case RubyBlock.DarkPrismarine: return Block.DarkPrismarine;
        case RubyBlock.DarkPrismarineSlab: return Block.DarkPrismarineSlab;
        case RubyBlock.DarkPrismarineStairs: return Block.DarkPrismarineStairs;
        case RubyBlock.DaylightSensor: return Block.DaylightSensor;
        case RubyBlock.DeadBrainCoralBlock: return Block.DeadBrainCoralBlock;
        case RubyBlock.DeadBrainCoralFan: return Block.DeadBrainCoralFan;
        case RubyBlock.DeadBubbleCoralBlock: return Block.DeadBubbleCoralBlock;
        case RubyBlock.DeadBubbleCoralFan: return Block.DeadBubbleCoralFan;
        case RubyBlock.DeadBush: return Block.DeadBush;
        case RubyBlock.DeadFireCoralBlock: return Block.DeadFireCoralBlock;
        case RubyBlock.DeadFireCoralFan: return Block.DeadFireCoralFan;
        case RubyBlock.DeadHornCoralBlock: return Block.DeadHornCoralBlock;
        case RubyBlock.DeadHornCoralFan: return Block.DeadHornCoralFan;
        case RubyBlock.DeadTubeCoralBlock: return Block.DeadTubeCoralBlock;
        case RubyBlock.DeadTubeCoralFan: return Block.DeadTubeCoralFan;
        case RubyBlock.DetectorRail: return Block.DetectorRail;
        case RubyBlock.DiamondBlock: return Block.DiamondBlock;
        case RubyBlock.DiamondOre: return Block.DiamondOre;
        case RubyBlock.Diorite: return Block.Diorite;
        case RubyBlock.Dirt: return Block.Dirt;
        case RubyBlock.Dispenser: return Block.Dispenser;
        case RubyBlock.DoubleRedSandstoneSlab: return Block.DoubleRedSandstoneSlab;
        case RubyBlock.DoubleStoneSlab: return Block.DoubleStoneSlab;
        case RubyBlock.DoubleTallgrass: return Block.DoubleTallgrass;
        case RubyBlock.DoubleWoodenSlab: return Block.DoubleWoodenSlab;
        case RubyBlock.DragonEgg: return Block.DragonEgg;
        case RubyBlock.DriedKelpBlock: return Block.DriedKelpBlock;
        case RubyBlock.Dropper: return Block.Dropper;
        case RubyBlock.EmeraldBlock: return Block.EmeraldBlock;
        case RubyBlock.EmeraldOre: return Block.EmeraldOre;
        case RubyBlock.EnchantmentTable: return Block.EnchantmentTable;
        case RubyBlock.EnderChest: return Block.EnderChest;
        case RubyBlock.EndPortal: return Block.EndPortal;
        case RubyBlock.EndRod: return Block.EndRod;
        case RubyBlock.Endstone: return Block.Endstone;
        case RubyBlock.EndStoneBricks: return Block.EndStoneBricks;
        case RubyBlock.ExposedCopper: return Block.ExposedCopper;
        case RubyBlock.Farmland: return Block.Farmland;
        case RubyBlock.Fern: return Block.Fern;
        case RubyBlock.Fire: return Block.Fire;
        case RubyBlock.FireCoral: return Block.FireCoral;
        case RubyBlock.FireCoralBlock: return Block.FireCoralBlock;
        case RubyBlock.FireCoralFan: return Block.FireCoralFan;
        case RubyBlock.FletchingTable: return Block.FletchingTable;
        case RubyBlock.FloweringAzalea: return Block.FloweringAzalea;
        case RubyBlock.FlowerPot: return Block.FlowerPot;
        case RubyBlock.Frame: return Block.Frame;
        case RubyBlock.Furnace: return Block.Furnace;
        case RubyBlock.Glass: return Block.Glass;
        case RubyBlock.GlassPane: return Block.GlassPane;
        case RubyBlock.GlowLichen: return Block.GlowLichen;
        case RubyBlock.Glowstone: return Block.Glowstone;
        case RubyBlock.GoldBlock: return Block.GoldBlock;
        case RubyBlock.GoldOre: return Block.GoldOre;
        case RubyBlock.Granite: return Block.Granite;
        case RubyBlock.Grass: return Block.Grass;
        case RubyBlock.GrassPath: return Block.GrassPath;
        case RubyBlock.Gravel: return Block.Gravel;
        case RubyBlock.GrayCarpet: return Block.GrayCarpet;
        case RubyBlock.GrayConcrete: return Block.GrayConcrete;
        case RubyBlock.GrayConcretePowder: return Block.GrayConcretePowder;
        case RubyBlock.GrayGlazedTerracotta: return Block.GrayGlazedTerracotta;
        case RubyBlock.GrayShulkerBox: return Block.GrayShulkerBox;
        case RubyBlock.GrayStainedGlass: return Block.GrayStainedGlass;
        case RubyBlock.GrayStainedGlassPane: return Block.GrayStainedGlassPane;
        case RubyBlock.GrayTerracotta: return Block.GrayTerracotta;
        case RubyBlock.GrayWool: return Block.GrayWool;
        case RubyBlock.GreenCarpet: return Block.GreenCarpet;
        case RubyBlock.GreenConcrete: return Block.GreenConcrete;
        case RubyBlock.GreenConcretePowder: return Block.GreenConcretePowder;
        case RubyBlock.GreenGlazedTerracotta: return Block.GreenGlazedTerracotta;
        case RubyBlock.GreenShulkerBox: return Block.GreenShulkerBox;
        case RubyBlock.GreenStainedGlass: return Block.GreenStainedGlass;
        case RubyBlock.GreenStainedGlassPane: return Block.GreenStainedGlassPane;
        case RubyBlock.GreenTerracotta: return Block.GreenTerracotta;
        case RubyBlock.GreenWool: return Block.GreenWool;
        case RubyBlock.HardenedClay: return Block.HardenedClay;
        case RubyBlock.HayBlock: return Block.HayBlock;
        case RubyBlock.HoneyBlock: return Block.HoneyBlock;
        case RubyBlock.HoneycombBlock: return Block.HoneycombBlock;
        case RubyBlock.Hopper: return Block.Hopper;
        case RubyBlock.HornCoral: return Block.HornCoral;
        case RubyBlock.HornCoralBlock: return Block.HornCoralBlock;
        case RubyBlock.HornCoralFan: return Block.HornCoralFan;
        case RubyBlock.Ice: return Block.Ice;
        case RubyBlock.IronBars: return Block.IronBars;
        case RubyBlock.IronBlock: return Block.IronBlock;
        case RubyBlock.IronDoor: return Block.IronDoor;
        case RubyBlock.IronOre: return Block.IronOre;
        case RubyBlock.IronTrapdoor: return Block.IronTrapdoor;
        case RubyBlock.JackOLantern: return Block.JackOLantern;
        case RubyBlock.Jukebox: return Block.Jukebox;
        case RubyBlock.JungleButton: return Block.JungleButton;
        case RubyBlock.JungleFence: return Block.JungleFence;
        case RubyBlock.JungleFenceGate: return Block.JungleFenceGate;
        case RubyBlock.JunglePressurePlate: return Block.JunglePressurePlate;
        case RubyBlock.JungleSapling: return Block.JungleSapling;
        case RubyBlock.JungleTrapdoor: return Block.JungleTrapdoor;
        case RubyBlock.JungleWoodSlab: return Block.JungleWoodSlab;
        case RubyBlock.JungleWoodStairs: return Block.JungleWoodStairs;
        case RubyBlock.Kelp: return Block.Kelp;
        case RubyBlock.Ladder: return Block.Ladder;
        case RubyBlock.LapisLazuliBlock: return Block.LapisLazuliBlock;
        case RubyBlock.LapisOre: return Block.LapisOre;
        case RubyBlock.LargeFern: return Block.LargeFern;
        case RubyBlock.Lava: return Block.Lava;
        // case RubyBlock.Lead: return Block.Lead;
        case RubyBlock.LeavesBirch: return Block.LeavesBirch;
        case RubyBlock.LeavesJungle: return Block.LeavesJungle;
        case RubyBlock.LeavesOak: return Block.LeavesOak;
        case RubyBlock.LeavesSpruce: return Block.LeavesSpruce;
        case RubyBlock.Lever: return Block.Lever;
        case RubyBlock.LightBlueCarpet: return Block.LightBlueCarpet;
        case RubyBlock.LightBlueConcrete: return Block.LightBlueConcrete;
        case RubyBlock.LightBlueConcretePowder: return Block.LightBlueConcretePowder;
        case RubyBlock.LightBlueGlazedTerracotta: return Block.LightBlueGlazedTerracotta;
        case RubyBlock.LightBlueShulkerBox: return Block.LightBlueShulkerBox;
        case RubyBlock.LightBlueStainedGlass: return Block.LightBlueStainedGlass;
        case RubyBlock.LightBlueStainedGlassPane: return Block.LightBlueStainedGlassPane;
        case RubyBlock.LightBlueTerracotta: return Block.LightBlueTerracotta;
        case RubyBlock.LightBlueWool: return Block.LightBlueWool;
        case RubyBlock.LightGrayCarpet: return Block.LightGrayCarpet;
        case RubyBlock.LightGrayConcrete: return Block.LightGrayConcrete;
        case RubyBlock.LightGrayConcretePowder: return Block.LightGrayConcretePowder;
        case RubyBlock.LightGrayGlazedTerracotta: return Block.LightGrayGlazedTerracotta;
        case RubyBlock.LightGrayStainedGlass: return Block.LightGrayStainedGlass;
        case RubyBlock.LightGrayStainedGlassPane: return Block.LightGrayStainedGlassPane;
        case RubyBlock.LightGrayTerracotta: return Block.LightGrayTerracotta;
        case RubyBlock.LightGrayWool: return Block.LightGrayWool;
        case RubyBlock.LightningRod: return Block.LightningRod;
        case RubyBlock.Lilac: return Block.Lilac;
        case RubyBlock.LilyOfTheValley: return Block.LilyOfTheValley;
        case RubyBlock.LilyPad: return Block.LilyPad;
        case RubyBlock.LimeCarpet: return Block.LimeCarpet;
        case RubyBlock.LimeConcrete: return Block.LimeConcrete;
        case RubyBlock.LimeConcretePowder: return Block.LimeConcretePowder;
        case RubyBlock.LimeGlazedTerracotta: return Block.LimeGlazedTerracotta;
        case RubyBlock.LimeShulkerBox: return Block.LimeShulkerBox;
        case RubyBlock.LimeStainedGlass: return Block.LimeStainedGlass;
        case RubyBlock.LimeStainedGlassPane: return Block.LimeStainedGlassPane;
        case RubyBlock.LimeTerracotta: return Block.LimeTerracotta;
        case RubyBlock.LimeWool: return Block.LimeWool;
        case RubyBlock.LogAcacia: return Block.LogAcacia;
        case RubyBlock.LogBirch: return Block.LogBirch;
        case RubyBlock.LogDarkOak: return Block.LogDarkOak;
        case RubyBlock.LogJungle: return Block.LogJungle;
        case RubyBlock.LogOak: return Block.LogOak;
        case RubyBlock.LogSpruce: return Block.LogSpruce;
        case RubyBlock.Loom: return Block.Loom;
        case RubyBlock.MagentaCarpet: return Block.MagentaCarpet;
        case RubyBlock.MagentaConcrete: return Block.MagentaConcrete;
        case RubyBlock.MagentaConcretePowder: return Block.MagentaConcretePowder;
        case RubyBlock.MagentaGlazedTerracotta: return Block.MagentaGlazedTerracotta;
        case RubyBlock.MagentaShulkerBox: return Block.MagentaShulkerBox;
        case RubyBlock.MagentaStainedGlass: return Block.MagentaStainedGlass;
        case RubyBlock.MagentaStainedGlassPane: return Block.MagentaStainedGlassPane;
        case RubyBlock.MagentaTerracotta: return Block.MagentaTerracotta;
        case RubyBlock.MagentaWool: return Block.MagentaWool;
        case RubyBlock.MagmaBlock: return Block.MagmaBlock;
        case RubyBlock.MelonBlock: return Block.MelonBlock;
        case RubyBlock.MelonStem: return Block.MelonStem;
        case RubyBlock.MonsterSpawner: return Block.MonsterSpawner;
        case RubyBlock.MossStone: return Block.MossStone;
        case RubyBlock.MossyCobblestoneWall: return Block.MossyCobblestoneWall;
        case RubyBlock.MossyStoneBrickMonsterEgg: return Block.MossyStoneBrickMonsterEgg;
        case RubyBlock.MossyStoneBricks: return Block.MossyStoneBricks;
        case RubyBlock.Mushroom0: return Block.Mushroom0;
        case RubyBlock.Mushroom14: return Block.Mushroom14;
        case RubyBlock.Mushroom15: return Block.Mushroom15;
        case RubyBlock.Mycelium: return Block.Mycelium;
        case RubyBlock.NetherBrick: return Block.NetherBrick;
        case RubyBlock.NetherBrickFence: return Block.NetherBrickFence;
        case RubyBlock.NetherBrickSlab: return Block.NetherBrickSlab;
        case RubyBlock.NetherBrickStairs: return Block.NetherBrickStairs;
        case RubyBlock.Netherrack: return Block.Netherrack;
        case RubyBlock.NetherWart: return Block.NetherWart;
        case RubyBlock.NetherWartBlock: return Block.NetherWartBlock;
        case RubyBlock.NoteBlock: return Block.NoteBlock;
        case RubyBlock.OakFence: return Block.OakFence;
        case RubyBlock.OakFenceGate: return Block.OakFenceGate;
        case RubyBlock.OakSapling: return Block.OakSapling;
        case RubyBlock.OakWoodSlab: return Block.OakWoodSlab;
        case RubyBlock.OakWoodStairs: return Block.OakWoodStairs;
        case RubyBlock.Observer: return Block.Observer;
        case RubyBlock.Obsidian: return Block.Obsidian;
        case RubyBlock.OrangeCarpet: return Block.OrangeCarpet;
        case RubyBlock.OrangeConcrete: return Block.OrangeConcrete;
        case RubyBlock.OrangeConcretePowder: return Block.OrangeConcretePowder;
        case RubyBlock.OrangeGlazedTerracotta: return Block.OrangeGlazedTerracotta;
        case RubyBlock.OrangeShulkerBox: return Block.OrangeShulkerBox;
        case RubyBlock.OrangeStainedGlass: return Block.OrangeStainedGlass;
        case RubyBlock.OrangeStainedGlassPane: return Block.OrangeStainedGlassPane;
        case RubyBlock.OrangeTerracotta: return Block.OrangeTerracotta;
        case RubyBlock.OrangeTulip: return Block.OrangeTulip;
        case RubyBlock.OrangeWool: return Block.OrangeWool;
        case RubyBlock.OxeyeDaisy: return Block.OxeyeDaisy;
        case RubyBlock.OxidizedCopper: return Block.OxidizedCopper;
        case RubyBlock.PackedIce: return Block.PackedIce;
        case RubyBlock.Peony: return Block.Peony;
        case RubyBlock.PillarQuartzBlock: return Block.PillarQuartzBlock;
        case RubyBlock.PinkCarpet: return Block.PinkCarpet;
        case RubyBlock.PinkConcrete: return Block.PinkConcrete;
        case RubyBlock.PinkConcretePowder: return Block.PinkConcretePowder;
        case RubyBlock.PinkGlazedTerracotta: return Block.PinkGlazedTerracotta;
        case RubyBlock.PinkShulkerBox: return Block.PinkShulkerBox;
        case RubyBlock.PinkStainedGlass: return Block.PinkStainedGlass;
        case RubyBlock.PinkStainedGlassPane: return Block.PinkStainedGlassPane;
        case RubyBlock.PinkTerracotta: return Block.PinkTerracotta;
        case RubyBlock.PinkTulip: return Block.PinkTulip;
        case RubyBlock.PinkWool: return Block.PinkWool;
        case RubyBlock.Piston: return Block.Piston;
        case RubyBlock.PlanksAcacia: return Block.PlanksAcacia;
        case RubyBlock.PlanksBirch: return Block.PlanksBirch;
        case RubyBlock.PlanksDarkOak: return Block.PlanksDarkOak;
        case RubyBlock.PlanksJungle: return Block.PlanksJungle;
        case RubyBlock.PlanksOak: return Block.PlanksOak;
        case RubyBlock.PlanksSpruce: return Block.PlanksSpruce;
        case RubyBlock.Podzol: return Block.Podzol;
        case RubyBlock.PointedDripstone: return Block.PointedDripstone;
        case RubyBlock.PolishedAndesite: return Block.PolishedAndesite;
        case RubyBlock.PolishedBasalt: return Block.PolishedBasalt;
        case RubyBlock.PolishedBlackstone: return Block.PolishedBlackstone;
        case RubyBlock.PolishedDiorite: return Block.PolishedDiorite;
        case RubyBlock.PolishedGranite: return Block.PolishedGranite;
        case RubyBlock.Poppy: return Block.Poppy;
        case RubyBlock.Potatoes: return Block.Potatoes;
        case RubyBlock.PowderSnow: return Block.PowderSnow;
        case RubyBlock.PoweredRail: return Block.PoweredRail;
        case RubyBlock.Prismarine: return Block.Prismarine;
        case RubyBlock.PrismarineBricks: return Block.PrismarineBricks;
        case RubyBlock.PrismarineBrickSlab: return Block.PrismarineBrickSlab;
        case RubyBlock.PrismarineBrickStairs: return Block.PrismarineBrickStairs;
        case RubyBlock.PrismarineSlab: return Block.PrismarineSlab;
        case RubyBlock.PrismarineStairs: return Block.PrismarineStairs;
        case RubyBlock.Pumpkin: return Block.Pumpkin;
        case RubyBlock.PumpkinStem: return Block.PumpkinStem;
        case RubyBlock.PurpleCarpet: return Block.PurpleCarpet;
        case RubyBlock.PurpleConcrete: return Block.PurpleConcrete;
        case RubyBlock.PurpleConcretePowder: return Block.PurpleConcretePowder;
        case RubyBlock.PurpleGlazedTerracotta: return Block.PurpleGlazedTerracotta;
        case RubyBlock.PurpleShulkerBox: return Block.PurpleShulkerBox;
        case RubyBlock.PurpleStainedGlass: return Block.PurpleStainedGlass;
        case RubyBlock.PurpleStainedGlassPane: return Block.PurpleStainedGlassPane;
        case RubyBlock.PurpleTerracotta: return Block.PurpleTerracotta;
        case RubyBlock.PurpleWool: return Block.PurpleWool;
        case RubyBlock.PurpurBlock: return Block.PurpurBlock;
        case RubyBlock.PurpurPillar: return Block.PurpurPillar;
        case RubyBlock.PurpurSlab: return Block.PurpurSlab;
        case RubyBlock.PurpurStairs: return Block.PurpurStairs;
        case RubyBlock.QuartzOre: return Block.QuartzOre;
        case RubyBlock.QuartzSlab: return Block.QuartzSlab;
        case RubyBlock.QuartzStairs: return Block.QuartzStairs;
        case RubyBlock.Rail: return Block.Rail;
        case RubyBlock.RedCarpet: return Block.RedCarpet;
        case RubyBlock.RedConcrete: return Block.RedConcrete;
        case RubyBlock.RedConcretePowder: return Block.RedConcretePowder;
        case RubyBlock.RedGlazedTerracotta: return Block.RedGlazedTerracotta;
        case RubyBlock.RedMushroom: return Block.RedMushroom;
        case RubyBlock.RedMushroomBlock: return Block.RedMushroomBlock;
        case RubyBlock.RedNetherBrick: return Block.RedNetherBrick;
        case RubyBlock.RedSand: return Block.RedSand;
        case RubyBlock.RedSandstone: return Block.RedSandstone;
        case RubyBlock.RedSandstoneSlab: return Block.RedSandstoneSlab;
        case RubyBlock.RedSandstoneStairs: return Block.RedSandstoneStairs;
        case RubyBlock.RedShulkerBox: return Block.RedShulkerBox;
        case RubyBlock.RedStainedGlass: return Block.RedStainedGlass;
        case RubyBlock.RedStainedGlassPane: return Block.RedStainedGlassPane;
        case RubyBlock.RedstoneBlock: return Block.RedstoneBlock;
        case RubyBlock.RedstoneLamp: return Block.RedstoneLamp;
        case RubyBlock.RedstoneOre: return Block.RedstoneOre;
        case RubyBlock.RedstoneTorch: return Block.RedstoneTorch;
        case RubyBlock.RedstoneWire: return Block.RedstoneWire;
        case RubyBlock.RedTerracotta: return Block.RedTerracotta;
        case RubyBlock.RedTulip: return Block.RedTulip;
        case RubyBlock.RedWool: return Block.RedWool;
        case RubyBlock.RespawnAnchor: return Block.RespawnAnchor;
        case RubyBlock.RoseBush: return Block.RoseBush;
        case RubyBlock.Sand: return Block.Sand;
        case RubyBlock.Sandstone: return Block.Sandstone;
        case RubyBlock.SandstoneSlab: return Block.SandstoneSlab;
        case RubyBlock.SandstoneStairs: return Block.SandstoneStairs;
        case RubyBlock.Scaffolding: return Block.Scaffolding;
        case RubyBlock.Seagrass: return Block.Seagrass;
        case RubyBlock.SeaLantern: return Block.SeaLantern;
        case RubyBlock.SeaPickle: return Block.SeaPickle;
        case RubyBlock.Shroomlight: return Block.Shroomlight;
        case RubyBlock.ShulkerBox: return Block.ShulkerBox;
        // case RubyBlock.Sign: return Block.Sign;
        case RubyBlock.SilverShulkerBox: return Block.SilverShulkerBox;
        case RubyBlock.SkeletonSkull: return Block.SkeletonSkull;
        case RubyBlock.SlightlyDamagedAnvil: return Block.SlightlyDamagedAnvil;
        case RubyBlock.SlimeBlock: return Block.SlimeBlock;
        case RubyBlock.SmallDripleaf: return Block.SmallDripleaf;
        case RubyBlock.SmithingTable: return Block.SmithingTable;
        case RubyBlock.Smoker: return Block.Smoker;
        case RubyBlock.SmoothRedSandstone: return Block.SmoothRedSandstone;
        case RubyBlock.SmoothSandstone: return Block.SmoothSandstone;
        case RubyBlock.Snow: return Block.Snow;
        case RubyBlock.SoulCampfire: return Block.SoulCampfire;
        case RubyBlock.SoulSand: return Block.SoulSand;
        case RubyBlock.SoulSoil: return Block.SoulSoil;
        case RubyBlock.Sponge: return Block.Sponge;
        case RubyBlock.SpruceButton: return Block.SpruceButton;
        case RubyBlock.SpruceFence: return Block.SpruceFence;
        case RubyBlock.SpruceFenceGate: return Block.SpruceFenceGate;
        case RubyBlock.SprucePressurePlate: return Block.SprucePressurePlate;
        case RubyBlock.SpruceSapling: return Block.SpruceSapling;
        case RubyBlock.SpruceTrapdoor: return Block.SpruceTrapdoor;
        case RubyBlock.SpruceWoodSlab: return Block.SpruceWoodSlab;
        case RubyBlock.SpruceWoodStairs: return Block.SpruceWoodStairs;
        case RubyBlock.StickyPiston: return Block.StickyPiston;
        case RubyBlock.Stone: return Block.Stone;
        case RubyBlock.StoneBrickMonsterEgg: return Block.StoneBrickMonsterEgg;
        case RubyBlock.StoneBricks: return Block.StoneBricks;
        case RubyBlock.StoneBricksSlab: return Block.StoneBricksSlab;
        case RubyBlock.StoneBrickStairs: return Block.StoneBrickStairs;
        case RubyBlock.StoneButton: return Block.StoneButton;
        case RubyBlock.Stonecutter: return Block.Stonecutter;
        case RubyBlock.StonecutterBlock: return Block.StonecutterBlock;
        case RubyBlock.StoneMonsterEgg: return Block.StoneMonsterEgg;
        case RubyBlock.StonePressurePlate: return Block.StonePressurePlate;
        case RubyBlock.StoneSlab: return Block.StoneSlab;
        case RubyBlock.StrippedAcaciaWood: return Block.StrippedAcaciaWood;
        case RubyBlock.StrippedBirchWood: return Block.StrippedBirchWood;
        case RubyBlock.StrippedDarkOakWood: return Block.StrippedDarkOakWood;
        case RubyBlock.StrippedJungleWood: return Block.StrippedJungleWood;
        case RubyBlock.StrippedOakWood: return Block.StrippedOakWood;
        case RubyBlock.StrippedSpruceWood: return Block.StrippedSpruceWood;
        case RubyBlock.StructureBlock: return Block.StructureBlock;
        case RubyBlock.SugarCane: return Block.SugarCane;
        case RubyBlock.Sunflower: return Block.Sunflower;
        case RubyBlock.Tallgrass: return Block.Tallgrass;
        case RubyBlock.Target: return Block.Target;
        case RubyBlock.TintedGlass: return Block.TintedGlass;
        case RubyBlock.TNT: return Block.TNT;
        case RubyBlock.TopSnow: return Block.TopSnow;
        case RubyBlock.Torch: return Block.Torch;
        case RubyBlock.TrappedChest: return Block.TrappedChest;
        case RubyBlock.Tripwire: return Block.Tripwire;
        case RubyBlock.TripwireHook: return Block.TripwireHook;
        case RubyBlock.TubeCoral: return Block.TubeCoral;
        case RubyBlock.TubeCoralBlock: return Block.TubeCoralBlock;
        case RubyBlock.TubeCoralFan: return Block.TubeCoralFan;
        case RubyBlock.UnpoweredComparator: return Block.UnpoweredComparator;
        case RubyBlock.UnpoweredRepeater: return Block.UnpoweredRepeater;
        case RubyBlock.VeryDamagedAnvil: return Block.VeryDamagedAnvil;
        case RubyBlock.Vines: return Block.Vines;
        case RubyBlock.WarpedButton: return Block.WarpedButton;
        case RubyBlock.WarpedDoor: return Block.WarpedDoor;
        case RubyBlock.WarpedFence: return Block.WarpedFence;
        case RubyBlock.WarpedFenceGate: return Block.WarpedFenceGate;
        case RubyBlock.WarpedPlanks: return Block.WarpedPlanks;
        case RubyBlock.WarpedPressurePlate: return Block.WarpedPressurePlate;
        case RubyBlock.WarpedSlab: return Block.WarpedSlab;
        case RubyBlock.WarpedStairs: return Block.WarpedStairs;
        case RubyBlock.Water: return Block.Water;
        case RubyBlock.WeatheredCopper: return Block.WeatheredCopper;
        case RubyBlock.WeightedPressurePlateHeavy: return Block.WeightedPressurePlateHeavy;
        case RubyBlock.WeightedPressurePlateLight: return Block.WeightedPressurePlateLight;
        case RubyBlock.WetSponge: return Block.WetSponge;
        case RubyBlock.WhiteCarpet: return Block.WhiteCarpet;
        case RubyBlock.WhiteConcrete: return Block.WhiteConcrete;
        case RubyBlock.WhiteConcretePowder: return Block.WhiteConcretePowder;
        case RubyBlock.WhiteGlazedTerracotta: return Block.WhiteGlazedTerracotta;
        case RubyBlock.WhiteShulkerBox: return Block.WhiteShulkerBox;
        case RubyBlock.WhiteStainedGlass: return Block.WhiteStainedGlass;
        case RubyBlock.WhiteStainedGlassPane: return Block.WhiteStainedGlassPane;
        case RubyBlock.WhiteTerracotta: return Block.WhiteTerracotta;
        case RubyBlock.WhiteTulip: return Block.WhiteTulip;
        case RubyBlock.WoodenButton: return Block.WoodenButton;
        case RubyBlock.WoodenPressurePlate: return Block.WoodenPressurePlate;
        case RubyBlock.WoodenTrapdoor: return Block.WoodenTrapdoor;
        case RubyBlock.Wool: return Block.Wool;
        case RubyBlock.YellowCarpet: return Block.YellowCarpet;
        case RubyBlock.YellowConcrete: return Block.YellowConcrete;
        case RubyBlock.YellowConcretePowder: return Block.YellowConcretePowder;
        case RubyBlock.YellowFlower: return Block.YellowFlower;
        case RubyBlock.YellowGlazedTerracotta: return Block.YellowGlazedTerracotta;
        case RubyBlock.YellowShulkerBox: return Block.YellowShulkerBox;
        case RubyBlock.YellowStainedGlass: return Block.YellowStainedGlass;
        case RubyBlock.YellowStainedGlassPane: return Block.YellowStainedGlassPane;
        case RubyBlock.YellowTerracotta: return Block.YellowTerracotta;
        case RubyBlock.YellowWool: return Block.YellowWool;
        default: return Block.Air;
    }
}
const enum RubyItem {
    //% blockIdentity="blocks.item" enumval=256 block="鉄(てつ)のシャベル"
    //% jres alias=IRON_SHOVEL
    IronShovel = 256,
    //% blockIdentity="blocks.item" enumval=257 block="鉄(てつ)のツルハシ"
    //% jres alias=IRON_PICKAXE
    IronPickaxe = 257,
    //% blockIdentity="blocks.item" enumval=258 block="鉄(てつ)の斧(おの)"
    //% jres alias=IRON_AXE
    IronAxe = 258,
    //% blockIdentity="blocks.item" enumval=259 block="火打石(ひうちいし)と打(う)ち金(がね)"
    //% jres alias=FLINT_AND_STEEL
    FlintAndSteel = 259,
    //% blockIdentity="blocks.item" enumval=260 block="リンゴ"
    //% jres alias=APPLE
    Apple = 260,
    //% blockIdentity="blocks.item" enumval=261 block="弓(ゆみ)"
    //% jres alias=BOW
    Bow = 261,
    //% blockIdentity="blocks.item" enumval=262 block="矢(や)"
    //% jres alias=ARROW
    Arrow = 262,
    //% blockIdentity="blocks.item" enumval=263 block="石炭(せきたん)"
    //% jres alias=COAL
    Coal = 263,
    //% blockIdentity="blocks.item" enumval=65799 block="木炭(もくたん)"
    //% jres alias=CHARCOAL
    Charcoal = 65799,
    //% blockIdentity="blocks.item" enumval=264 block="ダイヤモンド"
    //% jres alias=DIAMOND
    Diamond = 264,
    //% blockIdentity="blocks.item" enumval=265 block="鉄(てつ)インゴット"
    //% jres alias=IRON_INGOT
    IronIngot = 265,
    //% blockIdentity="blocks.item" enumval=266 block="金(きん)インゴット"
    //% jres alias=GOLD_INGOT
    GoldIngot = 266,
    //% blockIdentity="blocks.item" enumval=267 block="鉄(てつ)の剣(けん)"
    //% jres alias=IRON_SWORD
    IronSword = 267,
    //% blockIdentity="blocks.item" enumval=268 block="木(き)の剣(けん)"
    //% jres alias=WOODEN_SWORD
    WoodenSword = 268,
    //% blockIdentity="blocks.item" enumval=269 block="木(き)のシャベル"
    //% jres alias=WOODEN_SHOVEL
    WoodenShovel = 269,
    //% blockIdentity="blocks.item" enumval=270 block="木(き)のツルハシ"
    //% jres alias=WOODEN_PICKAXE
    WoodenPickaxe = 270,
    //% blockIdentity="blocks.item" enumval=271 block="木(き)の斧(おの)"
    //% jres alias=WOODEN_AXE
    WoodenAxe = 271,
    //% blockIdentity="blocks.item" enumval=272 block="石(いし)の剣(けん)"
    //% jres alias=STONE_SWORD
    StoneSword = 272,
    //% blockIdentity="blocks.item" enumval=273 block="石(いし)のシャベル"
    //% jres alias=STONE_SHOVEL
    StoneShovel = 273,
    //% blockIdentity="blocks.item" enumval=274 block="石(いし)のツルハシ"
    //% jres alias=STONE_PICKAXE
    StonePickaxe = 274,
    //% blockIdentity="blocks.item" enumval=275 block="石(いし)の斧(おの)"
    //% jres alias=STONE_AXE
    StoneAxe = 275,
    //% blockIdentity="blocks.item" enumval=276 block="ダイヤモンドの剣(けん)"
    //% jres alias=DIAMOND_SWORD
    DiamondSword = 276,
    //% blockIdentity="blocks.item" enumval=277 block="ダイヤモンドのシャベル"
    //% jres alias=DIAMOND_SHOVEL
    DiamondShovel = 277,
    //% blockIdentity="blocks.item" enumval=278 block="ダイヤモンドのツルハシ"
    //% jres alias=DIAMOND_PICKAXE
    DiamondPickaxe = 278,
    //% blockIdentity="blocks.item" enumval=279 block="ダイヤモンドの斧(おの)"
    //% jres alias=DIAMOND_AXE
    DiamondAxe = 279,
    //% blockIdentity="blocks.item" enumval=280 block="棒(ぼう)"
    //% jres alias=STICK
    Stick = 280,
    //% blockIdentity="blocks.item" enumval=281 block="ボウル"
    //% jres alias=BOWL
    Bowl = 281,
    //% blockIdentity="blocks.item" enumval=282 block="キノコシチュー"
    //% jres alias=MUSHROOM_STEW
    MushroomStew = 282,
    //% blockIdentity="blocks.item" enumval=283 block="金(きん)の剣(けん)"
    //% jres alias=GOLDEN_SWORD
    GoldenSword = 283,
    //% blockIdentity="blocks.item" enumval=284 block="金(きん)のシャベル"
    //% jres alias=GOLDEN_SHOVEL
    GoldenShovel = 284,
    //% blockIdentity="blocks.item" enumval=285 block="金(きん)のツルハシ"
    //% jres alias=GOLDEN_PICKAXE
    GoldenPickaxe = 285,
    //% blockIdentity="blocks.item" enumval=286 block="金(きん)の斧(おの)"
    //% jres alias=GOLDEN_AXE
    GoldenAxe = 286,
    //% blockIdentity="blocks.item" enumval=287 block="糸(いと)"
    //% jres alias=STRING
    String = 287,
    //% blockIdentity="blocks.item" enumval=288 block="羽根(はね)"
    //% jres alias=FEATHER
    Feather = 288,
    //% blockIdentity="blocks.item" enumval=289 block="火薬(かやく)"
    //% jres alias=GUNPOWDER
    Gunpowder = 289,
    //% blockIdentity="blocks.item" enumval=290 block="木(き)のクワ"
    //% jres alias=WOODEN_HOE
    WoodenHoe = 290,
    //% blockIdentity="blocks.item" enumval=291 block="石(いし)のクワ"
    //% jres alias=STONE_HOE
    StoneHoe = 291,
    //% blockIdentity="blocks.item" enumval=292 block="鉄(てつ)のクワ"
    //% jres alias=IRON_HOE
    IronHoe = 292,
    //% blockIdentity="blocks.item" enumval=293 block="ダイヤモンドのクワ"
    //% jres alias=DIAMOND_HOE
    DiamondHoe = 293,
    //% blockIdentity="blocks.item" enumval=294 block="金(きん)のクワ"
    //% jres alias=GOLDEN_HOE
    GoldenHoe = 294,
    //% blockIdentity="blocks.item" enumval=295 block="種(たね)"
    //% jres alias=SEEDS
    Seeds = 295,
    //% blockIdentity="blocks.item" enumval=296 block="小麦(こむぎ)"
    //% jres alias=WHEAT
    Wheat = 296,
    //% blockIdentity="blocks.item" enumval=297 block="パン"
    //% jres alias=BREAD
    Bread = 297,
    //% blockIdentity="blocks.item" enumval=298 block="革(かわ)の帽子(ぼうし)"
    //% jres alias=LEATHER_CAP
    LeatherCap = 298,
    //% blockIdentity="blocks.item" enumval=299 block="革(かわ)の上着(うわぎ)"
    //% jres alias=LEATHER_CHESTPLATE
    LeatherChestplate = 299,
    //% blockIdentity="blocks.item" enumval=300 block="革(かわ)のズボン"
    //% jres alias=LEATHER_PANTS
    LeatherPants = 300,
    //% blockIdentity="blocks.item" enumval=301 block="革(かわ)のブーツ"
    //% jres alias=LEATHER_BOOTS
    LeatherBoots = 301,
    //% blockIdentity="blocks.item" enumval=302 block="チェーンヘルメット"
    //% jres alias=CHAINMAIL_HELMET
    ChainmailHelmet = 302,
    //% blockIdentity="blocks.item" enumval=303 block="胸当(むなあ)て"
    //% jres alias=CHAINMAIL_CHESTPLATE
    ChainmailChestplate = 303,
    //% blockIdentity="blocks.item" enumval=304 block="チェーンレギンス"
    //% jres alias=CHAINMAIL_LEGGINGS
    ChainmailLeggings = 304,
    //% blockIdentity="blocks.item" enumval=305 block="チェーンブーツ"
    //% jres alias=CHAINMAIL_BOOTS
    ChainmailBoots = 305,
    //% blockIdentity="blocks.item" enumval=306 block="鉄(てつ)のヘルメット"
    //% jres alias=IRON_HELMET
    IronHelmet = 306,
    //% blockIdentity="blocks.item" enumval=307 block="鉄(てつ)のチェストプレート"
    //% jres alias=IRON_CHESTPLATE
    IronChestplate = 307,
    //% blockIdentity="blocks.item" enumval=308 block="鉄(てつ)のレギンス"
    //% jres alias=IRON_LEGGINGS
    IronLeggings = 308,
    //% blockIdentity="blocks.item" enumval=309 block="鉄(てつ)のブーツ"
    //% jres alias=IRON_BOOTS
    IronBoots = 309,
    //% blockIdentity="blocks.item" enumval=310 block="ダイヤモンドのヘルメット"
    //% jres alias=DIAMOND_HELMET
    DiamondHelmet = 310,
    //% blockIdentity="blocks.item" enumval=311 block="ダイヤモンドのチェストプレート"
    //% jres alias=DIAMOND_CHESTPLATE
    DiamondChestplate = 311,
    //% blockIdentity="blocks.item" enumval=312 block="ダイヤモンドのレギンス"
    //% jres alias=DIAMOND_LEGGINGS
    DiamondLeggings = 312,
    //% blockIdentity="blocks.item" enumval=313 block="ダイヤモンドのブーツ"
    //% jres alias=DIAMOND_BOOTS
    DiamondBoots = 313,
    //% blockIdentity="blocks.item" enumval=314 block="金(きん)のヘルメット"
    //% jres alias=GOLDEN_HELMET
    GoldenHelmet = 314,
    //% blockIdentity="blocks.item" enumval=315 block="金(きん)のチェストプレート"
    //% jres alias=GOLDEN_CHESTPLATE
    GoldenChestplate = 315,
    //% blockIdentity="blocks.item" enumval=316 block="金(きん)のレギンス"
    //% jres alias=GOLDEN_LEGGINGS
    GoldenLeggings = 316,
    //% blockIdentity="blocks.item" enumval=317 block="金(きん)のブーツ"
    //% jres alias=GOLDEN_BOOTS
    GoldenBoots = 317,
    //% blockIdentity="blocks.item" enumval=318 block="火打石(ひうちいし)"
    //% jres alias=FLINT
    Flint = 318,
    //% blockIdentity="blocks.item" enumval=319 block="生(なま)の豚肉(ぶたにく)"
    //% jres alias=RAW_PORKCHOP
    RawPorkchop = 319,
    //% blockIdentity="blocks.item" enumval=320 block="焼(や)き豚(ぶた)"
    //% jres alias=COOKED_PORKCHOP
    CookedPorkchop = 320,
    //% blockIdentity="blocks.item" enumval=321 block="絵画(かいが)"
    //% jres alias=PAINTING
    Painting = 321,
    //% blockIdentity="blocks.item" enumval=322 block="金(きん)のリンゴ"
    //% jres alias=GOLDEN_APPLE
    GoldenApple = 322,
    //% blockIdentity="blocks.item" enumval=323 block="署名(しょめい)"
    //% jres alias=SIGN_ITEM
    Sign = 323,
    //% blockIdentity="blocks.item" enumval=324 block="オークのドア"
    //% jres alias=OAK_DOOR
    OakDoor = 324,
    //% blockIdentity="blocks.item" enumval=325 block="バケツ"
    //% jres alias=BUCKET
    Bucket = 325,
    //% blockIdentity="blocks.item" enumval=65861 block="ミルク"
    //% jres alias=MILK
    Milk = 65861,
    //% blockIdentity="blocks.item" enumval=131397 block="タラ入(はい)りバケツ"
    //% jres alias=BUCKET_OF_COD
    BucketOfCod = 131397,
    //% blockIdentity="blocks.item" enumval=196933 block="サケ入(はい)りバケツ"
    //% jres alias=BUCKET_OF_SALMON
    BucketOfSalmon = 196933,
    //% blockIdentity="blocks.item" enumval=262469 block="熱帯魚(ねったいぎょ)入(はい)りバケツ"
    //% jres alias=BUCKET_OF_TROPICAL_FISH
    BucketOfTropicalFish = 262469,
    //% blockIdentity="blocks.item" enumval=524613 block="水入(みずい)りバケツ"
    //% jres alias=WATER_BUCKET
    WaterBucket = 524613,
    //% blockIdentity="blocks.item" enumval=655685 block="溶岩(ようがん)入(はい)りバケツ"
    //% jres alias=LAVA_BUCKET
    LavaBucket = 655685,
    //% blockIdentity="blocks.item" enumval=328 block="トロッコ"
    //% jres alias=MINECART
    Minecart = 328,
    //% blockIdentity="blocks.item" enumval=329 block="鞍(くら)"
    //% jres alias=SADDLE
    Saddle = 329,
    //% blockIdentity="blocks.item" enumval=330 block="鉄(てつ)のドア"
    //% jres alias=IRON_DOOR_ITEM
    IronDoor = 330,
    //% blockIdentity="blocks.item" enumval=331 block="レッドストーン"
    //% jres alias=REDSTONE
    Redstone = 331,
    //% blockIdentity="blocks.item" enumval=332 block="雪玉(ゆきだま)"
    //% jres alias=SNOWBALL
    Snowball = 332,
    //% blockIdentity="blocks.item" enumval=333 block="オークのボート"
    //% jres alias=BOAT
    Boat = 333,
    //% blockIdentity="blocks.item" enumval=65869 block="トウヒのボート"
    //% jres alias=SPRUCE_BOAT
    SpruceBoat = 65869,
    //% blockIdentity="blocks.item" enumval=131405 block="シラカバのボート"
    //% jres alias=BIRCH_BOAT
    BirchBoat = 131405,
    //% blockIdentity="blocks.item" enumval=196941 block="ジャングルのボート"
    //% jres alias=JUNGLE_BOAT
    JungleBoat = 196941,
    //% blockIdentity="blocks.item" enumval=262477 block="アカシアのボート"
    //% jres alias=ACACIA_BOAT
    AcaciaBoat = 262477,
    //% blockIdentity="blocks.item" enumval=328013 block="ダークオークのボート"
    //% jres alias=DARK_OAK_BOAT
    DarkOakBoat = 328013,
    //% blockIdentity="blocks.item" enumval=334 block="革(かわ)"
    //% jres alias=LEATHER
    Leather = 334,
    //% blockIdentity="blocks.item" enumval=335 block="コンブ"
    //% jres alias=KELP_ITEM
    Kelp = 335,
    //% blockIdentity="blocks.item" enumval=336 block="レンガ"
    //% jres alias=BRICK
    Brick = 336,
    //% blockIdentity="blocks.item" enumval=337 block="粘土(ねんど)"
    //% jres alias=CLAY_BALL
    ClayBall = 337,
    //% blockIdentity="blocks.item" enumval=338 block="サトウキビ"
    //% jres alias=REEDS
    Reeds = 338,
    //% blockIdentity="blocks.item" enumval=339 block="紙(かみ)"
    //% jres alias=PAPER
    Paper = 339,
    //% blockIdentity="blocks.item" enumval=340 block="本(ほん)"
    //% jres alias=BOOK
    Book = 340,
    //% blockIdentity="blocks.item" enumval=341 block="スライムボール"
    //% jres alias=SLIMEBALL
    Slimeball = 341,
    //% blockIdentity="blocks.item" enumval=342 block="チェスト付(つ)きトロッコ"
    //% jres alias=MINECART_WITH_CHEST
    MinecartWithChest = 342,
    //% blockIdentity="blocks.item" enumval=344 block="卵(たまご)"
    //% jres alias=EGG
    Egg = 344,
    //% blockIdentity="blocks.item" enumval=345 block="コンパス"
    //% jres alias=COMPASS
    Compass = 345,
    //% blockIdentity="blocks.item" enumval=346 block="釣竿(つりざお)"
    //% jres alias=FISHING_ROD
    FishingRod = 346,
    //% blockIdentity="blocks.item" enumval=347 block="時計(とけい)"
    //% jres alias=CLOCK
    Clock = 347,
    //% blockIdentity="blocks.item" enumval=348 block="グロウストーンダスト"
    //% jres alias=GLOWSTONE_DUST
    GlowstoneDust = 348,
    //% blockIdentity="blocks.item" enumval=349 block="生魚(せいぎょ)"
    //% jres alias=RAW_FISH
    RawFish = 349,
    //% blockIdentity="blocks.item" enumval=350 block="調理(ちょうり)した魚(さかな)"
    //% jres alias=COOKED_FISH
    CookedFish = 350,
    //% blockIdentity="blocks.item" enumval=351 block="イカスミ"
    //% jres alias=INK_SAC
    InkSac = 351,
    //% blockIdentity="blocks.item" enumval=65887 block="ローズ レッド"
    //% jres alias=ROSE_RED
    RoseRed = 65887,
    //% blockIdentity="blocks.item" enumval=131423 block="緑色(みどりいろ)の染料(せんりょう)"
    //% jres alias=CACTUS_GREEN
    CactusGreen = 131423,
    //% blockIdentity="blocks.item" enumval=196959 block="カカオ豆(まめ)"
    //% jres alias=COCOA_BEANS
    CocoaBeans = 196959,
    //% blockIdentity="blocks.item" enumval=262495 block="ラピスラズリ"
    //% jres alias=LAPIS_LAZULI
    LapisLazuli = 262495,
    //% blockIdentity="blocks.item" enumval=328031 block="紫色(むらさきいろ)の染料(せんりょう)"
    //% jres alias=PURPLE_DYE
    PurpleDye = 328031,
    //% blockIdentity="blocks.item" enumval=393567 block="青緑色(あおみどりいろ)の染料(せんりょう)"
    //% jres alias=CYAN_DYE
    CyanDye = 393567,
    //% blockIdentity="blocks.item" enumval=459103 block="薄灰色(うすはいいろ)の染料(せんりょう)"
    //% jres alias=LIGHT_GRAY_DYE
    LightGrayDye = 459103,
    //% blockIdentity="blocks.item" enumval=524639 block="灰色(はいいろ)の染料(せんりょう)"
    //% jres alias=GRAY_DYE
    GrayDye = 524639,
    //% blockIdentity="blocks.item" enumval=590175 block="桃色(ももいろ)の染料(せんりょう)"
    //% jres alias=PINK_DYE
    PinkDye = 590175,
    //% blockIdentity="blocks.item" enumval=655711 block="黄緑色(おうりょくしょく)の染料(せんりょう)"
    //% jres alias=LIME_DYE
    LimeDye = 655711,
    //% blockIdentity="blocks.item" enumval=721247 block="黄色(きいろ)の染料(せんりょう)"
    //% jres alias=DANDELION_YELLOW
    DandelionYellow = 721247,
    //% blockIdentity="blocks.item" enumval=786783 block="空色(そらいろ)の染料(せんりょう)"
    //% jres alias=LIGHT_BLUE_DYE
    LightBlueDye = 786783,
    //% blockIdentity="blocks.item" enumval=852319 block="赤紫色(あかむらさきいろ)の染料(せんりょう)"
    //% jres alias=MAGENTA_DYE
    MagentaDye = 852319,
    //% blockIdentity="blocks.item" enumval=917855 block="橙色(だいだいいろ)の染料(せんりょう)"
    //% jres alias=ORANGE_DYE
    OrangeDye = 917855,
    //% blockIdentity="blocks.item" enumval=983391 block="骨粉(こっぷん)"
    //% jres alias=BONE_MEAL
    BoneMeal = 983391,
    //% blockIdentity="blocks.item" enumval=352 block="骨(ほね)"
    //% jres alias=BONE
    Bone = 352,
    //% blockIdentity="blocks.item" enumval=353 block="砂糖(さとう)"
    //% jres alias=SUGAR
    Sugar = 353,
    //% blockIdentity="blocks.item" enumval=354 block="ケーキ"
    //% jres alias=CAKE_ITEM
    Cake = 354,
    //% blockIdentity="blocks.item" enumval=355 block="白色(しろいろ)のベッド"
    //% jres alias=BED_ITEM
    Bed = 355,
    //% blockIdentity="blocks.item" enumval=65891 block="橙色(だいだいいろ)のベッド"
    //% jres alias=ORANGE_BED
    OrangeBed = 65891,
    //% blockIdentity="blocks.item" enumval=131427 block="赤紫色(あかむらさきいろ)のベッド"
    //% jres alias=MAGENTA_BED
    MagentaBed = 131427,
    //% blockIdentity="blocks.item" enumval=196963 block="空色(そらいろ)のベッド"
    //% jres alias=LIGHT_BLUE_BED
    LightBlueBed = 196963,
    //% blockIdentity="blocks.item" enumval=262499 block="黄色(きいろ)のベッド"
    //% jres alias=YELLOW_BED
    YellowBed = 262499,
    //% blockIdentity="blocks.item" enumval=328035 block="黄緑色(おうりょくしょく)のベッド"
    //% jres alias=LIME_BED
    LimeBed = 328035,
    //% blockIdentity="blocks.item" enumval=393571 block="桃色(ももいろ)のベッド"
    //% jres alias=PINK_BED
    PinkBed = 393571,
    //% blockIdentity="blocks.item" enumval=459107 block="灰色(はいいろ)のベッド"
    //% jres alias=GRAY_BED
    GrayBed = 459107,
    //% blockIdentity="blocks.item" enumval=524643 block="薄灰色(うすはいいろ)のベッド"
    //% jres alias=LIGHT_GRAY_BED
    LightGrayBed = 524643,
    //% blockIdentity="blocks.item" enumval=590179 block="青緑色(あおみどりいろ)のベッド"
    //% jres alias=CYAN_BED
    CyanBed = 590179,
    //% blockIdentity="blocks.item" enumval=655715 block="紫色(むらさきいろ)のベッド"
    //% jres alias=PURPLE_BED
    PurpleBed = 655715,
    //% blockIdentity="blocks.item" enumval=721251 block="青色(あおいろ)のベッド"
    //% jres alias=BLUE_BED
    BlueBed = 721251,
    //% blockIdentity="blocks.item" enumval=786787 block="茶色(ちゃいろ)のベッド"
    //% jres alias=BROWN_BED
    BrownBed = 786787,
    //% blockIdentity="blocks.item" enumval=852323 block="緑色(みどりいろ)のベッド"
    //% jres alias=GREEN_BED
    GreenBed = 852323,
    //% blockIdentity="blocks.item" enumval=917859 block="赤色(あかいろ)のベッド"
    //% jres alias=RED_BED
    RedBed = 917859,
    //% blockIdentity="blocks.item" enumval=983395 block="黒色(こくしょく)のベッド"
    //% jres alias=BLACK_BED
    BlackBed = 983395,
    //% blockIdentity="blocks.item" enumval=356 block="レッドストーンリピーター"
    //% jres alias=REPEATER
    Repeater = 356,
    //% blockIdentity="blocks.item" enumval=357 block="クッキー"
    //% jres alias=COOKIE
    Cookie = 357,
    //% blockIdentity="blocks.item" enumval=358 block="地図(ちず)"
    //% jres alias=MAP
    Map = 358,
    //% blockIdentity="blocks.item" enumval=359 block="ハサミ"
    //% jres alias=SHEARS
    Shears = 359,
    //% blockIdentity="blocks.item" enumval=360 block="スイカ"
    //% jres alias=MELON
    Melon = 360,
    //% blockIdentity="blocks.item" enumval=361 block="カボチャの種(たね)"
    //% jres alias=PUMPKIN_SEEDS
    PumpkinSeeds = 361,
    //% blockIdentity="blocks.item" enumval=362 block="スイカの種(たね)"
    //% jres alias=MELON_SEEDS
    MelonSeeds = 362,
    //% blockIdentity="blocks.item" enumval=363 block="生(なま)の牛肉(ぎゅうにく)"
    //% jres alias=RAW_BEEF
    RawBeef = 363,
    //% blockIdentity="blocks.item" enumval=364 block="調理(ちょうり)した牛肉(ぎゅうにく)"
    //% jres alias=COOKED_BEEF
    CookedBeef = 364,
    //% blockIdentity="blocks.item" enumval=365 block="生(なま)の鶏肉(とりにく)"
    //% jres alias=RAW_CHICKEN
    RawChicken = 365,
    //% blockIdentity="blocks.item" enumval=366 block="焼(や)き鳥(とり)"
    //% jres alias=COOKED_CHICKEN
    CookedChicken = 366,
    //% blockIdentity="blocks.item" enumval=367 block="腐(くさ)った肉(にく)"
    //% jres alias=ROTTEN_FLESH
    RottenFlesh = 367,
    //% blockIdentity="blocks.item" enumval=368 block="エンダーパール"
    //% jres alias=ENDER_PEARL
    EnderPearl = 368,
    //% blockIdentity="blocks.item" enumval=369 block="ブレイズロッド"
    //% jres alias=BLAZE_ROD
    BlazeRod = 369,
    //% blockIdentity="blocks.item" enumval=370 block="ガストの涙(なみだ)"
    //% jres alias=GHAST_TEAR
    GhastTear = 370,
    //% blockIdentity="blocks.item" enumval=371 block="金塊(きんかい)"
    //% jres alias=GOLD_NUGGET
    GoldNugget = 371,
    //% blockIdentity="blocks.item" enumval=372 block="ネザーウォート"
    //% jres alias=NETHER_WART_ITEM
    NetherWart = 372,
    //% blockIdentity="blocks.item" enumval=374 block="ガラス(がらす)瓶(びん)"
    //% jres alias=GLASS_BOTTLE
    GlassBottle = 374,
    //% blockIdentity="blocks.item" enumval=375 block="クモの目(め)"
    //% jres alias=SPIDER_EYE
    SpiderEye = 375,
    //% blockIdentity="blocks.item" enumval=376 block="発酵(はっこう)したクモの目(め)"
    //% jres alias=FERMENTED_SPIDER_EYE
    FermentedSpiderEye = 376,
    //% blockIdentity="blocks.item" enumval=377 block="ブレイズパウダー"
    //% jres alias=BLAZE_POWDER
    BlazePowder = 377,
    //% blockIdentity="blocks.item" enumval=378 block="マグマクリーム"
    //% jres alias=MAGMA_CREAM
    MagmaCream = 378,
    //% blockIdentity="blocks.item" enumval=379 block="醸造(じょうぞう)台(だい)"
    //% jres alias=BREWING_STAND_ITEM
    BrewingStand = 379,
    //% blockIdentity="blocks.item" enumval=380 block="大釜(おおかま)"
    //% jres alias=CAULDRON_ITEM
    Cauldron = 380,
    //% blockIdentity="blocks.item" enumval=381 block="エンダーアイ"
    //% jres alias=ENDER_EYE
    EnderEye = 381,
    //% blockIdentity="blocks.item" enumval=382 block="輝(かがや)くスイカ"
    //% jres alias=GLISTERING_MELON
    GlisteringMelon = 382,
    //% blockIdentity="blocks.item" enumval=655743 block="ニワトリをスポーンさせる"
    //% jres alias=SPAWN_CHICKEN
    SpawnChicken = 655743,
    //% blockIdentity="blocks.item" enumval=721279 block="牛(うし)をスポーンさせる"
    //% jres alias=SPAWN_COW
    SpawnCow = 721279,
    //% blockIdentity="blocks.item" enumval=786815 block="豚(ぶた)をスポーンさせる"
    //% jres alias=SPAWN_PIG
    SpawnPig = 786815,
    //% blockIdentity="blocks.item" enumval=852351 block="羊(ひつじ)をスポーンさせる"
    //% jres alias=SPAWN_SHEEP
    SpawnSheep = 852351,
    //% blockIdentity="blocks.item" enumval=917887 block="オオカミをスポーンさせる"
    //% jres alias=SPAWN_WOLF
    SpawnWolf = 917887,
    //% blockIdentity="blocks.item" enumval=983423 block="村人(むらびと)をスポーンさせる"
    //% jres alias=SPAWN_VILLAGER
    SpawnVillager = 983423,
    //% blockIdentity="blocks.item" enumval=1048959 block="ムーシュルームをスポーンさせる"
    //% jres alias=SPAWN_MOOSHROOM
    SpawnMooshroom = 1048959,
    //% blockIdentity="blocks.item" enumval=1114495 block="イカをスポーンさせる"
    //% jres alias=SPAWN_SQUID
    SpawnSquid = 1114495,
    //% blockIdentity="blocks.item" enumval=1180031 block="ウサギをスポーンさせる"
    //% jres alias=SPAWN_RABBIT
    SpawnRabbit = 1180031,
    //% blockIdentity="blocks.item" enumval=1245567 block="コウモリをスポーンさせる"
    //% jres alias=SPAWN_BAT
    SpawnBat = 1245567,
    //% blockIdentity="blocks.item" enumval=1442175 block="ヤマネコをスポーンさせる"
    //% jres alias=SPAWN_OCELOT
    SpawnOcelot = 1442175,
    //% blockIdentity="blocks.item" enumval=1507711 block="馬(うま)をスポーンさせる"
    //% jres alias=SPAWN_HORSE
    SpawnHorse = 1507711,
    //% blockIdentity="blocks.item" enumval=1573247 block="ロバをスポーンさせる"
    //% jres alias=SPAWN_DONKEY
    SpawnDonkey = 1573247,
    //% blockIdentity="blocks.item" enumval=1638783 block="ラバをスポーンさせる"
    //% jres alias=SPAWN_MULE
    SpawnMule = 1638783,
    //% blockIdentity="blocks.item" enumval=1704319 block="スケルトン ホースをスポーンさせる"
    //% jres alias=SPAWN_SKELETON_HORSE
    SpawnSkeletonHorse = 1704319,
    //% blockIdentity="blocks.item" enumval=1769855 block="ゾンビ馬(ば)をスポーンさせる"
    //% jres alias=SPAWN_ZOMBIE_HORSE
    SpawnZombieHorse = 1769855,
    //% blockIdentity="blocks.item" enumval=1835391 block="ホッキョクグマをスポーンさせる"
    //% jres alias=SPAWN_POLAR_BEAR
    SpawnPolarBear = 1835391,
    //% blockIdentity="blocks.item" enumval=1900927 block="ラマをスポーンさせる"
    //% jres alias=SPAWN_LLAMA
    SpawnLlama = 1900927,
    //% blockIdentity="blocks.item" enumval=1966463 block="オウムをスポーンさせる"
    //% jres alias=SPAWN_PARROT
    SpawnParrot = 1966463,
    //% blockIdentity="blocks.item" enumval=2031960 block="イルカをスポーンさせる"
    //% jres alias=SPAWN_DOLPHIN
    SpawnDolphin = 2031960,
    //% blockIdentity="blocks.item" enumval=3867007 block="ラヴェジャーをスポーンさせる"
    //% jres alias=SPAWN_RAVAGER
    SpawnRavager = 3867007,
    //% blockIdentity="blocks.item" enumval=2097535 block="ゾンビをスポーンさせる"
    //% jres alias=SPAWN_ZOMBIE
    SpawnZombie = 2097535,
    //% blockIdentity="blocks.item" enumval=2163071 block="クリーパーをスポーンさせる"
    //% jres alias=SPAWN_CREEPER
    SpawnCreeper = 2163071,
    //% blockIdentity="blocks.item" enumval=2228607 block="スケルトンをスポーンさせる"
    //% jres alias=SPAWN_SKELETON
    SpawnSkeleton = 2228607,
    //% blockIdentity="blocks.item" enumval=2294143 block="クモをスポーンさせる"
    //% jres alias=SPAWN_SPIDER
    SpawnSpider = 2294143,
    //% blockIdentity="blocks.item" enumval=2359679 block="ゾンビ ピッグマンを出現(しゅつげん)させる"
    //% jres alias=SPAWN_ZOMBIE_PIGMAN
    SpawnZombiePigman = 2359679,
    //% blockIdentity="blocks.item" enumval=2425215 block="スライムをスポーンさせる"
    //% jres alias=SPAWN_SLIME
    SpawnSlime = 2425215,
    //% blockIdentity="blocks.item" enumval=2490751 block="エンダーマンをスポーンさせる"
    //% jres alias=SPAWN_ENDERMAN
    SpawnEnderman = 2490751,
    //% blockIdentity="blocks.item" enumval=2556287 block="シルバーフィッシュをスポーンさせる"
    //% jres alias=SPAWN_SILVERFISH
    SpawnSilverfish = 2556287,
    //% blockIdentity="blocks.item" enumval=2621823 block="洞窟(どうくつ)グモをスポーンさせる"
    //% jres alias=SPAWN_CAVE_SPIDER
    SpawnCaveSpider = 2621823,
    //% blockIdentity="blocks.item" enumval=2687359 block="ガストをスポーンさせる"
    //% jres alias=SPAWN_GHAST
    SpawnGhast = 2687359,
    //% blockIdentity="blocks.item" enumval=2752895 block="マグマ キューブをスポーンさせる"
    //% jres alias=SPAWN_MAGMA_CUBE
    SpawnMagmaCube = 2752895,
    //% blockIdentity="blocks.item" enumval=2818431 block="ブレイズをスポーンさせる"
    //% jres alias=SPAWN_BLAZE
    SpawnBlaze = 2818431,
    //% blockIdentity="blocks.item" enumval=2883967 block="村人(むらびと)ゾンビをスポーンさせる"
    //% jres alias=SPAWN_ZOMBIE_VILLAGER
    SpawnZombieVillager = 2883967,
    //% blockIdentity="blocks.item" enumval=2949503 block="ウィッチをスポーンさせる"
    //% jres alias=SPAWN_WITCH
    SpawnWitch = 2949503,
    //% blockIdentity="blocks.item" enumval=3015039 block="ストレイをスポーンさせる"
    //% jres alias=SPAWN_STRAY
    SpawnStray = 3015039,
    //% blockIdentity="blocks.item" enumval=3080575 block="ハスクをスポーンさせる"
    //% jres alias=SPAWN_HUSK
    SpawnHusk = 3080575,
    //% blockIdentity="blocks.item" enumval=3146111 block="ウィザー スケルトンをスポーンさせる"
    //% jres alias=SPAWN_WITHER_SKELETON
    SpawnWitherSkeleton = 3146111,
    //% blockIdentity="blocks.item" enumval=3211647 block="ガーディアンをスポーンさせる"
    //% jres alias=SPAWN_GUARDIAN
    SpawnGuardian = 3211647,
    //% blockIdentity="blocks.item" enumval=3277183 block="エルダー ガーディアンをスポーンさせる"
    //% jres alias=SPAWN_ELDER_GUARDIAN
    SpawnElderGuardian = 3277183,
    //% blockIdentity="blocks.item" enumval=3539327 block="シュルカーをスポーンさせる"
    //% jres alias=SPAWN_SHULKER
    SpawnShulker = 3539327,
    //% blockIdentity="blocks.item" enumval=3604863 block="エンダーマイトをスポーンさせる"
    //% jres alias=SPAWN_ENDERMITE
    SpawnEndermite = 3604863,
    //% blockIdentity="blocks.item" enumval=3735935 block="ヴィンディケーターをスポーンさせる"
    //% jres alias=SPAWN_VINDICATOR
    SpawnVindicator = 3735935,
    //% blockIdentity="blocks.item" enumval=3801471 block="ファントムをスポーンさせる"
    //% jres alias=SPAWN_PHANTOM
    SpawnPhantom = 3801471,
    //% blockIdentity="blocks.item" enumval=4850047 block="ウミガメをスポーンさせる"
    //% jres alias=SPAWN_SEA_TURTLE
    SpawnSeaTurtle = 4850047,
    //% blockIdentity="blocks.item" enumval=4915583 block="ネコをスポーンさせる"
    //% jres alias=SPAWN_CAT
    SpawnCat = 4915583,
    //% blockIdentity="blocks.item" enumval=6816127 block="エヴォーカーをスポーンさせる"
    //% jres alias=SPAWN_EVOKER
    SpawnEvoker = 6816127,
    //% blockIdentity="blocks.item" enumval=6881663 block="ヴェックスをスポーンさせる"
    //% jres alias=SPAWN_VEX
    SpawnVex = 6881663,
    //% blockIdentity="blocks.item" enumval=7078271 block="フグをスポーンさせる"
    //% jres alias=SPAWN_PUFFERFISH
    SpawnPufferfish = 7078271,
    //% blockIdentity="blocks.item" enumval=7143768 block="鮭(さけ)をスポーンさせる"
    //% jres alias=SPAWN_SALMON
    SpawnSalmon = 7143768,
    //% blockIdentity="blocks.item" enumval=7209343 block="溺死(できし)ゾンビをスポーンさせる"
    //% jres alias=SPAWN_DROWNED
    SpawnDrowned = 7209343,
    //% blockIdentity="blocks.item" enumval=7274840 block="熱帯魚(ねったいぎょ)をスポーンさせる"
    //% jres alias=SPAWN_TROPICAL_FISH
    SpawnTropicalFish = 7274840,
    //% blockIdentity="blocks.item" enumval=7340376 block="タラをスポーンさせる"
    //% jres alias=SPAWN_COD
    SpawnCod = 7340376,
    //% blockIdentity="blocks.item" enumval=7930239 block="キツネをスポーンさせる"
    //% jres alias=SPAWN_FOX
    SpawnFox = 7930239,
    //% blockIdentity="blocks.item" enumval=7405951 block="パンダをスポーンさせる"
    //% jres alias=SPAWN_PANDA
    SpawnPanda = 7405951,
    //% blockIdentity="blocks.item" enumval=7471487 block="略奪者(りゃくだつしゃ)をスポーンさせる"
    //% jres alias=SPAWN_PILLAGER
    SpawnPillager = 7471487,
    //% blockIdentity="blocks.item" enumval=7733631 block="行商人(ぎょうしょうにん)をスポーンさせる"
    //% jres alias=SPAWN_WANDERING_TRADER
    SpawnWanderingTrader = 7733631,
    //% blockIdentity="blocks.item" enumval=7995775 block="ハチをスポーンさせる"
    //% jres alias=SPAWN_BEE
    SpawnBee = 7995775,
    //% blockIdentity="blocks.item" enumval=384 block="エンチャントの瓶(びん)"
    //% jres alias=EXPERIENCE_BOTTLE
    ExperienceBottle = 384,
    //% blockIdentity="blocks.item" enumval=385 block="ファイヤーチャージ"
    //% jres alias=FIREBALL
    Fireball = 385,
    //% blockIdentity="blocks.item" enumval=386 block="本(ほん)と羽(はね)ペン"
    //% jres alias=BOOK_QUILL
    BookQuill = 386,
    //% blockIdentity="blocks.item" enumval=388 block="エメラルド"
    //% jres alias=EMERALD
    Emerald = 388,
    //% blockIdentity="blocks.item" enumval=389 block="額縁(がくぶち)"
    //% jres alias=ITEM_FRAME
    ItemFrame = 389,
    //% blockIdentity="blocks.item" enumval=390 block="植木鉢(うえきばち)"
    //% jres alias=FLOWER_POT_ITEM
    FlowerPot = 390,
    //% blockIdentity="blocks.item" enumval=391 block="ニンジン"
    //% jres alias=CARROT
    Carrot = 391,
    //% blockIdentity="blocks.item" enumval=392 block="ジャガイモ"
    //% jres alias=POTATO
    Potato = 392,
    //% blockIdentity="blocks.item" enumval=393 block="ベイクドポテト"
    //% jres alias=BAKED_POTATO
    BakedPotato = 393,
    //% blockIdentity="blocks.item" enumval=394 block="青(あお)くなったジャガイモ"
    //% jres alias=POISONOUS_POTATO
    PoisonousPotato = 394,
    //% blockIdentity="blocks.item" enumval=395 block="白紙(はくし)の地図(ちず)"
    //% jres alias=EMPTY_MAP
    EmptyMap = 395,
    //% blockIdentity="blocks.item" enumval=131467 block="まっさらな地図(ちず)"
    //% jres alias=EMPTY_LOCATOR_MAP
    EmptyLocatorMap = 131467,
    //% blockIdentity="blocks.item" enumval=396 block="金(きん)のニンジン"
    //% jres alias=GOLDEN_CARROT
    GoldenCarrot = 396,
    //% blockIdentity="blocks.item" enumval=398 block="ニンジン付(つ)きの棒(ぼう)"
    //% jres alias=CARROT_ON_A_STICK
    CarrotOnAStick = 398,
    //% blockIdentity="blocks.item" enumval=399 block="ネザースター"
    //% jres alias=NETHER_STAR
    NetherStar = 399,
    //% blockIdentity="blocks.item" enumval=400 block="パンプキンパイ"
    //% jres alias=PUMPKIN_PIE
    PumpkinPie = 400,
    //% blockIdentity="blocks.item" enumval=403 block="エンチャントの本(ほん)"
    //% jres alias=ENCHANTED_BOOK
    EnchantedBook = 403,
    //% blockIdentity="blocks.item" enumval=404 block="レッドストーンコンパレーター"
    //% jres alias=COMPARATOR
    Comparator = 404,
    //% blockIdentity="blocks.item" enumval=405 block="ネザーレンガ"
    //% jres alias=NETHERBRICK
    Netherbrick = 405,
    //% blockIdentity="blocks.item" enumval=406 block="ネザークォーツ"
    //% jres alias=QUARTZ
    Quartz = 406,
    //% blockIdentity="blocks.item" enumval=407 block="TNT付(つ)きのトロッコ"
    //% jres alias=MINECART_WITH_T_N_T
    MinecartWithTNT = 407,
    //% blockIdentity="blocks.item" enumval=408 block="ホッパー付(つ)きトロッコ"
    //% jres alias=MINECART_WITH_HOPPER
    MinecartWithHopper = 408,
    //% blockIdentity="blocks.item" enumval=409 block="プリズマリンの欠片(かけら)"
    //% jres alias=PRISMARINE_SHARD
    PrismarineShard = 409,
    //% blockIdentity="blocks.item" enumval=410 block="ホッパー"
    //% jres alias=HOPPER_ITEM
    Hopper = 410,
    //% blockIdentity="blocks.item" enumval=411 block="生(なま)の兎(うさぎ)肉(にく)"
    //% jres alias=RAW_RABBIT
    RawRabbit = 411,
    //% blockIdentity="blocks.item" enumval=412 block="焼(や)き兎(うさぎ)肉(にく)"
    //% jres alias=COOKED_RABBIT
    CookedRabbit = 412,
    //% blockIdentity="blocks.item" enumval=413 block="ウサギシチュー"
    //% jres alias=RABBIT_STEW
    RabbitStew = 413,
    //% blockIdentity="blocks.item" enumval=414 block="ウサギの足(あし)"
    //% jres alias=RABBIT_FOOT
    RabbitFoot = 414,
    //% blockIdentity="blocks.item" enumval=415 block="ウサギの皮(かわ)"
    //% jres alias=RABBIT_HIDE
    RabbitHide = 415,
    //% blockIdentity="blocks.item" enumval=416 block="革(かわ)の馬(うま)鎧(よろい)"
    //% jres alias=LEATHER_HORSE_ARMOR
    LeatherHorseArmor = 416,
    //% blockIdentity="blocks.item" enumval=417 block="鉄(てつ)の馬(うま)鎧(よろい)"
    //% jres alias=IRON_HORSE_ARMOR
    IronHorseArmor = 417,
    //% blockIdentity="blocks.item" enumval=418 block="金(きん)の馬(うま)鎧(よろい)"
    //% jres alias=GOLD_HORSE_ARMOR
    GoldHorseArmor = 418,
    //% blockIdentity="blocks.item" enumval=419 block="ダイヤモンドの馬(うま)鎧(よろい)"
    //% jres alias=DIAMOND_HORSE_ARMOR
    DiamondHorseArmor = 419,
    //% blockIdentity="blocks.item" enumval=420 block="リード"
    //% jres alias=LEAD_ITEM
    Lead = 420,
    //% blockIdentity="blocks.item" enumval=421 block="名札(なふだ)"
    //% jres alias=NAME_TAG
    NameTag = 421,
    //% blockIdentity="blocks.item" enumval=422 block="プリズマリンクリスタル"
    //% jres alias=PRISMARINE_CRYSTALS
    PrismarineCrystals = 422,
    //% blockIdentity="blocks.item" enumval=423 block="生(なま)の羊肉(ようにく)"
    //% jres alias=RAW_MUTTON
    RawMutton = 423,
    //% blockIdentity="blocks.item" enumval=424 block="焼(や)き羊肉(ようにく)"
    //% jres alias=COOKED_MUTTON
    CookedMutton = 424,
    //% blockIdentity="blocks.item" enumval=425 block="防具(ぼうぐ)立(た)て"
    //% jres alias=ARMOR_STAND
    ArmorStand = 425,
    //% blockIdentity="blocks.item" enumval=426 block="エンドクリスタル"
    //% jres alias=END_CRYSTAL
    EndCrystal = 426,
    //% blockIdentity="blocks.item" enumval=427 block="トウヒのドア"
    //% jres alias=SPRUCE_DOOR
    SpruceDoor = 427,
    //% blockIdentity="blocks.item" enumval=428 block="シラカバのドア"
    //% jres alias=BIRCH_DOOR
    BirchDoor = 428,
    //% blockIdentity="blocks.item" enumval=429 block="ジャングルのドア"
    //% jres alias=JUNGLE_DOOR
    JungleDoor = 429,
    //% blockIdentity="blocks.item" enumval=430 block="アカシアのドア"
    //% jres alias=ACACIA_DOOR
    AcaciaDoor = 430,
    //% blockIdentity="blocks.item" enumval=431 block="ダークオークのドア"
    //% jres alias=DARK_OAK_DOOR
    DarkOakDoor = 431,
    //% blockIdentity="blocks.item" enumval=432 block="コーラスフルーツ"
    //% jres alias=CHORUS_FRUIT
    ChorusFruit = 432,
    //% blockIdentity="blocks.item" enumval=433 block="焼(や)いたコーラスフルーツ"
    //% jres alias=CHORUS_FRUIT_POPPED
    ChorusFruitPopped = 433,
    //% blockIdentity="blocks.item" enumval=437 block="ドラゴンブレス"
    //% jres alias=DRAGON_S_BREATH
    DragonSBreath = 437,
    //% blockIdentity="blocks.item" enumval=444 block="虫(むし)の羽根(はね)"
    //% jres alias=ELYTRA
    Elytra = 444,
    //% blockIdentity="blocks.item" enumval=445 block="シュルカーの殻(から)"
    //% jres alias=SHULKER_SHELL
    ShulkerShell = 445,
    //% blockIdentity="blocks.item" enumval=450 block="不死(ふし)のトーテム"
    //% jres alias=TOTEM
    Totem = 450,
    //% blockIdentity="blocks.item" enumval=452 block="鉄塊(てっかい)"
    //% jres alias=IRON_NUGGET
    IronNugget = 452,
    //% blockIdentity="blocks.item" enumval=455 block="トライデント"
    //% jres alias=TRIDENT
    Trident = 455,
    //% blockIdentity="blocks.item" enumval=457 block="ビートルート"
    //% jres alias=BEETROOT_ITEM
    Beetroot = 457,
    //% blockIdentity="blocks.item" enumval=458 block="ビートルートの種(たね)"
    //% jres alias=BEETROOT_SEEDS
    BeetrootSeeds = 458,
    //% blockIdentity="blocks.item" enumval=459 block="ビートルートスープ"
    //% jres alias=BEETROOT_SOUP
    BeetrootSoup = 459,
    //% blockIdentity="blocks.item" enumval=460 block="生鮭(なまざけ)"
    //% jres alias=RAW_SALMON
    RawSalmon = 460,
    //% blockIdentity="blocks.item" enumval=461 block="クマノミ"
    //% jres alias=CLOWNFISH
    Clownfish = 461,
    //% blockIdentity="blocks.item" enumval=462 block="フグ"
    //% jres alias=PUFFERFISH_ITEM
    Pufferfish = 462,
    //% blockIdentity="blocks.item" enumval=463 block="焼(や)き鮭(さけ)"
    //% jres alias=COOKED_SALMON
    CookedSalmon = 463,
    //% blockIdentity="blocks.item" enumval=464 block="乾燥(かんそう)した昆布(こんぶ)"
    //% jres alias=DRIED_KELP
    DriedKelp = 464,
    //% blockIdentity="blocks.item" enumval=466 block="エンチャントされたリンゴ"
    //% jres alias=ENCHANTED_APPLE
    EnchantedApple = 466,
    //% blockIdentity="blocks.item" enumval=467 block="海洋(かいよう)の心(こころ)"
    //% jres alias=HEART_OF_THE_SEA
    HeartOfTheSea = 467,
    //% blockIdentity="blocks.item" enumval=477 block="スイートベリー"
    //% jres alias=SWEET_BERRIES
    SweetBerries = 477,
    //% blockIdentity="blocks.item" enumval=513 block="盾(たて)"
    //% jres alias=SHIELD
    Shield = 513,
    //% blockIdentity="blocks.item" enumval=720 block="焚(た)き火(び)"
    //% jres alias=CAMPFIRE_ITEM
    Campfire = 720,
    //% blockIdentity="blocks.item" enumval=736 block="ハニカム"
    //% jres alias=HONEYCOMB
    Honeycomb = 736,
    //% blockIdentity="blocks.item" enumval=737 block="ハチミツ入(い)りの瓶(びん)"
    //% jres alias=HONEY_BOTTLE
    HoneyBottle = 737,
    //% blockIdentity="blocks.item" enumval=790 block="ピグリンをスポーンさせる"
    //% jres alias=SPAWN_PIGLIN
    SpawnPiglin = 790,
    //% blockIdentity="blocks.item" enumval=791 block="ネザライトインゴット"
    //% jres alias=NETHERITE_INGOT
    NetheriteIngot = 791,
    //% blockIdentity="blocks.item" enumval=792 block="銅(どう)インゴット"
    //% jres alias=COPPER_INGOT
    CopperIngot = 792,
    //% blockIdentity="blocks.item" enumval=793 block="緑色(みどりいろ)の染料(せんりょう)"
    //% jres alias=GREEN_DYE
    GreenDye = 793,
    //% blockIdentity="blocks.item" enumval=794 block="グロウベリー"
    //% jres alias=GLOW_BERRIES
    GlowBerries = 794,
    //% blockIdentity="blocks.item" enumval=795 block="赤色(あかいろ)の染料(せんりょう)"
    //% jres alias=RED_DYE
    RedDye = 795,
    //% blockIdentity="blocks.item" enumval=796 block="黄色(きいろ)の染料(せんりょう)"
    //% jres alias=YELLOW_DYE
    YellowDye = 796,
    //% blockIdentity="blocks.item" enumval=797 block="輝(かがや)くイカスミ"
    //% jres alias=GLOW_INK_SAC
    GlowInkSac = 797,
    //% blockIdentity="blocks.item" enumval=798 block="ネザライトの剣(けん)"
    //% jres alias=NETHERITE_SWORD
    NetheriteSword = 798,
    //% blockIdentity="blocks.item" enumval=799 block="ゾンビ化(か)ピグリンをスポーンさせる"
    //% jres alias=SPAWN_ZOMBIFIED_PIGLIN
    SpawnZombifiedPiglin = 799,
    //% blockIdentity="blocks.item" enumval=800 block="発光(はっこう)するイカをスポーンさせる"
    //% jres alias=SPAWN_GLOW_SQUID
    SpawnGlowSquid = 800,
    //% blockIdentity="blocks.item" enumval=801 block="ストライダーをスポーンさせる"
    //% jres alias=SPAWN_STRIDER
    SpawnStrider = 801,
    //% blockIdentity="blocks.item" enumval=802 block="ホグリンをスポーンさせる"
    //% jres alias=SPAWN_HOGLIN
    SpawnHoglin = 802,
    //% blockIdentity="blocks.item" enumval=803 block="ゾグリンをスポーンさせる"
    //% jres alias=SPAWN_ZOGLIN
    SpawnZoglin = 803,
    //% blockIdentity="blocks.item" enumval=804 block="ヤギをスポーンさせる"
    //% jres alias=SPAWN_GOAT
    SpawnGoat = 804,
    //% blockIdentity="blocks.item" enumval=805 block="ウーパールーパーをスポーンさせる"
    //% jres alias=SPAWN_AXOLOTL
    SpawnAxolotl = 805,
    //% blockIdentity="blocks.item" enumval=806 block="ネザライトのヘルメット"
    //% jres alias=NETHERITE_HELMET
    NetheriteHelmet = 806,
    //% blockIdentity="blocks.item" enumval=807 block="ネザライトのチェストプレート"
    //% jres alias=NETHERITE_CHESTPLATE
    NetheriteChestplate = 807,
    //% blockIdentity="blocks.item" enumval=808 block="ネザライトのレギンス"
    //% jres alias=NETHERITE_LEGGINGS
    NetheriteLeggings = 808,
    //% blockIdentity="blocks.item" enumval=809 block="ネザライトのブーツ"
    //% jres alias=NETHERITE_BOOTS
    NetheriteBoots = 809,
    //% blockIdentity="blocks.item" enumval=810 block="ネザライトの斧(おの)"
    //% jres alias=NETHERITE_AXE
    NetheriteAxe = 810,
    //% blockIdentity="blocks.item" enumval=811 block="ネザライトのツルハシ"
    //% jres alias=NETHERITE_PICKAXE
    NetheritePickaxe = 811,
    //% blockIdentity="blocks.item" enumval=812 block="銅(どう)の原石(げんせき)"
    //% jres alias=RAW_COPPER
    RawCopper = 812,
    //% blockIdentity="blocks.item" enumval=813 block="ネザライトのシャベル"
    //% jres alias=NETHERITE_SHOVEL
    NetheriteShovel = 813,
    //% blockIdentity="blocks.item" enumval=814 block="ネザライトのクワ"
    //% jres alias=NETHERITE_HOE
    NetheriteHoe = 814,
    //% blockIdentity="blocks.item" enumval=815 block="歪(ゆが)んだキノコ付(つ)きの棒(ぼう)"
    //% jres alias=WARPED_FUNGUS_ON_A_STICK
    WarpedFungusOnAStick = 815,
    //% blockIdentity="blocks.item" enumval=816 block="粉雪(こなゆき)入(はい)りバケツ"
    //% jres alias=POWDER_SNOW_BUCKET
    PowderSnowBucket = 816,
    //% blockIdentity="blocks.item" enumval=817 block="ウーパールーパー入(はい)りバケツ"
    //% jres alias=BUCKET_OF_AXOLOTL
    BucketOfAxolotl = 817,
    //% blockIdentity="blocks.item" enumval=818 block="鉄(てつ)の原石(げんせき)"
    //% jres alias=RAW_IRON
    RawIron = 818,
    //% blockIdentity="blocks.item" enumval=819 block="金(きん)の原石(げんせき)"
    //% jres alias=RAW_GOLD
    RawGold = 819,
    //% blockIdentity="blocks.item" enumval=820 block="ネザライトの欠片(かけら)"
    //% jres alias=NETHERITE_SCRAP
    NetheriteScrap = 820,
}

function toItem(item: RubyItem): Item {
    switch (item) {
        case RubyItem.AcaciaBoat: return Item.AcaciaBoat;
        case RubyItem.AcaciaDoor: return Item.AcaciaDoor;
        case RubyItem.Apple: return Item.Apple;
        case RubyItem.ArmorStand: return Item.ArmorStand;
        case RubyItem.Arrow: return Item.Arrow;
        case RubyItem.BakedPotato: return Item.BakedPotato;
        case RubyItem.Bed: return Item.Bed;
        case RubyItem.Beetroot: return Item.Beetroot;
        case RubyItem.BeetrootSeeds: return Item.BeetrootSeeds;
        case RubyItem.BeetrootSoup: return Item.BeetrootSoup;
        case RubyItem.BirchBoat: return Item.BirchBoat;
        case RubyItem.BirchDoor: return Item.BirchDoor;
        case RubyItem.BlackBed: return Item.BlackBed;
        case RubyItem.BlazePowder: return Item.BlazePowder;
        case RubyItem.BlazeRod: return Item.BlazeRod;
        case RubyItem.BlueBed: return Item.BlueBed;
        case RubyItem.Boat: return Item.Boat;
        case RubyItem.Bone: return Item.Bone;
        case RubyItem.BoneMeal: return Item.BoneMeal;
        case RubyItem.Book: return Item.Book;
        case RubyItem.BookQuill: return Item.BookQuill;
        case RubyItem.Bow: return Item.Bow;
        case RubyItem.Bowl: return Item.Bowl;
        case RubyItem.Bread: return Item.Bread;
        case RubyItem.BrewingStand: return Item.BrewingStand;
        case RubyItem.Brick: return Item.Brick;
        case RubyItem.BrownBed: return Item.BrownBed;
        case RubyItem.Bucket: return Item.Bucket;
        case RubyItem.BucketOfAxolotl: return Item.BucketOfAxolotl;
        case RubyItem.BucketOfCod: return Item.BucketOfCod;
        case RubyItem.BucketOfSalmon: return Item.BucketOfSalmon;
        case RubyItem.BucketOfTropicalFish: return Item.BucketOfTropicalFish;
        case RubyItem.CactusGreen: return Item.CactusGreen;
        case RubyItem.Cake: return Item.Cake;
        case RubyItem.Campfire: return Item.Campfire;
        case RubyItem.Carrot: return Item.Carrot;
        case RubyItem.CarrotOnAStick: return Item.CarrotOnAStick;
        case RubyItem.Cauldron: return Item.Cauldron;
        case RubyItem.ChainmailBoots: return Item.ChainmailBoots;
        case RubyItem.ChainmailChestplate: return Item.ChainmailChestplate;
        case RubyItem.ChainmailHelmet: return Item.ChainmailHelmet;
        case RubyItem.ChainmailLeggings: return Item.ChainmailLeggings;
        case RubyItem.Charcoal: return Item.Charcoal;
        case RubyItem.ChorusFruit: return Item.ChorusFruit;
        case RubyItem.ChorusFruitPopped: return Item.ChorusFruitPopped;
        case RubyItem.ClayBall: return Item.ClayBall;
        case RubyItem.Clock: return Item.Clock;
        case RubyItem.Clownfish: return Item.Clownfish;
        case RubyItem.Coal: return Item.Coal;
        case RubyItem.CocoaBeans: return Item.CocoaBeans;
        case RubyItem.Comparator: return Item.Comparator;
        case RubyItem.Compass: return Item.Compass;
        case RubyItem.CookedBeef: return Item.CookedBeef;
        case RubyItem.CookedChicken: return Item.CookedChicken;
        case RubyItem.CookedFish: return Item.CookedFish;
        case RubyItem.CookedMutton: return Item.CookedMutton;
        case RubyItem.CookedPorkchop: return Item.CookedPorkchop;
        case RubyItem.CookedRabbit: return Item.CookedRabbit;
        case RubyItem.CookedSalmon: return Item.CookedSalmon;
        case RubyItem.Cookie: return Item.Cookie;
        case RubyItem.CopperIngot: return Item.CopperIngot;
        case RubyItem.CyanBed: return Item.CyanBed;
        case RubyItem.CyanDye: return Item.CyanDye;
        case RubyItem.DandelionYellow: return Item.DandelionYellow;
        case RubyItem.DarkOakBoat: return Item.DarkOakBoat;
        case RubyItem.DarkOakDoor: return Item.DarkOakDoor;
        case RubyItem.Diamond: return Item.Diamond;
        case RubyItem.DiamondAxe: return Item.DiamondAxe;
        case RubyItem.DiamondBoots: return Item.DiamondBoots;
        case RubyItem.DiamondChestplate: return Item.DiamondChestplate;
        case RubyItem.DiamondHelmet: return Item.DiamondHelmet;
        case RubyItem.DiamondHoe: return Item.DiamondHoe;
        case RubyItem.DiamondHorseArmor: return Item.DiamondHorseArmor;
        case RubyItem.DiamondLeggings: return Item.DiamondLeggings;
        case RubyItem.DiamondPickaxe: return Item.DiamondPickaxe;
        case RubyItem.DiamondShovel: return Item.DiamondShovel;
        case RubyItem.DiamondSword: return Item.DiamondSword;
        case RubyItem.DragonSBreath: return Item.DragonSBreath;
        case RubyItem.DriedKelp: return Item.DriedKelp;
        case RubyItem.Egg: return Item.Egg;
        case RubyItem.Elytra: return Item.Elytra;
        case RubyItem.Emerald: return Item.Emerald;
        case RubyItem.EmptyLocatorMap: return Item.EmptyLocatorMap;
        case RubyItem.EmptyMap: return Item.EmptyMap;
        case RubyItem.EnchantedApple: return Item.EnchantedApple;
        case RubyItem.EnchantedBook: return Item.EnchantedBook;
        case RubyItem.EndCrystal: return Item.EndCrystal;
        case RubyItem.EnderEye: return Item.EnderEye;
        case RubyItem.EnderPearl: return Item.EnderPearl;
        case RubyItem.ExperienceBottle: return Item.ExperienceBottle;
        case RubyItem.Feather: return Item.Feather;
        case RubyItem.FermentedSpiderEye: return Item.FermentedSpiderEye;
        case RubyItem.Fireball: return Item.Fireball;
        case RubyItem.FishingRod: return Item.FishingRod;
        case RubyItem.Flint: return Item.Flint;
        case RubyItem.FlintAndSteel: return Item.FlintAndSteel;
        case RubyItem.FlowerPot: return Item.FlowerPot;
        case RubyItem.GhastTear: return Item.GhastTear;
        case RubyItem.GlassBottle: return Item.GlassBottle;
        case RubyItem.GlisteringMelon: return Item.GlisteringMelon;
        case RubyItem.GlowBerries: return Item.GlowBerries;
        case RubyItem.GlowInkSac: return Item.GlowInkSac;
        case RubyItem.GlowstoneDust: return Item.GlowstoneDust;
        case RubyItem.GoldenApple: return Item.GoldenApple;
        case RubyItem.GoldenAxe: return Item.GoldenAxe;
        case RubyItem.GoldenBoots: return Item.GoldenBoots;
        case RubyItem.GoldenCarrot: return Item.GoldenCarrot;
        case RubyItem.GoldenChestplate: return Item.GoldenChestplate;
        case RubyItem.GoldenHelmet: return Item.GoldenHelmet;
        case RubyItem.GoldenHoe: return Item.GoldenHoe;
        case RubyItem.GoldenLeggings: return Item.GoldenLeggings;
        case RubyItem.GoldenPickaxe: return Item.GoldenPickaxe;
        case RubyItem.GoldenShovel: return Item.GoldenShovel;
        case RubyItem.GoldenSword: return Item.GoldenSword;
        case RubyItem.GoldHorseArmor: return Item.GoldHorseArmor;
        case RubyItem.GoldIngot: return Item.GoldIngot;
        case RubyItem.GoldNugget: return Item.GoldNugget;
        case RubyItem.GrayBed: return Item.GrayBed;
        case RubyItem.GrayDye: return Item.GrayDye;
        case RubyItem.GreenBed: return Item.GreenBed;
        case RubyItem.GreenDye: return Item.GreenDye;
        case RubyItem.Gunpowder: return Item.Gunpowder;
        case RubyItem.HeartOfTheSea: return Item.HeartOfTheSea;
        case RubyItem.HoneyBottle: return Item.HoneyBottle;
        case RubyItem.Honeycomb: return Item.Honeycomb;
        case RubyItem.Hopper: return Item.Hopper;
        case RubyItem.InkSac: return Item.InkSac;
        case RubyItem.IronAxe: return Item.IronAxe;
        case RubyItem.IronBoots: return Item.IronBoots;
        case RubyItem.IronChestplate: return Item.IronChestplate;
        case RubyItem.IronDoor: return Item.IronDoor;
        case RubyItem.IronHelmet: return Item.IronHelmet;
        case RubyItem.IronHoe: return Item.IronHoe;
        case RubyItem.IronHorseArmor: return Item.IronHorseArmor;
        case RubyItem.IronIngot: return Item.IronIngot;
        case RubyItem.IronLeggings: return Item.IronLeggings;
        case RubyItem.IronNugget: return Item.IronNugget;
        case RubyItem.IronPickaxe: return Item.IronPickaxe;
        case RubyItem.IronShovel: return Item.IronShovel;
        case RubyItem.IronSword: return Item.IronSword;
        case RubyItem.ItemFrame: return Item.ItemFrame;
        case RubyItem.JungleBoat: return Item.JungleBoat;
        case RubyItem.JungleDoor: return Item.JungleDoor;
        case RubyItem.Kelp: return Item.Kelp;
        case RubyItem.LapisLazuli: return Item.LapisLazuli;
        case RubyItem.LavaBucket: return Item.LavaBucket;
        case RubyItem.Lead: return Item.Lead;
        case RubyItem.Leather: return Item.Leather;
        case RubyItem.LeatherBoots: return Item.LeatherBoots;
        case RubyItem.LeatherCap: return Item.LeatherCap;
        case RubyItem.LeatherChestplate: return Item.LeatherChestplate;
        case RubyItem.LeatherHorseArmor: return Item.LeatherHorseArmor;
        case RubyItem.LeatherPants: return Item.LeatherPants;
        case RubyItem.LightBlueBed: return Item.LightBlueBed;
        case RubyItem.LightBlueDye: return Item.LightBlueDye;
        case RubyItem.LightGrayBed: return Item.LightGrayBed;
        case RubyItem.LightGrayDye: return Item.LightGrayDye;
        case RubyItem.LimeBed: return Item.LimeBed;
        case RubyItem.LimeDye: return Item.LimeDye;
        case RubyItem.MagentaBed: return Item.MagentaBed;
        case RubyItem.MagentaDye: return Item.MagentaDye;
        case RubyItem.MagmaCream: return Item.MagmaCream;
        case RubyItem.Map: return Item.Map;
        case RubyItem.Melon: return Item.Melon;
        case RubyItem.MelonSeeds: return Item.MelonSeeds;
        case RubyItem.Milk: return Item.Milk;
        case RubyItem.Minecart: return Item.Minecart;
        case RubyItem.MinecartWithChest: return Item.MinecartWithChest;
        case RubyItem.MinecartWithHopper: return Item.MinecartWithHopper;
        case RubyItem.MinecartWithTNT: return Item.MinecartWithTNT;
        case RubyItem.MushroomStew: return Item.MushroomStew;
        case RubyItem.NameTag: return Item.NameTag;
        case RubyItem.Netherbrick: return Item.Netherbrick;
        case RubyItem.NetheriteAxe: return Item.NetheriteAxe;
        case RubyItem.NetheriteBoots: return Item.NetheriteBoots;
        case RubyItem.NetheriteChestplate: return Item.NetheriteChestplate;
        case RubyItem.NetheriteHelmet: return Item.NetheriteHelmet;
        case RubyItem.NetheriteHoe: return Item.NetheriteHoe;
        case RubyItem.NetheriteIngot: return Item.NetheriteIngot;
        case RubyItem.NetheriteLeggings: return Item.NetheriteLeggings;
        case RubyItem.NetheritePickaxe: return Item.NetheritePickaxe;
        case RubyItem.NetheriteScrap: return Item.NetheriteScrap;
        case RubyItem.NetheriteShovel: return Item.NetheriteShovel;
        case RubyItem.NetheriteSword: return Item.NetheriteSword;
        case RubyItem.NetherStar: return Item.NetherStar;
        case RubyItem.NetherWart: return Item.NetherWart;
        case RubyItem.OakDoor: return Item.OakDoor;
        case RubyItem.OrangeBed: return Item.OrangeBed;
        case RubyItem.OrangeDye: return Item.OrangeDye;
        case RubyItem.Painting: return Item.Painting;
        case RubyItem.Paper: return Item.Paper;
        case RubyItem.PinkBed: return Item.PinkBed;
        case RubyItem.PinkDye: return Item.PinkDye;
        case RubyItem.PoisonousPotato: return Item.PoisonousPotato;
        case RubyItem.Potato: return Item.Potato;
        case RubyItem.PowderSnowBucket: return Item.PowderSnowBucket;
        case RubyItem.PrismarineCrystals: return Item.PrismarineCrystals;
        case RubyItem.PrismarineShard: return Item.PrismarineShard;
        case RubyItem.Pufferfish: return Item.Pufferfish;
        case RubyItem.PumpkinPie: return Item.PumpkinPie;
        case RubyItem.PumpkinSeeds: return Item.PumpkinSeeds;
        case RubyItem.PurpleBed: return Item.PurpleBed;
        case RubyItem.PurpleDye: return Item.PurpleDye;
        case RubyItem.Quartz: return Item.Quartz;
        case RubyItem.RabbitFoot: return Item.RabbitFoot;
        case RubyItem.RabbitHide: return Item.RabbitHide;
        case RubyItem.RabbitStew: return Item.RabbitStew;
        case RubyItem.RawBeef: return Item.RawBeef;
        case RubyItem.RawChicken: return Item.RawChicken;
        case RubyItem.RawCopper: return Item.RawCopper;
        case RubyItem.RawFish: return Item.RawFish;
        case RubyItem.RawGold: return Item.RawGold;
        case RubyItem.RawIron: return Item.RawIron;
        case RubyItem.RawMutton: return Item.RawMutton;
        case RubyItem.RawPorkchop: return Item.RawPorkchop;
        case RubyItem.RawRabbit: return Item.RawRabbit;
        case RubyItem.RawSalmon: return Item.RawSalmon;
        case RubyItem.RedBed: return Item.RedBed;
        case RubyItem.RedDye: return Item.RedDye;
        case RubyItem.Redstone: return Item.Redstone;
        case RubyItem.Reeds: return Item.Reeds;
        case RubyItem.Repeater: return Item.Repeater;
        case RubyItem.RoseRed: return Item.RoseRed;
        case RubyItem.RottenFlesh: return Item.RottenFlesh;
        case RubyItem.Saddle: return Item.Saddle;
        case RubyItem.Seeds: return Item.Seeds;
        case RubyItem.Shears: return Item.Shears;
        case RubyItem.Shield: return Item.Shield;
        case RubyItem.ShulkerShell: return Item.ShulkerShell;
        // case RubyItem.Sign: return Item.Sign;
        case RubyItem.Slimeball: return Item.Slimeball;
        case RubyItem.Snowball: return Item.Snowball;
        case RubyItem.SpawnAxolotl: return Item.SpawnAxolotl;
        case RubyItem.SpawnBat: return Item.SpawnBat;
        case RubyItem.SpawnBee: return Item.SpawnBee;
        case RubyItem.SpawnBlaze: return Item.SpawnBlaze;
        case RubyItem.SpawnCat: return Item.SpawnCat;
        case RubyItem.SpawnCaveSpider: return Item.SpawnCaveSpider;
        case RubyItem.SpawnChicken: return Item.SpawnChicken;
        case RubyItem.SpawnCod: return Item.SpawnCod;
        case RubyItem.SpawnCow: return Item.SpawnCow;
        case RubyItem.SpawnCreeper: return Item.SpawnCreeper;
        case RubyItem.SpawnDolphin: return Item.SpawnDolphin;
        case RubyItem.SpawnDonkey: return Item.SpawnDonkey;
        case RubyItem.SpawnDrowned: return Item.SpawnDrowned;
        case RubyItem.SpawnElderGuardian: return Item.SpawnElderGuardian;
        case RubyItem.SpawnEnderman: return Item.SpawnEnderman;
        case RubyItem.SpawnEndermite: return Item.SpawnEndermite;
        case RubyItem.SpawnEvoker: return Item.SpawnEvoker;
        case RubyItem.SpawnFox: return Item.SpawnFox;
        case RubyItem.SpawnGhast: return Item.SpawnGhast;
        case RubyItem.SpawnGlowSquid: return Item.SpawnGlowSquid;
        case RubyItem.SpawnGoat: return Item.SpawnGoat;
        case RubyItem.SpawnGuardian: return Item.SpawnGuardian;
        case RubyItem.SpawnHoglin: return Item.SpawnHoglin;
        case RubyItem.SpawnHorse: return Item.SpawnHorse;
        case RubyItem.SpawnHusk: return Item.SpawnHusk;
        case RubyItem.SpawnLlama: return Item.SpawnLlama;
        case RubyItem.SpawnMagmaCube: return Item.SpawnMagmaCube;
        case RubyItem.SpawnMooshroom: return Item.SpawnMooshroom;
        case RubyItem.SpawnMule: return Item.SpawnMule;
        case RubyItem.SpawnOcelot: return Item.SpawnOcelot;
        case RubyItem.SpawnPanda: return Item.SpawnPanda;
        case RubyItem.SpawnParrot: return Item.SpawnParrot;
        case RubyItem.SpawnPhantom: return Item.SpawnPhantom;
        case RubyItem.SpawnPig: return Item.SpawnPig;
        case RubyItem.SpawnPiglin: return Item.SpawnPiglin;
        case RubyItem.SpawnPillager: return Item.SpawnPillager;
        case RubyItem.SpawnPolarBear: return Item.SpawnPolarBear;
        case RubyItem.SpawnPufferfish: return Item.SpawnPufferfish;
        case RubyItem.SpawnRabbit: return Item.SpawnRabbit;
        case RubyItem.SpawnRavager: return Item.SpawnRavager;
        case RubyItem.SpawnSalmon: return Item.SpawnSalmon;
        case RubyItem.SpawnSeaTurtle: return Item.SpawnSeaTurtle;
        case RubyItem.SpawnSheep: return Item.SpawnSheep;
        case RubyItem.SpawnShulker: return Item.SpawnShulker;
        case RubyItem.SpawnSilverfish: return Item.SpawnSilverfish;
        case RubyItem.SpawnSkeleton: return Item.SpawnSkeleton;
        case RubyItem.SpawnSkeletonHorse: return Item.SpawnSkeletonHorse;
        case RubyItem.SpawnSlime: return Item.SpawnSlime;
        case RubyItem.SpawnSpider: return Item.SpawnSpider;
        case RubyItem.SpawnSquid: return Item.SpawnSquid;
        case RubyItem.SpawnStray: return Item.SpawnStray;
        case RubyItem.SpawnStrider: return Item.SpawnStrider;
        case RubyItem.SpawnTropicalFish: return Item.SpawnTropicalFish;
        case RubyItem.SpawnVex: return Item.SpawnVex;
        case RubyItem.SpawnVillager: return Item.SpawnVillager;
        case RubyItem.SpawnVindicator: return Item.SpawnVindicator;
        case RubyItem.SpawnWanderingTrader: return Item.SpawnWanderingTrader;
        case RubyItem.SpawnWitch: return Item.SpawnWitch;
        case RubyItem.SpawnWitherSkeleton: return Item.SpawnWitherSkeleton;
        case RubyItem.SpawnWolf: return Item.SpawnWolf;
        case RubyItem.SpawnZoglin: return Item.SpawnZoglin;
        case RubyItem.SpawnZombie: return Item.SpawnZombie;
        case RubyItem.SpawnZombieHorse: return Item.SpawnZombieHorse;
        case RubyItem.SpawnZombiePigman: return Item.SpawnZombiePigman;
        case RubyItem.SpawnZombieVillager: return Item.SpawnZombieVillager;
        case RubyItem.SpawnZombifiedPiglin: return Item.SpawnZombifiedPiglin;
        case RubyItem.SpiderEye: return Item.SpiderEye;
        case RubyItem.SpruceBoat: return Item.SpruceBoat;
        case RubyItem.SpruceDoor: return Item.SpruceDoor;
        case RubyItem.Stick: return Item.Stick;
        case RubyItem.StoneAxe: return Item.StoneAxe;
        case RubyItem.StoneHoe: return Item.StoneHoe;
        case RubyItem.StonePickaxe: return Item.StonePickaxe;
        case RubyItem.StoneShovel: return Item.StoneShovel;
        case RubyItem.StoneSword: return Item.StoneSword;
        case RubyItem.String: return Item.String;
        case RubyItem.Sugar: return Item.Sugar;
        case RubyItem.SweetBerries: return Item.SweetBerries;
        case RubyItem.Totem: return Item.Totem;
        case RubyItem.Trident: return Item.Trident;
        case RubyItem.WarpedFungusOnAStick: return Item.WarpedFungusOnAStick;
        case RubyItem.WaterBucket: return Item.WaterBucket;
        case RubyItem.Wheat: return Item.Wheat;
        case RubyItem.WoodenAxe: return Item.WoodenAxe;
        case RubyItem.WoodenHoe: return Item.WoodenHoe;
        case RubyItem.WoodenPickaxe: return Item.WoodenPickaxe;
        case RubyItem.WoodenShovel: return Item.WoodenShovel;
        case RubyItem.WoodenSword: return Item.WoodenSword;
        case RubyItem.YellowBed: return Item.YellowBed;
        case RubyItem.YellowDye: return Item.YellowDye;
        default: return Item.IronShovel;
    }
}
const enum RubyTravelMethod {
    /**
     * Walking normally (default if on ground)
     */
    //% block=歩(ある)いた enumval=1 alias=WALK
    Walk = 1,
    /**
     * Swimming in water
     */
    //% block="水(みず)の中(なか)を泳(およ)いだ時(とき)" enumval=2 alias=SWIM_WATER
    SwimWater = 2,
    /**
     * In the air when not flying (Falling up or down)
     */
    //% block=落下(らっか)した enumval=3 alias=FALL
    Fall = 3,
    /**
     * Climbing a ladder
     */
    //% block=登(のぼ)っている enumval=4 alias=CLIMB
    Climb = 4,
    /**
     * Swimming in lava
     */
    //% block="溶岩(ようがん)の中(なか)を歩(ある)いた時(とき)" enumval=5 alias=SWIM_LAVA
    SwimLava = 5,
    /**
     * Flying
     */
    //% block="飛(と)んだ" enumval=6 alias=FLY
    Fly = 6,
    /**
     * Riding anything
     */
    //% block=乗(の)っている enumval=7 alias=RIDING
    Riding = 7,
    /**
     * Sneaking
     */
    //% block=スニークした enumval=8 alias=SNEAK
    Sneak = 8,
    /**
     * Sprinting
     */
    //% block=走(はし)った enumval=9 alias=SPRINT
    Sprint = 9,
    /**
     * Bounce
     */
    //% block=バウンドした enumval=10 alias=BOUNCE
    Bounce = 10
}

function toTravelMethod(travelMethod: RubyTravelMethod): TravelMethod {
    switch (travelMethod) {
        case RubyTravelMethod.Bounce: return TravelMethod.Bounce;
        case RubyTravelMethod.Climb: return TravelMethod.Climb;
        case RubyTravelMethod.Fall: return TravelMethod.Fall;
        case RubyTravelMethod.Fly: return TravelMethod.Fly;
        case RubyTravelMethod.Riding: return TravelMethod.Riding;
        case RubyTravelMethod.Sneak: return TravelMethod.Sneak;
        case RubyTravelMethod.Sprint: return TravelMethod.Sprint;
        case RubyTravelMethod.SwimLava: return TravelMethod.SwimLava;
        case RubyTravelMethod.SwimWater: return TravelMethod.SwimWater;
        case RubyTravelMethod.Walk: return TravelMethod.Walk;
    }
}

const enum RubyCloneMask {
    //% block="置(お)き換(か)え"
    Replace,
    //% block="マスクされた"
    Masked
}

function toCloneMask(cloneMask: RubyCloneMask): CloneMask {
    switch (cloneMask) {
        case RubyCloneMask.Replace: return CloneMask.Replace;
        case RubyCloneMask.Masked: return CloneMask.Masked;
    }
}

const enum RubyCloneMode {
    //% block="ノーマル"
    Normal,
    //% block="移動(いどう)"
    Move,
    //% block="強制(きょうせい)"
    Force
}
function toCloneMode(cloneMode: RubyCloneMode): CloneMode {
    switch (cloneMode) {
        case RubyCloneMode.Normal: return CloneMode.Normal;
        case RubyCloneMode.Move: return CloneMode.Move;
        case RubyCloneMode.Force: return CloneMode.Force;
    }
}

const enum RubyAxis {
    //% block="x[東西(とうざい)]"
    X,
    //% block="y[高低(こうてい)]"
    Y,
    //% block="z[南北(なんぼく)]"
    Z
}
function toAxis(axis: RubyAxis): Axis {
    switch (axis) {
        case RubyAxis.X: return Axis.X;
        case RubyAxis.Y: return Axis.Y;
        case RubyAxis.Z: return Axis.Z;
    }
}

const enum RubySixDirection {
    //% block="前(まえ)" alias="FORWARD" blockIdentity="agent._sixDirection"
    Forward,
    //% block="戻(もど)る" alias=BACK blockIdentity="agent._sixDirection"
    Back,
    //% block="左(ひだり)" alias=LEFT blockIdentity="agent._sixDirection"
    Left,
    //% block="右(みぎ)" alias=RIGHT blockIdentity="agent._sixDirection"
    Right,
    //% block="上(うえ)" alias=UP blockIdentity="agent._sixDirection"
    Up,
    //% block="下(した)" alias=DOWN blockIdentity="agent._sixDirection"
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

const enum RubyTurnDirection {
    //% block="左(ひだり)" blockIdentity="agent._turnDirection"
    Left = 2,
    //% block="右(みぎ)" blockIdentity="agent._turnDirection"
    Right = 3
}

function toTurnDirection(turnDirection: RubyTurnDirection): TurnDirection {
    switch (turnDirection) {
        case RubyTurnDirection.Left: return TurnDirection.Left;
        case RubyTurnDirection.Right: return TurnDirection.Right;
    }
}

const enum RubyCompassDirection {
    //% block="西(にし) [Xのマイナス方向(ほうこう)]" alias=WEST blockIdentity="agent._compassDirection"
    West = CardinalDirection.West,
    //% block="東(ひがし)[Xのプラス方向(ほうこう)]" alias=EAST blockIdentity="agent._compassDirection"
    East = CardinalDirection.East,
    //% block="北(きた) [Zのマイナス方向(ほうこう)]" alias=NORTH blockIdentity="agent._compassDirection"
    North = CardinalDirection.North,
    //% block="南(みなみ)[Zのプラス方向(ほうこう)]" alias=SOUTH blockIdentity="agent._compassDirection"
    South = CardinalDirection.South
}
function toCompassDirection(compassDirection: RubyCompassDirection): CompassDirection {
    switch (compassDirection) {
        case RubyCompassDirection.West: return CompassDirection.West;
        case RubyCompassDirection.East: return CompassDirection.East;
        case RubyCompassDirection.North: return CompassDirection.North;
        case RubyCompassDirection.South: return CompassDirection.South;
        default: return CompassDirection.West;
    }
}
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

const enum RubyProjectileMob {
    //% block="着火(ちゃっか)したTNT" enumval=65 alias="PRIMED_TNT"
    //% blockIdentity="mobs.projectile" alias=PRIMED_TNT
    PrimedTnt,
    //% block="エンチャントの瓶(びん)" enumval=68 alias=XP_BOTTLE
    //% blockIdentity="mobs.projectile" alias=XP_BOTTLE
    XpBottle,
    //% block="経験(けいけん)値(ち)オーブ" enumval=69 alias=XP_ORB
    //% blockIdentity="mobs.projectile" alias=XP_ORB
    XpOrb,
    //% block="ロケット花火(はなび)" enumval=72 alias=FIREWORKS_ROCKET
    //% blockIdentity="mobs.projectile" alias=FIREWORKS_ROCKET
    FireworksRocket,
    //% block="矢(や)" enumval=80 alias=ARROW_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=ARROW_PROJECTILE_MOB
    Arrow,
    //% block="雪玉(ゆきだま)" enumval=81 alias=SNOWBALL_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=SNOWBALL_PROJECTILE_MOB
    Snowball,
    //% block="卵(たまご)" enumval=82 alias=EGG_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=EGG_PROJECTILE_MOB
    Egg,
    //% block="スプラッシュポーション" enumval=86 alias=SPLASH_POTION
    //% blockIdentity="mobs.projectile" alias=SPLASH_POTION
    SplashPotion,
    //% block="ライトニング ボルト" enumval=93 alias=LIGHTNING_BOLT
    //% blockIdentity="mobs.projectile" alias=LIGHTNING_BOLT
    LightningBolt,
    //% block="エヴォーカーの牙(きば)" enumval=103 alias=EVOCATION_FANG
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
const enum RubyWeather {
    //% block="晴(は)れ" alias=CLEAR
    Clear,
    //% block="雨(あめ)" alias=RAIN
    Rain,
    //% block="雷(かみなり)" alias=THUNDER
    Thunder
}

function toWeather(weather: RubyWeather): Weather {
    switch (weather) {
        case RubyWeather.Clear: return Weather.Clear;
        case RubyWeather.Rain: return Weather.Rain;
        case RubyWeather.Thunder: return Weather.Thunder;
    }
}
const enum RubyDayTime {
    //% block="日中(にっちゅう)" enumval=0 blockIdentity="gameplay.time" alias=DAY
    Day = 0,
    //% block="夜明(よあ)け" enumval=23000 blockIdentity="gameplay.time" alias=DAWN
    Dawn = 23000,
    //% block="真昼(まひる)" enumval=6000 blockIdentity="gameplay.time" alias=MIDDAY
    Midday = 6000,
    //% block="夕暮(ゆうぐ)れ" enumval=12000 blockIdentity="gameplay.time" alias=DUSK
    Dusk = 12000,
    //% block="夜(よる)" enumval=14000 blockIdentity="gameplay.time" alias=NIGHT
    Night = 14000,
    //% block="真夜中(まよなか)" enumval=18000 blockIdentity="gameplay.time" alias=MIDNIGHT
    Midnight = 18000
}

function toDayTime(dayTime: RubyDayTime): DayTime {
    switch (dayTime) {
        case RubyDayTime.Day: return DayTime.Day;
        case RubyDayTime.Dawn: return DayTime.Dawn;
        case RubyDayTime.Midday: return DayTime.Midday;
        case RubyDayTime.Dusk: return DayTime.Dusk;
        case RubyDayTime.Night: return DayTime.Night;
        case RubyDayTime.Midnight: return DayTime.Midnight;
    }
}

const enum RubyGameRule {
    //% block=他(た)プレイヤーへの攻撃(こうげき) alias=PV_P
    PvP,
    //% block="溺水(できすい)ダメージ" alias=DROWNING_DAMAGE
    DrowningDamage,
    //% block="落下(らっか)ダメージ" alias=FALL_DAMAGE
    FallDamage,
    //% block="炎(ほのお)ダメージ" alias=FIRE_DAMAGE
    FireDamage,
    //% block="昼夜(ちゅうや)のサイクル" alias=DAYLIGHT_CYCLE
    DaylightCycle,
    //% block="生(い)き物(もの)のアイテムドロップ" alias=MOB_LOOT
    MobLoot,
    //% block="生(い)き物(もの)の出現(しゅつげん)" alias=MOB_SPAWNING
    MobSpawning,
    //% block="天気(てんき)のサイクル" alias=WEATHER_CYCLE
    WeatherCycle,
    //% block="生(い)き物(もの)による妨害(ぼうがい)" alias=MOB_GRIEFING
    MobGriefing,
    //% block="ブロックのドロップ" alias=TILE_DROPS
    TileDrops,
    //% block="持(も)ち物(もの)を保持(ほじ)" alias=KEEP_INVENTORY
    KeepInventory,
    //% block="TNTの爆発(ばくはつ)" alias=TNT_EXPLODES
    TntExplodes,
    //% block="自然(しぜん)再生(さいせい)" alias=NATURAL_REGENERATION
    NaturalRegeneration,
    //% block="コマンドブロックの出力(しゅつりょく)" alias=COMMAND_BLOCK_OUTPUT
    CommandBlockOutput,
    //% block="エンティティのドロップ" alias=ENTITY_DROPS
    EntityDrops,
    //% block="延焼(えんしょう)" alias=DO_FIRE_TICK
    DoFireTick,
    //% block="プレイヤーの座標(ざひょう)を表示(ひょうじ)" alias=SHOW_COORDINATES
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

const enum RubyAgentAssist {
    //% block="1. 動(うご)きながら置(お)く" alias="PLACE_ON_MOVE"
    PlaceOnMove,
    //% block="2. アイテムがなくなったら次(つぎ)のアイテムを使(つか)う" alias=PLACE_FROM_ANY_SLOT
    PlaceFromAnySlot,
    //% block="障害物(しょうがいぶつ)を壊(こわ)す" alias=DESTROY_OBSTACLES
    DestroyObstacles,
    //% blockHidden=true
    DetroyObstacles
}

function toAgentAssist(agentAssist: RubyAgentAssist): AgentAssist {
    switch (agentAssist) {
        case RubyAgentAssist.PlaceOnMove: return AgentAssist.PlaceOnMove;
        case RubyAgentAssist.PlaceFromAnySlot: return AgentAssist.PlaceFromAnySlot;
        case RubyAgentAssist.DestroyObstacles: return AgentAssist.DestroyObstacles;
        case RubyAgentAssist.DetroyObstacles: return AgentAssist.DetroyObstacles;
    }
}

const enum RubyTimeQuery {
    //% block="ゲーム時間(じかん)" alias=GAME_TIME
    GameTime,
    //% block="日中(にっちゅう)" alias=DAY_TIME
    DayTime,
    //% block="日中(にっちゅう)" alias=DAY_TIME_QUERY
    Day,
    /**
     * The real-life time of day, expressed in Minecraft game ticks
     */
    //% block="実際(じっさい)の時刻(じこく)" alias=REAL_LIFE
    RealLife
}

function toTimeQuery(timeQuery: RubyTimeQuery): TimeQuery {
    switch (timeQuery) {
        case RubyTimeQuery.GameTime: return TimeQuery.GameTime;
        case RubyTimeQuery.DayTime: return TimeQuery.DayTime;
        case RubyTimeQuery.Day: return TimeQuery.Day;
        case RubyTimeQuery.RealLife: return TimeQuery.RealLife;
    }
}
const enum RubyLeverPosition {
    //% block="ブロックの下側(したがわ)に東西(とうざい)を指(さ)して" alias=BLOCK_BOTTOM_EAST_WHEN_OFF
    BlockBottomEastWhenOff,
    //% block="ブロックの東側(ひがしがわ)" alias=BLOCK_SIDE_FACING_EAST
    BlockSideFacingEast,
    //% block="ブロックの西側(にしがわ)" alias=BLOCK_SIDE_FACING_WEST
    BlockSideFacingWest,
    //% block="ブロックの南側(みなみがわ)" alias=BLOCK_SIDE_FACING_SOUTH
    BlockSideFacingSouth,
    //% block="ブロックの北側(きたがわ)" alias=BLOCK_SIDE_FACING_NORTH
    BlockSideFacingNorth,
    //% block="ブロックの上側(うわがわ)に南北(なんぼく)を指(さ)して" alias=BLOCK_TOP_POINTS_SOUTH_WHEN_OFF
    BlockTopPointsSouthWhenOff,
    //% block="ブロックの上側(うわがわ)に東西(とうざい)を指(さ)して" alias=BLOCK_TOP_POINTS_EAST_WHEN_OFF
    BlockTopPointsEastWhenOff,
    //% block="ブロックの下側(したがわ)に南北(なんぼく)を指(さ)して" alias=BLOCK_BOTTOM_POINTS_SOUTH_WHEN_OFF
    BlockBottomPointsSouthWhenOff,
}

function toLeverPosition(leverPosition: RubyLeverPosition): LeverPosition {
    switch (leverPosition) {
        case RubyLeverPosition.BlockBottomEastWhenOff: return LeverPosition.BlockBottomEastWhenOff;
        case RubyLeverPosition.BlockSideFacingEast: return LeverPosition.BlockSideFacingEast;
        case RubyLeverPosition.BlockSideFacingWest: return LeverPosition.BlockSideFacingWest;
        case RubyLeverPosition.BlockSideFacingSouth: return LeverPosition.BlockSideFacingSouth;
        case RubyLeverPosition.BlockSideFacingNorth: return LeverPosition.BlockSideFacingNorth;
        case RubyLeverPosition.BlockTopPointsSouthWhenOff: return LeverPosition.BlockTopPointsSouthWhenOff;
        case RubyLeverPosition.BlockTopPointsEastWhenOff: return LeverPosition.BlockTopPointsEastWhenOff;
        case RubyLeverPosition.BlockBottomPointsSouthWhenOff: return LeverPosition.BlockBottomPointsSouthWhenOff;
    }
}

const enum RubyComparatorMode {
    //% block="比較(ひかく)"
    Compare,
    //% block="減算(げんざん)"
    Substract
}

function toComparatorMode(comparatorMode: RubyComparatorMode): ComparatorMode {
    switch (comparatorMode) {
        case RubyComparatorMode.Compare: return ComparatorMode.Compare;
        case RubyComparatorMode.Substract: return ComparatorMode.Substract;
    }
}

const enum RubyShapeOperation {
    /**
     * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
     */
    //% block="置(お)き換(か)え"
    Replace,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are changed to air, dropping their contents as entities but not themselves.
     * If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block="中空(なかぞら)"
    Hollow,
    /**
     * Replaces only blocks on the outer edge of the fill region with the specified block.
     * Inner blocks are not affected. If the fill region has no inner blocks
     * (because it is smaller than three blocks in at least one dimension), acts like replace.
     */
    //% block="アウトライン"
    Outline
}

function toShapeOperation(shapeOperation: RubyShapeOperation): ShapeOperation {
    switch (shapeOperation) {
        case RubyShapeOperation.Replace: return ShapeOperation.Replace;
        case RubyShapeOperation.Hollow: return ShapeOperation.Hollow;
        case RubyShapeOperation.Outline: return ShapeOperation.Outline;
    }
}


//% color=#D83B01 weight=640 icon="icons/Agent_icon_white.png"
//% block="エージェント"
//% groups='["other", "Actions", "Inventory"]'
namespace agent {
    //% shim=TD_ID
    //% blockId=rubyMinecraftAgentSixDirection
    //% block="$direction"
    export function __sixDirection(direction: RubySixDirection): number {
        return agent._sixDirection(toSixDirection(direction));
    }

    //% shim=TD_ID
    //% blockId=rubyMinecraftAgentTurnDirection
    //% block="$direction"
    export function __turnDirection(direction: RubyTurnDirection): number {
        return agent._turnDirection(toTurnDirection(direction));
    }

    //% shim=TD_ID
    //% blockId=rubyMinecraftAgentCompassDirection
    //% block="$direction"
    export function __compassDirection(direction: RubyCompassDirection): number {
        return agent._compassDirection(toCompassDirection(direction));
    }

    /**
     * blockHidden="ON"
     */

    //% help=agent/turn
    //% blockId=rubyAgentturnleft block="Agent を左(ひだり)に回転(かいてん)させる"
    //% blockHidden=1
    export function _turnLeft() {
        agent.turnLeft();
    }

    //% help=agent/turn
    //% blockId=rubyAgentturnright block="Agent を右(みぎ)に回転(かいてん)させる"
    //% blockHidden=1
    export function _turnRight() {
        agent.turnRight();
    }

    //% help=agent/move
    //% promise
    //% weight=370
    //% blockId=rubyMinecraftAgentMove block="エージェントを %direction|に %blocks| ブロック移動(いどう)させる"
    //% topblock topblockWeight=63
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::moveAsync promise
    //% blocks.defl=1
    export function _move(direction: number, blocks: number): void {
        agent.move(direction, blocks);
    }

    //% help=agent/turn
    //% promise
    //% weight=360
    //% blockId=rubyMinecraftAgentTurn block="エージェントの向(む)きを %direction| に変(か)える"
    //% topblock topblockWeight=60
    //% direction.shadow=rubyMinecraftAgentTurnDirection
    //% shim=agent::turnAsync promise
    export function _turn(direction: number): void {
        agent.turn(direction);
    }

    //% help=agent/get-position
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftAgentGetPosition block="エージェントの座標(ざひょう)"
    //% shim=agent::getPositionAsync promise
    export function _getPosition(): Position {
        return agent.getPosition();
    }

    //% help=agent/get-orientation
    //% promise
    //% weight=340
    //% blockId=rubyMinecraftAgentGetOrientation block="エージェントの向(む)いている方角(ほうがく)"
    //% shim=agent::getOrientationAsync promise
    export function _getOrientation(): number {
        return agent.getOrientation();
    }

    //% help=agent/place
    //% promise
    //% group="Actions" weight=270
    //% blockId=rubyMinecraftAgentPlace block="エージェントに %direction| へ 置(お)かせる"
    //% topblock topblockWeight=55
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::placeAsync promise
    export function _place(direction: number): void {
        agent.place(direction);
    }

    //% help=agent/interact
    //% promise
    //% group="Actions" weight=265
    //% blockId=rubyMinecraftAgentInteract block="Agent を$directionに向(む)けてインタラクトさせる"
    //% topblockWeight=54
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::interactAsync promise
    export function _interact(direction: number): void {
        agent.interact(direction);
    }

    //% help=agent/detect
    //% promise
    //% weight=205
    //% blockId=rubyMinecraftAgentDetect block="エージェントに %kind| があるか、 %direction| を確認(かくにん)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% group="Actions"
    //% shim=agent::detectAsync promise
    export function _detect(kind: AgentDetection, direction: number): boolean {
        return agent.detect(kind, direction);
    }

    //% help=agent/destroy
    //% promise
    //% group="Actions" weight=260
    //% blockId=rubyMinecraftAgentCommandDestroy block="エージェントに %direction| を 破壊(はかい)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::destroyAsync promise
    export function _destroy(direction: number): void {
        agent.destroy(direction);
    }

    //% help=agent/till
    //% promise
    //% group="Actions" weight=250
    //% blockId=rubyMinecraftAgentCommandTill block="エージェントに %direction| を 耕(たがや)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::tillAsync promise
    export function _till(direction: number): void {
        agent.till(direction);
    }

    //% help=agent/attack
    //% promise
    //% group="Actions" weight=240
    //% blockId=rubyMinecraftAgentCommandAttack block="エージェントに %direction| を 攻撃(こうげき)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::attackAsync promise
    export function _attack(direction: number): void {
        agent.attack(direction);
    }

    //% help=agent/drop-all
    //% promise
    //% group="Inventory" weight=160
    //% blockId=rubyMinecraftAgentCommandDropAll block="エージェントに %direction| へ 全(すべ)てのアイテムを落(お)とさせる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::dropAllAsync promise
    export function _dropAll(direction: number): void {
        agent.dropAll(direction);
    }

    //% help=agent/set-slot
    //% group="Inventory" weight=170
    //% blockId=rubyMinecraftAgentSetSlot block="エージェントのスロット番(ばん)号(ごう) %slot| を 有効(ゆうこう)にする"
    //% slot.min=1 slot.max=27
    //% shim=agent::setSlot
    export function _setSlot(slot: number): void {
        agent.setSlot(slot);
    }

    //% help=agent/set-item
    //% promise
    //% group="Inventory" weight=165
    //% blockId=rubyMinecraftAgentSetItem block="エージェントに $blockOrItem| を $count|個(こ) 、自分(じぶん)のスロット $slot|番(ばん)に設定(せってい)させる"
    //% blockOrItem.shadow=minecraftBlock
    //% slot.min=1 slot.max=27
    //% count.min=1 count.max=64
    //% shim=agent::setItemAsync promise
    export function _setItem(blockOrItem: number, count: number, slot: number): void {
        agent.setItem(blockOrItem, count, slot);
    }

    //% help=agent/set-assist
    //% weight=310
    //% blockId=rubyMinecraftAgentChangeAssist block="エージェントの設定(せってい)を追加(ついか) %assist| %on|"
    //% on.shadow=toggleOnOff
    //% shim=agent::setAssist
    export function _setAssist(assist: RubyAgentAssist, on: boolean): void {
        agent.setAssist(toAgentAssist(assist), on);
    }

    //% help=agent/collect
    //% promise
    //% group="Actions" weight=220
    //% blockId=rubyMinecraftAgentCollect block="エージェントに %block=minecraftItem| を 回収(かいしゅう)させる"
    //% block.shadow=minecraftItem
    //% shim=agent::collectAsync promise
    export function _collect(block: number): void {
        agent.collect(block);
    }

    //% help=agent/collect-all
    //% promise
    //% group="Actions" weight=230
    //% blockId=rubyMinecraftAgentCollectAll block="エージェントに 全(すべ)て ひろわせる"
    //% shim=agent::collectAllAsync promise
    export function _collectAll(): void {
        agent.collectAll();
    }


    //% help=agent/inspect
    //% promise
    //% group="Actions" weight=210
    //% blockId=rubyMinecraftAgentInspect block="エージェントに どんな %kind| か、%direction| を 確認(かくにん)させる"
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::inspectAsync promise
    export function _inspect(kind: AgentInspection, direction: number): number {
        return agent.inspect(kind, direction);
    }

    //% help=agent/transfer
    //% promise
    //% group="Inventory" weight=140
    //% blockId=rubyMinecraftAgentTransfer block="エージェントの持(も)ち物(もの)のアイテムを移動(いどう)させる|数量(すうりょう) %quantity|転送(てんそう)元(もと)のスロット番(ばん)号(ごう) %srcSlot|転送(てんそう)先(さき)のスロット番(ばん)号(ごう) %destinationSlot"
    //% inlineInputMode="inline"
    //% quantity.min=1 quantity.max=64 sourceSlot.min=1 sourceSlot.max=27 destinationSlot.min=1 destinationSlot.max=27
    //% shim=agent::transferAsync promise
    export function _transfer(quantity: number, sourceSlot: number, destinationSlot: number): void {
        agent.transfer(quantity, sourceSlot, destinationSlot);
    }

    //% help=agent/drop
    //% promise
    //% group="Inventory" weight=150
    //% blockId=rubyMinecraftAgentDrop block="エージェントに %direction|へスロット番(ばん)号(ごう) %slot|から 数量(すうりょう) %amount|を落(お)とさせる"
    //% inlineInputMode="inline"
    //% quantity.min=1 quantity.max=64 slot.min=1 slot.max=27
    //% direction.shadow=rubyMinecraftAgentSixDirection
    //% shim=agent::dropAsync promise
    export function _drop(direction: number, slot: number, quantity: number): void {
        agent.drop(direction, slot, quantity);
    }

    //% help=agent/get-item-count
    //% promise
    //% group="Inventory" weight=130
    //% blockId=rubyMinecraftAgentGetItemCount block="エージェントのスロット番(ばん)号(ごう) %slot| に存在(そんざい)するアイテムの数量(すうりょう)を取得(しゅとく)する"
    //% slot.min=1 slot.max=27
    //% shim=agent::getItemCountAsync promise
    export function _getItemCount(slot: number): number {
        return agent.getItemCount(slot);
    }

    //% help=agent/get-item-space
    //% promise
    //% group="Inventory" weight=110
    //% blockId=rubyMinecraftAgentGetItemSpace block="エージェントのスロット番(ばん)号(ごう) %slot| の空(あ)き数量(すうりょう)を取得(しゅとく)する"
    //% slot.min=1 slot.max=27
    //% shim=agent::getItemSpaceAsync promise
    export function _getItemSpace(slot: number): number {
        return agent.getItemSpace(slot);
    }

    //% help=agent/get-item-detail
    //% promise
    //% group="Inventory" weight=120
    //% blockId=rubyMinecraftAgentGetItemDetail block="エージェントのスロット番(ばん)号(ごう) %slot| に存在(そんざい)するアイテムのIDを取得(しゅとく)する"
    //% slot.min=1 slot.max=27
    //% shim=agent::getItemDetailAsync promise
    export function _getItemDetail(slot: number): number {
        return agent.getItemDetail(slot);
    }

    //% help=agent/teleport-to-player
    //% promise
    //% weight=380
    //% blockId=rubyMinecraftAgentTeleport block="エージェントを自分(じぶん)の位置(いち)にもどす"
    //% topblock topblockWeight=65
    //% shim=agent::teleportToPlayerAsync promise
    export function _teleportToPlayer(): void {
        agent.teleportToPlayer();
    }

    //% help=agent/teleport
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftAgentTeleportPos block="エージェントを $pos=minecraftCreatePosition| へ $dir|向(む)きにテレポートさせる"
    //% dir.shadow=rubyMinecraftAgentCompassDirection
    //% shim=agent::teleportAsync promise
    export function _teleport(pos: Position, dir: number): void {
        agent.teleport(pos, dir);
    }

}

//% weight=110 icon="\uf1b3" color="#CB48B7" advanced=true 
//% block="ビルダー"
//% blockHidden=true 
namespace builder {
    //% help=builder/position
    //% weight=210
    //% blockId=rubyMinecraftBuilderPosition block="ビルダー: 位置(いち)"
    export function _position(): Position {
        return builder.position();
    }

    //% help=builder/teleport-to
    //% weight=330
    //% blockId=rubyMinecraftBuilderGoTo block="ビルダー: 位置(いち) %position=minecraftCreatePosition| へテレポート"
    export function _teleportTo(position: Position): void {
        return builder.teleportTo(position);
    }

    //% help=builder/move
    //% weight=360
    //% blockId=rubyMinecraftBuilderMove block="ビルダー: %direction|へ%blocks| ブロック移動(いどう)させる"
    //% blocks.defl=1
    export function _move(direction: RubySixDirection, blocks: number): void {
        return builder.move(toSixDirection(direction), blocks);
    }

    //% help=builder/shift
    //% weight=270
    //% blockId=rubyMinecraftBuilderShift block="ビルダー: 前方(ぜんぽう) %forward| 上(うえ) %up| 左(ひだり) %left| に移動(いどう)させる"
    //% forward.defl=1 up.defl=1 left.defl=1
    export function _shift(forward: number, up: number, left: number) {
        builder.shift(forward, up, left);
    }

    //% help=builder/turn
    //% weight=350
    //% blockId=rubyMinecraftBuilderTurn block="ビルダー: 方向転換(ほうこうてんかん)|%direction"
    export function _turn(direction: RubyTurnDirection) {
        builder.turn(toTurnDirection(direction));
    }

    //% help=builder/face
    //% weight=240
    //% blockId=rubyMinecraftBuilderFace block="ビルダー: %direction| に向(む)ける"
    export function _face(direction: RubyCompassDirection) {
        builder.face(toCompassDirection(direction));
    }

    //% help=builder/mark
    //% weight=340
    //% blockId=rubyMinecraftBuilderMark block="ビルダー: 印(しるし)を付(つ)ける"
    export function _mark(): void {
        builder.mark();
    }

    //% help=builder/set-origin
    //% weight=230
    //% blockId=rubyMinecraftBuilderSetOrigin block="ビルダー: 原点(げんてん)を設定(せってい)"
    export function _setOrigin(): void {
        builder.setOrigin();
    }

    //% help=builder/teleport-to-origin
    //% weight=220
    //% blockId=rubyMinecraftBuilderTeleportOrigin block="ビルダー: 原点(げんてん)へテレポート"
    export function _teleportToOrigin(): void {
        builder.teleportToOrigin();
    }

    //% help=builder/place
    //% weight=320
    //% blockId=rubyMinecraftBuilderPlace block="ビルダー: ブロック %block=minecraftBlock| を置(お)く"
    //% block.shadow=minecraftBlock
    export function _place(block: number): void {
        builder.place(block);
    }

    //% help=builder/line
    //% weight=250
    //% blockId=rubyMinecraftBuilderLine block="ビルダー: 印(しるし)を付(つ)けた場所(ばしょ)からブロック %block=minecraftBlock| で線(せん)を引(ひ)く"
    //% block.shadow=minecraftBlock
    export function _line(block: number): void {
        builder.line(block);
    }

    //% help=builder/fill
    //% weight=260
    //% blockId=rubyMinecraftBuilderFill block="ビルダー: 印(しるし)を付(つ)けた場所(ばしょ)からブロック %block=minecraftBlock| で埋(う)める"
    //% block.shadow=minecraftBlock
    export function _fill(block: number, operator?: FillOperation): void {
        builder.fill(block, operator);
    }

    //% help=builder/trace-path
    //% weight=310
    //% blockId=rubyMinecraftBuilderTrace block="ビルダー: ブロック %block=minecraftBlock| を使(つか)って印(しるし)を付(つ)けた場所(ばしょ)から軌跡(きせき)をなぞる"
    //% block.shadow=minecraftBlock
    export function _tracePath(block: number) {
        builder.tracePath(block);
    }

    //% help=builder/raise-wall
    //% weight=150
    //% blockId=rubyMinecraftBuildereWall block="ビルダー: ブロック %block=minecraftBlock| を使(つか)って印(しるし)を付(つ)けた位置(いち)から高(たか)さ %height| の壁(かべ)を立(た)てる"
    //% block.shadow=minecraftBlock
    //% height.defl=5
    export function _raiseWall(block: number, height: number) {
        builder.raiseWall(block, height);
    }

    //% help=builder/copy
    //% weight=140
    //% blockId=rubyMinecraftBuilderCopy block="ビルダー: 印(しるし)を付(つ)けた位置(いち)からコピー"
    export function _copy() {
        builder.copy();
    }

    //% help=builder/paste
    //% weight=130
    //% blockId=rubyMinecraftBuilderPaste block="ビルダー: コピーした領域(りょういき)を貼(は)り付(つ)け"
    export function _paste() {
        builder.paste();
    }

    //% help=builder/push-state
    //% weight=120
    //% blockId=rubyMinecraftBuilderPushState block="ビルダー: 座標(ざひょう)と移動(いどう)の状態(じょうたい)をプッシュ"
    export function _pushState() {
        builder.pushState();
    }

    //% help=builder/pop-state
    //% weight=110
    //% blockId=rubyMinecraftBuilderPopState block="ビルダー: 座標(ざひょう)と移動(いどう)の状態(じょうたい)をポップ"
    export function _popState() {
        builder.popState();
    }
}

//% color=#0078D7 weight=1000 icon="\uf007" 
//% block="プレイヤー"
//% blockHidden=true 
namespace player {

    //% help=player/say
    //% weight=340
    //% blockId=rubyMinecraftSay block="メッセージ%messageを 送信(そうしん)"
    //% message.shadow=text
    //% message.defl='":)"'
    export function _say(message: any) {
        player.say(message);
    }

    //% help=player/tell
    //% weight=220
    //% blockId=rubyMinecraftTell block="%target=rubyMinecraftTarget| だけに %message| と ささやく"
    //% blockHidden=true 
    //% inlineInputMode="inline"
    //% message.shadow=text
    //% message.defl="Hi!"
    export function _tell(target: TargetSelector, message: any) {
        player.tell(target, message);
    }

    //% help=player/on-chat-command
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftOnChatCommand block="チャットコマンド %command|を入力(にゅうりょく)した時(とき)"
    //% mutate=objectdestructuring
    //% mutatePropertyEnum=ChatArgument
    //% mutateText="Command arguments"
    //% mutatePrefix="with"
    //% deprecated=true
    export function _onChatCommand(command: string, argTypes: ChatArgument[], handler: (args: player.ChatCommandArguments) => void): void {
        player.onChatCommand(command, argTypes, handler);
    }

    //% help=player/on-chat-command
    //% promise
    //% weight=360
    //% blockId=rubyMinecraftOnChat block="チャットコマンド %command|を入力(にゅうりょく)した時(とき)"
    //% optionalVariableArgs
    //% topblock topblockWeight=95
    //% command.defl="jump"
    export function _onChat(command: string, handler: (num1: number, num2: number, num3: number) => void) {
        player.onChat(command, handler);
    }

    //% help=player/name
    //% weight=240
    //% blockId=rubyMinecraftMyName block="プレイヤーの名前(なまえ)"
    //% shim=player::name
    export function _name(): string {
        return player.name();
    }

    //% help=player/teleport
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftPlayerTeleport block="現在(げんざい)の位置(いち)から %to=minecraftCreatePosition| に テレポートする"
    //% shim=player::teleportAsync promise
    export function _teleport(to: Position): void {
        return player.teleport(to);
    }

    //% help=player/on-tell-command
    //% promise
    //% weight=120
    //% blockId=rubyMinecraftOnTellCommand block="%command| と ささやかれた時(とき)"
    //% shim=player::onTellCommandAsync promise
    //% command.defl="jump"
    export function _onTellCommand(command: string, handler: () => void): void {
        player.onTellCommand(command, handler);
    }

    //% help=player/run-chat-command
    //% weight=140
    //% blockId=rubyMinecraftRunChatCommand block="チャットコマンド %command| を 実行(じっこう)する"
    //% shim=player::runChatCommand
    //% command.defl="jump"
    export function _runChatCommand(command: string): void {
        player.runChatCommand(command);
    }

    //% help=player/run-chat-command-with-args
    //% weight=130
    //% blockId=rubyMinecraftRunChatCommandArgs block="チャットコマンド %command| を 引数(ひきすう) %arg| で 実行(じっこう)"
    //% arg.shadowOptions.toString=true
    //% shim=player::runChatCommandWithArguments
    //% command.defl="jump"
    export function _runChatCommandWithArguments(command: string, arg: string): void {
        player.runChatCommandWithArguments(command, arg);
    }

    //% help=player/on-died
    //% promise
    //% weight=310
    //% blockId=rubyMinecraftPlayerDied block="プレイヤーが死(し)んだ時(とき)"
    //% shim=player::onDiedAsync promise
    export function _onDied(handler: () => void): void {
        player.onDied(handler);
    }

    //% help=player/on-travelled
    //% promise
    //% weight=320
    //% blockId=rubyMinecraftPlayerTravelled block="プレイヤーが %method| 時(とき)"
    //% topblock topblockWeight=90
    //% shim=player::onTravelledAsync promise
    //% method.defl=RubyTravelMethod.Walk
    export function _onTravelled(method: RubyTravelMethod, handler: () => void): void {
        player.onTravelled(toTravelMethod(method), handler);
    }

    //% help=player/on-teleported
    //% promise
    //% weight=110
    //% blockId=rubyMinecraftPlayerOnTeleported block="プレイヤーがテレポートした時(とき)"
    //% shim=player::onTeleportedAsync promise
    export function _onTeleported(handler: () => void): void {
        player.onTeleported(handler);
    }

    //% help=player/on-bounced
    //% promise
    //% weight=1
    //% blockId=rubyMinecraftPlayerBounced block="プレイヤーがバウンドした時(とき)"
    //% deprecated=true
    //% shim=player::onBouncedAsync promise
    export function _onBounced(handler: () => void): void {
        player.onBounced(handler);
    }

    //% help=player/on-camera-used
    //% promise
    //% weight=1
    //% blockId=rubyMinecraftOnCameraUsed block="カメラが使(つか)われた時(とき)"
    //% deprecated=true
    //% shim=player::onCameraUsedAsync promise
    export function _onCameraUsed(handler: () => void): void {
        player.onCameraUsed(handler);
    }

    //% help=player/on-arrow-shot
    //% promise
    //% weight=210
    //% blockId=rubyMinecraftOnArrowShot block="プレイヤーが矢(や)を放(はな)った時(とき)"
    //% shim=player::onArrowShotAsync promise
    export function _onArrowShot(handler: () => void): void {
        player.onArrowShot(handler);
    }

    //% help=player/position
    //% promise
    //% weight=250
    //% blockId=rubyMinecraftMyPosition block="プレイヤーの位置(いち)"
    //% shim=player::positionAsync promise
    export function _position(): Position {
        return player.position();
    }

    //% help=player/execute
    //% promise
    //% weight=230
    //% blockId=rubyMinecraftExecute block="コマンド %command| を 実行(じっこう)する"
    //% blockExternalInputs=1
    //% shim=player::executeAsync promise
    //% command.defl="say Hi!"
    export function _execute(command: string): void {
        player.execute(command);
    }

    //% help=player/on-item-used
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftOnItemInteracted block="次(つぎ)の$item|が使(つか)われた時(とき)"
    //% item.shadow=minecraftItem
    //% shim=player::onItemInteractedAsync promise
    export function _onItemInteracted(item: number, handler: () => void): void {
        player.onItemInteracted(item, handler);
    }

    //% promise
    //% weight=245
    //% blockId=rubyMinecraftPlayerGetOrientation block="プレイヤーの方向(ほうこう)"
    //% shim=player::getOrientationAsync promise
    export function _getOrientation(): number {
        return player.getOrientation();
    }

}

//% color=#764BCC weight=650 icon="\uf1b0" 
//% block="生(い)き物(もの)"
//% groups='["other", "Selectors"]'
namespace mobs {

    /**
     * blockHidden="OFF"
     */
    //% blockId=rubyMinecraftEffectField 
    //% shim=TD_ID 
    //% weight=321
    //% block="特殊(とくしゅ)効果(こうか) %effect"
    export function _effect2(effect: RubyEffect): number {
        return mobs.__effect(toEffect(effect));
    }


    //% weight=320
    //% shim=TD_ID blockId=rubyMinecraftAnimal block="生(い)き物(もの) %name"
    export function _animal(name: RubyAnimalMob): number {
        return mobs.animal(toAnimalMob(name));
    }

    //% help=mobs/projectile
    //% shim=TD_ID blockId=rubyMinecraftProjectile block="飛(と)び道具(どうぐ) %name"
    //% weight=305
    export function _projectile(name: RubyProjectileMob): number {
        return mobs.projectile(toProjectileMob(name));
    }

    /**
     * blockHidden="ON"
     */

    //% help=mobs/spawn
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftSummon block="%entity=minecraftAnimal を|%destination=minecraftCreatePosition |に 出現(しゅつげん)させる"
    //% entity.shadow=minecraftAnimal
    //% topblock topblockWeight=80
    //% mob.defl=CHICKEN
    //% shim=mobs::spawnAsync promise
    export function _spawn(mob: number, destination: Position): void {
        mobs.spawn(mob, destination);
    }

    //% help=mobs/on-mob-killed
    //% weight=340
    //% blockId=rubyMinecraftMobKilled block="%mob=minecraftAnimal|が行動(こうどう)不能(ふのう)にされた時(とき)"
    //% mob.shadow=minecraftAnimal
    //% mob.defl=CHICKEN
    //% shim=mobs::onMobKilledAsync promise
    export function _onMobKilled(mob: number, handler: () => void): void {
        mobs.onMobKilled(mob, handler);
    }

    //% promise
    //% weight=0
    //% blockId=rubyMinecraftEffect block="%target=rubyMinecraftTargetに||持続(じぞく)時間(じかん)%duration強(つよ)さ%amplifierの%effectを与(あた)える"
    //% expandableArgumentMode=toggle
    //% duration.min=0 duration.max=600 duration.defl=10
    //% amplifier.min=0 amplifier.max=255 amplifier.defl=1
    //% inlineInputMode="inline"
    //% deprecated=true
    //% shim=mobs::effectAsync promise
    export function _effect(effect: RubyEffect, target: TargetSelector, duration?: number, amplifier?: number): void {
        mobs.effect(toEffect(effect), target, duration, amplifier);
    }

    //% promise
    //% weight=270 help=mobs/apply-effect
    //% blockId=rubyMinecraftApplyEffect block="特殊(とくしゅ)効果(こうか) %effect=minecraftEffectField|を %target=rubyMinecraftTarget|へ %duration の間(あいだ)、 %amplifierの強(つよ)さで有効(ゆうこう)にする"
    //% duration.min=0 duration.max=600 duration.defl=10
    //% amplifier.min=0 amplifier.max=255 amplifier.defl=1
    //% inlineInputMode="inline"
    //% shim=mobs::applyEffectAsync promise
    export function _applyEffect(effect: number, target: TargetSelector, duration?: number, amplifier?: number): void {
        mobs.applyEffect(effect, target, duration, amplifier);
    }

    //% promise
    //% weight=260 help=mobs/clear-effect
    //% blockId=rubyMinecraftClearEffect block="%target=rubyMinecraftTarget|から全(すべ)ての特殊(とくしゅ)効果(こうか)を消去(しょうきょ)"
    //% shim=mobs::clearEffectAsync promise
    export function _clearEffect(target: TargetSelector): void {
        mobs.clearEffect(target);
    }

    //% help=mobs/give
    //% promise
    //% weight=240
    //% blockId=rubyMinecraftGive block="次(つぎ)の対象(たいしょう) %target=rubyMinecraftTarget| に %block=minecraftBlock| を %amount| つ 渡(わた)す"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% shim=mobs::giveAsync promise
    //% amount.defl=1
    export function _give(target: TargetSelector, block: number, amount: number): void {
        mobs.give(target, block, amount);
    }

    //% help=mobs/teleport-to-position
    //% promise
    //% weight=230
    //% blockId=rubyMinecraftTeleport block="次(つぎ)の対象(たいしょう) %target=rubyMinecraftTarget| を %destination=minecraftCreatePosition| に テレポートさせる"
    //% blockExternalInputs=1
    //% shim=mobs::teleportToPositionAsync promise
    export function _teleportToPosition(target: TargetSelector, destination: Position): void {
        mobs.teleportToPosition(target, destination);
    }

    //% help=mobs/teleport-to-player
    //% promise
    //% weight=220
    //% blockId=rubyMinecraftTeleportToPlayer block="次(つぎ)の対象(たいしょう) %target=rubyMinecraftTarget| を %destination=rubyMinecraftTarget | にテレポートさせる"
    //% blockExternalInputs=1
    //% shim=mobs::teleportToPlayerAsync promise
    export function _teleportToPlayer(target: TargetSelector, destination: TargetSelector): void {
        mobs.teleportToPlayer(target, destination);
    }


    //% help=mobs/enchant
    //% promise
    //% weight=210
    //% blockId=rubyMinecraftEnchant block="次(つぎ)の対象(たいしょう) %target=rubyMinecraftTarget| に エンチャント %spell| を %level| で かける"
    //% inlineInputMode="external"
    //% shim=mobs::enchantAsync promise
    //% spell.defl="infinity"
    export function _enchant(target: TargetSelector, spell: string, level: number): void {
        mobs.enchant(target, spell, level);
    }

    //% help=mobs/kill
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftKill block="次(つぎ)の対象(たいしょう)を行動(こうどう)不能(ふのう)にする %target=rubyMinecraftTarget"
    //% blockExternalInputs=1
    //% shim=mobs::killAsync promise
    export function _kill(target: TargetSelector): void {
        mobs.kill(target);
    }

    //% help=mobs/execute
    //% weight=110
    //% blockId=rubyMinecraftExecuteAsOther block="%target=rubyMinecraftTarget| として 位置(いち) %position=minecraftCreatePosition| で コマンド %command| を実行(じっこう)する"
    //% blockExternalInputs=1
    //% shim=mobs::executeAsync promise
    //% command.defl="say Hi!"
    export function _execute(target: TargetSelector, position: Position, command: string): void {
        mobs.execute(target, position, command);
    }

    //% help=mobs/execute-detect
    //% weight=120
    //% blockId=rubyMinecraftExecuteDetect block="ブロック %block=minecraftBlock| が 位置(いち) %detectPosition=minecraftCreatePosition| に 見(み)つかったら コマンド %command| を実行(じっこう)する"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% shim=mobs::executeDetectAsync promise
    //% command.defl="say Hi!"
    export function _executeDetect(detectBlock: number, detectPosition: Position, command: string): void {
        mobs.executeDetect(detectBlock, detectPosition, command);
    }

    /**
     * blockHidden="OFF"
     */

    //% help=mobs/monster
    //% blockId=rubyMinecraftMonster block="モンスター %name"
    //% weight=310
    //% shim=mobs::monster
    export function _monster(name: RubyMonsterMob): number {
        return mobs.monster(toMonsterMob(name));
    }


    //% help=mobs/selectors/target
    //% blockId=rubyMinecraftTarget block="対象(たいしょう)：%kind" weight=99 group="Selectors"
    //% shim=mobs::target
    export function _target(kind: RubyTargetSelectorKind): TargetSelector {
        return mobs.target(toTargetSelectorKind(kind));
    }

    /**
     * blockHidden="ON"
     */

    //% help=mobs/selectors/near
    //% blockId=rubyMinecraftTargetNear block="%target=rubyMinecraftTarget|の近(ちか)く %pos=minecraftCreateWorldPosition|半径(はんけい) %radios|以内(いない)" weight=39
    //% blockExternalInputs=1 group="Selectors"
    //% shim=mobs::near
    export function _near(target: TargetSelector, pos: Position, radius: number): TargetSelector {
        return mobs.near(target, pos, radius);
    }

    //% help=mobs/selectors/entities-by-type
    //% blockId=rubyMinecraftTargetSelectByType block="すべての %type=minecraftAnimal" weight=38 group="Selectors"
    //% blockHidden=true 
    //% type.shadow=minecraftAnimal
    //% type.defl=CHICKEN
    //% shim=mobs::entitiesByType
    export function _entitiesByType(type: number): TargetSelector {
        return mobs.entitiesByType(type);
    }

    //% help=mobs/selectors/player-by-name
    //% blockId=rubyMinecraftTargetSelectName block="名前(なまえ)が %name| の プレイヤー" weight=36 group="Selectors"
    //% shim=mobs::playerByName
    //% name.defl="name"
    export function _playerByName(name: string): TargetSelector {
        return mobs.playerByName(name);
    }

    //% help=mobs/selectors/player-in-game-mode
    //% blockId=rubyMinecraftTargetSelectGameMode block="ゲームモードが %mode| のプレイヤー" weight=37 group="Selectors"
    //% blockHidden=true 
    //% shim=mobs::playersInGameMode
    export function _playersInGameMode(mode: GameMode): TargetSelector {
        return mobs.playersInGameMode(mode);
    }


}

//% color=#7ABB55 weight=700 icon="\uf1b2" 
//% block="ブロック"
//% blockHidden=true 
namespace blocks {

    /**
     * blockHidden="OFF"
     */
    //% help=blocks/block
    //% weight=330
    //% shim=TD_ID blockId=rubyMinecraftBlock block="ブロック %block"
    export function _block(block: RubyBlock): number {
        return blocks.block(toBlock(block));
    }

    //% help=blocks/item
    //% weight=320
    //% shim=TD_ID blockId=rubyMinecraftItem block="アイテム %item"
    export function _item(item: RubyItem): number {
        return blocks.item(toItem(item));
    }

    /**
     * blockHidden="ON"
     */

    //% help=blocks/place
    //% promise
    //% weight=360
    //% blockId=rubyMinecraftPlace block="ブロック%block=minecraftBlock| を   %pos=minecraftCreatePosition| の地点(ちてん)に置(お)く"
    //% block.shadow=minecraftBlock
    //% topblock topblockWeight=85
    //% shim=blocks::placeAsync promise
    export function _place(block: number, pos: Position): void {
        blocks.place(block, pos);
    }


    //% help=blocks/fill
    //% promise
    //% weight=250
    //% blockId=rubyMinecraftFill block="ブロックを並(なら)べる %block=minecraftBlock| 範囲(はんい)の始(はじ)まり %from=minecraftCreatePosition| 範囲(はんい)の終(お)わり %to=minecraftCreatePosition| モード %operator" blockExternalInputs=1
    //% block.shadow=minecraftBlock
    //% shim=blocks::fillAsync promise
    export function _fill(block: number, from: Position, to: Position, operator?: FillOperation): void {
        blocks.fill(block, from, to, operator);
    }

    //% help=blocks/positionsOfBlocksInRange
    //% promise
    //% weight=5
    //% blockId=rubyMinecraftpositionsOfBlocksInRangeAsync block="positions of all $block|from $from|to $to"
    //% blockHidden=true 
    //% blockExternalInputs=1
    //% block.shadow=minecraftBlock
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% deprecated=1
    //% shim=blocks::positionsOfBlocksInRangeAsync promise
    export function _positionsOfBlocksInRange(block: number, from: Position, to: Position): Position[] {
        return blocks.positionsOfBlocksInRange(block, from, to);
    }

    //% help=blocks/kindsOfBlocksInRange
    //% promise
    //% weight=3
    //% blockId=rubyMinecraftkindsOfBlocksInRange block="all block kinds from $from|to $to"
    //% blockHidden=true 
    //% blockExternalInputs=1
    //% from.shadow=minecraftCreatePosition
    //% to.shadow=minecraftCreatePosition
    //% deprecated=1
    //% shim=blocks::kindsOfBlocksInRangeAsync promise
    export function _kindsOfBlocksInRange(from: Position, to: Position): number[] {
        return blocks.kindsOfBlocksInRange(from, to);
    }

    //% help=blocks/on-block-placed
    //% promise
    //% weight=350
    //% blockId=rubyMinecraftOnBlockPlaced block="%block=minecraftBlock|が置(お)かれた時(とき)"
    //% block.shadow=minecraftBlock
    //% shim=blocks::onBlockPlacedAsync promise
    export function _onBlockPlaced(block: number, handler: () => void): void {
        blocks.onBlockPlaced(block, handler);
    }

    //% help=blocks/on-block-broken
    //% promise
    //% weight=340
    //% blockId=rubyMinecraftOnBlockBroken block="%block=minecraftBlock|が破壊(はかい)された時(とき)"
    //% block.shadow=minecraftBlock
    //% shim=blocks::onBlockBrokenAsync promise
    export function _onBlockBroken(block: number, handler: () => void): void {
        blocks.onBlockBroken(block, handler);
    }

    //% help=blocks/replace
    //% promise
    //% weight=130
    //% blockId=rubyMinecraftReplace block="次(つぎ)のブロックに置(お)き換(か)える %newblock=minecraftBlock|置(お)きかえるブロック %oldblock=minecraftBlock| 置(お)きかえの範囲(はんい)の始(はじ)まり %from=minecraftCreatePosition| 置(お)きかえの範囲(はんい)の終(お)わり %to=minecraftCreatePosition" blockExternalInputs=1
    //% newblock.shadow=minecraftBlock
    //% oldblock.shadow=minecraftBlock
    //% shim=blocks::replaceAsync promise
    export function _replace(newblock: number, oldblock: number, from: Position, to: Position): void {
        blocks.replace(newblock, oldblock, from, to);
    }

    //% help=blocks/clone
    //% promise
    //% weight=120
    //% blockId=rubyMinecraftClone block="コピーを行(おこな)う　コピーする範囲(はんい)の始(はじ)まり %begin=minecraftCreatePosition| コピーする範囲(はんい)の終(お)わり%end=minecraftCreatePosition| コピーする場所(ばしょ) %destination=minecraftCreatePosition| マスク %mask| モード %mode" blockExternalInputs=1
    //% shim=blocks::cloneAsync promise
    export function _clone(begin: Position, end: Position, destination: Position, mask: RubyCloneMask, mode: RubyCloneMode): void {
        blocks.clone(begin, end, destination, toCloneMask(mask), toCloneMode(mode));
    }

    //% help=blocks/clone-filtered
    //% promise
    //% weight=110
    //% blockId=rubyMinecraftCloneFiltered block="指定(してい)したブロックだけをコピーする　コピー元(もと)の範囲(はんい)の始(はじ)まり %begin=minecraftCreatePosition|コピー元(もと)の範囲(はんい)の終(お)わり %end=minecraftCreatePosition| コピー先(さき)の場所(ばしょ) %destination=minecraftCreatePosition|次(つぎ)のブロックだけコピーする %block=minecraftBlock|モード %mode"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% shim=blocks::cloneFilteredAsync promise
    export function _cloneFiltered(begin: Position, end: Position, destination: Position, block: number, mode: CloneMode): void {
        blocks.cloneFiltered(begin, end, destination, block, mode);
    }

    //% help=blocks/test-for-block
    //% promise
    //% weight=310
    //% blockId=rubyMinecraftTestForBlock block="ブロック %block=minecraftBlock| が %pos=minecraftCreatePosition| の地点(ちてん)に存在(そんざい)するか、確認(かくにん)する"
    //% block.shadow=minecraftBlock
    //% shim=blocks::testForBlockAsync promise
    export function _testForBlock(block: number, pos: Position): boolean {
        return blocks.testForBlock(block, pos);
    }

    //% help=blocks/block-with-data
    //% weight=230
    //% blockId=rubyMinecraftBlockData block="%block=minecraftBlock|グループの %data|番(ばん)のブロック"
    //% block.shadow=minecraftBlock
    //% shim=blocks::blockWithData
    export function _blockWithData(b: number, data: number): number {
        return blocks.blockWithData(b, data);
    }

    //% help=blocks/block-by-id
    //% weight=220
    //% blockId=rubyMinecraftBlockID block="ブロックのID %id"
    //% blockHidden=true 
    //% shim=blocks::blockById
    export function _blockById(id: number): number {
        return blocks.blockById(id);
    }

    /**
     * blockHidden="OFF"
     */

    //% help=blocks/block-by-name
    //% weight=210
    //% blockId=rubyMinecraftBlockName block="ブロックの名前(なまえ) %name"
    //% shim=blocks::blockByName
    //% name.defl="stone"
    export function _blockByName(name: string): number {
        return blocks.blockByName(name);
    }

    /**
     * blockHidden="ON"
     */

    //% help=blocks/color-to-block
    //% weight=1
    //% blockId=rubyMinecraftBlocksColorToBlock block="%color=minecraftBlocksColor色(いろ)の%type|"
    //% deprecated=true
    //% shim=blocks::colorToBlock
    export function _colorToBlock(type: ColoredBlock, color: number): number {
        return blocks.colorToBlock(type, color);
    }

    //% help=blocks/color
    //% weight=1
    //% blockId=rubyMinecraftBlocksColor block="%color"
    //% blockHidden=true 
    //% deprecated=true
    //% shim=blocks::color
    export function _color(color: BlockColor): number {
        return blocks.color(color);
    }

    //% help=blocks/repeater
    //% weight=150
    //% delay.min=1 delay.max=4
    //% blockId=rubyMinecraftBlockRepeater block="反復(はんぷく)装置(そうち)を次(つぎ)の状態(じょうたい)で作(つく)り出(だ)す %direction| 遅延(ちえん)時間(じかん) %delay"
    //% shim=blocks::repeater
    export function _repeater(direction: RubyCompassDirection, delay: number): number {
        return blocks.repeater(toCompassDirection(direction), delay);
    }

    //% help=blocks/lever
    //% weight=160
    //% blockId=rubyMinecraftBlockLever block="レバーを、次(つぎ)の状態(じょうたい)で作(つく)り出(だ)す %position"
    //% shim=blocks::lever
    export function _lever(position: RubyLeverPosition): number {
        return blocks.lever(toLeverPosition(position));
    }

    //% help=blocks/comparator
    //% weight=140
    //% blockId=rubyMinecraftBlockComparator block="コンパレーターを次(つぎ)の状態(じょうたい)で作(つく)り出(だ)す 向(む)き%direction| モード %mode"
    //% inlineInputMode="external"
    //% shim=blocks::comparator
    export function _comparator(direction: RubyCompassDirection, mode: RubyComparatorMode): number {
        return blocks.comparator(toCompassDirection(direction), toComparatorMode(mode));
    }

    //% blockId=rubyMinecraftNameOfBlock
    //% block="ブロック名(めい)の文字列(もじれつ)%block"
    //% block.shadow=minecraftBlock
    //% weight=0
    //% shim=blocks::nameOfBlock
    export function _nameOfBlock(block: number): string {
        return blocks.nameOfBlock(block);
    }

    //% help=blocks/print
    //% weight=240
    //% blockId=rubyMinecraftPrintAsync block="文字(もじ)を描(えが)く %text| 次(つぎ)のブロックで %block=minecraftBlock| 描(えが)き始(はじ)める場所(ばしょ) %position=minecraftCreatePosition| 描(えが)く方向(ほうこう) %direction"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% text.shadowOptions.toString=true
    //% shim=blocks::printAsync promise
    //% text.defl="HELLO"
    export function _print(text: string, block: number, position: Position, direction: RubyCompassDirection): void {
        blocks.print(text, block, position, toCompassDirection(direction));
    }

}

//% color=#69B090 weight=550 icon="\uf05b" 
//% block="ポジション"
//% blockHidden=true 
namespace positions {

    //% help=positions/pos 
    //% weight=320 color=#69B090
    //% blockId=rubyMinecraftCreatePosition block="~%x|~%y|~%z"
    //% blockHidden=true 
    export function _pos(x: number, y: number, z: number): Position {
        return positions.create(x, y, z);
    }

    //% help=positions/pos-local 
    //% weight=305 color=#69B090
    //% blockId=rubyMinecraftCreatePositionLocal block="^$x|^$y|^$z"
    //% blockHidden=true 
    export function _posLocal(x: number, y: number, z: number): Position {
        return positions.createLocal(x, y, z);
    }

    //% help=positions/pos-camera 
    //% weight=325 color=#69B090
    //% x.shadow=camerapositionpicker
    //% y.shadow=camerapositionpicker
    //% z.shadow=camerapositionpicker
    //% blockId=rubyMinecraftCreatePositionCamera block="右(みぎ)|$x|上(うえ)|$y|前(まえ)|$z"
    export function _posCamera(x: number, y: number, z: number): Position {
        return positions.createCamera(x, y, z);
    }

    //% help=positions/world
    //% weight=310 color=#69B090
    //% blockId=rubyMinecraftCreateWorldPosition block="ワールド %x|%y|%z"
    //% blockHidden=true 
    export function _world(x: number, y: number, z: number): Position {
        return positions.createWorld(x, y, z);
    }

    //% help=positions/randpos 
    //% weight=210 color=#69B090
    //% blockId=rubyMinecraftPosRandom block="次(つぎ)の 座標(ざひょう)A と 座標(ざひょう)B の 範囲(はんい)の中(なか)から、ランダムに座標(ざひょう)を選(えら)ぶ | 座標(ざひょう)A %p1=minecraftCreatePosition| 座標(ざひょう)B %p2=minecraftCreatePosition"
    //% blockExternalInputs=1
    export function _randpos(p1: Position, p2: Position): Position {
        return positions.random(p1, p2);
    }

    //% help=positions/add
    //% weight=220
    //% blockId=rubyMinecraftAddPosition block="%p1=minecraftCreatePosition|+ %p2=minecraftCreatePosition"
    //% blockHidden=true 
    //% blockExternalInputs=1
    //% shim=positions::add
    export function _add(p1: Position, p2: Position): Position {
        return positions.add(p1, p2);
    }

    //% help=positions/create
    //% weight=320
    //% blockId=rubyMinecraftCreatePositionInternal block="~%x|~%y|~%z"
    //% blockHidden=true 
    //% blockHidden
    //% alias=pos
    //% shim=positions::create
    export function _create(x: number, y: number, z: number): Position {
        return positions.create(x, y, z);
    }

    //% help=positions/create-local
    //% weight=315
    // blockId=minecraftCreatePositionLocalInternal block="^$x|^$y|^$z"
    //% blockHidden
    //% alias=posLocal
    //% shim=positions::createLocal
    export function _createLocal(x: number, y: number, z: number): Position {
        return positions.createLocal(x, y, z);
    }

    //% help=positions/create-world
    //% weight=310
    //% blockId=rubyMinecraftCreateWorldInternal block="ワールド %x|%y|%z"
    //% blockHidden=true 
    //% blockHidden
    //% alias=world
    //% shim=positions::createWorld
    export function _createWorld(x: number, y: number, z: number): Position {
        return positions.createWorld(x, y, z);
    }

    //% help=positions/random
    //% weight=210
    //% blockId=rubyMinecraftPosRandomInternal block="次(つぎ)の 座標(ざひょう)A と 座標(ざひょう)B の 範囲(はんい)の中(なか)から、ランダムに座標(ざひょう)を選(えら)ぶ | 座標(ざひょう)A %p1=minecraftCreatePosition| 座標(ざひょう)B %p2=minecraftCreatePosition"
    //% blockExternalInputs=1
    //% blockHidden
    //% alias=randpos
    //% shim=positions::random
    export function _random(p1: Position, p2: Position): Position {
        return positions.random(p1, p2);
    }

    //% help=positions/ground-position
    //% promise
    //% weight=50
    //% blockId=rubyMinecraftNextSolid block="$pos=minecraftCreatePositionの位置(いち)を取得(しゅとく)する"
    //% shim=positions::groundPositionAsync promise
    export function _groundPosition(pos: Position): Position {
        return positions.groundPosition(pos);
    }

    //% weight=40
    //% blockId=rubyMinecraftToCompassDirection
    //% shim=positions::toCompassDirection
    //% block="コンパス方位(ほうい)$deg"
    export function _toCompassDirection(deg: number): CompassDirection {
        return positions.toCompassDirection(deg);

    }
}

//% weight=100 icon="\uf111" color=#EC7505 advanced=true
//% block="図形(ずけい)"
namespace shapes {
    //% blockId=rubyMinecraftLine block="このブロックで線(せん)を作成(さくせい): %block=minecraftBlock|開始(かいし) %p0=minecraftCreatePosition|終了(しゅうりょう) %p1=minecraftCreatePosition"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1 weight=100
    //% help=shapes/line
    export function _line(block: number, p0: Position, p1: Position, extrusion?: Position) {
        shapes.line(block, p0, p1, extrusion);
    }

    //% blockId=rubyMinecraftCircle block="このブロックで円(えん)を作成(さくせい): %block=minecraftBlock|中心(ちゅうしん) %center=minecraftCreatePosition|半径(はんけい) %radius|巻(ま)く方向(ほうこう) %orientation|%operator"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1 weight=95
    //% help=shapes/circle
    //% radius.defl=5
    export function _circle(block: number,
        center: Position,
        radius: number,
        orientation: RubyAxis,
        operator: RubyShapeOperation) {
        shapes.circle(block,
            center,
            radius,
            toAxis(orientation),
            toShapeOperation(operator));

    }

    //% blockId=rubyMinecraftSphere block="このブロックで球(たま)を作成(さくせい): %block=minecraftBlock|中心(ちゅうしん) %center=minecraftCreatePosition|半径(はんけい) %radius|%operator"
    //% block.shadow=minecraftBlock
    //% blockExternalInputs=1
    //% help=shapes/sphere
    //% radius.defl=5
    export function _sphere(block: number, center: Position, radius: number, operator: RubyShapeOperation) {
        shapes.sphere(block, center, radius, toShapeOperation(operator));
    }
}


//% color=#8F6D40 weight=600 icon="\uf0ad" 
//% block="ゲームプレイ"
//% blockHidden=true 
namespace gameplay {
    //% help=gameplay/set-game-mode
    //% promise
    //% weight=210
    //% blockId=rubyMinecraftGamemode block="ゲームモード %mode| を %player=rubyMinecraftTarget| に適用(てきよう)する"
    //% blockExternalInputs=1
    //% mode.defl=SURVIVAL
    //% shim=gameplay::setGameModeAsync promise
    export function _setGameMode(mode: GameMode, player: TargetSelector): void {
        gameplay.setGameMode(mode, player);
    }

    //% help=gameplay/time-set
    //% promise
    //% weight=320
    //% blockId=rubyMinecraftTimeSet block="ゲーム内(ない)の時刻(じこく)を %time=rubyMinecraftTime| に変更(へんこう)する"
    //% shim=gameplay::timeSetAsync promise
    export function _timeSet(time: number): void {
        gameplay.timeSet(time);
    }

    //% help=gameplay/time-add
    //% promise
    //% weight=310
    //% blockId=rubyMinecraftTimeAdd block="ゲーム内(ない)の時刻(じこく)に %amount| を追加(ついか)する"
    //% shim=gameplay::timeAddAsync promise
    //% amount.defl=100
    export function _timeAdd(amount: number): void {
        gameplay.timeAdd(amount);
    }

    //% help=gameplay/time-query
    //% promise
    //% weight=130
    //% blockId=rubyMinecraftTimeQuery block="次(つぎ)の時間(じかん)を確認(かくにん)する %query"
    //% shim=gameplay::timeQueryAsync promise
    export function _timeQuery(query: RubyTimeQuery): number {
        return gameplay.timeQuery(toTimeQuery(query));
    }

    //% help=gameplay/daylight-time-query
    //% promise
    //% weight=125
    //% blockId=rubyMinecraftDaylightTimeQuery block="時間(じかん)$query"
    //% shim=gameplay::isDaylightTimeAsync promise
    export function _isDaylightTime(query: RubyDayTime): boolean {
        return gameplay.isDaylightTime(toDayTime(query));
    }

    //% blockId=rubyMinecraftTime block="%time" blockHidden=1
    //% blockHidden=true 
    //% weight=2
    //% shim=gameplay::time
    export function _time(time: RubyDayTime): number {
        return gameplay.time(toDayTime(time));
    }

    //% help=gameplay/set-weather
    //% promise
    //% weight=340
    //% blockId=rubyMinecraftWeather block="現在(げんざい)の天気(てんき)を %weather| にする"
    //% weather.defl=CLEAR
    //% shim=gameplay::setWeatherAsync promise
    export function _setWeather(weather: RubyWeather): void {
        gameplay.setWeather(toWeather(weather));
    }

    //% help=gameplay/toggle-downfall
    //% promise
    //% weight=330
    //% blockId=rubyMinecraftToggleDownfall block="現在(げんざい)の天気(てんき)が「晴(は)れ」なら「雨(あめ)」に、「雨(あめ)」なら「晴(は)れ」に変更(へんこう)する"
    //% shim=gameplay::toggleDownfallAsync promise
    export function _toggleDownfall(): void {
        gameplay.toggleDownfall();
    }

    //% help=gameplay/xp
    //% promise
    //% weight=120
    //% blockId=rubyMinecraftXp block="経験(けいけん)値(ち) %amount| を %target=rubyMinecraftTarget | に 渡(わた)す"
    //% shim=gameplay::xpAsync promise
    //% amount.defl=10
    export function _xp(amount: number, target: TargetSelector): void {
        gameplay.xp(amount, target);
    }

    //% help=gameplay/set-game-rule
    //% promise
    //% weight=110
    //% blockId=rubyMinecraftGameRule block="ゲームルール %rule | を %enabled| にする"
    //% blockHidden=true 
    //% rule.defl=DAYLIGHT_CYCLE
    //% shim=gameplay::setGameRuleAsync promise
    export function _setGameRule(rule: RubyGameRule, enabled: boolean): void {
        gameplay.setGameRule(toGameRule(rule), enabled);
    }

    //% help=gameplay/immutable-world
    //% promise
    //% blockId=rubyMinecraftImmutableWorld block="変更(へんこう)可能(かのう)な世界(せかい)%enabled"
    //% deprecated=true weight=1
    //% shim=gameplay::immutableWorldAsync promise
    export function _immutableWorld(enabled: boolean): void {
        gameplay.immutableWorld(enabled);
    }

    //% help=gameplay/set-difficulty
    //% promise
    //% weight=220
    //% blockId=rubySetDifficulty block="ゲームの難易(なんい)度(ど)を %difficulty |に変更(へんこう)する"
    //% shim=gameplay::setDifficultyAsync promise
    export function _setDifficulty(difficulty: GameDifficulty): void {
        gameplay.setDifficulty(difficulty);
    }

    //% help=gameplay/title
    //% promise
    //% weight=200
    //% blockId=rubyMinecraftTitle block="ターゲット %target=rubyMinecraftTarget| にタイトル %title| サブタイトル %subTitle| を表示(ひょうじ)"
    //% shim=gameplay::titleAsync promise
    export function _title(target: TargetSelector, title: string, subTitle: string): void {
        gameplay.title(target, title, subTitle);
    }

}

//% weight=100 icon="\uf035" color=#e89005 advanced=true
//% block="文字列(もじれつ)"
namespace text {

    //% shim=String_::toNumber
    //% help=text/parse-float
    //% blockId="rubyString_parsefloat" block="文字列(もじれつ) %text|を数値(すうち)に変換(へんかん)する"
    //% text.defl="123"
    export function _text_parseFloat(text: string): number {
        return parseFloat(text);
    }

    //% help=math/from-char-code
    //% shim=String_::fromCharCode weight=1
    //% blockId="rubyStringFromCharCode" block="文字(もじ)コード %code|の文字(もじ)"
    export function _fromCharCode(code: number): string {
        return String.fromCharCode(code);
    }


    //% help=text/parse-int
    //% blockId="rubyString_parseint" block="文字列(もじれつ) %text|を整数(せいすう)に変換(へんかん)する"
    //% text.defl="123"
    //% blockHidden=1
    export function _text_parseInt(text: string, radix?: number): number {
        return parseInt(text, radix);
    }

}
//% color=#6C6EA0 weight=499 icon="\uf1ec"
//% block="計算(けいさん)"
namespace Math {

    //% blockId="rubyDevice_random" block="ランダムな数字(すうじ)を選択(せんたく): %min| から %limit| まで"
    //% help=math/randint
    //% shim=Math_::randomRange
    //% min.defl=0 max.defl=10
    export function _Math_randint(min: number, max: number): number {
        return randint(min, max);
    }

    //% blockId="rubyDevice_random_deprecated" block="ランダムな数字(すうじ)を選択(せんたく): %min| から %limit| まで"
    //% help=math/random-range deprecated
    //% shim=Math_::randomRange
    //% min.defl=1 max.defl=10
    export function _randomRange(min: number, max: number): number {
        return Math.randomRange(min, max);
    }
}

//% color=#569138 weight=500 icon="\uf01e"
//% block="ループ"
//% blockHidden=true 
namespace loops {
    //% help=loops/forever weight=55 blockAllowMultiple=true
    //% blockId=rubyDevice_ずっと block="ずっと" icon="\uf01e"
    //% blockHidden=true 
    //% shim=loops::forever
    export function _forever(body: () => void): void {
        loops.forever(body);
    }

    //% help=loops/pause weight=54
    //% async block="一時(いちじ)停止(ていし) [ミリ秒(びょう)] %pause"
    //% blockId=rubyDevice_pause icon="\uf110"
    //% shim=loops::pause
    export function _pause(ms: number): void {
        loops.pause(ms);
    }

    //% blockId=rubyFork icon="\uf110" block="バックグラウンドで実行(じっこう)する"
    //% help=loops/run-in-background weight=0
    //% shim=loops::runInBackground
    export function _runInBackground(handler: () => void): void {
        loops.runInBackground(handler);
    }

}
