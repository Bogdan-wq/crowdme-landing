const tabs = document.getElementById('tabs-containerJS').getElementsByClassName('tabs__block');
const nums = document.getElementsByClassName('toggler-item__num');


function toggle(id,elmnt) {
    for(let i = 0 ; i < tabs.length; i++) {
        tabs[i].classList.remove('tabs__block_active');

    }

    for(let i = 0; i < nums.length; i++) {
        nums[i].style.backgroundColor = "#5f5f5f";
    }

    elmnt.getElementsByClassName('toggler-item__num')[0].style.backgroundColor = "#bcda5c";

    document.getElementById(id).classList.add('tabs__block_active');
}