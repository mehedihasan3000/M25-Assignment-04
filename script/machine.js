function btnBgChange(id) {
    const onclickBtn = document.getElementById(id);
    all.classList.remove('btn-primary');
    interview.classList.remove('btn-primary');
    rejected.classList.remove('btn-primary');

    onclickBtn.classList.add('btn-primary');
}