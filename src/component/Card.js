import React from 'react'
import {Card, Icon} from 'antd'
export default (props)=>{
    const {name,fork,star,url} =props;
    return (
        <Card title={name}
              extra={<a target="_blank" href={url}><Icon type="github" style={{fontSize: 20, color: '#252525'}}/></a>}
              bordered={false} style={{width: 300,margin:'2% 2%'}}>
            <div className="fork-star-github">
                <div className="icon-gitnaja">
                    <Icon type="star"/> {star}
                </div>
                <div className="icon-gitnaja">
                    <Icon type="fork"/> {fork}
                </div>
            </div>
        </Card>
    )
}