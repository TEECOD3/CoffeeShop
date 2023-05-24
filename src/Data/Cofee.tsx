import CofeeBag from "../Pages/Home/icon/CofeeBag";
import CoffeeJar from "../Pages/Home/icon/Coffejar";
import CoffeeCup from "../Pages/Home/icon/Coffecup";
import CoffeeBlend from "../Pages/Home/icon/CofeeBlender";
import Cola from "../Pages/Home/icon/Cola";
import first from "../Data/images/testimonialsImages/testimonial3.jpg";
import second from "../Data/images/testimonialsImages/testimonial5.jpg";
import spons1 from "../Pages/Home/icon/spons1.png";
import spons2 from "../Pages/Home/icon/spon2.png";
import spons3 from "../Pages/Home/icon/spons3.png";
import spons4 from "../Pages/Home/icon/spons4.png";
import spons5 from "../Pages/Home/icon/spons5.png";
import spons6 from "../Pages/Home/icon/spons6.png";
import { MdCoffeeMaker } from "react-icons/md";
import { GiCoffeeBeans, GiCoffeeCup, GiCoffeeMug } from "react-icons/gi";
import { CiCoffeeBean } from "react-icons/ci";
import image from "../Data/images/mainimages/DSC_1179_copy_web_award-transformed.png";
import image2 from "../Data/images/mainimages/CT_PRODUCTS_CARELESS_CAT_000-DZ1-transformed.png";
import image3 from "../Data/images/mainimages/download-9pBn27ucF-transformed.png";
import image4 from "../Data/speciality coffee/Blend  Totally Righteous House.png";
import image5 from "../Data/images/mainimages/Ferrari_s_Coffee_PiacentinaDeluxe6kgWholebean-transformed.png";
import chef1 from "../Data/images/chefs/ourchef1.png";
import chef2 from "../Data/images/chefs/ourchef2.png";
import chef3 from "../Data/images/chefs/ourchef3.png";
import chef4 from "../Data/images/chefs/ourchef4.png";

export const leftCoffee = [
  {
    id: 1,
    image: <CofeeBag className="" />,
    coffeeName: "light roast",
    coffeeDescription:
      "This category includes classic espresso drinks such as cappuccinos, lattes, macchiatos, and Americanos.",
  },
  {
    id: 2,
    image: <CoffeeCup />,
    coffeeName: "medium roast",
    coffeeDescription:
      "Every day we brew our house columbian and french roast coffees ,a s well as a rotating varietal",
  },
  {
    id: 3,
    image: <CoffeeJar />,
    coffeeName: "Dark roast",
    coffeeDescription:
      "This category includes coffee drinks with added flavorings such as vanilla, caramel, hazelnut, or chocolate.",
  },
];

export const rightCofee = [
  {
    id: 1,
    image: <Cola />,
    coffeeName: "bundles",
    coffeeDescription:
      "features a selection of coffees from different regions, such as Ethiopia, Colombia, and Guatemala.",
  },
  {
    id: 2,
    image: <CoffeeBlend />,
    coffeeName: "unroasted coffee beans",
    coffeeDescription:
      "unique category that feature ingredients such as coconut milk, matcha, or chai tea.",
  },
  {
    id: 3,
    image: <CoffeeBlend />,
    coffeeName: "subscriptions",
    coffeeDescription:
      " For those who want to enjoy the taste of coffee without the caffeine, here is a decaf category ",
  },
];

