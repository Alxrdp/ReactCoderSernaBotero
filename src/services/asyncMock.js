function getData() {    
    return new Promise((resolve, reject) => {
      const productos = [
        {
          title: "Anaray",
          litledescription: "Fruit Beer",
          id: 1,
          stock: 60,
          description: "Cerveza de trigo con una adición de duraznos naturales de Boyacá con un aroma característico a durazno y sutil sabor a frutas cítricas",
          img: "3.jpg",
          price: 10000,
        },
        {
          title: "Benkos",
          litledescription: "Stout",
          id: 2,
          stock: 45,
          description: "Cerveza negra con adiciones de malta de cebada tostada, trigo y avena con aromas a café y chocolate y un delicioso sabor a capuchino suave",
          img: "./assets/5.png",
          price: 9000,
        },
        {
          title: "Rooke",
          litledescription: "Scottish Export",
          id: 3,
          stock: 70,
          description: "Cerveza roja con sabor y aroma característicos a malta, con ligeros toques acaramelados y de frutos rojos, que proporcionan un final seco",
          img: "./assets/6.png",
          price: 10000,
        },
        {
          title: "Valerosa",
          litledescription: "Blonde Ale",
          id: 10,
          stock: 100,
          description: "Ganadora de 5 medallas de oro a nivel nacional y 2 reconocimientos intl. Cerveza rubia con aromas frutales a manzanas verdes y cascara de naranja",
          img: "./assets/7.png",
          price: 12000,
        },
      ];
      
  console.log(productos);
   
      setTimeout(() => {
        const date = new Date().toLocaleDateString;
        resolve(productos, date);
      }, 500);
    });
  }
  
  export default getData;