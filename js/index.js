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

// 秒杀倒计时
{
    let endDate = new Date('2023-08-01 10:25:00');
    endDate = parseInt(endDate.getTime() / 1000);

    const hourDom = document.getElementById('hour');
    const minDom = document.getElementById('min');
    const secDom = document.getElementById('sec');

    let timer = null;

    function countdown() {
        let nowDate = new Date();
        nowDate = parseInt(nowDate.getTime() / 1000);

        let seconds = endDate - nowDate;

        if (seconds >= 0) {
            let hours = parseInt(seconds / 3600);
            hours = hours > 9 ? hours : '0' + hours;
            let mins = parseInt(seconds % 3600 / 60);
            mins = mins > 9 ? mins : '0' + mins;
            let secs = parseInt(seconds % 3600 % 60);
            secs = secs > 9 ? secs : '0' + secs;

            hourDom.innerText = hours;
            minDom.innerText = mins;
            secDom.innerText = secs;
        } else {
            clearInterval(timer);
            document.querySelector('.countdown p').innerText = '拼团已结束';
        }
    }

    countdown();

    timer = setInterval(() => {
        countdown();
    }, 1000)
}

// 滚动课程
{
    const ul = document.querySelector('.ms-list ul');
    let timer = null;
    let leftPX = 0;
    timer = setInterval(() => {
        leftPX = --leftPX == -1920 ? 0 : leftPX;
        ul.style.left = leftPX + 'px';
    }, 10)

    ul.onmouseenter = function () {
        clearInterval(timer);
    }

    ul.onmouseleave = function () {
        timer = setInterval(() => {
            leftPX = --leftPX == -1920 ? 0 : leftPX;
            ul.style.left = leftPX + 'px';
        }, 10)
    }
}

// 课程切换
{
    const tabs = document.querySelectorAll('.title-pic a');
    const uls = document.querySelectorAll('.course ul');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function () {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].className = '';
                uls[j].className = '';
            }
            tabs[i].className = 'active';
            uls[i].className = 'current';
        }
    }
}