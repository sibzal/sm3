let price = prompt('Введите стоимость товара')
let count_money = prompt('Введите количество денег')

if(price == count_money){
    alert("Покупка совершена")
}else {
    if (price < count_money){
        let cdacha = count_money - price;
        alert("Покупка совершена. Сдача " + cdacha)
    }else if(price > count_money){
        let a = price - count_money;
        alert ("Покупка не совершена. Не хватает " + a + " рублей")
    }
}
