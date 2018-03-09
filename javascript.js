
var breakfast = [];
var lunch = [];
var dinner = [];
var snack = []

console.log(breakfast)
console.log(dinner)

var recipe = function(title, ing, inst, time) {
    this.title = title;
    this.ing = ing;
    this.inst = inst;
    this.time = time;

    this.populate = function() {

        var c = {
            title: title,
            ing: ing,
            inst: inst,
            time: time
        }
        if (c.time === "Breakfast") {
            breakfast.push(c);
        } else if (c.time === "Lunch") {
            lunch.push(c);
        } else if (c.time === "Dinner") {
            dinner.push(c);
        } else if ((c.time === "Snack") ||(c.time === "Dessert")) {
            snack.push(c);
        }
    }
    console.log(breakfast);


}



$(".BLDS").on("click", function() {
    

    var x = ($(this).data("let"))


    if (x === "breakfast") {
        $(".results").empty();

        for (u = 0; u < breakfast.length; u++) {
            var w = breakfast[u].title;

            putToScreen(w, u, "breakfast")
        }
    } else if (x === "lunch") {
        $(".results").empty();
        for (u = 0; u < lunch.length; u++) {
            var w = lunch[u].title;

            putToScreen(w, u, "lunch")
        }
    } else if (x === "dinner") {
        $(".results").empty();
        for (u = 0; u < dinner.length; u++) {
            var w = dinner[u].title;

            putToScreen(w, u, "dinner")
        }
    } else if (x === "snack") {
        $(".results").empty();
        for (u = 0; u < snack.length; u++) {
            var w = snack[u].title;

            putToScreen(w, u, "snack")
        }
    }







    
function putToScreen(w, u, timeOfDay) {
  
var jumbo ="<div class='col'></div><div class='col-lg-8'><div class='jumbotron results'></div></div><div class='col'></div>"
    
        
        var t ="<button type='button' class='btn btn-info btn-lg btn-block title-select' data-let="+u+" data-name="+timeOfDay+" data-toggle='modal' data-target='#exampleModal'>"+w+"</button>";
        
            
        

        $(".results").append(t);

    }



    $(".title-select").on("click", function() {
        $(".modal-body").empty();
        var p = ($(this).data("let"));
        var g = ($(this).data("name"));

        if(window.innerWidth > 576){
        $(".modal-dialog").css("max-width","60%");
        }
        var card ="<div class='card-body'><h5 class='card-title'>Ingredients</h5><br><p class='card-text ingred'></p><br><h5 class='card-title'>Instructions</h5><br><p class='card-text instruct'></p></div>"

        $(".modal-body").html(card);

        if (g === "breakfast") {
            var rr = breakfast[p].title
            $(".modal-title").html(rr);
            $(".ingred").html(breakfast[p].ing);
            $(".instruct").html(breakfast[p].inst);
        } else if (g === "lunch") {
            var rr = lunch[p].title
            $(".modal-title").html(rr);
            $(".ingred").html(lunch[p].ing);
            $(".instruct").html(lunch[p].inst);
        } else if (g === "dinner") {
            var rr = dinner[p].title
            $(".modal-title").html(rr);
            $(".ingred").html(dinner[p].ing);
            $(".instruct").html(dinner[p].inst);
        } else if (g === "snack") {
            var rr = snack[p].title
            $(".modal-title").html(rr);
            $(".ingred").html(snack[p].ing);
            $(".instruct").html(snack[p].inst);
        }
        $(".cancel").css("display","none");
        $(".done").css("display","none");
        

    })




});





function AddNewRecipe(){
   
    $(".modal-dialog").css("max-width","500px");
    $(".modal-title").html("Add Recipe");
    $(".done").css("display","block");
    $(".cancel").css("display","block");
    var form = "<form><div class='form-group'><label for='formGroupExampleInput'>Recipe Name</label>";
    form +="<input type='text' class='form-control' id='title'>";
    form +="</div><div class='form-group'><label for='formGroupExampleInput2'>Ingredients</label>";
    form +="<textarea class='form-control' id='ingredients' rows='3'></textarea>";
    form +="</div><div class='form-group'><label for='formGroupExampleInput3'>Cooking Instructions</label>";
    form +="<textarea class='form-control' id='instructions' rows='5'></textarea>";
    form +="</div><div class='form-group'><label for='exampleFormControlSelect1'>Type of food</label><select class='form-control time'>";
    form += "<option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Snack</option><option>Dessert</option></select>";
    form +="</div></form>";
    $(".modal-body").html(form);

}

