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