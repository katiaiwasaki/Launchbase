const studentsClassA = [
    {
        name: 'Mayk',
        score: 9.8,
    },
    {
        name: 'Diego',
        score: 10,
    },
    {
        name: 'Pedro',
        score: 2,
    },
]

const studentsClassB = [
    {
        name: 'Lucas',
        score: 2,
    },
    {
        name: 'Jorge',
        score: 6.3,
    },
    {
        name: 'Henrique',
        score: 4.6,
    },
    {
        name: 'Suarez',
        score: 8.6,
    },
    {
        name: 'Ricardo',
        score: 1,
    },
]

function calcAvg(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].score
    }

    const avg = sum / students.length

    return avg
}


function sendMessage(avg, classs) {
    
    if (avg > 5) {
        console.log(`${classs}'s average is ${avg}. Congratulations!`)
    } else {
        console.log(`${classs}'s average is less than 5.`)
    }
}

function markAsFailed(student) {
    student.failed = false
    
    if (student.score < 5) {
        student.failed = true
    }
}

markAsFailed(studentsClassA)

function sendMessagefailed(student) {

    if (student.failed) {
        console.log(`Student ${student.name} has failed.`)
    }
}

function studentsFailed(students) {

    for (let student of students) {
        markAsFailed(student)
        sendMessagefailed(student)
    }
}

const avg1 = calcAvg(studentsClassA)
const avg2 = calcAvg(studentsClassB)

sendMessage(avg1, 'Class A')
sendMessage(avg2, 'Class B')

studentsFailed(studentsClassA)
studentsFailed(studentsClassB)