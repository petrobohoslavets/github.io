// review

let reviews = [
    {
        text: "Підтримка була чудовою, і Finsweet завжди допомагав нам, коли ми цього потребували.",
        avatar: "https://assets-global.website-files.com/61819aaca0e7ac73f85a2d54/62c830a2b330462df1d79100_1537542960155.jpeg",
        name: "Гідеон Фаррелл",
        des: "Технічний директор"
    }, 
    {
        text: "Ми постійно викидаємо ідеї, і Finsweet втілює ці бачення в життя за кілька днів.",
        avatar: "https://assets-global.website-files.com/61819aaca0e7ac73f85a2d54/6294f61718c2388e30aa3113_Nash-p-500.jpg",
        name: "Нашілу Моуен-Макуа",
        des: "Начальник росту"
    }, 
    {
        text: "Партнерство з Finsweet дозволило Клею творчо розвивати та запускати так багато творчих проектів.",
        avatar: "https://assets-global.website-files.com/61819aaca0e7ac73f85a2d54/635578546e708adbf966af98_Matt%20Maiale.jpeg",
        name: "Метт Майале",
        des: "Маркетинг"
    }
]

var currReviewIndex = 1;

function setReview() {
    if(currReviewIndex > reviews.length - 1) currReviewIndex = 0
    else if(currReviewIndex < 0) currReviewIndex = reviews.length - 1 
    let obj = reviews[currReviewIndex];

    document.getElementById('reviewText').innerHTML = '"' + obj.text + '"';
    document.getElementById('reviewName').innerHTML = obj.name;
    document.getElementById('reviewDes').innerHTML = obj.des;
    document.getElementById('reviewAvatar').setAttribute('src', obj.avatar)
}

document.querySelector('.review-arrow-left').addEventListener('click', () => {
    currReviewIndex--;
    setReview()
})

document.querySelector('.review-arrow-right').addEventListener('click', () => {
    currReviewIndex++;
    setReview()
})

setReview()