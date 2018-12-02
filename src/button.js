import _ from "./button.css";

export  let btnClick = document.querySelector(".button").addEventListener('click', () => {
            let money = document.querySelector(".manyNumber");
            let many = Number(money.textContent);
            let price = Number(document.querySelector(".price").textContent);   
            let quant = document.querySelector(".countNumber");
            let count = Number(quant.textContent);

            let m = String( many + price);
            let c = count + 1;
            money.textContent = m;
            quant.textContent = c;
        });


export  let btnClick2 = document.querySelector(".button2").addEventListener('click', () => {
            let money = document.querySelector(".manyNumber");
            let many = Number(money.textContent);
            let price2 = Number(document.querySelector(".price2").textContent);   
            let quant = document.querySelector(".countNumber");
            let count = Number(quant.textContent);

            let s = String( many + price2);

            let c = count + 1;
            money.textContent = s;
            quant.textContent = c;
        });