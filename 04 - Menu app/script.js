const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuBtn = document.querySelector('.menu-category-btn-container');
const menuDisplay = document.querySelector('.menu-container');

const menuCategory = ['all', ...new Set(menu.map((menuList) => menuList.category))];

//console.log(menuCategory);

window.addEventListener('DOMContentLoaded', () => {
  menuDomDisplay(menu);
})


function menuCategoryBtnDisplay() {
  let html = '';
  menuCategory.forEach((category) =>{
    html += `
    <button class="btn-category" data-id="${category}">${category}</button>
    `
  })
  
  menuBtn.innerHTML = html;
}

menuCategoryBtnDisplay()

let dataSend = '';

function displayData() {
 
  const allMenuBtn  = document.querySelectorAll('.btn-category');

  allMenuBtn.forEach((btn)=> {
   
    btn.addEventListener('click', (e)  => {
      const menuBtnDataSet = e.currentTarget.dataset.id;
      //console.log(typeof menuBtnDataSet);
      const sendMenData = menu.filter((data) => data.category === menuBtnDataSet);


     if (menuBtnDataSet === 'all') {
      menuDomDisplay(menu)
    } 
    else {
     
      menuDomDisplay(sendMenData)
    } 
      
    })
  
  })

}

displayData()

function menuDomDisplay(data) {
  let html = '';

  data.forEach( menuData => {
    const {id, title, category, price, img, desc} = menuData;
    html +=`

<article class="single-menu-container">

<img class="image" src="${img}" alt="${title}">
<div class="menu-item-des-container">

  <div class="name-price-container">
    <div class="name">${title}</div>
    <div class="price">$${price}</div>
  </div>

  <p class="desc">
    ${desc}
  </p>

</div>

</article>
`
  });

  menuDisplay.innerHTML = html;
 
}







