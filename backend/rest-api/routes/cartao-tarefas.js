const express = require('express');
const router = express.Router();
const mysql = require("../mysql").pool;

// RETORNA TODOS OS DADOS DOS CARTÕES DO BANCO DE DADOS
// FUNCIONANDO
router.get('/andamento', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM tarefas_aluno WHERE status_tarefa="andamento" ',
            (error, resultado, fields) => {
                conn.release();
                if (error) {return res.status(500).send({error: error})}
                
                res.status(201).send(resultado);
            }
        )
    })
});

router.get('/atrasado', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM tarefas_aluno WHERE status_tarefa="atrasado" ',
            (error, resultado, fields) => {
                conn.release();
                if (error) {return res.status(500).send({error: error})}
                
                res.status(201).send(resultado);
            }
        )
    })
});

router.get('/concluido', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM tarefas_aluno WHERE status_tarefa="concluido" ',
            (error, resultado, fields) => {
                conn.release();
                if (error) {return res.status(500).send({error: error})}
                
                res.status(201).send(resultado);
            }
        )
    })
});

// INSERE DADOS DE UM CARTÃO NO BANCO DE DADOS
// FUNCIONANDO
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO tarefas_aluno (disciplina,professor,dataFinalizacao,tarefa,status_tarefa) VALUES (?,?,?,?,"andamento")',
            [req.body.disciplina, req.body.professor, req.body.dataFinalizacao, req.body.tarefa],
            (error, resultado, fields) => {
                conn.release();
                if (error) {return res.status(500).send({error: error})}

                res.status(201).send({
                    mensagem: 'Tarefa inserida com sucesso!',
                    produtoCriado: resultado
                });
            }
        )
    })
});









// RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM tarefas_aluno WHERE id_tarefa',
            [req.body.disciplina, req.body.professor, req.body.dataFinalizacao, req.body.tarefa, req.body.status_tarefa],
            (error, resultado, fields) => {
                conn.release();
                if (error) {return res.status(500).send({error: error})}
                
                res.status(201).send({
                    response: resultado
                });
            }
        )
    })
});

// ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    });
});

// DELETA UM PRODUTO
router.delete('/:id_tarefa', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {return res.status(500).send({error: error})}
        conn.query(
            'DELETE FROM tarefas_aluno WHERE id_tarefa=?',
            [req.params.id_tarefa],
            (error, resultado, fields) => {
                conn.release();
                if (error) {return res.status(500).send({error: error})}
            }
        )
    })
});

module.exports = router;