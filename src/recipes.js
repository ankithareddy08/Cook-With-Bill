/**
 * User-Provided Recipe Database - Perfect Format!
 */

const localRecipes = [
  // --- POTATO RECIPES (5) ---
  {
    id: 1, title: "Classic Mashed Potatoes", primaryIngredient: "Potato", 
    allIngredients: ["Potato", "Butter", "Milk", "Salt", "Garlic"],
    instructions: ["Peel and cube the potatoes.", "Boil in salted water for 15-20 minutes until tender.", "Drain well and return to the pot.", "Mash with butter, a splash of milk, salt, and minced garlic until smooth."],
    image: "https://images.unsplash.com/photo-1524758631624-e2822f60594e?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 4, healthScore: 70
  },
  {
    id: 2, title: "Crispy Potato Fries", primaryIngredient: "Potato",
    allIngredients: ["Potato", "Olive Oil", "Salt", "Paprika"],
    instructions: ["Cut potatoes into thin strips.", "Soak in cold water for 30 minutes, then dry completely.", "Toss with olive oil, salt, and paprika.", "Bake at 400°F (200°C) for 25-30 minutes, flipping halfway."],
    image: "https://images.unsplash.com/photo-1512568400610-42fed9baea40?w=400&h=300&fit=crop",
    readyInMinutes: 30, servings: 2, healthScore: 65
  },
  {
    id: 3, title: "Creamy Potato Soup", primaryIngredient: "Potato",
    allIngredients: ["Potato", "Onion", "Chicken Broth", "Cream", "Butter"],
    instructions: ["Sauté chopped onions in butter until soft.", "Add cubed potatoes and chicken broth; simmer until potatoes are very soft.", "Blend the soup until smooth.", "Stir in cream, heat gently, and serve."],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    readyInMinutes: 35, servings: 4, healthScore: 80
  },
  {
    id: 4, title: "Simple Potato Salad", primaryIngredient: "Potato",
    allIngredients: ["Potato", "Mayonnaise", "Mustard", "Onion", "Celery"],
    instructions: ["Boil potatoes until fork-tender, then cool and cube.", "In a bowl, mix mayonnaise, a dash of mustard, diced onion, and celery.", "Fold the dressing into the potatoes and chill before serving."],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 4, healthScore: 75
  },
  {
    id: 5, title: "Garlic Herb Roasted Potatoes", primaryIngredient: "Potato",
    allIngredients: ["Potato", "Garlic", "Rosemary", "Olive Oil", "Salt"],
    instructions: ["Preheat oven to 425°F (220°C).", "Cube potatoes and toss with olive oil, minced garlic, rosemary, and salt.", "Spread on a baking sheet in a single layer.", "Roast for 35-40 minutes until golden and crispy."],
    image: "https://images.unsplash.com/photo-1563379095164-f48d6507a828?w=400&h=300&fit=crop",
    readyInMinutes: 40, servings: 4, healthScore: 78
  },

  // --- TOMATO RECIPES (5) ---
  {
    id: 6, title: "Fresh Tomato Salsa (Pico de Gallo)", primaryIngredient: "Tomato",
    allIngredients: ["Tomato", "Onion", "Cilantro", "Lime Juice", "Jalapeno"],
    instructions: ["Finely dice the tomatoes, onion, and jalapeno.", "Chop the cilantro.", "Mix all ingredients in a bowl and toss with fresh lime juice and salt.", "Let sit for 15 minutes before serving."],
    image: "https://images.unsplash.com/photo-1579586882481-318c9e3f9ab6?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 4, healthScore: 85
  },
  {
    id: 7, title: "Tomato Basil Pasta", primaryIngredient: "Tomato",
    allIngredients: ["Tomato", "Pasta", "Garlic", "Olive Oil", "Fresh Basil"],
    instructions: ["Boil pasta according to package instructions.", "Sauté minced garlic in olive oil, then add chopped fresh tomatoes.", "Simmer until the tomatoes break down into a sauce.", "Toss the cooked pasta in the sauce and top with torn fresh basil."],
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 2, healthScore: 75
  },
  {
    id: 8, title: "Classic Tomato Soup", primaryIngredient: "Tomato",
    allIngredients: ["Tomato", "Onion", "Vegetable Broth", "Garlic", "Olive Oil"],
    instructions: ["Roast halved tomatoes, onion, and garlic with olive oil at 400°F (200°C) for 30 mins.", "Transfer roasted veggies to a blender.", "Add vegetable broth and blend until smooth.", "Heat in a pot and serve warm."],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    readyInMinutes: 40, servings: 4, healthScore: 88
  },
  {
    id: 9, title: "Caprese Salad", primaryIngredient: "Tomato",
    allIngredients: ["Tomato", "Fresh Mozzarella", "Basil", "Balsamic Glaze", "Olive Oil"],
    instructions: ["Slice the tomatoes and fresh mozzarella into thick rounds.", "Arrange them on a plate, alternating tomato, cheese, and a basil leaf.", "Drizzle with olive oil and balsamic glaze. Season with salt."],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    readyInMinutes: 10, servings: 2, healthScore: 90
  },
  {
    id: 10, title: "Tomato Egg Shakshuka", primaryIngredient: "Tomato",
    allIngredients: ["Tomato", "Eggs", "Onion", "Paprika", "Cumin"],
    instructions: ["Sauté diced onions with paprika and cumin until soft.", "Add crushed tomatoes and simmer for 10 minutes to thicken.", "Make small wells in the sauce and crack eggs into them.", "Cover and cook until egg whites are set but yolks are runny."],
    image: "https://images.unsplash.com/photo-1604382359799-1ca752916ee2?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 2, healthScore: 82
  },

  // --- CHICKEN RECIPES (5) ---
  {
    id: 11, title: "Lemon Garlic Grilled Chicken", primaryIngredient: "Chicken",
    allIngredients: ["Chicken", "Lemon Juice", "Garlic", "Olive Oil", "Oregano"],
    instructions: ["Whisk lemon juice, olive oil, minced garlic, and oregano in a bowl.", "Marinate chicken breasts for at least 30 minutes.", "Preheat grill or pan.", "Cook chicken for 6-8 minutes per side until fully cooked (165°F internal temp)."],
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
    readyInMinutes: 40, servings: 2, healthScore: 88
  },
  {
    id: 12, title: "Quick Chicken Stir-Fry", primaryIngredient: "Chicken",
    allIngredients: ["Chicken", "Soy Sauce", "Broccoli", "Garlic", "Ginger"],
    instructions: ["Slice chicken into thin strips and chop broccoli.", "Stir-fry chicken in a hot oiled pan until browned. Remove and set aside.", "In the same pan, sauté garlic, ginger, and broccoli.", "Return chicken to pan, add soy sauce, and cook for 2 more minutes."],
    image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b8?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 2, healthScore: 82
  },
  {
    id: 13, title: "Shredded Chicken Tacos", primaryIngredient: "Chicken",
    allIngredients: ["Chicken", "Taco Seasoning", "Tortillas", "Salsa", "Cheese"],
    instructions: ["Boil or bake chicken breasts until cooked through.", "Shred the meat using two forks.", "Simmer the shredded chicken in a pan with taco seasoning and a splash of water.", "Serve in tortillas topped with salsa and cheese."],
    image: "https://images.unsplash.com/photo-1585937407307-61419ddded49?w=400&h=300&fit=crop",
    readyInMinutes: 30, servings: 4, healthScore: 75
  },
  {
    id: 14, title: "Creamy Tuscan Chicken", primaryIngredient: "Chicken",
    allIngredients: ["Chicken", "Heavy Cream", "Spinach", "Garlic", "Parmesan"],
    instructions: ["Season and pan-sear chicken breasts until cooked. Set aside.", "In the same pan, sauté garlic, then add heavy cream and simmer.", "Stir in parmesan cheese and fresh spinach until wilted.", "Return chicken to the creamy sauce to coat."],
    image: "https://images.unsplash.com/photo-1596628384003-830a49e5fb5c?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 2, healthScore: 80
  },
  {
    id: 15, title: "Chicken Fried Rice", primaryIngredient: "Chicken",
    allIngredients: ["Chicken", "Cooked Rice", "Eggs", "Peas", "Soy Sauce"],
    instructions: ["Dice chicken and cook in a large pan or wok. Push to the side.", "Scramble eggs on the empty side of the pan.", "Add cold cooked rice and peas, mixing everything together.", "Drizzle with soy sauce and stir-fry on high heat for 3 minutes."],
    image: "https://images.unsplash.com/photo-1585937421612-70a19fb6dd91?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 3, healthScore: 70
  },


// --- ONION RECIPES (5) ---
 {
    id: 16, title: "French Onion Soup", primaryIngredient: "Onion",
    allIngredients: ["Onion", "Beef Broth", "Butter", "Baguette", "Gruyere Cheese"],
    instructions: ["Caramelize thinly sliced onions in butter for 45 minutes until deep brown.", "Add beef broth and simmer.", "Ladle into bowls, top with a slice of toasted baguette and cheese.", "Broil until cheese is bubbly and golden."],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    readyInMinutes: 60, servings: 4, healthScore: 45
  },
  {
    id: 17, title: "Crispy Onion Rings", primaryIngredient: "Onion",
    allIngredients: ["Onion", "Flour", "Milk", "Egg", "Breadcrumbs", "Oil"],
    instructions: ["Slice onions into thick rings.", "Dip each ring in flour, then a mixture of milk and egg, and finally coat in breadcrumbs.", "Deep fry in hot oil until golden brown.", "Drain on paper towels and salt immediately."],
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
    readyInMinutes: 30, servings: 4, healthScore: 30
  },
  {
    id: 18, title: "Caramelized Onion Tart", primaryIngredient: "Onion",
    allIngredients: ["Onion", "Puff Pastry", "Goat Cheese", "Thyme", "Olive Oil"],
    instructions: ["Slowly cook sliced onions in olive oil until sweet and caramelized.", "Roll out puff pastry on a baking sheet.", "Spread caramelized onions evenly over the pastry and crumble goat cheese on top.", "Bake at 400°F (200°C) for 20 minutes."],
    image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?w=400&h=300&fit=crop",
    readyInMinutes: 50, servings: 6, healthScore: 55
  },
  {
    id: 19, title: "Pickled Red Onions", primaryIngredient: "Onion",
    allIngredients: ["Onion", "White Vinegar", "Water", "Sugar", "Salt"],
    instructions: ["Thinly slice red onions and place them in a glass jar.", "In a saucepan, heat vinegar, water, sugar, and salt until dissolved.", "Pour the hot liquid over the onions.", "Let cool, then refrigerate. Ready in 1 hour."],
    image: "https://images.unsplash.com/photo-1589152144820-692b189e0b34?w=400&h=300&fit=crop",
    readyInMinutes: 65, servings: 8, healthScore: 85
  },
  {
    id: 20, title: "Stuffed Onions", primaryIngredient: "Onion",
    allIngredients: ["Onion", "Ground Beef", "Rice", "Tomato Sauce", "Spices"],
    instructions: ["Boil whole peeled onions until slightly tender, then separate the layers.", "Mix ground beef, uncooked rice, and spices.", "Stuff the meat mixture inside the onion layers.", "Bake in tomato sauce for 45 minutes at 375°F (190°C)."],
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
    readyInMinutes: 60, servings: 4, healthScore: 65
  },

  // --- CARROT RECIPES (5) ---
  {
    id: 21, title: "Honey Glazed Carrots", primaryIngredient: "Carrot",
    allIngredients: ["Carrot", "Honey", "Butter", "Parsley", "Salt"],
    instructions: ["Peel and slice carrots into thick coins.", "Sauté in a pan with butter until slightly tender.", "Drizzle with honey and cook until a sticky glaze forms.", "Garnish with chopped fresh parsley."],
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 4, healthScore: 70
  },
  {
    id: 22, title: "Creamy Carrot Ginger Soup", primaryIngredient: "Carrot",
    allIngredients: ["Carrot", "Fresh Ginger", "Vegetable Broth", "Onion", "Coconut Milk"],
    instructions: ["Sauté chopped onions and grated ginger until fragrant.", "Add chopped carrots and vegetable broth. Simmer until carrots are very soft.", "Blend until completely smooth.", "Stir in coconut milk, heat gently, and serve."],
    image: "https://images.unsplash.com/photo-1604152006599-47f938d8d325?w=400&h=300&fit=crop",
    readyInMinutes: 35, servings: 4, healthScore: 88
  },
  {
    id: 23, title: "Classic Carrot Cake", primaryIngredient: "Carrot",
    allIngredients: ["Carrot", "Flour", "Sugar", "Eggs", "Cream Cheese Frosting"],
    instructions: ["Grate carrots finely.", "Mix dry ingredients, then fold in wet ingredients and grated carrots.", "Bake at 350°F (175°C) for 35-40 minutes.", "Let cool completely before topping with cream cheese frosting."],
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop",
    readyInMinutes: 60, servings: 8, healthScore: 30
  },
  {
    id: 24, title: "Carrot Ribbon Salad", primaryIngredient: "Carrot",
    allIngredients: ["Carrot", "Olive Oil", "Lemon Juice", "Dijon Mustard", "Walnuts"],
    instructions: ["Use a vegetable peeler to shave carrots into long, thin ribbons.", "Whisk olive oil, lemon juice, and a dab of mustard for the dressing.", "Toss the ribbons in the dressing.", "Top with toasted walnuts before serving."],
    image: "https://images.unsplash.com/photo-1528650765831-7e87ab01f22e?w=400&h=300&fit=crop",
    readyInMinutes: 10, servings: 2, healthScore: 95
  },
  {
    id: 25, title: "Roasted Carrot Fries", primaryIngredient: "Carrot",
    allIngredients: ["Carrot", "Olive Oil", "Garlic Powder", "Parmesan Cheese", "Salt"],
    instructions: ["Cut carrots into thin sticks resembling french fries.", "Toss with olive oil, garlic powder, and salt.", "Roast at 425°F (220°C) for 20 minutes until crispy at the edges.", "Toss with grated parmesan immediately after removing from oven."],
    image: "https://images.unsplash.com/photo-1604152008851-81787c884ee2?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 3, healthScore: 80
  },

  // --- MUTTON RECIPES (5) ---
  {
    id: 26, title: "Classic Mutton Curry", primaryIngredient: "Mutton",
    allIngredients: ["Mutton", "Onion", "Tomato", "Ginger Garlic Paste", "Garam Masala"],
    instructions: ["Marinate mutton pieces in yogurt and spices for 1 hour.", "Sauté finely chopped onions and ginger-garlic paste until golden.", "Add tomatoes and mutton, cooking on high heat to seal the meat.", "Add water, cover, and slow-cook for 1.5 hours until meat is tender."],
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b6ae39c?w=400&h=300&fit=crop",
    readyInMinutes: 120, servings: 4, healthScore: 60
  },
  {
    id: 27, title: "Mutton Biryani", primaryIngredient: "Mutton",
    allIngredients: ["Mutton", "Basmati Rice", "Yogurt", "Saffron", "Biryani Spices"],
    instructions: ["Parboil basmati rice with whole spices.", "Cook marinated mutton until 80% done in a heavy-bottomed pot.", "Layer the partially cooked rice over the meat.", "Drizzle with saffron milk, seal the pot, and cook on low heat (dum) for 30 minutes."],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
    readyInMinutes: 90, servings: 6, healthScore: 55
  },
  {
    id: 28, title: "Slow Roast Mutton Leg", primaryIngredient: "Mutton",
    allIngredients: ["Mutton", "Rosemary", "Garlic", "Olive Oil", "Potatoes"],
    instructions: ["Make deep cuts in a whole leg of mutton and stuff with garlic cloves and rosemary.", "Rub generously with olive oil, salt, and pepper.", "Place in a roasting pan with chopped potatoes.", "Roast slowly at 325°F (160°C) for 3-4 hours until meat falls off the bone."],
    image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=400&h=300&fit=crop",
    readyInMinutes: 240, servings: 8, healthScore: 50
  },
  {
    id: 29, title: "Mutton Stew", primaryIngredient: "Mutton",
    allIngredients: ["Mutton", "Carrot", "Potato", "Celery", "Beef Broth"],
    instructions: ["Brown cubed mutton in a large pot.", "Add chopped carrots, potatoes, and celery.", "Pour in beef broth until everything is covered.", "Simmer on low heat for 2 hours until the stew thickens and meat is tender."],
    image: "https://images.unsplash.com/photo-1548943487-a2e4b43b5853?w=400&h=300&fit=crop",
    readyInMinutes: 135, servings: 4, healthScore: 75
  },
  {
    id: 30, title: "Mutton Kebabs", primaryIngredient: "Mutton",
    allIngredients: ["Mutton", "Mint", "Coriander", "Green Chili", "Cumin"],
    instructions: ["Mince the mutton finely in a food processor.", "Mix thoroughly with chopped mint, coriander, chili, and cumin.", "Mold the mixture onto skewers.", "Grill over hot coals or in a pan for 10-12 minutes until cooked through."],
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    readyInMinutes: 40, servings: 4, healthScore: 65
  },

  // --- BEEF RECIPES (5) ---
  {
    id: 31, title: "Classic Beef Steak", primaryIngredient: "Beef",
    allIngredients: ["Beef", "Butter", "Garlic", "Thyme", "Salt"],
    instructions: ["Let the steak reach room temperature and season generously with salt.", "Heat a cast-iron skillet until smoking hot.", "Sear the steak for 3 minutes per side for medium-rare.", "Add butter, garlic, and thyme to the pan, and baste the steak for 1 minute before resting."],
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 2, healthScore: 60
  },
  {
    id: 32, title: "Beef Stroganoff", primaryIngredient: "Beef",
    allIngredients: ["Beef", "Mushrooms", "Onion", "Sour Cream", "Egg Noodles"],
    instructions: ["Quickly brown strips of beef in a pan, then remove.", "In the same pan, sauté mushrooms and onions until soft.", "Stir in broth and sour cream to make a sauce.", "Return beef to the pan and serve immediately over cooked egg noodles."],
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop",
    readyInMinutes: 30, servings: 4, healthScore: 55
  },
  {
    id: 33, title: "Hearty Beef Chili", primaryIngredient: "Beef",
    allIngredients: ["Beef", "Kidney Beans", "Crushed Tomatoes", "Chili Powder", "Onion"],
    instructions: ["Brown ground beef and diced onions in a large pot.", "Stir in chili powder and cook for 1 minute.", "Add crushed tomatoes and kidney beans.", "Simmer for at least 30 minutes to let the flavors meld."],
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&h=300&fit=crop",
    readyInMinutes: 45, servings: 6, healthScore: 70
  },
  {
    id: 34, title: "Beef and Broccoli Stir Fry", primaryIngredient: "Beef",
    allIngredients: ["Beef", "Broccoli", "Soy Sauce", "Ginger", "Sesame Oil"],
    instructions: ["Slice beef very thinly against the grain.", "Blanch broccoli florets in boiling water for 1 minute.", "Stir-fry beef in a hot wok with sesame oil and ginger until browned.", "Add broccoli and soy sauce, tossing for 2 minutes until coated."],
    image: "https://images.unsplash.com/photo-1594998893017-361fd70ba7f4?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 2, healthScore: 75
  },
  {
    id: 35, title: "Classic Beef Burger", primaryIngredient: "Beef",
    allIngredients: ["Beef", "Hamburger Buns", "Cheese", "Lettuce", "Tomato"],
    instructions: ["Form ground beef into patties, slightly wider than your buns.", "Season both sides with salt and pepper.", "Grill or pan-fry for 4-5 minutes per side.", "Add cheese during the last minute of cooking, then assemble on toasted buns."],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 4, healthScore: 40
  },

  // --- FISH RECIPES (5) ---
  {
    id: 36, title: "Pan-Seared Salmon", primaryIngredient: "Fish",
    allIngredients: ["Fish", "Olive Oil", "Lemon", "Salt", "Black Pepper"],
    instructions: ["Pat salmon fillets completely dry and season with salt and pepper.", "Heat olive oil in a skillet over medium-high heat.", "Place salmon skin-side up and cook for 4 minutes without moving.", "Flip, cook for 3 more minutes, and finish with a squeeze of fresh lemon."],
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 2, healthScore: 90
  },
  {
    id: 37, title: "Crispy Fish Tacos", primaryIngredient: "Fish",
    allIngredients: ["Fish", "Tortillas", "Cabbage", "Lime", "Sour Cream"],
    instructions: ["Cut white fish (like cod) into chunks and coat lightly in seasoned flour.", "Pan-fry until crispy and golden.", "Shred cabbage and mix with sour cream and lime juice for a slaw.", "Assemble tacos with fish and slaw on warm tortillas."],
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 3, healthScore: 75
  },
  {
    id: 38, title: "Baked Fish with Garlic Butter", primaryIngredient: "Fish",
    allIngredients: ["Fish", "Butter", "Garlic", "Parsley", "Lemon Juice"],
    instructions: ["Preheat oven to 375°F (190°C).", "Place fish fillets in a baking dish.", "Melt butter and mix with minced garlic, parsley, and lemon juice.", "Pour over the fish and bake for 12-15 minutes until flaky."],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 4, healthScore: 80
  },
  {
    id: 39, title: "Classic Fish and Chips", primaryIngredient: "Fish",
    allIngredients: ["Fish", "Potatoes", "Flour", "Beer", "Oil"],
    instructions: ["Cut potatoes into thick chips and fry until golden. Set aside.", "Whisk flour and cold beer to create a light batter.", "Dip white fish fillets in the batter and drop carefully into hot oil.", "Fry until deep golden brown and crispy. Serve with the chips."],
    image: "https://images.unsplash.com/photo-1580256081112-e493c73ed281?w=400&h=300&fit=crop",
    readyInMinutes: 45, servings: 2, healthScore: 40
  },
  {
    id: 40, title: "Thai Fish Curry", primaryIngredient: "Fish",
    allIngredients: ["Fish", "Coconut Milk", "Red Curry Paste", "Fish Sauce", "Basil"],
    instructions: ["Heat red curry paste in a pot for 1 minute until fragrant.", "Stir in coconut milk and bring to a gentle simmer.", "Add chunks of firm white fish and cook for 5-7 minutes.", "Season with fish sauce and garnish with fresh basil leaves before serving."],
    image: "https://images.unsplash.com/photo-1544025162-811114b0b1bc?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 4, healthScore: 85
  },

  // --- APPLE RECIPES (5) ---
  {
    id: 41, title: "Classic Apple Pie", primaryIngredient: "Apple",
    allIngredients: ["Apple", "Pie Crust", "Sugar", "Cinnamon", "Butter"],
    instructions: ["Peel, core, and slice the apples.", "Toss apples with sugar, cinnamon, and a pinch of salt.", "Pour into pie crust and cover with a top crust, cutting slits for steam.", "Bake at 375°F (190°C) for 50 minutes until golden brown."],
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=400&h=300&fit=crop",
    readyInMinutes: 75, servings: 8, healthScore: 30
  },
  {
    id: 42, title: "Homemade Apple Crisp", primaryIngredient: "Apple",
    allIngredients: ["Apple", "Oats", "Brown Sugar", "Butter", "Cinnamon"],
    instructions: ["Slice apples and layer them in a baking dish.", "Mix oats, brown sugar, cinnamon, and cut-in cold butter until crumbly.", "Sprinkle the oat mixture evenly over the apples.", "Bake at 350°F (175°C) for 40 minutes until bubbly and crisp."],
    image: "https://images.unsplash.com/photo-1601379323521-0a3dbf2d7bf8?w=400&h=300&fit=crop",
    readyInMinutes: 55, servings: 6, healthScore: 45
  },
  {
    id: 43, title: "Fresh Waldorf Salad", primaryIngredient: "Apple",
    allIngredients: ["Apple", "Celery", "Grapes", "Walnuts", "Mayonnaise"],
    instructions: ["Chop apples and celery into bite-sized pieces.", "Halve the grapes and toast the walnuts.", "Toss all ingredients together with a light coating of mayonnaise and a squeeze of lemon juice.", "Chill for 30 minutes before serving."],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 4, healthScore: 75
  },
  {
    id: 44, title: "Apple Cinnamon Oatmeal", primaryIngredient: "Apple",
    allIngredients: ["Apple", "Rolled Oats", "Milk", "Cinnamon", "Maple Syrup"],
    instructions: ["Dice the apple into small pieces.", "Cook oats in milk over medium heat.", "Stir in the diced apples and cinnamon halfway through cooking.", "Top with a drizzle of maple syrup and serve warm."],
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 2, healthScore: 85
  },
  {
    id: 45, title: "Pork Chops with Apples", primaryIngredient: "Apple",
    allIngredients: ["Apple", "Pork Chops", "Onion", "Butter", "Thyme"],
    instructions: ["Season pork chops and sear them in a skillet until browned. Set aside.", "In the same pan, sauté sliced apples and onions in butter until soft.", "Add a dash of thyme and return the pork chops to the pan.", "Cover and simmer until pork is cooked through."],
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=400&h=300&fit=crop",
    readyInMinutes: 30, servings: 2, healthScore: 60
  },

  // --- BANANA RECIPES (5) ---
  {
    id: 46, title: "Classic Banana Bread", primaryIngredient: "Banana",
    allIngredients: ["Banana", "Flour", "Sugar", "Butter", "Eggs"],
    instructions: ["Mash overripe bananas in a bowl.", "Mix melted butter, sugar, and eggs, then combine with the mashed bananas.", "Fold in the flour and a pinch of baking soda.", "Bake in a loaf pan at 350°F (175°C) for 60 minutes."],
    image: "https://images.unsplash.com/photo-1596634563459-a292d3b2a1a8?w=400&h=300&fit=crop",
    readyInMinutes: 75, servings: 8, healthScore: 40
  },
  {
    id: 47, title: "Banana Oat Pancakes", primaryIngredient: "Banana",
    allIngredients: ["Banana", "Eggs", "Oats", "Milk", "Cinnamon"],
    instructions: ["Blend bananas, eggs, oats, milk, and cinnamon in a blender until smooth.", "Heat a lightly oiled griddle over medium heat.", "Pour batter to form pancakes and cook until bubbles form on top.", "Flip and cook until golden brown."],
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 2, healthScore: 80
  },
  {
    id: 48, title: "Strawberry Banana Smoothie", primaryIngredient: "Banana",
    allIngredients: ["Banana", "Strawberries", "Yogurt", "Milk", "Honey"],
    instructions: ["Slice the banana and hull the strawberries.", "Add fruits, yogurt, a splash of milk, and a drizzle of honey to a blender.", "Blend until completely smooth and creamy.", "Serve immediately cold."],
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&h=300&fit=crop",
    readyInMinutes: 5, servings: 2, healthScore: 90
  },
  {
    id: 49, title: "Caramelized Bananas", primaryIngredient: "Banana",
    allIngredients: ["Banana", "Butter", "Brown Sugar", "Cinnamon", "Vanilla Ice Cream"],
    instructions: ["Slice bananas in half lengthwise.", "Melt butter and brown sugar in a skillet over medium heat.", "Add bananas flat side down and cook for 2 minutes until caramelized.", "Serve warm over vanilla ice cream with a dusting of cinnamon."],
    image: "https://images.unsplash.com/photo-1588661751122-eb128eb583d4?w=400&h=300&fit=crop",
    readyInMinutes: 10, servings: 2, healthScore: 35
  },
  {
    id: 50, title: "Peanut Butter Banana Toast", primaryIngredient: "Banana",
    allIngredients: ["Banana", "Bread", "Peanut Butter", "Chia Seeds", "Honey"],
    instructions: ["Toast the bread until golden and crisp.", "Spread a generous layer of peanut butter on the toast.", "Top with sliced bananas.", "Drizzle with honey and sprinkle chia seeds on top."],
    image: "https://images.unsplash.com/photo-1584214041764-8ee7cf3cb6de?w=400&h=300&fit=crop",
    readyInMinutes: 5, servings: 1, healthScore: 85
  },

  // --- ORANGE RECIPES (5) ---
  {
    id: 51, title: "Crispy Orange Chicken", primaryIngredient: "Orange",
    allIngredients: ["Orange", "Chicken", "Soy Sauce", "Cornstarch", "Sugar"],
    instructions: ["Cut chicken into cubes, coat in cornstarch, and fry until crispy. Set aside.", "In a pan, mix fresh orange juice, orange zest, soy sauce, and sugar.", "Simmer until the sauce thickens into a glaze.", "Toss the crispy chicken in the orange glaze until coated."],
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop",
    readyInMinutes: 40, servings: 4, healthScore: 55
  },
  {
    id: 52, title: "Orange Glazed Salmon", primaryIngredient: "Orange",
    allIngredients: ["Orange", "Salmon", "Honey", "Garlic", "Soy Sauce"],
    instructions: ["Whisk fresh orange juice, honey, soy sauce, and minced garlic to make a glaze.", "Place salmon fillets on a baking sheet and pour half the glaze over them.", "Bake at 400°F (200°C) for 12-15 minutes.", "Brush with remaining glaze before serving."],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 2, healthScore: 88
  },
  {
    id: 53, title: "Fresh Orange Smoothie", primaryIngredient: "Orange",
    allIngredients: ["Orange", "Yogurt", "Vanilla Extract", "Ice", "Honey"],
    instructions: ["Peel the oranges and remove the seeds.", "Place orange segments, a scoop of yogurt, a dash of vanilla, and ice into a blender.", "Blend on high until smooth and frothy.", "Sweeten with a little honey if desired."],
    image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=400&h=300&fit=crop",
    readyInMinutes: 5, servings: 2, healthScore: 92
  },
  {
    id: 54, title: "Orange Almond Cake", primaryIngredient: "Orange",
    allIngredients: ["Orange", "Almond Flour", "Eggs", "Sugar", "Baking Powder"],
    instructions: ["Boil whole oranges for 1 hour until very soft, then puree them entirely (including skin).", "Beat eggs and sugar until light, then fold in almond flour and baking powder.", "Gently mix in the orange puree.", "Bake at 350°F (175°C) for 45-50 minutes until a skewer comes out clean."],
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop",
    readyInMinutes: 90, servings: 8, healthScore: 60
  },
  {
    id: 55, title: "Cranberry Orange Muffins", primaryIngredient: "Orange",
    allIngredients: ["Orange", "Flour", "Cranberries", "Sugar", "Butter"],
    instructions: ["Mix flour, sugar, and baking powder in a bowl.", "In another bowl, combine melted butter, egg, fresh orange juice, and orange zest.", "Combine wet and dry ingredients gently, then fold in fresh cranberries.", "Bake in a muffin tin at 400°F (200°C) for 18-20 minutes."],
    image: "https://images.unsplash.com/photo-1607335614551-3062bf90f30e?w=400&h=300&fit=crop",
    readyInMinutes: 35, servings: 12, healthScore: 50
  },

  // --- PRAWNS RECIPES (5) ---
  {
    id: 56, title: "Garlic Butter Prawns", primaryIngredient: "Prawns",
    allIngredients: ["Prawns", "Butter", "Garlic", "Lemon", "Parsley"],
    instructions: ["Melt butter in a large skillet over medium heat.", "Add minced garlic and cook for 1 minute until fragrant.", "Add peeled prawns and cook for 2-3 minutes per side until pink.", "Squeeze fresh lemon juice over the top and garnish with parsley."],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 2, healthScore: 70
  },
  {
    id: 57, title: "Spicy Prawn Curry", primaryIngredient: "Prawns",
    allIngredients: ["Prawns", "Coconut Milk", "Curry Paste", "Onion", "Tomato"],
    instructions: ["Sauté onions and curry paste in a pot until fragrant.", "Add diced tomatoes and coconut milk, bringing to a simmer.", "Add the prawns and cook for 5 minutes until opaque.", "Serve hot over steamed white rice."],
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 4, healthScore: 75
  },
  {
    id: 58, title: "Prawn Fried Rice", primaryIngredient: "Prawns",
    allIngredients: ["Prawns", "Cooked Rice", "Eggs", "Peas", "Soy Sauce"],
    instructions: ["Quickly stir-fry prawns in a wok until just pink. Remove and set aside.", "Scramble eggs in the wok, then add cold cooked rice, peas, and carrots.", "Return the prawns to the wok and drizzle with soy sauce.", "Stir-fry on high heat for 3 minutes to combine flavors."],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    readyInMinutes: 20, servings: 3, healthScore: 65
  },
  {
    id: 59, title: "Prawn Linguine Pasta", primaryIngredient: "Prawns",
    allIngredients: ["Prawns", "Linguine", "Olive Oil", "Chili Flakes", "Garlic"],
    instructions: ["Boil linguine in salted water until al dente.", "In a pan, gently fry garlic and chili flakes in olive oil.", "Add prawns and cook until pink.", "Toss the cooked pasta into the pan with a splash of pasta water and mix well."],
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 2, healthScore: 70
  },
  {
    id: 60, title: "Classic Prawn Cocktail", primaryIngredient: "Prawns",
    allIngredients: ["Prawns", "Lettuce", "Mayonnaise", "Ketchup", "Lemon"],
    instructions: ["Boil prawns until pink, then chill them completely.", "Mix mayonnaise, ketchup, a dash of hot sauce, and lemon juice to make the Marie Rose sauce.", "Shred lettuce and place in the bottom of glass cups.", "Top with chilled prawns and drizzle generously with the sauce."],
    image: "https://images.unsplash.com/photo-1628190710606-2591e1d328df?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 4, healthScore: 60
  },

  // --- LENTILS RECIPES (5) ---
  {
    id: 61, title: "Hearty Lentil Soup", primaryIngredient: "Lentils",
    allIngredients: ["Lentils", "Carrot", "Celery", "Onion", "Vegetable Broth"],
    instructions: ["Sauté diced onions, carrots, and celery in a large pot until soft.", "Rinse lentils and add them to the pot along with vegetable broth.", "Bring to a boil, then reduce heat and simmer for 30-40 minutes.", "Blend a small portion of the soup to thicken it, season, and serve."],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    readyInMinutes: 50, servings: 4, healthScore: 90
  },
  {
    id: 62, title: "Spiced Lentil Curry (Dal)", primaryIngredient: "Lentils",
    allIngredients: ["Lentils", "Tomato", "Turmeric", "Cumin", "Garlic"],
    instructions: ["Boil lentils with turmeric and salt until mushy.", "In a separate small pan, heat oil and temper cumin seeds, minced garlic, and diced tomatoes (the 'Tadka').", "Pour the spiced tomato mixture over the cooked lentils and stir well.", "Garnish with fresh cilantro and serve with naan."],
    image: "https://images.unsplash.com/photo-1585937421612-70a19fb6dd91?w=400&h=300&fit=crop",
    readyInMinutes: 35, servings: 4, healthScore: 95
  },
  {
    id: 63, title: "Lentil Salad with Feta", primaryIngredient: "Lentils",
    allIngredients: ["Lentils", "Cucumber", "Feta Cheese", "Lemon", "Olive Oil"],
    instructions: ["Cook lentils until tender but still firm. Drain and let cool.", "Dice cucumber and crumble the feta cheese.", "Toss the lentils, cucumber, and feta together.", "Dress with olive oil, fresh lemon juice, salt, and pepper."],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    readyInMinutes: 25, servings: 3, healthScore: 92
  },
  {
    id: 64, title: "Lentil Shepherd's Pie", primaryIngredient: "Lentils",
    allIngredients: ["Lentils", "Potatoes", "Carrot", "Peas", "Vegetable Broth"],
    instructions: ["Boil and mash potatoes with a little butter and milk.", "Cook lentils, carrots, and peas in vegetable broth until it forms a thick stew.", "Pour the lentil stew into a baking dish.", "Top evenly with mashed potatoes and bake at 400°F (200°C) for 20 minutes."],
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=400&h=300&fit=crop",
    readyInMinutes: 65, servings: 6, healthScore: 85
  },
  {
    id: 65, title: "Vegan Lentil Burgers", primaryIngredient: "Lentils",
    allIngredients: ["Lentils", "Breadcrumbs", "Onion", "Garlic Powder", "Burger Buns"],
    instructions: ["Mash cooked lentils in a bowl until sticky.", "Mix in finely diced onions, breadcrumbs, and garlic powder.", "Form the mixture into thick patties.", "Pan-fry the patties for 5 minutes on each side until crusty, then serve on buns."],
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
    readyInMinutes: 30, servings: 4, healthScore: 80
  },

  // --- CHICKPEAS RECIPES (5) ---
  {
    id: 66, title: "Creamy Homemade Hummus", primaryIngredient: "Chickpeas",
    allIngredients: ["Chickpeas", "Tahini", "Garlic", "Lemon Juice", "Olive Oil"],
    instructions: ["Drain and rinse chickpeas, saving a little of the liquid.", "Place chickpeas, tahini, garlic, and lemon juice into a food processor.", "Blend until smooth, slowly streaming in olive oil and reserved liquid to reach desired creaminess.", "Serve with pita bread and a drizzle of olive oil."],
    image: "https://images.unsplash.com/photo-1576203923018-8314143496ba?w=400&h=300&fit=crop",
    readyInMinutes: 10, servings: 6, healthScore: 90
  },
  {
    id: 67, title: "Classic Chana Masala", primaryIngredient: "Chickpeas",
    allIngredients: ["Chickpeas", "Tomato", "Onion", "Garam Masala", "Ginger"],
    instructions: ["Sauté onions, ginger, and garlic until golden brown.", "Add chopped tomatoes and garam masala, cooking until the oil separates.", "Stir in the chickpeas and simmer for 15-20 minutes.", "Serve hot with rice or flatbread."],
    image: "https://images.unsplash.com/photo-1585937421612-70a19fb6dd91?w=400&h=300&fit=crop",
    readyInMinutes: 35, servings: 4, healthScore: 88
  },
  {
    id: 68, title: "Crispy Roasted Chickpeas", primaryIngredient: "Chickpeas",
    allIngredients: ["Chickpeas", "Olive Oil", "Paprika", "Cumin", "Salt"],
    instructions: ["Preheat oven to 400°F (200°C).", "Drain, rinse, and thoroughly dry the chickpeas with a paper towel.", "Toss them with olive oil, paprika, cumin, and salt.", "Spread on a baking sheet and roast for 20-30 minutes until crunchy."],
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&h=300&fit=crop",
    readyInMinutes: 35, servings: 4, healthScore: 85
  },
  {
    id: 69, title: "Mediterranean Chickpea Salad", primaryIngredient: "Chickpeas",
    allIngredients: ["Chickpeas", "Cucumber", "Cherry Tomatoes", "Red Onion", "Feta Cheese"],
    instructions: ["Drain and rinse chickpeas.", "Chop cucumber, halve the cherry tomatoes, and finely dice the red onion.", "Combine veggies with chickpeas and crumbled feta.", "Toss with olive oil, lemon juice, and oregano."],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    readyInMinutes: 15, servings: 4, healthScore: 95
  },
  {
    id: 70, title: "Authentic Falafel", primaryIngredient: "Chickpeas",
    allIngredients: ["Chickpeas", "Parsley", "Garlic", "Cumin", "Flour"],
    instructions: ["Use soaked raw chickpeas (not canned) and pulse in a food processor with parsley, garlic, and cumin until crumbly.", "Sprinkle in a little flour so the mixture holds together when squeezed.", "Form into small balls or patties.", "Deep fry until dark golden brown and crispy on the outside."],
    image: "https://images.unsplash.com/photo-1593006526979-8f8fa072d61b?w=400&h=300&fit=crop",
    readyInMinutes: 45, servings: 4, healthScore: 75
  }
   ];

