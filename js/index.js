// 关键词轮换
{
    let input = document.querySelector('.search input');
    const keyWords = ['Vue3.0', 'React', '爬虫技术', 'Java', '多线程'];
    let i = 0;
    input.placeholder = 'Vue3.0';
    setInterval(() => {
        i++;
        if (i == 5) {
            i = 0;
        }
        input.placeholder = keyWords[i];
    }, 2000)
}

// 轮播图
{
    const swiperImgList = [
        {
            path: './images/swiper/swiper-1.jpg',
            bg: './images/swiper/bj-0.jpg'
        },
        {
            path: './images/swiper/swiper-2.jpg',
            bg: './images/swiper/bj-1.jpg'
        },
        {
            path: './images/swiper/swiper-3.jpg',
            bg: './images/swiper/bj-2.jpg'
        },
        {
            path: './images/swiper/swiper-4.jpg',
            bg: './images/swiper/bj-3.jpg'
        }
    ];

    const rightArrow = document.querySelector('.arrow-r');
    const leftArrow = document.querySelector('.arrow-l');
    const swiperA = document.querySelector('.swiper a');
    const banner = document.querySelector('#banner');
    const lis = document.querySelectorAll('.circle-list li');
    const ul = document.querySelector('.circle-list');
    let timer = null;

    let i = 0;

    function changeImg(index) {
        swiperA.style.backgroundImage = `url(${swiperImgList[index].path})`;
        banner.style.backgroundImage = `url(${swiperImgList[index].bg})`;
        currentCircle(index);
    }

    changeImg(i);

    let flag = true;
    rightArrow.onclick = function () {
        if (flag == false) {
            return;
        }
        flag = false;
        i++;
        if (i == 4) {
            i = 0;
        }
        changeImg(i);
        setTimeout(() => {
            flag = true;
        }, 1000)
    }

    leftArrow.onclick = function () {
        if (flag == false) {
            return;
        }
        flag = false;
        i--;
        if (i == -1) {
            i = 3;
        }
        changeImg(i);
        setTimeout(() => {
            flag = true;
        }, 1000)
    }

    function currentCircle(index) {
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
            lis[index].className = 'current';
        }
    }

    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            if (flag == false) {
                return;
            }
            flag = false;
            changeImg(i);
            setTimeout(() => {
                flag = true;
            }, 1000)
        }
    }

    timer = setInterval(() => {
        i++;
        if (i == 4) {
            i = 0;
        }
        changeImg(i);
    }, 3000)

    swiperA.onmouseenter = function () {
        clearInterval(timer);
    }
    swiperA.onmouseleave = function () {
        timer = setInterval(() => {
            i++;
            if (i == 4) {
                i = 0;
            }
            changeImg(i);
        }, 3000)
    }

    rightArrow.onmouseenter = function () {
        clearInterval(timer);
    }
    leftArrow.onmouseenter = function () {
        clearInterval(timer);
    }

    ul.onmouseenter = function () {
        clearInterval(timer);
    }
}