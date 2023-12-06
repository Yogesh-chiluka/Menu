const menu=[
  {
    id:1,
    title:"Burger",
    category:"lunch",
    price:15.99,
    img:"./Menu-items/menu-item.jpg",
    desc:"A burger is a patty of ground beef grilled and placed between two halves of a bun.",
  },
  {
    id:2,
    title:"Puri",
    category:"breakfast",
    price:13.99,
    img:"./Menu-items/Puri.jpg",
    desc:"It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes. Puris are most commonly served as breakfast and snacks.",
  },
  {
    id:3,
    title:"Paratha",
    category:"breakfast",
    price:16.99,
    img:"./Menu-items/Paratha.jpg",
    desc:"Paratha are unleavened layered flatbreads made with whole wheat flour (atta), salt, water & ghee or oil. These traditional flatbreads are a staple in Indian subcontinent and are served for a breakfast with a side of curd, chutney, pickle, curries, eggs and meat dishes.",
  },
  {
    id:4,
    title:"Salted Caramel",
    category:"shakes",
    price:16.99,
    img:"./Menu-items/Salted-Caramel-Milkshake.jpeg",
    desc:"Nutritionist Joy Bauer’s genius formula combines a bunch of superfoods to come up with this thick and dessert-y smoothie that tastes as indulgent as any ice cream-based shake.",
  },
  {
    id:5,
    title:"Strawberry-Cheesecake",
    category:"shakes",
    price:16.99,
    img:"./Menu-items/Strawberry-Cheesecake.jpeg",
    desc:"These layered shakes from Tia Mowry have all the flavors and qualities of a fruit-topped slice of cheesecake, but in drinkable form. It’s particularly fun when you think of the hours of baking and chill time of an actual cheesecake, and how you can be drinking these in about 15 minutes.",
  }, 
  {
    id:6,
    title:"Hyderabadi Chicken Biryani ",
    category:"lunch",
    price:16.99,
    img:"./Menu-items/Hyderabadi-Chicken-Biryani.jpg",
    desc:"Biryani is a mixed rice dish that was thought to have originated from ancient Iran before settling in modern India. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables for the meat. Sometimes eggs and/or potatoes are added.",
  },
];

const sectionCentre = document.querySelector(".section-centre");
const filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener('DOMContentLoaded',function(){

  displayMenuItems(menu);

});

//filter items
filterBtns.forEach(function(btns){
  btns.addEventListener("click",function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function(menuItem){
      //console.log(menuItem.category);
      if(menuItem.category === category){
        return menuItem;
      }
    });
      //consolelog(menuCategory);
      if(category ==='all'){
        displayMenuItems(menu);
      }
      else{
        displayMenuItems(menuCategory);
      }
  });
});

function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    //console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo"/>
    <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
        </header>
        <p class="item-text">${item.desc}</p>
    </div>
</article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCentre.innerHTML = displayMenu;
}