export const testimonials = [
  {
    id: 1,
    testimonial:
      "The coffee at this shop is amazing! It's always fresh and tastes incredible.",
    image: first,
    name: "John Smith",
    position: "Marketing Manager",
  },
  {
    id: 2,
    testimonial:
      "I absolutely love the atmosphere at this coffee shop. It's the perfect place to relax and enjoy a great cup of coffee.",
    image: second,
    name: "Jane Doe",
    position: "Software Engineer",
  },
  {
    id: 3,
    testimonial:
      "The staff at this coffee shop is always so friendly and welcoming. I always feel right at home when I visit.",
    image: first,
    name: "Mike Johnson",
    position: "Sales Associate",
  },
  {
    id: 4,
    testimonial:
      "I have been coming to this coffee shop for years and I have never been disappointed. The coffee is consistently excellent.",
    image: second,
    name: "Sara Brown",
    position: "Teacher",
  },
  {
    id: 5,
    testimonial:
      "This coffee shop is my go-to spot for meetings with clients. The cozy atmosphere and delicious coffee are always a hit.",
    image: first,
    name: "David Lee",
    position: "Freelance Writer",
  },
  {
    id: 6,
    testimonial:
      "The latte art at this coffee shop is seriously impressive. It's almost too beautiful to drink!",
    image: second,
    name: "Emily Nguyen",
    position: "Graphic Designer",
  },
  {
    id: 7,
    testimonial:
      "I am a coffee snob and this shop never disappoints. The beans are always top quality and the baristas know how to brew the perfect cup.",
    image: first,
    name: "Maxwell Baker",
    position: "Photographer",
  },
  {
    id: 8,
    testimonial:
      "The pastries at this coffee shop are out of this world. I can't resist stopping by for a croissant every time I'm in the area.",
    image: second,
    name: "Kimberly Garcia",
    position: "Accountant",
  },
  {
    id: 9,
    testimonial:
      "I recently discovered this coffee shop and I am so glad I did. The cozy interior and friendly staff make it my new favorite spot.",
    image: first,
    name: "Daniel Hernandez",
    position: "Student",
  },
  {
    id: 10,
    testimonial:
      "The cold brew at this coffee shop is amazing. It's the perfect pick-me-up on a hot day.",
    image: second,
    name: "Isabella Martinez",
    position: "Marketing Coordinator",
  },
];

export const sponsors = [
  {
    id: 1,
    logo: spons1,
  },
  {
    id: 2,
    logo: spons2,
  },
  {
    id: 3,
    logo: spons3,
  },
  {
    id: 4,
    logo: spons4,
  },
  {
    id: 5,
    logo: spons5,
  },
  {
    id: 6,
    logo: spons6,
  },
];

export const buttondata = [
  { id: 1, component: <MdCoffeeMaker />, name: "light roast" },
  { id: 2, component: <GiCoffeeBeans />, name: "medium roast" },
  { id: 3, component: <GiCoffeeCup />, name: "dark roasts" },
  { id: 4, component: <GiCoffeeMug />, name: "bundles" },
  {
    id: 5,
    component: <CiCoffeeBean />,
    name: "unroasted coffee beans",
  },
];

export const coffeedets = [
  { id: 1, component: <MdCoffeeMaker />, image: image },
  { id: 2, component: <MdCoffeeMaker />, image: image2 },
  { id: 3, component: <MdCoffeeMaker />, image: image3 },
  { id: 4, component: <MdCoffeeMaker />, image: image4 },
  { id: 5, component: <MdCoffeeMaker />, image: image5 },
  { id: 6, component: <MdCoffeeMaker />, image: image2 },
  { id: 7, component: <MdCoffeeMaker />, image: image3 },
  { id: 8, component: <MdCoffeeMaker />, image: image4 },
  { id: 9, component: <MdCoffeeMaker />, image: image5 },
  { id: 10, component: <MdCoffeeMaker />, image: image5 },
  { id: 60, component: <MdCoffeeMaker />, image: image2 },
  { id: 72, component: <MdCoffeeMaker />, image: image3 },
  { id: 83, component: <MdCoffeeMaker />, image: image4 },
  { id: 92, component: <MdCoffeeMaker />, image: image5 },
];

export const chefs = [
  { id: 1, image: chef1, name: "Bulbul Hassan", position: "founder" },
  { id: 1, image: chef2, name: "Bulbul Hassan", position: "chef" },
  { id: 1, image: chef3, name: "Jorina Begum", position: "specialist" },
  { id: 1, image: chef4, name: "micheal ojuma", position: "owner" },
];

// Introducing Yauco Puerto Rico Coffee: A Taste of Tropical Paradise

// Experience the allure of the Caribbean with Yauco Puerto Rico Coffee. Grown in the fertile soils of the Yauco region, our coffee beans captivate your senses with their exceptional quality and unique flavor profile.

// Indulge in the smooth, medium-bodied taste that Yauco Puerto Rico Coffee offers. With each sip, you'll be transported to a tropical paradise, as notes of tropical fruit, cocoa, and a hint of nuttiness dance on your palate.

