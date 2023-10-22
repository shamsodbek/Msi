const product = {
    pro16: {
        name: 'Pro16',
        price: 499,
        amount: 0,
        img: "img/card_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro17: {
        name: 'Pro17',
        price: 499,
        amount: 0,
        img: "img/image_1.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro18: {
        name: 'Pro18',
        price: 499,
        amount: 0,
        img: "img/card_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro19: {
        name: 'Pro19',
        price: 499,
        amount: 0,
        img: "img/card_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro20: {
        name: 'Pro20',
        price: 499,
        amount: 0,
        img: "img/card_3.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro21: {
        name: 'Pro21',
        price: 499,
        amount: 0,
        img: "img/card_4.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro22: {
        name: 'Pro22',
        price: 499,
        amount: 0,
        img: "img/card_5.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro23: {
        name: 'Pro23',
        price: 499,
        amount: 0,
        img: "img/card_6.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro24: {
        name: 'Pro24',
        price: 499,
        amount: 0,
        img: "iimg/card_6.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro25: {
        name: 'Pro25',
        price: 499,
        amount: 0,
        img: "img/card_6.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro26: {
        name: 'Pro26',
        price: 499,
        amount: 0,
        img: "img/card_8.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro27: {
        name: 'Pro27',
        price: 499,
        amount: 0,
        img: "img/card_7.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro28: {
        name: 'Pro28',
        price: 499,
        amount: 0,
        img: "img/card_8.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro29: {
        name: 'Pro29',
        price: 499,
        amount: 0,
        img: "img/card_9.png",
        get Summ() {
            return this.price * this.amount
        }
    },
    pro30: {
        name: 'Pro30',
        price: 499,
        amount: 0,
        img: "img/card_7.png",
        get Summ() {
            return this.price * this.amount
            
        }
        
    }
}


const btns = document.querySelectorAll('.card_shop'),
    itemShop = document.querySelector('.shop__item'),
    basketBox = document.querySelector('.basket__box'),
    basketTotal = document.querySelector('.basket__total'),
    shop = document.querySelector('.shop'),
    basket = document.querySelector('.basket'),
    basketClose = document.querySelector('.basket__close');
    
 

    


btns.forEach(btn =>{
    btn.addEventListener('click',function ()  {
      
        addCard(this)
    })
})
function addCard(btn) {
   const parent = btn.closest(".card"),
       cardId = parent.getAttribute("id")
       product[cardId].amount++
    bascet()

}

function bascet() {
    const productArr =[]
    for (const key in product) {
      const kp = product[key]
      const productCard = document.querySelector(`#${key}`),
    
          span = productCard.querySelector('.card_item');
    
    if(kp.amount){
        span.classList.add('active')
        span.innerHTML=kp.amount
        productArr.push(kp)
    }else{
        span.classList.remove('active')
    }
    }
    const allAmount = totalAmount()
    basketBox.innerHTML = ""
    for (let i = 0; i < productArr.length; i++) {
        itemShop.innerHTML = productArr.length
        basketBox.innerHTML += bascetCard(productArr[i])

        
    }
    if (allAmount) {
        itemShop.classList.add("active")
    } else {
        itemShop.classList.remove("active")
    }
    basketTotal.innerHTML = totalSumm()
}
function totalAmount() {
    let amount = 0
    for (const key in product) {
        amount += product[key].amount
    }
    return amount
}
function totalSumm() {
    let total = 0
    for (const key in product) {
        total += product[key].Summ
    }
    return total
}
shop.addEventListener("click", () => {
    basket.classList.add("active")
})
basketClose.addEventListener("click", () => {
    basket.classList.remove("active")
})
function bascetCard(card) {
    const { name, price, amount, Summ, img } = card
    return `<div class="basket__card">
                <img src="${img}" alt=""
                    class="basket__img">
                <div class="basket__info">
                    <h2 class="basket__title">${name}</h2>
                    <p class="basket__price">${Summ.toLocaleString()}$ </p>
                </div>
                <div class="basket__btns" id="${name.toLowerCase()}_card">
                    <button class="basket__sym">-</button>
                    <p class="basket__amount">${amount}</p>
                    <button class="basket__sym">+</button>
                </div>
            </div>`
}
window.addEventListener('click', (e) => {
    const btn = e.target
  

  
    if (btn.classList.contains("basket__sym")) {
        const parent = btn.closest(".basket__btns"),
            parentId = parent.getAttribute("id").split('_')[0]
        if (btn.innerHTML == '+') product[parentId].amount++
        else if (btn.innerHTML == '-') product[parentId].amount--
        bascet()

        }
})



const basketBtn = document.querySelector('.basket__bottom'),
    printMain = document.querySelector('.print__main'),
    printTotal = document.querySelector('.print__total');

basketBtn.onclick = () => {
    for (const key in product) {
        const { name, Summ, amount } = product[key]
        if (amount) {
            printMain.innerHTML += `
            <div class="print__main-item">
                <p class="print__main-name">
                    <span>${name}</span>
                    <span>${amount}</span>
                </p>
                <div class="print__main-summ">
                    ${Summ} $
                </div>
            </div>`
        }

    }
    printTotal.innerHTML = `Jami: ${totalSumm()}$`
    window.print()
}