const img = document.querySelector('.sun-icon');
const bell = document.querySelector('.bell-icon');
const search = document.querySelector('.search-icon');
const chart = document.querySelector('.ETHchart-img');
const circular_chart = document.querySelector('.circular-chart-id');
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        img.setAttribute('src','./assets/moon dark.png');
        bell.setAttribute('src','./assets/bell2.png');
        search.setAttribute('src','./assets/serch-black.png');
        if(chart)chart.setAttribute('src','./assets/chart-white.png');
        if(circular_chart)circular_chart.setAttribute('src','./assets/circularchart-white.png');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        img.setAttribute('src','./assets/mode.png');
        bell.setAttribute('src','./assets/bell.png');
        if(chart)chart.setAttribute('src','./assets/chart (1).png');
        search.setAttribute('src','./assets/search_png.png');
        if(circular_chart)circular_chart.setAttribute('src','./assets/Chart.png');
        body.classList.add('dark-theme');
    }
});

