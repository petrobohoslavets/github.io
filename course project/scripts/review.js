
const requestURL = 'https://github.com/petrobohoslavets/git-gui/blob/6fa1c2f68a6ff47078c989c5a8cb26233c3f426e/rewiew-data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const reviews = request.response;
    setReview()

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
}

