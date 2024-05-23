const paragraph = "This is a test. This test is only a test.";

const newString = paragraph.replace(/[.,]/g, "").split(" ");

const map = new Map();

newString.forEach((word)=>{
    if (map.has(word)) {
        map.set(word, map.get(word)+1);
    }
    else {
        map.set(word, 1);
    }
})

console.log(map)