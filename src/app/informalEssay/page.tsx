"use client";

import React, { useState, useEffect } from 'react';
import { Button, Input, Card, Space } from 'antd';
import Api from '../../api/index';
import './page.css';

const { TextArea } = Input;

export default function Index() {
    const [text, setText] = useState('');
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        getList();
        setList(['123123123132', 'asycvasuyash', 'ayisuiashuzhj']);
    }, []);

    const getList = async () => {
        const data = await Api('/api/test');
        console.log(data);
    }

    const changeText = (e: any) => {
        setText(e.target.value);
    };

    const add = () => {
        console.log(text);
    };

    return (
        <div style={{ padding: '0 20px' }}>
            <Button onClick={add}>新增</Button>

            <TextArea style={{ display: 'flex', margin: '16px 0' }} value={text} onChange={changeText} />
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                {
                    list.map(item => {
                        return <Card key={item}>
                            <p>{item}</p>
                        </Card>
                    })
                }
            </Space>
        </div>
    );
};