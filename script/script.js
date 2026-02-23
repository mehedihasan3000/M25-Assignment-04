let interviewList = [];
let rejectedList = [];
let currentstatus = '';
console.log(interviewList.length)
const totalN = document.getElementById('totalN');
const interviewN = document.getElementById('interviewN');
const rejectedN = document.getElementById('rejectedN');

const all = document.getElementById('all');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

const status = document.getElementById('status');
// const interviewBtn = document.getElementById('interview-btn');
// const rejectedBtn = document.getElementById('rejected-btn');

const mainContainer = document.querySelector('main');
const allCard = document.getElementById('allCard');
const availableJob = document.getElementById('job');


mainContainer.addEventListener('click', function(event) {
    // console.log(event.target.classList.contains('interview-btn'));
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
    
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const statuS = parentNode.querySelector('.statuS').innerText;
        const desc = parentNode.querySelector('.desc').innerText;
        const interviewBtn = parentNode.querySelector('.interview-btn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText;
        
        parentNode.querySelector('.statuS').innerText = 'INTERVIEW';
        const cardInfo = {
            companyName,
            jobType,
            salary,
            statuS: 'INTERVIEW',
            desc,
            interviewBtn,
            rejectedBtn
        }
    
        const companyExist = interviewList.find(i => i.companyName == cardInfo.companyName);
        
        if (!companyExist) {
            interviewList.push(cardInfo);
        }

        rejectedList = rejectedList.filter(i => i.companyName != cardInfo.companyName);

        if (currentstatus == 'rejected') {
            renderRejected();
        }

        calculateCount();
    }

    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
    
        const companyName = parentNode.querySelector('.company-name').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const statuS = parentNode.querySelector('.statuS').innerText;
        const desc = parentNode.querySelector('.desc').innerText;
        const interviewBtn = parentNode.querySelector('.interview-btn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejected-btn').innerText;
        
        parentNode.querySelector('.statuS').innerText = 'REJECTED';
        const cardInfo = {
            companyName,
            jobType,
            salary,
            statuS: 'REJECTED',
            desc,
            interviewBtn,
            rejectedBtn
        }
    
        const companyExist = rejectedList.find(i => i.companyName == cardInfo.companyName);
        
        if (!companyExist) {
            rejectedList.push(cardInfo);
        }

        interviewList = interviewList.filter(i => i.companyName != cardInfo.companyName);

        if (currentstatus == 'interview') {
            renderInterview();
        }

        calculateCount();
    }
})