let timer = 0;

const counter = () => {
    timer++;
    console.log(timer);
    setTimeout(counter, 1000);
};

counter();

