const tarefaInput = document.querySelector("#todo-input-tarefa");
const dataInicioInput = document.querySelector("#todo-input-data-inicio");
const horaInicioInput = document.querySelector("#todo-input-hora-inicio");
const dataFimInput = document.querySelector("#todo-input-data-fim");
const horaFimInput = document.querySelector("#todo-input-hora-fim");
const descricaoInput = document.querySelector("#todo-input-descricao");
const addTarefaBtn = document.querySelector(".form-todo-btn");

const validaTarefa = () => tarefaInput.value.trim().length > 0;
const validaDataInicio = () => dataInicioInput.value.trim().length > 0;
const validaHoraInicio = () => horaInicioInput.value.trim().length > 0;
const validaDataFim = () => dataFimInput.value.trim().length > 0;
const validaHoraFim = () => horaFimInput.value.trim().length > 0;
const validaDescricao = () => descricaoInput.value.trim().length > 0

const verificaTarefa = () => {
    const tarefaValida = validaTarefa();

    console.log(tarefaValida);

    if(!tarefaValida) {
        return validaTarefa.classList.add("error-input");
    }
}

const alteraStatus = () => {
    const tarefaValida = validaTarefa();

    if(tarefaValida) {
        return tarefaValida.classList.remove("error-input");
    }
}

addTarefaBtn.addEventListener("click", () => verificaTarefa());

validaTarefa.addEventListener("change", () => alteraStatus)

// validaTarefa.addEventListener("change", () => {
//     if(!tarefaInput) {return tarefaInput.classList.add('error-input')}
// })

// validaDataInicio;
//     if(!dataInicioInput) {dataInicioInput.classList.add('error-input')}

// const horaInicioValida = validaHoraInicio();
// if(!horaInicioInput) {horaInicioInput.classList.add('error-input')}

// if(!dataFimInput) {dataFimInput.classList.add('error-input')}

// if(!horaFimInput) {horaFimInput.classList.add('error-input')}

// if(!descricaoInput) {descricaoInput.classList.add('error-input')}

// addTarefaBtn.addEventListener("click", () => {
//     validaCampos
// })