'use client'

import { animated, useSpring } from '@react-spring/web'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { position, x } from '@xstyled/styled-components'
import { info, table } from 'console'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { Detail } from '~/app/listAndDetail/Detail'
import { mockListAndDetailData } from '~/app/listAndDetail/mockListAndDetailData'
import { User } from '~/app/listAndDetail/type'

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('username', {
    cell: (info) => <x.div px="12px">{info.renderValue()}</x.div>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('birthdate', {
    cell: (info) => (
      <x.div px="12px">{dayjs(info.renderValue()).format('YYYY-MM-DD')}</x.div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('email', {
    cell: (info) => <x.div px="12px">{info.renderValue()}</x.div>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('avatar', {
    cell: (info) => (
      <x.div px="12px">
        <x.img w="50px" h="50px" src={info.getValue()} />
      </x.div>
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('registeredAt', {
    cell: (info) => (
      <x.div px="12px">{dayjs(info.renderValue()).format('YYYY-MM-DD')}</x.div>
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
    <x.div position="relative" w="100%">
      <x.div h="calc(100vh - 50px)" p="12px" overflowY="auto">
        <x.table border="1px solid lightgray">
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
              <x.tr
                key={row.id}
                onClick={() => push(`/listAndDetail/${row.original.id}`)}
                cursor="pointer"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </x.tr>
            ))}
          </tbody>
        </x.table>
      </x.div>
      <x.div position="absolute" right={0} top={0}>
        <Detail detailId={detailId} />
      </x.div>
    </x.div>
  )
}
