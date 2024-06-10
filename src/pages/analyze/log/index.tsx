import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components'
import { Descriptions } from 'antd'

function Log() {
  const content = (
    <Descriptions size="small" column={2}>
      <Descriptions.Item label="创建人">张三</Descriptions.Item>
      <Descriptions.Item label="联系方式">
        <a>421421</a>
      </Descriptions.Item>
      <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
      <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
      <Descriptions.Item label="备注">
        中国浙江省杭州市西湖区古翠路
      </Descriptions.Item>
    </Descriptions>
  )

  return (
    // <PageContainer fixedHeader content={content}>
    //   <ProCard
    //     direction="column"
    //     ghost
    //     gutter={[0, 16]}
    //     style={{
    //       height: '200vh',
    //     }}
    //   >
    //     <ProCard style={{ height: 200 }} />
    //     <ProCard gutter={16} ghost style={{ height: 200 }}>
    //       <ProCard colSpan={16} />
    //       <ProCard colSpan={8} />
    //     </ProCard>
    //   </ProCard>
    // </PageContainer>
    <PageContainer
      // token={{
      //   paddingBlockPageContainerContent: 16,
      //   paddingInlinePageContainerContent: 16,
      // }}
      pageHeaderRender={() => <div>hello</div>}
    >
      world
    </PageContainer>
  )
}

export default Log
