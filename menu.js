const menuContent = document.getElementById("menuContent");

let psmenu = {
    "Pizza": [
        { 
        item: ["Meatsa", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        },
        {
        item: ["Hawaiian Pig", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        },
        {
        item: ["Create Your Own", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        },
        {
        item: ["Margherita", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        },
        {
        item: ["Capo", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        },
        {
        item: ["Pizza Toppings", "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce", 14.49]
        }
    ],
    "Appetizers": {
        machonacho: ["Macho Nacho"],
        thaichickenlettucewrap: ["Thai Chicken Lettuce Wrap"],
        rosemaryfries: ["Rosemary Fries"],
        ultimategarlicbread: ["Ultimate Garlic Bread"],
        ahitunapokebowl: ["Ahi Tuna Poke Bowl"],
        caribbeanpestohummuscrudite: ["Caribbean Pesto Hummus Crudite"]
    },
    "Salads": {
    }
  };

/*let menu = {
    "Pizza": {
            {
                name: "Meatsa",
                ingredients: "pepperoni, sausage, ham, bacon, four cheese blend, house red sauce",
                price: 14.49
            },
            {
                name: "Hawaiian Pig",
                ingredients: "ham, bacon, sausage, pineapple, jalapeÃ±o peppers, romano cheese, grand armory beer-b-q sauce",
                price: 14.99
            },
            {
                name: "Create Your Own",
                ingredients: "choice of sauce (red sauce, barbecue, basil pesto, herb oil) and cheese (italian cheese blend, goat cheese, artisan bleu, fresh mozzarella)",
                price: 11.99
            },
            {
                name: "Margherita",
                ingredients: "roma tomatoes, roasted garlic, fresh basil, fresh mozzarella, italian cheese blend, herb oil ",
                price: 14.49
            },
            {
                name: "Capo",
                ingredients: "pepperoni, sausage, ham, red onions, roasted peppers, fresh basil, italian cheese blend, marinara",
                price: 15.49
            },
            {
                name: "Pizza Toppings",
                ingredients: "ham, bacon, pepperoni, italian sausage, roasted chicken, bell peppers, roasted red peppers, red onions, fresh basil, roasted garlic, tomatoes, jalapenos, pineapple, mushrooms, fresh mozzarella, black-eyed pea and corn salsa",
                price: 1.25
            }
    },
    "Appetizers": {
        {
            name: "Macho Nacho",
            ingredients: "corn tortilla chips, black-eyed pea & corn salsa, 4-cheese blend, lime-cilantro crema, jalapenos, pico de gallo, scallions (add southwestern chicken, taco beef, veggie chicken or veggie beef for 2.99, add fresh guacamole, extra pico or sour cream for .75  (gluten free)",
            price: 10.99
        },
        {
            name: "Thai Chicken Lettuce Wraps",
            ingredients: "grilled chicken, cucumbers, fresh veggies, lettuce wraps, peanut & red chili sauces (available vegetarian with veggie chicken or veggie beef, add 1.99) (gluten free)",
            price: 12.99
        },
        {
            name: "Rosemary Fries",
            ingredients: "signature rosemary-garlic spice",
            price: 7.49
        },
        {
            name: "Ultimate Garlic Bread",
            ingredients: "garlic bread, garlic butter, italian cheese blend, ranch, marinara",
            price: 8.69
        },
        {
            name: "Ahi Tuna Poke Bowl",
            ingredients: "sesame-crusted tuna, rice noodles, carrots, seaweed, red chili sauce (available vegetarian with veggie chicken or beef, add 1.99) (gluten free)",
            price: 13.49
        },
        {
            name: "Caribbean Pesto Hummus Crudite",
            ingredients: "coconut-cashew pesto hummus, fresh vegetables, naan bread",
            price: 9.49
        } 
    },
    "Salads": {
        {
            name: "Farmers Garden Salad",
            ingredients: "artisan mixed greens, english cucumbers, heirloom tomatoes, rainbow carrots, choice of dressing (gluten free)",
            price: 8.99
        },
        {
            name: "Caesar Salad",
            ingredients: "baby romaine, garlic croutons, shaved parmesan, signature caesar dressing",
            price: 9.49
        },
        {
            name: "Summer Berry Salad",
            ingredients: "artisan mixed greens, goat cheese, strawberries, blueberries, blackberries, blueberry vinaigrette (gluten free)",
            price: 12.99
        },
        {
            name: "Salad Additions",
            ingredients: "grilled chicken breast 5, sesame seared tuna 9, steak burger 9, veggie patty 6, veggie chicken 6",
            price: 1.25
        }
    },
    "Specials": {
        {
            name: "Drunken Noodles",
            ingredients: "rice noodles, julienne vegetables, organic mushrooms, sweet potatoes, napa cabbage, ginger-lemongrass sauce, peanuts, sesame seeds, basil, red chili aioli (gluten free)",
            price: 15.49
        },
        {
            name: "Cashew Chicken Stir Fry",
            ingredients: "chicken breast, julienne vegetables, broccoli, napa cabbage, cashews, signature stir fry sauce, jasmine rice (available vegetarian with veggie chicken or veggie beef add 1.99)",
            price: 15.99
        },
        {
            name: "Wet Burrito",
            ingredients: "chipotle chicken or seasoned ground beef, soft flour tortilla, spanish rice, house enchilada sauce, 4-cheese blend, scallions, lime-cilantro crema, pico de gallo, tortilla chips (add fresh guacamole, pico de gallo or sour cream for .75 each, available vegetarian with veggie chicken or veggie beef add 1.99)",
            price: 13.99
        },
        {
            name: "Jerk Salmon Bowl",
            ingredients: "jerk spiced grilled atlantic salmon, rice, black-eyed peas, corn, mango, pineapple, avocado, coriander-lime crema (gluten free)",
            price: 24.99
        },
        {
            name: "Tacos",
            ingredients: "3 tacos, choice of spiced mahi, seasoned ground beef or southwestern chicken, served with shredded lettuce, pickled red onions, pico de gallo, fresh guacamole, queso fresca, lime-cilantro crema (available vegetarian with veggie chicken or veggie beef add 1.99)",
            price: 14.99
        },
        {
            name: "Steak & Rosemary Fries",
            ingredients: "10oz marinated flank steak, rosemary garlic fries, haricot verts, demi-glaze, hotel butter (gluten free)",
            price: 23.49
        },
        {
            name: "5-Cheese Penne Pasta",
            ingredients: "signature 5-cheese cream sauce, romano & butter toasted bread crumbs, fresh parsley (smoked bacon add 2, available gluten-free with gluten free pasta, red sauce, romano cheese and fresh basil add 2)",
            price: 10.99
        },
        {
            name: "Cauliflower Steak",
            ingredients: "cauliflower steak lightly dusted and fried, roasted vegetable coconut rice, heirloom tomatoes, coconut herb oil, balsamic glaze (available gluten-free upon request)",
            price: 13.99
        }
    },
    "Sandwiches": {
        {
            name: "Walleye BLT",
            ingredients: "crisp walleye, smoked bacon, shredded lettuce, tomato, remoulade, toasted brioche bun",
            price: 14.49
        },
        {
            name: "Crispy Chicken Sandwich",
            ingredients: "tender fried chicken, red onions, crunchy pickles, bacon, shredded lettuce, chipotle aioli, toasted brioche bun",
            price: 12.99
        },
        {
            name: "Before The Butcher Veggie Burger",
            ingredients: "veggie patty, mozzarella, shredded lettuce, tomato, chipotle aioli, pickled red onions, guacamole, toasted brioche bun (available as veggie chicken sandwich)",
            price: 13.99
        },
        {
            name: "Original Steak Burger",
            ingredients: "gilmore grind beef patty, served deluxe, toasted brioche bun",
            price: 13.99
        }
    },
    "Kid's Menu": {
        {
            name: "Grilled Cheese Sandwich",
            ingredients: "swirl whole-wheat bread, classic american cheese",
            price: 5.49
        },
        {
            name: "Snacks",
            ingredients: "steamed broccoli, french fries, apple sauce, jasmine rice, cucumbers or carrot sticks or celery, small salad",
            price: "1.99 each"
        },
        {
            name: "Grilled Flatbread Pizza",
            ingredients: "5 cheese blend",
            price: 5.99
        },
        {
            name: "Cheese Quesadilla",
            ingredients: "corn tortilla, mexican 4-cheese blend, pico de gallo (gluten free)",
            price: 5.49
        },
        {
            name: "Quarter Pound Steak Burger",
            ingredients: "the best kids burger on the lakeshore, add .50 for cheese",
            price: 5.99
        },
        {
            name: "4-Cheese Pasta",
            ingredients: "creamy pasta with a blend of 4 cheeses",
            price: 5.49
        },
        {
            name: "Rice Noodles & Vegetables",
            ingredients: "rice noodles, napa cabbage, sweet potatoes, mushrooms, broccoli, bell peppers, rainbow carrots, lemongrass broth (gluten free)",
            price: 6.99
        },
        {
            name: "Snacks",
            ingredients: "hummus, naan & veggies, corn chips and pico de gallo, kettle chips",
            price: "2.99 each"
        },
        {
            name: "Crispy Chicken Tenders",
            ingredients: "crispy chicken tenders, served with rosemary fries",
            price: 6.99
        },
        {
            name: "Grilled Flatbread Pepperoni Pizza",
            ingredients: "corn tortilla, mexican 4-cheese blend, pico de gallo (gluten free)",
            price: 6.99
        },
        {
            name: "Desserts",
            ingredients: "corn tortilla, mexican 4-cheese blend, pico de gallo (gluten free)",
            price: "2.99 each"
        }
    },
    "Desserts": {
        {
            name: "Decadent Brownie Sundae",
            ingredients: "tahitian vanilla gelato and whipped cream",
            price: 8.49
        },
        {
            name: "Cheesecake",
            ingredients: "berry or turtle",
            price: 7.99
        },
        {
            name: "Flourless Chocolate Cake",            ",
            ingredients: "raspberry sauce (gluten free)",
            price: 7.99
        }
    },
    "Beaverages": {
        {
            name: "fountain soda",
            ingredients: "Coca-Cola, Diet-Coke, Coke Zero, Sprite, Orange Fanta, Sprite, Barqs, Dr Pepper",
            price: 1.49
        }

    },
};*/

/*menuContent.textContent = psmenu["Pizza"].meatsa;*/
//console.log(psmenu["Pizza"][1]["item"][1]);

menuLoader = () => {
    for (let i = 0; i < psmenu["Pizza"].length; i++) {
        for (let j = 0; j < 3; j++) {
            if (j == 0) {
                menuContent.innerHTML = menuContent.innerHTML + "<h1 data-aos='fade-up'>" + psmenu["Pizza"][i]["item"][j] + "</h1>";
            }
            if (j == 1) {
                menuContent.innerHTML = menuContent.innerHTML + "<h2 data-aos='fade-up'>" + psmenu["Pizza"][i]["item"][j] + "</h2>";
            }
            if (j == 2) {
                menuContent.innerHTML = menuContent.innerHTML + "<h3 data-aos='fade-up'>" + psmenu["Pizza"][i]["item"][j] + "</h3>";
            }
        }
    };
}

menuLoader();