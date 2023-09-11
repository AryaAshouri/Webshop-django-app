AOS.init();
$(document).on("submit", "#category-selection-form", function(page){
    page.preventDefault();
});
const everything = document.getElementById("Everything")
const clothes = document.getElementById("Clothes");
const electrical = document.getElementById("Electrical");
const groceries = document.getElementById("Groceries");
const books = document.getElementById("Books");
const toy = document.getElementById("Toy");
const furniture = document.getElementById("Furniture");
const stationery =  document.getElementById("Stationery");
const flowers = document.getElementById("Flowers");
const kitchenware = document.getElementById("Kitchenware");
const sport_equipments = document.getElementById("Sport_Equipments");
const medicine = document.getElementById("Medicine");
const cosmetic = document.getElementById("Cosmetic");
const none = document.getElementById("None");
const all = [everything, clothes, electrical, groceries, books, toy, furniture, stationery, flowers, kitchenware, sport_equipments, medicine, cosmetic, none];
var current_category = "همه موارد";
function change_category(index){
    switch(index){
        case 0:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "همه موارد";
            everything.style.background = "white";
            break;
        case 1:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "پوشاک و البسه";
            clothes.style.background = "white";
            break;
        case 2:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "الکتریکی و برقی";
            electrical.style.background = "white";
            break;
        case 3:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "غذایی و خوردنی";
            groceries.style.background = "white";
            break;
        case 4:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "کتاب و خواندنی";
            books.style.background = "white";
            break;
        case 5:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "اسباب بازی";
            toy.style.background = "white";
            break;
        case 6:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "وسایل خانه";
            furniture.style.background = "white";
            break;
        case 7:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "لوازم التحریر";
            stationery.style.background = "white";
            break;
        case 8:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "گل و گیاه";
            flowers.style.background = "white";
            break;
        case 9:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "وسایل آشپزخانه";
            kitchenware.style.background = "white";
            break;
        case 10:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "وسایل ورزشی";
            sport_equipments.style.background = "white";
            break;
        case 11:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "مواد دارویی";
            medicine.style.background = "white";
            break;
        case 12:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "وسایل بهداشتی";
            cosmetic.style.background = "white";
            break;
        case 13:
            for (const one of all){
                one.style.background = "#A6E1FA";
            }
            current_category = "هیچکدام";
            none.style.background = "white";
            break;
    }
    document.getElementById("fake-current-category").innerHTML = current_category;
    const p_tag_value = document.getElementById("fake-current-category").value
    console.log(p_tag_value);
}
