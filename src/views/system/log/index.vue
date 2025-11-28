<!-- 角色管理页面 -->
<template>
  <div class="art-full-height">
    <RoleSearch
      v-show="showSearchBar"
      v-model="searchForm"
      @search="handleSearch"
      @reset="resetSearchParams"
    ></RoleSearch>

    <ElCard
      class="art-table-card"
      shadow="never"
      :style="{ 'margin-top': showSearchBar ? '12px' : '0' }"
    >
      <ArtTableHeader
        v-model:columns="columnChecks"
        v-model:showSearchBar="showSearchBar"
        :loading="loading"
        @refresh="refreshData"
      >
      </ArtTableHeader>

      <!-- 表格 -->
      <ArtTable
        :loading="loading"
        :data="data"
        :columns="columns"
        :pagination="pagination"
        @pagination:size-change="handleSizeChange"
        @pagination:current-change="handleCurrentChange"
      >
      </ArtTable>
    </ElCard>
  </div>
</template>

<script setup lang="ts">
  import { useTable } from '@/hooks/core/useTable'
  import { fetchGetLogList } from '@/api/system-manage'
  import { ElTag } from 'element-plus'

  defineOptions({ name: 'Log' })

  const {
    columns,
    columnChecks,
    data,
    loading,
    pagination,
    handleSizeChange,
    handleCurrentChange,
    refreshData
  } = useTable({
    // 核心配置
    core: {
      apiFn: fetchGetLogList,
      apiParams: {
        page: 1,
        size: 20
      },
      columnsFactory: () => [
        {
          prop: 'dateCreated',
          label: '发生时间',
          width: 180
        },
        {
          prop: 'action',
          label: '操作',
          minWidth: 60
        },
        {
          prop: 'username',
          label: '操作账号',
          minWidth: 120
        },
        {
          prop: 'ip',
          label: '操作IP',
          minWidth: 120
        },
        {
          prop: 'success',
          label: '结果',
          minWidth: 60,
          formatter: (row) => {
            const statusConfig = row.success
              ? { type: 'success', text: '成功' }
              : { type: 'danger', text: '失败' }
            return h(
              ElTag,
              { type: statusConfig.type as 'success' | 'danger' },
              () => statusConfig.text
            )
          }
        },
        {
          prop: 'module',
          label: '模块',
          minWidth: 120
        },
        {
          prop: 'httpMethod',
          label: '请求方法',
          minWidth: 70
        },
        {
          prop: 'uri',
          label: '请求URI',
          minWidth: 150,
          showOverflowTooltip: true
        },
        {
          prop: 'reqParams',
          label: '请求参数',
          minWidth: 150,
          showOverflowTooltip: true
        },
        {
          prop: 'durationMs',
          label: '耗时(毫秒)',
          minWidth: 70
        }
      ]
    }
  })
</script>
