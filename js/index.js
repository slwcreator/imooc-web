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