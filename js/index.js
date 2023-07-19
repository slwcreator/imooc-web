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

    let i = 0;

    function changeImg(index) {
        swiperA.style.backgroundImage = `url(${swiperImgList[index].path})`;
        banner.style.backgroundImage = `url(${swiperImgList[index].bg})`;
    }

    changeImg(i);
    rightArrow.onclick = function () {
        i++;
        if (i == 4) {
            i = 0;
        }
        changeImg(i);
    }

    leftArrow.onclick = function () {
        i--;
        if (i == -1) {
            i = 3;
        }
        changeImg(i);
    }
}