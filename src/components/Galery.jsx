import React from 'react';

export default function Galery(){
    return(
        
    <section>
<div className='cabeca'>
        <div  className='bannerfoto2'>
        <img src="../img/carros.jpg" className='bannerfoto' />
        </div>
        <div>
            <h1 className='treino'>Evento de carros</h1>
            <p className='paragrafo'>Sessão de fotos com os 100 carros mais carros do mundo!</p>
        </div>
</div>
        <div className='form'>

        <form>
        <label for="opções">Qual data e hora que você gostaria de assistir?</label>
            <p className='palagrafo'>Horarios disponiveis:</p>
            <option value="opcao1">12:30</option>
            <option value="opcao2">14:30</option>
            <option value="opcao3">16:30</option>
            <option value="opcao4">18:30</option>

            
            <button type="button"></button>
            </form>

        
        </div>
        <input className='inpute' type="datetime-local" />
<div className='grade'>
        <div className='inner-container'>
            <img className='img' src="../img/azul.jpg"/>
            <img className='img' src="../img/bandido.jpg"/>
            <img className='img' src="../img/caminhoneta.jpg"/>
            
        </div>
        <div className='inner-container'>
            <img className='img' src="../img/futuro.jpg"/>
            <img className='img' src="../img/preto.jpg"/>
            <img className='img' src="../img/preto2.jpg"/>
            
            
        </div>
        <div className='inner-container'>
        <img className='img' src="../img/vermelho.jpg"/>
        <img className='img' src="../img/b.jpg"/>
        <img className='img' src="../img/carros.jpg"/>
        
        </div>
</div>
    </section>)
}