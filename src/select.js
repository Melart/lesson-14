export default function f() {
    const size = ["XS","S","M","L","XL" ];
    const option = document.querySelectorAll('option'); 

    for( let i = 0; i <= option.length; i++) {
        option[i].textContent = size[i];
    }
}