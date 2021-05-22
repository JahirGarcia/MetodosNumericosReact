import React from 'react';
import { Table, Td } from 'components/common';
import FunctionButton from 'components/FunctionButton';
import './styles.scss';
import { constants, functions } from 'const/math';

function FunctionTable({ onFunctionButtonClick }) {

  const handleFunctionButtonClick = (func, e) => {
    if(onFunctionButtonClick) onFunctionButtonClick(func, e);
  }

  return (
    <Table className="FunctionTable" >
      <tbody>
        {/* CONSTANTES */}
        <tr className="FunctionTable__row" >
          <Td rowSpan="2" className="FunctionTable__vertical-header" >Constantes</Td>
        </tr>
        <tr className="FunctionTable__row" >
          {
            constants.map((constant, constIndex) => {
              return (
                <Td key={ constIndex }  className="FunctionTable__cell" >
                  <FunctionButton func={ { label: constant.label, func: constant.func } } onClick={ handleFunctionButtonClick } />
                </Td>
              );
            })
          }
        </tr>
        
        {/* FUNCIONES ELEMENTALES */}
        <tr className="FunctionTable__row" >
          <Td rowSpan={ functions.length + 1 } className="FunctionTable__vertical-header" >Funciones Elemetales</Td>
        </tr>
        {
          functions.map((funcType, funcTypeIndex) => {
            return (
              <tr key={ funcTypeIndex } className="FunctionTable__row" >
                { 
                  funcType.map((func, funcIndex) => {
                    return (
                      <Td key={ funcIndex } className="FunctionTable__cell" >
                        <FunctionButton func={ func } onClick={ handleFunctionButtonClick } />
                      </Td>
                    );
                  }) 
                }
              </tr>
            );
          })
        }
      </tbody>
    </Table>
  );
}

FunctionTable.displayName = 'FunctionTable';

export default FunctionTable;
