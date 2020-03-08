import React, { Component } from 'react';
import "antd/dist/antd.css";
import './ListComponent.css'
import { List, Avatar, Icon } from "antd";
// import Paper from '@material-ui/core/Paper';


const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }

    componentWillMount() {
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: "http://ant.design",
                title: `ant design part ${i}`,
                avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
            });
        }
        this.setState({
            listData: listData
        })

    }

    render() {
        console.log(this.state.listData);
        const { listData } = this.state;
        return (
            <>

                <List
                    itemLayout="vertical"
                    size="large"
                    style={{ padding: '0px 25px 0px 25px' }}
                    // pagination={{
                    //   onChange: page => {
                    //     console.log(page);
                    //   },
                    //   pageSize: 3,
                    // }}
                    dataSource={listData}
                    // footer={
                    //   <div>
                    //     <b>ant design</b> footer part
                    //   </div>
                    // }
                    renderItem={item => (
                        // <Paper style = {{marginBottom : 15}}>
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                <IconText type="message" text="2" key="list-vertical-message" />
                            ]}
                        // extra={
                        //     <img
                        //         width={272}
                        //         alt="logo"
                        //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        //     />
                        // }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            <div className = 'content-layout'>
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                                <div style = {{marginLeft : 15}}>
                                    {item.content}
                                </div>
                            </div>
                        </List.Item>
                        // {/* </Paper> */}

                    )}
                />
            </>
        )
    }
}

export default ListComponent;