import React from 'react'
import {useTable, useSortBy, usePagination, useRowSelect} from 'react-table'
import {PageWithText, Page} from '../pagination'

const IndeterminateCheckbox = React.forwardRef(
  ({indeterminate, ...rest}, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <input
        type="checkbox"
        ref={resolvedRef}
        {...rest}
        className="form-checkbox h-4 w-4"
      />
    )
  }
)

const Datatable = ({columns, data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: {pageIndex, pageSize, selectedRowIds}
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 0, pageSize: 10}
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({getToggleAllRowsSelectedProps}) => (
            <>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({row}) => (
            <>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </>
          )
        },
        ...columns
      ])
    }
  )

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="flex flex-row items-center justify-start">
                    <span>{column.render('Header')}</span>
                    {/* Add a sort direction indicator */}
                    <span className="ltr:ml-auto rtl:mr-auto">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <icon className="icon-arrow-down text-xxs" />
                        ) : (
                          <icon className="icon-arrow-up text-xxs" />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="flex flex-row items-center justify-between my-4">
        <div className="flex flex-wrap items-center justify-start children-x-2 pagination">
          {pageIndex !== 0 && (
            <PageWithText
              onClick={() => gotoPage(0)}
              color="text-default">
              First
            </PageWithText>
          )}
          {canPreviousPage && (
            <PageWithText
              onClick={() => previousPage()}
              color="text-default">
              Previous
            </PageWithText>
          )}
          {canNextPage && (
            <PageWithText
              onClick={() => nextPage()} disabled={!canNextPage}
              color="text-default">
              Next
            </PageWithText>
          )}
          {pageIndex !== pageCount - 1 && (
            <PageWithText
              onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
              color="text-default">
              Last
            </PageWithText>
          )}
        </div>

        <span>
          Page{' '}
          <b>
            {pageIndex + 1} of {pageOptions.length}
          </b>{' '}
        </span>

        <select
          className="form-select text-sm"
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}>
          {[10, 25, 50, 100].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Datatable
