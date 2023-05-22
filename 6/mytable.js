
let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let input1 = document.getElementById("input1").value
    let input2 = document.getElementById("input2").value
    console.log(input1)
    console.log(input2)

    let result = document.getElementById("res")

    //Table 1
    let x = input1.split("#").map(Number)
    let row1 = x[0]
    let col1 = x[1]
    let num1 = x[2]
    let table1 = document.getElementById("table1")
    let mat1 = []
    r1 = ""
    z1 = ""

    //table 2
    y = input2.split("#").map(Number)
    let row2 = y[0]
    let col2 = y[1]
    let num2 = y[2]
    let table2 = document.getElementById("table2")
    let mat2 = []
    r2 = ""
    z2 = ""


    for (var i = 0; i < row1; i++) {
        let temp = []
        num = num1 * (i + 1)
        r1 = "<tr>"
        for (var j = 0; j < col1; j++) {
            r1 += `<td> ${num} </td>`
            temp.push(num)
            num += (i + 1);
        }
        mat1.push(temp)
        r1 += "</tr>"
        z1 += r1
    }
    table1.innerHTML = z1;


    for (var i = 0; i < row2; i++) {
        num = num2 * (i + 1);
        r2 = "<tr>";
        let lst = [];
        for (var j = 0; j < col2; j++) {
            r2 += `<td>${num}</td>`;
            lst.push(num);
            num = num + i + 1;
        }
        mat2.push(lst);
        r2 += "</tr>"
        z2 += r2;
    }
    table2.innerHTML = z2;

    let mat3 = []
    mat3 = mat1

    r1 = ""
    z1 = ""
    if (num1 == num2) {
        for (var i = 0; i < row1; i++) {
            let temp = []
            num = num1 * (i + 1)
            r1 = "<tr>"
            for (var j = 0; j < col1; j++) {
                r1 += `<td> ${num} </td>`
                temp.push(num)
                num += (i + 1);
            }
            mat1.push(temp)
            r1 += "</tr>"
            z1 += r1
        }
        result.innerHTML = z1;

    }
    else {
        for (var i = 0; i < row1; i++) {
            let temp = []
            num = num1 * (i + 1)
            r1 = "<tr>"
            for (var j = 0; j < col1; j++) {
                r1 += `<td> ${mat1[i][j] * mat2[i][j]} </td>`
                temp.push(num)
                num += (i + 1);
            }
            mat1.push(temp)
            r1 += "</tr>"
            z1 += r1
        }
        result.innerHTML = z1;

    }
})