let timer = 0;

const counter = () => {
    timer++;
    console.log(timer);
};

setInterval(counter, 1000);