export default localRecipes;

// Helper to adapt user format to app format
export function getRecipesByIngredients(ingredients) {
  if (!ingredients || ingredients.length === 0) {
    return localRecipes.slice(0, 5);
  }

  const results = [];
  const seenIds = new Set();

  // Helper to format the recipe perfectly for the UI
  const formatRecipe = (recipe) => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    healthScore: recipe.healthScore,
    usedIngredients: [{ name: recipe.primaryIngredient, original: recipe.primaryIngredient }],
    missedIngredients: [],
    instructions: recipe.instructions.join(' '),
    extendedIngredients: recipe.allIngredients.map(i => ({ original: i }))
  });

  for (const ing of ingredients) {
    const ingLower = ing.toLowerCase();

    // PASS 1: Strict Match! (This fixes the soup mix-ups)
    // First, look ONLY for recipes where this is the main ingredient.
    for (const recipe of localRecipes) {
      if (seenIds.has(recipe.id)) continue;
      
      if (recipe.primaryIngredient.toLowerCase() === ingLower) {
        results.push(formatRecipe(recipe));
        seenIds.add(recipe.id);
        if (results.length >= 5) break;
      }
    }

    // PASS 2: Fallback for minor ingredients
    // If it's a side ingredient like "Garlic" or "Butter", search the full ingredient list.
    if (results.length < 5) {
      for (const recipe of localRecipes) {
        if (seenIds.has(recipe.id)) continue;
        
        if (recipe.allIngredients.some(i => i.toLowerCase().includes(ingLower))) {
          results.push(formatRecipe(recipe));
          seenIds.add(recipe.id);
          if (results.length >= 5) break;
        }
      }
    }

    if (results.length >= 5) break;
  }

  return results.slice(0, 5);
}

export function getAllRecipes() {
  return localRecipes;
}