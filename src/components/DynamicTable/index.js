import React from 'react';
import propTypes from 'prop-types';
import { Table, Td, Th } from 'components/common';

function DynamicTable({ data, columns, className, ...rest }) {

  return (
    <Table className={ className } { ...rest } >
      <thead>
        <tr>
          {
            columns?.map(column => {
              return (
                <Th className="Table__cell-header" key={ column.key } >
                  { column.text }
                </Th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data?.map((row, rowIndex) => {
            return (
              <tr key={ rowIndex } >
                {
                  columns.map((column, cellIndex) => {
                    return (
                      <Td className="Table__cell" key={ cellIndex } >
                        {
                          column.formatter?
                            column.formatter(row[column.key], cellIndex, row, rowIndex)
                          :
                            row[column.key]
                        }
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

DynamicTable.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  columns: propTypes.arrayOf(propTypes.shape({
    key: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    formatter: propTypes.func
  })).isRequired
};

DynamicTable.displayName = 'DynamicTable';

export default DynamicTable;
