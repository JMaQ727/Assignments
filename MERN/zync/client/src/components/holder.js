{hide === false ? 
    obj.grades.map((gradeObj, idx) => {
        <p>Test {idx + 1}: {gradeObj}</p>
    }) : null
}