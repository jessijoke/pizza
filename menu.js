const menuContent = document.getElementById("menuContent");
const Pizza = document.getElementById("Pizza");
const Appetizers = document.getElementById("Appetizers");
const Salads = document.getElementById("Salads");
const Specials = document.getElementById("Specials");
const Sandwiches = document.getElementById("Sandwiches");
const KidsMenu = document.getElementById("KidsMenu");
const Desserts = document.getElementById("Desserts");
const Beaverages = document.getElementById("Beaverages");


let psmenu = {
    "Pizza": [
        { 
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/pizza/meatsa.jpg", "Meatsa", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/pizza/hawaiian.jpg", "Hawaiian Pig", "ham, bacon, sausage, pineapple, jalapeÃ±o peppers, romano cheese, grand armory beer-b-q sauce", 14.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/pizza/create.jpg", "Create Your Own", "choice of sauce (red sauce, barbecue, basil pesto, herb oil) and cheese (italian cheese blend, goat cheese, artisan bleu, fresh mozzarella)", 14.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/pizza/margherita.jpg", "Margherita", "roma tomatoes, roasted garlic, fresh basil, fresh mozzarella, italian cheese blend, herb oil", 14.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/pizza/capo.jpg", "Capo", "pepperoni, sausage, ham, red onions, roasted peppers, fresh basil, italian cheese blend, marinara", 14.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/pizza/create.jpg", "Pizza Toppings", "ham, bacon, pepperoni, italian sausage, roasted chicken, bell peppers, roasted red peppers, red onions, fresh basil, roasted garlic, tomatoes, jalapenos, pineapple, mushrooms, fresh mozzarella, black-eyed pea and corn salsa", 14.49]
        }
    ],
    "Appetizers": [
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/app/machonacho.jpg", "Macho Nacho", "corn tortilla chips, black-eyed pea & corn salsa, 4-cheese blend, lime-cilantro crema, jalapenos, pico de gallo, scallions (add southwestern chicken, taco beef, veggie chicken or veggie beef for 2.99, add fresh guacamole, extra pico or sour cream for .75  (gluten free)", 10.99]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/app/thaichickenlettuce.jpg", "Thai Chicken Lettuce Wraps", "grilled chicken, cucumbers, fresh veggies, lettuce wraps, peanut & red chili sauces (available vegetarian with veggie chicken or veggie beef, add 1.99) (gluten free)", 12.99]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/app/rosemaryfries.jpg", "Rosemary Fries", "signature rosemary-garlic spice", 7.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/app/ultimategarlicbread.jpg", "Ultimate Garlic Bread", "garlic bread, garlic butter, italian cheese blend, ranch, marinara", 8.69]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/app/ahitunapoke.jpg", "Ahi Tuna Poke Bowl", "sesame-crusted tuna, rice noodles, carrots, seaweed, red chili sauce (available vegetarian with veggie chicken or beef, add 1.99) (gluten free)", 13.49]
        },
        {
        item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/app/pestohummus.jpg", "Caribbean Pesto Hummus Crudite", "coconut-cashew pesto hummus, fresh vegetables, naan bread", 9.49]
        }
    ],
    "Salads": [
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/salad/garden.jpg", "Farmers Garden Salad", "artisan mixed greens, english cucumbers, heirloom tomatoes, rainbow carrots, choice of dressing (gluten free)", 8.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/salad/caesar.jpg", "Caesar Salad", "baby romaine, garlic croutons, shaved parmesan, signature caesar dressing", 9.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/salad/berry.jpg", "Summer Berry Salad", "artisan mixed greens, goat cheese, strawberries, blueberries, blackberries, blueberry vinaigrette (gluten free)", 12.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/salad/additions.jpg", "Salad Additions", "grilled chicken breast 5, sesame seared tuna 9, steak burger 9, veggie patty 6, veggie chicken 6", 1.25]
        }
    ],
    "Specials": [
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/noodle.jpg", "Drunken Noodles", "rice noodles, julienne vegetables, organic mushrooms, sweet potatoes, napa cabbage, ginger-lemongrass sauce, peanuts, sesame seeds, basil, red chili aioli (gluten free)", 15.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/chickenstir.jpg", "Cashew Chicken Stir Fry", "chicken breast, julienne vegetables, broccoli, napa cabbage, cashews, signature stir fry sauce, jasmine rice (available vegetarian with veggie chicken or veggie beef add 1.99)", 15.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/wetburrito.jpg", "Wet Burrito", "chipotle chicken or seasoned ground beef, soft flour tortilla, spanish rice, house enchilada sauce, 4-cheese blend, scallions, lime-cilantro crema, pico de gallo, tortilla chips (add fresh guacamole, pico de gallo or sour cream for .75 each, available vegetarian with veggie chicken or veggie beef add 1.99)", 13.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/jerksalmon.jpg", "Jerk Salmon Bowl", "jerk spiced grilled atlantic salmon, rice, black-eyed peas, corn, mango, pineapple, avocado, coriander-lime crema (gluten free)", 24.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/tacos.jpg", "Tacos", "3 tacos, choice of spiced mahi, seasoned ground beef or southwestern chicken, served with shredded lettuce, pickled red onions, pico de gallo, fresh guacamole, queso fresca, lime-cilantro crema (available vegetarian with veggie chicken or veggie beef add 1.99)", 14.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/steak.jpg", "Steak & Rosemary Fries", "10oz marinated flank steak, rosemary garlic fries, haricot verts, demi-glaze, hotel butter (gluten free)", 23.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/penne.jpg", "5-Cheese Penne Pasta", "signature 5-cheese cream sauce, romano & butter toasted bread crumbs, fresh parsley (smoked bacon add 2, available gluten-free with gluten free pasta, red sauce, romano cheese and fresh basil add 2)", 10.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/specials/cauliflowersteak.jpg", "Cauliflower Steak", "cauliflower steak lightly dusted and fried, roasted vegetable coconut rice, heirloom tomatoes, coconut herb oil, balsamic glaze (available gluten-free upon request)", 13.99]
        }
    ],
    "Sandwiches": [
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/sandwiches/blt.jpg", "Walleye BLT", "crisp walleye, smoked bacon, shredded lettuce, tomato, remoulade, toasted brioche bun", 14.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/sandwiches/chicken.jpg", "Crispy Chicken Sandwich", "tender fried chicken, red onions, crunchy pickles, bacon, shredded lettuce, chipotle aioli, toasted brioche bun", 12.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/sandwiches/veggie.jpg", "Veggie Burger", "veggie patty, mozzarella, shredded lettuce, tomato, chipotle aioli, pickled red onions, guacamole, toasted brioche bun (available as veggie chicken sandwich)", 13.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/sandwiches/burger.jpg", "Original Steak Burger", "gilmore grind beef patty, served deluxe, toasted brioche bun", 13.99]
        }
    ],
    "KidsMenu": [
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/kids/grilledcheese.jpg", "Grilled Cheese Sandwich", "swirl whole-wheat bread, classic american cheese", 5.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/kids/quesadilla.jpg", "Cheese Quesadilla", "corn tortilla, mexican 4-cheese blend, pico de gallo (gluten free)", 5.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/kids/burger.jpg", "Quarter Pound Steak Burger", "the best kids burger on the lakeshore, add .50 for cheese", 5.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/kids/macandcheese.jpg", "4-Cheese Pasta", "creamy pasta with a blend of 4 cheeses", 5.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/kids/chicken.jpg", "Crispy Chicken Tenders", "crispy chicken tenders, served with rosemary fries", 6.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/kids/pizza.jpg", "Grilled Flatbread Pizza", "corn tortilla, mexican 4-cheese blend, pico de gallo (gluten free)", 6.99]
        }
    ],
    "Desserts": [
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/desserts/sundae.jpg", "Decadent Brownie Sundae", "tahitian vanilla gelato and whipped cream", 8.49]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/desserts/cheesecake.jpg", "Cheesecake", "berry or turtle", 7.99]
        },
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/desserts/chocolatecake.jpg", "Flourless Chocolate Cake", "raspberry sauce (gluten free)", 7.99]
        }
    ],
    "Beaverages": [
        {
            item: ["http://wytheria.com/JessicaJoy/pizzasavant/images/menuimages/beaverages/soda.jpg", "fountain soda", "Coca-Cola, Diet-Coke, Coke Zero, Sprite, Orange Fanta, Sprite, Barqs, Dr Pepper", 1.49]
        }
    ]
  };

  console.log(psmenu["Pizza"][0]["item"][0]);

