import React from 'react';
import {Button,Form,Table} from 'antd';
class Index extends React.Component{
  render(){
    console.log(this.props);
    const {
      data:{data,pagination},
      field:{columns,page},
      onChange,
      loading
    } = this.props;
    const tableColumns = Object.keys(columns).map(item => { 
      var obj = { 
        title:columns[item].label,
        dataIndex:item,
        key:item
      };
      if(columns[item].render){
        obj.render = columns[item].render;
      }
      return obj;
    });
    const pageProps= { 
      ...page,
      onChange:onChange,
      current:pagination.page,
      total:pagination.total
    }
    return(
      <div>
        <Table 
          columns={tableColumns}
          dataSource={data}
          pagination={pageProps}
          loading={loading}
        />
      </div>
    );
  }
}

export default Index;