// Handpicked and meticulously processed, our coffee beans reflect the dedication and expertise of local farmers. From the moment you open the bag, the enticing aroma of Yauco Puerto Rico Coffee envelops you, inviting you to savor the taste of this extraordinary brew.

// Immerse yourself in the rich heritage and tradition of Puerto Rican coffee. With its smoothness, complexity, and unique terroir, Yauco Puerto Rico Coffee is a true reflection of the island's coffee-making expertise.

// Explore our eCommerce store and discover the captivating flavors of Yauco Puerto Rico Coffee. Elevate your coffee experience and enjoy a taste of tropical paradise in every cup.

// Introducing Chamberlain Coffee: Elevate Your Coffee Experience

// Indulge in the rich and captivating flavors of Chamberlain Coffee. Sourced from the world's finest coffee plantations, our beans are carefully selected and expertly roasted to perfection.

// With each sip, you'll experience a harmonious balance of boldness and smoothness. Chamberlain Coffee delights your palate with notes of caramel, chocolate, and a hint of vibrant acidity, creating a truly unforgettable coffee experience.

// Crafted with passion and precision, Chamberlain Coffee is the perfect companion for your morning rituals or moments of relaxation. Whether you prefer a classic black coffee or a creamy latte, our coffee beans ensure a rich and satisfying cup every time.

// Embrace the aroma, savor the flavor, and elevate your coffee journey with Chamberlain Coffee. Explore our eCommerce store and discover the extraordinary taste that awaits you. Elevate your coffee experience with Chamberlain Coffee and let every sip transport you to a world of pure coffee bliss.

// Discover the epitome of coffee perfection with Cocoba Coffee Beans. Sourced from the finest coffee plantations around the world, our beans are meticulously selected for their exceptional quality and flavor.

// Experience a symphony of taste as you indulge in the rich aroma and bold flavors of our handcrafted coffee. Each bean undergoes a precise roasting process to unlock its full potential, resulting in a cup of coffee that is smooth, balanced, and full-bodied.

// From the first sip to the last, Cocoba Coffee Beans deliver a captivating journey for your taste buds. Explore notes of caramel, dark chocolate, and subtle hints of fruit that dance on your palate, leaving a lingering and satisfying finish.

// Whether you prefer a classic black coffee, an aromatic espresso, or a velvety latte, Cocoba Coffee Beans ensure an exceptional coffee experience that will awaken your senses and elevate your morning rituals.

// Unleash the barista within and experience the difference with Cocoba Coffee Beans. Explore our eCommerce store and embark on a journey of exceptional flavors and unparalleled quality. Elevate your coffee moments with Cocoba and savor the craftsmanship in every sip.

// Introducing Blue Beard: Unleash Your Adventurous Spirit

// Experience the thrill of the unknown with Blue Beard, an irresistible fragrance for the modern man. Inspired by the daring and enigmatic nature of the bluebeard flower, this scent embodies intrigue and seduction.

// Blue Beard opens with an alluring blend of citrus and spices, awakening your senses with a burst of energy. As the fragrance develops, notes of lavender and jasmine create an intoxicating and sophisticated aura.

// With a base of warm woods and musk, Blue Beard leaves a trail of masculinity and confidence in its wake. This captivating scent is perfect for the man who is unafraid to embrace his adventurous spirit.

// Whether worn for a night out or a special occasion, Blue Beard is your secret weapon, drawing others in with its magnetic allure. Unleash your inner charm and captivate those around you with the captivating scent of Blue Beard.

// Explore our eCommerce store and embark on a fragrant journey with Blue Beard. Elevate your style and leave a lasting impression with this daring and irresistible fragrance.

// Introducing Café Beausoleil: A Taste of French Delight

// Transport yourself to the charming streets of Paris with Café Beausoleil. Our exquisite blend captures the essence of French coffee culture, delivering a truly indulgent experience.

// Immerse your senses in the rich aroma and smooth flavor of our carefully crafted beans. Sourced from premium coffee plantations, our blend combines the finest Arabica and Robusta beans for a perfectly balanced cup.

// With a medium-dark roast, Café Beausoleil offers a velvety texture and a delightful complexity of flavors. Discover notes of caramel, toasted nuts, and a hint of dark chocolate that linger on your palate.