$("#submit").on("click", function() {
    
    var input1 = $("#title").val().trim();
    var input2 = $("#ingredients").val().trim();
    var input3 = $("#instructions").val().trim();
    var input4 = $(".time").val();

    console.log(input1);
    console.log(input2);
    console.log(input3);
    console.log(input4);

     var newMember = new recipe(input1, input2, input3, input4);
            newMember.populate();
            $("#title").val("");
            $("#ingredients").val("");
            $("#instructions").val("");
    

});
var hotNsour= new recipe("hot and sour soup", 
    "1/2 cup shiitake mushrooms, water, 2Tbsp cornstarch, 1 tsp sesame oil, 1 tsp grated ginger, 1 clove minced garlic, 1/2 cup baby portobello mushrooms, 1/4 cup bamboo shoots, 4 cups chicken broth, 1 Tbsp soy sauce, 1 tsp salt, 2 Tbsp wine vinegar, 1 tsp chili garlic paste, 1 egg, green onions, black pepper",
    "1/2 cup dried shiitake mushrooms Hydrate 10 minute with warm water. Reserve 1/4 cup of the juice add the juice to 2 tbsp cornstarch and mix until dissolved. Set aside In a pot add 1 tsp Sesame Oil let it heat up, add 1 tsp grated ginger 1 clove minced garlic. Cook a minute add 1/2 cup baby portobello mushrooms, sliced 1/4 cup seasoned baked tofu, sliced 1/4 cup sliced bamboo shoots. Stir and sautee 2 min Hydrated shiitake mushrooms add 4 cups chicken broth. Bring to a boil while stirring, turn down to simmer for 10-12 min until mushrooms are cooked. season with 1 tbsp soy sauce 1 tsp kosher salt 2 tbsp rice wine vinegar 1 tsp chili garlic paste mix and add cornstarch slurry. Bring back to a boil to thicken while mixing add 1 raw, scrambled egg. Mix into egg ribbons. serve and garnish with sliced green onions and white or black pepper powder","Dinner");

    hotNsour.populate();

    var butterChicken= new recipe("butter chicken","1 lb chicken thigh, 2 tsp Turmeric, 3 tsp Garam Masala, 2 tsp Cumin, 1 tsp salt, 1 cup Greek Yogurt, 3-4 Tbsp Olive oil, 1 onion, 4 minced garlic, 1 1/2 tsp grated ginger, 1/4 tsp Cardamom, 1/4 tsp Paprika, 1/4 tsp Cinamon, 1/2 cup Coconut milk from can, 1/4 cup butter","Yogurt Curry Marinade: 1 lb Chicken Thigh (sub with Tofu or Cauliflower or Chickpeas) 1 tsp Turmeric, 1 tsp Garam Masala, 1 tsp Cumin, 1 tsp Kosher Salt, 1 cup Greek Yogurt. Mix together and marinate at least 20 minutes. In a dutch oven or cast iron pot, add 3-4 tbsp Olive Oil ,1 Onion cut into chunks. Saute 2-3 min then add 4 cloves Minced Garlic, 1/2 tsp grated Ginger. Stir again for 2-3 min.2 tsp Garam Masala, 1 tsp Cumin, 1 tsp Turmeric,1/4 tsp Cardamom, ,1/4 tsp Paprika, ,1/4 tsp Cinnamon, Stir to toast up. Add the marinaded Chicken, mix well for about 5 min on med-high heat. Add 2 cups Crushed Tomatoes. Stir and simmer 20 min on low heat.Add 1/4 cup (4 tbsp) butter, 1/2 cup Coconut Milk from a can. Salt to taste. Simmer 5-10 more minutes to thicken. Serve over Basmati Rice","Dinner");
    butterChicken.populate();

    var bakedChickenParm = new recipe("Baked Chicken Parmesan","1/2 cup Marinara sauce, 4 chicken breasts, salt, black pepper, basil leaves, 4 cheese italian blend cheese"," In an oven-safe pan, spread out 1/4 cup Marinara sauce. Layer on the chicken, sprinkle with salt and pepper. Then layer on fresh basil leaves, two per breast. Then cover with more sauce and sprinkle on the cheese. Bake 25 Minutes at 375º F until the chicken is cooked and the cheese is melted and golden brown. Garnish with fresh basil.", "Dinner");
    bakedChickenParm.populate();

