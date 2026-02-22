function btnBgChange(id) {
    const onclickBtn = document.getElementById(id);
    all.classList.remove('btn-primary');
    interview.classList.remove('btn-primary');
    rejected.classList.remove('btn-primary');

    onclickBtn.classList.add('btn-primary');
    currentstatus = id;

    if (id == 'interview') {
        allCard.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all') {
        allCard.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id == 'rejected') {
        allCard.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
}



const filterSection = document.getElementById('filtered-section');

function renderInterview() {
    filterSection.innerHTML = '';

    for (let i of interviewList) {
        let div = document.createElement('div');
        div.className = 'flex justify-between';
        div.innerHTML = `
        <div class="space-y-5 p-6">
                    <div>
                        <h3 id="" class="company-name text-lg font-semibold text-[#002C5C]">${i.companyName}</h3>
                        <p class="job-type">React Native Developer</p>
                    </div>
                    <p class="salary">Remote • Full-time • $130,000 - $175,000</p>
                    <div>
                        <p id="status" class="statuS w-[113px] px-3 py-2 text-[#002C5C] bg-[#002C5C]/10 font-medium rounded-sm">${i.statuS}</p>
                        <p class="desc">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="space-x-2">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button id="rejected-btn" class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>
                <div>
                    <img id="delete-btn" class="image cursor-pointer" src="assets/delete.png" alt="">
                </div>
        `
    filterSection.appendChild(div);
}
document.getElementById('status').innerText = 'INTERVIEW';
}

function renderRejected() {
    filterSection.innerHTML = '';

    for (let i of rejectedList) {
        let div = document.createElement('div');
        div.className = 'flex justify-between';
        div.innerHTML = `
        <div class="space-y-5 p-6">
                    <div>
                        <h3 id="" class="company-name text-lg font-semibold text-[#002C5C]">${i.companyName}</h3>
                        <p class="job-type">React Native Developer</p>
                    </div>
                    <p class="salary">Remote • Full-time • $130,000 - $175,000</p>
                    <div>
                        <p id="status" class="statuS w-[113px] px-3 py-2 text-[#002C5C] bg-[#002C5C]/10 font-medium rounded-sm">${i.statuS}</p>
                        <p class="desc">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    </div>
                    <div class="space-x-2">
                        <button class="interview-btn btn btn-outline btn-success">INTERVIEW</button>
                        <button id="rejected-btn" class="rejected-btn btn btn-outline btn-error">REJECTED</button>
                    </div>
                </div>
                <div>
                    <img id="delete-btn" class="image cursor-pointer" src="assets/delete.png" alt="">
                </div>
        `
    filterSection.appendChild(div);
}
document.getElementById('status').innerText = 'REJECTED';
}


function calculateCount() {
    totalN.innerText = allCard.childElementCount;
    interviewN.innerText = interviewList.length;
    rejectedN.innerText = rejectedList.length;
}
calculateCount();



function itemRemove(id) {
    document.getElementById(id).classList.add = 'hidden';
}