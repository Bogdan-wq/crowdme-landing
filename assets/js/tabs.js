const tabs = document.getElementById('tabs-containerJS').getElementsByClassName('tabs__block');


function toggle(id) {
    for(let i = 0 ; i < tabs.length; i++) {
        tabs[i].classList.remove('tabs__block_active');
    }
    document.getElementById(id).classList.add('tabs__block_active');
}