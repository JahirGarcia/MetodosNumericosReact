import AnswerTypeSwitcher from 'components/AnswerTypeSwitcher';
import { ButtonGroup, Card, PrimaryButton, SecondaryButton } from 'components/common';
import DigitsSwitcher from 'components/DigitsSwitcher';
import DynamicTable from 'components/DynamicTable';
import ExpressionEditor from 'components/ExpressionEditor';
import FunctionTable from 'components/FunctionTable';
import MethodSwitcher from 'components/MethodSwitcher';
import ModeSwitcher from 'components/ModeSwitcher';
import React, { useRef, useState } from 'react';
import { biseccion } from 'utils/calc/raices';
import './styles.scss';

function Raices() {
  const expressionEditorRef = useRef();
  const [expression, setExpression] = useState('');

  const handleFunctionButtonClick = (func) => {
    setExpression(expression + func.func);
    expressionEditorRef.current.focus();
  }

  const handleChangeExpressionEditor = (e) => {
    setExpression(e.target.value);
  }

  const handleClickCleanButton = () => {
    setExpression('');
    expressionEditorRef.current.focus();
  }

  const handleClickExecuteButton = () => {
    const rest = biseccion(expression, -0.5, 1, 0.00000001);
    console.log(rest.toString());
  }

  return (
    <div className="Raices" >
      <div className="Raices__container" >
        <main className="Raices__main" >
          <Card>
            <h3>Expresi&oacute;n</h3>

            <DynamicTable 
              data={[
                { mode: 'modo', answer: 'respuesta', digit: 'dígitos', method: 'método' }
              ]} 
              columns={[
                { 
                  key: 'mode', 
                  text: 'Modo', 
                  formatter: () => <ModeSwitcher /> 
                }, 
                { 
                  key: 'digit', 
                  text: 'Dígitos' , 
                  formatter: () => <DigitsSwitcher />  
                }, 
                { 
                  key: 'answer', 
                  text: 'Respuesta', 
                  formatter: () => <AnswerTypeSwitcher />
                }, 
                { 
                  key: 'method', 
                  text: 'Método', 
                  formatter: () => <MethodSwitcher /> 
                } 
              ]} />

            <ExpressionEditor ref={ expressionEditorRef } value={ expression } onChange={ handleChangeExpressionEditor } />
            
            <ButtonGroup>
              <PrimaryButton onClick={ handleClickExecuteButton } >Ejecutar</PrimaryButton>
              <SecondaryButton onClick={ handleClickCleanButton } >Limpiar</SecondaryButton>
            </ButtonGroup>
          </Card>
          <Card>
            <h3>Resultado</h3>
          </Card>
        </main>
        <aside className="Raices__aside" >
          <Card>
            <h3>Lista de Funciones</h3>
            <FunctionTable onFunctionButtonClick={ handleFunctionButtonClick } />
          </Card>
        </aside>
      </div>
    </div>
  );
}

Raices.displayName = 'Raices';

export default Raices;