// Indulge in a moment of French elegance as you sip Café Beausoleil. Whether enjoyed as an espresso or a creamy latte, our coffee promises to transport you to the sidewalk cafés of Paris.

// Embrace the joie de vivre and elevate your coffee experience with Café Beausoleil. Explore our eCommerce store and let the spirit of French delight infuse your daily rituals.

// Experience the art of coffee with Kuska Packshot Mellemristet. Our expertly crafted blend combines the finest coffee beans from around the world to create a harmonious and balanced flavor profile.

// With a medium roast, this coffee delights your senses with its smoothness and enticing aroma. The carefully selected beans undergo a precise roasting process that brings out the best qualities of each origin, resulting in a well-rounded and satisfying cup.

// Indulge in the nuanced notes of caramel, chocolate, and a hint of fruity acidity that dance on your palate. The medium roast level strikes the perfect balance, ensuring a pleasant depth of flavor without overpowering bitterness.

// At Kuska, we take pride in our commitment to sustainability and ethical sourcing. We partner with responsible coffee growers who share our values, ensuring fair compensation and sustainable farming practices.

// Whether you're starting your day or seeking a moment of relaxation, Kuska Packshot Mellemristet delivers a refined coffee experience that will leave you craving more. Explore our eCommerce store and embark on a journey of exquisite flavors with Kuska Packshot Mellemristet. Elevate your coffee ritual and savor the craftsmanship in every cup.
// Introducing Ferrari Placentina Deluxe Coffee Roasters: A Taste of Pure Luxury

// Indulge in the epitome of coffee excellence with Ferrari Placentina Deluxe Coffee Roasters. Our meticulous craftsmanship and dedication to sourcing the finest coffee beans ensure a truly luxurious experience. Immerse yourself in the velvety richness, intoxicating aroma, and exquisite flavor profiles of our carefully roasted coffees. Each sip embodies sophistication, delivering a captivating journey for the discerning coffee enthusiast. Elevate your coffee moments with the unparalleled quality and indulgence of Ferrari Placentina Deluxe Coffee Roasters. Explore our eCommerce store and discover the pinnacle of coffee perfection.

// spongy candy artisnal flavour coffee
// Experience the extraordinary with our artisanal flavored spongy candy coffee. Indulge in the fusion of gourmet coffee and delightful candy flavors. Each sip takes you on a journey of rich, velvety coffee infused with the whimsical essence of spongy candy. Made in small batches with the finest beans and carefully crafted flavors, this unique blend is a treat for your taste buds. Elevate your coffee routine and explore our eCommerce store to discover the enchantment of spongy candy artisanal flavored coffee.

// `death wish cofee description`

// Discover the world's strongest coffee that packs an intense punch to kickstart your day - Death Wish Coffee! Unleash your inner adventurer and experience a bold and robust brew that's crafted to invigorate your senses like no other.

// Every sip of Death Wish Coffee is an exhilarating journey. Made from carefully selected premium Arabica and Robusta beans, our unique blend undergoes a meticulous roasting process to extract maximum flavor and caffeine content. The result? A rich, full-bodied coffee that delivers an unparalleled jolt of energy with each sip.

// Whether you're an avid coffee lover seeking an extra boost or a daredevil looking to conquer the day, Death Wish Coffee is here to fuel your ambitions. Embrace the boldness, embrace the intensity, and embark on your daily conquests with unwavering focus and determination.

// But it's not just about the extraordinary strength. We prioritize quality at every step, ensuring that only the finest, ethically sourced beans make it into every bag of Death Wish Coffee. Our commitment to sustainable practices and fair-trade partnerships ensures that every cup you enjoy also supports responsible farming communities around the world.

// At our eCommerce store, you'll find a wide range of Death Wish Coffee products tailored to suit your preferences. From whole bean and ground options to convenient single-serve pods, we offer flexibility to fit your brewing method of choice. Our curated selection includes signature blends, flavored variations, and limited-edition releases that cater to every discerning palate.

// Join the growing legion of caffeine enthusiasts who have embraced the thrill of Death Wish Coffee. Fuel your mornings, power through your workdays, and conquer any challenge that comes your way with the ultimate coffee experience.

// Are you ready to unleash the power within? Explore our eCommerce store today and let Death Wish Coffee awaken the fire in your soul.