menuLoader = (categ) => {
    menuContent.innerHTML = "";
    for (let i = 0; i < psmenu[categ].length; i++) {
        for (let j = 0; j < 4; j++) {
            if (j == 0) {
                menuContent.innerHTML = menuContent.innerHTML + '<div class="menuimage" style="background-image: url(' + "'" + psmenu[categ][i]["item"][j] + '"' + ");></div>";
            }
            if (j == 1) {
                menuContent.innerHTML = menuContent.innerHTML + "<h1 data-aos='fade-up'>" + psmenu[categ][i]["item"][j] + "</h1>";
            }
            if (j == 2) {
                menuContent.innerHTML = menuContent.innerHTML + "<h2 data-aos='fade-right'>" + psmenu[categ][i]["item"][j] + "</h2>";
            }
            if (j == 3) {
                menuContent.innerHTML = menuContent.innerHTML + "<h3 data-aos='fade-left'>" + psmenu[categ][i]["item"][j] + "</h3>";
            }
        }
    };
}

// data-aos='fade-up'

menuLoader("Pizza");

Pizza.addEventListener('click', () => {
    menuLoader("Pizza");
});

Appetizers.addEventListener('click', () => {
    menuLoader("Appetizers");
});

Salads.addEventListener('click', () => {
    menuLoader("Salads");
});

Specials.addEventListener('click', () => {
    menuLoader("Specials");
});

Sandwiches.addEventListener('click', () => {
    menuLoader("Sandwiches");
});

KidsMenu.addEventListener('click', () => {
    menuLoader("KidsMenu");
});

Desserts.addEventListener('click', () => {
    menuLoader("Desserts");
});

Beaverages.addEventListener('click', () => {
    menuLoader("Beaverages");
});