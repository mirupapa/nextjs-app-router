'use client'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { Detail } from '~/app/listAndDetail/Detail'
import { mockListAndDetailData } from '~/app/listAndDetail/mockListAndDetailData'
import { User } from '~/app/listAndDetail/type'
import { css } from '../../../../styled-system/css'

const columnHelper = createColumnHelper<User>()

const StyledCell = ({ children }: { children: React.ReactNode }) => (
  <div
    className={css({
      px: '12px',
    })}
  >
    {children}
  </div>
)

const columns = [
  columnHelper.accessor('username', {
    cell: (info) => <StyledCell>{info.renderValue()}</StyledCell>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('birthdate', {
    cell: (info) => (
      <StyledCell>{dayjs(info.renderValue()).format('YYYY-MM-DD')}</StyledCell>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('email', {
    cell: (info) => <StyledCell>{info.renderValue()}</StyledCell>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('avatar', {
    cell: (info) => (
      <StyledCell>
        <img
          className={css({
            w: '50px',
            h: '50px',
          })}
          src={info.getValue()}
        />
      </StyledCell>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('registeredAt', {
    cell: (info) => (
      <StyledCell>{dayjs(info.renderValue()).format('YYYY-MM-DD')}</StyledCell>
    ),
    footer: (info) => info.column.id,
  }),
]

export default function Page({ params }: { params: { slug: string[] } }) {
  const detailId = params.slug?.[0]

  const table = useReactTable({
    data: mockListAndDetailData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const push = useRouter().push

  return (
    <div
      className={css({
        position: 'relative',
        w: '100%',
      })}
    >
      <div
        className={css({
          height: 'calc(100% - 500px)',
          p: '12px',
          overflowY: 'auto',
        })}
      >
        <table
          className={css({
            border: '1px solid lightgray',
          })}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => push(`/listAndDetail/${row.original.id}`)}
                className={css({
                  cursor: 'pointer',
                })}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={css({
          position: 'absolute',
          right: 0,
          top: 0,
        })}
      >
        <Detail detailId={detailId} />
      </div>
    </div>
  )
}
