let interviewList = [];
let rejectedList = [];

const totalN = document.getElementById('totalN');
const interviewN = document.getElementById('interviewN');
const rejectedN = document.getElementById('rejectedN');

const all = document.getElementById('all');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

const status = document.getElementById('status');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');

const mainContainer = document.querySelector('main');


mainContainer.addEventListener('click', function(event) {
    // console.log(event.target.parentNode.parentNode);
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector('.company-name').innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const statuS = parentNode.querySelector('.statuS').innerText;
    const desc = parentNode.querySelector('.desc').innerText;
    const interviewBtn = parentNode.querySelector('.interview-btn').innerText;
    const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText;

    const cardInfo = {
        companyName,
        jobType,
        salary,
        statuS,
        desc,
        interviewBtn,
        rejectedBtn
    }

    const companyExist = interviewList.find(i => i.companyName == cardInfo.companyName);
    if (!companyExist) {
        interviewList.push(cardInfo);
    }
    console.log(interviewList)
})