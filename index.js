// Written by Vehmloewff (https://github.com/Vehmloewff) and TehShrike (https://github.com/TehShrike)
module.exports = (mils) => {
    const now = new Date().getTime()
    const thenMs = now - mils

    const seconds = thenMs / 1000;

    if (seconds < 3) {
        return 'Just now'
    } else if (seconds > 3 && seconds < 59 ) {
        return `${Math.ceil(seconds)} seconds ago`
    } else if (seconds > 59 && seconds < 120) {
        return `About a minute ago`
    }

    const minutes = thenMs / 60000;


    if (minutes >= 2 && minutes < 61 ) {
        return `About ${ Math.ceil(minutes) } minutes ago`
    }

    const hours = thenMs / (60000 * 60);


    if (hours >= 1 && hours < 2 ) {
        return `About an hour ago`
    } else if (hours >= 2 && hours < 24 ) {
        return `About ${ Math.ceil(hours) } hours ago`
    }

    const days = thenMs / ((60000 * 60 ) * 24);


    if (days >= 1 && days < 2 ) {
        return `About a day ago`
    } else if (days >= 2 && days < 7 ) {
        return `About ${ Math.ceil(days)} days ago`
    }

    const weeks = thenMs / ((60000 * 60 ) * 24 * 7);


    if (weeks >= 1 && weeks < 2 ) {
        return `About a week ago`
    } else if (weeks >= 2 && weeks < 4 ) {
        return `About ${ Math.ceil(weeks)} weeks ago`
    }

    const months = thenMs / ((60000 * 60 ) * 24 * 7 * 4);

    if (months >= 1 && months < 2 ) {
        return `About a month ago`
    } else if (months >= 1 && months < 12 ) {
        return `About ${ Math.ceil(months)} weeks ago`
    }

    const years = thenMs / ((60000 * 60 ) * 24 * 7 * 52);

    if (years >= 1 && years < 2 ) {
        return `About a year ago`
    } else {
        return `About ${ Math.ceil(years)} years ago`
    }
}