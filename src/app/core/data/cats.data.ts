import { catSpecialityEnum, catTypeEnum, clothesTagEnum } from "../models/enums";
import { Cat } from "../models/models";

export class Cats {

    public static readonly Rory: Cat = {
        id: "c_rory",
        title_en: "Rory",
        title_ru: "Рори",
        stars: 1,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Cooling],
        filename: "Cat_Rory.png",
        description: "A very athletic cat. It can jump from the sofa to the top of the bookshelf in just one leap!",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Sushi: Cat = {
        id: "c_sushi",
        title_en: "Sushi",
        title_ru: "Суши",
        stars: 1,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Perky],
        filename: "Cat_Sushi.png",
        description: "This cat is a deep thinker. It loves to sit on the window sill and gaze up at the birds in thought.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Lala: Cat = {
        id: "c_lala",
        title_en: "Lala",
        title_ru: "Лала",
        stars: 2,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Formal],
        filename: "Cat_Lala.png",
        description: "A very affectionate cat. Whenever its Owner returns home, it'll leap into its Owner's arms.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Spring: Cat = {
        id: "c_spring",
        title_en: "Spring",
        title_ru: "Спринг",
        stars: 2,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Charming],
        filename: "Cat_Spring.png",
        description: "This cat loves to play with water. It splashes water everywhere whenever its bath time.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Tama: Cat = {
        id: "c_tama",
        title_en: "Tama",
        title_ru: "Тама",
        stars: 3,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Warm],
        filename: "Cat_Tama.png",
        description: "A very elegant cat. It moves like a model when it strolls in the garden, and will nod graciously to other cats.",
        obtained: "Fashion Journey Event, Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Mayo: Cat = {
        id: "c_mayo",
        title_en: "Mayo",
        title_ru: "Майо",
        stars: 3,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Formal],
        filename: "Cat_Mayo.png",
        description: "A very proud cat. It will ignore you no matter how hard you try to get it to chase a cat toy.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Summer: Cat = {
        id: "c_summer",
        title_en: "Summer",
        title_ru: "Саммер",
        stars: 3,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Warm],
        filename: "Cat_Summer.png",
        description: "A very possessive cat. It never lets other cats touch its bowl and its cushion. If they do, it'll swipe them, hard.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Sleepy: Cat = {
        id: "c_sleepy",
        title_en: "Sleepy",
        title_ru: "Слипи",
        stars: 3,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Noble],
        filename: "Cat_Sleepy.png",
        description: "A vocally talented cat. It learned how to imitate the panting of the neighbor's dog.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Autumn: Cat = {
        id: "c_autumn",
        title_en: "Autumn",
        title_ru: "Отамн",
        stars: 4,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Formal, clothesTagEnum.Warm],
        filename: "Cat_Autumn.png",
        description: "This cat is a leader. On sunny afternoons, you can see it leading a group of other cats on a patrol around its territory.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Boom: Cat = {
        id: "c_boom",
        title_en: "Boom",
        title_ru: "Бум",
        stars: 4,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Cooling, clothesTagEnum.Gentle],
        filename: "Cat_Boom.png",
        description: "A very empathetic cat. When its Owner is feeling down, it'll gently pat its Owner's shoulder.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Pochi: Cat = {
        id: "c_pochi",
        title_en: "Pochi",
        title_ru: "Почи",
        stars: 4,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Formal, clothesTagEnum.Cooling],
        filename: "Cat_Pochi.png",
        description: "A very brave cat. It just saved a fellow cat from a large dog's territory last week.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Winter: Cat = {
        id: "c_winter",
        title_en: "Winter",
        title_ru: "Винтер",
        stars: 5,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Elegant],
        filename: "Cat_Winter.png",
        description: "A very hardworking cat. As long as it's around, you won't see a single mouse.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Pep: Cat = {
        id: "c_pep",
        title_en: "Pep",
        title_ru: "Пеп",
        stars: 5,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Perky],
        filename: "Cat_Pep.png",
        description: "This cat loves to be clean. It can spend nearly the whole day carefully grooming itself.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Carrot: Cat = {
        id: "c_carrot",
        title_en: "Carrot",
        title_ru: "Кэррот",
        stars: 6,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Elegant],
        filename: "Cat_Carrot.png",
        description: "A very petty cat. It never shares its treats with other cats.",
        obtained: "Breeding",
        type: catTypeEnum.Short
    };
    public static readonly Doctor: Cat = {
        id: "c_doctor",
        title_en: "Doctor",
        title_ru: "Доктор",
        stars: 2,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Cooling],
        filename: "Cat_Doctor.png",
        description: "A very sociable cat. It knows every single cat in the neighborhood.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Professor: Cat = {
        id: "c_professor",
        title_en: "Professor",
        title_ru: "Профессор",
        stars: 3,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Formal],
        filename: "Cat_Professor.png",
        description: "A very energetic cat. It goes to bed later than its Owner but gets up earlier. Not all cats love to sleep!",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Pineapple: Cat = {
        id: "c_pineapple",
        title_en: "Pineapple",
        title_ru: "Пайнаппл",
        stars: 3,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Elegant],
        filename: "Cat_Pineapple.png",
        description: "This cat loves to explore. It has probably explored every inch of the hill behind the house by now.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Chaos: Cat = {
        id: "c_chaos",
        title_en: "Chaos",
        title_ru: "Кэйос",
        stars: 3,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Warm],
        filename: "Cat_Chaos.png",
        description: "A very clever cat. When its Owner's not home, it can even make tea and turn on the TV!",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Caviar: Cat = {
        id: "c_caviar",
        title_en: "Caviar",
        title_ru: "Кавиар",
        stars: 4,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Formal, clothesTagEnum.Elegant],
        filename: "Cat_Caviar.png",
        description: "This cat loves to hoard things. You can find all kinds of leftover treats stashed in its bed.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Kimchi: Cat = {
        id: "c_kimchi",
        title_en: "Kimchi",
        title_ru: "Кимчи",
        stars: 4,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Cooling],
        filename: "Cat_Kimchi.png",
        description: "This cat is curious about everything. It'll check out anything, no matter how dangerous it is.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Mentor: Cat = {
        id: "c_mentor",
        title_en: "Mentor",
        title_ru: "Ментор",
        stars: 4,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Noble],
        filename: "Cat_Mentor.png",
        description: "A very intellectual cat. Every day at meal times, it'll stare at its food and think about cat philosophy.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Slime: Cat = {
        id: "c_slime",
        title_en: "Slime",
        title_ru: "Слайм",
        stars: 4,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Warm],
        filename: "Cat_Slime.png",
        description: "This cat loves to dig. You can hear it happily digging in its litter box in the middle of the night.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Crepe: Cat = {
        id: "c_crepe",
        title_en: "Crepe",
        title_ru: "Креп",
        stars: 5,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Gentle],
        filename: "Cat_Crepe.png",
        description: "This cat loves to hide under the bed. If you can't find it, it's probably sleeping there.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Chief: Cat = {
        id: "c_chief",
        title_en: "Chief",
        title_ru: "Чиф",
        stars: 5,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Formal, clothesTagEnum.Cooling],
        filename: "Cat_Chief.png",
        description: "This cat loves shoes. If you can't find your shoes, it's probably hidden them under the sofa.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Noodle: Cat = {
        id: "c_noodle",
        title_en: "Noodle",
        title_ru: "Нудл",
        stars: 5,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Cooling],
        filename: "Cat_Noodle.png",
        description: "A very dependent cat. It likes to be close to its Owner, even at meal times.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Aerie: Cat = {
        id: "c_aerie",
        title_en: "Aerie",
        title_ru: "Эри",
        stars: 5,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Cooling, clothesTagEnum.Gentle],
        filename: "Cat_Aerie.png",
        description: "A very polite cat. When it's out on a stroll, it will give way to other little animals.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Moai: Cat = {
        id: "c_moai",
        title_en: "Moai",
        title_ru: "Моаи",
        stars: 6,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Perky],
        filename: "Cat_Moai.png",
        description: "This cat loves parkour. You can hear it dashing about and jumping everywhere in the middle of the night.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Macaroni: Cat = {
        id: "c_macaroni",
        title_en: "Macaroni",
        title_ru: "Макарони",
        stars: 6,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Warm, clothesTagEnum.Perky],
        filename: "Cat_Macaroni.png",
        description: "A very expressive cat. You can hear it meowing all day long.",
        obtained: "Breeding",
        type: catTypeEnum.Thin
    };
    public static readonly Dusty: Cat = {
        id: "c_dusty",
        title_en: "Dusty",
        title_ru: "Дасти",
        stars: 1,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Charming],
        filename: "Cat_Dusty.png",
        description: "A very laid back kitty cat. Lying on the window sill and counting the clouds in the sky is its favorite pastime.",
        obtained: "Default, Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Cocoa: Cat = {
        id: "c_cocoa",
        title_en: "Cocoa",
        title_ru: "Кокоа",
        stars: 1,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Formal, clothesTagEnum.Warm],
        filename: "Cat_Cocoa.png",
        description: "A very carefree kitty cat. Napping inside the wardrobe is its favorite pastime.",
        obtained: "Isabel's Guide, Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Furball: Cat = {
        id: "c_furball",
        title_en: "Furball",
        title_ru: "Фурболл",
        stars: 1,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Elegant],
        filename: "Cat_Furball.png",
        description: "A very playful kitty cat. Chasing after the butterflies in the garden is its favorite pastime.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Teddy: Cat = {
        id: "c_teddy",
        title_en: "Teddy",
        title_ru: "Тедди",
        stars: 2,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Warm],
        filename: "Cat_Teddy.png",
        description: "A very greedy kitty cat. Stealing fish whenever its Owner opens the fridge is its favorite pastime.",
        obtained: "Default, Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Muffin: Cat = {
        id: "c_muffin",
        title_en: "Muffin",
        title_ru: "Маффин",
        stars: 2,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Elegant],
        filename: "Cat_Muffin.png",
        description: "A very cheeky kitty cat. Scratching its Owner's couch is its favorite pastime.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Bog: Cat = {
        id: "c_bog",
        title_en: "Bog",
        title_ru: "Бог",
        stars: 2,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Warm],
        filename: "Cat_Bog.png",
        description: "A very shy cat. When its Owner brings it outdoors, it'll stick really close to its Owner's feet.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Beanie: Cat = {
        id: "c_beanie",
        title_en: "Beanie",
        title_ru: "Бини",
        stars: 2,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Formal],
        filename: "Cat_Beanie.png",
        description: "A really vain cat. It's often admiring its own pretty reflection in the mirror.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Dandy: Cat = {
        id: "c_dandy",
        title_en: "Dandy",
        title_ru: "Дэнди",
        stars: 2,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Elegant],
        filename: "Cat_Dandy.png",
        description: "A really picky cat. It would rather starve than eat any food that it doesn't like.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Bolt: Cat = {
        id: "c_bolt",
        title_en: "Bolt",
        title_ru: "Болт",
        stars: 3,
        speciality: catSpecialityEnum.GiftMaterial,
        clothestags: [clothesTagEnum.Formal, clothesTagEnum.Elegant],
        filename: "Cat_Bolt.png",
        description: "A very nervous cat. When its Owner is angry, it'll hide inside a cardboard box.",
        obtained: "Code PRINCESSGALA, Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Tricksy: Cat = {
        id: "c_tricksy",
        title_en: "Tricksy",
        title_ru: "Трикси",
        stars: 3,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Simple, clothesTagEnum.Cooling],
        filename: "Cat_Tricksy.png",
        description: "A really cheeky cat. Whenever it angers its Owner, it'll flop over and look really cure to get away with things.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Fate: Cat = {
        id: "c_fate",
        title_en: "Fate",
        title_ru: "Фейт",
        stars: 4,
        speciality: catSpecialityEnum.UpgradeMaterial,
        clothestags: [clothesTagEnum.Charming, clothesTagEnum.Gentle],
        filename: "Cat_Fate.png",
        description: "A very friendly cat. Whenever there's a guest at home, it'll welcome the guest with a treat.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Sage: Cat = {
        id: "c_sage",
        title_en: "Sage",
        title_ru: "Сейдж",
        stars: 4,
        speciality: catSpecialityEnum.RelicMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Cooling],
        filename: "Cat_Sage.png",
        description: "A really clumsy cat. It often misjudges the distance it needs to jump, and keeps sliding off things.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly River: Cat = {
        id: "c_river",
        title_en: "River",
        title_ru: "Ривер",
        stars: 5,
        speciality: catSpecialityEnum.Currency,
        clothestags: [clothesTagEnum.Warm, clothesTagEnum.Perky],
        filename: "Cat_River.png",
        description: "A really chill cat. It never gets angry even when its siblings scratch it while playing.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };
    public static readonly Phoenix: Cat = {
        id: "c_phoenix",
        title_en: "Phoenix",
        title_ru: "Феникс",
        stars: 6,
        speciality: catSpecialityEnum.ClothingMaterial,
        clothestags: [clothesTagEnum.Grand, clothesTagEnum.Perky],
        filename: "Cat_Phoenix.png",
        description: "A really lazy cat. In the afternoons, you can spot it sunbathing on the window sill.",
        obtained: "Breeding",
        type: catTypeEnum.Regular
    };    

    public static readonly All_TableSorted : Cat[] = [
        this.Macaroni,
        this.Carrot,
        this.Moai,
        this.Phoenix,
        this.Aerie,
        this.River,
        this.Noodle,
        this.Crepe,
        this.Chief,
        this.Winter,
        this.Pep,
        this.Autumn,
        this.Boom,
        this.Kimchi,
        this.Sage,
        this.Caviar,
        this.Pochi,
        this.Fate,
        this.Slime,
        this.Mentor,
        this.Summer,
        this.Tricksy,
        this.Tama,
        this.Sleepy,
        this.Professor,
        this.Mayo,
        this.Chaos,
        this.Bolt,
        this.Pineapple,
        this.Doctor,
        this.Spring,
        this.Teddy,
        this.Bog,
        this.Lala,
        this.Beanie,
        this.Dusty,
        this.Cocoa,
        this.Rory,
        this.Furball,
        this.Sushi,

        this.Dandy,
        this.Muffin,

    ];
};



