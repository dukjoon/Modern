// // constructor function
// function Song(title, singer, year) {
//     this.title = title;
//     this.singer = singer;
//     this.year = new Date(year);
// };

// Song.prototype.getYear = function() {
//     return this.year.getFullYear();
// }

// Song.prototype.getInfo = function() {
//     return `이 곡의 제목은 ${this.title}이고 가수는 ${this.singer} 입니다.`
// }

// const song1 = new Song("Stay", "Justin BieBer", "2021-07-09");
// const song2 = new Song("Where We Started", "Lost Sky", "2019-11-08");

// console.log(song1);
// console.log(song2);

class Song {
    constructor(title, singer, year) {
        this.title = title;
        this.singer = singer;
        this.year = year;
    }
    getInfo() {
        return `${this.title}의 가수는 ${this.singer} 이고 ${this.year}에 발매되었습니다.`
    }
}

const song1 = new Song("Stay", "Justin Bieber", "2021-07-09");
console.log(song1.getInfo());