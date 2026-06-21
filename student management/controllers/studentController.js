const db = require('../db');

// GET ALL STUDENTS
exports.getStudents = (req, res) => {
    db.query('SELECT * FROM students', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// CREATE STUDENT
exports.createStudent = (req, res) => {
    const { name, email, course } = req.body;

    db.query(
        'INSERT INTO students(name,email,course) VALUES(?,?,?)',
        [name, email, course],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: 'Student Added Successfully'
            });
        }
    );
};

// UPDATE STUDENT
exports.updateStudent = (req, res) => {
    const { name, email, course } = req.body;
    const id = req.params.id;

    db.query(
        'UPDATE students SET name=?, email=?, course=? WHERE id=?',
        [name, email, course, id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: 'Student Updated Successfully'
            });
        }
    );
};

// DELETE STUDENT
exports.deleteStudent = (req, res) => {
    const id = req.params.id;

    db.query(
        'DELETE FROM students WHERE id=?',
        [id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            res.json({
                message: 'Student Deleted Successfully'
            });
        }
    );
};